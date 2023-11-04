document.addEventListener('DOMContentLoaded', function () {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const resultCelsius = document.getElementById('result-celsius');
    const resultFahrenheit = document.getElementById('result-fahrenheit');

    celsiusInput.addEventListener('input', function () {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 9/5) + 32;
        if (!isNaN(fahrenheit)) {
            fahrenheitInput.value = fahrenheit.toFixed(2);
            resultCelsius.innerText = `Celsius: ${celsius}°C`;
            resultFahrenheit.innerText = `Fahrenheit: ${fahrenheit}°F`;
        } else {
            fahrenheitInput.value = '';
            resultCelsius.innerText = '';
            resultFahrenheit.innerText = '';
        }
    });

    fahrenheitInput.addEventListener('input', function () {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        const celsius = (fahrenheit - 32) * 5/9;
        if (!isNaN(celsius)) {
            celsiusInput.value = celsius.toFixed(2);
            resultFahrenheit.innerText = `Fahrenheit: ${fahrenheit}°F`;
            resultCelsius.innerText = `Celsius: ${celsius}°C`;
        } else {
            celsiusInput.value = '';
            resultFahrenheit.innerText = '';
            resultCelsius.innerText = '';
        }
    });
});
