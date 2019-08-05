@extends('layouts.front-master')

@section('css')
    <!--Inline style-->
    <style type="text/css">
        .navigation {
            background-image: url({{ asset('images/signup2.jpg') }} );
            min-height: 820px;
        }
    </style>
@stop

@section('content-main')
    <div class="p-login-part">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-xs-12">
                    <div class="p-login-logo">
                        <img class="p-login-logo-img" src="{{ asset('images/singlelogo.png') }}" alt="logo" width="85">
                    </div>
                    <div class="p-login-box {{ count($errors) > 0 ? 'p-login-box-error' : '' }}">
                        <div class="p-login-title">
                            <h6>Log in</h6>
                        </div>

                        @if(count($errors))
                            <div class="alert alert-danger">
                                <ul>
                                    @foreach($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        @endif

                        <div class="p-login-main">
                            <div class="p-login-info">
                                <form method="POST" action="{{ route('login') }}" id="login-form" name="login-form">
                                    @csrf

                                    <div class="p-login-margin">
                                        <div class="form-group">
                                            <label for="email">Email</label>
                                            <!-- <small id="email_error"></small> -->
                                            <div class="row">
                                                <div class="col-12">
                                                    <input type="email" name="email" id="login-email"
                                                           class="form-control" placeholder="Enter email">
                                                    @if ($errors->has('email'))
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $errors->first('email') }}</strong>
                                                        </span>
                                                    @endif
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-login-margin">
                                        <div class="form-group">
                                            <label for="LoginPassword">Password</label>
                                            <!-- <small id="password_num"></small> -->
                                            <div class="row">
                                                <div class="col-12">
                                                    <input type="password" name="password" class="form-control"
                                                           id="login-password" placeholder="Password">
                                                    @if ($errors->has('password'))
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $errors->first('password') }}</strong>
                                                        </span>
                                                    @endif
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                            </div>
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6 col-sm-12 col-xs-12" style="padding-left:0">
                                        <div class="p-rememberbox">
                                            <div class="form-check">
                                                <input name="remember" class="form-check-input" type="checkbox"
                                                       {{ old('remember') ? 'checked' : '' }}
                                                       id="rememberAccount">
                                                <label class="form-check-label" for="rememberAccount">Remember
                                                    me</label>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-12 col-xs-12" style="padding:0">
                                        <div class="p-rememberright">
                                            @if (Route::has('password.request'))
                                                <a href="{{ route('password.request') }}">
                                                    Forgot passward?
                                                </a>
                                            @endif

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" name="login-button" id="login-btn" class="p-button-login">Submit
                            </button>
                            <p class="p-gotosignup">
                                <a href="{{ route('register') }}">Don't have an account?</a>
                            </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
