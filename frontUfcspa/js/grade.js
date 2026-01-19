// Proteção
if (!localStorage.getItem("usuarioLogado")) {
  window.location.href = "login.html";
}

function irCadastro() {
  window.location.href = "cadastro.html";
}

// Salvar tabela
function salvar() {
  localStorage.setItem("gradeHoraria", document.getElementById("grade").innerHTML);
  alert("Grade salva com sucesso!");
}

// Salvar topo
function salvarTopo() {
  ["curso", "coordenador", "ano", "curriculo", "semestre"].forEach(id => {
    const el = document.getElementById(id);
    if (el) localStorage.setItem(id, el.value);
  });
}

// Carregar tudo
function carregar() {
  const tabela = localStorage.getItem("gradeHoraria");
  if (tabela) document.getElementById("grade").innerHTML = tabela;

  ["curso", "coordenador", "ano", "curriculo", "semestre"].forEach(id => {
    const valor = localStorage.getItem(id);
    if (valor && document.getElementById(id)) {
      document.getElementById(id).value = valor;
    }
  });
}

// Logout
function logout() {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "login.html";
}

window.onload = carregar;