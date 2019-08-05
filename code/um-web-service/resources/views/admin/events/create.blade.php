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
        <h4 class="text-themecolor">Add Event</h4>
    </div>
    <div class="col-md-7 align-self-center text-right">
        <div class="d-flex justify-content-end align-items-center">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('admin.home') }}">Home</a></li>
                <li class="breadcrumb-item active">Add Event</li>
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

                    <form class="form-material" id="eventForm" role="form" method="post"
                          action="{{ route('admin.events.store') }}" enctype="multipart/form-data">
                        @csrf
                        <div class="form-group {{ $errors->has('title') ? 'has-danger' : '' }}">
                            <div class="row">
                                <label class="col-md-12" for="name">Title
                                </label>
                                <div class="col-md-12">
                                    <input type="text" id="title" name="title" class="form-control"
                                           placeholder="enter title" value="{{ old('title') }}">
                                </div>
                            </div>
                            <small class="form-control-feedback">{{ $errors->first('title') }}</small>
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


                        <div class="form-group {{ $errors->has('category') ? 'has-danger' : '' }}">
                            <div class="row">
                                <label class="col-md-12" for="category">Category
                                </label>
                                <div class="col-md-12">
                                    <select data-placeholder="Select a category" class="form-control select2_category"
                                            style="width: 100%;" id="category" name="category">
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                            <small class="form-control-feedback">{{ $errors->first('category') }}</small>
                        </div>

                        <!--Coupons selection-->
                        <div class="form-group {{ $errors->has('coupon') ? 'has-danger' : '' }}">
                            <div class="row">
                                <label class="col-md-12" for="coupon">Coupon select (Optional)
                                </label>
                                <div class="col-md-12">
                                    <select data-placeholder="Select a coupon" class="form-control select2_coupon"
                                            style="width: 100%;" id="coupon" name="coupon">
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                            <small class="form-control-feedback">{{ $errors->first('coupon') }}</small>
                        </div>

                        <div class="form-group {{ $errors->has('location') ? 'has-danger' : '' }}">
                            <div class="row">
                                <label class="col-md-12" for="location">Location
                                </label>
                                <div class="col-md-12">
                                    <input type="text" id="location" name="location" class="form-control"
                                           placeholder="enter location" value="{{ old('location') }}">
                                    <input type="hidden" name="lat" id="lat" value="{{ old('lat') }}">
                                    <input type="hidden" name="lng" id="lng" value="{{ old('lng') }}">
                                </div>
                            </div>
                            <small class="form-control-feedback">{{ $errors->first('location') }}</small>
                        </div>

                        <div class="form-group {{ $errors->has('price') ? 'has-danger' : '' }}">
                            <div class="row">
                                <label class="col-md-12" for="price">Price
                                </label>
                                <div class="col-md-12">
                                    <input type="text" id="price" name="price" class="form-control"
                                           placeholder="enter price" value="{{ old('price') }}">
                                </div>
                            </div>
                            <small class="form-control-feedback">{{ $errors->first('price') }}</small>
                        </div>

                        <div class="form-group {{ $errors->has('start_time') ? 'has-danger' : '' }}">
                            <div class="row">
                                <label class="col-md-12" for="start_time">Start Time
                                </label>
                                <div class="col-md-12">
                                    <input type="text" id="start_time" name="start_time"  value="{{ old('start_time') }}" class="form-control" placeholder="select a time">
                                </div>
                            </div>
                            <small class="form-control-feedback">{{ $errors->first('start_time') }}</small>
                        </div>

                        <div class="form-group {{ $errors->has('end_time') ? 'has-danger' : '' }}">
                            <div class="row">
                                <label class="col-md-12" for="end_time">End Time
                                </label>
                                <div class="col-md-12">
                                    <input type="text" id="end_time" name="end_time" value="{{ old('end_time') }}" class="form-control" placeholder="select a time">
                                </div>
                            </div>
                            <small class="form-control-feedback">{{ $errors->first('end_time') }}</small>
                        </div>

                        <div class="form-group {{ $errors->has('sign_up_due_time') ? 'has-danger' : '' }}">
                            <div class="row">
                                <label class="col-md-12" for="sign_up_due_time">Sign Up Due Time
                                </label>
                                <div class="col-md-12">
                                    <input type="text" id="sign_up_due_time" name="sign_up_due_time" value="{{ old('sign_up_due_time') }}" class="form-control"
                                           placeholder="select a time">
                                </div>
                            </div>
                            <small class="form-control-feedback">{{ $errors->first('sign_up_due_time') }}</small>
                        </div>

                        <div class="form-group {{ $errors->has('group_limit') ? 'has-danger' : '' }}">
                            <div class="row">
                                <label class="col-md-12" for="group_limit">Group Limit
                                </label>
                                <div class="col-md-12">
                                    <input type="text" id="group_limit" name="group_limit" class="form-control"
                                           placeholder="enter group user limit" value="{{ old('group_limit') }}">
                                </div>
                            </div>
                            <small class="form-control-feedback">{{ $errors->first('group_limit') }}</small>
                        </div>

                        <div class="form-group {{ $errors->has('is_top') ? 'has-danger' : '' }}">
                            <div class="row">
                                <label class="col-md-12" for="is_top">Set Top
                                </label>
                                <div class="col-md-12">
                                    <input type="checkbox" name="is_top" value="{{ old('is_top', 0) }}" {{ old('is_top') == '1' ? 'checked' : '' }} class="switch_is_top">
                                </div>
                            </div>
                            <small class="form-control-feedback">{{ $errors->first('is_top') }}</small>
                        </div>

                        <div class="form-group {{ $errors->has('is_front') ? 'has-danger' : '' }}">
                            <div class="row">
                                <label class="col-md-12" for="is_front">Set Front
                                </label>
                                <div class="col-md-12">
                                    <input type="checkbox" name="is_front" value="{{ old('is_front', 0) }}" {{ old('is_front') == '1' ? 'checked' : '' }} class="switch_is_front">
                                </div>
                            </div>
                            <small class="form-control-feedback">{{ $errors->first('is_front') }}</small>
                        </div>

                        <button type="submit" class="btn btn-info waves-effect waves-light m-r-10">Submit</button>
                        <button type="button" onclick="location.href = '{{ route('admin.events.index') }}';"
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
            $('#sign_up_due_time').bootstrapMaterialDatePicker({format: 'YYYY-MM-DD HH:mm'});

            let ele_is_top = document.querySelector('.switch_is_top');
            new Switchery(ele_is_top);

            let ele_is_front = document.querySelector('.switch_is_front');
            new Switchery(ele_is_front);

            ele_is_top.onchange = function() {
                ele_is_top.value = ele_is_top.checked ? 1: 0;
            };

            ele_is_front.onchange = function() {
                ele_is_front.value = ele_is_front.checked ? 1: 0;
            };

            let select2_category = $('.select2_category').select2({
                allowClear: true,
                data: {!! json_encode($categories)!!}
            });

            @if(old('category'))
            select2_category.val({!! old('category') !!}).trigger('change');
            @endif

            // select2_category on select handler
            $('.select2_category').on('select2:select', function (e) {
                let data = e.params.data;
                let selected_category_id = data.id;
                // ajax request to change select dataset
                $('#coupon').val('');
                $('#coupon').select2({
                    ajax: {
                        delay: 250, // wait 250 milliseconds before triggering the request
                        url: '/events/getCoupons/' + selected_category_id,
                        dataType: 'json',
                    }
                });

                // remote event handle
                if (data.text == 'Remote') {
                    $('#coupon').prop('disabled', true);
                    /******************* location *******************/
                    document.getElementById("location").value = "";
                    document.getElementById("location").setAttribute('readonly','');
                    /******************* price *******************/
                    document.getElementById("price").value = 0;
                    document.getElementById("price").setAttribute('readonly','');
                }
            });
        });


        /*********************************************   Google Map API   *****************/

        function initAutocomplete() {
            // Create the autocomplete object, restricting the search predictions to
            // geographical location types
            // country is australia by default
            // https://latitudelongitude.org/au/
            const defaultBounds = new google.maps.LatLngBounds(
                new google.maps.LatLng(-43.00311, 113.6594),
                new google.maps.LatLng(-12.46113 , 153.61194));

            const input = document.getElementById('location');
            const options = {
                bounds: defaultBounds,
                types: ['geocode'],
                componentRestrictions: {country: 'au'}
            };

            let autocomplete = new google.maps.places.Autocomplete(input, options);

            const geocoder = new google.maps.Geocoder;

            // Set the data fields to return when the user selects a place.
            // Avoid paying for data that you don't need by restricting the set of
            // place fields
            autocomplete.setFields(['place_id', 'geometry']);

            // When the user selects an address from the drop-down, populate the
            // address fields in the form.
            autocomplete.addListener('place_changed', function () {
                const place = autocomplete.getPlace();
                geocoder.geocode({'placeId': place.place_id}, function (results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                        const position = results[0].geometry.location;
                        const lat = position.lat();
                        const lng = position.lng();
                        setLocationCoordinates(lat, lng);
                    }
                });

                if (!place.geometry) {
                    window.alert("No details available for input: '" + place.name + "'");
                    return;
                }
            });
        }

        function setLocationCoordinates(lat, lng) {
            const latitudeField = document.getElementById("lat");
            const longitudeField = document.getElementById("lng");
            latitudeField.value = lat;
            longitudeField.value = lng;
            console.log('latitudeField.value:'+latitudeField.value);
            console.log('longitudeField.value:'+longitudeField.value);
        }

    </script>

    <!-- Google Map API -->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDrewyRhpTEQ7DZI6ih0tX_W1gCXLn9O4M&libraries=places&callback=initAutocomplete"
            async defer></script>

@endpush