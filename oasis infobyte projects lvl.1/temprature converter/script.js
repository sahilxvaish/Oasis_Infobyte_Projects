function convertToFar() {
    const celsius = parseFloat(document.getElementById('inputCelsius').value);
    if (!isNaN(celsius)) {
      const fahrenheit = (celsius * 9 / 5) + 32;
      document.getElementById('outputFahrenheit').value = fahrenheit.toFixed(2);
    } else {
      alert('Please enter a valid number for Celsius');
    }
  }
  