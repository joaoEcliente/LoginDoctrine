export class AdapterHome {
    contentUser(id, nome, email, status)
    {
        const UsuarioHTML = document.createElement('div');
            UsuarioHTML.setAttribute('class', 'row usuario');
            UsuarioHTML.setAttribute('data-id', id);
            UsuarioHTML.setAttribute('data-nome', nome);
            UsuarioHTML.setAttribute('data-email', email);

            const spanNome = document.createElement('span');
                spanNome.setAttribute('class', 'col-3');
                spanNome.textContent = nome;
            UsuarioHTML.appendChild(spanNome);

            const spanEmail = document.createElement('span');
                spanEmail.setAttribute('class', 'col-3');
                spanEmail.textContent = email;
            UsuarioHTML.appendChild(spanEmail);

            const spanStatus = document.createElement('span');
                spanStatus.setAttribute('class', 'col-2');
                spanStatus.textContent = status;
            UsuarioHTML.appendChild(spanStatus);

        //   <div class="row usuario"
        //     data-id="${id}"
        //     data-nome="${nome}"
        //     data-email="${email}">

        //     <span class="col-3">${nome}</span>
        //     <span class="col-3">${email}</span>
        //     <span class="col-2">${status}</span>


        let botoesStatus = '';

        if(status === 'S') {
            botoesStatus = document.createElement('button');
                botoesStatus.setAttribute('type', 'button');
                botoesStatus.setAttribute('class', 'btn btn-danger col-1 btn-desativar');
                botoesStatus.setAttribute('style', 'margin: 5px;');
                botoesStatus.setAttribute('data-id', id);
                botoesStatus.setAttribute('data-bs-toggle', 'modal');
                botoesStatus.setAttribute('data-bs-target', '#modalDesativar');
                botoesStatus.textContent = 'Desativar';

            UsuarioHTML.appendChild(botoesStatus);

        // botoesStatus = `
        //   <button type="button"
        //           class="btn btn-danger col-1 btn-desativar"
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
                botoesStatus.setAttribute('class', 'btn btn-success col-1 btn-ativar');
                botoesStatus.setAttribute('style', 'margin: 5px;');
                botoesStatus.setAttribute('data-id', id);
                botoesStatus.setAttribute('data-bs-toggle', 'modal');
                botoesStatus.setAttribute('data-bs-target', '#modalAtivar');
                botoesStatus.textContent = 'Ativar';

            UsuarioHTML.appendChild(botoesStatus);

        // botoesStatus = `
        //   <button type="button"
        //           class="btn btn-success col-1 btn-ativar"
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
            buttonAlterar.setAttribute('class', 'btn btn-info col-1 btn-alterar');
            buttonAlterar.setAttribute('style', 'margin: 5px;');
            buttonAlterar.setAttribute('data-bs-toggle', 'modal');
            buttonAlterar.setAttribute('data-bs-target', '#modalAlterar');
            buttonAlterar.textContent = 'Atualizar';

        UsuarioHTML.appendChild(buttonAlterar);

        //     <button type="button"
        //           class="btn btn-info col-1 btn-alterar"
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
