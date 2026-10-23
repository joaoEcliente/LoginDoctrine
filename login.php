<?php

require_once 'bootstrap.php';

$email = htmlspecialchars($_POST['email']);
$senha = htmlspecialchars($_POST['senha']);

$loginRepository = $entityManager->getRepository(User::class);
$login = $loginRepository->findOneBy(['email' => $email]);

if(!$login->verificandoLogin($senha)){
    header('location: loginTela.php');
    exit();

}

header("location: home.php");
