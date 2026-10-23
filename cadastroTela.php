<!DOCTYPE HTML>
<html lang="pt-br">
<head>
<meta charset="UTF-8">

<title>Login Doctrine</title>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">

</head>

<body>

<nav class="navbar navbar-default navbar-static-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>
    </div>
</nav>


<div class="container">

<br /><br />

<div class="col-md-4"></div>

<div class="col-md-4">
    <h3>Crie seu Login</h3>
    <br />

    <form method="post" action="cadastro.php" id="formCadastrarse">
        <div class="form-group">
            <input type="text" class="form-control" id="usuario" name="usuario" placeholder="Usuário" required="requiored">
        </div>
        <div class="form-group">
            <input type="email" class="form-control" id="email" name="email" placeholder="Email" required="requiored">
        </div>
        <div class="form-group">
            <input type="password" class="form-control" id="senha" name="senha" placeholder="Senha" required="requiored">
        </div>
        <button type="submit" class="btn btn-primary form-control">Inscreva-se</button>
        <a href="loginTela.php">Já possuo conta</a>
    </form>

</div>

<div class="col-md-4"></div>

<div class="clearfix"></div>
<br />
<div class="col-md-4"></div>
<div class="col-md-4"></div>
<div class="col-md-4"></div>

</div>


</div>

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

</body>
</html>
