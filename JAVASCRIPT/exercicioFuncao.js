// 1 - Faça uma função que recebe as notas das 3 provas de um aluno e calcula a média dessas. Ao
//término do processo, devemos ter a mensagem "a média desse aluno é x" (sendo x o resultado do
//cálculo).


function calcularMedia(nota1,nota2, nota3) {

    let media = (nota1 + nota2 + nota3) / 3;

    console.log(`A média desse aluno é ${media}.`)

}

calcularMedia(5,7,6)
