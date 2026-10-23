<?php

require_once 'bootstrap.php';

$id = htmlspecialchars(filter_input(INPUT_POST, 'idUsuario'));
$nome = htmlspecialchars(filter_input(INPUT_POST, 'nomeUsuario'));
$email = htmlspecialchars(filter_input(INPUT_POST, 'emailUsuario'));
$nameFile = htmlspecialchars(filter_input(INPUT_POST, 'nameFile'));

$usuario = $entityManager->getRepository(User::class)->findOneBy(['id' => $id]);
$entityManager->persist($usuario);

$usuario
    ->updateNome($nome)
    ->updateEmail($email)
;

$entityManager->flush();

header('location:' . $nameFile . '.php');
