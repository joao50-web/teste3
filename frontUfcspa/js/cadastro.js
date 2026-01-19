let cursos = JSON.parse(localStorage.getItem("cursos")) || [];
let disciplinas = JSON.parse(localStorage.getItem("disciplinas")) || [];

function mostrarCursos() {
  document.getElementById("formCurso").classList.remove("oculto");
  document.getElementById("formDisciplina").classList.add("oculto");
  ativarAba(0);
}

function mostrarDisciplinas() {
  document.getElementById("formDisciplina").classList.remove("oculto");
  document.getElementById("formCurso").classList.add("oculto");
  ativarAba(1);
  atualizarSelectCursos();
}

function ativarAba(i) {
  document.querySelectorAll(".abas button").forEach(b => b.classList.remove("ativa"));
  document.querySelectorAll(".abas button")[i].classList.add("ativa");
}

function salvarCurso() {
  cursos.push({
    codigo: cursoCodigo.value,
    nome: cursoNome.value,
    coordenador: cursoCoordenador.value,
    turno: cursoTurno.value,
    duracao: cursoDuracao.value
  });

  localStorage.setItem("cursos", JSON.stringify(cursos));
  alert("Curso cadastrado!");
}

function salvarDisciplina() {
  disciplinas.push({
    codigo: discCodigo.value,
    nome: discNome.value,
    curso: discCurso.value,
    carga: discCarga.value,
    creditos: discCreditos.value,
    semestre: discSemestre.value,
    ementa: discEmenta.value
  });

  localStorage.setItem("disciplinas", JSON.stringify(disciplinas));
  alert("Disciplina cadastrada!");
}

function atualizarSelectCursos() {
  discCurso.innerHTML = "<option value=''>Selecione</option>";
  cursos.forEach(c => {
    const opt = document.createElement("option");
    opt.textContent = c.nome;
    discCurso.appendChild(opt);
  });
}

function voltar() {
  window.location.href = "grade.html";
}