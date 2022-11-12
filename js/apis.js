$('#click-filmes').click(function () {

    $.get('https://ghibliapi.herokuapp.com/films/?fields=title,original_title,description,release_date,rt_score', function (response) {

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

    });
});

function cadastraFilme (dados) {

    // console.log(dados)

    $.ajax({
        url: 'http://localhost:3000/filme',
        dataType: 'json',
        type: 'post',
        data: dados,

        success: function (response) {

            /*toastr.success('Filmes cadastrados com sucesso!', '', {
                closeButton: true,
                progressBar: true,
                positionClass: "toast-top-right",
                preventDuplicates: true,
                showDuration: "500",
                showMethod: "fadeIn",
                hideMethod: "fadeOut"
            });

            setTimeout(function () {
                location.reload();
            }, 1500);*/
        }
    });
}
