import React, {PropTypes} from 'react';
import Todo from "./Todo";
import RemoveTodo from './RemoveTodo';

const TodoList = ({ todos, onTodoClick, onClickRemove }) => 
(
	<ul>
		{
			todos.map(todo=>
			<Todo
				key={todo.id}
				{...todo}
				remove={()=>onClickRemove(todo.id)}
				onClick={() => onTodoClick(todo.id)}
				>
			</Todo>	
			)
		}
	</ul>
)


TodoList.propTypes = {
	onTodoClick: PropTypes.func.isRequired,
	todos:PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			completed: PropTypes.bool.isRequired
		}).isRequired
	).isRequired
}

export default TodoList