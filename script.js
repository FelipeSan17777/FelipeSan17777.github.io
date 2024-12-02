document.getElementById("calculate-sum").addEventListener("click", function () {
    const gradesInput = document.getElementById("grades").value;
    const weightsInput = document.getElementById("weights").value;


    const grades = gradesInput.split(',').map(num => parseFloat(num.trim()));
    const weights = weightsInput.split(',').map(num => parseFloat(num.trim()));


    if (grades.some(isNaN) || weights.some(isNaN)) {
        document.getElementById("sum-result").textContent = "Por favor, ingresa valores numéricos válidos.";
        return;
    }


    if (grades.length !== weights.length) {
        document.getElementById("sum-result").textContent = "El número de notas no coincide con el número de pesos.";
        return;
    }


    const totalSum = grades.reduce((acc, grade) => acc + grade, 0);

    document.getElementById("sum-result").textContent = `La sumatoria total de las notas es: ${totalSum}`;
});

document.getElementById("calculate-average").addEventListener("click", function () {
    const gradesInput = document.getElementById("grades").value;
    const weightsInput = document.getElementById("weights").value;


    const grades = gradesInput.split(',').map(num => parseFloat(num.trim()));
    const weights = weightsInput.split(',').map(num => parseFloat(num.trim()));


    if (grades.some(isNaN) || weights.some(isNaN)) {
        document.getElementById("average-result").textContent = "Por favor, ingresa valores numéricos válidos.";
        return;
    }


    if (grades.length !== weights.length) {
        document.getElementById("average-result").textContent = "El número de notas no coincide con el número de pesos.";
        return;
    }


    let weightedSum = 0;
    let totalWeight = 0;

    for (let i = 0; i < grades.length; i++) {
        weightedSum += grades[i] * weights[i];  
        totalWeight += weights[i];  
    }

    const weightedAverage = weightedSum / totalWeight;

    document.getElementById("average-result").textContent = `El promedio ponderado es: ${weightedAverage.toFixed(2)}`;
});
