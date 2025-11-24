const inputs = document.querySelectorAll('.inputs');
inputs.forEach(input => {
    input.type = 'number';
    input.min = '1.00';
    input.max = '3.00';
    input.step = '0.25';
});




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

