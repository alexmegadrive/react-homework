import React, {useEffect, useRef, Component} from "react";
import './App.css';
import PropTypes from 'prop-types';
import ListItem from "./ListItem";


function RenderImage({imageUrl, im_width, im_height}) {
    return <img src={imageUrl} alt="" width={im_width} height={im_height}/>;
}

function RenderButton({text, clickProps}) {
    return <button onClick={clickProps}>{text}</button>
}

function SmartButton({isButton,href, text, isUnderlined, clickProps}) {

    if (isButton === true) return <RenderButton text={text} clickProps={clickProps}/>
    else return <Link href={href} text={text} isUnderlined={isUnderlined} />
}

function Link({href, text, isUnderlined}) {
    if (isUnderlined === true) return <a href={href} style={{textDecoration: 'underline'}}>{text}</a>
    else return <a href={href} target={"_blank"} rel={"noopener noreferrer"} style={{textDecoration: 'none'}}>{text}</a>


}

function UnorderedList({listItems}) {


    const liCreate = () => {
        const html2 = listItems.map((item) => (<li key={item}>{item}</li>));
        return html2;
    }

    return (
        <ul className="tasks-list_list">
            {liCreate()}
        </ul>
    )
}

function React_ex21() {


    class HeaderComponent extends React.Component {


        render() {
            return (
                <div>
                    <h1 style={{
                        color: this.props.colorProps,
                    }}>{this.props.textProps}</h1>
                    {/*    <h1 >{this.props.textProps}</h1>*/}
                </div>
            )
        }
    }

    return (
        <div>
            <b><p>Напишите функциональный компонент Image, который принимает в себя атрибуты src, width и height,
                который отрисовывает изображение img. Зная, что src - строка, а width и height - числа, определите для
                нее PropTypes.</p>            </b>
            <RenderImage im_height={100} im_width={100}
                         imageUrl={"https://iron-bet.ru/upload/iblock/059/059082d919f971dd434f9f16d14d02d8.jpg"}/>
            {/*<RenderImage im_height={100} im_width={100} imageUrl={100} />*/}
            <b><p>Напишите функциональный компонент Button, который принимает в себя атрибуты text и onClick, и выводит
                кнопку button. Определите для этого компонента PropTypes.</p>
            </b>
            <RenderButton clickProps={() => alert('Click')} text={"кнопочка"}/>
            <b><p>Напишите классовый компонент Header, который выводит заголовок h1, и в параметрах ожидает text и
                color. Типизируйте этот компонент с помощью PropTypes.</p>            </b>
            <HeaderComponent colorProps={'green'} textProps={'Текст заголовка из пропсов'}/>
            <b><p>Напишите функциональный компонент UnorderedList, который занимается отрисовкой неупорядоченного списка
                ul. У него будет один пропс - listItems, принимающий массив строк. На основе listItems генерируйте li
                внутри ul, затем определите PropTypes для компонента в целом.</p>
            </b>
            <UnorderedList listItems={['строка1', 'строка2', 'строка3', 'строка4']}/>
            <b><p>Напишите классовый компонент Link, который отрисовывает ссылку a>, и принимает пропсы href, text и
                isUnderlined. Определит PropTypes для этого компонента.</p>            </b>
            <Link href={'https://ya.ru'} text={'Яндекс ссылка'} isUnderlined={true}/>
            <b><p>Напишите функциональный компонент SmartButton, который, в зависимости от переданного пропса isButton,
                будет выводить либо компонент Button из 2 упражнения (если isButton === true), либо Link из 4 упражнения
                (если isButton === falsle). В итоге у этого компонента должно быть 6 пропсов (2 из Button, 3 из Link и
                собственно isButton). Типизируйте этот компонент с помощью PropTypes.</p>            </b>
            <p>true</p>
            <SmartButton isButton={true} text={'пропс текс'} href={'https://ya.ru'}  clickProps={() => alert('Click')} isUnderlined={true}/>
            <p>false</p>
            <SmartButton isButton={false} text={'пропс текс'} href={'https://ya.ru'}  clickProps={() => alert('Click')} isUnderlined={true}/>
        </div>
    )
}

RenderImage.propTypes = {
    imageUrl: PropTypes.string,
    im_width: PropTypes.number,
    im_height: PropTypes.number
}
RenderButton.propTypes = {
    clickProps: PropTypes.func,
    text: PropTypes.string
}
UnorderedList.propTypes = {
    listItems: PropTypes.array,
}

export default React_ex21;