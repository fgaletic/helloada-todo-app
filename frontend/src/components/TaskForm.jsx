/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import { addTodo } from '../utils/todoApi';
export const TaskForm = ({ update, setUpdate }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			date: new Date().toISOString().slice(0, 10)
		}
	});
	const handleCreateNewTask = (data) => {
		addTodo(data).then(() => {
			setUpdate(!update);
		});
		reset();
	};

	return (
		<form
			className="w-full flex flex-col justify-center items-start md:gap-4 md:flex-row "
			onSubmit={handleSubmit(handleCreateNewTask)}
		>
			{' '}
			<div className="w-[100%] h-[5rem]  flex flex-col  md:w-64">
				<input
					type="text"
					placeholder="Add a new Task"
					className="input input-primary "
					{...register('title', { required: true })}
				/>
				{errors.title && (
					<span className="text-sm text-red-500 mt-1">Required Field</span>
				)}
			</div>
			<div className="w-[100%] h-[5rem]  flex flex-col  md:w-64">
				<input
					type="date"
					className="input input-primary"
					{...register('date', { required: true })}
				/>
				{errors.date && (
					<span className="text-sm text-red-500 mt-1">Required Field</span>
				)}
			</div>
			<button className="btn  btn-primary w-full md:w-24">Add Task</button>
		</form>
	);
};
