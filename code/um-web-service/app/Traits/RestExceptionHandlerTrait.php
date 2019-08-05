<?php

namespace App\Traits;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Illuminate\Auth\AuthenticationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

trait RestExceptionHandlerTrait
{

    /**
     * Creates a new JSON response based on exception type.
     *
     * @param Request $request
     * @param Exception $e
     * @return \Illuminate\Http\JsonResponse
     */
    protected function getJsonResponseForException(Request $request, Exception $e)
    {

        switch (true) {
            case $this->isNotFoundException($e):
                $retval = $this->notFound();
                break;
            case $this->isValidationException($e):
                $retval = $this->paramsInvalid($e->validator->getMessageBag());
                break;
            case $this->isAuthenticationException($e):
                $retval = $this->authenticationError($e->getMessage());
                break;
            default:
                $retval = $this->badRequest();
        }

        return $retval;
    }

    /**
     * Returns json response for generic bad request.
     *
     * @param string $message
     * @param int $statusCode
     * @return \Illuminate\Http\JsonResponse
     */
    protected function badRequest($message = 'Bad request', $statusCode = 400)
    {
        return $this->jsonResponse(['error' => $message], $statusCode);
    }

    /**
     * Returns json response for not found exception.
     *
     * @param string $message
     * @param int $statusCode
     * @return \Illuminate\Http\JsonResponse
     */
    protected function notFound($message = 'Not found', $statusCode = 404)
    {
        return $this->jsonResponse(['statusCode' => $statusCode, 'error' => $message], $statusCode);
    }

    /**
     * Returns json response for authenticationError.
     *
     * @param string $message
     * @param int $statusCode
     * @return \Illuminate\Http\JsonResponse
     */
    protected function authenticationError($message = 'Authentication error,', $statusCode = 401)
    {
        return $this->jsonResponse(['statusCode' => $statusCode, 'error' => $message], $statusCode);
    }

    /**
     * Returns json response for Eloquent model not found exception.
     *
     * @param string $message
     * @param int $statusCode
     * @return \Illuminate\Http\JsonResponse
     */
    protected function paramsInvalid($message = 'Params invalid', $statusCode = 422)
    {
        return $this->jsonResponse([
            'statusCode' => $statusCode,
            'error' => [
                "type" => "params_invalid",
                "message" => $message
            ]
        ], $statusCode);
    }

    /**
     * Returns json response.
     *
     * @param array|null $payload
     * @param int $statusCode
     * @return \Illuminate\Http\JsonResponse
     */
    protected function jsonResponse(array $payload = null, $statusCode = 404)
    {
        $payload = $payload ?: [];

        return response()->json($payload, $statusCode);
    }

    /**
     * Determines if the given exception is a NotFoundHttpException.
     *
     * @param Exception $e
     * @return bool
     */
    protected function isNotFoundException(Exception $e)
    {
        return $e instanceof NotFoundHttpException;
    }

    /**
     * Determines if the given exception is a ValidationException.
     *
     * @param Exception $e
     * @return bool
     */
    protected function isValidationException(Exception $e)
    {
        return $e instanceof ValidationException;
    }

    /**
     * Determines if the given exception is an AuthenticationException.
     *
     * @param Exception $e
     * @return bool
     */
    protected function isAuthenticationException(Exception $e)
    {
        return $e instanceof AuthenticationException;
    }

}