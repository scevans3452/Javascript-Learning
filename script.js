let dateHolder = Date();
let x = dateHolder.length;
let count = 0;

// for button 1
function function1() {
    if (document.getElementById('target1').innerHTML != dateHolder)
    {
        document.getElementById('target1').innerHTML = dateHolder;
    }
    else{
        document.getElementById('target1').innerHTML = "Date has changed.";
    }
}

// for button 2
function changeDate() {
    dateHolder = Date();
    document.getElementById('target2').innerHTML = dateHolder;
}

// for button 3
function dateLength() {
    document.getElementById('target3').innerHTML = x - (Math.floor(Math.random() * x));
}

function clickCount() {
    count++;
    document.getElementById('target4').innerHTML = count;
}


const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Doctor',
        isCompleted: false
    }
];

