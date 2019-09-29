@extends("../layouts/layout_in")

@section("content")

<section id="contacts" class="container-fluid row">

@include("partials/menu_left")


<div class="main col-lg-10 col-md-9 col-sm-9 col-12">
	

	<div class="container filters col-md-11">
		<ul>
			<li><a href="#">Todos</a></li>
			<li><a href="#">Seguidos</a></li>
			<li><a href="#">Segidores</a></li>
			<li><a href="#">Invitaciones</a></li>
		</ul>
	</div>

	<div class="container contacts col-md-11">
	

	@foreach ($users as $user)
		
		<div class="contact">
			<div class="wrapper-img col-lg-1 col-md-2 col-sm-2 col-2">
				<a href="user/{{ $user->id }}"><img src="{{ $user->photo }}	" alt=""></a>
			</div>
			
			<div class="wrapper-txt col-lg-11 col-md-10 col-sm-10 col-10">
				<p class="info">
					<a href="user/{{ $user->id }}" class="user-name">{{ $user->first_name . " " . $user->last_name}}</a>
				</p>
				<p class="job-title">
					{{ $user->jobs->name }}
					<span class="separator">|</span><span class="area"><a href="group.php">
					{{ $user->areas->name }}
				</a></span></p>
				
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

