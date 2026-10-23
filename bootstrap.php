<?php
// bootstrap.php
use Doctrine\DBAL\DriverManager;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\ORMSetup;
require_once "vendor/autoload.php";

$param = [
    'dbname' => 'login_doctrine',
    'user' => 'root',
    'password' => 'toor',
    'host' => 'localhost',
    'driver' => 'pdo_mysql',
];

$config = ORMSetup::createXMLMetadataConfig(
   paths: [__DIR__ . '/config/xml'],
   isDevMode: true,
);

$config->enableNativeLazyObjects(true);

$connection = DriverManager::getConnection($param, $config);

$entityManager = new EntityManager($connection, $config);
