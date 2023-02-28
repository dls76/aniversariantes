function show() {

    var data = new Date()
    var diaSemana = data.getDay()
    var dia = data.getDate() 
    var mes = data.getMonth()
    var ano = data.getFullYear()

    const diasDaSemana = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"]

    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

    const pessoas = [
        // JANEIRO
        {nome: "Humberto Marshall Mendes Giménez", dia: 10, mes: 0, ano: 1967, funcao: "Professor"},
        {nome: "Rosilene de Araujo Silva", dia: 19, mes: 0, ano: 1967, funcao: "Professora"},
        {nome: "Roberta Silva Ribeiro Carvalho", dia: 22, mes: 0, ano: 1979, funcao: "Secretária"},
        {nome: "Guilherme Dionisio Lendecker", dia: 19, mes: 0, ano: 1981, funcao: "Professor"},
        {nome: "Paula Gavinski Silvestre", dia: 21, mes: 0, ano: 1986, funcao: "Professora"},
        {nome: "Jeniffer Beatriz de Oliveira", dia: 2, mes: 0, ano: 2001, funcao: "Aux. de Classe"},
        // FEVEREIRO
        {nome: "Ione Modesto Andrade", dia: 16, mes: 1, ano: 1967, funcao: "Zeladora"},
        {nome: "Pauline Ferreira Roefero", dia: 24, mes: 1, ano: 1977, funcao: "Professora"},
        {nome: "Luciano Eliel Pszybylski", dia: 7, mes: 1, ano: 1980, funcao: "Professor"},
        {nome: "Sarita Teresinha Burei", dia: 9, mes: 1, ano: 1980, funcao: "Aux. de Classe"},
        {nome: "Karoline Brendle Medeiros", dia: 16, mes: 1, ano: 1990, funcao: "Coordenadora"},
        {nome: "Murilo Klimek", dia: 2, mes: 1, ano: 2001, funcao: "TI"},
        // MARÇO
        {nome: "Wander Rocha de Oliveira", dia: 15, mes: 2, ano: 1963, funcao: "Professor"},
        {nome: "Hermes da Silva Jardim", dia: 12, mes: 2, ano: 1965, funcao: "Professor"},
        {nome: "Ana Lucia Santos das Neves", dia: 22, mes: 2, ano: 1976, funcao: "Aux. de Classe"},
        {nome: "Sirlei Barbosa da Silva Gomes", dia: 2, mes: 2, ano: 1980, funcao: "Aux. Biblioteca"},
        {nome: "Priscila Paula de Oliveira Albanez", dia: 21, mes: 2, ano: 1988, funcao: "Professora"},
        {nome: "Douglas Leal dos Santos", dia: 20, mes: 2, ano: 1976, funcao: "Diretor"}, 

        // ABRIL
        {nome: "Denise Padilha Gomes", dia: 19, mes: 3, ano: 1966, funcao: "Orientadora"},
        {nome: "Sandra Nascimento", dia: 2, mes: 3, ano: 1963, funcao: "Orientadora"},
        {nome: "Elaine Borges Rufino Dalla Villa", dia: 16, mes: 3, ano: 1970, funcao: "Professora"},
        {nome: "Maria Cristiane Ribas Dorneles", dia: 6, mes: 3, ano: 1976, funcao: "Zeladora"},
        {nome: "Claudia Regina Godoy de Lima", dia: 16, mes: 3, ano: 1976, funcao: "Zeladora"},
        {nome: "Jackelini Muzy Vaz", dia: 30, mes: 3, ano: 1978, funcao: "Professora"},
        {nome: "Josiele Alves", dia: 19, mes: 3, ano: 1980, funcao: "Professora"},
        {nome: "Joelma Batista Prestes", dia: 29, mes: 3, ano: 1980, funcao: "Aux. de Classe"},
        {nome: "Joelma Castro de Santana Abreu", dia: 29, mes: 3, ano: 1988, funcao: "Professora"},
        {nome: "Ana Claudia Stocco Ramos Candido", dia: 7, mes: 3, ano: 1982, funcao: "Professora"},
        {nome: "Patricia Helen de Oliveira Sebastiao", dia: 27, mes: 3, ano: 1984, funcao: "Aux. de Classe"},
        {nome: "Talita Salazar dos Santos", dia: 27, mes: 3, ano: 1992, funcao: "Monitora"},
        {nome: "Lucas de Lima Galo", dia: 20, mes: 3, ano: 1996, funcao: "Monitor"},
        {nome: "Dielen Peniche do Nascimento Costa", dia: 10, mes: 3, ano: 1997, funcao: "Zeladora"},
        {nome: "Juliana Pires Lima", dia: 5, mes: 3, ano: 1998, funcao: "Aux. de Classe"},
        {nome: "Andre Felipe Stachak dos Santos", dia: 28, mes: 3, ano: 2000, funcao: "Aux. de TI"},
        // MAIO
        {nome: "Caroline do Nascimento Dauzacker", dia: 28, mes: 4, ano: 2002, funcao: "Recepcionista"},
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
        {nome: "Tatiane da Silva Martins", dia: 25, mes: 4, ano: 1993, funcao: "Tutora"},
        //JUNHO
        {nome: "Josiane Charnei Gonçalves", dia: 10, mes: 5, ano: 1983, funcao: "Reprografista"},
        {nome: "Tayna Ribeiro dos Santos ", dia: 25, mes: 5, ano: 1997, funcao: "Professora"},
        {nome: "Leticia Rafaela Morales", dia: 11, mes: 5, ano: 1999, funcao: "Aux. de Classe"},
        //JULHO
        {nome: "Cacilda Smaha Mannala", dia: 16, mes: 6, ano: 1972, funcao: "Bibliotecária Rede"},
        {nome: "Janice Aparecida dos Santos Mello", dia: 19, mes: 6, ano: 1972, funcao: "Aux. de Classe"},
        {nome: "Daniela Regina Lamarques Isobe", dia: 4, mes: 6, ano: 1975, funcao: "Coordenadora"},
        {nome: "Liamara Andrighetto", dia: 8, mes: 6, ano: 1981, funcao: "Professora"},
        {nome: "Ronaldo Vieira Silva Modesto", dia: 12, mes: 6, ano: 1982, funcao: "Professor"},
        {nome: "João Paulo Sales Marreiro", dia: 31, mes: 6, ano: 1982, funcao: "Monitor"},
        {nome: "Thiago Andrews Carvalho", dia: 24, mes: 6, ano: 1984, funcao: "Vice-diretor"},
        
        //AGOSTO
        {nome: "Sandra Cristina Labatut Pereira", dia: 19, mes: 7, ano: 1970, funcao: "Professora"},
        {nome: "Vania Geraldo da Silva Soares", dia: 4, mes: 7, ano: 1976, funcao: "Professora"},
        {nome: "Clarice dos Santos da Silva", dia: 15, mes: 7, ano: 1977, funcao: "Professora"},
        {nome: "Willian Resende Leite", dia: 25, mes: 7, ano: 1977, funcao: "Professor"},
        
        //SETEMBRO
        {nome: "Janete Stachak dos Santos", dia: 1, mes: 8, ano: 1976, funcao: "Monitora"},
        {nome: "Merillyn Kelse Rego Abreu", dia: 6, mes: 8, ano: 1986, funcao: "Recepcionista"},
        {nome: "Scheyla Luciana Pinto dos Santos de Lima", dia: 11, mes: 8, ano: 1976, funcao: "Professora"},
        {nome: "Louise Helena Monteiro Vargas", dia: 15, mes: 8, ano: 1995, funcao: "Psicóloga"},
        {nome: "Eduardo Blaskovi Pereira dos Santos", dia: 20, mes: 8, ano: 1985, funcao: "Promotor Matrícula"},
        {nome: "Jucicleide Silva Santos", dia: 25, mes: 8, ano: 1974, funcao: "Professora"},
        {nome: "Endi Thais Santos da Silva", dia: 26, mes: 8, ano: 1993, funcao: "Professora"},
        {nome: "Hellen Aguilar da Silva Perly", dia: 28, mes: 8, ano: 1983, funcao: "Professora"},
        
        //OUTUBRO
        {nome: "Ana Paula de Barros Muller", dia: 6, mes: 9, ano: 1982, funcao: "Professora"},
        {nome: "Luis Felipe Rodrigues Dias", dia: 6, mes: 9, ano: 1997, funcao: "Professor"},
        {nome: "Alessandra Medeiros Wolff", dia: 7, mes: 9, ano: 1982, funcao: "Professora"},
        {nome: "Maria Cristina de Matos", dia: 12, mes: 9, ano: 1966, funcao: "Monitora"},
        {nome: "Eliesio Alencar", dia: 18, mes: 9, ano: 1995, funcao: "Aux. Tesouraria"},
        {nome: "Lorena Cecilia Fonta Alvares", dia: 19, mes: 9, ano: 1981, funcao: "Zeladora"},
        
        //NOVEMBRO
        {nome: "Denise Schmidt Vieira", dia: 5, mes: 10, ano: 1971, funcao: "Professora"},
        {nome: "Janice Maria de Santana da Silva", dia: 8, mes: 10, ano: 1969, funcao: ""},
        {nome: "Maria Aparecida de Barros Almeida", dia: 13, mes: 10, ano: 1963, funcao: "Orientadora"},
        {nome: "Leticia Caroline dos Santos", dia: 16, mes: 10, ano: 2000, funcao: "Aux. de Classe"},
        {nome: "Sãmella Modesto Ferreira", dia: 27, mes: 10, ano: 2003, funcao: "Aux. de Classe"},
        {nome: "Gisele Anastacio de Souza", dia: 29, mes: 10, ano: 1983, funcao: "Aux. de Classe"},
        {nome: "Fernanda Moreira da Silva Nakonieczni", dia: 30, mes: 10, ano: 1990, funcao: "Professora"},
        
        //DEZEMBRO
        {nome: "Danielle Sousa da Silva Ferraz de Matos", dia: 2, mes: 11, ano: 1989, funcao: "Tesoureira"},
        {nome: "Raquel das Gracas Rodrigues da Anunciacao", dia: 7, mes: 11, ano: 1968, funcao: "Aux. de Classe"},
        {nome: "Carin Grime de Melo", dia: 13, mes: 11, ano: 1988, funcao: "Aux. Secretaria"},
        {nome: "Caroline Ramos Joaquim", dia: 17, mes: 11, ano: 1978, funcao: "Professora"},
        {nome: "Denis de Noronha Gomes", dia: 19, mes: 11, ano: 1977, funcao: "Professor"},
        {nome: "Janete Alves Tachechem", dia: 27, mes: 11, ano: 1976, funcao: "Professora"},
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
        window.location="https://dls76.github.io/D-Box/"
    }
}

function fechar() {
    document.getElementById('conteiner').style.display = "none"
    window.location="https://dls76.github.io/D-Box/"
}
