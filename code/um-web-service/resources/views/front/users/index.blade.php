@extends('layouts.admin-page')

@section('css')
    <!--alerts CSS -->
    <link href="{{ asset('vendor/sweetalert/sweetalert.css') }}" rel="stylesheet" type="text/css">
@endsection

@section('content_header')
    <div class="col-md-5 align-self-center">
        <h4 class="text-themecolor">Users</h4>
    </div>
    <div class="col-md-7 align-self-center text-right">
        <div class="d-flex justify-content-end align-items-center">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('admin.home') }}">Home</a></li>
                <li class="breadcrumb-item active">Users</li>
            </ol>
            <button type="button" onclick="location.href = '{{ route('admin.users.create') }}';"
                    class="btn btn-info d-none d-lg-block m-l-15"><i class="fa fa-plus-circle"></i> Create New
            </button>
        </div>
    </div>
@stop

@section('content')
    <div class="row">
        @if(count($users))
            @csrf
            @foreach($users as $l)
                <div class="col-md-3 item{{ $l->id }}">
                    <a href="{{ route('front.users.show',$l->id) }}">
                        <img src="{{ $l->avatar->url }}" alt="unimingle-user-{{ $l->id }}" class="img-responsive" style="width: 278px; height: 278px;">
                    </a>
                    <div class="card">
                        <div class="card-body">
                            <a href="{{ route('front.users.show',$l->id) }}">
                                <h5 class="card-title">{{ $l->name }}</h5>
                            </a>
                            <p>
                                <span title="{{ $l->email }}"><i class="ti-email"></i>  {{ $l->getEmail() }}</span>
                            </p>
                            <p>
                                <span><i class="ti-location-pin"></i> {{ $l->nationality }}</span>
                            </p>
                            <button class="btn btn-success btn-rounded waves-effect waves-light m-t-10"
                                    onclick="location.href = '{{ route('front.users.edit',$l->id) }}';">Edit
                            </button>
                            <button class="btn btn-danger btn-rounded waves-effect waves-light m-t-10 delete-user"
                                    data-name="{{ $l->name }}" data-id="{{ $l->id }}">Delete
                            </button>
                        </div>
                    </div>
                </div>
            @endforeach
        @else
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        No data available.
                    </div>
                </div>
            </div>
        @endif
    </div>
    {{ $users->links() }}


    <!-- Modal dialog -->
    <div id="delete_modals" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="delete_modal"
         style="display: none;" aria-modal="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="tooltipmodel">Are you sure you want to delete this user</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div class="modal-body">
                    <h5>User Name:</h5>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-info waves-effect" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-warning waves-effect" data-dismiss="modal">Submit</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
@stop

@push('js')
    <!-- Sweet-Alert  -->
    <script src="{{ asset('vendor/sweetalert/sweetalert.min.js') }}"></script>
    <script>
        $(document).on('click', '.delete-user', function () {
            // $('#name_resetpass').val($(this).data('name'));
            swal({
                title: "Are you sure you want to delete " + $(this).data('name') + " ?",
                text: "You will not be able to recover this user!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel plx!",
            }).then((isConfirm) => {
                if (isConfirm.value) {
                    id = $(this).data('id');
                    $.ajax({
                        type: 'DELETE',
                        url: location.origin + '/admin/users/' + id,
                        data: {
                            '_token': $('input[name=_token]').val(),
                        },
                        success: function (data) {
                            swal("Done!", "It was succesfully deleted!", "success");
                            $('.item' + data['id']).remove();
                        },
                        error: function (response) {
                            if (response.status == 500) {
                                swal("Server error!", "Please try again", "error");
                            } else {
                                if (response.responseJSON.error) {
                                    swal("Error!", response.responseJSON.error, "error");
                                } else {
                                    swal("Error!", 'Bad Request', "error");
                                }
                            }
                        }
                    });

                } else {
                    console.log("Operation cancelled");
                }
            });
        });
    </script>
@endpush
