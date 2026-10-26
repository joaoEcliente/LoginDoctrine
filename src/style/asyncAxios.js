import { AdapterHome } from "./AdapterHome.js";
import { ModalAsync } from "./ModalAsync.js";

async function listarUsuarios() {
    try {
        await axios.get("lista_usuario_async.php")

        .then((response) => {
            const conteudoUsuario = document.getElementById('contentUser');
            conteudoUsuario.innerHTML = '';

            response.data.forEach(u => {
                let id = u.Id;
                let nome = u.Nome;
                let email = u.Email;
                let status = u.Status;
    
                let adapter = new AdapterHome();
                let usuarioHTML = adapter.contentUser(id, nome, email, status);

                conteudoUsuario.appendChild(usuarioHTML);
            });
            
        });
    } catch (error) {
        if (error.response) {
            console.error('Erro HTTP:', error.response.status);

        } else if (error.request) {
            console.error('Sem resposta:', error.request);

        } else {
            console.error('Erro na configuração da requisição:', error.message);
        }

    } finally {
        console.log("Request completed");
    }
}

// Modal alterar
document.getElementById('contentUser').addEventListener('click', function(event) {
    const botao = event.target.closest('.btn-alterar');

    if (botao) {
        const usuario = botao.closest('.usuario');

        if(!usuario){
            return;
        }

        const id = usuario.dataset.id;

        const modalAsync = new ModalAsync();
        modalAsync.modal_alterar(id);

    }

});

// Modal Ativar e Desativar
document.getElementById('contentUser').addEventListener('click', function(event) {
    const botaoAtivar = event.target.closest('.btn-ativar');
    const botaoDesativar = event.target.closest('.btn-desativar');

    if (!botaoAtivar && !botaoDesativar) {
        return;
    }

    const botao = botaoAtivar || botaoDesativar;
    const usuario = botao.closest('.usuario');

    if (!usuario) {
        return;
    }

    const id = usuario.dataset.id;

    if (botaoAtivar) {
        const modalAsync = new ModalAsync();
        modalAsync.modal_ativar(id);
    }

    if (botaoDesativar) {
        const modalAsync = new ModalAsync();
        modalAsync.modal_desativar(id);
    }
});

listarUsuarios();
