@extends('layouts.front-master')
@section('css')
    <link href="{{ asset('vendor/sweetalert/sweetalert.css') }}" rel="stylesheet" type="text/css">
    <style type="text/css">
        .navigation {
            min-height: 1200px;
            background: url('{{ asset('images/eventInfo-bd.jpg') }}') no-repeat 40% 0px;
            background-size: cover;
        }

        .swal-icon--warning {
            animation: none;
            border-color: rgb(250, 0, 60);
        }
    </style>
@stop

@section('content-main')
    <section style="width:100%; height: 100%; ">
        <div class="eventCreate-bd">
        </div>
        <div class="eventInfo">
            <div class="eventInfo-box">
                @if($event->isDeleteAllowed())
                    {{-- Delete this event--}}
                    <div class="delete-box">
                        <a href="#"><i class="fas fa-trash-alt event-delete-btn"></i></a>
                        <button style="opacity: 0;"
                                class="btn btn-danger btn-rounded waves-effect waves-light m-t-10 delete-event event-delete-btn"
                                data-name="{{ $event->title }}" data-id="{{ $event->id }}">Delete
                        </button>
                    </div>
                @endif

                <div class="eventInfo-content">

                    <div class="eventInfo-content-img">

                        <img width="100%" class="eventCreate-photobox normal-cover"
                             style="width: 300px; height: 300px;margin:30px auto;border: 1px solid lightgray;border-radius: 5px;box-shadow: rgba(0, 0, 0, 0.4) 0 1px 3px; "
                             src="{{ $event->coverImage->url }}" alt="unimingle-event-{{ $event->id }}">

                    </div>
                    <div class="eventInfo-content-text">
                        <h3 class="event-title-family" id="eventInfo-title">{{$event['title']}}</h3>

                        <small style="font-family:'Roboto Slab', sans-serif;">Organized
                            by {{ $event->poster->name }}</small>

                        <div class="eventInfo-content-text-box">

                            <div>
                                <i class="fas fa-dice-three"></i>
                                <span class="eventInfo-attribute">Category:</span>
                                <span class="eventInfo-family"
                                      id="eventInfo-category-show">{{ $event->category->name }}</span>
                            </div>

                            <div>
                                <i class="fas fa-map-signs"></i>
                                <span class="eventInfo-attribute">Location:</span>
                                <span class="eventInfo-family location-layout">{{ $event->location? $event->location : 'N/A'}}</span>
                            </div>

                            <div>
                                <i class="fas fa-dollar-sign"></i>
                                <span class="eventInfo-attribute">Price:</span>
                                <span class="eventInfo-family eventInfo-price">A${{ $event->price }} each person</span>
                            </div>

                            <div>
                                <i class="fas fa-calendar-plus"></i>
                                <span class="eventInfo-attribute">Start Time:</span>
                                <span class="eventInfo-family">{{ $event->getStartTime() }}</span>
                            </div>

                            <div>
                                <i class="fas fa-calendar-plus"></i>
                                <span class="eventInfo-attribute">End Time:</span>
                                <span class="eventInfo-family">{{ $event->getEndTime() }}</span>
                            </div>

                            <div>
                                <i class="fas fa-calendar-plus"></i>
                                <span class="eventInfo-attribute">Sign Up Due:</span>
                                <span class="eventInfo-family">{{ $event->getSignUpDueDate() }}</span>
                            </div>

                            <div>
                                <i class="fas fa-user-friends"></i>
                                <span class="eventInfo-attribute">Maximum:</span>
                                <span class="eventInfo-family">up to {{ $event->group_limit }} attendees allowed</span>
                            </div>

                        </div>
                    </div>

                    @if($event->coupon)
                        <div class="eventInfo-business">
                            @if($event->coupon->business->logo)
                                <div class="business-logo">
                                    <img src="{{ $event->coupon->business->logo->url }}" alt="business-logo">
                                </div>
                            @endif

                            <div class="business-titile">
                                <small>Sponsored by <br/><span>{{ $event->coupon->business->name }}</span><br/><span
                                            class="business-sale"> with {{ $event->coupon->name }}!</span></small>
                            </div>
                        </div>
                    @endif

                    <div class="modify-btn-box edit-btn">
                        @if($event->isEditAllowed())
                            <button id="modify-btn" type="button"
                                    onclick="location.href = '{{ route('front.events.edit',$event) }}';"
                                    class="nav-link button button-caution button-pill button-pill">Edit
                            </button>
                        @else
                            <button id="cancel-btn" type="button"
                                    onclick="location.href = '#';"
                                    class="nav-link cancel-event button button-caution button-pill button-pill"
                                    data-name="{{ $event->title }}" data-id="{{ $event->id }}">Cancel event
                            </button>
                        @endif
                    </div>

                    <div class="eventInfo-line" style="width: 900px;">
                        <div style="width:95%;height:1px;margin:50px auto 0 auto;background-color:#D5D5D5;overflow:hidden;"></div>
                    </div>

                    @if($event->location)
                    <div class="eventinfo-map">
                        <div id="map" style="height: 100%;width: 100%;"></div>
                    </div>
                    @endif

                    <div class="eventinfo-description-area">
                        <h5 style="font-family: 'Roboto Slab';color: #344583;">What kind of activity is it?</h5>
                        <div class="eventInfo-content-description-box">
                            <p>{{$event['description']}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection

@section('js')
    <!-- Sweet-Alert  -->
    <script src="{{ asset('vendor/sweetalert/sweetalert.min.js') }}"></script>
    <script>
        $(document).ready(function () {
            let category = document.getElementById("eventInfo-category-show").innerText;
            switch (category) {
                case "Food & Drink":
                    $(".eventInfo-business").css("display", "flex");
                    break;

                case "Remote":
                    $(".eventInfo-price").text('Free');
                    $(".eventInfo-business").css("display", "none");
                    break;
                default:
                    $(".eventInfo-business").css("display", "none");

            }
        });

        <!--Delete event-->
        $(document).on('click', '.delete-event', function () {
            swal({
                title: "Are you sure you want to delete " + $(this).data('name') + " ?",
                text: "You will not be able to recover this event!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel plx!",
            }).then((isConfirm) => {
                if (isConfirm.value) {
                    id = $(this).data('id');
                    $.ajax({
                        type: 'DELETE',
                        url: location.origin + '/events/' + id,
                        data: {
                            '_token': $('input[name=_token]').val(),
                        },
                        success: function (data) {
                            if (data['status'] == 0) {
                                swal("Done!", "You have deleted this event successfully!", "success").then((isConfirm) => {
                                    if (isConfirm.value) {
                                        window.location.href = '/home';
                                    }
                                });
                            } else {
                                swal("Error!", data['message'], "error");
                            }
                        },
                        error: function (response) {
                            if (response.status == 500) {
                                swal("Server error!", "Please try again", "error");
                            } else {
                                if (response.responseJSON.error) {
                                    swal("Error!", response.responseJSON.error, "error");
                                } else {
                                    swal("Error!", 'Bad Request', "error");
                                }
                            }
                        }
                    });

                } else {
                    console.log("Operation cancelled");
                }
            });
        });

        <!--Cancel event-->
        $(document).on('click', '.cancel-event', function () {
            swal({
                title: "Are you sure you want to cancel " + $(this).data('name') + " ?",
                text: "",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, cancel it!",
                cancelButtonText: "No, wait a second!",
            }).then((isConfirm) => {
                if (isConfirm.value) {
                    id = $(this).data('id');
                    $.ajax({
                        type: 'POST',
                        url: location.origin + '/events/cancel/' + id,
                        data: {
                            '_token': $('input[name=_token]').val(),
                        },
                        success: function (data) {
                            if (data['status'] == 0) {
                                swal("Done!", "You have canceled this event successfully!", "success").then((isConfirm) => {
                                    if (isConfirm.value) {
                                        window.location.href = '/home';
                                    }
                                });
                            } else {
                                swal("Error!", data['message'], "error");
                            }
                        },
                        error: function (response) {
                            if (response.status == 500) {
                                swal("Server error!", "Please try again", "error");
                            } else {
                                if (response.responseJSON.error) {
                                    swal("Error!", response.responseJSON.error, "error");
                                } else {
                                    swal("Error!", 'Bad Request', "error");
                                }
                            }
                        }
                    });

                } else {
                    console.log("Operation cancelled");
                }
            });
        });

        /********************************** google map ************************************/
        @if($event->location)
        var map;
        var markers = [];
        var infoWindow;

        function initMap() {
            let event_location = {!! json_encode($event) !!};
            let location = {lat: event_location.lat, lng: event_location.lng};
            map = new google.maps.Map(document.getElementById('map'), {
                center: location,
                zoom: 12,
                mapTypeId: 'roadmap',
                mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU}
            });
            infoWindow = new google.maps.InfoWindow();

            // init marker
            initMarker();
        }

        function initMarker() {
            createMarker({!! json_encode($event) !!});
        }

        function createMarker(event) {
            const latlng = new google.maps.LatLng(
                parseFloat(event.lat),
                parseFloat(event.lng)
            );
            const html = '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<h4 id="firstHeading" class="firstHeading">' +
                event.title +
                '</h4>' +
                '<div id="bodyContent">' +
                '<div><i class="fas fa-location-arrow"></i>    ' +
                event.location +
                '</div>' +
                '<br>' +
                '<div><i class="fas fa-dice-three"></i>    ' +
                event.category.name +
                '</div>' +
                '<br>' +
                '<div><i class="fas fa-clock"></i>    ' +
                '<strong >startTime:</strong >    ' +
                event.start_time +
                '</div>' +
                '<br>' +
                '<div><i class="fas fa-clock"></i>    ' +
                '<strong >endTime:</strong >    ' +
                event.end_time +
                '</div>' +
                '<br>' +
                '</div>' +
                '</div>';

            var marker = new google.maps.Marker({
                map: map,
                position: latlng
            });
            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.setContent(html);
                infoWindow.open(map, marker);
            });
            markers.push(marker);
        }

    </script>

    <!-- Google Map API -->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDrewyRhpTEQ7DZI6ih0tX_W1gCXLn9O4M&callback=initMap"
            async defer></script>

    @endif

@endsection
