<!Doctype html>
<html lang="pt-br">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Jquery</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <link rel="stylesheet" href="src/style/style.css">
    <link rel="shortcut icon" href="#" type="image/x-icon">
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body>
    <ul class="nav">
        <li class="nav-item">
            <a class="nav-link active" href="loginTela.php">Sair</a>
        </li>
    </ul>

    <div class="container mt-4">
        <h1>Usuários Cadastrados</h1>
        <div class="container-md mt-4" id="container">
            <div class="row border-bottom border-dark pb-2" id="cabecalho">
                <span class="col" style="text-align: center;">Nome</span>
                <span class="col" style="text-align: center;">Email</span>
                <span class="col" style="text-align: center;">Status</span>
                <span class="col" style="text-align: center;">Ação</span>
            </div>

            <div id="contentUser"></div>

        </div>
    </div>

    <!-- Modal Ativar -->
    <div class="modal fade"
         id="modalAtivar"
         tabindex="-1"
         aria-labelledby="tituloModalAtivar"
         aria-hidden="true">

        <div class="modal-dialog">
            <div class="modal-content">
                <form action="ativar.php" method="post">
                    <input type="hidden" name="nameFile" value="<?php echo 'homeJquery';?>">
                    <input type="hidden" name="idUsuario" id="idUsuarioAtivar">

                    <div class="modal-header">
                        <h5 class="modal-title" id="tituloModalAtivar">Ativar usuário</h5>

                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Fechar">
                        </button>

                    </div>
                    <div class="modal-body">
                        <p>Tem certeza de que deseja ativar o usuário <strong id="nomeModalAtivar"></strong></p>


                    </div>

                    <div class="modal-footer">

                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> Cancelar</button>
                        <button type="submit" class="btn btn-success"> Confirmar ativação</button>

                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Modal Desativar -->
    <div class="modal fade" id="modalDesativar" tabindex="-1" aria-labelledby="tituloModalDesativar" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <form action="desativar.php" method="post">
                    <input type="hidden" name="nameFile" value="<?php echo 'homeJquery';?>">
                    <input type="hidden" name="idUsuario" id="idUsuarioDesativar">

                    <div class="modal-header">

                        <h5 class="modal-title" id="tituloModalDesativar">Desativar usuário</h5>

                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>

                    </div>
                    <div class="modal-body">
                        <p>Tem certeza de que deseja desativar o usuário <strong id="nomeModalDesativar"></strong></p>


                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> Cancelar</button>

                        <button type="submit" class="btn btn-danger"> Confirmar desativação</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Modal Alterar-->
    <div class="modal fade" id="modalAlterar" tabindex="-1" aria-labelledby="tituloModalAlterar" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <form action="alterar.php" method="post">
                    <input type="hidden" name="nameFile" value="<?php echo 'homeJquery';?>">
                    <input type="hidden" name="idUsuario" id="idUsuario">
                    <div class="modal-header">
                        <h5 class="modal-title" id="tituloModalAlterar">Atualizar informações</h5>

                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Fechar">
                        </button>

                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="nomeUsuario" class="form-label"> Nome:</label>

                            <input class="form-control" type="text" name="nomeUsuario" id="nomeUsuario" required>

                        </div>
                        <div class="mb-3">
                            <label for="emailUsuario" class="form-label"> Email:</label>

                            <input class="form-control" type="email" name="emailUsuario" id="emailUsuario" required>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> Cancelar</button>
                        <button type="submit" class="btn btn-info"> Salvar alterações</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
    <script type="module" src="src/style/asyncJquery.js"></script>

</body>
</html>
