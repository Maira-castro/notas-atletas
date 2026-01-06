let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];


function calcularMedia(atletas) {
  for (let i = 0; i < atletas.length; i++) {
    let atleta = atletas[i];

    // Copia e ordena as notas
    let notasOrdenadas = atleta.notas.slice().sort((a, b) => a - b);

    // Remove a menor e a maior nota
    let notasValidas = notasOrdenadas.slice(1, 4);

    // Soma das notas válidas
    let soma = 0;
    notasValidas.forEach(nota => {
      soma += nota;
    });

    // Calcula a média
    let media = soma / notasValidas.length;

    // Exibe o resultado
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${notasOrdenadas.join(",")}`);
    console.log(`Média Válida: ${media}\n`);
  }
}

// Chamada da função
calcularMedia(atletas);