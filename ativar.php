<?php

require_once 'bootstrap.php';

$id = htmlspecialchars(filter_input(INPUT_POST, 'idUsuario'));
var_dump($id);

$nameFile = htmlspecialchars(filter_input(INPUT_POST, 'nameFile'));
var_dump($nameFile);
$arrayDir = ['home', 'homeAsync', 'homeAxios', 'homeFetch', 'homeJquery'];

if(!in_array($nameFile, $arrayDir, true)){
    header('location: loginTela.php');
    exit;

}

$usuario = $entityManager->getRepository(User::class)->findOneBy(['id' => $id]);

$entityManager->persist($usuario);
$teste = $usuario->activateUser();
$entityManager->flush();

header('location:' . $nameFile . '.php');
