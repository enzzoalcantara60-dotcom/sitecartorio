const slots = document.querySelectorAll(".time-slot");
const horarioSelecionado = document.getElementById("horarioSelecionado");
const form = document.getElementById("appointmentForm");
const resetBtn = document.getElementById("resetBtn");
const successBox = document.getElementById("successBox");

const servico = document.getElementById("servico");
const modalidade = document.getElementById("modalidade");
const data = document.getElementById("data");

const resumoServico = document.getElementById("resumoServico");
const resumoModalidade = document.getElementById("resumoModalidade");
const resumoData = document.getElementById("resumoData");
const resumoHorario = document.getElementById("resumoHorario");

slots.forEach((slot) => {
  slot.addEventListener("click", function () {
    slots.forEach((item) => item.classList.remove("selected"));
    this.classList.add("selected");
    horarioSelecionado.value = this.textContent.trim();
    resumoHorario.textContent = this.textContent.trim();
  });
});

function atualizarResumo() {
  resumoServico.textContent = servico.value || "Não selecionado";
  resumoModalidade.textContent = modalidade.value || "Não selecionada";
  resumoData.textContent = data.value || "Não selecionada";
}

servico.addEventListener("change", atualizarResumo);
modalidade.addEventListener("change", atualizarResumo);
data.addEventListener("change", atualizarResumo);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!horarioSelecionado.value) {
    alert("Selecione um horário antes de confirmar.");
    return;
  }

  successBox.style.display = "block";
  successBox.innerHTML = `
    <strong>Agendamento realizado com sucesso.</strong><br><br>
    Nome: <strong>${nome}</strong><br>
    Serviço: <strong>${servico.value}</strong><br>
    Modalidade: <strong>${modalidade.value}</strong><br>
    Data: <strong>${data.value}</strong><br>
    Horário: <strong>${horarioSelecionado.value}</strong><br>
    Confirmação enviada para: <strong>${email}</strong>
  `;
});

resetBtn.addEventListener("click", function () {
  slots.forEach((item) => item.classList.remove("selected"));
  horarioSelecionado.value = "";
  resumoServico.textContent = "Não selecionado";
  resumoModalidade.textContent = "Não selecionada";
  resumoData.textContent = "Não selecionada";
  resumoHorario.textContent = "Não selecionado";
  successBox.style.display = "none";
  successBox.innerHTML = "";
});