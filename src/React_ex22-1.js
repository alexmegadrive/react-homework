import React, {useEffect, useRef, Component} from "react";
import TodoListItem from "./React_ex22-1_todo_list";




const Ex22_1_App = () => {
    // Обязательно нужно создать стэйт
    const [todolistobject, setTodolistobject] = React.useState([])

    // Функция, которая загружает todo list
    const loadTodo = async (query) => {
        // Напишите код, который загружает данные с сервера
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
        const result = await response.json();
        const todolistobject = result.map((todoitem) => ({
            title: todoitem.title || '',
            id: todoitem.id || -1,

        }));

        setTodolistobject(todolistobject);


    }
    // Поскольку загрузка - побочный эффект, загрузку выполняем
    // в useEffect
    useEffect(() => {
        loadTodo();
    }, [])


    return (
        // Напишите функцию рендера
        <>
            <p>Дополните код loadTodo таким образом, чтобы данные загружались по ссылке https://jsonplaceholder.typicode.com/todos.
                Для загрузки используйте HTTP метод GET.
                Ответ на запрос и структуру можно посмотреть, перейдя по приведенной ссылке в браузере.</p>
        <ul>
            <li>Test</li>
            <TodoListItem todolistprops={todolistobject} setTodolistobject={todolistobject}/>
            {/*<TodoListItem todolistprops={{id:1,  title:"test123"}} setTodolistobject={todolistobject}/>*/}
        </ul>
        </>
    )
}




export default Ex22_1_App;


