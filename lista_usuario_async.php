<?php

require_once 'bootstrap.php';

$usuarios = $entityManager->getRepository(User::class)->findAll();

$resultado = [];

foreach ($usuarios as $u) {
    $resultado[] = [
        'Id' => $u->getId(),
        'Nome' => $u->getNome(),
        'Email' => $u->getEmail(),
        'Status' => $u->getStatus()
    ];

}

header('Content-Type: application/json; charset=utf-8');

echo json_encode($resultado);

