function mensagem() {
  let preencheuCerto = true;
  let acertouEmail = true;

  // verifica se inputs estao vazios ou nao
  for (let i = 0; i < document.getElementsByTagName("input").length; i++) {
    let elemento = document.getElementsByTagName("input")[i];
    console.log(elemento);
    if (elemento.value == "") {
      preencheuCerto = false;
    }
  }

  // comparacao dos email
  if (
    document.getElementById("email").value !=
    document.getElementById("emailDeConfirmacao").value
  ) {
    acertouEmail = false;
  }
  console.log(preencheuCerto);

  preencheuCerto && acertouEmail
    ? alert("Formulario enviado!")
    : alert("Formulario nao foi preenchido corretamente");
}
