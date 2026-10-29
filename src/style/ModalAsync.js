export class ModalAsync{

    async modal_ativar(id) {
        try {
            await axios.get(`lista_unico_usuario.php?id=${id}`)
            .then((response) => {
                const usuario = response.data

                if (usuario) {
                    let id = usuario.Id;
                    let nome = usuario.Nome;

                    $('#nomeModalAtivar').text(nome);
                    $('#idUsuarioAtivar').val(id);

                    console.log(`id: ${id}\nnome: ${nome}\n`);

                } else {
                    console.log("Usuário não encontrado!");
                }

            })

        } catch (error) {
            console.error("Erro ao buscar usuário:", error);
        }
    }

    async modal_desativar(id) {
        try {
            await axios.get(`lista_unico_usuario.php?id=${id}`)
            .then((response) => {
                const usuario = response.data
                if (usuario) {
                    let id = usuario.Id;
                    let nome = usuario.Nome;

                    $('#nomeModalDesativar').text(nome);
                    $('#idUsuarioDesativar').val(id);

                    console.log(`id: ${id}\nnome: ${nome}\n`);
                } else {
                    console.log("Usuário não encontrado!");
                }

            })

        } catch (error) {
            console.error("Erro ao buscar usuário:", error);
        }
    }
    async modal_alterar(id) {
        try {
            await axios.get(`lista_unico_usuario.php?id=${id}`)
            .then((response) => {
                const usuario = response.data;
    
                if (usuario) {
                        let id = usuario.Id;
                        let nome = usuario.Nome;
                        let email = usuario.Email;
    
                        $('#nomeUsuario').val(nome);
                        $('#emailUsuario').val(email);
                        $('#idUsuario').val(id);
    
                        console.log(`id: ${id}\nnome: ${nome}\nemail: ${email}\n`);
    
                } else {
                    console.log("Usuário não encontrado!");
                }
    
            })
    
        } catch (error) {
            console.error("Erro ao buscar usuário:", error);
        }
    }
}
