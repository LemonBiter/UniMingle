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
        <h4 class="text-themecolor">Add Coupon</h4>
    </div>
    <div class="col-md-7 align-self-center text-right">
        <div class="d-flex justify-content-end align-items-center">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('admin.home') }}">Home</a></li>
                <li class="breadcrumb-item active">Add Coupon</li>
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

                    <form class="form-material" id="couponForm" role="form" method="post"
                          action="{{ route('admin.coupons.store') }}" enctype="multipart/form-data">
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

                        <div class="form-group {{ $errors->has('code') ? 'has-danger' : '' }}">
                            <div class="row">
                                <label class="col-md-12" for="code">Code
                                </label>
                                <div class="col-md-12">
                                    <input type="text" id="code" name="code" class="form-control"
                                           placeholder="enter code" value="{{ old('code') }}">
                                </div>
                            </div>
                            <small class="form-control-feedback">{{ $errors->first('name') }}</small>
                        </div>

                        <div class="form-group {{ $errors->has('description') ? 'has-danger' : '' }}">
                            <div class="row">
                                <label class="col-md-12" for="description">Description
                                </label>
                                <div class="col-md-12">
                                    <textarea class="form-control " id="description"
                                              name="description" rows="5">{{ old('description') }}</textarea>
                                </div>
                            </div>
                            <small class="form-control-feedback">{{ $errors->first('description') }}</small>
                        </div>

                        <div class="form-group {{ $errors->has('business') ? 'has-danger' : '' }}">
                            <div class="row">
                                <label class="col-md-12" for="business">Business
                                </label>
                                <div class="col-md-12">
                                    <select data-placeholder="Select a business" class="form-control select2_business"
                                            style="width: 100%;" id="business" name="business">
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                            <small class="form-control-feedback">{{ $errors->first('business') }}</small>
                        </div>

                        <div class="form-group {{ $errors->has('discountType') ? 'has-danger' : '' }}">
                            <div class="row">
                                <label class="col-md-12" for="discountType">Discount Type
                                </label>
                                <div class="col-md-12">
                                    <select data-placeholder="Select a discount type"
                                            class="form-control select2_discountType"
                                            style="width: 100%;" id="discountType" name="discountType">
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                            <small class="form-control-feedback">{{ $errors->first('discountType') }}</small>
                        </div>

                        <div class="form-group {{ $errors->has('discount') ? 'has-danger' : '' }}">
                            <div class="row">
                                <label class="col-md-12" for="discount">Discount
                                </label>
                                <div class="col-md-12">
                                    <input type="text" id="discount" name="discount" class="form-control"
                                           placeholder="enter discount" value="{{ old('discount') }}">
                                </div>
                            </div>
                            <small class="form-control-feedback">{{ $errors->first('price') }}</small>
                        </div>

                        <div class="form-group {{ $errors->has('start_time') ? 'has-danger' : '' }}">
                            <div class="row">
                                <label class="col-md-12" for="start_time">Start Time
                                </label>
                                <div class="col-md-12">
                                    <input type="text" id="start_time" name="start_time" value="{{ old('start_time') }}"
                                           class="form-control" placeholder="select a time">
                                </div>
                            </div>
                            <small class="form-control-feedback">{{ $errors->first('start_time') }}</small>
                        </div>

                        <div class="form-group {{ $errors->has('end_time') ? 'has-danger' : '' }}">
                            <div class="row">
                                <label class="col-md-12" for="end_time">End Time
                                </label>
                                <div class="col-md-12">
                                    <input type="text" id="end_time" name="end_time" value="{{ old('end_time') }}"
                                           class="form-control" placeholder="select a time">
                                </div>
                            </div>
                            <small class="form-control-feedback">{{ $errors->first('end_time') }}</small>
                        </div>

                        <div class="form-group {{ $errors->has('total_usage') ? 'has-danger' : '' }}">
                            <div class="row">
                                <label class="col-md-12" for="total_usage">Total usage
                                </label>
                                <div class="col-md-12">
                                    <input type="text" id="total_usage" name="total_usage" class="form-control"
                                           placeholder="enter total usage" value="{{ old('total_usage') }}">
                                </div>
                            </div>
                            <small class="form-control-feedback">{{ $errors->first('total_usage') }}</small>
                        </div>

                        <button type="submit" class="btn btn-info waves-effect waves-light m-r-10">Submit</button>
                        <button type="button" onclick="location.href = '{{ route('admin.coupons.index') }}';"
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

    <script>
        $(document).ready(function () {
            // Material Date picker
            $('#start_time').bootstrapMaterialDatePicker({format: 'YYYY-MM-DD HH:mm'});
            $('#end_time').bootstrapMaterialDatePicker({format: 'YYYY-MM-DD HH:mm'});

            let select2_business = $('.select2_business').select2({
                allowClear: true,
                data: {!! json_encode($businesses)!!}
            });

            @if(old('business'))
            select2_business.val({!! old('business') !!}).trigger('change');
            @endif

            let select2_discountType = $('.select2_discountType').select2({
                    allowClear: true,
                    data: {!! json_encode($discountTypes)!!}
            });

            @if(old('discountType'))
            select2_discountType.val({!! old('discountType') !!}).trigger('change');
            @endif
        });
        </script>
@endpush