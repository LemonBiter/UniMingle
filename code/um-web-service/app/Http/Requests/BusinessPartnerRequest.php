<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class BusinessPartnerRequest extends FormRequest
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
            'logo' => 'required_without:logo_id|dimensions:min_width=100,min_height=100|mimes:jpeg,png,jpg,gif|max:1024',
            'description' => 'required|max:5000',
            'category' => 'required',
            'location' => 'sometimes',
            'lat' => 'required_with:location',
            'lng' => 'required_with:location',
            'phone' => 'nullable',
            'website' => 'nullable|url',
        ];
    }
}