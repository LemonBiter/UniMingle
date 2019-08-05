<?php

if (! function_exists('data4Select')) {
    /**
     * build data for frontend [Select2 data format]
     *
     * ref: https://select2.org/data-sources/formats
     * @return array
     */
    function data4Select($model)
    {
        $all_data = $model::all();
        $results = array();
        foreach ($all_data as $d) {
            $tmp['id'] = $d->id;
            $tmp['text'] = $d->name;
            $results[] = $tmp;
        }

        return $results;
    }
}