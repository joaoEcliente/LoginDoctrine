<?php

require_once 'bootstrap.php';

$id = htmlspecialchars(filter_input(INPUT_POST, 'idUsuario'));

$nameFile = htmlspecialchars(filter_input(INPUT_POST, 'nameFile'));

$usuario = $entityManager->getRepository(User::class)->findOneBy(['id' => $id]);

$entityManager->persist($usuario);
$usuario->activateUser();
$entityManager->flush();


header('location:' . $nameFile . '.php');
