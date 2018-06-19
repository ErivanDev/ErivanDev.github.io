//3 funcionalidades

$(document).ready(function(){
    //AS DESCRIÇÕES DOS JOGOS SÃO MOSTRADAS DE ACORDO COM QUAL JOGO É CLICADO

    var tituloGames = [
        ["Emoji Bubble",
        "Emoji Bubble é fruto de um trabalho da cadeira de Programação II do curso de SMD, onde o professor " +
        "pediu para os discentes criarem um Bubble Shoot, então o Bubble que desenvolvi leva os rostos dos queridos emojis."
        ],
        ["Jornada da Fé",
        "Jornada da Fé é um jogo desenvolvido com outros colegas na faculdade, onde conta a jornada " +
        "de um romeiro até a estatua do Padre Cicero."
        ],
        ["Fortaleza 2100",
        "Fortaleza 2100 é um jogo desenvolvido em equipe no segundo semestre, tendo como parceira a ong Verde Luz, " + 
        "que conta a historia de Luiza, jovem que tem como missão resolver alguns dos problemas ambientais."
        ]
    ];

    $("#slidegames img").on("click",function(){ 
        $("#tituloGame").html( tituloGames[ $(this).index() ][0]);
        $("#descricaoGame").html( tituloGames[ $(this).index() ][1]);

        var selecionado = $(this);

        $.each( $("#slidegames img") , function(index, i){ 
            $(i).removeClass().addClass("mySlides invisivel");
            if( $(i).index() == selecionado.index() ) $(i).removeClass().addClass("mySlides ativo center");
            if( $(i).index() == selecionado.index() - 1 || $(i).index() == selecionado.index() + 2 ) $(i).removeClass().addClass("mySlides inativo left");
            if( $(i).index() == selecionado.index() + 1 || $(i).index() == selecionado.index() - 2 ) $(i).removeClass().addClass("mySlides inativo right");
        });
    })
    
    //ANIMAÇÃO DAS ESTRELAS

    var v = [0,7,14,21,28,35];

    list = $(".estrelas");

    setInterval(
        function(){
            for (let i= 0; i < v.length; i++) {
                
                $(list[v[i]]).css({"bottom": "", "top": ""});
                $(list[v[i]]).animate({bottom: '5px'}, "slow");
                $(list[v[i]]).animate({top: '0px'}, "slow");

                v[i] == list.length ? v[i] = 0 : v[i]++; 
            }
        }
    ,200)

    //ALERT DE ENVIO

    $("#envie-button").click(function(){
        vazios = 0;
        $.each( $(".entradas") , function(index, i){ 
            if($(i).val() == ""){
                vazios++;
            }
        });
        vazios == 0 ? alert("Enviado com sucesso!!") : alert("Preencha todos os dados!!"); 
    });

    //FANCYBOX
    $('.fancybox').fancybox({
        toolbar  : false,
        smallBtn : true,
        iframe : {
          preload : false
        }
    })
});