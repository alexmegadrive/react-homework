import React from "react";
import './App.css';
import ListItem from "./ListItem";


const List = () => {
    const [tasks, setTask] = React.useState([]);

    const addNewTask = (event) => {
        event.preventDefault();
        const newTask = event.target.task.value;
        setTask((tasks) => [...tasks, newTask]);
    }

    const PromptItemEnd = (event) => {
        // alert('test')
        event.preventDefault();
        let newTask = prompt('Ввод числа в конец');
        setTask((tasks) => [...tasks, newTask]);
    }
    const PromptItemStart = (event) => {
        // alert('test')
        event.preventDefault();
        let newTask = prompt('Ввод числа в начало');
        setTask((tasks) => [newTask, ...tasks]);
    }
    const PromptItemMiddle = (event) => {
        event.preventDefault();
        let newMiddleTask = prompt('Ввод числа в середину');
        let MiddleElem = Math.floor(tasks.length/2) // вычисление центрального элемента с округлением
        tasks.splice(MiddleElem, 0, newMiddleTask);  //запись в центральный элемент
        setTask((tasks) => [...tasks]);  //обновление
        // setTask((tasks) => [tasks.splice(MiddleElem, 0, newMiddleTask)]);  не работает

    }
    const Test = (event) => {
        // alert('test')
        event.preventDefault();
        alert(Math.floor(tasks.length/2))
    }
    const DeleteFirst = (event) => {
        // alert('test')
        event.preventDefault();
        tasks.shift()
        setTask((tasks) => [...tasks]);  //обновление
    }
 const DeleteLast = (event) => {
        // alert('test')
        event.preventDefault();
        tasks.pop()
     setTask((tasks) => [...tasks]);  //обновление

 }
 const DeleteMiddle = (event) => {
        // alert('test')
        event.preventDefault();
     let MiddleElem = Math.floor(tasks.length/2) // вычисление центрального элемента с округлением
     tasks.splice(MiddleElem, 1, );  //запись в центральный элемент
     setTask((tasks) => [...tasks]);  //обновление
     setTask((tasks) => [...tasks]);  //обновление

 }

    const taskDelete = (index) => {
        setTask(tasks => [...tasks.slice(0, index), ...tasks.slice(index + 1)]);
    }

    return (
        <div className="container">
            <form onSubmit={addNewTask} className="add-task-form">
                <input type="text" name="task" className="add-task-form__task-input"/>
                <button className="add-task-submit-button">Ввести число</button>
            </form>
            <button className="add-task-submit-button" onClick={PromptItemStart}>Ввод числа в начало</button>
            <button className="add-task-submit-button" onClick={PromptItemMiddle}>Ввод числа в середину</button>
            <button className="add-task-submit-button" onClick={PromptItemEnd}>Ввод числа в конец</button>
            <button className="add-task-submit-button" onClick={Test}>Вычислить средний элемент массива</button>
            <button className="add-task-submit-button" onClick={DeleteFirst}>Удалить первый элемент массива</button>
            <button className="add-task-submit-button" onClick={DeleteMiddle}>Удалить средний элемент массива</button>
            <button className="add-task-submit-button" onClick={DeleteLast}>Удалить Последний элемент массива</button>



            <h3 className="tasks-list__header">Task List</h3>
            <ul className="tasks-list_list">
                {Array.isArray(tasks) && tasks.map((task, index) => <ListItem key={index} index={index} onDelete={taskDelete} task={task} />)}
            </ul>
        </div>
    )
}

export default List;