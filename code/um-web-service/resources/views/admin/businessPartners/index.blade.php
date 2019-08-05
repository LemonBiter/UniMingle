@extends('layouts.admin-page')

@section('css')
    <!--alerts CSS -->
    <link href="{{ asset('vendor/sweetalert/sweetalert.css') }}" rel="stylesheet" type="text/css">
@endsection

@section('content_header')
    <div class="col-md-5 align-self-center">
        <h4 class="text-themecolor">Business Partners</h4>
    </div>
    <div class="col-md-7 align-self-center text-right">
        <div class="d-flex justify-content-end align-items-center">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('admin.home') }}">Home</a></li>
                <li class="breadcrumb-item active">Business Partners</li>
            </ol>
            <button type="button" onclick="location.href = '{{ route('admin.businessPartners.create') }}';"
                    class="btn btn-info d-none d-lg-block m-l-15"><i class="fa fa-plus-circle"></i> Create New
            </button>
        </div>
    </div>
@stop

@section('content')
    <div class="row">
        @if(count($businessPartners))
            @csrf
            @foreach($businessPartners as $l)
                <div class="col-md-3 item{{ $l->id }}">
                    <a href="{{ route('admin.businessPartners.show',$l->id) }}">
                        @if($l->logo)
                            <img src="{{ $l->logo->url }}" alt="unimingle-businessPartner-{{ $l->id }}" class="img-responsive" style="width: 278px; height: 278px;">
                        @else
                            <img src="{{ asset('images/businessPartner-default-cover.jpg') }}" alt="unimingle-businessPartner-default-cover" class="img-responsive" style="width: 278px; height: 278px;">
                        @endif
                    </a>
                    <div class="card">
                        <div class="card-body">
                            <a href="{{ route('admin.businessPartners.show',$l->id) }}">
                                <h5 class="card-title" title="{{ $l->name }}">{{ $l->getName() }}</h5>
                            </a>
                            <p>
                                <span title="{{ $l->location }}"><i class="ti-location-pin"></i> {{ $l->getLocation() }}</span>
                            </p>
                            <button class="btn btn-success btn-rounded waves-effect waves-light m-t-10"
                                    onclick="location.href = '{{ route('admin.businessPartners.edit',$l->id) }}';">Edit
                            </button>
                            <button class="btn btn-danger btn-rounded waves-effect waves-light m-t-10 delete-businessPartner"
                                    data-name="{{ $l->title }}" data-id="{{ $l->id }}">Delete
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
    {{ $businessPartners->links() }}


    <!-- Modal dialog -->
    <div id="delete_modals" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="delete_modal"
         style="display: none;" aria-modal="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="tooltipmodel">Are you sure you want to delete this businessPartner</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div class="modal-body">
                    <h5>Business Partner Name:</h5>
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
        $(document).on('click', '.delete-businessPartner', function () {
            // $('#name_resetpass').val($(this).data('name'));
            swal({
                title: "Are you sure you want to delete " + $(this).data('name') + " ?",
                text: "You will not be able to recover this businessPartner!",
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
                        url: location.origin + '/admin/businessPartners/' + id,
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
