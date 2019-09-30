@extends("../layouts/layout_inside")

@section("content")

<section id="profile" class="container-fluid row">

@include("partials/menu_left")


<div class="main col-lg-10 col-md-9 col-sm-9 col-12">
	
	<div class="user col-md-11 col-12">

		<div class="wrapper-img col-md-2 col-2">
			<img src="<?php echo $foto ; ?>" alt="">
		</div>

		<div class="wrapper-txt col-md-10 col-10">
			<p class="user-name"><?php echo $nombreCompleto ; ?></p>
			<p class="job-title">Aprendiz</p>
			<p class="area"><a href="area.php?area=<?php echo $area_id;?>"><?php echo $area ; ?></a></p>
			<div class="actions">
				<i class="fas fa-envelope"></i>
				<i class="fas fa-comment"></i>
				<i class="fab fa-skype"></i>
				<i class="fas fa-phone"></i>
			</div>
		</div>
	</div>

	<?php 
	require_once 'partials/posts_filters.php';
 	?>

	<div class="posts col-md-11">
		
		<?php foreach ($posts as $post): ?>

			<div class="post">
				<div class="wrapper-img col-md-1 col-2 col-sm-2">
					<a href="contact.php?user=<?php echo $post['id'];?>"><img src="<?php echo $post['photo'];?>" alt=""></a>
				</div>
				
				<div class="wrapper-txt col-md-11 col-10 col-sm-10">
					<p class="post-info">
						<a href="contact.php?user=<?php echo $post['id'];?>" class="post-user">
							<?php echo $post['first_name'] . " " . $post['last_name'];?>		
						</a>

						<span class="post-date">
							<?php echo $post[3];?>
						</span>
					</p>
					<p class="post-message">
						<?php echo $post['message'];?>
					</p>
					
					<div class="post-actions">
						<i class="fas fa-thumbs-up"></i>
						<i class="fas fa-reply"></i>
						<i class="fas fa-share-alt"></i>
					</div>
				</div>
				
			</div>
		<?php endforeach; ?>

	</div>
</div>
</section>

<?php 
	require_once 'partials/footer_scripts.php';
 ?>