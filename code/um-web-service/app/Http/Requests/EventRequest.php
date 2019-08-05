<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class EventRequest extends FormRequest
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
            'title' => 'required|max:255',
            'cover_image' => 'required_without:cover_image_id|dimensions:min_width=100,min_height=100|mimes:jpeg,png,jpg,gif|max:1024',
            'description' => 'required|max:5000',
            'category' => 'required',
            'coupon' => 'nullable',
            'location' => 'sometimes',
            'lat' => 'required_with:location',
            'lng' => 'required_with:location',
            'price' => 'sometimes|numeric',
            'start_time' => 'required',
            'end_time' => 'required',
            'sign_up_due_time' => 'required',
            'group_limit' => 'required|numeric',
            'is_top' => 'nullable',
            'is_front' => 'nullable',
        ];
    }
}