function show() {

    var data = new Date()
    var diaSemana = data.getDay()
    var dia = data.getDate() 
    var mes = data.getMonth()
    var ano = data.getFullYear()

    const diasDaSemana = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"]

    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

    const pessoas = [

    // Fevereiro
    {nome: "Andressa Cristina Schmidt dos Santos", dia: 7, mes: 1, ano: 1985, funcao: "Orientadora", foto:"img/fevereiro/andressa.jpg"},
    {nome: "Stephany Moralles Vinharski", dia: 10, mes: 1, ano: 1995, funcao: "Psicóloga", foto:"img/fevereiro/stephanie.jpg"},
    {nome: "Lucia Milczuk", dia: 16, mes: 1, ano: 1960, funcao: "Monitora", foto:"img/fevereiro/lucia.jpg"},
    {nome: "Pamela Quintino Machado", dia: 17, mes: 1, ano: 1995, funcao: "Professora", foto:"img/fevereiro/pamela.jpg"},
    {nome: "Julia Rocha de Magalhães", dia: 18, mes: 1, ano: 2000, funcao: "Recepcionista", foto:"img/fevereiro/julia.jpg"},
    {nome: "Luciane Silverio Desbessel", dia: 21, mes: 1, ano: 1978, funcao: "Professora", foto:"img/fevereiro/luciane.jpg"},

        //Março
    {nome: "Rosiane Gonzales dos Reis", data: new Date(2024, 2, 2), dia: 2, mes: 2, ano: 1971, funcao: "Professora", foto: 'img/marco/rosiane.jpg'},
    {nome: "Fillipe Alves Leite", data: new Date(2024, 2, 8), dia: 8, mes: 2, ano: 1986, funcao: "Professor", foto: 'img/marco/fillipeleite.jpg'},
    {nome: "Sarita Vieira Santos", data: new Date(2024, 2, 14), dia: 14, mes: 2, ano: 1981, funcao: "Orientadora", foto: 'img/marco/sarita.jpg'},
    {nome: "Paulo Henrique Mandoio Diniz", data: new Date(2024, 2, 18), dia: 18, mes: 2, ano: 1995, funcao: "Professor", foto: 'img/marco/paulo.jpg'},
    {nome: "Douglas Leal dos Santos", data: new Date(2024, 2, 20), dia: 20, mes: 2, ano: 1976, funcao: "Diretor", foto: 'img/marco/dls.png'},
    {nome: "Alexandro Antonio Procopio Gaspar ", data: new Date(2024, 2, 29), dia: 29, mes: 2, ano: 1981, funcao: "Alexandro", foto: 'img/marco/alexandro.jpg'},

    //DEZEMBRO
    {nome: "Carin Grime de Melo", dia: 13, mes: 11, ano: 1988, funcao: "Secretária", foto:"img/dezembro/carin.jpg"},
    {nome: "Glauton Vinicius de Andrade", dia: 27, mes: 11, ano: 1968, funcao: "Professor", foto:"img/dezembro/glauton.jpg"},

]

    const aniversariantesDoDia = [] 

    //Verifica quem faz aniversário hoje e inclui o objeto no array aniversariantesDoDia
    for ( i=0; i < pessoas.length; i++ ) {

        if (pessoas[i].dia == dia && pessoas[i].mes == mes) {
          aniversariantesDoDia.push(pessoas[i]) 
        }
    } 

    var n = aniversariantesDoDia.length

    if ( n > 0 ) {
           
        var k = 0
        
        do {
            
            // declare variables and create elements
            const conteinerAniversariantes = document.querySelector("#boxAniversariantes")

            const cardAniversariantes = document.createElement("div")   
            const fotoAniversariantes = document.createElement("div")
            const nomeAniversariante = document.createElement("div")
            const funcaoAniversariante = document.createElement("div")
            const img = new Image()
            
            // add classes
            cardAniversariantes.classList.add('cardAniversariantes')
            fotoAniversariantes.classList.add('fotoAniversariantes')
            nomeAniversariante.classList.add('nomeAniversariante')
            funcaoAniversariante.classList.add('funcaoAniversariante')
            img.classList.add('foto')
                       
            // insert contents
            img.src = aniversariantesDoDia[k].foto
            nomeAniversariante.innerHTML = aniversariantesDoDia[k].nome
            funcaoAniversariante.innerHTML = aniversariantesDoDia[k].funcao
            
            // append
            fotoAniversariantes.appendChild(img)
            cardAniversariantes.appendChild(fotoAniversariantes)
            cardAniversariantes.appendChild(nomeAniversariante)
            cardAniversariantes.appendChild(funcaoAniversariante)
            conteinerAniversariantes.appendChild(cardAniversariantes)
    
            k++

        } while ( k < n )
    
    } else {
        document.body.style.display = "none"
        window.location="https://dls76.github.io/dbox2/"
    }
}

function fechar() {
    document.getElementById('conteiner').style.display = "none"
    window.location="https://dls76.github.io/dbox2/"
}


