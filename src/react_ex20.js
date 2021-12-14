import React, {useEffect, useRef} from "react";
import './App.css';


function React_ex20() {

    const inputRef2 = useRef();
    const inputRef1 = useRef();
    const buttonRef2 = useRef();
    const targetRef100px = useRef();
    const [width1, setWidth1] = React.useState([]);


    const el = useRef();
    const [value2, setValue2] = React.useState([]);
    const [value1, setValue1] = React.useState([]);

//для функционального
    const setFocus2 = (event) => {
        inputRef2.current.focus();
    }


    const funcBlur2 = (event) => {
        setValue2(event.target.value);
        if (event.target.value === 'hello') {
            inputRef2.current.blur();
            console.log('blur');
        }
    }

    const scrollToBottom = () => {
        el.current.scrollIntoView({ behavior: "smooth" });
    }


const test = () => {
    setWidth1(targetRef100px.current.offsetHeight)
    console.log(width1)
}

const setFontByHeight = (props) => {
    let font100px;
    if (props === 100) {
        font100px = '15px';
    }
    if (props === 200) {
        font100px = '20px';
    }
    if (props === 300) {
        font100px = '30px';
    }
    // test()
    return font100px;
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

            const funcBlur = (event) => {
                setValue1(event.target.value);
                if (event.target.value === 'hello') {
                    inputRef1.current.blur();
                    console.log('blur');
                }
            }
            return (
                <div>
                    <p>Классовый (введите hello)</p>
                    <br/>
                    почему здесь анфокус при каждом вводе кнопки???? но в консоли именно на hello срабатывает лог -> -> ->
                    <br/>
                    <input type="text" placeholder="Enter e-mail" value={value1} ref={inputRef1} onChange={funcBlur}/>
                    {/*<input type="text" placeholder="Enter e-mail" value={value1} ref={inputRef1} onClick={funcBlur}/>*/}
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
            <p>Функциональный  (введите hello)</p>
            <br/>

            <input type="text" placeholder="Enter e-mail" value={value2} onChange={funcBlur2} ref={inputRef2}/>
            <button onClick={setFocus2} ref={buttonRef2}>Навести фокус</button>


            <hr/>
            <p>Вывести на блок с достаточным для появления скролла текстом. Сделать кнопку, при нажатии на которую будет
                происходить скролл до конца контейнера. Задачу выполните в двух вариациях: на функциональных компонентах
                и на классовых.
            </p>
            <div style={{height: '400px', width: '200px', border: '1px solid black', overflow: 'scroll'}} >
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto aut dignissimos dolorem
                    dolorum earum error exercitationem facere facilis fugiat illum ipsam non quae quibusdam, repellendus
                    tempore unde ut, voluptas.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto aut dignissimos dolorem
                    dolorum earum error exercitationem facere facilis fugiat illum ipsam non quae quibusdam, repellendus
                    tempore unde ut, voluptas.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto aut dignissimos dolorem
                    dolorum earum error exercitationem facere facilis fugiat illum ipsam non quae quibusdam, repellendus
                    tempore unde ut, voluptas.
                </div>
                {/*невидимый див*/}
                <div style={{ float:"left", clear: "both" }}
                     ref={el}>
                </div>
            </div>
            <button onClick={scrollToBottom}>Скролл вниз</button>

            <hr/>
            <p>Вывести на страницу набор постов, где шрифт и размер текста зависит от высоты контейнера(высота 100px - шрифт 15px, высота 200 - шрифт 20px, высота 300px - шрифт 30px), в котором он находится. Задачу выполните в двух вариациях: на функциональных компонентах и на классовых.</p>
            <div style={{height: '100px', width: '200px', border: '1px solid black',}} ref={targetRef100px} >
                <div style={{fontSize: setFontByHeight(100)}}>ШРИФТ 15px</div>
            </div>

            <div style={{height: '200px', width: '200px', border: '1px solid black',}} ref={targetRef100px} >
                <div style={{fontSize: setFontByHeight(200)}}>ШРИФТ 20px</div>
            </div>

            <div style={{height: '300px', width: '200px', border: '1px solid black',}} ref={targetRef100px} >
                <div style={{fontSize: setFontByHeight(300)}}>ШРИФТ 30px</div>
            </div>


        </div>




)


}


export default React_ex20;