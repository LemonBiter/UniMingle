<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <title>{{ config('app.name', 'Laravel') }}</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab" rel="stylesheet">
    <!-- Styles -->
    <link rel="icon" type="image/png" href="{{ asset('favicon.ico') }}">
    <!-- toast CSS -->
    <link href="{{ asset('vendor/toast-master/css/jquery.toast.css') }}" rel="stylesheet">

    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/bootstrap/dist/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/buttons.css') }}">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <!--datepicker-->
    <link rel="stylesheet" href="{{ asset('vendor/jquery-ui-1.12.1.custom/jquery-ui.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/jquery-ui-1.12.1.custom/jquery-ui.structure.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/jquery-ui-1.12.1.custom/jquery-ui.theme.css') }}">
    <!--timepicker-->
    <link rel="stylesheet" href="{{ asset('vendor/jonthornton-jquery-timepicker-99bc9e3/jquery.timepicker.css') }}">
    @yield('css')
    <style type="text/css">
        .dropdown-item {
            color: white;
            font-family: Helvetica, Arial, sans-serif;
        }

    </style>
</head>
<body>

<!-- ********************************************************** -->
<section class="col-xs-12 navigation p-background-scroll">
    <div class="header">

        <div class="p-nav-row">
            <div class="logo">
                <a href="/"><img src="{{ asset('images/logo.png') }}" alt="logo" width="156"></a>
            </div>
            <div class="p-nav-item">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="#"></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav p-nav-flex">
                            <li class="nav-item active nav-flexitem">
                                <a class="nav-link button button-caution button-pill button-pill"
                                   href="{{ route('front.events.index') }}">Find an
                                    activity</a>
                            </li>
                            <li class="nav-item nav-flexitem">
                                <a class="nav-link p-navigation-font" href="{{ route('front.events.create') }}">Create
                                    new activity</a>
                            </li>

                            <li class=" nav-item nav-flexitem dropdown show">
                                <a class="nav-link p-navigation-font dropdown-toggle" style="color: white;" href="#"
                                   role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                   aria-expanded="false">
                                    Categories
                                </a>

                                <div id="menu-categories" class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                </div>
                            </li>


                            <li class="nav-item nav-flexitem">
                                <a class="nav-link p-navigation-font" href="/#workprocess">How we work</a>
                            </li>

                            @if (Route::has('login'))
                                @auth
                                    <li class="nav-item nav-flexitem">
                                        <a href="{{ Auth::user()->hasRole('super-admin')? '/admin': '/home' }}"
                                           class="nav-link p-navigation-font" id="MyAccount" href="">My account</a>
                                    </li>

                                    <li class="nav-item nav-flexitem">
                                        <a class="nav-link p-navigation-font" href="#"
                                           onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                                            Log out
                                        </a>

                                        <form id="logout-form" action="{{ route('logout') }}"
                                              method="POST" style="display: none;">
                                            @csrf
                                        </form>
                                    </li>
                                @else
                                    <li class="nav-item nav-flexitem">
                                        <a class="nav-link p-navigation-font" id="LogIn" href="{{ route('login') }}">Log
                                            in</a>
                                    </li>
                                    @if (Route::has('register'))
                                        <li class="nav-item nav-flexitem">
                                            <a class="nav-link p-navigation-font" href="{{ route('register') }}">Sign
                                                up</a>
                                        </li>
                                    @endif
                                @endauth
                            @endif
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    @yield('content-main')
</section>

@yield('content-other')

<footer class="footer">
    <div class="container">
        <div class="row">
            @csrf
            <div class="col-lg-4 col-md-4 col-6 footer-box footer-1">

                <a class="nav-link" href="{{ route('front.events.index') }}">Find a activity</a>
                <a class="nav-link CreateEvent" href="{{ route('front.events.create') }}">Create new activity</a>
                <a class="nav-link" href="/#workprocess">How we work</a>


                @if (Route::has('login'))
                    @auth
                        <a class="nav-link" href="#"
                           onclick="event.preventDefault(); document.getElementById('logout-form-bottom').submit();">
                            Log out
                        </a>

                        <form id="logout-form-bottom" action="{{ route('logout') }}"
                              method="POST" style="display: none;">
                            @csrf
                        </form>
                    @else
                        <a class="nav-link" href="{{ route('login') }}">Log in</a>
                        @if (Route::has('register'))
                            <a class="nav-link" href="{{ route('register') }}">Sign up</a>
                        @endif
                    @endauth
                @endif
            </div>
            <div class="col-lg-4 col-md-4 col-6 footer-box footer-2">

                <a class="nav-link" href="{{ route('term') }}">Terms of Service</a>
                <a class="nav-link" href="{{ route('policy') }}">Privacy Policy</a>

            </div>
            <div class="col-lg-4 col-md-4 col-6 footer-box footer-3">
                <ul>
                    <li class="ins">
                        <a class="p-footer-icon-a" href="https://www.instagram.com/unimingle15/">
                            <i class="fab fa-instagram"></i>
                            <p>Instagram</p>
                        </a>
                    </li>
                    <li class="twitter">
                        <a class="p-footer-icon-a" href="https://twitter.com/MingleUni">
                            <i class="fab fa-twitter-square"></i>
                            <p>Twitter</p>
                        </a>
                    </li>
                    <li class="facebook">
                        <a class="p-footer-icon-a" href="https://www.facebook.com/uoa.unimingle.1">
                            <i class="fab fa-facebook-square"></i>
                            <p>Facebook</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>
<!-- Scripts -->
<script src="{{ asset('vendor/jquery/jquery-3.3.1.min.js') }}"></script>
<script src="{{ asset('vendor/jquery-validation-1.19.0/lib/jquery.js') }}"></script>
<script src="{{ asset('vendor/jquery-validation-1.19.0/dist/jquery.validate.min.js') }}"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"
        integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4"
        crossorigin="anonymous"></script>

<script src="{{ asset('vendor/bootstrap/dist/js/bootstrap.min.js') }}"></script>
<script src="{{ asset('js/main.js') }}"></script>
<!-- Modal Window-->
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

<!-- datePicker-->
<script src="{{ asset('vendor/jquery-ui-1.12.1.custom/jquery-ui.js') }}"></script>
<!-- timePicker-->
<script src="{{ asset('vendor/jonthornton-jquery-timepicker-99bc9e3/jquery.timepicker.js') }}"></script>

<!--toast -->
<script src="{{ asset('vendor/toast-master/js/jquery.toast.js') }}"></script>

<script>
    @foreach (['error', 'warning', 'success', 'info'] as $msg)
    @if(Session::has('alert-' . $msg))
    $.toast({
        heading: '{{ ucfirst($msg) }} Alert',
        text: '{{ Session::get('alert-' . $msg) }}',
        position: 'top-right',
        loaderBg: '#ff6849',
        icon: '{{ $msg }}',
        hideAfter: 3500,
        stack: 6
    });
    @endif
    @endforeach

    $(document).ready(function () {
        // build menu-categories
        let url = '/events/getCategories';
        $.ajax({
            type: 'GET',
            url: url,
            data: {
                '_token': $('input[name=_token]').val(),
            },
            success: function (data) {
                for (let i = 0; i < data.length; i++) {
                    let menu_item = $("<a />", {
                        id: "category-" + data[i].id,
                        class: "dropdown-item",
                        href: "/events?q_category=" + data[i].id,
                        text: data[i].name
                    });
                    menu_item.appendTo('#menu-categories');
                }
            },
            error: function (response) {
                if (response.status == 500) {
                    console.log('menu getCategories server error');
                } else {
                    console.log('menu getCategories Bad Request');
                }
            }
        });
    });

</script>
@yield('js')
</body>
</html>
