import React from "react";

const ListItem = ({task, index, onDelete}) => {

    const DeleteClick = () => {
        if(!(onDelete && index >= 0)) return;
        onDelete(index)
    }
    const AlertClick = () => {
        if(!(onDelete && index >= 0)) return;
         alert(task);



    }

    return (

        <div className="tasks-list__list-item">
            <li>{task}</li>
            {/*<button onClick={DeleteClick}>Delete </button>*/}
            {/*<button onClick={AlertClick}>Alert</button>*/}
        </div>
    )
}

export default ListItem;