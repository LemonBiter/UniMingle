@extends('layouts.front-master')

@section('css')
    <!--Inline style-->
    <style type="text/css">
        .navigation {
            background-image: url({{ asset('images/signup2.jpg') }} );
            min-height: 820px;
        }
        @media screen and (max-width:768px){

            .navigation {
                background-image: url({{ asset('images/signup2.jpg') }} );
                background-repeat: repeat-y;
                min-height: 1120px;
            }
        }
    </style>
@stop

@section('content-main')
    <div class="register-part">
        <div class="p-register-logo">
            <img class="p-register-logo-img"src="{{ asset('images/singlelogo.png') }}" alt="logo" width="85">
        </div>
        <div class="register-box">
            <div class="register-title">
                <h4>Let's get started</h4>
            </div>
            <div class="register-info">
                <form method="POST" action="{{ route('register') }}" id="signup-form" name="signup-form" enctype="multipart/form-data">
                    @csrf
                    <div class="container">

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

                        <div class="row">
                            <div class="col-xl-7 col-lg-7 col-md-7">
                                <div class="p-margin">
                                    <div class="form-group">
                                        <label for="text">Full Name</label>
                                        <div class="row">
                                            <div class="col-11">
                                                <input type="text" name="fullname" id="signup-fullname" class="form-control"  placeholder="Enter full name">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-margin">
                                    <div class="form-group">
                                        <label for="text">Email</label>
                                        <div class="row">
                                            <div class="col-11">
                                                <input type="text" name="email" id="signup-email" class="form-control"  placeholder="Enter email">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-margin">
                                    <div class="form-group">
                                        <label for="text">Nationality</label>
                                        <div class="row">
                                            <div class="col-11">
                                                <input type="text" name="nationality" id="signup-nationality" class="form-control"  placeholder="Enter country name">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-margin">
                                    <div class="form-group">
                                        <label for="InputPassword1">Password</label>
                                        <div class="row">
                                            <div class="col-11">
                                                <input type="password" name="password" class="form-control" id="signup-password" placeholder="Enter password" autocomplete="new-password">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-5 col-lg-5 col-md-5">
                                <div class="container">
                                    <div class="row p-right-side">
                                        <div class="col-xl-12 col-lg-12 col-md-12 " >
                                            <div class="form-group">
                                                <div class="p-register-photo" id="signup-photoBorder">
                                                    <label for="signup-personalPhoto">
                                                        <img src="images/photographer.png" alt="profile photo"/>
                                                        <small>Upload your photo</small>
                                                        <input type="file" name="personalPhoto" id="signup-personalPhoto" class=" form-control-file style">
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-xl-12 col-lg-12 col-md-12">
                                            <div class="form-group">
                                                <div class="p-register-photo2" id="signup-photoBorder2">
                                                    <label for="signup-studentCard">
                                                        <img src="images/id-card.png" alt="student photo">
                                                        <small>Upload your student card</small>
                                                        <input type="file" name="studentCard" id="signup-studentCard" class="form-control-file style">
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <!--Term of user Button-->
                                <div class="p-userterm-box">
                                    <label>
                                        <small>By signing up, you agree to the <a href="{{ route('term') }}">Terms of Service</a> and <a href="{{ route('term') }}">Privacy Policy</a>, including Cookie Use.</small>
                                        <!-- <input type="checkbox" name="agree" id="signup-agree" autocomplete="off"><small class="form-text text-muted" style="display:inline">By signing up, you agree to the <a href="">Terms of Service</a> and <a href="">Privacy Policy</a>, including Cookie Use.</small> -->
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="button-signup">
                                <button type="submit" class="common-button-style p-register-button" name="signup-button" id="signup-btn">Sign Up</button>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
@endsection

@section('js')
<script>
    document.getElementById('signup-personalPhoto').onchange = function() {
        var imgFile = this.files[0];
        var fr = new FileReader();
        fr.onload = function() {
            document.getElementById('signup-photoBorder').getElementsByTagName('img')[0].src = fr.result;
        };
        fr.readAsDataURL(imgFile);
    };

    document.getElementById('signup-studentCard').onchange = function() {
        var imgFile = this.files[0];
        var fr = new FileReader();
        fr.onload = function() {
            document.getElementById('signup-photoBorder2').getElementsByTagName('img')[0].src = fr.result;
        };
        fr.readAsDataURL(imgFile);
    };
</script>
@stop
