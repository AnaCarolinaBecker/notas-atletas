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

let nomeAtletas = atletas.map(function(nomes){
  return nomes.nome
})

let notasObtidas = atletas.map(function(notas){
  let notasOrdenadas = notas.notas
  notasOrdenadas.sort(function(a,b){
    return a-b
  });
  return notasOrdenadas
})




for (let i = 0; i < atletas.length; i++){
console.log(`Atleta: ${nomeAtletas[i]}`)
console.log(`Notas Obtidas: ${notasObtidas[i]}`)
let calculaMedia = atletas.map(function(notas){
  let soma = 0
  notasObtidas[i].slice(1,-1).forEach(function(notas){
    soma = soma + notas
  })
  let media = soma / notasObtidas[i].slice(1,-1).length
  return media
})
console.log(`Média: ${calculaMedia[i]}`)
break 
}




