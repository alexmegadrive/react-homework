import React from "react";
import './App.css';
import List from "./List";
import ListItem from "./ListItem";

function React_ex19() {

    const [value, setValue] = React.useState([]);
    // const [value, setValue, input1, input2, setInput1 , setInput2] = React.useState([]);
    const [input1, setInput1] = React.useState([]);
    const [input2, setInput2] = React.useState([]);

    const [tasks, setTask] = React.useState([]);
    const [InputDeleteIndex, setInputDeleteIndex] = React.useState([]);


    const addNewTask = (event) => {
        event.preventDefault();
        const newTask = event.target.task.value;
        setTask((tasks) => [...tasks, newTask]);
    }


    const createAlert = (event) => {
        // alert('test')
        event.preventDefault();
        alert(value.length)
    }

    const SumNumbers = (event) => {
        // alert('test')
        event.preventDefault();
        let sum3 = Number(input1)+Number(input2);
        alert(sum3)
    }

const deleteIndexTask = (event) => {
    event.preventDefault();
alert('test')
}

    return <div>
        <textarea value={value} onChange={event => setValue(event.target.value)} />
        {/*<textarea value={value} />*/}
        <p>count: {value.length}</p>
        <p>дубль строки: {value}</p>
        <input onClick={createAlert} type="button" value="Вывести количество"/>
        <br/>
        <hr/>
        <input type="number" name="name_input1" value={input1} onChange={event => setInput1(event.target.value)}/>
        <input type="number" name="name_input2" value={input2} onChange={event => setInput2(event.target.value)}/>
        <input onClick={SumNumbers} type="button" value="Вывести сумму"/>
        {/*<button onClick={this.logValue}>Log value</button>*/}
        <hr/>
            <div className={"flex_container"}>
                   <div><form onSubmit={addNewTask} className="add-task-form">
                        <input type="text" name="task" className="add-task-form__task-input"/>
                        <button className="add-task-submit-button">Добавить задачу</button>
                    </form>
                    <h3 className="tasks-list__header">Task List</h3>
                    <ul className="tasks-list_list">
                        {Array.isArray(tasks) && tasks.map((task, index) => <ListItem key={index} index={index}  task={task} />)}
                    </ul>
                   </div>
                            <div>
                                <h3>TEST</h3>
                                <input type="number" name="name_input3" value={InputDeleteIndex} onChange={event => setInputDeleteIndex(event.target.value)}/>
                                <button className="add-task-submit-button" onClick={deleteIndexTask}>Удалить в</button>

                            </div>
            </div>

    </div>;



}


//
// const List = () => {
//     const [tasks, setTask] = React.useState([]);
//
//     const addNewTask = (event) => {
//         event.preventDefault();
//         const newTask = event.target.task.value;
//         setTask((tasks) => [...tasks, newTask]);
//     }
//
//
//     const taskDelete = (index) => {
//         setTask(tasks => [...tasks.slice(0, index), ...tasks.slice(index + 1)]);
//     }
//
//     return (
//         <div className="container">
//             <form onSubmit={addNewTask} className="add-task-form">
//                 <textarea onChange={this.wordCount} name="textarea19" id="" cols="30" rows="10"></textarea>
//                 {/*<input type="text" name="task" className="add-task-form__task-input"/>*/}
//                 <button className="add-task-submit-button">Ввести число</button>
//             </form>
//
//
//
//             <h3 className="tasks-list__header">Task List</h3>
//             <ul className="tasks-list_list">
//                 {Array.isArray(tasks) && tasks.map((task, index) => <ListItem key={index} index={index} onDelete={taskDelete} task={task} />)}
//             </ul>
//         </div>
//     )
// }

export default React_ex19;