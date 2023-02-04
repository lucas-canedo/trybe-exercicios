const header = document.getElementById('header-container');
header.style.backgroundColor = '#00b068';

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = '#ffa084';

const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergencyTasks.style.backgroundColor = '#f9dc5d';

function changeColor(element, i, color) {
    document.getElementsByTagName(element)[i].style.backgroundColor = color;
}

changeColor('h3', 0, '#a500f2');
changeColor('h3', 1, '#a500f2');
changeColor('h3', 2, '#232524');
changeColor('h3', 3, '#232524');

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = '#013533';
