function convertFtoC() {
    const fahrenheitValue = document.getElementById('fahrenheitInput').value;
    fetch(`http://localhost:5500/convertFtoC?fahrenheit=${fahrenheitValue}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('resultFtoC').innerHTML = `Result: ${data.result}`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function convertCtoF() {
    const celsiusValue = document.getElementById('celsiusInput').value;
    fetch(`http://localhost:5500/convertCtoF?celsius=${celsiusValue}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('resultCtoF').innerHTML = `Result: ${data.result}`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}