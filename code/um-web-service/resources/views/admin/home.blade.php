@extends('layouts.admin-page')

@section('css')
    <!-- chartist CSS -->
    <link href="{{ asset('vendor/morrisjs/morris.css') }}" rel="stylesheet"/>
    <!-- Vector CSS -->
    <link href="{{ asset('vendor/vectormap/jquery-jvectormap-2.0.2.css') }}" rel="stylesheet"/>
    <!--c3 CSS -->
    <link href="{{ asset('dist/css/pages/easy-pie-chart.css') }}" rel="stylesheet">
    <!-- Dashboard 1 Page CSS -->
    <link href="{{ asset('dist/css/pages/dashboard2.css') }}" rel="stylesheet">
@endsection

@section('content_header')
    <div class="col-md-5 align-self-center">
        <h4 class="text-themecolor">Dashboard</h4>
    </div>
    <div class="col-md-7 align-self-center text-right">
        <div class="d-flex justify-content-end align-items-center">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('admin.home') }}">Home</a></li>
                <li class="breadcrumb-item active">Dashboard</li>
            </ol>
        </div>
    </div>
@stop

@section('content')
    <div class="row">

        <!-- column -->
        <div class="col-md-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">TOTAL USERS</h5>
                    <div class="d-flex m-t-30 m-b-20 no-block align-items-center">
                        <span class="display-5 text-info"><i class="icon-people"></i></span>
                        <a href="javscript:void(0)" class="link display-5 ml-auto">{{ $total_users_count }}</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- column -->
        <div class="col-md-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">TOTAL EVENTS</h5>
                    <div class="d-flex m-t-30 m-b-20 no-block align-items-center">
                        <span class="display-5 text-purple"><i class="icon-cup"></i></span>
                        <a href="javscript:void(0)" class="link display-5 ml-auto">{{ $total_events_count }}</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- column -->
        <div class="col-md-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">OPEN EVENTS</h5>
                    <div class="d-flex m-t-30 m-b-20 no-block align-items-center">
                        <span class="display-5 text-primary"><i class="icon-book-open"></i></span>
                        <a href="javscript:void(0)" class="link display-5 ml-auto">{{ $open_events_count }}</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- column -->
        <div class="col-md-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">TOTAL VISITS</h5>
                    <div class="d-flex m-t-30 m-b-20 no-block align-items-center">
                        <span class="display-5 text-success"><i class="icon-graph"></i></span>
                        <a href="javscript:void(0)" class="link display-5 ml-auto">{{ $total_visits_count }}</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-8">
                            <h5 class="card-title">SITES VISITS</h5>
                            <div id="visitfromworld" style="width:100%!important; height:415px">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <ul class="country-state slimscrollcountry ps ps--theme_default ps--active-y"
                                data-ps-id="7cdc8c46-1e7f-9790-dd6b-31c95a94ff6d">

                                <li>
                                    <h2>120</h2>
                                    <small>From Australia</small>
                                    <div class="pull-right">80% <i class="fa fa-level-down text-danger"></i></div>
                                    <div class="progress">
                                        <div class="progress-bar bg-success" role="progressbar" aria-valuenow="50"
                                             aria-valuemin="0" aria-valuemax="100" style="width:80%; height: 6px;"><span
                                                    class="sr-only">80% Complete</span></div>
                                    </div>
                                </li>

                                <li>
                                    <h2>20</h2>
                                    <small>From China</small>
                                    <div class="pull-right">14% <i class="fa fa-level-up text-success"></i></div>
                                    <div class="progress">
                                        <div class="progress-bar bg-success" role="progressbar" aria-valuenow="50"
                                             aria-valuemin="0" aria-valuemax="100" style="width:14%; height: 6px;"><span
                                                    class="sr-only">14% Complete</span></div>
                                    </div>
                                </li>

                                <li>
                                    <h2>10</h2>
                                    <small>From India</small>
                                    <div class="pull-right">6% <i class="fa fa-level-up text-success"></i></div>
                                    <div class="progress">
                                        <div class="progress-bar bg-success" role="progressbar" aria-valuenow="50"
                                             aria-valuemin="0" aria-valuemax="100" style="width:6%; height: 6px;"><span
                                                    class="sr-only">6% Complete</span></div>
                                    </div>
                                </li>

                                <div class="ps__scrollbar-x-rail" style="left: 0px; bottom: -299px;">
                                    <div class="ps__scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                                </div>
                                <div class="ps__scrollbar-y-rail" style="top: 299px; height: 280px; right: 0px;">
                                    <div class="ps__scrollbar-y" tabindex="0" style="top: 144px; height: 135px;"></div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@stop

@push('js')
    <!-- ============================================================== -->
    <!-- This page plugins -->
    <!-- ============================================================== -->
    <!-- Flot Charts JavaScript -->
    <script src="{{ asset('vendor/flot/jquery.flot.js') }}"></script>
    <script src="{{ asset('vendor/flot.tooltip/js/jquery.flot.tooltip.min.js') }}"></script>
    <!--sparkline JavaScript -->
    <script src="{{ asset('vendor/sparkline/jquery.sparkline.min.js') }}"></script>
    <!-- EASY PIE CHART JS -->
    <script src="{{ asset('vendor/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js') }}"></script>
    <script src="{{ asset('vendor/jquery.easy-pie-chart/easy-pie-chart.init.js') }}"></script>
    <!-- Vector map JavaScript -->
    <script src="{{ asset('vendor/vectormap/jquery-jvectormap-2.0.2.min.js') }}"></script>
    <script src="{{ asset('vendor/vectormap/jquery-jvectormap-world-mill-en.js') }}"></script>
    <!-- Chart JS -->
    <script src="{{ asset('dist/js/dashboard2.js') }}"></script>
@endpush