<?php

require_once 'bootstrap.php';

$usuario = htmlspecialchars($_POST['usuario']);
$email = htmlspecialchars($_POST['email']);
$senha = htmlspecialchars($_POST['senha']);

$senhaHash = password_hash($senha, PASSWORD_DEFAULT);

$user = new User($usuario, $email, $senhaHash);
$entityManager->persist($user);

$user->setNome($usuario);
$user->setEmail($email);
$user->setSenha($senhaHash);

$entityManager->flush();

header("location: loginTela.php");
