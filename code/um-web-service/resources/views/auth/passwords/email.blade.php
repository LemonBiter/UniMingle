@extends('layouts.front-master')

@section('css')
    <!--Inline style-->
    <style type="text/css">
        .navigation {
            background-image: url({{ asset('images/signup2.jpg') }} );
            min-height: 820px;
            background-size: cover;
        }
    </style>
@stop
@section('content-main')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">



            <div class="card">

                <div class="p-login-logo email-reset-logo">
                    <img class="p-login-logo-img" src="{{ asset('images/singlelogo.png') }}" alt="logo" width="85">
                </div>

                <div class="card-body" style="background: RGB(250, 250, 250); height: 100%;width: 100%;">
                    <h4 class="email-reset-title">{{ __('Reset Password') }}</h4>
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <form method="POST" action="{{ route('password.email') }}">
                        @csrf

                        <div class="form-group row email-reset-info">
                            <label for="email" style="padding-right: 0px;" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                            <div class="col-md-8">
                                <input id="email"  style="width: 300px;" type="email" placeholder="Enter your email address" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required>

                                @if ($errors->has('email'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div  class="email-reset-small">
                        <small>We will send you an email with instructions on how to reset your password.</small>
                        </div>

                        <div class="form-group row mb-0 email-reset-button-position" style="margin: 0 auto;">
                            <div>
                                <button type="submit" class="common-button-style email-reset-button" style="width:270px;">
                                    {{ __('Send Password Reset Link') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>






        </div>
    </div>
</div>
@endsection
