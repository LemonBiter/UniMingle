@extends('layouts.admin-page')

@section('css')
    <link href="{{ asset('dist/css/pages/file-upload.css') }}" rel="stylesheet">
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
        <h4 class="text-themecolor">Add User</h4>
    </div>
    <div class="col-md-7 align-self-center text-right">
        <div class="d-flex justify-content-end align-items-center">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('admin.home') }}">Home</a></li>
                <li class="breadcrumb-item active">Add User</li>
            </ol>
        </div>
    </div>
@stop

@section('content')
    <div class="row">
        <div class="col-sm-12">
            <div class="card">
                <div class="card-body">

                    @if(count($errors))
                        <div class="alert alert-danger">
                            <strong>Whoops!</strong> There were some problems with your input.
                            <br/>
                            <ul>
                                @foreach($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                    @endif

                    <form class="form-material" id="userForm" role="form" method="post"
                          action="{{ route('admin.users.store') }}" enctype="multipart/form-data">
                        @csrf
                        <div class="form-group {{ $errors->has('name') ? 'has-danger' : '' }}">
                            <div class="row">
                                <label class="col-md-12" for="name">Name
                                </label>
                                <div class="col-md-12">
                                    <input type="text" id="name" name="name" class="form-control"
                                           placeholder="enter full name" value="{{ old('name') }}">
                                </div>
                            </div>
                            <small class="form-control-feedback">{{ $errors->first('name') }}</small>
                        </div>
                        <div class="form-group {{ $errors->has('email') ? 'has-danger' : '' }}">
                            <div class="row">
                                <label class="col-md-12" for="email">Email
                                </label>
                                <div class="col-md-12">
                                    <input type="text" id="email" name="email" class="form-control"
                                           placeholder="enter email address" value="{{ old('email') }}">
                                </div>
                            </div>
                            <small class="form-control-feedback">{{ $errors->first('email') }}</small>
                        </div>
                        <div class="form-group {{ $errors->has('nationality') ? 'has-danger' : '' }}">
                            <div class="row">
                                <label class="col-md-12" for="nationality">Nationality
                                </label>
                                <div class="col-md-12">
                                    <input type="text" id="nationality" name="nationality" class="form-control"
                                           placeholder="enter nationality" value="{{ old('nationality') }}">
                                </div>
                            </div>
                            <small class="form-control-feedback">{{ $errors->first('nationality') }}</small>
                        </div>
                        <div class="form-group {{ $errors->has('password') ? 'has-danger' : '' }}">
                            <div class="row">
                                <label class="col-md-12" for="password">Password
                                </label>
                                <div class="col-md-12">
                                    <input type="password" id="password" name="password" class="form-control"
                                           placeholder="enter password" value="{{ old('password') }}">
                                </div>
                            </div>
                            <small class="form-control-feedback">{{ $errors->first('password') }}</small>
                        </div>
                        <div class="form-group {{ $errors->has('profile_image') ? 'has-danger' : '' }}">
                            <div class="row">
                                <label class="col-sm-12">Profile Image</label>
                                <div class="col-sm-12">
                                    <div class="fileinput fileinput-new" data-provides="fileinput">
                                        <div class="fileinput-preview img-thumbnail" data-trigger="fileinput"
                                             style="width: 200px; height: 150px; line-height: 150px;">
                                        </div>
                                        <div>
                                        <span class="btn btn-outline-secondary btn-file">
                                            <span class="fileinput-new">Select image</span>
                                            <span class="fileinput-exists">Change</span>
                                            <input type="file" name="profile_image">
                                        </span>
                                            <a href="#" class="btn btn-outline-secondary fileinput-exists"
                                               data-dismiss="fileinput">Remove</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <small class="form-control-feedback">{{ $errors->first('profile_image') }}</small>
                        </div>
                        <div class="form-group {{ $errors->has('studentId_image') ? 'has-danger' : '' }}">
                            <div class="row">
                                <label class="col-sm-12">Student ID Image</label>
                                <div class="col-sm-12">
                                    <div class="col-sm-12">
                                        <div class="fileinput fileinput-new" data-provides="fileinput">
                                            <div class="fileinput-preview img-thumbnail" data-trigger="fileinput"
                                                 style="width: 200px; height: 150px; line-height: 150px;">
                                            </div>
                                            <div>
                                        <span class="btn btn-outline-secondary btn-file">
                                            <span class="fileinput-new">Select image</span>
                                            <span class="fileinput-exists">Change</span>
                                            <input type="file" name="studentId_image">
                                        </span>
                                                <a href="#" class="btn btn-outline-secondary fileinput-exists"
                                                   data-dismiss="fileinput">Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <small class="form-control-feedback">{{ $errors->first('studentId_image') }}</small>
                        </div>
                        <button type="submit" class="btn btn-info waves-effect waves-light m-r-10">Submit</button>
                        <button type="button" onclick="location.href = '{{ route('admin.users.index') }}';"
                                class="btn btn-dark waves-effect waves-light">Cancel
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@stop

@push('js')
    <script src="{{ asset('dist/js/pages/jasny-bootstrap.js') }}"></script>
    <script src="{{ asset('vendor/inputmask/dist/min/jquery.inputmask.bundle.min.js') }}"></script>
    <script src="{{ asset('dist/js/pages/mask.init.js') }}"></script>
@endpush