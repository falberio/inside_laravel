@extends("../layouts/layout_in")

@section("content")

<section id="profile" class="container-fluid row">

@include("partials/menu_left")


<div class="main col-lg-10 col-md-9 col-sm-9 col-12">
	
	<div class="user col-md-11 col-12">

		<div class="wrapper-img col-md-2 col-2">
			<img src="{{ $user->photo }}" alt="">
		</div>

		<div class="wrapper-txt col-md-10 col-10">
			<p class="user-name">
				{{ $user->first_name . " " . $user->last_name}}
			</p>
			<p class="job-title">Aprendiz</p>
			<p class="area"><a href="">{{ $user->areas->name }}</a></p>
			<div class="actions">
				<i class="fas fa-envelope"></i>
				<i class="fas fa-comment"></i>
				<i class="fab fa-skype"></i>
				<i class="fas fa-phone"></i>
			</div>
		</div>
	</div>

	@include("partials/posts_filters")

	<div class="posts col-md-11">
		
		@foreach ($posts as $post)

			<div class="post">
				<div class="wrapper-img col-md-1 col-2 col-sm-2">
					<a href=""><img src="{{ $post->users->photo }}" alt=""></a>
				</div>
				
				<div class="wrapper-txt col-md-11 col-10 col-sm-10">
					<p class="post-info">
						<a href="" class="post-user">
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