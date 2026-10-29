import { AdapterHomeTable } from "./AdapterHomeTable.js";
import { ModalAsync } from "./ModalAsync.js";

async function listarUsuarios()
{
    try{
        $(function(){
            $.get('lista_usuario_async.php', function(data){
                // const conteudoUsuarios = document.getElementById('contentUser');
                const conteudoUsuarios = $('#contentUser');
                conteudoUsuarios.innerHTML = '';

                data.forEach(u => {
                    let id = u.Id;
                    let nome = u.Nome;
                    let email = u.Email;
                    let status = u.Status;

                    const adapter = new AdapterHomeTable();
                    let usuarioHtml = adapter.contentUser(id, nome, email, status);

                    $(conteudoUsuarios).append(usuarioHtml);
                    // conteudoUsuarios.appendChild(usuarioHtml);
                });
            })
        })
    } catch(error) {
        console.error(error);
    }
}

// Modal alterar
// document.getElementById('contentUser').addEventListener('click', function(event) {
$('#contentUser').on("click", function(e){
    const botao = e.target.closest('.btn-alterar');

    if (botao) {
        const id = botao.dataset.id;
        
        const modalAsync = new ModalAsync();
        modalAsync.modal_alterar(id);

    }

});

// Modal Ativar e Desativar
// document.getElementById('contentUser').addEventListener('click', function(event) {
$('#contentUser').on("click", function(e) {

    const botaoAtivar = e.target.closest('.btn-ativar');
    const botaoDesativar = e.target.closest('.btn-desativar');

    if (!botaoAtivar && !botaoDesativar) {
        return;
    }

    const botao = botaoAtivar || botaoDesativar;

    if(botao) {
        const id = botao.dataset.id;

        if (botaoAtivar) {
            const modalAsync = new ModalAsync();
            modalAsync.modal_ativar(id);

        }

        if (botaoDesativar) {
            const modalAsync = new ModalAsync();
            modalAsync.modal_desativar(id);
        }

    } else {
        return;
    }
});

listarUsuarios();
