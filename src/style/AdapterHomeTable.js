export class AdapterHomeTable {
    contentUser(id, nome, email, status)
    {
        const usuarioHTML = document.createElement('tr');
        
            const nomeUsuario = document.createElement('td');
                nomeUsuario.textContent = nome;
            usuarioHTML.appendChild(nomeUsuario);

            const emailUsuario = document.createElement('td');
                emailUsuario.textContent = email;
            usuarioHTML.appendChild(emailUsuario);

            let cor = '';
            if(status == 'S'){
                cor = 'green';
            } else{
                cor = 'red';
            }

            const statusUsuario = document.createElement('td');
                statusUsuario.setAttribute('style', `color: ${cor};`);
                statusUsuario.textContent = status;
            usuarioHTML.appendChild(statusUsuario);

            const botoesUsuario = document.createElement('td');

            let botaoStatus = '';

            botaoStatus = document.createElement('button');
            botaoStatus.setAttribute('type', 'button');
            botaoStatus.setAttribute('style', 'margin: 5px;');
            botaoStatus.setAttribute('data-id', id);
            botaoStatus.setAttribute('data-bs-toggle', 'modal');

            if(status == 'S'){
                    botaoStatus.setAttribute('class', 'btn btn-danger col btn-desativar');
                    botaoStatus.setAttribute('data-bs-target', '#modalDesativar');
                    botaoStatus.textContent = 'Desativar';
                botoesUsuario.appendChild(botaoStatus);

            } if(status == 'N'){
                    botaoStatus.setAttribute('class', 'btn btn-success col btn-ativar');
                    botaoStatus.setAttribute('data-bs-target', '#modalAtivar');
                    botaoStatus.textContent = 'Ativar';
                botoesUsuario.appendChild(botaoStatus);
                
            } else {
                const msgErro = document.createAttribute('span');
                    msgErro.textContent = 'ERRO: ';

            }

            const botaoAlterar = document.createElement('button');
                botaoAlterar.setAttribute('type', 'button');
                botaoAlterar.setAttribute('class', 'btn btn-info col btn-alterar');
                botaoAlterar.setAttribute('style', 'margin: 5px;');
                botaoAlterar.setAttribute('data-id', id);
                botaoAlterar.setAttribute('data-bs-toggle', 'modal');
                botaoAlterar.setAttribute('data-bs-target', '#modalAlterar');
                botaoAlterar.textContent = 'Atualizar';
            botoesUsuario.appendChild(botaoAlterar);

            usuarioHTML.appendChild(botoesUsuario);

        return usuarioHTML;
    }

}
