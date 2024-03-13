function calculate() {
    const voltage = parseFloat(document.getElementById('voltage').value);
    const current = parseFloat(document.getElementById('current').value);
    const resistance = parseFloat(document.getElementById('resistance').value);
    const power = parseFloat(document.getElementById('power').value);


    // Check how many values are provided
    const providedValues = [voltage, current, resistance, power].filter(val => !isNaN(val));


    // If two values are provided, calculate the other two
    if (providedValues.length === 2) {
        if (!isNaN(voltage) && !isNaN(current)) {
            document.getElementById('resistance').value = voltage / current;
            document.getElementById('power').value = voltage * current;
        }

        else if (!isNaN(voltage) && !isNaN(resistance)) {
            document.getElementById('current').value = voltage / resistance;
            document.getElementById('power').value = Math.pow(voltage, 2) / resistance;
        }

        else if (!isNaN(voltage) && !isNaN(power)) {
            document.getElementById('current').value = power / voltage;
            document.getElementById('resistance').value = Math.pow(voltage, 2) / power;
        }

        else if (!isNaN(current) && !isNaN(resistance)) {
            document.getElementById('voltage').value = current * resistance;
            document.getElementById('power').value = Math.pow(current, 2) * resistance;
        }

        else if (!isNaN(current) && !isNaN(power)) {
            document.getElementById('voltage').value = power / current;
            document.getElementById('resistance').value = power / Math.pow(current, 2);
        }

        else if (!isNaN(resistance) && !isNaN(power)) {
            document.getElementById('voltage').value = Math.sqrt(power * resistance);
            document.getElementById('current').value = Math.sqrt(power / resistance);
        }

        document.getElementById('result').innerText = '';
    }

    else {
        document.getElementById('result').innerText = 'Please provide any two values then click "Calculate" button to get remaining values.';
        setTimeout(() => document.getElementById('result').innerText = '', 3000);
    }
}

function clearFields() {
    document.getElementById('voltage').value = '';
    document.getElementById('current').value = '';
    document.getElementById('resistance').value = '';
    document.getElementById('power').value = '';
    document.getElementById('result').innerText = '';
}
