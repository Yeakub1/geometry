serial = 0;
// triangle:
document.getElementById('btn-triangle').addEventListener('click', function() {
    serial += 1;
    const name = document.getElementById('triangle-name').innerText;
    const inputText = getInnerTextValue('triangle-source');

    const inputBase = document.getElementById('input-base').value;
    const inputHeigt = document.getElementById('input-height').value;

    if (inputBase > 0) {
        alert('Please enter any value number');
    } 
    else {
        alert('Please enter valid number');
        return inputBase;
    }

    const triangleTotal = inputText * inputBase * inputHeigt;
    displayData(name, triangleTotal);

})

// rectangle:
document.getElementById('btn-rectangle').addEventListener('click', function() {
    serial += 1;
    const name = document.getElementById('rectangle-name').innerText;
    const fristValue = document.getElementById('frist-rectangle').value;
    const secondValue = document.getElementById('second-height').value;

    if (fristValue === "" && secondValue === "") {
        return alert('Please enter any value number')
    } else if (fristValue <= 0 && secondValue <= 0) {
        return alert('Please enter valid number')
    }

    const rectangleTotal = fristValue * secondValue;
    displayData(name, rectangleTotal);

})

// Parallelogram:
document.getElementById('btn-Parallelogram').addEventListener('click', function() {
    serial += 1;
    const name = document.getElementById('Parallelogram-name').innerText;
    const fristValue = getInnerTextValue('frist-value')
    const secondValue = getInnerTextValue('second-value')

    const totalValue = fristValue * secondValue;
    displayData(name, totalValue)

})

// Rhombus:
document.getElementById('btn-Rhombus').addEventListener('click', function() {
    serial += 1;
    const name = document.getElementById('Rhombus-name').innerText;
    const fristValue = getInnerTextValue('frist-Rhombus')
    const secondValue = getInnerTextValue('second-Rhombus')
    const thirdValue = getInnerTextValue('third-Rhombus')

    const totalValue = fristValue * secondValue * thirdValue;
    displayData(name, totalValue)
})

// Pentagon:
document.getElementById('btn-Pentagon').addEventListener('click', function() {
    serial += 1;
    const name = document.getElementById('Pentagon-name').innerText;
    const fristValue = getInnerTextValue('frist-Pentagon')
    const secondValue = getInnerTextValue('second-Pentagon')
    const thirdValue = getInnerTextValue('third-Pentagon')

    const totalValue = fristValue * secondValue * thirdValue;
    displayData(name, totalValue)
})

// Ellipse:
document.getElementById('btn-Ellipse').addEventListener('click', function() {
    serial += 1;
    const name = document.getElementById('Ellipse-name').innerText;
    const fristValue = getInnerTextValue('frist-Ellipse')
    const secondValue = getInnerTextValue('second-Ellipse')

    const totalValue = 3.14 * fristValue * secondValue;
    displayData(name, totalValue.toFixed(2))
})


// input Text Value:
function getInnerTextValue(textValue) {
    const triangle = document.getElementById(textValue);
    const triangleFild = triangle.innerText;
    const triangleFunction = parseFloat(triangleFild);
    return triangleFunction;
}

// Blog page:
document.getElementById('btn-blog').addEventListener('click', function() {
    window.location.href = 'blog.html';
})

// Random Color Genaretor:
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}

document.addEventListener("mouseover", function() {
    document.getElementById('random-bg').style.backgroundColor = randomColor();
});

document.getElementById('random-bg').addEventListener('mouseover', event => {
    event.target.style.fill = randomColor();
});


// appendChild td add in display:
function displayData(name, triangleTotal) {
    const containers = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${name}</td>
    <td>${triangleTotal}cm <sup>2</sup></td>
    <td class="bg-[#1090D8] text-white text-center py-1 rounded-xl">Convart to m<sup>2</sup></td>  
    `;
    containers.appendChild(tr);
}