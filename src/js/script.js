//ARRAY PAISES
const paises_array = [
    {
        pais: "Estados Unidos",
        flag_url: "https://www.countryflags.io/us/flat/24.png",
        rank: 1,
        medal_gold: 46,
        medal_silver: 37,
        medal_bronze: 38,
    },
    {
        pais: "Grã-Bretanha",
        flag_url: "https://www.countryflags.io/gb/flat/24.png",
        rank: 2,
        medal_gold: 27,
        medal_silver: 23,
        medal_bronze: 17,
    },
    {
        pais: "China",
        flag_url: "https://www.countryflags.io/cn/flat/24.png",
        rank: 3,
        medal_gold: 26,
        medal_silver:18,
        medal_bronze:19,
    },
    {
        pais: "Rússia",
        flag_url: "https://www.countryflags.io/ru/flat/24.png",
        rank: 4,
        medal_gold: 19,
        medal_silver:18,
        medal_bronze:19,
    },
    {
        pais: "Alemanha",
        flag_url: "https://www.countryflags.io/de/flat/24.png",
        rank: 5,
        medal_gold: 17,
        medal_silver: 10,
        medal_bronze: 15,
    },
    {
        pais: "Japão",
        flag_url: "https://www.countryflags.io/jp/flat/24.png",
        rank: 6,
        medal_gold: 12,
        medal_silver: 8,
        medal_bronze: 21,
    },
    {
        pais: "França",
        flag_url: "https://www.countryflags.io/fr/flat/24.png",
        rank: 7,
        medal_gold: 10,
        medal_silver: 18,
        medal_bronze: 14,
    },
    {
        pais: "Coreia do Sul",
        flag_url: "https://www.countryflags.io/kr/flat/24.png",
        rank: 8,
        medal_gold: 9,
        medal_silver:3,
        medal_bronze:9,
    },
    {
        pais: "Itália",
        flag_url: "https://www.countryflags.io/it/flat/24.png",
        rank: 9,
        medal_gold: 8,
        medal_silver: 12,
        medal_bronze: 8,
    },
    {
        pais: "Austrália",
        flag_url: "https://www.countryflags.io/au/flat/24.png",
        rank: 10,
        medal_gold: 8,
        medal_silver: 11,
        medal_bronze: 10,
    },
    {
        pais: "Holanda",
        flag_url: "https://www.countryflags.io/nl/flat/24.png",
        rank: 11,
        medal_gold: 8,
        medal_silver: 7,
        medal_bronze: 4,
    },
    {
        pais: "Hungria",
        flag_url: "https://www.countryflags.io/hu/flat/24.png",
        rank: 12,
        medal_gold: 7,
        medal_silver: 6,
        medal_bronze: 6,
    },
    {
        pais: "Brasil",
        flag_url: "https://www.countryflags.io/br/flat/24.png",
        rank: 13,
        medal_gold: 7,
        medal_silver: 6,
        medal_bronze: 6,
    },
    {
        pais: "Espanha",
        flag_url: "https://www.countryflags.io/es/flat/24.png",
        rank: 14,
        medal_gold: 7,
        medal_silver: 4,
        medal_bronze: 6,
    },
    {
        pais: "Quênia",
        flag_url: "https://www.countryflags.io/ke/flat/24.png",
        rank: 15,
        medal_gold: 6,
        medal_silver: 6,
        medal_bronze: 1,
    },
] 

//SELECIONA PAI
let quadroMedalhas = document.querySelector(".quadro-medalhas")

//CRIA TEMPLATE LINHA
function criarTemplateLinha(
    pais,
    flag_url,
    rank,
    medal_gold,
    medal_silver,
    medal_bronze,
    total,
){
    //TEMPLATE LINHA
    let linha = document.createElement("div")
    linha.classList.add("linha")

    //COLUNAS
    let col_rank = criarColRank(`${rank}º`)
    let col_pais = criarColPais(pais,flag_url)
    let col_gold = criarColGold(medal_gold)
    let col_silver = criarColSilver(medal_silver)
    let col_bronze = criarColBronze(medal_bronze)
    let col_total = criarColTotal(total)

    //ANINHAMENTO
    linha.appendChild(col_rank)
    linha.appendChild(col_pais)
    linha.appendChild(col_gold)
    linha.appendChild(col_silver)
    linha.appendChild(col_bronze)
    linha.appendChild(col_total)
    quadroMedalhas.appendChild(linha)
}

//TRATAR DADOS E CHAMAR TEMPLATE
function tratarDados(paises_array){
    for(let i = 0; i<paises_array.length; i++){
        let pais = paises_array[i]

        let total = pais.medal_gold + pais.medal_silver + pais.medal_bronze

        criarTemplateLinha(
            pais.pais,
            pais.flag_url,
            pais.rank,
            pais.medal_gold,
            pais.medal_silver,
            pais.medal_bronze,
            total,
        )
        
    }
}

//CHAMAR TEMPLATE COM DADOS TRATADOS
tratarDados(paises_array)

//CRIA COLUNA RANK
function criarColRank(rank){

    //COL RANK
    let col_rank = document.createElement("div")
    col_rank.classList.add("coluna","coluna-rank")
    
    //SPAN RANK
    let span_rank = document.createElement("span")
    span_rank.innerText = rank

    //ANINHAMENTO
    col_rank.appendChild(span_rank)

    return col_rank
}

//CRIA COLUNA PAÍS
function criarColPais(pais,flag_url){

    //COL PAÍS
    let col_pais = document.createElement("div")
    col_pais.classList.add("coluna","coluna-country")

    //IMG
    let img = document.createElement("img")
    img.src = flag_url
    img.alt = pais

    //SPAN PAÍS
    let span_pais = document.createElement("span")
    span_pais.innerText = pais

    //ANINHAMENTO
    col_pais.appendChild(img)
    col_pais.appendChild(span_pais)

    return col_pais
}

//CRIA COLUNA GOLD
function criarColGold(gold){

    //COL GOLD
    let col_gold = document.createElement("div")
    col_gold.classList.add("coluna","medal-gold")
    
    //SPAN GOLD
    let span_gold = document.createElement("span")
    span_gold.innerText = gold

    //ANINHAMENTO
    col_gold.appendChild(span_gold)

    return col_gold
}

//CRIA COLUNA SILVER
function criarColSilver(silver){

    //COL SILVER
    let col_silver = document.createElement("div")
    col_silver.classList.add("coluna","medal-silver")
    
    //SPAN SILVER
    let span_silver = document.createElement("span")
    span_silver.innerText = silver

    //ANINHAMENTO
    col_silver.appendChild(span_silver)

    return col_silver
}

//CRIA COLUNA BRONZE
function criarColBronze(bronze){

    //COL BRONZE
    let col_bronze = document.createElement("div")
    col_bronze.classList.add("coluna","medal-bronze")
    
    //SPAN BRONZE
    let span_bronze = document.createElement("span")
    span_bronze.innerText = bronze

    //ANINHAMENTO
    col_bronze.appendChild(span_bronze)

    return col_bronze
}

//CRIA COLUNA TOTAL
function criarColTotal(total){

    //COL TOTAL
    let col_total = document.createElement("div")
    col_total.classList.add("coluna","total")
    
    //SPAN TOTAL
    let span_total = document.createElement("span")
    span_total.innerText = total

    //ANINHAMENTO
    col_total.appendChild(span_total)

    return col_total
}

//FIM