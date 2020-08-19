import React from 'react';
import {Todo} from './Todo'
import {TodoApp} from './TodoApp'

export class TodoList extends React.Component {

    render(){
        console.log(this.props.items);
        /**
         *         const datos = this.props.todoList;
        const datosItems = datos.map((dato) => 
            <li>Text : {dato.text} , Priority : {dato.priority} , Date : {dato.dueDate.toString()}</li>
        );
        return (
            <ul>{datosItems}</ul>
          );
         */
        return (<h1>Hola</h1>);

    };
}
