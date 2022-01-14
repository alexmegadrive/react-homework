import React, {useEffect, useRef, Component} from "react";

const Ex22_2_App = () => {
    // Выделяем стэйт для данных о пользователе
    const [user, setUser] = React.useState([])
    const [userCompany, setUserCompany] = React.useState([])

    let test ='123test';

    const loadUser = async (id) => {
        // Напишите функцию, которая по id загружает данные о пользователе
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/`)
        // const response = await fetch(`https://jsonplaceholder.typicode.com/users/`)
        const result = await response.json();

        console.log('1');
        console.log(result['company']);
        let userCompany = result['company'];
        console.log('2');
        console.log(userCompany.name);
        setUserCompany(userCompany.name)


        let userTemp=[];
        userTemp.push(result);

        const user = userTemp.map((user) => ({
            name: user.name || '',
            username: user.username || '',
            phone: user.phone || '',
            website: user.website || '',
            company: user.company || '',
        }));

        setUser(user);



    }

    // Загрузка - это побочный эффект. Выполняем ее в момент
    // внедрения на страницу
    useEffect(() => {

        // Для проверки работы загрузим пользователя с id=3
        loadUser(3);
    }, [])

    return (
        <div >
            <br/>
            {user.map(item => (

                <div>
                <table style={{border: "1px solid black"}} key={item.id}>
                {/*<table style={{fontSize: FontValue}}>*/}
                    <tr style={{border: "1px solid black"}}>
                        <th style={{border: "1px solid black"}} >Имя</th>
                        <th style={{border: "1px solid black"}}>Username</th>
                        <th style={{border: "1px solid black"}}>Phone</th>
                        <th style={{border: "1px solid black"}}>Website</th>
                        <th style={{border: "1px solid black"}}>Company</th>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid black"}}>{item.name}</td>
                        <td style={{border: "1px solid black"}}>{item.username}</td>
                        <td style={{border: "1px solid black"}}>{item.phone}</td>
                        <td style={{border: "1px solid black"}}>{item.website}</td>
                        <td style={{border: "1px solid black"}}>{userCompany}</td>
                    </tr>
                </table>

            </div>
            ))}

        </div>
    )
}



export default Ex22_2_App;
