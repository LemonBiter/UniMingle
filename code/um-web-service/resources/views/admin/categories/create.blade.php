@extends('layouts.admin-page')

@section('css')
    <link href="{{ asset('dist/css/pages/file-upload.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor/bootstrap-material-datetimepicker/css/bootstrap-material-datetimepicker.css') }}"
          rel="stylesheet">
    <link href="{{ asset('vendor/clockpicker/dist/jquery-clockpicker.min.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor/bootstrap-datepicker/bootstrap-datepicker.min.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor/switchery/dist/switchery.min.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor/select2/dist/css/select2.min.css') }}" rel="stylesheet">
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
        <h4 class="text-themecolor">Add Category</h4>
    </div>
    <div class="col-md-7 align-self-center text-right">
        <div class="d-flex justify-content-end align-items-center">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('admin.home') }}">Home</a></li>
                <li class="breadcrumb-item active">Add Category</li>
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

                    <form class="form-material" id="categoryForm" role="form" method="post"
                          action="{{ route('admin.categories.store') }}" enctype="multipart/form-data">
                        @csrf
                        <div class="form-group {{ $errors->has('name') ? 'has-danger' : '' }}">
                            <div class="row">
                                <label class="col-md-12" for="name">Name
                                </label>
                                <div class="col-md-12">
                                    <input type="text" id="name" name="name" class="form-control"
                                           placeholder="enter name" value="{{ old('name') }}">
                                </div>
                            </div>
                            <small class="form-control-feedback">{{ $errors->first('name') }}</small>
                        </div>

                        <div class="form-group {{ $errors->has('cover_image') ? 'has-danger' : '' }}">
                            <div class="row">
                                <label class="col-sm-12">Cover Image</label>
                                <div class="col-sm-12">
                                    <div class="fileinput fileinput-new" data-provides="fileinput">
                                        <div class="fileinput-preview img-thumbnail" data-trigger="fileinput"
                                             style="width: 200px; height: 150px; line-height: 150px;">
                                        </div>
                                        <div>
                                        <span class="btn btn-outline-secondary btn-file">
                                            <span class="fileinput-new">Select image</span>
                                            <span class="fileinput-exists">Change</span>
                                            <input type="file" name="cover_image">
                                        </span>
                                            <a href="#" class="btn btn-outline-secondary fileinput-exists"
                                               data-dismiss="fileinput">Remove</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <small class="form-control-feedback">{{ $errors->first('cover_image') }}</small>
                        </div>

                        <button type="submit" class="btn btn-info waves-effect waves-light m-r-10">Submit</button>
                        <button type="button" onclick="location.href = '{{ route('admin.categories.index') }}';"
                                class="btn btn-dark waves-effect waves-light">Cancel
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@stop

@push('js')
    <!-- Plugins for this page -->
    <script src="{{ asset('dist/js/pages/jasny-bootstrap.js') }}"></script>
    <script src="{{ asset('vendor/inputmask/dist/min/jquery.inputmask.bundle.min.js') }}"></script>
    <script src="{{ asset('dist/js/pages/mask.init.js') }}"></script>
    <script src="{{ asset('vendor/select2/dist/js/select2.full.min.js') }}"></script>
    <script src="{{ asset('vendor/switchery/dist/switchery.min.js') }}"></script>
    <script src="{{ asset('vendor/moment/moment.js') }}"></script>
    <script src="{{ asset('vendor/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.js') }}"></script>
    <script src="{{ asset('vendor/clockpicker/dist/jquery-clockpicker.min.js') }}"></script>
    <script src="{{ asset('vendor/bootstrap-datepicker/bootstrap-datepicker.min.js') }}"></script>
    <script src="{{ asset('vendor/timepicker/bootstrap-timepicker.min.js') }}"></script>
    <script src="{{ asset('vendor/bootstrap-select/bootstrap-select.min.js') }}"></script>
@endpush