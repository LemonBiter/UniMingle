@extends('layouts.admin-page')

@section('css')
    <link href="{{ asset('vendor/switchery/dist/switchery.min.css') }}" rel="stylesheet">
    <style>
        .fileinput-preview img {
            width: 200px;
            height: 150px;
            line-height: 150px;
        }
    </style>
@endsection

@section('content_header')
    <div class="col-md-5 align-self-center">
        <h4 class="text-themecolor">Show Category</h4>
    </div>
    <div class="col-md-7 align-self-center text-right">
        <div class="d-flex justify-content-end align-items-center">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('admin.home') }}">Home</a></li>
                <li class="breadcrumb-item active">Show Category</li>
            </ol>
        </div>
    </div>
@stop
@section('content')
    <div class="row">
        <div class="col-lg-8 col-xlg-9 col-md-7">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3 col-xs-6 border-right"><strong>Create Date</strong>
                            <br>
                            <p class="text-muted">{{ $category->getCreatedDate() }}</p>
                        </div>
                        <div class="col-md-3 col-xs-6 border-right"><strong>Last Update</strong>
                            <br>
                            <p class="text-muted">{{ $category->getUpdatedDate() }}</p>
                        </div>
                    </div>
                    <hr>

                    <h4 class="card-title p-b-10">Name</h4>
                    <p class="m-t-30">
                        {{ $category->name }}
                    </p>
                    <hr>

                    <h4 class="card-title p-b-10">Cover Image</h4>
                    <p class="m-t-30">
                        @if($category->coverImage)
                            <img src="{{ $category->coverImage->url }}" alt="unimingle-event-{{ $category->id }}" style="max-width: 320px;" >
                        @else
                            N/A
                        @endif
                    </p>
                    <hr>

                    <button type="button" onclick="location.href = '{{ route('admin.categories.index') }}';"
                            class="btn btn-info waves-effect waves-light">Back
                    </button>
                </div>
            </div>
        </div>
    </div>
@stop

@push('js')
    <script src="{{ asset('vendor/switchery/dist/switchery.min.js') }}"></script>
@endpush
