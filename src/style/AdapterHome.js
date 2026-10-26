export class AdapterHome {
    contentUser(id, nome, email, status)
    {
        const UsuarioHTML = document.createElement('div');
            UsuarioHTML.setAttribute('class', 'row usuario');
            UsuarioHTML.setAttribute('data-id', id);
            UsuarioHTML.setAttribute('data-nome', nome);
            UsuarioHTML.setAttribute('data-email', email);
            UsuarioHTML.setAttribute('style', 'display: flex;align-items: center; text-align: center; border-bottom: 0.2px solid #000000;');

            const spanNome = document.createElement('span');
                spanNome.setAttribute('class', 'col-3');
                spanNome.textContent = nome;
            UsuarioHTML.appendChild(spanNome);

            const spanEmail = document.createElement('span');
                spanEmail.setAttribute('class', 'col-3');
                spanEmail.textContent = email;
            UsuarioHTML.appendChild(spanEmail);

            let colorStatus = '';

            if(status == 'S'){
                colorStatus = 'green';
            } else{
                colorStatus = 'red';
            }

            const spanStatus = document.createElement('span');
                spanStatus.setAttribute('class', 'col-3');
                spanStatus.setAttribute('style', `color: ${colorStatus};`);
                spanStatus.textContent = status;
            UsuarioHTML.appendChild(spanStatus);

        //   <div class="row usuario"
        //     data-id="${id}"
        //     data-nome="${nome}"
        //     data-email="${email}"
        //     style="display: flex;align-items: center; text-align: center; border-bottom: 0.2px solid #000000;"

        //     <span class="col-3">${nome}</span>
        //     <span class="col-3">${email}</span>
        //     <span class="col-2">${status}</span>


        let botoesStatus = '';

        if(status === 'S') {
            botoesStatus = document.createElement('button');
                botoesStatus.setAttribute('type', 'button');
                botoesStatus.setAttribute('class', 'btn btn-danger col btn-desativar');
                botoesStatus.setAttribute('style', 'margin: 5px;');
                botoesStatus.setAttribute('data-id', id);
                botoesStatus.setAttribute('data-bs-toggle', 'modal');
                botoesStatus.setAttribute('data-bs-target', '#modalDesativar');
                botoesStatus.textContent = 'Desativar';

            UsuarioHTML.appendChild(botoesStatus);

        // botoesStatus = `
        //   <button type="button"
        //           class="btn btn-danger col btn-desativar"
        //           style="margin: 5px;"
        //           data-id="${id}"
        //           data-bs-toggle="modal"
        //           data-bs-target="#modalDesativar">
        //       Desativar
        //   </button>
        // `;

        } else {
            botoesStatus = document.createElement('button');
                botoesStatus.setAttribute('type', 'button');
                botoesStatus.setAttribute('class', 'btn btn-success col btn-ativar');
                botoesStatus.setAttribute('style', 'margin: 5px;');
                botoesStatus.setAttribute('data-id', id);
                botoesStatus.setAttribute('data-bs-toggle', 'modal');
                botoesStatus.setAttribute('data-bs-target', '#modalAtivar');
                botoesStatus.textContent = 'Ativar';

            UsuarioHTML.appendChild(botoesStatus);

        // botoesStatus = `
        //   <button type="button"
        //           class="btn btn-success col btn-ativar"
        //           style="margin: 5px;"
        //           data-id="${id}"
        //           data-bs-toggle="modal"
        //           data-bs-target="#modalAtivar">
        //       Ativar
        //   </button>
        // `;
        }

        // ${botoesStatus}

        const buttonAlterar = document.createElement('button');
            buttonAlterar.setAttribute('type', 'button');
            buttonAlterar.setAttribute('class', 'btn btn-info col btn-alterar');
            buttonAlterar.setAttribute('style', 'margin: 5px;');
            buttonAlterar.setAttribute('data-bs-toggle', 'modal');
            buttonAlterar.setAttribute('data-bs-target', '#modalAlterar');
            buttonAlterar.textContent = 'Atualizar';

        UsuarioHTML.appendChild(buttonAlterar);

        //     <button type="button"
        //           class="btn btn-info col btn-alterar"
        //           style="margin: 5px;"
        //           data-bs-toggle="modal"
        //           data-bs-target="#modalAlterar"
        //     >
        //         Atualizar
        //     </button>
        //   </div>
        // `;

        return UsuarioHTML;

        // conteudoUsuario.insertAdjacentHTML("beforeend",criaListaUsuarios(id, nome, email, botoesStatus));
    }

}
