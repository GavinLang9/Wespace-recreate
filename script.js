

let locations = ['Jogjakarta, Indonesia', 'California, USA', 'Paris, France', 'Berlin, Germany','Barcelona, Spain'];
let types = ['Private Office', 'Public Office', 'Shared Office'];
let currentDate = new Date();
let dates = [];
let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
for(let i = 0; i < 7; ++i) {
    dates.push(`${currentDate.getDate()+i} ${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`);

}


let selectLocation = document.getElementById('location');
let type = document.getElementById('type');
let date = document.getElementById('date');



function addOptions(dropdown, list) {
    for(let i = 0; i < list.length; ++i) {
        let option = document.createElement('option');
        option.value = list[i];
        option.text = list[i];
        dropdown.appendChild(option);
    }
}

addOptions(selectLocation, locations);
addOptions(type, types);
addOptions(date, dates);