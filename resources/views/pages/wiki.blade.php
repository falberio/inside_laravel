@extends("../layouts/layout_in")

@section("content")

<section id="wiki" class="container-fluid row">

@include("partials/menu_left")


<div class="main col-lg-10 col-md-9 col-sm-9 col-12">
	
	<div class="busqueda container col-md-11 col-12">
		<form action="#" class="col-md-12">
			<input type="text" placeholder="¿Qué estas buscando?" class="col-md-10 col-sm-8 col-8">
			<button><i class="fas fa-search"></i></button>
		</form>
	</div>
	

	<div class="container filters col-md-11">
		<ul>
			<li><a href="#">Todos</a></li>
			<li><a href="#">Nuevos</a></li>
			<li><a href="#">Favoritos</a></li>
			<li><a href="#">Imprescindibles</a></li>
		</ul>
	</div>

	<div class="container posts col-md-11">
		
		
		@foreach ($articles as $article)

		<div class="post">
			<div class="wrapper-img col-lg-1 col-md-2 col-sm-2 col-2">
				<a href="user/{{ $article->user_id }}"><img src="{{ $article->users->photo }}" alt=""></a>
			</div>
			
			<div class="wrapper-txt col-lg-11 col-md-10 col-sm-10 col-10">
				<p class="post-info">
					<a href="user/{{ $article->user_id }}" class="post-user">
					{{ $article->users->first_name . " " . $article->users->last_name}}
				</a>
					<span class="post-date">
					{{ $article->created_at }}
				</span>
				</p>
				<p class="post-message"><a href="article/{{ $article->id }}">
				{{ $article->title }}
			</a></p>
				
				<div class="post-actions">
					<i class="fas fa-thumbs-up"></i>
					<i class="fas fa-reply"></i>
					<i class="fas fa-share-alt"></i>
					<i class="fas fa-star"></i>
				</div>
			</div>
			
		</div>

		@endforeach
		
		


	</div>

</div>

</section>


@endsection