import { useState, useEffect } from 'react';
import { ListContainer } from './_components/ListContainer';
import { getTodos } from './_utils/api';
import { TaskForm } from './_components/TaskForm';

function App() {
	const [todos, SetTodos] = useState([]);
	const [update, SetUpdate] = useState(false);


	useEffect(() => {
		getTodos().then((res) => SetTodos(res));
	}, [update]);

	return (
		<div className="w-full h-screen flex flex-col justify-start mt-10 items-center p-10">
			<TaskForm update={update} setUpdate={SetUpdate} />
			{todos.length <= 0 ? (
				<p className="mb-10 mt-10 text-5xl">No hay tareas</p>
			) : (
				<ListContainer
					todos={todos}
					update={update}
					setUpdate={SetUpdate}

				/>
			)}
		</div>
	);
}

export default App;
