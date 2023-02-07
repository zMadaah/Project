let qtdEstoque = 0;

function validarProduto(txtNomeProduto, txtCodProduto, qntdProduto) {
  let nome = txtNomeProduto.value;
  let codigo = txtCodProduto.value;
  let qtidade = qntdProduto.value;
  if (nome == "") {
    alert("Nome do produto não pode estar em branco. Favor preenchê-lo!");
  } else if (codigo == "") {
    alert("Código do produto não pode estar em branco. Favor preenchê-lo!");
  } else {
    cadastrarProduto(nome, codigo, parseInt(qtidade));
  }
}

function cadastrarProduto(nome, codigo, qtidade) {
  alert(
    `       O produto ${nome} do codgido tal ${codigo} quantidade: ${qtidade}`
  );

  atualizarQtdEstoque(qtidade);
  resetarCampos();
}

function resetarCampos() {
  document.getElementById("txtNomeProduto").value = "";
  document.getElementById("txtCodProduto").value = "";
  document.getElementById("qntdProduto").value = 1;
}

function atualizarQtdEstoque(qtidade) {
  qtdEstoque += qtidade;

  document.getElementById("totalEstoque").textContent = qtdEstoque;
}
