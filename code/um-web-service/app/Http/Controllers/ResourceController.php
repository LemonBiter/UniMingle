<?php

namespace App\Http\Controllers;

use App\Models\Resource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Http\Requests\ResourceRequest;
use Response;

class ResourceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\ResourceRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(ResourceRequest $request)
    {
        // handle file upload
        if ($request->hasFile('file')) {
            Log::info("file request ");
            $res = new Resource();

            $tmpFile = $request->file('file');
            $fileName = $tmpFile->getClientOriginalName();

            $file_extension = $tmpFile->getClientOriginalExtension();
            $category = $request['category'];

            // double check $category in case that the passed category value was lost
            if (empty($category)) {
                // be consistent with the validation rules (ResourceRequest)
                $image_exts = array('gif', 'png', 'jpg', 'jpeg');
                if (in_array($file_extension, $image_exts)) {
                    $category = "image";
                }

                // be consistent with the validation rules (ResourceRequest)
                $file_exts = array('doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt', 'pdf');
                if (in_array($file_extension, $file_exts)) {
                    $category = "file";
                }
            }

            $store_dir = "";
            if ($category == "image") {
                // put images in public dirs
                $store_dir = '/public/' . $category . 's/' . now()->year;
            }
            if ($category == "file") {
                $store_dir = $category . 's/' . now()->year;
            }

            $res->name = $fileName;
            $res->content_id = $request['content_id'];
            $res->category = $request['category'];
            $res->caption = $request['caption'];
            $res->file_extension = $file_extension;
            $res->description = $request['description'];

            $timestamp = now()->format('YmdHis') . now()->micro;
            $res->path = $tmpFile->storeAs($store_dir, $res->content_id . '_' . $timestamp . '.' . $file_extension);
            Log::info('store file: ' . $res->path);
            $res->url = Resource::getURLByPath($res->path);

            $res->save();

            Log::info("create resource " . $res->id);
            return response()->json($res);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Resource $resource
     * @return \Illuminate\Http\Response
     */
    public function show(Resource $resource)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Resource $resource
     * @return \Illuminate\Http\Response
     */
    public function edit(Resource $resource)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Models\Resource $resource
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Resource $resource)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Resource $resource
     * @return \Illuminate\Http\Response
     */
    public function destroy(Resource $resource)
    {
        //
    }
}
