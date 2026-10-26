<?php

require_once 'bootstrap.php';

$id = htmlspecialchars(filter_input(INPUT_POST, 'idUsuario'));

$nameFile = htmlspecialchars(filter_input(INPUT_POST, 'nameFile'));

$arrayDir = ['home', 'homeAsync', 'homeAxios', 'homeFetch', 'homeJquery'];

if(!in_array($nameFile, $arrayDir, true)){
    header('location: loginTela.php');
    exit;

}

$usuario = $entityManager->getRepository(User::class)->findOneBy(['id' => $id]);

$entityManager->persist($usuario);
$usuario->activateUser();
$entityManager->flush();


header('location:' . $nameFile . '.php');
