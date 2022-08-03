//3 funcionalidades

$(document).ready(function () {
    //AS DESCRIÇÕES DOS JOGOS SÃO MOSTRADAS DE ACORDO COM QUAL JOGO É CLICADO

    var tituloGames = [
        ["Emoji Bubbles",
            "Emoji Bubbles é fruto de um trabalho da disciplina de Programação II do curso de Sistemas e Mídias Digitais, onde o professor " +
            "pediu para que os discentes criassem um Bubble Shooter, então escolhi desenvolver um que leva os rostos dos queridos emojis."
        ],
        ["Bilros",
            "Bilros é um jogo de ritmo musical, que mistura a mecânica difundida dentro dos rhythm games com a temática da cultura de renda de bilros, " +
            "prática muito comum em regiões do Brasil, como no Nordeste, região de origem dos desenvolvedores. " +
            "Desenvolvi junto com colegas, desempenhando o papel de programador."
        ],
        ["Fortaleza 2050",
            "Fortaleza 2050 é um jogo desenvolvido em equipe no segundo semestre, tendo como parceira a ong Verde Luz, " +
            "que conta a história de Luiza, jovem que tem como missão resolver alguns dos problemas ambientais."
        ]
    ];

    $("#slidegames div").on("click", function () {
        $("#tituloGame").html(tituloGames[$(this).index()][0]);
        $("#descricaoGame").html(tituloGames[$(this).index()][1]);

        var selecionado = $(this);

        $.each($("#slidegames div"), function (index, i) {
            $(i).removeClass().addClass("mySlides invisivel");
            if ($(i).index() == selecionado.index()) $(i).removeClass().addClass("mySlides ativo center");
            if ($(i).index() == selecionado.index() - 1 || $(i).index() == selecionado.index() + 2) $(i).removeClass().addClass("mySlides inativo left");
            if ($(i).index() == selecionado.index() + 1 || $(i).index() == selecionado.index() - 2) $(i).removeClass().addClass("mySlides inativo right");
        });
    })

    // NAVBAR

    $("#navbar-inner div li a").on("click", function () {
        var selecionado = $(this);

        $.each($("#navbar-inner div li a"), function (index, i) {
            $(i).removeClass();
            if ($(i).parent().index() == selecionado.parent().index()) $(i).addClass("active");
        });
    })

    var section = window.location.href.replace(window.location.origin + "/", "");
    var removeHome = false;
    var home = null;

    $.each($("#navbar-inner div li a"), function (index, i) {
        if ($(i).attr('href') == section) {
            $(i).addClass("active");
            removeHome = true;
        }
        if ($(i).attr('href') == "#home") {
            home = $(i);
        }
    });

    if (removeHome) {
        home.removeClass();
    }

    $("#navbar-logo").on("click", function () {
        window.location = window.location.origin + "#home";
        $.each($("#navbar-inner div li a"), function (index, i) {
            $(i).removeClass();
            if ($(i).attr('href') == "#home") {
                $(i).addClass("active");
            }
        });
    })

    // ANIMAÇÃO DAS ESTRELAS

    var v = [0, 7, 14, 21, 28, 35];

    list = $(".estrelas");

    setInterval(
        function () {
            for (let i = 0; i < v.length; i++) {

                $(list[v[i]]).css({ "bottom": "", "top": "" });
                $(list[v[i]]).animate({ bottom: '5px' }, "slow");
                $(list[v[i]]).animate({ top: '0px' }, "slow");

                v[i] == list.length ? v[i] = 0 : v[i]++;
            }
        }
        , 200)

    // ALERT DE ENVIO

    $("#envie-button").click(function () {
        vazios = 0;
        $.each($(".entradas"), function (index, i) {
            if ($(i).val() == "") {
                vazios++;
            }
        });
        vazios == 0 ? alert("Enviado com sucesso!!") : alert("Preencha todos os dados!!");
    });

    // FANCYBOX
    $('.fancybox').fancybox({
        toolbar: false,
        smallBtn: true,
        iframe: {
            preload: false
        }
    })
});

function showNav() {
    var x = document.getElementById("myLinks");
    if (document.getElementById('myLinks').className === "myLinkDisabled") {
        document.getElementById('myLinks').setAttribute("class", "myLinkEnabled");
    } else {
        document.getElementById('myLinks').setAttribute("class", "myLinkDisabled");
    }
}