@extends('layouts.admin-page')

@section('css')
    <link href="{{ asset('vendor/switchery/dist/switchery.min.css') }}" rel="stylesheet">
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
        <h4 class="text-themecolor">Show Event</h4>
    </div>
    <div class="col-md-7 align-self-center text-right">
        <div class="d-flex justify-content-end align-items-center">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('admin.home') }}">Home</a></li>
                <li class="breadcrumb-item active">Show Event</li>
            </ol>
        </div>
    </div>
@stop
@section('content')
    <div class="row">
        <!-- Column -->
        <div class="col-lg-4 col-xlg-3 col-md-5">
            <div class="card">
                <div class="event-bg">
                    @if($event->coverImage)
                        <img src="{{ $event->coverImage->url }}" alt="unimingle-event-{{ $event->id }}" width="100%" >
                    @else
                        <img src="{{ asset('images/event-default-cover.jpg') }}" alt="unimingle-event-default-cover" width="100%">
                    @endif
                </div>
                <div class="card-body">
                    <div class="row text-center m-t-10">
                        <div class="col-md-12"><strong>Title</strong>
                            <p>{{ $event->title }}</p>
                        </div>
                    </div>
                    <hr>
                    <div class="row text-center m-t-10">
                        <div class="col-md-12"><strong>Start Time</strong>
                            <p>{{ $event->getStartTime()  }}</p>
                        </div>
                    </div>
                    <hr>
                    <div class="row text-center m-t-10">
                        <div class="col-md-12"><strong>End Time</strong>
                            <p>{{ $event->getEndTime() }}</p>
                        </div>
                    </div>
                    <hr>
                    <div class="row text-center m-t-10">
                        <div class="col-md-12"><strong>Sign Up Due</strong>
                            <p>{{ $event->getSignUpDueDate() }}</p>
                        </div>
                    </div>
                    <hr>
                    <div class="row text-center m-t-10">
                        <div class="col-md-12"><strong>Coupon</strong>
                            <p>
                                @if($event->coupon)
                                <a href="{{ route('admin.coupons.show', $event->coupon->id) }}">
                                    {{ $event->coupon->name  }}
                                </a>
                                @else
                                N/A
                                @endif
                            </p>
                        </div>
                    </div>
                    <hr>
                    <div class="row text-center m-t-10">
                        <div class="col-md-6 border-right">
                            <strong>Set top</strong>
                            <input type="checkbox" name="is_top"
                                   {{ $event->is_top == '1' ? 'checked' : '' }} class="switch_is_top">
                        </div>
                        <div class="col-md-6">
                            <strong>Set Front</strong>
                            <input type="checkbox" name="is_front"
                                   {{ $event->is_front == '1' ? 'checked' : '' }} class="switch_is_front">
                        </div>
                    </div>
                    <hr>

                    <button type="button" onclick="location.href = '{{ route('admin.events.index') }}';"
                            class="btn btn-info waves-effect waves-light">Back
                    </button>
                </div>
            </div>
        </div>

        <div class="col-lg-8 col-xlg-9 col-md-7">
            <div class="card">
                <div class="card-body">

                    <div class="row">
                        <div class="col-md-3 col-xs-6 border-right"><strong>Status</strong>
                            <br>
                            <p class="text-muted">{{ $event->getStatus() }}</p>
                        </div>
                        <div class="col-md-3 col-xs-6 border-right"><strong>Create Date</strong>
                            <br>
                            <p class="text-muted">{{ $event->getCreatedDate() }}</p>
                        </div>
                        <div class="col-md-3 col-xs-6 border-right"><strong>Last Update</strong>
                            <br>
                            <p class="text-muted">{{ $event->getUpdatedDate() }}</p>
                        </div>
                    </div>
                    <hr>

                    <h4 class="card-title p-b-10">Location</h4>
                    <p class="m-t-30">
                        {{ $event->location }}
                    </p>
                    <hr>

                    <h4 class="card-title p-b-10">Description</h4>
                    <p class="m-t-30">
                        {{ $event->description }}
                    </p>
                    <hr>

                    <h4 class="card-title p-b-10">Category</h4>
                    <p class="m-t-30">
                        {{ $event->category->name }}
                    </p>
                    <hr>

                    <h4 class="card-title p-b-10">Group Limit</h4>
                    <p class="m-t-30">
                        {{ $event->group_limit }}
                    </p>
                    <hr>

                    <h4 class="card-title p-b-10">Price</h4>
                    <p class="m-t-30">
                        {{ $event->price }}
                    </p>
                    <hr>

                    <h4 class="card-title p-b-10">Event organizer</h4>
                    @if($event->poster->hasRole('super-admin'))
                        <img src="{{ asset('images/admin.png') }}" alt="unimingle-event-poster-{{ $event->id }}"
                             class="img-circle img-responsive" style="max-height: 110px;">
                    @else
                        <img src="{{ $event->poster->avatar->url }}" alt="unimingle-event-poster-{{ $event->id }}"
                             class="img-circle img-responsive" style="max-height: 110px;">
                    @endif

                    <!-- Attendees -->
                    <h4 class="card-title m-t-20 p-b-10">Attendees</h4>
                    @if(count($event->attendees))
                        @foreach($event->attendees as $attendee)
                            <div class="d-flex no-block fa fa-check-circle text-success">
                                <img src="{{ $attendee->avatar->url }}"
                                     alt="unimingle-event-attendee-{{ $attendee->id }}"
                                     class="img-circle img-responsive" style="max-height: 110px;">
                                <h6 class="m-l-10 text-dark">{{ $attendee->name }}</h6>
                            </div>
                        @endforeach
                    @else
                        <p class="m-t-30">
                            No attendees at the moment.
                        </p>
                        <hr>
                    @endif
                </div>
            </div>
        </div>
    </div>
@stop

@push('js')
    <script src="{{ asset('vendor/switchery/dist/switchery.min.js') }}"></script>
    <script>
        $(document).ready(function () {
            let ele_is_top = document.querySelector('.switch_is_top');
            let switch_is_top = new Switchery(ele_is_top)
            switch_is_top.disable();

            let ele_is_front = document.querySelector('.switch_is_front');
            let switch_is_front = new Switchery(ele_is_front);
            switch_is_front.disable();
        });
    </script>
@endpush
