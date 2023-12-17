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
function buttonClicked() {
    const firstSelect = document.getElementById('firstSelect');
    const selectedOption = firstSelect.options[firstSelect.selectedIndex];
    const selectedFruit = selectedOption.value;

    fetch('http://localhost:3000/selectFruit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fruit: selectedFruit })
    })
        .then(response => response.json())
        .then(data => {
            const secondSelect = document.getElementById('secondSelect');
            const newOption = document.createElement('option');
            newOption.value = selectedFruit;
            newOption.text = selectedOption.text;
            secondSelect.appendChild(newOption);

            firstSelect.remove(selectedOption.index);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}