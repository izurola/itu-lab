
function Calculate() {
    const temperature = parseFloat(document.getElementById('tempInput').value);
    const conversionType = document.getElementById('conversionType').value;
    let result = 0;

    if (conversionType === 'C_To_F') {
        result = (temperature * 9 / 5) + 32;
    }
    else if (conversionType === 'F_To_C') {
        result = (temperature - 32) * 5 / 9;
    }

    document.getElementById('result').value = result;
}

function ChangeToSecond() {
    window.location.href = 'dasgal2.html';
}

function SelectFruit() {
    const firstSel = document.getElementById('fruits');
    const secondSel = document.getElementById('secondFruits');
    const opt = firstSel.options[firstSel.selectedIndex];
    const newOpt = document.createElement('option');
    newOpt.value = opt.value;
    newOpt.text = opt.text;
    secondSel.appendChild(newOpt);
    firstSel.remove(firstSel.selectedIndex);
}