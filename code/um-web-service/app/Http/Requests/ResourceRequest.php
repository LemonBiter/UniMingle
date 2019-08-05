<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ResourceRequest extends FormRequest
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
            'file' => 'required|mimes:jpeg,png,jpg,gif,doc,docx,xls,xlsx,ppt,pptx,txt,pdf|max:2048',
            'content_id' => 'required',
            'category' => 'required',
            'caption' => 'nullable',
            'description' => 'nullable',
        ];
    }
}