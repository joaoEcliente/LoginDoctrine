import { AdapterHome } from "./AdapterHome.js";

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

                    const adapter = new AdapterHome();
                    let usuarioHtml = adapter.contentUser(id, nome, email, status);

                    $(conteudoUsuarios).append(usuarioHtml);
                });
            })
        })
    } catch(error) {
        console.error(error);
    }
}

// Modal alterar
// document.getElementById('contentUser').addEventListener('click', function(event) {
$('#contentUser').click(function(e){
    const botao = e.target.closest('.btn-alterar');

    if (botao) {
        const usuario = botao.closest('.usuario');
        
        if(!usuario){
            return;
        }

        const id = usuario.dataset.id;
        const nome = usuario.dataset.nome;
        const email = usuario.dataset.email;

        // document.getElementById('nomeUsuario').value = nome;
        // document.getElementById('emailUsuario').value = email;
        // document.getElementById('idUsuario').value = id;
        $('#nomeUsuario').val(nome);
        $('#emailUsuario').val(email);
        $('#idUsuario').val(id);

    }

});

// Modal Ativar e Desativar
// document.getElementById('contentUser').addEventListener('click', function(event) {
$('#contentUser').click(function(e) {
    
    const botaoAtivar = e.target.closest('.btn-ativar');
    const botaoDesativar = e.target.closest('.btn-desativar');

    if (!botaoAtivar && !botaoDesativar) {
        return;
    }

    const botao = botaoAtivar || botaoDesativar;
    const usuario = botao.closest('.usuario');

    if (!usuario) {
        return;
    }

    const id = usuario.dataset.id;
    const nome = usuario.dataset.nome;

    if (botaoAtivar) {
        // document.getElementById('nomeModalAtivar').textContent = nome;
        // document.getElementById('idUsuarioAtivar').value = id;
        $('#nomeModalAtivar').text(nome);
        $('#idUsuarioAtivar').val(id);
    }

    if (botaoDesativar) {
        // document.getElementById('nomeModalDesativar').textContent = nome;
        // document.getElementById('idUsuarioDesativar').value = id;
        $('#nomeModalDesativar').text(nome);
        $('#idUsuarioDesativar').val(id);
    }
});

listarUsuarios();
