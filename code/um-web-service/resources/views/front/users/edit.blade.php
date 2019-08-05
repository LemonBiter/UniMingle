@extends('layouts.front-master')
@section('css')
    <link href="{{ asset('dist/css/pages/file-upload.css') }}" rel="stylesheet">
    <style type="text/css">
        .navigation {
            min-height: 1100px;
            background: url('{{ asset('images/profile4.jpg') }}') no-repeat 0px 0px;
            background-size: cover;
            position: relative;
        }

        .fileinput-preview img {
            width: 182px;
            height: 240px;
            line-height: 150px;
            object-fit: cover;
        }
    </style>
@stop

@section('content-main')
    <div class="Profile-bd">
    </div>
    <section class="profile">
        <div class="profile-box">
            <aside class="col-sm-3 profile-sidebar">
                <div class="profile-sidebar-bd"></div>
                <h2 class="profile-sidebar-title" style="left: 20%;">Edit your infomation</h2>
            </aside>
            <main class="col-sm-9 profile-content" style="padding: 0;overflow: auto;">
                <div class="profile-content-box pcb1" id="profile-box" style="height: 100%;">
                    <div class="contentBox upfield">

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
                        <form id="postForm" role="form" method="post"
                              action="{{ route('front.users.update', $user->id) }}" enctype="multipart/form-data">
                            @method('PUT')
                            @csrf
                            <input type="hidden" id="id" name="id" value="{{ old('id', $user->id) }}">
                            <div class="position-box">
                                <div class="col-sm-12 col-md-8 profile-left">
                                    <div class="form-group {{ $errors->has('profile_image') ? 'has-danger' : '' }}">
                                        <h6>Profile Image</h6>
                                        <div class="fileinput fileinput-new" data-provides="fileinput">
                                            <div class="fileinput-preview img-thumbnail" data-trigger="fileinput"
                                                 style="width: 220px; height: 270px; line-height: 150px;display: flex;justify-content: center;align-items: center;">
                                                @if($user->avatar)
                                                    <img id={{ $user->avatar->id }} src="{{ $user->avatar->url }}"/>
                                                    <input name="profile_image_id" value="{{ $user->avatar->id }}"
                                                           type="hidden">
                                                @endif
                                            </div>
                                            <div>
                                            <span class="btn btn-outline-secondary btn-file">
                                                <span class="fileinput-new">Select image</span>
                                                <span class="fileinput-exists">Change</span>
                                                <input type="file" name="profile_image">
                                            </span>
                                                <a href="#" class="btn btn-outline-secondary fileinput-exists"
                                                   data-dismiss="fileinput">Remove</a>
                                            </div>

                                        </div>

                                        <small
                                                class="form-control-feedback">{{ $errors->first('profile_image') }}</small>
                                    </div>


                                    <div class="{{ $errors->has('name') ? 'has-danger' : '' }}">
                                        <h6>Name:</h6>
                                        <input type="text" id="name" name="name" class="form-control"
                                               placeholder="enter full name" value="{{ old('name', $user->name) }}">

                                        <small class="form-control-feedback">{{ $errors->first('name') }}</small>
                                    </div>

                                    <div class="form-group {{ $errors->has('email') ? 'has-danger' : '' }}">

                                        <h6>Email:</h6>
                                        <input type="text" id="email" name="email" class="form-control"
                                               placeholder="enter email address"
                                               value="{{ old('email', $user->email) }}">

                                        <small class="form-control-feedback">{{ $errors->first('email') }}</small>
                                    </div>

                                    <div class="form-group {{ $errors->has('nationality') ? 'has-danger' : '' }}">
                                        <h6>Nationality:</h6>
                                        <input type="text" id="nationality" name="nationality" class="form-control"
                                               placeholder="enter nationality"
                                               value="{{ old('nationality', $user->nationality) }}">

                                        <small class="form-control-feedback">{{ $errors->first('nationality') }}</small>
                                    </div>

                                    <h6>Description:</h6>

                                    <textarea type="text" rows="7" id="profile_description" name="profile_description"
                                              class="form-control" placeholder="tell people more about you"
                                              value="{{ $user->description}}"></textarea>


                                    <div style="margin: 50px;">
                                        <button type="submit" style="margin-right: 50px;"
                                                class="nav-link button button-caution button-pill button-pill">Submit
                                        </button>
                                        <button type="button"
                                                onclick="location.href = '{{ route('front.users.show',$user) }}';"
                                                class="nav-link button button-caution button-pill button-pill">Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>


            </main>
        </div>
    </section>
@endsection

@section('js')
    <script>
        document.getElementById('Profile-userPhoto').onchange = function () {
            var imgFile = this.files[0];
            var fr = new FileReader();
            fr.onload = function () {
                document.getElementById('Profile-userPhoto-part').getElementsByTagName('img')[0].src = fr.result;
            };
            fr.readAsDataURL(imgFile);
        };
    </script>
    <script src="{{ asset('dist/js/pages/jasny-bootstrap.js') }}"></script>
    <script src="{{ asset('vendor/inputmask/dist/min/jquery.inputmask.bundle.min.js') }}"></script>
    <script src="{{ asset('dist/js/pages/mask.init.js') }}"></script>
@stop
