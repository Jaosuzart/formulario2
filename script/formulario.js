document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  const btnLimpar = document.getElementById("btnLimpar");
  const btnAjuda = document.getElementById("btnAjuda");

  btnLimpar.addEventListener("click", function () {
    form.reset();
    document.getElementById("aceitarContrato").checked = false;
    document.getElementById("nivelSatisfacao").value = 50;
    document.getElementById("corPreferida").value = "#726a95";
  });

  btnAjuda.addEventListener("click", function () {
    alert(
      'Preencha todos os campos obrigatórios marcados com asterisco (*).\n\nPara a seção "Área de interesse", marque com um X as linguagens que desejar.\n\nPara dúvidas, entre em contato com nosso suporte.'
    );
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      alert("Por favor, preencha todos os campos obrigatórios corretamente.");
      return;
    }

    const linguagens = document.querySelectorAll(
      'input[name="linguagem"]:checked'
    );
    if (linguagens.length === 0) {
      alert("Por favor, escolha pelo menos uma linguagem.");
      return;
    }

    const contrato = document.getElementById("aceitarContrato");
    if (!contrato.checked) {
      alert("Você deve ler e aceitar o contrato de atualização.");
      contrato.focus();
      return;
    }

    const formData = {
      email: document.getElementById("email").value,
      community: document.getElementById("community").value,
      dataNascimento: document.getElementById("dataNascimento").value,
      possuiAtividadeExtra:
        document.querySelector('input[name="atvExtra"]:checked')?.value ||
        "Não informado",
      linguagensSelecionadas: Array.from(linguagens).map((item) => item.value),
      mensagem: document.getElementById("mensagem").value,
      arquivo: document.getElementById("arquivo").files[0]
        ? document.getElementById("arquivo").files[0].name
        : "Nenhum arquivo selecionado",
      aceitouContrato: contrato.checked,
      nivelSatisfacao: document.getElementById("nivelSatisfacao").value,
      horaPreferencia: document.getElementById("horaPreferencia").value,
      corPreferida: document.getElementById("corPreferida").value,
      token: document.querySelector('input[name="token"]').value,
    };

    console.log("Dados do formulário:", formData);
    alert(
      "Formulário enviado com sucesso!\n\nVerifique o console para ver os dados coletados."
    );
  });
});
