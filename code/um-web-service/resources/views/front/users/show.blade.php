@extends('layouts.front-master')
@section('css')
    <style type="text/css">
        .navigation {
            min-height: 1100px;
            background: url('{{ asset('images/profile4.jpg') }}') no-repeat 0px 0px;
            background-size: cover;
            position: relative;
        }

        .avator {
            width: 250px;
            height: 240px;
            object-fit: cover;
            border: 1px solid lightgray;
            border-radius: 5px;
        }
    </style>
@stop

@section('content-main')
    <div class="Profile-bd">
    </div>
    <section class="profile">
        <div class="profile-box">
            <aside class="col-lg-3  profile-sidebar">
                <h2 class="profile-sidebar-title">User center</h2>
            </aside>
            <main class="col-lg-9  profile-content" style="padding: 0;">
                <div class="profile-content-box pcb1" id="profile-box" style="height: 100%;">
                    <div class="contentBox upfield">
                        <div class="position-box">

                            <div class="col-8 profile-left">
                                <div>
                                    <h6>Name:</h6>
                                    <span>{{ $user->name }}</span>
                                </div>
                                <div>
                                    <h6>Email:</h6>
                                    <span>{{ $user->email }}</span>
                                </div>
                                <div>
                                    <h6>Nationality:</h6>
                                    <span>{{ $user->nationality }}</span>
                                </div>
                                <div>
                                    <h6>Description:</h6>
                                    <p id="profile-description">{{ $user->description }}</p>
                                </div>
                            </div>
                            <div class="col-4 col-md-5 profile-right">

                                <div>
                                    @if($user->avatar)
                                        <img src="{{$user->avatar->url}}" alt="unimingle-user-{{ $user->id }}"
                                             class="avator">
                                    @else
                                        <img src="{{ asset('images/admin.png') }}" alt="unimingle-event-default-cover"
                                             class="avator">
                                    @endif
                                </div>

                                <div class="profileEdit-btn">
                                    <a class="nav-link button button-caution button-pill button-pill join-event"
                                       href="{{ route('front.users.edit', $user->id) }}">Edit
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="contentBox downfield">
                        <div class="hostJoin-title" style="position: relative;">
                            <div
                                style="width:95%;height:1px;margin:20px auto;background-color:#D5D5D5;overflow:hidden;opacity: 0;"></div>
                            <h6 class="downfield-title ce">Hosted events</h6>
                            <div
                                style="width:1px;height:40px;margin:20px 10px;background-color:#D5D5D5;overflow:hidden;position: absolute;top: 0;left: 187px;"></div>
                            <h6 class="downfield-title je">Joined events</h6>
                        </div>

                        {{-- Hosted events --}}
                        <div class="myEvent-cardbox" id="created_eventbox">
                            @if(count($user->hostedEvents))
                                @csrf
                                @foreach($user->hostedEvents as $event)
                                    <div class="events-items-style  events joined" style="margin:15px 0 15px 20px">
                                        <div class="events-items-content ">
                                            <div class="host-photo">
                                                @if($event->poster->avatar)
                                                    <img src="{{ $event->poster->avatar->url }}"
                                                         alt="unimingle-event-{{ $event->id }}"
                                                         class="event-card-avator">
                                                @else
                                                    <img src="{{ asset('images/event-poster-default.png') }}"
                                                         alt="unimingle-event-default-cover" class="event-card-avator">
                                                @endif
                                                <small>{{ $event->poster->name }}</small>
                                            </div>

                                            <a style="text-decoration: none;width: 160px;height: 60px;overflow: auto;"
                                               title="{{ $event->title }}"
                                               href="{{ route('front.events.show', $event->id) }}">
                                                <h5>{{ $event->getTitle() }}</h5>
                                            </a>

                                            <div>
                                                <i class="fas fa-dice-three"></i>
                                                <small>{{ $event->category->name }}</small>
                                            </div>

                                            <div>
                                                <i class="fas fa-calendar-plus"></i>
                                                <small>{{ $event->getStartTime() }}</small>
                                            </div>

                                            <div>
                                                <i class="fas fa-dollar-sign"></i>
                                                <small>{{ $event->price? '$'.$event->price : 'Free'  }}</small>
                                            </div>

                                            <div
                                                style="width:90%;height:1px;margin:0 auto;background-color:#D5D5D5;overflow:hidden;position:absolute;bottom: 30px;"></div>

                                            <a style="color: rgb(250,0,60);"
                                               href="{{ route('front.events.show', $event->id) }}">
                                                <small class="attendees">{{ count($event->attendees) }}attendees
                                                </small>
                                                <small class="join">more</small>
                                            </a>
                                        </div>
                                    </div>
                                @endforeach
                            @else
                                <div class="events-items-style  events joined" style="margin:15px 0 15px 20px">
                                    <div class="events-items-content ">
                                        No data available.
                                    </div>
                                </div>
                            @endif
                        </div>

                        {{-- Joined events --}}
                        <div class="myEvent-cardbox" id="joined_eventbox">
                            @if(count($user->joinedEvents))
                                @csrf
                                @foreach($user->joinedEvents as $event)
                                    <div class="events-items-style events hosted" style="margin:15px 0 15px 20px">
                                        <div class="events-items-content ">
                                            <div class="host-photo">
                                                @if($event->poster->avatar)
                                                    <img src="{{ $event->poster->avatar->url }}"
                                                         alt="unimingle-event-{{ $event->id }}"
                                                         class="event-card-avator">
                                                @else
                                                    <img src="{{ asset('images/event-poster-default.png') }}"
                                                         alt="unimingle-event-default-cover" class="event-card-avator">
                                                @endif
                                                <small>{{ $event->poster->name }}</small>
                                            </div>

                                            <a style="text-decoration: none;width: 160px;height: 60px;overflow: auto;"
                                               title="{{ $event->title }}"
                                               href="{{ route('front.events.show', $event->id) }}">
                                                <h5>{{ $event->getTitle() }}</h5>
                                            </a>

                                            <div>
                                                <i class="fas fa-dice-three"></i>
                                                <small>{{ $event->category->name }}</small>
                                            </div>

                                            <div>
                                                <i class="fas fa-calendar-plus"></i>
                                                <small>{{ $event->getStartTime() }}</small>
                                            </div>

                                            <div>
                                                <i class="fas fa-dollar-sign"></i>
                                                <small>{{ $event->price? '$'.$event->price : 'Free'  }}</small>
                                            </div>

                                            <div
                                                style="width:90%;height:1px;margin:0 auto;background-color:#D5D5D5;overflow:hidden;position:absolute;bottom: 30px;"></div>

                                            <a style="color: rgb(250,0,60);"
                                               href="{{ route('front.events.show', $event->id) }}">
                                                <small class="attendees">{{ count($event->attendees) }}attendees
                                                </small>
                                                <small class="join">more</small>
                                            </a>
                                        </div>
                                    </div>
                                @endforeach
                            @else
                                <div class="events-items-style  events joined" style="margin:15px 0 15px 20px">
                                    <div class="events-items-content ">
                                        No data available.
                                    </div>
                                </div>
                            @endif
                        </div>

                    </div>

                </div>
            </main>
        </div>
    </section>
@endsection



@section('js')
    <script>
        $(document).ready(function () {
            $(".downfield-title.ce").click(function () {
                $("#created_eventbox").css("display", "flex");
                $("#joined_eventbox").css("display", "none");
                $(".downfield-title.ce").css("color", "rgb(250,0,60)");
                $(".downfield-title.je").css("color", "black");

            });

            $(".downfield-title.je").click(function () {
                $("#created_eventbox").css("display", "none");
                $("#joined_eventbox").css("display", "flex");
                $(".downfield-title.je").css("color", "rgb(250,0,60)");
                $(".downfield-title.ce").css("color", "black");
            });

        });


    </script>
@stop
