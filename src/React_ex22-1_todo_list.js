import React from "react";


const TodoListItem = ({ todolistprops }) => {

    return (
        <div >
            {todolistprops.map(todolistobject => (
                <div key={todolistobject.id}>
                    <div >
                        <li >{todolistobject.title} </li>
                    </div>
                </div>
            ))}
        </div>
    )
    // return (
    //     <div >
    //         {todolistprops.map(todolistobject => (
    //             <div>
    //                 <div>
    //                     <li key={todolistobject.id}>{todolistobject.title} </li>
    //                 </div>
    //             </div>
    //         ))}
    //     </div>
    // )
}

export default TodoListItem;