function show() {

    var data = new Date()
    var diaSemana = data.getDay()
    var dia = data.getDate() 
    var mes = data.getMonth()
    var ano = data.getFullYear()

    const diasDaSemana = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"]

    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

    const pessoas = [
        {nome: "Douglas Leal dos Santos", dia: 20, mes: 2, ano: 1976, funcao: "Diretor"}, 
        {nome: "Denise Padilha Gomes", dia: 19, mes: 3, ano: 1966, funcao: "Orientadora"},
        {nome: "Sisera Sandra Joaquim Nascimento", dia: 3, mes: 3, ano: 1963, funcao: "Orientadora"},
        {nome: "Elaine Borges Rufino Dalla Villa", dia: 16, mes: 3, ano: 1970, funcao: "Professora"},
        {nome: "Maria Cristiane Ribas Dorneles", dia: 6, mes: 3, ano: 1976, funcao: "Zeladora"},
        {nome: "Claudia Regina Godoy de Lima", dia: 16, mes: 3, ano: 1976, funcao: "Zeladora"},
        {nome: "Jackelini Muzy Vaz", dia: 30, mes: 3, ano: 1978, funcao: "Professora"},
        {nome: "Josiele Alves", dia: 19, mes: 3, ano: 1980, funcao: "Professora"},
        {nome: "Joelma Batista Prestes", dia: 29, mes: 3, ano: 1980, funcao: "Aux. de Classe"},
        {nome: "Ana Claudia Stocco Ramos Candido", dia: 7, mes: 3, ano: 1982, funcao: "Professora"},
        {nome: "Patricia Helen de Oliveira Sebastiao", dia: 27, mes: 3, ano: 1984, funcao: "Aux. de Classe"},
        {nome: "Talita Salazar dos Santos", dia: 27, mes: 3, ano: 1992, funcao: "Monitora"},
        {nome: "Lucas de Lima Galo", dia: 20, mes: 3, ano: 1996, funcao: "Monitor"},
        {nome: "Dielen Peniche do Nascimento Costa", dia: 10, mes: 3, ano: 1997, funcao: "Zeladora"},
        {nome: "Juliana Pires Lima", dia: 5, mes: 3, ano: 1998, funcao: "Aux. de Classe"},
        {nome: "Andre Felipe Stachak dos Santos", dia: 28, mes: 3, ano: 2000, funcao: "Aux. de TI"},
        {nome: "Rudimar Roberto Nemitz", dia: 9, mes: 4, ano: 1966, funcao: "Coord. Disciplinar"},
        {nome: "Wilson José Sebastião", dia: 8, mes: 4, ano: 1972, funcao: "Professor"},
        {nome: "Lucilene Silvestre Barbosa", dia: 28, mes: 4, ano: 1972, funcao: "Monitora"},
        {nome: "Matheus Souza da Rosa", dia: 7, mes: 4, ano: 1985, funcao: "Professor"},
        {nome: "Fernanda de Fatima de Matos Borges", dia: 14, mes: 4, ano: 1985, funcao: "Professora"},
        {nome: "Jaqueline Alves de Grandi", dia: 29, mes: 4, ano: 1986, funcao: "Professora"},
        {nome: "Wesley de Sousa Oliveira", dia: 31, mes: 4, ano: 1986, funcao: "Monitor"},
        {nome: "Fernando da Silva Calsavara", dia: 3, mes: 4, ano: 1989, funcao: "Professor"},
        {nome: "Patricia Maria Chagas", dia: 31, mes: 4, ano: 1994, funcao: "Professora"},
        {nome: "Rodrigo Marlon Bueno", dia: 29, mes: 4, ano: 1998, funcao: "Monitor"},
        {nome: "Cristiano Halabi Monteiro Ribas", dia: 11, mes: 4, ano: 2000, funcao: "Professor"},
        {nome: "Josiane Charnei Gonçalves", dia: 10, mes: 5, ano: 1983, funcao: "Reprografista"},
        {nome: "Tayna Ribeiro dos Santos ", dia: 25, mes: 5, ano: 1997, funcao: "Professora"},
        {nome: "Leticia Rafaela Morales", dia: 11, mes: 5, ano: 1999, funcao: "Aux. de Classe"},
        {nome: "Cacilda Smaha Mannala", dia: 16, mes: 6, ano: 1972, funcao: "Bibliotecária Rede"},
        {nome: "Janice Aparecida dos Santos Mello", dia: 19, mes: 6, ano: 1972, funcao: "Coordenadora"},
        {nome: "Daniela Regina Lamarques Isobe", dia: 4, mes: 6, ano: 1975, funcao: "Professor(a)"},
        {nome: "Liamara Andrighetto", dia: 8, mes: 6, ano: 1981, funcao: "Professor(a)"},
        {nome: "Ronaldo Vieira Silva Modesto", dia: 12, mes: 6, ano: 1982, funcao: "Professor(a)"},
        {nome: "João Paulo Sales Marreiro", dia: 31, mes: 6, ano: 1982, funcao: "Professor(a)"},
        {nome: "Thiago Andrews Carvalho", dia: 24, mes: 6, ano: 1984, funcao: "Professor(a)"},
        {nome: "Sandra Cristina Labatut Pereira", dia: 19, mes: 7, ano: 1970, funcao: "Professor(a)"},
        {nome: "Vania Geraldo da Silva Soares", dia: 4, mes: 7, ano: 1976, funcao: "Professor(a)"},
        {nome: "Clarice dos Santos da Silva", dia: 15, mes: 7, ano: 1977, funcao: "Professor(a)"},
        {nome: "Willian Resende Leite", dia: 25, mes: 7, ano: 1977, funcao: "Professor(a)"},
        {nome: "Jucicleide Silva Santos", dia: 25, mes: 8, ano: 1974, funcao: "Professor(a)"},
        {nome: "Janete Stachak dos Santos", dia: 1, mes: 8, ano: 1976, funcao: "Professor(a)"},
        {nome: "Scheyla Luciana Pinto dos Santos de Lima", dia: 11, mes: 8, ano: 1976, funcao: "Professor(a)"},
        {nome: "Hellen Aguilar da Silva Perly", dia: 28, mes: 8, ano: 1983, funcao: "Professor(a)"},
        {nome: "Eduardo Blaskovi Pereira dos Santos", dia: 20, mes: 8, ano: 1985, funcao: "Professor(a)"},
        {nome: "Merillyn Kelse Rego Abreu", dia: 6, mes: 8, ano: 1986, funcao: "Professor(a)"},
        {nome: "Endi Thais Santos da Silva", dia: 26, mes: 8, ano: 1993, funcao: "Professor(a)"},
        {nome: "Maria Cristina de Matos", dia: 12, mes: 9, ano: 1966, funcao: "Professor(a)"},
        {nome: "Lorena Cecilia Fonta Alvares", dia: 19, mes: 9, ano: 1981, funcao: "Professor(a)"},
        {nome: "Ana Paula de Barros Muller", dia: 6, mes: 9, ano: 1982, funcao: "Professor(a)"},
        {nome: "Alessandra Medeiros Wolff", dia: 7, mes: 9, ano: 1982, funcao: "Professor(a)"},
        {nome: "Eliesio Alencar", dia: 18, mes: 9, ano: 1995, funcao: "Professor(a)"},
        {nome: "Luis Felipe Rodrigues Dias", dia: 6, mes: 9, ano: 1997, funcao: "Professor(a)"},
        {nome: "Maria Aparecida de Barros Almeida", dia: 13, mes: 10, ano: 1963, funcao: "Professor(a)"},
        {nome: "Denise Schmidt Vieira", dia: 5, mes: 10, ano: 1971, funcao: "Professor(a)"},
        {nome: "Leticia Caroline dos Santos", dia: 16, mes: 10, ano: 2000, funcao: "Professor(a)"},
        {nome: "Raquel das Gracas Rodrigues da Anunciacao", dia: 7, mes: 11, ano: 1968, funcao: "Professor(a)"},
        {nome: "Janete Alves Thachechem", dia: 27, mes: 11, ano: 1976, funcao: "Professor(a)"},
        {nome: "Denis de Noronha Gomes", dia: 19, mes: 11, ano: 1977, funcao: "Professor(a)"},
        {nome: "Caroline Ramos Joaquim", dia: 17, mes: 11, ano: 1978, funcao: "Professor(a)"},
        {nome: "Reinaldo Felipe Ferreira", dia: 7, mes: 11, ano: 1982, funcao: "Professor(a)"},
        {nome: "Katia Jaqueline Tavares Adriano", dia: 4, mes: 11, ano: 1985, funcao: "Professor(a)"},
        {nome: "Carin Grime de Melo", dia: 13, mes: 11, ano: 1988, funcao: "Professor(a)"},
        {nome: "Danielle Sousa da Silva Ferraz de Matos", dia: 2, mes: 11, ano: 1989, funcao: "Professor(a)"},
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

    var n = aniversariantesDoDia.length

    if ( n > 0 ) {
           
        var k = 0
        do {    
            const p = document.createElement("p")
            p.innerHTML = `${aniversariantesDoDia[k].nome} - ${aniversariantesDoDia[k].funcao}`
            document.getElementById("nome").appendChild(p)
            k++   
        } while ( k < n )
    
    } else {
        document.body.style.display = "none"
        window.location="https://www.google.com"
    }
}

function fechar() {
    document.getElementById('conteiner').style.display = "none"
    window.location="https://www.google.com"
}