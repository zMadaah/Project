var numeroSorteador = document.querySelector("div.box h1");
var roleta = [];

for (i = 1; i <= 25; ) {
  roleta.push(i);
}
botaoSortear.addEventListener("click", () => {
  numeroSorteador.innerHTML =
    "O número sorteador é" + roleta[Math.floor(Math.random() * roleta.length)];
});
