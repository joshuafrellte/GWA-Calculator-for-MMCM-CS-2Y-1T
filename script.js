const inputs = document.querySelectorAll('.inputs');
inputs.forEach(input => {
    input.type = 'number';
    input.min = '1.00';
    input.max = '3.00';
    input.step = '0.25';
});

const finalGrade = document.getElementById('finalGrade');
const calculateBtn = document.getElementById('calculateBtn');

const oneUnitCourses = ['CS106L','IT102L'];
const twoUnitCourses = ['CS106','IT102','PE014'];
const threeUnitCourses = ['ENV075','HUM021','MATH035','CS121'];
const allCourses = [...oneUnitCourses, ...twoUnitCourses, ...threeUnitCourses];
console.log(allCourses);

const oneUnitCourseTotalUnits = oneUnitCourses.length * 1;
const twoUnitCourseTotalUnits = twoUnitCourses.length * 2;
const threeUnitCourseTotalUnits = threeUnitCourses.length * 3;
const TOTAL_UNITS = oneUnitCourseTotalUnits + twoUnitCourseTotalUnits + threeUnitCourseTotalUnits;
console.log(TOTAL_UNITS);

const gradeSum = getGradeSum();

const CS106 = document.getElementById('CS106');
const CS106L = document.getElementById('CS106L');
const ENV075 = document.getElementById('ENV075');
const HUM021 = document.getElementById('HUM021');
const MATH035 = document.getElementById('MATH035');
const IT102 = document.getElementById('IT102');
const IT102L = document.getElementById('IT102L');
const PE014 = document.getElementById('PE014');
const CS121 = document.getElementById('CS121');

const CS106_GRADE = CS106.value;
const CS106L_GRADE = CS106L.value;
const ENV075_GRADE = ENV075.value;
const HUM021_GRADE = HUM021.value;
const MATH035_GRADE = MATH035.value;
const IT102_GRADE = IT102.value;
const IT102L_GRADE = IT102L.value;
const PE014_GRADE = PE014.value;
const CS121_GRADE = CS121.value;

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
    console.log(CS106_GRADE);
}

allCourses.forEach(getGradeSum);
function getGradeSum(course) {
    
}

function isOneUnit(course) {
    return oneUnitCourses.includes(course);
}

function isTwoUnit(course) {
    return twoUnitCourses.includes(course);
}

function isThreeUnit(course) {
    return threeUnitCourses.includes(course);
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

