@extends("../layouts/layout_in")

@section("content")



<section id="timeline" class="container-fluid row">


 @include("partials/menu_left")



<div class="main col-lg-10 col-md-9 col-sm-9 col-12">

	
	
	<div class="post-new col-md-11 col-12">

		<div class="wrapper-img col-md-1 col-2">
				<img src="{{Auth::user()->photo}}" alt="">
				
				
				

			</div>

		<form id="nuevo_post" method="post" class="col-md-11 col-10">
			<input type="text" class="col-md-10 col-8" name="message" id="message" placeholder="Escribe un nuevo post...">
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
					<a href="contact.php?user={{ $post->users->id }}"><img src="{{ $post->users->photo }}" alt=""></a>
				</div>
				
				<div class="wrapper-txt col-md-11 col-10 col-sm-10">
					<p class="post-info">
						<a href="contact.php?user=<?php echo $post['id'];?>" class="post-user">
							{{ $post->users->first_name }}		
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