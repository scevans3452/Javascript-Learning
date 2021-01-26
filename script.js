function function1() {
    if (document.getElementById('target').innerHTML != Date())
    {
        document.getElementById('target').innerHTML = Date()
    }
    else{
        document.getElementById('target').innerHTML = "skinnamarinkidinkydink"
    }
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

