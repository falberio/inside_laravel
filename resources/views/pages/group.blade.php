@extends("../layouts/layout_inside")

@section("content")

<section id="group" class="container-fluid row">



@include("partials/menu_left")


<div class="main col-lg-10 col-md-9 col-sm-9 col-12">

	<div class="group col-md-11">

		<div class="wrapper-img col-md-2 col-2">
			<img src="../{{ $group->photo }}" alt="">
		</div>

		<div class="wrapper-txt col-md-10 col-10">
			<p class="name">{{ $group->name }}</p>
			<p class="description">{{ $group->description }}</p>
			<a href="" class="members">36 <i class="fas fa-users"></i></a>
			<div class="actions">
				<i class="fas fa-envelope"></i>
				<i class="fas fa-comment"></i>
				<i class="fab fa-skype"></i>
				<i class="fas fa-handshake"></i>
			</div>
		</div>
	</div>

	<div class="filters col-md-11">
		<ul>
			<li><a href="#">Miembros</a></li>
			<li><a href="#">Posts</a></li>
			<li><a href="#">Menciones</a></li>
			<li><a href="#">Artículos</a></li>
			<li><a href="#">Seguidores</a></li>
		</ul>
	</div>

	<div class="container members col-md-11">
	
		@foreach ($users as $user)
		
			<div class="member">
			<div class="wrapper-img col-lg-1 col-md-2 col-sm-2 col-2">
				<img src="../{{$user->photo}}" alt="">
			</div>
			
			<div class="wrapper-txt col-lg-11 col-md-10 col-sm-10 col-10">
				<p class="info">
					<a href="../user/{{$user->id}}" class="user-name">
					{{ $user->first_name . " " . $user->last_name }}

					
				</a>
				</p>
				<p class="job-title">
					{{$user->jobs->name}}
					<span class="separator">|</span><span class="area">
					{{$user->areas->name}}
				</span></p>
				
				<div class="actions">
					<i class="fas fa-envelope"></i>
					<i class="fas fa-comment"></i>
					<i class="fab fa-skype"></i>
					<i class="fas fa-phone"></i>
				</div>
			</div>
			
		</div>

		@endforeach

	</div>	


</div>

</section>

@endsection