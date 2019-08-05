@extends('layouts.front-master')
@section('css')
    <style type="text/css">
        .navigation {
            min-height: 750px;
            background: url('images/background.jpg')no-repeat 0px 0px;
            background-size: cover;
        }
    </style>
@stop


@section('content-main')
    <div class="nav-title">
        <div class="nab-TitleAndBtn">
            <h1>The exclusive meet up platform for UOA students</h1>
            <div class="p-bigBtn">
                <a class="button button-caution button-pill button-jumbo" style="color: black;" href="{{ route('front.events.index') }}">Let's get Started</a>
            </div>
        </div>
    </div>

@endsection

@section('content-other')
    <section class="description">
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <div class="p-descrip-topic">
                        <img class="p-descrip-topic-img" src="{{ asset('images/singlelogo.png') }}" alt="logo"
                             width="106">
                        <h5 class="p-descrip-topic-h">UniMingle:</h5>
                        <p>The unique application for UOA students to meet more friends,share experience or do
                            everything
                            you
                            love in one-to-one or small group.</p>
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="p-paragraph">
                        <h1>Why we build it?</h1>
                        <p>
                            <small>Nowadays, many students chose to study abroad after graduating
                                from high school to seek knowledge and enriching experiences
                                that will contribute to their future careers. However, most
                                international students will inevitably feel lonely when they
                                arrive in Adelaide.
                            </small>
                        </p>
                        <p>
                            <small>In order to encourage diversity,we propose to build an activity-based diversityonline
                                platform
                                that provides opportunities to UoA students to mix with diverse
                                cohorts and share their experiences.
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="workprocess" id="workprocess">
        <div class="container">
            <div class="row">
                <div class="process-description">
                    <small>How we works</small>
                    <h1>Our Work Process</h1>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-4 col-sm-6 p-0">
                    <div class="process-innerbox text-center">
                        <span class="process-innerbox-count">1.</span>
                        <i class="process-innerbox-circle">
                            <i class="fas fa-key"></i>

                        </i>

                        <h5>Get your account and login</h5>
                        <p>Click the"sign up" button to create your account. Then just click the "login" to enter your
                            personal account.</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 p-0">
                    <div class="process-innerbox text-center">
                        <span class="process-innerbox-count">2.</span>
                        <i class="process-innerbox-circle">
                            <i class="far fa-keyboard"></i>
                        </i>
                        <h5>Find or create events </h5>
                        <p>Click the "Find an activity" and "Create an activity" button to enter the heating map events
                            list or generate a new event. </p>
                    </div>
                </div>
                <div class="w-100"></div>
                <div class="col-md-4 col-sm-6 p-0">
                    <div class="process-innerbox text-center">
                        <span class="process-innerbox-count">3.</span>
                        <i class="process-innerbox-circle">
                            <i class="fas fa-user-plus"></i>
                        </i>
                        <h5>Invite your friends</h5>
                        <p>When you successfully join or create an activity.Simply invite your friends or strangers to
                            join the event.</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 p-0">
                    <div class="process-innerbox text-center">
                        <span class="process-innerbox-count">4.</span>
                        <i class="process-innerbox-circle">
                            <i class="fas fa-chess"></i>
                        </i>
                        <h5>Enjoy the moment!</h5>
                        <p>Now you can enjoy this event and meet frineds with other people.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="features"></section>
@endsection
