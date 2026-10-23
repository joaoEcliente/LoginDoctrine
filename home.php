<?php

require_once 'bootstrap.php';

$usuarios = $entityManager->getRepository(User::class)->findAll();

?>

<!doctype html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Home</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <link rel="stylesheet" href="src/style/style.css">
    <link rel="shortcut icon" href="#" type="image/x-icon">
  </head>
  <body>
    <ul class="nav">
        <li class="nav-item">
            <a class="nav-link active" href="loginTela.php">Sair</a>
        </li>
    </ul>

    <div class="container">
        <h1>Usuarios Cadastrados</h1>
        <div class="container-md" id="container">
            <div class="row" style="border-bottom: 1px #000 solid;" id="cabecalho">
                <span class='col'>Nome</span>
                <span class='col'>Email</span>
                <span class='col'>Status</span>
                <span class='col'>Ação</span>
            </div>
            
            <!-- Modal de Ativação -->
            <div class="modal fade" id="modalAtivar">
        <form action="ativar.php" method="post">
        <input type="hidden" name="nameFile" value="<?php echo 'home';?>">
        <input type="hidden" name="idUsuario">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">

                    <h5 class="modal-title" id="tituloModal">Ativar Usuário</h5>

                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
                </div>

                <div class="modal-body" id="body-ativar">
                    <p>Tem certeza de que deseja ativar o usuário <strong id="pAtivar"></strong></p>
                </div>

                
                

                <div class="modal-footer">

                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>

                    <button type="submit" class="btn btn-success">Confirmar ativação</button>
                    
                </div>
            </div>
        </div>
    </form>
    </div>

    <!-- Modal de desativação -->
    <div class="modal fade" id="modalDesativar">
        <form action="desativar.php" method="post">
            <input type="hidden" name="nameFile" value="<?php echo 'home';?>">
            <input type="hidden" name="idUsuario">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">

                    <h5 class="modal-title" id="tituloModal">Desativar usuário</h5>

                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
                </div>

                <div class="modal-body" id="body-desativar">
                    <p>Tem certeza de que deseja desativar o usuário <strong id="pDesativar"></strong></p>
                </div>

                
                

                <div class="modal-footer">

                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>

                    <button type="submit" class="btn btn-danger">Confirmar desativação</button>
                    
                </div>
            </div>
        </div>
    </form>
    </div>

    <!-- Modal de alteração -->
    <div class="modal fade" id="modalAlterar">
    <form action="alterar.php" method="post">
        <input type="hidden" name="nameFile" value="<?php echo 'home';?>">
        <input type="hidden" name="idUsuario">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">

                    <h5 class="modal-title" id="tituloModal">Altualizar informações</h5>

                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
                </div>

                <div class="modal-body" id="body-alterar">
                    <label>Nome:</label>
                    <input class="input-group input-group-sm mb-3"type="text" name="nomeUsuario">
                    
                    <label>Email:</label>
                    <input class="input-group input-group-sm mb-3"type="email" name="emailUsuario">

                </div>

                
                

                <div class="modal-footer">

                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="submit" class="btn btn-info">Confirmar desativação</button>
                    
                </div>
            </div>
        </div>
    </form>
    </div>

    <?php foreach ($usuarios as $u): ?>

        <div class="row usuario"
            data-id="<?= htmlspecialchars((string) $u->getId()) ?>"
            data-nome="<?= htmlspecialchars($u->getNome()) ?>"
            data-email="<?= htmlspecialchars($u->getEmail()) ?>"
            data-status="<?= htmlspecialchars($u->getStatus()) ?>">

            <span class="col-3"><?= htmlspecialchars($u->getNome()) ?></span>
            <span class="col-3"><?= htmlspecialchars($u->getEmail()) ?></span>
            <span class="col-2"><?= htmlspecialchars($u->getStatus()) ?></span>

            <?php if(htmlspecialchars(($u->getStatus()) == 'N')) : ?>
                <button type="button"
                        style="margin: 5px; display: block;"
                        class="btn btn-success col-1 btn-ativar"
                        data-bs-toggle="modal"
                        data-bs-target="#modalAtivar">
                    Ativar
                </button>
            <?php endif?>
            <?php if(htmlspecialchars(($u->getStatus()) == 'S')) : ?>
            <button type="button"
                    style="margin: 5px; display: block;"
                    class="btn btn-danger col-1 btn-desativar"
                    data-bs-toggle="modal"
                    data-bs-target="#modalDesativar">
                Desativar
            </button>
            <?php endif?>

            <button type="button"
                    style="margin: 5px;"
                    class="btn btn-info col-1 btn-alterar"
                    data-bs-toggle="modal"
                    data-bs-target="#modalAlterar">
                Atualizar
            </button>
        </div>
    <?php endforeach; ?>

        </div>
    </div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-4.0.0.min.js" integrity="sha256-OaVG6prZf4v69dPg6PhVattBXkcOWQB62pdZ3ORyrao=" crossorigin="anonymous"></script>

<script>
    $(document).ready(function () {

    $('.btn-ativar').click(function () {
        const usuario = $(this).closest('.usuario')[0];

        const  nome = usuario.dataset.nome;
        const id = usuario.dataset.id;

        $('#pAtivar').text(nome);
        $('#modalAtivar [name="idUsuario"]').val(id);
    });

    $('.btn-desativar').click(function () {
        const usuario = $(this).closest('.usuario')[0];

        const nome = usuario.dataset.nome;
        const id = usuario.dataset.id;

        $('#pDesativar').text(nome);
        $('#modalDesativar [name="idUsuario"]').val(id);
    });

    $('.btn-alterar').click(function () {
        const usuario = $(this).closest('.usuario')[0];

        const nome = usuario.dataset.nome;
        const email = usuario.dataset.email;
        const id = usuario.dataset.id;

        $('#modalAlterar [name="nomeUsuario"]').val(nome);
        $('#modalAlterar [name="emailUsuario"]').val(email);
        $('#modalAlterar [name="idUsuario"]').val(id);
    });

});
    </script>

</body>
</html>
