document.body.addEventListener('click', evt => {

  console.log(evt.target.className)

  evt.target.className === 'adicionar' && popUp();
  evt.target.className === 'btn btn-warning' && pegarValores();
}, false);

var
  tuplas    = '',
  menu      = document.querySelector('#menu'),
  popup     = document.querySelector('#popup'),
  menu_comp = document.querySelector('#menu_comp');


  const coneccao = async () => {
    let Pastoral = await fetch('http://localhost:8080/user/')
    .then (response => {
        return response.json() 
    })
    .catch(error => {
        alert('Problema na consulta')
    })
    Pastoral.map(value => {

        tuplas += `<tr>
    <th scope="row">${value.id}</th>
    <td>${value.nome}</td>
    <td>${value.cnpj}</td>
    <td>${value.crc}</td>
    <td>${value.email}</td>
    <td>${value.whats}</td>
    <td>
      <div style="text-align: center;">
        <button style="background-color: transparent; border: none;"><img style="height: 20px; width: 20px;" src="./imagens/edit_FILL0_wght400_GRAD0_opsz48.png"></button>
        <button style="margin: 0 5% 0; background-color: transparent; border: none;"><img style="height: 20px; width: 20px;" src="./imagens/refresh_FILL0_wght400_GRAD0_opsz48.png"></button>
        <button style="background-color: transparent; border: none;"><img style="height: 20px; width: 20px;" src="./imagens/delete_FILL0_wght400_GRAD0_opsz48.png"></button>
      </div>
    </td> </tr>`

})

document.getElementById('inserir').innerHTML = (tuplas);
  }; coneccao()




fetch('http://localhost:8080/user/')
.then(data => {
  return data.json();
})
.then(value => {

  var myObj = JSON.parse(value);

  tuplas += `<tr>
  <th scope="row">${myObj.id}</th>
  <td>${myObj.nome}</td>
  <td>${myObj.cnpj}</td>
  <td>${myObj.crc}</td>
  <td>${myObj.email}</td>
  <td>${myObj.whatsapp}</td>
  <td>
    <div style="text-align: center;">
      <button style="background-color: transparent; border: none;"><img style="height: 20px; width: 20px;" src="./imagens/edit_FILL0_wght400_GRAD0_opsz48.png"></button>
      <button style="margin: 0 5% 0; background-color: transparent; border: none;"><img style="height: 20px; width: 20px;" src="./imagens/refresh_FILL0_wght400_GRAD0_opsz48.png"></button>
      <button style="background-color: transparent; border: none;"><img style="height: 20px; width: 20px;" src="./imagens/delete_FILL0_wght400_GRAD0_opsz48.png"></button>
    </div>
  </td> </tr>`

document.getElementById('inserir').innerHTML = (tuplas);
})








const popUp = () => {
  popup.innerHTML = ` <div id="quote_modal" class="QuoteModal">
  <div class="popup_modal">
    <div>
      <a href="#close" title="Close" class="fclose" style="text-decoration: none;">X</a>
      <h3>Registro de escritório</h3>
    </div>
    <div><br>
      <form role="form" class="text-center">
        <div class="form-group">
          <input type="text" id="valor_nome" required class="form-control" placeholder="Nome" tabindex="1">
        </div>
        <div class="form-group">
          <input type="email" id="valor_cnpj" required class="form-control" placeholder="CNPJ" id="CPNJInput" maxlength="14" oninput="criaMascara('CPNJ')" tabindex="2">
        </div>
        <div class="form-group">
          <input type="email" id="valor_crc" required class="form-control" placeholder="CRC" maxlength="9" tabindex="2">
        </div>
        <div class="form-group">
          <input type="email" id="valor_email" required class="form-control" placeholder="Email" tabindex="2">
        </div>
        <div class="form-group">
          <input type="email" id="valor_whats" required class="form-control" placeholder="Whatsapp" id="CelularInput" maxlength="11" oninput="criaMascara('Celular')" tabindex="2">
        </div>

      </form>
    </div>
    <div class="botao_popup">
      <a href="javascript:void(0)" onClick="history.go(-1); return false;">
      <button type="button" class="btn btn-warning" > Cadastrar </button>
      </a>
    </div>
  </div>
</div>`

}


menu.innerHTML = `<div>
  <!-- menu -->
    <nav class="navbar navbar-expand-lg bg-light" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
      <div class="container-fluid">

        <!-- logo -->
        <a class="navbar-brand" href="./home.html">
          <img src="./imagens/logo sem fundo.png" width="40px" height="30px" class="d-inline-block align-text-middle">
          ASSESCOFRAN
        </a>

        <!-- botão que aparece no menu na tela responsiva -->
        <button style="box-shadow: none;" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
          <img class="text-center" style="width: 30px; height: 30px;" src="./imagens/menu_FILL0_wght400_GRAD0_opsz48.png">
        </button>

        <!-- links do menu -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="./home.html">
                  <img style="height: 20px; width: 20px; vertical-align: text-bottom;" src="./imagens/home_FILL0_wght400_GRAD0_opsz48.png">
                   Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="./escritorios.html">
                  <img style="height: 20px; width: 20px; vertical-align: text-bottom;" src="./imagens/query_stats_FILL0_wght400_GRAD0_opsz48.png">
                   Dados
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img style="height: 20px; width: 20px; vertical-align: text-bottom;" src="./imagens/account_circle_FILL0_wght400_GRAD0_opsz48.png">
                   Conta
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="./../entrada/login.html"> Perfil
                  <div class="badge bg-primary text-wrap" style="width: 6rem; margin-left: 20px;">
                    Indisponível
                  </div>
                </a></li>
                <li><a class="dropdown-item" href="./../entrada/register.html"> Opções
                  <div class="badge bg-primary text-wrap" style="width: 6rem; margin-left: 5px;">
                    Indisponível
                  </div>
                </a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="./../entrada/ladingPage.html"> Sair </a></li>
              </ul>
            </li>
          </ul>

          <!-- barra de pesquisa -->
          <form class="d-flex" role="search">
            <input style="border-radius: 33.33px;" class="form-control me-2 icon" value type="search" placeholder=" . . ." aria-label="Search" >
            <button style="border-radius: 33.33px;" class="btn btn-outline-success" type="submit"> Procurar </button>
          </form>
        </div>
      </div>
    </nav>
  </div>`

  function criaMascara(mascaraInput) {

    const
        emptyString = '',
        valorInput = document.getElementById(`${mascaraInput}Input`).value,
        maximoInput = document.getElementById(`${mascaraInput}Input`).maxLength,
        mascaras = {
            CPNJ: valorInput.replace(/[^\d]/g, emptyString).replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5"),
            Celular: valorInput.replace(/[^\d]/g, emptyString).replace(/^(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2 $3-$4"),
        };

    if (valorInput.length === maximoInput) {
      (document.getElementById(`${mascaraInput}Input`).value = mascaras[mascaraInput])
    }
  };


 const pegarValores = async () => {

    console.log("entrou")

      const registro = {
        nome: document.querySelector("#name").value,
        cnpj: document.querySelector('#valor_cnpj').value,
        crc: document.querySelector('#valor_crc').value,
        email: document.querySelector('#valor_email').value,
        whatsapp: document.querySelector('#valor_whats').value,
      }

      console.log(registro)

      await fetch('http://localhost:8080/user/', {
        method: 'POST',
        body: JSON.stringify(registro),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

      coneccao()
 }
