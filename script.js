let dateHolder = Date();

function function1() {
    if (document.getElementById('target1').innerHTML != dateHolder)
    {
        document.getElementById('target1').innerHTML = dateHolder;
    }
    else{
        document.getElementById('target1').innerHTML = "Date has changed.";
    }
}

function changeDate() {
    dateHolder = Date();
    document.getElementById('target2').innerHTML = dateHolder;
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

