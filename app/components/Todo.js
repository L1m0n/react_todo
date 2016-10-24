import React, { PropTypes } from 'react';

const Todo = ({onCLick, completed, text }) => (
	<li
		onCLick={onCLick}
		style={{
			textDecoration: completed ? 'line-through' : 'none'
		}}
	>
		{text}
	</li>		
)

Todo.PropTypes = {
	onCLick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
}

export default Todo