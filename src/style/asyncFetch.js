import { AdapterHome } from "./AdapterHome.js";
import { ModalAsync } from "./ModalAsync.js";

async function listarUsuarios()
{
    try{
        const response = await fetch('lista_usuario_async.php');
        const userJson = await response.json();

        const conteudoUsuarios = document.getElementById('contentUser');
        conteudoUsuarios.innerHTML = '';

        userJson.forEach(u => {
            let id = u.Id;
            let nome = u.Nome;
            let email = u.Email;
            let status = u.Status;

            const adapter = new AdapterHome();
            let usuarioHtml = adapter.contentUser(id, nome, email, status);

            conteudoUsuarios.appendChild(usuarioHtml);
        })
    } catch(error) {
        console.error(error);

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
