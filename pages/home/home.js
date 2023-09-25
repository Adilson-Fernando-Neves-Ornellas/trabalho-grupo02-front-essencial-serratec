
    function ligacaoApi() {

    // pega o que foi escrito no imput (nome da cidade)
    const inputCidade = document.getElementsByName("cidade")[0].value;

    // configurações basicas da Api
    const api = {
    key: "79839cb7d200ff545426cb4466664dff",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric",
    };

    // Faz o caminho (requisição) para pegar as informações 
    const caminho = fetch(`${api.base}weather?q=${inputCidade}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)

    caminho.then((response) => {
        if (!response.ok) {
            throw new Error(`http error: status ${response.status}`);
        }
        return response.json();
        })
        .catch((error) => {
            alert(error.message);
        })
        .then((response) => {
            dadosApi(response);
        });
        
        return false
    }

    function dadosApi(weather) {

        console.log(weather)//mostra no console do navegador

        // Pegando os elementos html 
        const htmlCidade = document.querySelector('.city')
        const htmlData = document.querySelector('.date');
        const htmlConteinerTemperatura = document.querySelector('.container-temp div div');
        const htmlSpanUnidadeTemperatura = document.querySelector('.container-temp  div span');
        const htmlClima = document.querySelector('.weather');
        const htmlAltaeBaixaTemp = document.querySelector('.low-high');
    
        // pega o elemento html nome adiciona ele p mostrar
        htmlCidade.innerText= `${weather.name}, ${weather.sys.country}`;

        // pega o elemento html data adiciona a data do dia p mostrar
        let now = new Date(); // cria uma dta vazia p depois ela ser preenchida
        htmlData.innerText = dataConstrutor(now);
        
        // pega o elemento html conteiner temperatura e adiciona a temperatura atual 
        let temperatura = `${Math.round(weather.main.temp)}`//caminho temperatura api
        htmlConteinerTemperatura.innerHTML = temperatura; 
        htmlSpanUnidadeTemperatura.innerHTML = `°c`;// adiciona o simbolo de unidade temp
    
        // Pega o elemento html clima e adiciona o clima 
        climaAtual = weather.weather[0].description; //caminho clima api
        htmlClima.innerText = capitalizeFirstLetter(climaAtual)
    
        // Pega o elemento html e adiciona a temp max e min
        htmlAltaeBaixaTemp.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
    }

    // funcão para contruir a data para ser impresso na tela 
    function dataConstrutor(d) {
        let days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
        let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julio", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    
        let day = days[d.getDay()]; //getDay: 0-6
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day}, ${date} ${month} ${year}`;
    }

