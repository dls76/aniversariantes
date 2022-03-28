function show() {

    var data = new Date()
    var diaSemana = data.getDay()
    var dia = data.getDate() 
    var mes = data.getMonth()
    var ano = data.getFullYear()

    const diasDaSemana = [
        "domingo",
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta",
        "sábado"
    ]

    const meses = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ]

    const pessoas = [

        {nome: "Douglas Leal dos Santos", dia: 20, mes: 2, ano: 1976,  funcao: "Diretor"}, 
        {nome: "Andressa Cristina Schmidt dos Santos", dia: 7, mes: 1, ano: "1985", funcao: "Orientadora"},
        {nome: "Giovana Schmidt dos Santos", dia: 19, mes: 4, ano: 2005, funcao: "Estudante - 131"},
        {nome: "Laura Schmidt dos Santos", dia: 2, mes: 6, ano: 2011, funcao: "Estudante - 63"},

    ]

    const aniversariantesDoDia = [] 

    // Data atual completa
    document.getElementById('hoje').innerHTML = `Hoje é ${diasDaSemana[diaSemana]}, ${dia} de ${meses[mes]} de ${ano}.`

    //Verifica quem faz aniversário hoje e inclui o objeto no array aniversariantesDoDia
    for ( i=0; i < pessoas.length; i++ ) {

        if (pessoas[i].dia == dia && pessoas[i].mes == mes) {

          aniversariantesDoDia.push(pessoas[i]) 

        }

    } 

    let n = aniversariantesDoDia.length

    if (n > 0) {

        for ( i = 0; i < aniversariantesDoDia.length; i++ ) {

        let p = document.createElement("p")
        p.innerHTML = aniversariantesDoDia[i].nome + " " + aniversariantesDoDia[i].funcao
    
        document.getElementById("nome").appendChild(p)

        } 
    
    } else {
        document.body.style.display = "none"
        window.location="https://dls76.github.io/D-Box/"

    }
    
}
// document.getElementById('nome').innerHTML = aniversariantesDoDia[i].nome
// document.getElementById('funcao').innerHTML = aniversariantesDoDia[i].funcao

function fechar() {
    document.getElementById('conteiner').style.display = "none"
    window.location="https://dls76.github.io/D-Box/"
}