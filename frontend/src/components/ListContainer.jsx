import { ListItem } from './ListItem';

/* eslint-disable react/prop-types */
export const ListContainer = ({ todos, update, setUpdate, setIsExploding }) => {
	return (
		<ul className="container max-w-2xl flex flex-col justify-center items-center">
			<p className="mb-10 mt-5 text-5xl">To-do list</p>
			{todos ? (
				todos.map((todo) => {
					return (
						<ListItem
							key={todo._id}
							id={todo._id}
							title={todo.title}
							done={todo.done}
							date={todo.date}
							update={update}
							setUpdate={setUpdate}
							setIsExploding={setIsExploding}
						/>
					);
				})
			) : (
				null
			)}
		</ul>
	);
};



