import React, {useEffect, useRef} from "react";
import './App.css';


function React_ex20() {

    const inputRef2 = useRef();
    const inputRef1 = useRef();
    const buttonRef2 = useRef();
    const [value2, setValue2] = React.useState([]);

//для функционального
    const setFocus2 = (event) => {
        inputRef2.current.focus();
    }

    const funcBlur2 = (event) => {
        if (value2 === 'hello') {
            inputRef2.current.blur();
            console.log('blur');
        }

    }


    // класс
    class Class1 extends React.Component {
        // constructor(props) {
        //     super(props);
        // }

        render() {

            const setFocus1 = (event) => {
                inputRef1.current.focus();
            }
            return (
                <div>
                    <p>Классовый</p>
                    <br/>
                    <input type="text" placeholder="Enter e-mail" ref={inputRef1}/>
                    <button onClick={setFocus1}>Навести фокус</button>
                </div>
            )
        }
    }

    return (
        <div>
            <br/>
            <p>Вывести на страницу инпут и кнопку. По нажатию на кнопку инпут должен оказываться в фокусе. Задачу
                выполните в двух вариациях: на функциональных компонентах и на классовых.</p>
            <p>В предыдущей задаче добавьте инпуту следующую логику: при вводе в него текста “Hello world!” инпут должен
                блюриться(blur()). Задачу выполните в двух вариациях: на функциональных компонентах и на классовых.</p>
            <p>^^^ просто "hello" для теста</p>
            <Class1/>
            <p>Функциональный</p>
            <br/>

            <input type="text" placeholder="Enter e-mail" value={value2} onChange={event => {
                setValue2(event.target.value);
                funcBlur2()
            }} ref={inputRef2}/>
            <button onClick={setFocus2} ref={buttonRef2}>Навести фокус</button>


        </div>
    )


}


export default React_ex20;