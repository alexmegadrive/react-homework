import React from "react";
import './App.css';
import List from "./List";
import ListItem from "./ListItem";

function React_ex19() {

    const [value, setValue] = React.useState([]);
    const [input1, setInput1] = React.useState([]);
    const [input2, setInput2] = React.useState([]);
    const [tasks, setTask] = React.useState([]);
    const [InputDeleteIndex, setInputDeleteIndex] = React.useState([]);
    const [UserLogin, setUserLogin] = React.useState([]);
    const [UserPassword, setUserPassword] = React.useState([]);
    const [checked, setChecked] = React.useState(false);
    const [FontValue, setFontValue] = React.useState([]);
    const [NewSelect, setNewSelect] = React.useState([]);
    const [texts, setNewTexts] = React.useState(['text1', 'text2', 'text3', 'text4']);
    const options = texts.map((text, index) => {
        return <option key={index}>{text}</option>;
    });


    const addNewSelect = (event) => {
        event.preventDefault();
        texts.push(NewSelect)
        setNewTexts((texts) => [...texts]);    }


    const addNewTask = (event) => {
        event.preventDefault();
        const newTask = event.target.task.value;
        setTask((tasks) => [...tasks, newTask]);
    }


    const createAlert = (event) => {
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
    tasks.splice([InputDeleteIndex-1], 1);
    setTask((tasks) => [...tasks]);
}

const LogPassCheck = (event) => {
        event.preventDefault();
    let SavedUserLogin = 'login';
    let SavedUserPassword = 'password';
    if ((SavedUserLogin === UserLogin) && (SavedUserPassword === UserPassword))
    {
        alert('Все ок');
        document.querySelector('.AuthDiv').textContent = ('Авторизация успешна');
    }
    else  {alert('Введены неверные данные');
    document.querySelector('.AuthDiv').textContent = ('Неправильные данные');}

}


const changeSquare = (event) => {
  if (checked)  document.querySelector('.RedSquare').style.width = '200px'
    else document.querySelector('.RedSquare').style.width = '0px'
    setChecked(!checked)
}



    return <div>
        <textarea value={value} onChange={event => setValue(event.target.value)} />
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
        <br/>
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
                                <h3>УДАЛЯТОР ЗАДАЧ =)</h3>
                                <input type="number" name="name_input3" value={InputDeleteIndex} onChange={event => setInputDeleteIndex(event.target.value)}/>
                                <button className="add-task-submit-button" onClick={deleteIndexTask}>Удалить выбранную задачу</button>
                            </div>
            </div>
        <hr/>
        <p>Ввудите логин (login)</p>
        <input type="text" name="login" value={UserLogin} onChange={event => setUserLogin(event.target.value)}/>
        <p>Введите пароль (password)</p>
        <input type="text" name="password" value={UserPassword} onChange={event => setUserPassword(event.target.value)}/>
        <br/>
        <button className="" onClick={LogPassCheck}>Авторизация</button>
        <div class="AuthDiv">Ожидание авторизации</div>
    <br/>
<hr/>
<br/>
<p>Создайте на странице чекбокс и ниже него красный квадрат. При активированном состоянии чекбокса квадрат должен пропадать, при снятии галочки квадрат должен снова появляться</p>
        <input type="checkbox"  checked={checked} onChange={changeSquare} />
        <div class="RedSquare"></div>
<hr/>
<br/>
<p>Создайте на странице абзац и select, который позволяет выбрать между различными размерами текста (8px, 16px, 24px, 32px)</p>
<div class="FontClass" style={{fontSize: FontValue}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur assumenda, culpa cum deleniti deserunt dolor, doloribus error illum inventore ipsum odio optio porro saepe sed, tempore totam vel veritatis!</div>
        <select name="FontSelector"  multiple={false} id="" value={FontValue}  onChange={event => {
            setFontValue(event.target.value)} } >
            <option  hidden>Выберите размер</option>
            <option value="8px">8px</option>
            <option value="16px">16px</option>
            <option value="24px" >24px</option>
            <option value="32px" >32px</option>
        </select>

        <hr/>
        <p>Создайте форму, состоящую из инпута и кнопки. Также выведите на странице select. При вводе текста в инпут и нажатии кнопки этот текст должен добавляться как новая option в select’е
        </p>
        <input type="text" value={NewSelect} onChange={event => setNewSelect(event.target.value)}/>
        <button onClick={addNewSelect } >Добавить опцию</button>
        <br/>
        <select>
            {options}
        </select>

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