<!DOCTYPE html>
<html lang="pt">

<head>
    <?php include 'metas.php'; ?>
    <title>Lista de Filmes</title>
</head>

<body>

<div class="container-fluid">
    <div class="row">
        <div class="col-md-12 main">
            <div class="col-md-2 menu">
                <div class="col-md-12 item-menu item-menu-ativo" id="pagina-inicial">
                    <div class="col-md-1 tarja"></div>
                    <div class="col-md-11 descricao">
                        Página Inicial
                    </div>
                </div>

                <div class="col-md-12 item-menu" id="filmes">
                    <div class="col-md-1 tarja"></div>
                    <div class="col-md-11 descricao">
                        Filmes
                    </div>
                </div>
                <div class="col-md-12 menu-footer"></div>
            </div>

            <div class="col-md-10 conteudo">

                <div class="row pagina-inicial">
                    <?php include 'pages/pagina-inicial.php'; ?>
                </div>

                <div class="row hidden filmes">
                    <?php include 'pages/filmes.php'; ?>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include 'scripts.php'; ?>
</body>
</html>
