@extends("../layouts/layout_in")

@section("content")



<section id="timeline" class="container-fluid row">


 @include("partials/menu_left")



<div class="main col-lg-10 col-md-9 col-sm-9 col-12">

	
	
	<div class="post-new col-md-11 col-12">

		<div class="wrapper-img col-md-1 col-2">
				<img src="{{Auth::user()->photo}}" alt="">
				
				
				

			</div>

		<form id="nuevo_post" method="POST" action="posts" class="col-md-11 col-10">
			@csrf
			<input type="text" class="col-md-10 col-8" name="message" id="message" placeholder="Escribe un nuevo post...">
			<input type="text" name="user_id" value="{{Auth::user()->id}}" id="user_id" class="input_hidden">
			<button><i class="fas fa-plus"></i></button>
		</form>

		
	<!-- <div id="modal-new-msg">
		<form action="">
			<input type="text" placeholder="Escribe un nuevo post...">
		</form>
	</div> -->

	</div>

	

	

 	 @include("partials/posts_filters")

	<div class="posts col-md-11" id="recarga_posts">

		@foreach ($posts as $post)

			<div class="post">
				<div class="wrapper-img col-md-1 col-2 col-sm-2">
					<a href="user/{{ $post->user_id }}"><img src="{{ $post->users->photo }}" alt=""></a>
				</div>
				
				<div class="wrapper-txt col-md-11 col-10 col-sm-10">
					<p class="post-info">
						<a href="user/{{ $post->user_id }}" class="post-user">
							{{ $post->users->first_name . " " . $post->users->last_name}}		
						</a>

						<span class="post-date">
							{{ $post->created_at }}	
						</span>
					</p>
					<p class="post-message">
						{{ $post->message }}
					</p>
					
					<div class="post-actions">
						<i class="fas fa-thumbs-up"></i>
						<i class="fas fa-reply"></i>
						<i class="fas fa-share-alt"></i>
					</div>
				</div>
				
			</div>
		@endforeach



		

	</div>

</div>
</section>


@endsection