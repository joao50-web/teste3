function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (email && senha) {
    localStorage.setItem("usuarioLogado", "true");
    window.location.href = "grade.html";
  } else {
    document.getElementById("erro").innerText = "Preencha todos os campos.";
  }
}