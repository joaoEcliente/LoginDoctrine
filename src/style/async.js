import { AdapterHome } from "./AdapterHome.js";
import { ModalAsync } from "./ModalAsync.js";

function listarUsuarios()
{
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "lista_usuario_async.php", true);
    xhr.onload = function()
    {
        if (xhr.status === 200) {
            try {
                const user_json = JSON.parse(xhr.responseText);

                const conteudoUsuario = document.getElementById('contentUser');

                conteudoUsuario.innerHTML = '';

                user_json.forEach(users => {

                    let id = users.Id;
                    let nome = users.Nome;
                    let email = users.Email;
                    let status = users.Status;

                    let adapter = new AdapterHome();
                    let UsuarioHTML = adapter.contentUser(id, nome, email, status);

                    conteudoUsuario.appendChild(UsuarioHTML)
                });

            } catch (error) {
                console.error('Erro ao processar os usuários:', error);

            }

        } else {
            console.error("Erro na requisição:", xhr.statusText);

        }
    };

    xhr.onerror = function() {
        console.error("Erro de conexão ao buscar os usuários.");

    };

    xhr.send();
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
