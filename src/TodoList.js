import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component {

    render(){
        const datos = this.props.items;
        console.log(datos.dueDate);
        const datosItems = datos.map((dato) => 
            <li>Text : {dato.text} , Priority : {dato.priority} , Date : {dato.dueDate.toString()}</li>
        );
        return (
            <ul>{datosItems}</ul>
          );
    };
}
