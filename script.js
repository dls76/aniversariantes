function show() {

    var data = new Date()
    var diaSemana = data.getDay()
    var dia = data.getDate() 
    var mes = data.getMonth()
    var ano = data.getFullYear()

    const diasDaSemana = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"]

    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

    const pessoas = [
       
        //JULHO	
    // {nome: "Ana Prado Bevilaqua", dia: 4, mes: 6, ano: 1978, funcao: "Professor(a)", foto:"img/avatar.png", nascimento: new Date()},
    // {nome: "Daniela Regina Lamarques Isobe", dia: 4, mes: 6, ano: 1975, funcao: "Coordenadora", foto:"img/account.png", nascimento: new Date()},
    // {nome: "Noemi Macedo Amorim", dia: 7, mes: 6, ano: 1976, funcao: "Professor(a)", foto:"img/account.png", nascimento: new Date()},
    // {nome: "Cacilda Smaha Mannala", dia: 16, mes: 6, ano: 1972, funcao: "Bibliotecaria", foto:"img/account.png", nascimento: new Date()},
    // {nome: "Ana Amelia Loureço Simas", dia: 21, mes: 6, ano: 1978, funcao: "Função", foto:"img/account.png", nascimento: new Date()},
    // {nome: "Egislaine Regina Gonsaga", dia: 22, mes: 6, ano: 1978, funcao: "Função", foto:"img/account.png", nascimento: new Date()},
    // {nome: "Nailson Veras do Nascimento", dia: 24, mes: 6, ano: 1979, funcao: "Coordenador(a) Disciplinar", foto:"img/account.png", nascimento: new Date()},
    // {nome: "Thayse Oliveira dos Passos", dia: 25, mes: 6, ano: 1984, funcao: "Auxiliar de Biblioteca", foto:"img/account.png", nascimento: new Date()},
    // {nome: "Eloiza Carla dos Santos", dia: 27, mes: 6, ano: 2002, funcao: "Auxiliar de Secretaria", foto:"img/account.png", nascimento: new Date()},
    // {nome: "Leidiane Cristina Germano", dia: 27, mes: 6, ano: 1988, funcao: "Função", foto:"img/account.png", nascimento: new Date()},
    // {nome: "Monica Cristina Martins de Novais", dia: 31, mes: 6, ano: 1979, funcao: "Função", foto:"img/account.png", nascimento: new Date()},
    
    //AGOSTO
    // {nome: "Vanessa Moura de Freitas", dia: 2, mes: 7, ano: 1985, funcao: "Zeladora", foto:"img/anivImg/Vanessa.jpg", nascimento: new Date()},
    // {nome: "Caroline Cristina de Brito", dia: 4, mes: 7, ano: 1988, funcao: "Coordenadora Pedagógica", foto:"img/anivImg/Caroline.jpg", nascimento: new Date()},
    // {nome: "Elizabeth Alves Braun Soares", dia: 6, mes: 7, ano: 1971, funcao: "Auxiliar de Contraturno", foto:"img/anivImg/Elizabeth.jpg", nascimento: new Date()},
    // {nome: "Leonardo Ormianin Torres", dia: 12, mes: 7, ano: 1999, funcao: "Professor(a)", foto:"img/anivImg/Leonardo.jpg", nascimento: new Date()},
    // {nome: "Jessica Aparecida Dionisio", dia: 12, mes: 7, ano: 1996, funcao: "Tutora", foto:"img/anivImg/Jessica.jpg", nascimento: new Date()},
    // {nome: "Allan Almeida Lima", dia: 26, mes: 7, ano: 1982, funcao: "Professor(a)", foto:"img/anivImg/Allan.jpg", nascimento: new Date()},
    // {nome: "Laís Daniele dos Santos", dia: 28, mes: 7, ano: 2001, funcao: "Auxiliar Contraturno", foto:"img/anivImg/Lais.jpg", nascimento: new Date()},
    
    //SETEMBRO
    // {nome: "Renata Brasil Lima", dia: 1, mes: 8, ano: 1993, funcao: "Professor(a)", foto:"img/anivImg/Renata.jpg", nascimento: new Date()},
    // {nome: "Ingo Iwankiw", dia: 2, mes: 8, ano: 1980, funcao: "Monitor(a)", foto:"img/anivImg/Ingo.jpg", nascimento: new Date()},
    // {nome: "Felipe Guilherme Lima Bueno da Silva", dia: 11, mes: 8, ano: 1988, funcao: "Professor(a)", foto:"img/anivImg/Felipe.jpg", nascimento: new Date()},
    // {nome: "Rafael Guilherme Palma Silva", dia: 13, mes: 8, ano: 1988, funcao: "Professor(a)", foto:"img/anivImg/Rafael.jpg", nascimento: new Date()},
    // {nome: "Rafaela Lourenco de Mello", dia: 25, mes: 8, ano: 1990, funcao: "Auxiliar", foto:"img/anivImg/Rafaela.jpg", nascimento: new Date()},
    // {nome: "Daniel Faria Filho", dia: 26, mes: 8, ano: 1963, funcao: "Monitor(a)", foto:"img/anivImg/Daniel.jpg", nascimento: new Date()},
    // {nome: "Vinicius Fernando Serain", dia: 27, mes: 8, ano: 1990, funcao: "Pastoral", foto:"img/anivImg/vini.jpg", nascimento: new Date()},

    //OUTUBRO
    {nome: "Daisy Karin Silva Ferreira", dia: 6, mes: 9, ano: 1993, funcao: "Promotora de Matrículas", foto:"img/outubro/Daisy.jpeg", birth: new Date(1976, 2, 20)},
    {nome: "Larissa Cardoso de Franca Goncalves", dia: 6, mes: 9, ano: 1987, funcao: "Professora", foto:"img/outubro/Larissa.jpeg", birth: new Date(1976, 2, 20)},
    {nome: "Gisele Cordeiro da Silva", dia: 9, mes: 9, ano: 1984, funcao: "Tutora", foto:"img/outubro/Gisele.jpg", birth: new Date(1976, 2, 20)},
    {nome: "Jaqueline Marcia Hoffmeister Senko", dia: 9, mes: 9, ano: 1980, funcao: "Coord. Pedagógica", foto:"img/outubro/Jaqueline.png", birth: new Date(1976, 2, 20)},
    {nome: "Joice Mari da Silva Pereira", dia: 10, mes: 9, ano: 1992, funcao: "Professora", foto:"img/outubro/Joice.jpg", birth: new Date(1976, 2, 20)},
    {nome: "Douglas Frohlich Reded", dia: 19, mes: 9, ano: 1992, funcao: "TI", foto:"img/outubro/douglasfrohlich.jpeg", birth: new Date(1976, 2, 20)},
    {nome: "Silmara de Lima Grochka", dia: 19, mes: 9, ano: 1993, funcao: "Tutora", foto:"img/outubro/silmara.jpg", birth: new Date(1976, 2, 20)},
    {nome: "Isabele Carla dos Santos", dia: 24, mes: 9, ano: 2000, funcao: "Monitora", foto:"img/outubro/Isabele.jpeg", birth: new Date(1976, 2, 20)},
    {nome: "Carmem Aparecida Abolis da Silva", dia: 25, mes: 9, ano: 1982, funcao: "Professora", foto:"img/outubro/Carmem.jpg", birth: new Date(1976, 2, 20)},
    {nome: "Rosineide de Souza Westphal", dia: 25, mes: 9, ano: 1982, funcao: "Monitora", foto:"img/outubro/Rosineide.jpg", birth: new Date(1976, 2, 20)},
    
    //NOVEMBRO
    {nome: "Suzanne Mendes dos Santos", dia: 1, mes: 10, ano: 1989, funcao: "Professora", foto:"img/novembro/Suzanne.jpg"},
    {nome: "Bruna do Rocio Biscoto dos Santos", dia: 15, mes: 10, ano: 1997, funcao: "Auxiliar de CT", foto:"img/novembro/Bruna.jpg"},
    {nome: "Josiane Vieira Lopes Klimek", dia: 18, mes: 10, ano: 1975, funcao: "Tesoureira", foto:"img/novembro/Josiane.jpeg"},
    {nome: "Henry Fidelis Pereira", dia: 19, mes: 10, ano: 1996, funcao: "Professor", foto:"img/novembro/henry.jpg"},
    {nome: "Rosecler Vozniak Luiz", dia: 19, mes: 10, ano: 1967, funcao: "Tutora", foto:"img/novembro/Rosecler.jpg"},


    //DEZEMBRO
    {nome: "Leonardo Vinicius Santos e Santos", dia: 11, mes: 11, ano: 2002, funcao: "Professor", foto:"img/anivImg/dezembro/Leonardo"},
    {nome: "Valdene Neres de Sena Reis", dia: 12, mes: 11, ano: 1967, funcao: "Zeladora", foto:"img/anivImg/dezembro/Valdene"},
    {nome: "Carin Grime de Melo", dia: 13, mes: 11, ano: 1988, funcao: "Secretária", foto:"img/anivImg/dezembro/Carin"},
    {nome: "Glauton Vinicius de Andrade", dia: 27, mes: 11, ano: 1968, funcao: "Professor", foto:"img/anivImg/dezembro/Glauton"},
       
    ]

    const aniversariantesDoDia = [] 

    // Data atual completa
    // document.getElementById('hoje').innerHTML = `Hoje é ${diasDaSemana[diaSemana]}, ${dia} de ${meses[mes]} de ${ano}.`

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


