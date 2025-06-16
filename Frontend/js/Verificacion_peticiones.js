// Espera a que todo el contenido del HTML esté cargado antes de ejecutar el script.
document.addEventListener('DOMContentLoaded', () => {

    // ****************************************************************
    // Manejo de limite superio para el offset
    // ****************************************************************

    // Seleccionar los elementos de entrada por su ID.
    const limitInput = document.getElementById('limit-input');
    const offsetInput = document.getElementById('offset-input');

    //Función para actualizar el atributo 'max' del offset y validar su valor actual.
    function updateOffsetMax() {
        // 4. Obtener el valor de 'Resultados' y convertirlo a un número entero.
        const limitValue = parseInt(limitInput.value, 10);

        // Calcular el nuevo máximo para el offset.
        // Se usa Math.max para asegurar que el máximo nunca sea menor que 0.
        const newMax = Math.max(0, limitValue - 1);

        // Establecer el nuevo atributo 'max' en el campo de offset.
        offsetInput.max = newMax;

        // 5. Validar el valor actual del offset.
        // Si el valor actual del offset es mayor que el nuevo máximo permitido...
        if (parseInt(offsetInput.value, 10) > newMax) {
            // ...ajustar el valor del offset a ese nuevo máximo.
            offsetInput.value = newMax;
        }
    }

    // 2. Añadir un 'event listener' al campo 'Resultados'.
    // El evento 'input' se dispara cada vez que el valor cambia.
    limitInput.addEventListener('input', updateOffsetMax);

    // Llamada inicial al cargar la página.
    // Esto asegura que el 'max' del offset se configure correctamente 
    // con los valores por defecto del HTML al iniciar la aplicación.
    updateOffsetMax();

    // ****************************************************************
    // Manejo de opciones de monedas fiat
    // ****************************************************************

    const criptomonedas = [
        { codigo: 'BTC', nombre: 'Bitcoin' },
        { codigo: 'ETH', nombre: 'Ethereum' },
        { codigo: 'USDT', nombre: 'Tether' },
        { codigo: 'BNB', nombre: 'BNB' },
        { codigo: 'SOL', nombre: 'Solana' },
        { codigo: 'XRP', nombre: 'XRP' },
        { codigo: 'USDC', nombre: 'USD Coin' },
        { codigo: 'ADA', nombre: 'Cardano' },
        { codigo: 'DOGE', nombre: 'Dogecoin' },
        { codigo: 'AVAX', nombre: 'Avalanche' },
        { codigo: 'SHIB', nombre: 'Shiba Inu' },
        { codigo: 'DOT', nombre: 'Polkadot' },
        { codigo: 'LINK', nombre: 'Chainlink' },
        { codigo: 'TRX', nombre: 'TRON' },
        { codigo: 'MATIC', nombre: 'Polygon' },
        { codigo: 'BCH', nombre: 'Bitcoin Cash' },
        { codigo: 'LTC', nombre: 'Litecoin' },
        { codigo: 'XLM', nombre: 'Stellar' },
        { codigo: 'DAI', nombre: 'Dai' },
        { codigo: 'UNI', nombre: 'Uniswap' }
    ];

    const fiatSelect = document.getElementById('fiat-currency-select');

    // Limpiar opciones existentes (excepto la primera si es un placeholder)
    fiatSelect.innerHTML = '';

    // Poblar el select con los datos del arreglo
    monedasFiat.forEach(moneda => {
        const option = document.createElement('option');
        option.value = moneda.codigo;
        option.textContent = `${moneda.nombre} (${moneda.codigo})`;
        fiatSelect.appendChild(option);
    });

    // Para establecer un valor por defecto, como MXN, considerando su ubicación:
    fiatSelect.value = 'MXN';

});