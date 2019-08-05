<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="aidenpro.wang@gmail.com">
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" href="{{ asset('favicon.ico') }}">
    <title>@yield('title', config('app.name', 'Unimingle Admin System'))</title>
    @yield('adminlte_css')
    <link href="{{ asset('dist/css/style.min.css') }}" rel="stylesheet">
    <!-- toast CSS -->
    <link href="{{ asset('vendor/toast-master/css/jquery.toast.css') }}" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body class="skin-green fixed-layout">

@yield('body')

<!-- All Jquery -->
<!-- ============================================================== -->
<script src="{{ asset('vendor/jquery/jquery-3.3.1.min.js') }}"></script>
<!-- Bootstrap tether Core JavaScript -->
<script src="{{ asset('vendor/popper/popper.min.js') }}"></script>
<script src="{{ asset('vendor/bootstrap/dist/js/bootstrap.min.js') }}"></script>
<!-- slimscrollbar scrollbar JavaScript -->
<script src="{{ asset('dist/js/perfect-scrollbar.jquery.min.js') }}"></script>
<!--Wave Effects -->
<script src="{{ asset('dist/js/waves.js') }}"></script>
<!--Menu sidebar -->
<script src="{{ asset('dist/js/sidebarmenu.js') }}"></script>
<!--Custom JavaScript -->
<script src="{{ asset('dist/js/custom.min.js') }}"></script>
<!--toast -->
<script src="{{ asset('vendor/toast-master/js/jquery.toast.js') }}"></script>

@yield('adminlte_js')
</body>

</html>