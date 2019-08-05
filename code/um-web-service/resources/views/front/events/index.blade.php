@extends('layouts.front-master')

@section('css')
    <style type="text/css">
        .navigation {
            min-height: 980px;
            background: url('{{ asset('images/background.jpg') }}') no-repeat 0px 0px;
            background-size: cover;
        }
    </style>
    <link href="{{ asset('vendor/select2/dist/css/select2.min.css') }}" rel="stylesheet">
@stop

@section('content-main')
    <section class="events-bd">
        <span class="events-bd-close">+</span>

        <form id="eventSearchForm" role="form" method="get" action="{{ route('front.events.index') }}">
            @csrf
            <div class="events-nav">
                <div class="events-btnbox">
                    <div class="events-filter" style="width: 159px;">
                        <select data-placeholder="Select a category" class="form-control select2_category"
                                style="width: 100%;" id="q_category" name="q_category">
                            <option></option>
                        </select>
                    </div>

                    <div class="events-filter" style="width: 130px;">
                        <select data-placeholder="Select a distance" class="form-control select2_distance"
                                style="width: 100%;" id="q_distance" name="q_distance">
                            <option></option>
                        </select>
                    </div>

                    <div class="events-filter" style="width: 130px;">
                        <select data-placeholder="Select a price" class="form-control select2_price"
                                style="width: 100%;" id="q_price" name="q_price">
                            <option></option>
                        </select>
                    </div>
                </div>

                <div class="events-searchbox">
                    <input type="hidden" name="current_lat" id="current_lat">
                    <input type="hidden" name="current_lng" id="current_lng">

                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="q"
                           name="q" value="{{ old('q') }}" style="height: 28px; border-color: #aaa;">

                    <button class="btn btn-danger btn-secondary btn-sm" type="submit"
                            style="border: none;background: rgb(250,0,60);">Search
                    </button>
                </div>
            </div>
        </form>
        <div class="events-map-title-line"></div>

        <div class="events-box">
            <div class="events-sidebar">
                @if(count($events))
                    @csrf
                    @foreach($events as $event)
                        <div class="events-items-style c1">
                            {{--************ game icon *************--}}
                            @if($event->category->name == "Remote")
                                <div class="game-iconBox">
                                    <img class="game-icon" src="../../images/game-controller.png" alt="a">
                                </div>
                            @else
                                <div class="game-iconBox">

                                </div>
                            @endif


                            <div class="events-items-content ">

                                <div class="host-photo">

                                    @if($event->poster->avatar)
                                        <img src="{{ $event->poster->avatar->url }}"
                                             alt="unimingle-event-{{ $event->id }}" class="event-card-avator">
                                    @else
                                        <img src="{{ asset('images/event-poster-default.png') }}"
                                             alt="unimingle-event-default-cover" class="event-card-avator">
                                    @endif

                                    <small>{{ $event->poster->name }}</small>
                                </div>

                                <a style="text-decoration: none;width: 160px;height: 60px;overflow: auto;" title="{{ $event->title }}"
                                   href="{{ route('front.events.joinRequest', $event->id) }}">
                                    <h5>{{ $event->getTitle() }}</h5>
                                </a>

                                <div>
                                    <i class="fas fa-dice-three"></i>
                                    <small class="eventMap-category">{{ $event->category->name }}</small>
                                </div>

                                <div>
                                    <i class="fas fa-calendar-plus"></i>
                                    <small>{{ $event->getStartTime() }}</small>
                                </div>

                                <div>
                                    <i class="fas fa-dollar-sign"></i>
                                    <small>{{ $event->price? '$'.$event->price : 'Free'  }}</small>
                                </div>

                                <div style="width:90%;height:1px;margin:0 auto;background-color:#D5D5D5;overflow:hidden;position:absolute;bottom: 30px;"></div>

                                <a style="color: rgb(250,0,60);"
                                   href="{{ route('front.events.joinRequest', $event->id) }}">
                                    <small class="attendees">{{ count($event->attendees) }} attendees</small>
                                    <small class="join">more</small>
                                </a>

                            </div>
                        </div>
                    @endforeach
                @else
                    <div class="col-12">
                        No data available.
                    </div>
                @endif
            </div>

            <!-- map -->
            <div class="events-mapbox">
                <div id="map" style="height: 100%;width: 100%;"></div>
            </div>

        </div>
        </div>
    </section>
@endsection

@section('js')
    <script src="{{ asset('vendor/select2/dist/js/select2.full.min.js') }}"></script>
    <script>
        $(document).ready(function () {
            let select2_category = $('.select2_category').select2({
                allowClear: true,
                data: {!! json_encode($categories)!!},
                placeholder: 'Select a category'
            });

            @if(old('q_category'))
            select2_category.val({!! old('q_category') !!}).trigger('change');
                    @endif

            let select2_distance = $('.select2_distance').select2({
                    allowClear: true,
                    data: {!! json_encode($distances)!!},
                    placeholder: 'Select a distance'
                });

            @if(old('q_distance'))
            select2_distance.val({!! old('q_distance') !!}).trigger('change');
                    @endif

            let select2_price = $('.select2_price').select2({
                    allowClear: true,
                    data: {!! json_encode($prices)!!},
                    placeholder: 'Select a price'
                });

            @if(old('q_price'))
            select2_price.val({!! old('q_price') !!}).trigger('change');
            @endif

        });

        /********************************** google map ************************************/
        var map;
        var markers = [];
        var infoWindow;

        function initMap() {
            // https://latitudelongitude.org/au/adelaide/
            var adelaide = {lat: -34.92866, lng: 138.59863};
            map = new google.maps.Map(document.getElementById('map'), {
                center: adelaide,
                zoom: 12,
                mapTypeId: 'roadmap',
                mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU}
            });
            infoWindow = new google.maps.InfoWindow();

            // init marker
            initMarker();

            getLocation();
        }

        function initMarker() {
            var data = {!! json_encode($events) !!};
            for (let i = 0; i < data.length; i++) {
                createMarker(data[i]);
            }
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
                '<div><a href="/events/joinRequest/' +
                event.id +
                '">' +
                'more' +
                '</a>' +
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

        /**
         *
         * get current location
         *
         */
        function getLocation() {
            var currentPosition = document.getElementById("currentPosition");

            var geoSuccess = function (position) {
                const latitudeField = document.getElementById("current_lat");
                const longitudeField = document.getElementById("current_lng");
                latitudeField.value = position.coords.latitude;
                longitudeField.value = position.coords.longitude;
            };

            var geoError = function (error) {
                console.log('getLocation request error occurred. Error code: ' + error.code);
                // error.code can be:
                //   0: unknown error
                //   1: permission denied
                //   2: position unavailable (error response from location provider)
                //   3: timed out
            };

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
            } else {
                currentPosition.innerHTML = "Geolocation is not supported by this browser.";
            }
        }
    </script>

    <!-- Google Map API -->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDrewyRhpTEQ7DZI6ih0tX_W1gCXLn9O4M&callback=initMap"
            async defer></script>
@stop
