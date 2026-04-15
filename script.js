

function chamarAPI() {
    var anoSelec = document.getElementById('ano').value
    var erro = document.querySelector('.erro')
    var titulo = document.querySelector('h5')
    var resultado = document.querySelector('.resultado')
 
    resultado.style.maxWidth = "100%";
    resultado.style.width = "600px";
    resultado.style.margin = "0 auto";
    
    const lista = document.querySelector('ul');
    lista.style.listStyleType = 'none';

    // console.log("Testando esta URL: ", url)

    document.querySelector('.erro').innerHTML = "" // limpar o conteúdo do span erro
    if (anoSelec < 1900 || anoSelec > 2199) {
        erro.innerHTML = "Digite um ano entre 1900 e 2199"
        erro.style.color = "red"
    }else{
        const options = { method: 'GET' }
        const url = `https://brasilapi.com.br/api/feriados/v1/${anoSelec}`

        fetch(url, options) // chamada da API com o fetch
            .then(response => {
                return  response.json() // retorna a resposta da requisição em formato JSON
            })
            .then(feriados => {  // trata o JSON recebido para jogar o resultado nos devidos campo          
                console.log(feriados) // o array de feriados é impresso no console do inspecionar para verificar o conteúdo
                titulo.innerHTML = `Feriados do ano de ${anoSelec}`
                const dados = feriados.map(linha => {
                    console.log(linha) // cada linha do array de feriados é impressa no console do inspecionar para verificar o conteúdo
                    const partes = linha.date.split('-'); 
                    const dataFormatada = `<b>${partes[2]}/${partes[1]}</b>`; // Pega o Dia e o Mês
                    return `<li class="item-feriado">${dataFormatada} - ${linha.name}</li>`
                }).join("")
                document.querySelector('.lista').innerHTML = dados        
            })
            .catch(err => {  // se der erro na requisição cai aqui           
                console.error(err)
            })
    }
}

