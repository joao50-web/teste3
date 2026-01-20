const horarios = [
  "13:20–14:10",
  "14:10–15:00",
  "15:00–15:50",
  "15:50–16:40",
  "16:40–17:30",
  "17:30–18:20",
  "18:20–19:10",
  "19:10–20:00",
  "20:00–20:50",
  "20:50–21:40",
  "21:40–22:30"
];

// Carrega dropdown de horários
function carregarHorarios() {
    const selects = document.querySelectorAll(".select-horario");

    selects.forEach((select, index) => {
        select.innerHTML = "";
        horarios.forEach(h => {
            const opt = document.createElement("option");
            opt.value = h;
            opt.textContent = h;
            select.appendChild(opt);
        });

        if (horarios[index]) select.value = horarios[index];
    });
}

// Salvar a grade no localStorage
function salvar() {
    const dados = [];
    const linhas = document.querySelectorAll("#grade tbody tr");

    linhas.forEach(tr => {
        const horario = tr.querySelector(".select-horario").value;
        const colunas = tr.querySelectorAll("td[contenteditable]");
        const linha = {
            horario,
            segunda: colunas[0].innerText.trim(),
            terca: colunas[1].innerText.trim(),
            quarta: colunas[2].innerText.trim(),
            quinta: colunas[3].innerText.trim(),
            sexta: colunas[4].innerText.trim()
        };
        dados.push(linha);
    });

    console.table(dados);
    localStorage.setItem("gradeHoraria", JSON.stringify(dados));
    alert("Grade salva com sucesso!");
}

// Logout
function logout() {
    window.location.href = "login.html";
}

// Redireciona para a página de cadastro
function irCadastro() {
    window.location.href = "cadastro.html"; // redireciona de verdade
}

// Inicialização
window.onload = carregarHorarios;