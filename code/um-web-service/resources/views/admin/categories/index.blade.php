@extends('layouts.admin-page')

@section('css')
    <!--alerts CSS -->
    <link href="{{ asset('vendor/sweetalert/sweetalert.css') }}" rel="stylesheet" type="text/css">
@endsection

@section('content_header')
    <div class="col-md-5 align-self-center">
        <h4 class="text-themecolor">Categories</h4>
    </div>
    <div class="col-md-7 align-self-center text-right">
        <div class="d-flex justify-content-end align-items-center">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('admin.home') }}">Home</a></li>
                <li class="breadcrumb-item active">Categories</li>
            </ol>
            <button type="button" onclick="location.href = '{{ route('admin.categories.create') }}';"
                    class="btn btn-info d-none d-lg-block m-l-15"><i class="fa fa-plus-circle"></i> Create New
            </button>
        </div>
    </div>
@stop

@section('content')
    <div class="row">
        <div class="col-lg-9">
            <div class="card">
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table color-table info-table">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Last Update</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>

                            @if(count($categories))
                                @csrf
                                @foreach($categories as $key=>$l)
                                    <tr class="item{{$l->id}}">
                                        <td>{{ ++$key }}</td>
                                        <td>
                                            <a href="{{ route('admin.categories.show',$l->id) }}">
                                                <h5 class="card-title" title="{{ $l->name }}">{{ $l->getName() }}</h5>
                                            </a>
                                        </td>

                                        <td>{{ $l->getUpdatedDate() }}</td>
                                        <td>
                                            <button class="btn btn-success btn-rounded waves-effect waves-light"
                                                    onclick="location.href = '{{ route('admin.categories.edit',$l->id) }}';">
                                                Edit
                                            </button>
                                            <button class="btn btn-danger btn-rounded waves-effect waves-light delete-category"
                                                    data-name="{{ $l->title }}" data-id="{{ $l->id }}">Delete
                                            </button>
                                        </td>
                                    </tr>
                                @endforeach
                            @else
                                <tr>
                                    <td colspan="4">No data available.</td>
                                </tr>
                            @endif
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {{ $categories->links() }}

    <!-- Modal dialog -->
    <div id="delete_modals" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="delete_modal"
         style="display: none;" aria-modal="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="tooltipmodel">Are you sure you want to delete this category</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div class="modal-body">
                    <h5>category Name:</h5>
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
        $(document).on('click', '.delete-category', function () {
            // $('#name_resetpass').val($(this).data('name'));
            swal({
                title: "Are you sure you want to delete " + $(this).data('name') + " ?",
                text: "You will not be able to recover this category!",
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
                        url: location.origin + '/admin/categories/' + id,
                        data: {
                            '_token': $('input[name=_token]').val(),
                        },
                        success: function (data) {
                            $('.item' + data['id']).remove();
                            swal("Done!", "It was succesfully deleted!", "success").then((isConfirm) => {
                                if (isConfirm.value) {
                                    window.location.reload(); // refresh page
                                }
                            });
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
