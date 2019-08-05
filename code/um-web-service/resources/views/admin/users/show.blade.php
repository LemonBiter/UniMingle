@extends('layouts.admin-page')

@section('css')
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
        <h4 class="text-themecolor">Show User</h4>
    </div>
    <div class="col-md-7 align-self-center text-right">
        <div class="d-flex justify-content-end align-items-center">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('admin.home') }}">Home</a></li>
                <li class="breadcrumb-item active">Show User</li>
            </ol>
        </div>
    </div>
@stop

@section('content')
    <div class="row">
        <!-- Column -->
        <div class="col-lg-4 col-xlg-3 col-md-5">
            <div class="card">
                <div class="user-bg">
                    <img width="100%" alt="user" src="{{ $user->avatar->url }}" alt="unimingle-user-{{ $user->id }}">
                </div>
                <div class="card-body">
                    <div class="row text-center m-t-10">
                        <div class="col-md-12"><strong>Name</strong>
                            <p>{{ $user->name }}</p>
                        </div>
                    </div>
                    <hr>
                    <div class="row text-center m-t-10">
                        <div class="col-md-12"><strong>Email</strong>
                            <p>{{ $user->email }}</p>
                        </div>
                    </div>
                    <hr>
                    <div class="row text-center m-t-10">
                        <div class="col-md-12"><strong>Nationality</strong>
                            <p>{{ $user->nationality }}</p>
                        </div>
                    </div>
                    <hr>
                    <div class="row text-center m-t-10">
                        <div class="col-md-12"><strong>Student ID</strong>
                            <img width="100%" alt="user" src="{{ $user->studentIdImage->url }}" alt="unimingle-user-studentIdImage-{{ $user->id }}">
                        </div>
                    </div>
                    <hr>
                    <button type="button" onclick="location.href = '{{ route('admin.users.index') }}';"
                            class="btn btn-info waves-effect waves-light">Back
                    </button>
                </div>
            </div>
        </div>
    </div>
@stop

@push('js')
@endpush
