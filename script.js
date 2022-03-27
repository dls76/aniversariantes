function show() {

    var data = new Date()
    var diaSemana = data.getDay() /*Dia da semana*/
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

        {nome: "Douglas Leal dos Santos", dia: 27, mes: 2, ano: 1976, funcao: "Diretor"}

    ]

    // Data atual completa
    document.getElementById('hoje').innerHTML = `Hoje é ${diasDaSemana[diaSemana]}, ${dia} de ${meses[mes]} de ${ano}.`


    /*Array de objetos - somente os aniversariantes do dia, com as propriedades nome, dia, mes, ano, funcao*/
    // let aniversariantesDoDia = [] 

    for ( i=0; i < pessoas.length; i++ ) {
        
        if (pessoas[i].dia == dia && pessoas[i].mes == mes) {
        
            document.getElementById('nome').innerHTML = pessoas[i].nome
            document.getElementById('funcao').innerHTML = pessoas[i].funcao
            break

            } else {
                window.location.href = 'http://dls76.github.io/D-Box/'
            }

        } 
       
}

/*Até aqui funcionou*/
            // aniversariantesDoDia.push(pessoas[i]) 
            


            // if (aniversariantesDoDia.length > 1) {

            //     for (nome in aniversariantesDoDia) {
            //         document.getElementById('nome').innerHTML = nome
            //     }
                // for ( j = 0; j < aniversariantesDoDia.length; j++ ) {

                //     let nomesAnivDoDia = aniversariantesDoDia[j].nome

                //     document.getElementById('nome').innerHTML = nomesAnivDoDia[j].nome                
                
                // }

            // } else {