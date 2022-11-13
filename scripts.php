<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"
        integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous"
        referrerpolicy="no-referrer"></script>
<script src="js/toastr.js"></script>
<script type="text/javascript" src="/js/menu.js"></script>
<script type="text/javascript" src="/js/apis.js"></script>
<script>

    $(document).ready(function () {
        buscaFilmes(0);
        paginaFilme();

        $('#proxima').click(function () {

            let paginaAtual = $('#pagina-atual').val();
            let page = parseInt(paginaAtual) + 1;

            buscaFilmes(page);
        });

        $('#anterior').click(function () {

            let paginaAtual = $('#pagina-atual').val();
            let page = parseInt(paginaAtual) - 1;

            buscaFilmes(page);
        });
    });
</script>
