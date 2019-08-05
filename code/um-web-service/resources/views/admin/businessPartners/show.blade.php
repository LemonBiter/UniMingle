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
        <h4 class="text-themecolor">Show Business Partner</h4>
    </div>
    <div class="col-md-7 align-self-center text-right">
        <div class="d-flex justify-content-end align-items-center">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('admin.home') }}">Home</a></li>
                <li class="breadcrumb-item active">Show Business Partner</li>
            </ol>
        </div>
    </div>
@stop
@section('content')
    <div class="row">
        <!-- Column -->
        <div class="col-lg-4 col-xlg-3 col-md-5">
            <div class="card">
                <div class="businessPartner-bg">
                    @if($businessPartner->logo)
                        <img src="{{ $businessPartner->logo->url }}" alt="unimingle-businessPartner-{{ $businessPartner->id }}" width="100%" >
                    @else
                        <img src="{{ asset('images/businessPartner-default-cover.jpg') }}" alt="unimingle-businessPartner-default-cover" width="100%">
                    @endif
                </div>
                <div class="card-body">
                    <div class="row text-center m-t-10">
                        <div class="col-md-12"><strong>Name</strong>
                            <p>{{ $businessPartner->name }}</p>
                        </div>
                    </div>
                    <hr>

                    <button type="button" onclick="location.href = '{{ route('admin.businessPartners.index') }}';"
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
                            <p class="text-muted">{{ $businessPartner->getStatus() }}</p>
                        </div>
                        <div class="col-md-3 col-xs-6 border-right"><strong>Create Date</strong>
                            <br>
                            <p class="text-muted">{{ $businessPartner->getCreatedDate() }}</p>
                        </div>
                        <div class="col-md-3 col-xs-6 border-right"><strong>Last Update</strong>
                            <br>
                            <p class="text-muted">{{ $businessPartner->getUpdatedDate() }}</p>
                        </div>
                    </div>
                    <hr>

                    <h4 class="card-title p-b-10">Location</h4>
                    <p class="m-t-30">
                        {{ $businessPartner->location }}
                    </p>
                    <hr>

                    <h4 class="card-title p-b-10">Description</h4>
                    <p class="m-t-30">
                        {{ $businessPartner->description }}
                    </p>
                    <hr>

                    <h4 class="card-title p-b-10">Category</h4>
                    <p class="m-t-30">
                        {{ $businessPartner->category->name }}
                    </p>
                    <hr>

                    <h4 class="card-title p-b-10">Phone</h4>
                    <p class="m-t-30">
                        {{ $businessPartner->phone }}
                    </p>
                    <hr>

                    <h4 class="card-title p-b-10">Website</h4>
                    <p class="m-t-30">
                        {{ $businessPartner->website }}
                    </p>
                    <hr>

                    <!-- Education -->
                    <h4 class="card-title m-t-20 p-b-10">Coupons</h4>
                    @if(count($businessPartner->coupons))
                        @foreach($businessPartner->coupons as $l)
                            <a href="{{ route('admin.coupons.show',$l->id) }}">
                               <h5 class="card-title" title="{{ $l->name }}">{{ $l->getName() }}</h5>
                            </a>
                        @endforeach
                    @else
                        <p class="m-t-30">
                            No coupons at the moment.
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
@endpush
