<?php

require_once 'bootstrap.php';

$idUsuario = htmlspecialchars(filter_input(INPUT_POST, 'idUsuario'));
$nameFile = htmlspecialchars(filter_input(INPUT_POST, 'nameFile'));

$usuario = $entityManager->getRepository(User::class)->findOneBy(['id' => $idUsuario]);

$entityManager->persist($usuario);

$usuario->disableUser();

$entityManager->flush();

header('location:' . $nameFile . '.php');
