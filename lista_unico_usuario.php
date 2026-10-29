<?php

require_once 'bootstrap.php';

// $id = intval($_GET['id']);
$id = filter_input(INPUT_GET, 'id');

$usuarios = $entityManager->getRepository(User::class)->find($id);

$resultado = [
    'Id' => $usuarios->getId(),
    'Nome' => $usuarios->getNome(),
    'Email' => $usuarios->getEmail(),
    'Status' => $usuarios->getStatus()
];

header('Content-Type: application/json; charset=utf-8');

echo json_encode($resultado);
