const tasks = [
    {
        id:'1',
        text:'Reminder 1',
        day:'July 9th at 10 am',
        reminder:'true'
    },
    {
        id:'2',
        text:'Reminder 2',
        day:'July 9th at 11 am',
        reminder:'true'
    },
    {
        id:'3',
        text:'Reminder 3',
        day:'July 9th at 1 pm',
        reminder:'false'
    },
    {
        id:'4',
        text:'Reminder 4',
        day:'July 9th at 2 pm',
        reminder:'false'
    }
]
const Tasks = () => {
    return (
        <>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>)
            )}
        </>
    )
}

export default Tasks
