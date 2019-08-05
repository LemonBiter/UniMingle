<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|max:255',
            'email' => ['required', 'email', Rule::unique('users', 'email')->ignore($this->id)],
            'password' => 'sometimes|min:6|max:255',
            'nationality' => 'required',
            'profile_image' => 'sometimes|mimes:jpeg,png,jpg,gif|max:1024',
            'studentId_image' => 'sometimes|mimes:jpeg,png,jpg,gif|max:1024',
            'description' => 'nullable',
        ];
    }
}