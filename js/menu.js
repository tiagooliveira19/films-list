$(document).ready(function () {

    let paginaInicial = 'pagina-inicial';
    let filmes = 'filmes';

    // Comportamento menu
    $('#pagina-inicial').on('click', function () {
        $('#filmes').removeClass('item-menu-ativo');
        $(this).addClass('item-menu-ativo');

        $('.filmes').fadeOut('fast');
        $('.pagina-inicial').removeClass('hidden').fadeIn('slow');
    });

    $('#filmes').on('click', function () {
        $('#pagina-inicial').removeClass('item-menu-ativo');
        $(this).addClass('item-menu-ativo');

        $('.pagina-inicial').fadeOut('fast');
        $('.filmes, #conteudo-filmes').removeClass('hidden').fadeIn('slow');
    });

    $('#' + paginaInicial).on('mouseover', function () {
        $('#filmes').removeClass('mouseOverMenu');
        $(this).addClass('mouseOverMenu');
    });

    $('#' + filmes).on('mouseover', function () {
        $('#pagina-inicial').removeClass('mouseOverMenu');
        $(this).addClass('mouseOverMenu');
    });
});
