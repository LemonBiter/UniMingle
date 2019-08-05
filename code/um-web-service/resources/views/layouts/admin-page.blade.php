@extends('layouts.admin-master')

@section('adminlte_css')
    @stack('css')
    @yield('css')
@stop

@section('body')
<!-- ============================================================== -->
<!-- Preloader - style you can find in spinners.css -->
<!-- ============================================================== -->
<div class="preloader">
    <div class="loader">
        <div class="loader__figure"></div>
        <p class="loader__label">Unimingle Admin</p>
    </div>
</div>
<!-- ============================================================== -->
<!-- Main wrapper - style you can find in pages.scss -->
<!-- ============================================================== -->
<div id="main-wrapper">
    <form id="logout-form" action="{{ route('logout') }}"
          method="POST" style="display: none;">
        @csrf
    </form>
    <!-- ============================================================== -->
    <!-- Topbar header - style you can find in pages.scss -->
    <!-- ============================================================== -->
    <header class="topbar">
        <nav class="navbar top-navbar navbar-expand-md navbar-dark">
            <!-- ============================================================== -->
            <!-- Logo -->
            <!-- ============================================================== -->
            <div class="navbar-header">
                <a class="navbar-brand" href="index.html">
                    <!-- Logo icon --><b>
                        <!--You can put here icon as well // <i class="wi wi-sunset"></i> //-->
                        <!-- Dark Logo icon -->
                        <img src="{{ asset('images/logo-icon.png') }}" alt="homepage" class="dark-logo" />
                        <!-- Light Logo icon -->
                        <img src="{{ asset('images/logo-light-icon.png') }}" alt="homepage" class="light-logo" />
                    </b>
                    <!--End Logo icon -->
                    <span class="hidden-xs"><span class="font-bold">Unimingle</span></span>
                </a>
            </div>
            <!-- ============================================================== -->
            <!-- End Logo -->
            <!-- ============================================================== -->
            <div class="navbar-collapse">
                <!-- ============================================================== -->
                <!-- toggle and nav items -->
                <!-- ============================================================== -->
                <ul class="navbar-nav mr-auto">
                    <!-- This is  -->
                    <li class="nav-item"> <a class="nav-link nav-toggler d-block d-md-none waves-effect waves-dark" href="javascript:void(0)"><i class="ti-menu"></i></a> </li>
                    <li class="nav-item"> <a class="nav-link sidebartoggler d-none d-lg-block d-md-block waves-effect waves-dark" href="javascript:void(0)"><i class="icon-menu"></i></a> </li>
                    <!-- ============================================================== -->
                </ul>
                <!-- ============================================================== -->
                <!-- User profile and search -->
                <!-- ============================================================== -->
                <ul class="navbar-nav my-lg-0">
                    <!-- ============================================================== -->
                    <!-- User Profile -->
                    <!-- ============================================================== -->
                    <li class="nav-item dropdown u-pro">
                        <a class="nav-link dropdown-toggle waves-effect waves-dark profile-pic" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="{{ asset('images/admin.png') }}" alt="user" class=""> <span class="hidden-md-down">{{ Auth::user()->name }} &nbsp;<i class="fa fa-angle-down"></i></span> </a>
                        <div class="dropdown-menu dropdown-menu-right animated flipInY">
                            <!-- text-->
                            {{--<a href="javascript:void(0)" class="dropdown-item"><i class="ti-user"></i> My Profile</a>--}}
                            {{--<!-- text-->--}}
                            {{--<div class="dropdown-divider"></div>--}}
                            <!-- text-->
                            {{--<a href="javascript:void(0)" class="dropdown-item"><i class="ti-settings"></i> Change password</a>--}}
                            <!-- text-->
                            <div class="dropdown-divider"></div>
                            <!-- text-->
                            <a href="#" class="dropdown-item"
                               onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                                <i class="fa fa-power-off"></i> Logout</a>
                            </a>
                            <!-- text-->
                        </div>
                    </li>
                    <!-- ============================================================== -->
                    <!-- End User Profile -->
                    <!-- ============================================================== -->
                </ul>
            </div>
        </nav>
    </header>
    <!-- ============================================================== -->
    <!-- End Topbar header -->
    <!-- ============================================================== -->
    <!-- ============================================================== -->
    <!-- Left Sidebar - style you can find in sidebar.scss  -->
    <!-- ============================================================== -->
    <aside class="left-sidebar">
        <!-- Sidebar scroll-->
        <div class="scroll-sidebar">
            <!-- Sidebar navigation-->
            <nav class="sidebar-nav">
                <ul id="sidebarnav">
                    <li class="user-pro"> <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><img src="{{ asset('images/admin.png') }}" alt="user-img" class="img-circle"><span class="hide-menu">{{ Auth::user()->name }}</span></a>
                        <ul aria-expanded="false" class="collapse">
                            {{--<li><a href="javascript:void(0)"><i class="ti-user"></i> My Profile</a></li>--}}
                            {{--<li><a href="javascript:void(0)"><i class="ti-settings"></i> Change password</a></li>--}}
                                <li>
                                <a href="#"
                                   onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                                    <i class="fa fa-power-off"></i> Logout</a>
                                </a>
                            </li>

                        </ul>
                    </li>

                    <li> <a class="waves-effect waves-dark" href="{{ route('admin.home') }}"><i class="icon-speedometer"></i><span class="hide-menu">Dashboard</span></a>
                    </li>

                    <li> <a class="waves-effect waves-dark" href="{{ route('admin.events.index') }}"><i class="ti-calendar"></i><span class="hide-menu">Event</span></a>
                    </li>

                    <li> <a class="waves-effect waves-dark" href="{{ route('admin.users.index') }}"><i class="icon-people"></i><span class="hide-menu">Users</span></a>
                    </li>

                    <li> <a class="waves-effect waves-dark" href="{{ route('admin.businessPartners.index') }}"><i class="icon-grid"></i><span class="hide-menu">Business Partners</span></a>
                    </li>

                    <li> <a class="waves-effect waves-dark" href="{{ route('admin.coupons.index') }}"><i class="icon-present"></i><span class="hide-menu">Coupons</span></a>
                    </li>

                    <li> <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="fa fa-bars"></i><span class="hide-menu">Settings</span></a>
                        <ul aria-expanded="false" class="collapse">
                            <li><a href="{{ route('admin.categories.index') }}"><i class="icon-layers"></i>   Categories</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <!-- End Sidebar navigation -->
        </div>
        <!-- End Sidebar scroll-->
    </aside>
    <!-- ============================================================== -->
    <!-- End Left Sidebar - style you can find in sidebar.scss  -->
    <!-- ============================================================== -->
    <!-- ============================================================== -->
    <!-- Page wrapper  -->
    <!-- ============================================================== -->
    <div class="page-wrapper">
        <!-- ============================================================== -->
        <!-- Container fluid  -->
        <!-- ============================================================== -->
        <div class="container-fluid">
            <!-- ============================================================== -->
            <!-- Bread crumb and right sidebar toggle -->
            <!-- ============================================================== -->
            <div class="row page-titles">
                @yield('content_header')
            </div>
            <!-- ============================================================== -->
            <!-- End Bread crumb and right sidebar toggle -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
            <!-- Start Page Content -->
            <!-- ============================================================== -->
            @yield('content')
            <!-- ============================================================== -->
            <!-- End Page Content -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
        </div>
        <!-- ============================================================== -->
        <!-- End Container fluid  -->
        <!-- ============================================================== -->
    </div>
    <!-- ============================================================== -->
    <!-- End Page wrapper  -->
    <!-- ============================================================== -->
    <!-- ============================================================== -->
    <!-- footer -->
    <!-- ============================================================== -->
    <footer class="footer">
        Copyright &copy; Unimingle {{ now()->year }} All rights reserved.
    </footer>
    <!-- ============================================================== -->
    <!-- End footer -->
    <!-- ============================================================== -->
</div>
<!-- ============================================================== -->
<!-- End Wrapper -->
<!-- ============================================================== -->
@stop

@section('adminlte_js')
    @stack('js')
    @yield('js')

    <script>
        @foreach (['error', 'warning', 'success', 'info'] as $msg)
        @if(Session::has('alert-' . $msg))
        $.toast({
            heading: '{{ ucfirst($msg) }} Alert',
            text: '{{ Session::get('alert-' . $msg) }}',
            position: 'top-right',
            loaderBg:'#ff6849',
            icon: '{{ $msg }}',
            hideAfter: 3500,
            stack: 6
        });
        @endif
        @endforeach
    </script>
@stop
