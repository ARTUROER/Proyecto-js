$(document).ready(function () {

    //Slider
    if(window.location.href.indexOf('index') > -1){
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: false,
        slideWidth: 1200,
        responsive: true
    });
    }

    //Posts
    if(window.location.href.indexOf('index') > -1){
    var posts = [
        {
            title: 'Prueba de titulo 1',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed vestibulum ex. Aliquam id sapien mauris.Maecenas non magna vestibulum, suscipit purus sit amet, dictum sapien.Utpretium tempor facilisis.Morbi hendrerit ex eget nunc congue blandit.Curabitur semper nisi sitamet sollicitudin mollis.Fusce faucibus in augue non porta.Class aptent taciti sociosqu adlitora torquent per conubia nostra, per inceptos himenaeos.Suspendisse gravida sem a nuncfringilla, a luctus risus viverra.Orci varius natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.Praesent felis augue, egestas non enim et, gravida mattis nulla. Suspendisse potenti.Cras hendrerit augue ac leo pharetra, ac malesuada diam interdum.Proin eget turpis sit amet erat bibendum feugiat.Praesent finibus vitae nisi in dapibus.Quisque semper dictum justo non condimentum eros aliquet a."
        },
        {
            title: 'Prueba de titulo 2',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed vestibulum ex. Aliquam id sapien mauris.Maecenas non magna vestibulum, suscipit purus sit amet, dictum sapien.Utpretium tempor facilisis.Morbi hendrerit ex eget nunc congue blandit.Curabitur semper nisi sitamet sollicitudin mollis.Fusce faucibus in augue non porta.Class aptent taciti sociosqu adlitora torquent per conubia nostra, per inceptos himenaeos.Suspendisse gravida sem a nuncfringilla, a luctus risus viverra.Orci varius natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.Praesent felis augue, egestas non enim et, gravida mattis nulla. Suspendisse potenti.Cras hendrerit augue ac leo pharetra, ac malesuada diam interdum.Proin eget turpis sit amet erat bibendum feugiat.Praesent finibus vitae nisi in dapibus.Quisque semper dictum justo non condimentum eros aliquet a."
        },
        {
            title: 'Prueba de titulo 3',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed vestibulum ex. Aliquam id sapien mauris.Maecenas non magna vestibulum, suscipit purus sit amet, dictum sapien.Utpretium tempor facilisis.Morbi hendrerit ex eget nunc congue blandit.Curabitur semper nisi sitamet sollicitudin mollis.Fusce faucibus in augue non porta.Class aptent taciti sociosqu adlitora torquent per conubia nostra, per inceptos himenaeos.Suspendisse gravida sem a nuncfringilla, a luctus risus viverra.Orci varius natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.Praesent felis augue, egestas non enim et, gravida mattis nulla. Suspendisse potenti.Cras hendrerit augue ac leo pharetra, ac malesuada diam interdum.Proin eget turpis sit amet erat bibendum feugiat.Praesent finibus vitae nisi in dapibus.Quisque semper dictum justo non condimentum eros aliquet a."
        },
        {
            title: 'Prueba de titulo 4',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed vestibulum ex. Aliquam id sapien mauris.Maecenas non magna vestibulum, suscipit purus sit amet, dictum sapien.Utpretium tempor facilisis.Morbi hendrerit ex eget nunc congue blandit.Curabitur semper nisi sitamet sollicitudin mollis.Fusce faucibus in augue non porta.Class aptent taciti sociosqu adlitora torquent per conubia nostra, per inceptos himenaeos.Suspendisse gravida sem a nuncfringilla, a luctus risus viverra.Orci varius natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.Praesent felis augue, egestas non enim et, gravida mattis nulla. Suspendisse potenti.Cras hendrerit augue ac leo pharetra, ac malesuada diam interdum.Proin eget turpis sit amet erat bibendum feugiat.Praesent finibus vitae nisi in dapibus.Quisque semper dictum justo non condimentum eros aliquet a."
        },
        {
            title: 'Prueba de titulo 5',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed vestibulum ex. Aliquam id sapien mauris.Maecenas non magna vestibulum, suscipit purus sit amet, dictum sapien.Utpretium tempor facilisis.Morbi hendrerit ex eget nunc congue blandit.Curabitur semper nisi sitamet sollicitudin mollis.Fusce faucibus in augue non porta.Class aptent taciti sociosqu adlitora torquent per conubia nostra, per inceptos himenaeos.Suspendisse gravida sem a nuncfringilla, a luctus risus viverra.Orci varius natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.Praesent felis augue, egestas non enim et, gravida mattis nulla. Suspendisse potenti.Cras hendrerit augue ac leo pharetra, ac malesuada diam interdum.Proin eget turpis sit amet erat bibendum feugiat.Praesent finibus vitae nisi in dapibus.Quisque semper dictum justo non condimentum eros aliquet a."
        },
        {
            title: 'Prueba de titulo 6',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed vestibulum ex. Aliquam id sapien mauris.Maecenas non magna vestibulum, suscipit purus sit amet, dictum sapien.Utpretium tempor facilisis.Morbi hendrerit ex eget nunc congue blandit.Curabitur semper nisi sitamet sollicitudin mollis.Fusce faucibus in augue non porta.Class aptent taciti sociosqu adlitora torquent per conubia nostra, per inceptos himenaeos.Suspendisse gravida sem a nuncfringilla, a luctus risus viverra.Orci varius natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.Praesent felis augue, egestas non enim et, gravida mattis nulla. Suspendisse potenti.Cras hendrerit augue ac leo pharetra, ac malesuada diam interdum.Proin eget turpis sit amet erat bibendum feugiat.Praesent finibus vitae nisi in dapibus.Quisque semper dictum justo non condimentum eros aliquet a."
        },
    ];

    posts.forEach((item, index) => {
        var post = `
            <article class="post">
                        <h2>${item.title}</h2>
                        <span class="date">${item.date}</span>
                        <p>
                        ${item.content}
                        </p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
        `;
        $("#posts").append(post);   
    });
    }

    // Selector de tema
    var theme = $("#theme");

    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");    
    });

    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");    
    });

    // Scroll arriba de la web
    $('.subir').click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    // Login falso

    $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");

        $("#about p").html("<br><strong>Bienvenido, "+form_name+"</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });

        $("#login").hide();
    }

    // Acordeon
    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    }

    // Reloj
    if(window.location.href.indexOf('reloj') > -1){

        setInterval(function(){
            var reloj = moment().format('hh:mm:ss');
            $("#reloj").html(reloj);
        }, 1000);
    }

    // Validación
    if(window.location.href.indexOf('contacto') > -1){

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es'
        });
    }
});