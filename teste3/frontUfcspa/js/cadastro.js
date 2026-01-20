let cursos = JSON.parse(localStorage.getItem("cursos")) || [];
let disciplinas = JSON.parse(localStorage.getItem("disciplinas")) || [];

/* ===== NAVEGAÇÃO ===== */
function mostrarCursos() {
    document.getElementById("formCurso").classList.remove("oculto");
    document.getElementById("formDisciplina").classList.add("oculto");
    renderCursos();
}

function mostrarDisciplinas() {
    document.getElementById("formDisciplina").classList.remove("oculto");
    document.getElementById("formCurso").classList.add("oculto");
    atualizarSelectCursos();
}

/* ===== CURSOS ===== */
function salvarCurso() {
    if (!cursoNome.value) {
        alert("Informe o nome do curso");
        return;
    }

    cursos.push({
        codigo: cursoCodigo.value,
        nome: cursoNome.value,
        coordenador: cursoCoordenador.value,
        turno: cursoTurno.value,
        duracao: cursoDuracao.value
    });

    localStorage.setItem("cursos", JSON.stringify(cursos));

    limparCurso();
    fecharModal();
    renderCursos();
}

function renderCursos() {
    const tbody = document.getElementById("listaCursos");
    tbody.innerHTML = "";

    if (cursos.length === 0) {
        tbody.innerHTML = `
            <tr class="vazio">
                <td colspan="2">No data</td>
            </tr>
        `;
        return;
    }

    cursos.forEach((c, i) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${c.nome}</td>
            <td class="acoes">
                <button onclick="excluirCurso(${i})">Excluir</button>
            </td>
        `;

        tbody.appendChild(tr);
    });
}

function excluirCurso(index) {
    if (!confirm("Deseja excluir este curso?")) return;
    cursos.splice(index, 1);
    localStorage.setItem("cursos", JSON.stringify(cursos));
    renderCursos();
}

/* ===== DISCIPLINAS ===== */
function salvarDisciplina() {
    disciplinas.push({
        codigo: discCodigo.value,
        nome: discNome.value,
        curso: discCurso.value,
        carga: discCarga.value,
        creditos: discCreditos.value,
        semestre: discSemestre.value
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

/* ===== MODAL ===== */
function fecharModal() {
    document.getElementById("modalCurso").style.display = "none";
}

function limparCurso() {
    cursoCodigo.value = "";
    cursoNome.value = "";
    cursoCoordenador.value = "";
    cursoTurno.value = "";
    cursoDuracao.value = "";
}

/* ===== INIT ===== */
renderCursos();

/* ===== VOLTAR ===== */
function voltar() {
    window.location.href = "grade.html";
}