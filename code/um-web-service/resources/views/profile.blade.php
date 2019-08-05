@extends('layouts.front-master')
@section('css')
    <style type="text/css">
        .navigation {
            min-height: 1100px;
            background: url('images/profile2.jpg') no-repeat 0px 0px;
            background-size: cover;
            position: relative;
        }
    </style>
@stop

@section('content-main')
    <div class="Profile-bd">
    </div>
    <section class="profile">
        <div class="profile-box" >
            <aside class="col-sm-4 profile-sidebar">
                <div class="profile-sidebar-bd"></div>
                <h2 class="profile-sidebar-title">User center</h2>
            </aside>
            <main class="col-sm-8 profile-content" style="padding: 0;">
                <div class="profile-content-box pcb1" id="profile-box" style="height: 100%;">
                    <div class="contentBox upfield">
                        <div class="position-box">

                            <div class="col-8 profile-left">
                                <h6>Name:</h6>
                                <span id="awa">{{$event['name']}}</span>
                                <h6>Email:</h6>
                                <span>{{$event['email']}}</span>
                                <h6>Nationality:</h6>
                                <span>{{$event['country']}}</span>
                                <h6>Description:</h6>
                                <p id="profile-description">{{$event['description']}}</p>
                            </div>
                            <div class="col-4 profile-right">
                                <!--update photo-->
                                <div class="profile-photo-box">
                                    <div class="Profile-userPhoto" id="Profile-userPhoto-part" style="height: 240px;">
                                        <label for="Profile-userPhoto" style="height: 100%;">
                                            <img src="images/photographer.png" alt="profile photo"/>
                                            <small>Upload your photo</small>
                                            <input type="file" name="personalPhoto" id="Profile-userPhoto"
                                                   class=" form-control-file style">
                                        </label>
                                    </div>

                                </div>

                                <div class="profileEdit-btn">
                                    <button type="button" class="nav-link button button-caution button-pill button-pill join-event">Edit
                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div class="contentBox downfield">
                        <div style="position: relative;">
                            <div style="width:95%;height:1px;margin:20px auto;background-color:#D5D5D5;overflow:hidden;opacity: 0;"></div>
                            <h6 class="downfield-title ce">Created events</h6>
                            <div style="width:1px;height:40px;margin:20px 10px;background-color:#D5D5D5;overflow:hidden;position: absolute;top: 0;left: 187px;"></div>

                            <h6 class="downfield-title je">Joined events</h6>

                        </div>
                            <div class="myEvent-cardbox" id="created_eventbox">

                                <div class="p-0 card-style card1">
                                    <a href="{{route('eventinfo') }}">
                                        <div class="card-img">
                                            <img src="images/eventImg.jpg" alt="event_photo">
                                        </div>
                                        <div class="card-content">
                                            <small>{{$event['type']}}</small>
                                            <h5>{{$event['title']}}</h5>
                                            <small>{{$event['start_time']}}</small>
                                        </div>

                                    </a>
                                </div>
                                <div class="p-0 card-style card2">
                                    <a href="{{route('eventinfo') }}">
                                        <div class="card-img">
                                            <img src="images/eventInfo.jpg" alt="event_photo">

                                        </div>
                                        <div class="card-content">
                                            <small>{{$event['type']}}</small>
                                            <h5>{{$event['title']}}</h5>
                                            <small>{{$event['start_time']}}</small>
                                        </div>

                                    </a>
                                </div>
                                <div class="p-0 card-style card1">
                                    <a href="{{route('eventinfo') }}">
                                        <div class="card-img">
                                            <img src="images/eventImg.jpg" alt="event_photo">
                                        </div>
                                        <div class="card-content">
                                            <small>{{$event['type']}}</small>
                                            <h5>{{$event['title']}}</h5>
                                            <small>{{$event['start_time']}}</small>
                                        </div>

                                    </a>
                                </div>
                                <div class="p-0 card-style card2">
                                    <a href="{{route('eventinfo') }}">
                                        <div class="card-img">
                                            <img src="images/eventInfo.jpg" alt="event_photo">

                                        </div>
                                        <div class="card-content">
                                            <small>{{$event['type']}}</small>
                                            <h5>{{$event['title']}}</h5>
                                            <small>{{$event['start_time']}}</small>
                                        </div>

                                    </a>
                                </div>
                                <div class="p-0 card-style card1">
                                    <a href="{{route('eventinfo') }}">
                                        <div class="card-img">
                                            <img src="images/eventImg.jpg" alt="event_photo">
                                        </div>
                                        <div class="card-content">
                                            <small>{{$event['type']}}</small>
                                            <h5>{{$event['title']}}</h5>
                                            <small>{{$event['start_time']}}</small>
                                        </div>

                                    </a>
                                </div>



                            </div>
                            <div class="myEvent-cardbox" id="joined_eventbox">

                                <div class="p-0 card-style card2">
                                    <a href="{{route('eventinfo') }}">
                                        <div class="card-img">
                                            <img src="images/eventInfo.jpg" alt="event_photo">

                                        </div>
                                        <div class="card-content">
                                            <small>{{$event['type']}}</small>
                                            <h5>{{$event['title']}}</h5>
                                            <small>{{$event['start_time']}}</small>
                                        </div>

                                    </a>
                                </div>
                                <div class="p-0 card-style card1">
                                    <a href="{{route('eventinfo') }}">
                                        <div class="card-img">
                                            <img src="images/eventImg.jpg" alt="event_photo">
                                        </div>
                                        <div class="card-content">
                                            <small>{{$event['type']}}</small>
                                            <h5>{{$event['title']}}</h5>
                                            <small>{{$event['start_time']}}</small>
                                        </div>

                                    </a>
                                </div>
                                <div class="p-0 card-style card2">
                                    <a href="{{route('eventinfo') }}">
                                        <div class="card-img">
                                            <img src="images/eventInfo.jpg" alt="event_photo">

                                        </div>
                                        <div class="card-content">
                                            <small>{{$event['type']}}</small>
                                            <h5>{{$event['title']}}</h5>
                                            <small>{{$event['start_time']}}</small>
                                        </div>

                                    </a>
                                </div>
                                <div class="p-0 card-style card1">
                                    <a href="{{route('eventinfo') }}">
                                        <div class="card-img">
                                            <img src="images/eventImg.jpg" alt="event_photo">
                                        </div>
                                        <div class="card-content">
                                            <small>{{$event['type']}}</small>
                                            <h5>{{$event['title']}}</h5>
                                            <small>{{$event['start_time']}}</small>
                                        </div>

                                    </a>
                                </div>
                                <div class="p-0 card-style card2">
                                    <a href="{{route('eventinfo') }}">
                                        <div class="card-img">
                                            <img src="images/eventInfo.jpg" alt="event_photo">

                                        </div>
                                        <div class="card-content">
                                            <small>{{$event['type']}}</small>
                                            <h5>{{$event['title']}}</h5>
                                            <small>{{$event['start_time']}}</small>
                                        </div>

                                    </a>
                                </div>
                                <div class="p-0 card-style card1">
                                    <a href="{{route('eventinfo') }}">
                                        <div class="card-img">
                                            <img src="images/eventImg.jpg" alt="event_photo">
                                        </div>
                                        <div class="card-content">
                                            <small>{{$event['type']}}</small>
                                            <h5>{{$event['title']}}</h5>
                                            <small>{{$event['start_time']}}</small>
                                        </div>

                                    </a>
                                </div>
                        </div>

                    </div>
                </div>



            </main>
        </div>
    </section>
@endsection







@section('js')
    <script>
        document.getElementById('Profile-userPhoto').onchange = function () {
            var imgFile = this.files[0];
            var fr = new FileReader();
            fr.onload = function () {
                document.getElementById('Profile-userPhoto-part').getElementsByTagName('img')[0].src = fr.result;
            };
            fr.readAsDataURL(imgFile);
        };

    </script>

    <script>

        $(document).ready(function () {
            $(".downfield-title.ce").click(function () {
                $("#created_eventbox").css("display", "flex");
                $("#joined_eventbox").css("display", "none");
                $(".downfield-title.ce").css("color", "rgb(250,0,60)");
                // $(".downfield-title.ce").css("text-decoration", "underline");
                // $(".downfield-title.je").css("text-decoration", "none");

                $(".downfield-title.je").css("color", "black");

            });

            $(".downfield-title.je").click(function () {
                $("#created_eventbox").css("display", "none");
                $("#joined_eventbox").css("display", "flex");
                $(".downfield-title.je").css("color", "rgb(250,0,60)");
                $(".downfield-title.ce").css("color", "black");
                // $(".downfield-title.je").css("text-decoration", "underline");
                // $(".downfield-title.ce").css("text-decoration", "none");


            });
        });
    </script>
@stop
