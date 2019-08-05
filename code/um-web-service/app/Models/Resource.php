<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Image;

class Resource extends Model
{

    public static function boot()
    {
        parent::boot();

        // Setup event bindings...
        Resource::deleting(function ($res) {
            // delete from file system
            Resource::deleteRes($res->path);
        });
    }

    /**
     * Get the posts that owns the resource.
     */
    public function posts()
    {
        return $this->belongsToMany(Post::class);
    }

    /**
     * Get the businessPartners that owns the resource.
     */
    public function businessPartners()
    {
        return $this->belongsToMany(BusinessPartner::class);
    }

    /**
     * Delete the given resource from file system
     *
     * @param String $file_path
     */
    public static function deleteRes($file_path)
    {
        // remove file
        if (!empty($file_path) && Storage::disk()->exists($file_path)) {
            Log::alert('delete file: ' . $file_path);
            Storage::delete($file_path);
        }
    }

    /**
     * Delete all unlinked files from file system
     */
    public static function deleteUnlinkedRes()
    {
        // housekeeping work
        $all_res = Resource::all();
        foreach ($all_res as $res) {
            if (empty($res->lesson())) {
                Log::info("housekeeping delete res_id " . $res->id);
                Resource::deleteRes($res->path);
                $res->delete();
            }
        }
    }

    public static function saveRes($file, array $meta)
    {
        Log::info("file request ");
        $res = new Resource();

        $fileName = $file->getClientOriginalName();

        $file_extension = $file->getClientOriginalExtension();

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
            $store_dir = 'public/' . $category . 's/' . now()->year;
        }
        if ($category == "file") {
            $store_dir = $category . 's/' . now()->year;
        }

        $res->name = $fileName;
        $res->file_extension = $file_extension;

        $res->content_id = $meta['content_id'];
        $res->category = $meta['category'];
        $res->caption = $meta['caption'];
        $res->description = $meta['description'];


        $timestamp = now()->format('YmdHis') . now()->micro;
        $new_file_name = $res->content_id . '_' . $timestamp . '.' . $file_extension;
        $store_file_path = $store_dir.'/'.$new_file_name;
        // Image Manipulation
        if ($category == "image" ) {
            if ($meta['image_resize_enable']) {
                Log::info('image_resize_enable: ' . $meta['image_resize_enable']);
                // now you are able to resize the instance
                // open an image file
                $resize_file = Image::make($file);
                Log::info('image width: ' . $resize_file->width());
                Log::info('image height: ' . $resize_file->height());
                // Crop and resize combined
                $resize_file->fit(600);

                Log::info('Image store_dir: ' . $store_dir.' storage_path:'.storage_path($store_dir));
                Storage::disk('local')->makeDirectory($store_dir);
                $resize_file->save(storage_path('app/'.$store_file_path));
                $res->path = $store_file_path;
            }
            else {
                $res->path = $file->storeAs($store_dir, $new_file_name);
            }
        } else {
            $res->path = $file->storeAs($store_dir, $new_file_name);
        }

        Log::info('store file: ' . $res->path);
        $res->url = Resource::getURLByPath($res->path);

        $res->save();

        Log::info("create resource " . $res->id);

        return $res;
    }

    /**
     * get url by id
     */
    public static function getURL($id)
    {
        $res = Resource::find($id);
        $path = $res->path;
        return Resource::getURLByPath($path);
    }

    /**
     * get url by path
     */
    public static function getURLByPath($path)
    {
        $tmp = "public";
        if (substr($path, 0, strlen($tmp)) === $tmp) {
            $path = substr($path, strlen($tmp) + 1);
        }
        $url = Storage::url($path);

        return $url ? $url : "#";
    }
}
