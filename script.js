const inputs = document.querySelectorAll('.inputs');
inputs.forEach(input => {
    input.type = 'number';
    input.min = '1.00';
    input.max = '3.00';
    input.step = '0.25';
});

const finalGradeLbl = document.getElementById('finalGradeLbl');
const calculateBtn = document.getElementById('calculateBtn');

const CS106 = document.getElementById('CS106');
const CS106L = document.getElementById('CS106L');
const ENV075 = document.getElementById('ENV075');
const HUM021 = document.getElementById('HUM021');
const MATH035 = document.getElementById('MATH035');
const IT102 = document.getElementById('IT102');
const IT102L = document.getElementById('IT102L');
const PE014 = document.getElementById('PE014');
const CS121 = document.getElementById('CS121');

calculateBtn.onclick = function() {
    const CS106_GRADE = CS106.value;
    const CS106L_GRADE = CS106L.value;
    const ENV075_GRADE = ENV075.value;
    const HUM021_GRADE = HUM021.value;
    const MATH035_GRADE = MATH035.value;
    const IT102_GRADE = IT102.value;
    const IT102L_GRADE = IT102L.value;
    const PE014_GRADE = PE014.value;
    const CS121_GRADE = CS121.value;

    const courses = [
        { code: 'CS106', grade: CS106_GRADE, units: 2 },
        { code: 'CS106L', grade: CS106L_GRADE, units: 1 },
        { code: 'ENV075', grade: ENV075_GRADE, units: 3 },
        { code: 'HUM021', grade: HUM021_GRADE, units: 3 },
        { code: 'MATH035', grade: MATH035_GRADE, units: 3 },
        { code: 'IT102', grade: IT102_GRADE, units: 2 },
        { code: 'IT102L', grade: IT102L_GRADE, units: 1 },
        { code: 'PE014', grade: PE014_GRADE, units: 2 },
        { code: 'CS121', grade: CS121_GRADE, units: 3 },
    ];

    let totalGrade = 0;
    let totalUnits = 0;
    courses.forEach((course) => {
        totalGrade += course.grade * course.units;
        totalUnits += course.units;
    });
    let finalGrade = totalGrade / totalUnits;
    finalGradeLbl.textContent = finalGrade.toFixed(4);
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

