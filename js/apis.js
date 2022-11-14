$('#click-filmes').click(function () {

    let limit = 5;

    $.get('https://ghibliapi.herokuapp.com/films/?fields=title,original_title,description,release_date,rt_score&limit=' + limit, function (response) {

        $.each(response, function (index, json) {

            let dados = {
                'titulo' : json['title'],
                'titulo_original' : json['original_title'],
                'descricao' : json['description'],
                'data_de_lancamento' : json['release_date'],
                'pontuacao' : json['rt_score']
            }

            cadastraFilme(dados);
        });

        toastr.success('Filmes cadastrados com sucesso!', '', {
            closeButton: true,
            progressBar: true,
            positionClass: "toast-top-right",
            preventDuplicates: true,
            showDuration: "300",
            showMethod: "fadeIn",
            hideMethod: "fadeOut"
        });

        setTimeout(function () {
            location.reload();
        }, 5000);
    });
});

function cadastraFilme (dados) {

    $.ajax({
        url: 'http://localhost:3000/api/filmes/add',
        dataType: 'json',
        type: 'post',
        data: dados
    });
}

function buscaFilmes (page) {

    $.get('http://localhost:3000/api/filmes?page=' + page, function (response) {

        var table_body = 'table-body';

        if (response['totalItems'] > 0) {

            limitaDownloadApiFilmes(response['totalItems'], 200);

            $('#total-itens').html(response['totalItems']);
            $('#pagina-atual').val(response['currentPage']);
            $('#div-pagination').removeClass('hidden').fadeIn('slow');

            desabilitaBotao(response['currentPage'], response['totalPages']);

            $('#' + table_body).empty();

            $.each(response['filmes'], function (key, json) {

                $('#' + table_body)
                    .append(
                        '<tr>'+
                            '<td>'+ json['id'] +'</td>' +
                            '<td>'+ json['titulo'] +'</td>' +
                            '<td>'+ json['titulo_original'] +'</td>' +
                            '<td>'+ json['descricao'].substring(0, 50) + "..." +'</td>' +
                            '<td>'+ json['data_de_lancamento'] +'</td>' +
                            '<td>'+ json['pontuacao'] +'</td>' +
                        '</tr>'
                    );
            });
        } else {
            $('#table-body')
                .html('<tr class="txt-center"><td colspan="7">Nenhum registro encontrado!</td></tr>');
            $('#div-pagination').addClass('hidden');
        }
    });
}

function paginaFilme () {
    $('#pagina-inicial').removeClass('item-menu-ativo');
    $('#filmes').addClass('item-menu-ativo');

    $('.pagina-inicial').fadeOut('fast');
    $('.filmes, #conteudo-filmes').removeClass('hidden').fadeIn('slow');
}

function desabilitaBotao (currentPage, totalPages) {
    if (currentPage === 0) {
        $('#anterior').css({'pointer-events': 'none', 'color': '#CCCCCC'});
    } else {
        $('#anterior').css({'pointer-events': 'all', 'color': 'inherit'});
    }

    if (currentPage === (totalPages - 1)) {
        $('#proxima').css({'pointer-events': 'none', 'color': '#CCCCCC'});
    } else {
        $('#proxima').css({'pointer-events': 'all', 'color': 'inherit'});
    }
}

function limitaDownloadApiFilmes (totalItems, limitItems) {
    if (totalItems >= limitItems) {
        $('#div-aviso').addClass('hidden');
    }
}
