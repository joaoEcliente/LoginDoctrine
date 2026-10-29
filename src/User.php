<?php

class User {
    private ?int $id = null;
    private string $status = 'S';

    public function __construct(
        private string $nome,
        private string $email,
        private string $senha
    ) { }

    // GETTERS
    public function getId()
    {
        return $this->id;
    }

    public function getStatus()
    {
        return $this->status;
    }

    public function getNome()
    {
        return $this->nome;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function getSenha()
    {
        return $this->senha;
    }


    // SETTERS
    public function setNome(string $nome)
    {
        $this->nome = $nome;

    }

    public function setEmail(string $email)
    {
        $this->email = $email;

    }

    public function setSenha(string $senha)
    {
        $this->senha = $senha;

    }

    public function verificandoLogin(string $senha): bool
    {
        if(!password_verify($senha, $this->senha)){
            return false;
        }

        return true;

    }
    
    public function updateNome(string $nome): User
    {
        $this->nome = $nome;
        
        return $this;
        }

        public function updateEmail(string $email): User
    {
        $this->email = $email;

        return $this;
    }
    
    public function activateUser()
    {
        $this->status = 'S';
        return $this->status;
    }

    public function disableUser()
    {
        $this->status = 'N';
        return $this->status;
    }

    }
