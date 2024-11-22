const apiKey = "1c264641f2fb4efbbf6104531242211";

async function getWeather() {
    const city = document.getElementById("city").value;
    if (!city) {
        alert("Por favor, insira o nome da cidade.");
        return;
    }

    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    try {
        const response = await fetch(url);
        

        if (!response.ok) throw new Error("Erro na requisição para a API.");

        const data = await response.json();
        console.log(data);


        document.getElementById("temperature").textContent = `Temperatura: ${data.current.temp_c}°C`;
        document.getElementById("air-quality").textContent = `Qualidade do ar: ${data.current.air_quality["us-epa-index"]}`;
        document.getElementById("humidity").textContent = `Umidade: ${data.current.humidity}%`;
        document.getElementById("wind-speed").textContent = `Velocidade do vento: ${data.current.wind_kph} km/h`;
        document.getElementById("uv-index").textContent = `Índice UV: ${data.current.uv}`;

    } catch (error) {
        console.error("Erro:", error);
        alert(error.message);
    }
}
