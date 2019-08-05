@extends('layouts.front-master')

@section('css')
    <link href="{{ asset('dist/css/pages/file-upload.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor/bootstrap-material-datetimepicker/css/bootstrap-material-datetimepicker.css') }}"
          rel="stylesheet">
    <link href="{{ asset('vendor/clockpicker/dist/jquery-clockpicker.min.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor/bootstrap-datepicker/bootstrap-datepicker.min.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor/switchery/dist/switchery.min.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor/select2/dist/css/select2.min.css') }}" rel="stylesheet">
    <!--Inline style-->
    <style type="text/css">
        .navigation {
            background-image: url({{ asset('images/background.jpg') }} );
            min-height: 1000px;
            background-size: cover;
        }

        .fileinput-preview img {
            width: 200px;
            height: 150px;
            line-height: 150px;
        }
    </style>
@stop

@section('content-main')
    <div class="eventCreate-bd"></div>
    <div class="eventCreate-modal-box">
        <span class="eventCreate-close" id="eventCreate-close">+</span>

        <div class="eventCreate-modal-content">
            <h4 class="eventCreate-title">Create event</h4>
            <div style="width:95%;height:1px;margin:20px auto;background-color:#D5D5D5;overflow:hidden;"></div>

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

            <form id="createEvent-form" name="createEvent-form" role="form" method="post"
                  action="{{ route('front.events.store') }}" enctype="multipart/form-data">
                @csrf
                <div class="container eventCreate-mainbox">

                    <!--Photo-->
                    <div class="form-group">
                        <div class="left">
                            <i class="fas fa-images"></i>
                            <label>Event cover image</label>
                        </div>

                        <div class="right" id="coverborder">
                            <label for="cover_image_id">
                                <img src="../../images/banner11.jpg" alt="event photo" class="eventCreate-photobox" id="temp-cover">
                                <input type="file" name="cover_image" id="cover_image_id"
                                       class="form-control-file style" style="width:0;">
                            </label>
                        </div>
                    </div>

                    <!--Title-->
                    <div class="form-group">
                        <div class="left">
                            <i class="fas fa-file-signature"></i>
                            <label>Event name</label>
                        </div>
                        <div class="right">
                            <input value="{{ old('title') }}" type="text" name="title" id="title" class="form-control"
                                   placeholder="Enter a short and clear name">
                        </div>
                    </div>

                    <!--Category-->
                    <div class="form-group">
                        <div class="left">
                            <i class="fas fa-dice-three"></i>
                            <label for="exampleFormControlSelect1">Event category</label>
                        </div>
                        <div class="right">
                            <select data-placeholder="Select a category" class="form-control eventType select2_category"
                                    style="width: 100%;" id="category" name="category">
                                <option></option>
                            </select>
                        </div>
                    </div>

                    <!--Coupons selection-->
                    <div class="form-group type-business">
                        <div class="left displayNone" ></div>
                        <div class="right">
                            <div class="form-check has-coupon-checkbox" style="display: inline-block">
                                <input class="form-check-input" type="checkbox" value="" id="has-coupon-checkbox" disabled>
                                <label class="form-check-label" for="defaultCheck1">
                                    <small>check coupons</small>
                                </label>
                            </div>
                            <div class="form-group" id="coupon-select">
                                <select class="form-control display-none" data-placeholder="Select a coupon" class="form-control select2_coupon"
                                        style="width: 100%;" id="coupon" name="coupon">
                                </select>
                            </div>
                        </div>
                    </div>

                    <!--Location-->
                    <div class="form-group">
                        <div class="left">
                            <i class="fas fa-map-signs"></i>
                            <label>Location</label>
                        </div>
                        <div class="right">
                            <input value="{{ old('location') }}" type="text" name="location" id="location"
                                   class="form-control" placeholder="Enter a location">
                            <input type="hidden" name="lat" id="lat" value="{{ old('lat') }}">
                            <input type="hidden" name="lng" id="lng" value="{{ old('lng') }}">
                        </div>
                    </div>

                    <!--Description-->
                    <div class="form-group">
                        <div class="left">
                            <i class="fas fa-smile-wink"></i>
                            <label for="exampleFormControlTextarea1">Description</label>
                        </div>
                        <div class="right">
                            <textarea class="form-control" name="description" id="description" rows="5"
                                      placeholder="Tell people more about this activity">{{ old('description') }}</textarea>
                        </div>
                    </div>

                    <!--Price-->
                    <div class="form-group">
                        <div class="left">
                            <i class="fas fa-dollar-sign"></i>
                            <label>Price</label>
                        </div>
                        <div class="right">
                            <input value="{{ old('price') }}" type="text" name="price" id="price" class="form-control"
                                   placeholder="Event cost">
                        </div>
                    </div>

                    <!--Start-->
                    <div class="form-group">
                        <div class="left">
                            <i class="fas fa-calendar-plus"></i>
                            <label>Start Time</label>
                        </div>
                        <div class="right datetime">
                            <input type="text" id="start_time" name="start_time" value="{{ old('start_time') }}"
                                   class="form-control" placeholder="select a time">
                        </div>
                    </div>

                    <!--End-->
                    <div class="form-group">
                        <div class="left">
                            <i class="fas fa-calendar-minus"></i>
                            <label>End Time</label>
                        </div>
                        <div class="right datetime">
                            <input type="text" id="end_time" name="end_time" value="{{ old('end_time') }}"
                                   class="form-control" placeholder="select a time">
                        </div>
                    </div>

                    <!--sign up due-->
                    <div class="form-group">
                        <div class="left">
                            <i class="fas fa-hourglass-half"></i>
                            <label for="exampleFormControlSelect1"> Registration deadline</label>
                        </div>
                        <div class="right datetime">
                            <input type="text" id="sign_up_due_time" name="sign_up_due_time"
                                   value="{{ old('sign_up_due_time') }}" class="form-control"
                                   placeholder="select a time">
                        </div>
                    </div>

                    <!--group limit-->
                    <div class="form-group">
                        <div class="left">
                            <i class="fas fa-user-friends"></i>
                            <label for="exampleFormControlSelect1">Maximum participant</label>
                        </div>
                        <div class="right">
                            <input type="text" id="group_limit" name="group_limit" class="form-control"
                                   placeholder="enter group user limit" value="{{ old('group_limit') }}">
                        </div>
                    </div>
                </div>

                <div style="width:95%;height:1px;margin:20px auto;background-color:#D5D5D5;overflow:hidden;"></div>

                <div class="create-buttonbox">
                    <button type="submit" class="common-button-style p-create-button" name="create-button"
                            id="create-btn">Submit
                    </button>
                </div>
            </form>

        </div>
    </div>
@endsection

@section('js')

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

            // Populating select component
            let select2_category = $('.select2_category').select2({
                data: {!! json_encode($categories)!!}
            });

            @if(old('category'))
            select2_category.val({!! old('category') !!}).trigger('change');
            @endif

            // select2_category on select handler
            $('.select2_category').on('select2:select', function (e) {
                var data = e.params.data;
                let has_coupon_checkbox = $('#has-coupon-checkbox');
                // remove disabled property
                if ( has_coupon_checkbox.prop( "disabled" ) ) {
                    has_coupon_checkbox.prop('disabled', false);
                } else {
                    // remove checked property
                    if (has_coupon_checkbox.prop( "checked" )) {
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
                    document.getElementById("location").value = "";
                    document.getElementById("location").setAttribute('readonly','');
                    /******************* price *******************/
                    document.getElementById("price").value = 0;
                    document.getElementById("price").setAttribute('readonly','');
                }
            });

            // has-coupon-checkbox onclick handler
            $("#has-coupon-checkbox").click(function () {
                if( $("#has-coupon-checkbox").is(':checked')) {
                    // change css
                    $("#coupon-select").css({"display":"inline-block","width":"200px"});
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
                }
                else {
                    $("#coupon-select").css("display", "none");
                    $('#coupon').val('');
                }
            });



            // Populating select coverage
            document.getElementById('cover_image_id').onchange = function () {
                var imgFile = this.files[0];
                var fr = new FileReader();
                fr.onload = function () {
                    document.getElementById('coverborder').getElementsByTagName('img')[0].src = fr.result;
                };
                fr.readAsDataURL(imgFile);
            };

            // Form validation
            $('#createEvent-form').validate({
                rules: {
                    title: "required",
                    location: "nullable",
                    category: "required",
                    cover_image: "required",
                    price: {
                        required: true,
                        digits: true
                    },
                    start_time: "required",
                    end_time: "required",
                    description: "required",
                    sign_up_due_time: "required",
                    group_limit: "required"
                },
                messages: {
                    title: "Title is required.",
                    location: "Location is required.",
                    category: "Category is required.",
                    cover_image: "Please upload your event photo.",
                    price: {
                        required: "Input 0 if free.",
                        digits: "Please input valid number."
                    },
                    start_time: "Start time is required.",
                    end_time: "End time is required.",
                    description: "Description is required.",
                    sign_up_due_time: "Registration deadline is required.",
                    group_limit: "Group user limit is required."
                }
            });

            let title = $("#title");
            title.keyup(redborder(title));

            let location = $("#location");
            location.keyup(redborder(location));

            let price = $("#price");
            price.keyup(redborder(price));

            let description = $("#description");
            description.keyup(redborder(description));

            let group_limit = $("#group_limit");
            group_limit.keyup(redborder(group_limit));

            $("#create-btn").click(function () {
                if ($("#createEvent-form").valid() == false) {

                    if ($("#title").valid() == false) {
                        $("#title").css("border", "1px solid RGB(250,0,60)");
                    }

                    if ($("#location").valid() == false) {
                        $("#location").css("border", "1px solid RGB(250,0,60)");
                    }

                    if ($("#category").valid() == false) {
                        $("#category").css("border", "1px solid RGB(250,0,60)");
                    }

                    if ($("#price").valid() == false) {
                        $("#price").css("border", "1px solid RGB(250,0,60)");
                    }

                    if ($("#description").valid() == false) {
                        $("#description").css("border", "1px solid RGB(250,0,60)");
                    }

                    if ($("#group_limit").valid() == false) {
                        $("#group_limit").css("border", "1px solid RGB(250,0,60)");
                    }
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
        }

    </script>

    <!-- Google Map API -->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDrewyRhpTEQ7DZI6ih0tX_W1gCXLn9O4M&libraries=places&callback=initAutocomplete"
            async defer></script>
@stop
