const inputs = document.querySelectorAll('.inputs');
inputs.forEach(input => {
    input.type = 'number';
    input.min = '1.00';
    input.max = '3.00';
    input.step = '0.25';
    input.maxLength = 4;
    input.addEventListener('change', function() {
        this.value = parseFloat(this.value).toFixed(2);
    })
});

const courses = [
    { id: 'CS106',   units: 2 },
    { id: 'CS106L',  units: 1 },
    { id: 'ENV075',  units: 3 },
    { id: 'HUM021',  units: 3 },
    { id: 'MATH035', units: 3 },
    { id: 'IT102',   units: 2 },
    { id: 'IT102L',  units: 1 },
    { id: 'PE014',   units: 2 },
    { id: 'CS121',   units: 3 },
];

const calculateBtn = document.getElementById('calculateBtn');
const finalGradeLbl = document.getElementById('finalGradeLbl')

document.addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        calculateBtn.onclick();
    }
})

calculateBtn.onclick = function() {
    let totalGrade = 0;
    let totalUnits = 0;
    courses.forEach((course) => {
        const grade = parseFloat(document.getElementById(course.id).value) || 1;
        totalGrade += grade * course.units;
        totalUnits += course.units;
    });

    let finalGrade = totalGrade / totalUnits;
    const hasEmptyInput = Array.from(inputs).some(input => input.value === '');
    if (hasEmptyInput) {
        alert("Fill all fields before calculating!");
    }
    else {
        finalGradeLbl.textContent = finalGrade.toFixed(4);
        finalGradeLbl.classList.add('animate');
        setTimeout(() => {
            finalGradeLbl.classList.remove('animate');
        }, 800);
    } 
    
}




// create array of stanines
// create datalist for each input
// add stanine array as options for each datalist

// const suggestions = () => {
//     const arr = [];
//     for (let i=1; i<=3; i+=0.25) {
//         arr.push(i.toFixed(2));
//     }
//     return arr;
// }

// const suggestionsList = document.createElement('datalist');
// suggestionsList.id = 'stanineList';

// suggestions().forEach((value) => {
//     const option = document.createElement('option');
//     option.value = value;
//     suggestionsList.appendChild(option);
// });

// const inputs = document.querySelectorAll('.inputs');
// inputs.forEach((input) => {
//     input.setAttribute('list','stanineList');
// });

// inputs.forEach((input) => {
//     console.log(input.list);
// })

