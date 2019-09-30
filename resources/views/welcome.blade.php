@extends("../layouts/layout")

@section("content")


<section id="header" class="row container-fluid">
    <div class="fondo">
    </div>
    
    <div class="container">
        <div class="wrapper-titular col-md-6">
            <h1>PLATAFORMA DE COMUNICACIÓN INTERNA PARA ORGANIZACIONES</h1>
            <a href="#contacto" class="btn-azul-claro">CONTACTANOS</a>
        </div>

        
        <form action="#" method="post" class="formulario col-md-5">
            <input type="text" name="usuario" placeholder="Usuario">
            <input type="password" name="password" placeholder="Contraseña">
            
            <button class="btn-azul-claro">INICIAR SESIÓN</button>
            <a href="register" class="btn-registro btn-azul-claro">REGISTRARME</a>
        </form>


        
    </div>
    
</section>




<!-------------------------------------------------------------------------------------------
------------------------------------- SECTION SERVICIOS  ------------------------------------
 -------------------------------------------------------------------------------------------->


<section id="servicios" class="row container-fluid">
    <div class="container">
        <div class="btn-servicio btn-servicio-chat">CHAT</div>
        <div class="btn-servicio btn-servicio-redsocial">RED SOCIAL</div>
        <div class="btn-servicio btn-servicio-grupos">GRUPOS</div>
        <div class="btn-servicio btn-servicio-adp">ADP</div>
        <div class="btn-servicio btn-servicio-dashboard">DASHBOARD</div>
    </div>

        <div class="servicio servicio-chat col-md-12">
            <img src="img/waves.png" alt="">
            <div class="wrapper-text col-md-8">
                <h3>Chat</h3>
                <p>Mediante este particular y muy popular sistema de charla, estaremos en condiciones de contactarnos con otras personas con las cuales entablar una conversación, en forma directa y rápida, y además gratis, lo que nos puede permitir, si así lo queremos, estar horas frente a la pantalla conociendo gente interesante.</p>
            </div>
        </div>

        <div class="servicio servicio-redsocial col-md-12">
            <img src="img/waves.png" alt="">
            <div class="wrapper-text col-md-8">
                <h3>Red social</h3>
                <p>Muchas empresas al oír el término dicen: “pero si ya estoy en Facebook”, y los más avanzados: “pero si ya tengo una estrategia en Social Media”.
                Las estrategias en social media forman parte de la comunicación y suelen situarse en los departamentos de marketing o comunicación de las empresas.</p>
            </div>
        </div>

        <div class="servicio servicio-grupos col-md-12">
            <img src="img/waves.png" alt="">
            <div class="wrapper-text col-md-8">
                <h3>Grupos</h3>
                <p>Mediante este particular y muy popular sistema de charla, estaremos en condiciones de contactarnos con otras personas con las cuales entablar una conversación, en forma directa y rápida, y además gratis, lo que nos puede permitir, si así lo queremos, estar horas frente a la pantalla conociendo gente interesante.</p>
            </div>
        </div>

        <div class="servicio servicio-adp col-md-12">
            <img src="img/waves.png" alt="">
            <div class="wrapper-text col-md-8">
                <h3>Administración de personal</h3>
                <p>Muchas empresas al oír el término dicen: “pero si ya estoy en Facebook”, y los más avanzados: “pero si ya tengo una estrategia en Social Media”.
                Las estrategias en social media forman parte de la comunicación y suelen situarse en los departamentos de marketing o comunicación de las empresas.</p>
            </div>
        </div>

        <div class="servicio servicio-dashboard col-md-12">
            <img src="img/waves.png" alt="">
            <div class="wrapper-text col-md-8">
                <h3>Dashboard</h3>
                <p>Muchas empresas al oír el término dicen: “pero si ya estoy en Facebook”, y los más avanzados: “pero si ya tengo una estrategia en Social Media”.
                Las estrategias en social media forman parte de la comunicación y suelen situarse en los departamentos de marketing o comunicación de las empresas.</p>
            </div>
        </div>
    
</section>



<!-------------------------------------------------------------------------------------------
------------------------------------- SECTION NOSOTROS  -----------------------------------
 -------------------------------------------------------------------------------------------->


<section id="nosotros" class="row container-fluid">

    <div class="wrapper-title">
        <h4>NOSOTROS</h4>
        <p class="col-md-11">Nos basamos en cuatro pilares para lograr un excelente trabajo en equipo, y creemos que nuestros clientes son parte de nuestro equipo: <span>Diversidad</span>, <span>Respeto</span>, <span>Compromiso</span> y <span>Creatividad</span>
        </p>
    </div>

    <div class="contenido-nosotros">

        <div class="item col-md-6">
            
            <div class="wrapper-text col-md-10">
                <h6>Diversidad</h6>
                <p>Estamos convencidos que no hay mejor manera de aprender que en la diversidad de opiniones.</p>
            </div>

        </div>

        <div class="item col-md-6">
            
            <div class="wrapper-text col-md-10">
                <h6>Respeto</h6>
                <p>Valoramos el respeto constante con el otro, con nosotros y con nuestros clientes.</p>
            </div>

        </div>

        <div class="item col-md-6">

            <div class="wrapper-text col-md-10">
                <h6>Compromiso</h6>
                <p>Todos nuestros colaboradores estan firmemente comprometidos con mejorar cada día.</p>
            </div>

        </div>

        <div class="item col-md-6">

            <div class="wrapper-text col-md-10">
                <h6>Creatividad</h6>
                <p>Estamos siempre abiertos a nuevas ideas, para brindarte herramientas que se adapten a tus necesidades.</p>
            </div>

        </div>





    </div>
</section>



<!-------------------------------------------------------------------------------------------
------------------------------------- SECTION RESPONSIVE  -----------------------------------
 -------------------------------------------------------------------------------------------->

<section id="responsive" class="container-fluid row">
    <div class="container">

        <div class="wrapper-img col-md-4">
            <img src="img/responsive.png" alt="">
        </div>

        <div class="wrapper-text col-md-6">
            <h4>En todos los dispositivos</h4>
            <p>Con responsive design, Inside está pensado para adaptarse a cualquier dispositivo.</p>
            <a href="#contacto" class="btn-rosa">CONTACTANOS</a>
        </div>

    </div>
</section>



<!-------------------------------------------------------------------------------------------
-------------------------------------- SECTION CLIENTES  ------------------------------------
 -------------------------------------------------------------------------------------------->

<section id="clientes" class="container-fluid row">
    <div class="container">
        <h3>Ellos ya estan adentro:</h3>
        <div class="wrapper-clientes">
            <div class="item col-md-3"><img src="" alt=""></div>
            <div class="item col-md-3"><img src="" alt=""></div>
        </div>
    </div>
</section>




<!-------------------------------------------------------------------------------------------
--------------------------------------- SECTION SIMPLE  -------------------------------------
 -------------------------------------------------------------------------------------------->


<section id="simple" class="container-fluid row">
    <div class="container">
        <h4>Estar adentro es simple</h4>
        <p>Te contactas con un representante. Acordas un plan a tu medida, y ya podes empezar.</p>
        <a href="#contacto" class="btn-azul-claro">CONTACTANOS</a>
    </div>
</section>




<!-------------------------------------------------------------------------------------------
-------------------------------------- SECTION CONTACTO  ------------------------------------
 -------------------------------------------------------------------------------------------->

<section id="contacto" class="row container-fluid">
    <div class="container">
        <h3>CONTACTO</h3>
        <form action="#" class="formulario">
            <input class="col-md-5" type="text" name="name" placeholder="Nombre">
            <input class="col-md-5" type="text" name="surname" placeholder="Apellido">
            <input class="col-md-11" type="email" name="email" placeholder="Email">
            <input class="col-md-5" type="text" name="organizacion" placeholder="Organización">
            <input class="col-md-5" type="text" name="phone" placeholder="Teléfono">
            <textarea class="col-md-11" name="message" placeholder="Mensaje"></textarea>
            <button class="btn-rosa col-md-3">ENVIAR</button>
        </form>
    </div>
</section>

@endsection

