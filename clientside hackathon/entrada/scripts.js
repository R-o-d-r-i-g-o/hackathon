document.body.addEventListener('click', evt => {

    evt.target.className === 'btn btn-outline-success' && popUp();
}, false);


// Mascara de input
function criaMascara(mascaraInput) {

    const
        emptyString = '',
        valorInput = document.getElementById(`${mascaraInput}Input`).value,
        maximoInput = document.getElementById(`${mascaraInput}Input`).maxLength,
        mascaras = {
            CPNJ: valorInput.replace(/[^\d]/g, emptyString).replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5"),
            CPF: valorInput.replace(/[^\d]/g, emptyString).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"),
            Celular: valorInput.replace(/[^\d]/g, emptyString).replace(/^(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2 $3-$4"),
            CEP: valorInput.replace(/[^\d]/g, emptyString).replace(/(\d{5})(\d{3})/, "$1-$2"),
        };

    if (valorInput.length === maximoInput) {
      (document.getElementById(`${mascaraInput}Input`).value = mascaras[mascaraInput])
    }
  };