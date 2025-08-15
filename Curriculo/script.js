
document.getElementById("btnSaudacao").addEventListener("click", function () {
  const input = document.getElementById("nome");
  const nome = input.value.trim();
  if (nome) {
    alert("Olá! Obrigado por visitar meu currículo, " + nome + ".");
    document.getElementById("saudacao").innerText =
      "Olá, " + nome + "! Seja bem-vindo ao meu currículo.";

    localStorage.setItem("nomeVisitante", nome);
  } else {
    alert("Por favor, digite seu nome.");
    input.focus();
  }
});

(function () {
  const salvo = localStorage.getItem("nomeVisitante");
  if (salvo) {
    document.getElementById("saudacao").innerText =
      "Olá, " + salvo + "! Bom te ver por aqui novamente.";
  }
})();

const canvas = document.getElementById("grafico");
const ctx = canvas.getContext("2d");
const barras = [
  { x: 10,  y: 50,  w: 80, h: 50, color: "#457b9d" },
  { x: 110, y: 30,  w: 80, h: 70, color: "#1d3557" },
  { x: 210, y: 70,  w: 80, h: 30, color: "#a8dadc" },
];
barras.forEach(b => {
  ctx.fillStyle = b.color;
  ctx.fillRect(b.x, b.y, b.w, b.h);
});
