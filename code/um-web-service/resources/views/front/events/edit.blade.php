{{--@extends('layouts.admin-page')--}}
@extends('layouts.front-master')
@section('css')
    <link href="{{ asset('dist/css/pages/file-upload.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor/bootstrap-material-datetimepicker/css/bootstrap-material-datetimepicker.css') }}"
          rel="stylesheet">
    <link href="{{ asset('vendor/clockpicker/dist/jquery-clockpicker.min.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor/bootstrap-datepicker/bootstrap-datepicker.min.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor/select2/dist/css/select2.min.css') }}" rel="stylesheet">
    <style>
        .navigation {
            min-height: 1200px;
            background: url('{{ asset('images/eventInfo-bd.jpg') }}') no-repeat 40% 0px;
            background-size: cover;
        }

        .fileinput-preview img {
            width: 100%;
            height: 100%;
            line-height: 150px;
            border-radius: 1%;
            box-shadow: rgba(0, 0, 0, 0.4) 0 1px 3px;
        }
    </style>
@endsection

@section('content-main')
    <section style="width:100%; height: 100%; ">
        <div class="eventCreate-bd">
        </div>
        <div class="eventInfo">
            <div class="eventInfo-box">

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

                <form id="eventForm" role="form" method="post" action="{{ route('front.events.update', $event->id) }}"
                      enctype="multipart/form-data">
                    @method('PUT')
                    @csrf

                    <div class="eventInfo-content">

                        <div class="eventInfo-content-img">

                            <div class="form-group {{ $errors->has('cover_image') ? 'has-danger' : '' }}">
                                <div style="width:100%;" class="fileinput fileinput-new" data-provides="fileinput">
                                    <div class="fileinput-preview img-thumbnail" data-trigger="fileinput"
                                         style="width: 100%; height: 300px; line-height: 150px;">
                                        @if($event->coverImage)
                                            <img id={{ $event->coverImage->id }} src="{{ $event->coverImage->url }}"/>
                                            <input name="cover_image_id" value="{{ $event->coverImage->id }}"
                                                   type="hidden">
                                        @endif
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
                                <small class="form-control-feedback">{{ $errors->first('cover_image') }}</small>
                            </div>

                        </div>

                        <div class="eventInfo-content-text">
                            <div class="form-group {{ $errors->has('title') ? 'has-danger' : '' }}">
                                <input type="text" id="title" name="title" class="form-control"
                                       placeholder="enter title" value="{{ old('title', $event->title) }}">
                                <small class="form-control-feedback">{{ $errors->first('title') }}</small>
                                <small style="font-family:'Roboto Slab', sans-serif; display: block;">Organized
                                    by {{ $event->poster->name }}</small>
                            </div>


                            <div class="eventInfo-content-text-box">
                                <div>
                                    <i class="fas fa-dice-three"></i>
                                    <label class="eventInfo-attribute">Category:</label>

                                    <span class="modify-text-box category">
                                        <select data-placeholder="Select a category"
                                                class="form-control select2_category" id="category" name="category">
                                                <option></option>
                                        </select>
                                    </span>
                                </div>

                                <!--Coupons selection-->
                                <div class="type-business">
                                    <div class="form-check has-coupon-checkbox" style="display: inline">
                                        <input class="form-check-input" type="checkbox" value=""
                                               id="has-coupon-checkbox" disabled>
                                        <label class="form-check-label" for="defaultCheck1">
                                            <small>check coupons</small>
                                        </label>
                                    </div>
                                    <div class="form-group" id="coupon-select">
                                        <select class="form-control" data-placeholder="Select a coupon"
                                                class="form-control select2_coupon"
                                                style="width: 100%;" id="coupon" name="coupon">
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <i class="fas fa-map-signs"></i>
                                    <span class="eventInfo-attribute">Location:</span>

                                    <span class="modify-text-box">
                                     <input type="text" id="location" name="location" class="form-control"
                                            placeholder="enter location"
                                            value="{{ old('location', $event->location) }}">
                                     <input type="hidden" name="lat" id="lat" value="{{ old('lat', $event->lat) }}">
                                     <input type="hidden" name="lng" id="lng" value="{{ old('lng', $event->lng) }}">

                                    </span>
                                </div>


                                <div>
                                    <i class="fas fa-dollar-sign"></i>
                                    <span class="eventInfo-attribute">Price:</span>

                                    <span class="modify-text-box">
                                       <input type="text" id="price" name="price" class="form-control"
                                              placeholder="enter price" value="{{ old('price', $event->price) }}">
                                    </span>
                                </div>


                                <div>
                                    <i class="fas fa-calendar-plus"></i>
                                    <span class="eventInfo-attribute">Start Time:</span>
                                    <span class="modify-text-box">
                                        <input type="text" id="start_time" name="start_time"
                                               value="{{ old('start_time', $event->start_time) }}" class="form-control"
                                               placeholder="select a time">
                                    </span>
                                </div>


                                <div>
                                    <i class="fas fa-calendar-plus"></i>
                                    <span class="eventInfo-attribute">End Time:</span>
                                    <span class="modify-text-box">
                                        <input type="text" id="end_time" name="end_time"
                                               value="{{ old('end_time', $event->end_time) }}" class="form-control"
                                               placeholder="select a time">
                                    </span>
                                </div>


                                <div>
                                    <i class="fas fa-calendar-plus"></i>
                                    <span class="eventInfo-attribute">Sign Up Due:</span>
                                    <span class="modify-text-box">
                                        <input type="text" id="sign_up_due_time" name="sign_up_due_time"
                                               value="{{ old('sign_up_due_time', $event->sign_up_due_time) }}"
                                               class="form-control"
                                               placeholder="select a time">
                                    </span>
                                </div>


                                <div>
                                    <i class="fas fa-user-friends"></i>
                                    <span class="eventInfo-attribute">Maximum:</span>
                                    <span class="eventInfo-family">up to <input type="text" id="group_limit"
                                                                                name="group_limit" class="form-control"
                                                                                placeholder="enter group user limit"
                                                                                value="{{ old('group_limit', $event->group_limit) }}"> attendees allowed
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="eventInfo-content-description">
                            <h4 style="font-family: 'Roboto Slab'">Description</h4>
                            <div class="eventInfo-content-description-box" style="height: 280px;width: 420px">
                                <textarea class="form-control " placeholder="Tell people more about this event."
                                          id="description" name="description" rows="10"
                                          style="border: none;height: 100%;">{{ old('description', $event->description) }}</textarea>
                            </div>
                        </div>
                    </div>

                    <div class="eventInfo-btn">
                        <button id="cancel-btn" type="button" class="common-button-style eventInfo-btn-style">Cancel
                        </button>
                        <button type="submit" class="common-button-style eventInfo-btn-style">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
@endsection

@section('js')
    <!-- Plugins for this page -->
    <script src="{{ asset('dist/js/pages/jasny-bootstrap.js') }}"></script>
    <script src="{{ asset('vendor/inputmask/dist/min/jquery.inputmask.bundle.min.js') }}"></script>
    <script src="{{ asset('dist/js/pages/mask.init.js') }}"></script>
    <script src="{{ asset('vendor/select2/dist/js/select2.full.min.js') }}"></script>
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

            let select2_category = $('.select2_category').select2({
                allowClear: true,
                data: {!! json_encode($categories)!!}
            });

            @if(old('category'))
            select2_category.val({!! old('category') !!}).trigger('change');
            @else
            select2_category.val({!! $event->category->id !!}).trigger('change');
            @endif

            let select2_coupon = $('#coupon').select2({
                    data: {!! json_encode($coupons)!!}
            });

            @if(old('coupon'))
            select2_coupon.val({!! old('coupon') !!}).trigger('change');
            @endif

            let has_coupon_checkbox = $('#has-coupon-checkbox');

            @if($event->coupon)
            if (has_coupon_checkbox.prop("disabled")) {
                has_coupon_checkbox.prop('disabled', false);
            }
            // enable checked property
            if (!has_coupon_checkbox.prop("checked")) {
                has_coupon_checkbox.prop('checked', true);
            }
            $("#coupon-select").css({"display": "inline-block", "width": "200px"});
            select2_coupon.val({!! $event->coupon->id !!}).trigger('change');
            @endif

            // select2_category on select handler
            $('.select2_category').on('select2:select', function (e) {
                var data = e.params.data;
                // remove disabled property
                if (has_coupon_checkbox.prop("disabled")) {
                    has_coupon_checkbox.prop('disabled', false);
                } else {
                    // remove checked property
                    if (has_coupon_checkbox.prop("checked")) {
                        has_coupon_checkbox.prop('checked', false);
                    }
                    $("#coupon-select").css("display", "none");
                }

                // remote event handle
                if (data.text == 'Remote') {
                    has_coupon_checkbox.prop('disabled', true);
                    /******************* Image cover *******************/
                    document.getElementById("temp-cover").src = "../../images/game.jpg";
                    /******************* location *******************/
                    document.getElementById("location").value = "Online";
                    document.getElementById("location").setAttribute('readonly', '');
                    /******************* price *******************/
                    document.getElementById("price").value = 0;
                    document.getElementById("price").setAttribute('readonly', '');
                }
            });

            // has-coupon-checkbox onclick handler
            $("#has-coupon-checkbox").click(function () {
                if ($("#has-coupon-checkbox").is(':checked')) {
                    // change css
                    $("#coupon-select").css({"display": "inline-block", "width": "200px"});
                    // get selected category id
                    let selected_category_id = select2_category.val();
                    // ajax request to change select dataset
                    $('#coupon').val('');
                    $('#coupon').select2({
                        ajax: {
                            delay: 250, // wait 250 milliseconds before triggering the request
                            url: '/events/getCoupons/' + selected_category_id,
                            dataType: 'json',
                        }
                    });
                } else {
                    $("#coupon-select").css("display", "none");
                    $('#coupon').val('');
                }
            });


            $('#cancel-btn').click(function () {
                location.href = '{{ route('front.events.show',$event) }}';
            })
        });

        /*********************************************   Google Map API   *****************/

        function initAutocomplete() {
            // Create the autocomplete object, restricting the search predictions to
            // geographical location types
            // country is australia by default
            // https://latitudelongitude.org/au/
            const defaultBounds = new google.maps.LatLngBounds(
                new google.maps.LatLng(-43.00311, 113.6594),
                new google.maps.LatLng(-12.46113, 153.61194));

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
        }
    </script>
    <!-- Google Map API -->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDrewyRhpTEQ7DZI6ih0tX_W1gCXLn9O4M&libraries=places&callback=initAutocomplete"
            async defer></script>
@endsection


