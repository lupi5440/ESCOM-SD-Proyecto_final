// Espera a que todo el contenido del DOM esté cargado antes de ejecutar el script.
document.addEventListener('DOMContentLoaded', () => {

    // =================================================================
    // CONFIGURACIÓN Y ENDPOINTS DEL BACKEND
    // =================================================================
    // IMPORTANTE: Reemplaza estas URLs con las de tus microservicios desplegados.
    const API_ENDPOINTS = {
        latestPrices: '/api/prices/latest',
        historicalGraph: '/api/graph/historical', // Ejemplo: /api/graph/historical?coin=BTC&hours=12
        regressionGraph: '/api/graph/regression'  // Ejemplo: /api/graph/regression?coin=BTC&start=10:00&end=12:00
    };

    // =================================================================
    // ELEMENTOS DEL DOM
    // =================================================================
    const pricesContainer = document.getElementById('latest-prices-container');
    const singleCoinSelect = document.getElementById('single-coin-select');
    const regressionCoinSelect = document.getElementById('regression-coin-select');

    // =================================================================
    // DATOS DE MUESTRA (MOCK DATA)
    // =================================================================
    // Esto simula la respuesta que tu microservicio debería devolver.
    // Una vez que tu backend esté listo, usa la data real del fetch.
    const mockTop10Coins = [
        { code: 'BTC', name: 'Bitcoin', price: 68134.50, rate: '0.003' },
        { code: 'ETH', name: 'Ethereum', price: 3550.18, rate: '0.015' },
        { code: 'USDT', name: 'Tether', price: 1.00, rate: '0.0' },
        { code: 'BNB', name: 'BNB', price: 590.70, rate: '0.005' },
        { code: 'SOL', name: 'Solana', price: 151.25, rate: '-0.021' },
        { code: 'USDC', name: 'USD Coin', price: 1.00, rate: '0.0' },
        { code: 'XRP', name: 'XRP', price: 0.49, rate: '0.001' },
        { code: 'DOGE', name: 'Dogecoin', price: 0.14, rate: '0.032' },
        { code: 'TON', name: 'Toncoin', price: 7.50, rate: '-0.010' },
        { code: 'ADA', name: 'Cardano', price: 0.42, rate: '0.007' },
    ];

    // Imagen y ecuación de muestra para los gráficos. Tu backend generará las reales.
    const mockGraphImage = 'https://placehold.co/600x400/0d6efd/ffffff?text=Gráfico+Generado';
    const mockRegressionEquation = 'y = 21.52x + 29898.04';

    // =================================================================
    // FUNCIONES PRINCIPALES
    // =================================================================

    /**
     * Muestra un indicador de carga en un contenedor.
     * @param {HTMLElement} container - El elemento donde se mostrará el loader.
     */
    const showLoader = (container) => {
        container.innerHTML = `<div class="d-flex justify-content-center align-items-center" style="min-height: inherit;"><div class="loader"></div></div>`;
    };

    /**
     * Busca y muestra los 10 precios más recientes de las criptomonedas.
     */
    const fetchLatestPrices = async () => {
        showLoader(pricesContainer);

        try {
            // SIMULACIÓN DE API: Reemplaza esto con una llamada fetch real.
            // const response = await fetch(API_ENDPOINTS.latestPrices);
            // if (!response.ok) throw new Error('Error al obtener los precios desde el servidor.');
            // const data = await response.json();

            // Usando datos de muestra (mock) por ahora.
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simula latencia
            const data = mockTop10Coins;

            pricesContainer.innerHTML = ''; // Limpia el contenedor de precios
            data.forEach(coin => {
                const priceChangeClass = parseFloat(coin.rate) >= 0 ? 'price-up' : 'price-down';
                const priceFormatted = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(coin.price);

                const coinElement = document.createElement('div');
                coinElement.className = 'list-group-item d-flex justify-content-between align-items-center';
                coinElement.innerHTML = `
                    <div class="d-flex align-items-center">
                        <img src="https://placehold.co/40x40/cccccc/000000?text=${coin.code}" alt="Icono de ${coin.name}" class="crypto-icon">
                        <div>
                            <h5 class="mb-0">${coin.name} <span class="text-muted">${coin.code}</span></h5>
                        </div>
                    </div>
                    <div class="text-end">
                        <h5 class="mb-0">${priceFormatted}</h5>
                        <small class="${priceChangeClass}">${(coin.rate * 100).toFixed(2)}%</small>
                    </div>
                `;
                pricesContainer.appendChild(coinElement);
            });

            populateCoinSelectors(data); // Llena los menús desplegables

        } catch (error) {
            pricesContainer.innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
            console.error("Error en fetchLatestPrices:", error);
        }
    };

    /**
     * Llena los selectores de monedas con la lista de criptos obtenida.
     * @param {Array} coins - El array de objetos de monedas.
     */
    const populateCoinSelectors = (coins) => {
        singleCoinSelect.innerHTML = '';
        regressionCoinSelect.innerHTML = '';
        coins.forEach(coin => {
            const option = `<option value="${coin.code}">${coin.name} (${coin.code})</option>`;
            singleCoinSelect.innerHTML += option;
            regressionCoinSelect.innerHTML += option;
        });
        singleCoinSelect.disabled = false;
        regressionCoinSelect.disabled = false;
    };

    /**
     * Genera y muestra un gráfico de imagen desde el backend.
     * @param {string} type - Tipo de gráfico ('historical' o 'regression').
     * @param {object} params - Parámetros para la URL de la API.
     * @param {HTMLElement} container - El contenedor para el gráfico.
     * @param {HTMLElement} [equationContainer] - Contenedor opcional para la ecuación.
     */
    const generateGraph = async (type, params, container, equationContainer = null) => {
        showLoader(container);
        if (equationContainer) equationContainer.innerHTML = '';

        try {
            const query = new URLSearchParams(params).toString();
            const url = type === 'historical' ? `${API_ENDPOINTS.historicalGraph}?${query}` : `${API_ENDPOINTS.regressionGraph}?${query}`;

            console.log(`Solicitando gráfico a: ${url}`);

            // SIMULACIÓN DE API: Tu backend debe devolver la imagen directamente.
            // const response = await fetch(url);
            // if (!response.ok) throw new Error('No se pudo generar el gráfico.');
            // const imageBlob = await response.blob();
            // const imageUrl = URL.createObjectURL(imageBlob);

            // Usando imagen de muestra (mock) por ahora.
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simula generación
            const imageUrl = mockGraphImage;

            container.innerHTML = `<img src="${imageUrl}" alt="Gráfico generado para ${params.coin}">`;

            if (type === 'regression' && equationContainer) {
                // La ecuación podría venir en un header o en otra llamada a la API.
                equationContainer.textContent = mockRegressionEquation;
            }

        } catch (error) {
            container.innerHTML = `<div class="alert alert-danger m-3">Error: ${error.message}</div>`;
            console.error(`Error en generateGraph (${type}):`, error);
        }
    };

    // =================================================================
    // MANEJADORES DE EVENTOS (EVENT LISTENERS)
    // =================================================================

    document.getElementById('btn-gen-single-graph').addEventListener('click', () => {
        const coin = document.getElementById('single-coin-select').value;
        const hours = document.getElementById('single-coin-hours').value;
        const container = document.getElementById('single-graph-container');
        generateGraph('historical', { coin, hours }, container);
    });

    document.getElementById('btn-gen-regression').addEventListener('click', () => {
        const coin = document.getElementById('regression-coin-select').value;
        const start = document.getElementById('regression-start-time').value;
        const end = document.getElementById('regression-end-time').value;

        if (!start || !end) {
            alert('Por favor, selecciona una hora de inicio y fin.');
            return;
        }

        const container = document.getElementById('regression-graph-container');
        const equationContainer = document.getElementById('regression-equation');
        generateGraph('regression', { coin, start, end }, container, equationContainer);
    });

    // =================================================================
    // INICIALIZACIÓN
    // =================================================================
    fetchLatestPrices(); // Carga los precios al iniciar la página

    setInterval(fetchLatestPrices, 60000); // Refresca los precios cada minuto
});
