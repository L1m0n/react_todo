import React from 'react';
import {addTodo} from '../actions/index';
import {connect} from 'react-redux';


let AddTodo = ({dispatch}) => {
	let input 

	return (
		<div className="todo__add">
			<form
				className="add__form"
				onSubmit={e => {
				e.preventDefault();
				if (!input.value.trim()){
					return
				}
				dispatch(addTodo(input.value));
				input.value = ""
			}}>
				<input
					className="add__input"
					ref={node => {
						input = node
					}}
				 />
				<button
					className="add__button"
					type="submit">
					Add todo
				</button>
			</form>
		</div>
	)
}

AddTodo = connect()(AddTodo);

export default AddTodo;