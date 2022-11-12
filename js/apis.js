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

function buscaFilmes () {

    $.get('http://localhost:3000/api/filmes', function (response) {

        var table_body = 'table-body';
        console.log(response);


        if (response['totalItems'] > 0) {

            // $('#div-aviso').addClass('hidden');
            $('#total-itens').html(response['totalItems']);

            $('#' + table_body).empty();

            $.each(response['filmes'], function (key, json) {

                console.log(json);

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
        }
    });
}

function paginaFilme () {
    $('#pagina-inicial').removeClass('item-menu-ativo');
    $('#filmes').addClass('item-menu-ativo');

    $('.pagina-inicial').fadeOut('fast');
    $('.filmes, #conteudo-filmes').removeClass('hidden').fadeIn('slow');
}
