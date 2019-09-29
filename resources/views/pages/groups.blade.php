@extends("../layouts/layout_in")

@section("content")

<section id="groups" class="container-fluid row">

@include("partials/menu_left")


<div class="main col-lg-10 col-md-9 col-sm-9 col-12">
	

	<div class="filters col-md-11">
		<ul>
			<li><a href="#">Miembros</a></li>
			<li><a href="#">Posts</a></li>
			<li><a href="#">Menciones</a></li>
			<li><a href="#">Artículos</a></li>
			<li><a href="#">Seguidores</a></li>
		</ul>
	</div>

	<div class="container groups col-md-11">
	
		
		@foreach ($groups as $group)

			<div class="group">
			<div class="wrapper-img col-lg-1 col-md-2 col-sm-2 col-2">
				<a href="group/{{ $group->id }}"><img src="{{ $group->photo }}" alt=""></a>
			</div>
			
			<div class="wrapper-txt col-lg-11 col-md-10 col-sm-10 col-10">
				<p class="info">
					<a href="group/{{ $group->id }}" class="user-name">
					{{ $group->name }}	
				</a>
				</p>
				<p class="description">
					{{ $group->description }}
					<span class="separator">|</span><span class="members"><a href="rrhh.php">18 <i class="fas fa-users"></i></a></span></p>


				<div class="actions">
					<i class="fas fa-envelope"></i>
					<i class="fas fa-comment"></i>
					<i class="fab fa-skype"></i>
					<i class="fas fa-handshake"></i>
				</div>
			</div>
		
		</div>

		@endforeach

			

	

	</div>


</div>

</section>

@endsection