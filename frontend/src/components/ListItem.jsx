/* eslint-disable react/prop-types */
import { useState } from 'react';
import { updateTodo, deleteTodo } from '../utils/todoApi';
import { useForm } from 'react-hook-form';
import ConfettiExplosion from 'react-confetti-explosion';
export const ListItem = ({ title, done, id, date, update, setUpdate }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [isDone, setIsDone] = useState(done);
	const [updateTodoTask, setUpdateTodoTask] = useState(false);
	const [isExploding, setIsExploding] = useState(false);


	const throwConfetti = () => {
		setIsExploding(true);
	}

	
	const handleUpdateTask = (data) => {
		if (updateTodoTask) {
			updateTodo(id, data);
			setUpdateTodoTask(!updateTodoTask);
		} else {
			setIsDone(!isDone);
			updateTodo(id, { done: !isDone });
			if(isDone){
				throwConfetti();
			}
		}
		setUpdate(!update);
	};


	const handleCompleteTask = (e) => {
		const checked = e.target.checked;
		setIsDone(checked);
		updateTodo(id, { done: checked });
		if(checked){
			throwConfetti();
		}
	}

	const handleDeleteTask = async () => {
		deleteTodo(id).then(() => {
			setUpdate(!update);
		});
	};

	const handleModifyTask = () => {
		setUpdateTodoTask(!updateTodoTask);
	};

	return (
		<>
			<li
				className={`w-[100%] mt-2 ${
					isDone
						? 'bg-green-700 p-5 rounded-md text-white'
						: 'bg-slate-700 p-5 rounded-md'
				}`}
			>
				{!updateTodoTask && (
					<div
						className="
					 max-sm:flex-col flex justify-end items-center gap-3"
					>
						<div className="w-[100%] flex gap-8 items-center max-sm:justify-center">
							<h2 className={`text-md ${isDone && 'line-through'}`}>{date}</h2>

							<h3 className={`text-md ${isDone && 'line-through'}`}>{title}</h3>
						</div>
						<div className="flex justify-center items-center gap-4">
							<input type="checkbox" checked={isDone} className="checkbox checkbox-success checkbox-lg" onChange={handleCompleteTask}  />
							<button className="btn btn-info " onClick={handleModifyTask}>
								Modificar
							</button>
							<button className="btn btn-warning " onClick={handleDeleteTask}>
								Borrar
							</button>
						</div>
					</div>
				)}
				{updateTodoTask && (
					<form
						onSubmit={handleSubmit(handleUpdateTask)}
						className="w-full flex flex-col justify-center items-start md:flex-row"
					>
						<div className="w-[100%] md:flex justify-center items-center gap-4">
							<div className="flex flex-col h-20 md:h-none">
								<input
									type="text"
									placeholder="Modifica la tarea"
									{...register('title', { required: true })}
									className="input input-primary"
								/>
								{errors.title && (
									<span className="text-sm text-red-500 mt-1">
										Campo Requerido
									</span>
								)}
							</div>
							<div className="flex flex-col h-20  md:h-none">
								<input
									type="date"
									className="input input-primary"
									{...register('date', { required: true })}
								/>
								{errors.date && (
									<span className="text-sm text-red-500 mt-1">
										Campo Requerido
									</span>
								)}
							</div>
						</div>
						<div className="w-auto flex justify-evenly  items-center gap-4">
							<button className="btn btn-primary" type="submit">
								Guardar
							</button>
							<button
								className="btn btn-accent"
								type="submit"
								onClick={handleModifyTask}
							>
								Cerrar
							</button>
						</div>
					</form>
				)}
			</li>
			<>{isExploding && <ConfettiExplosion onComplete={() => setIsExploding(false)} />}</>
		</>
	);
};
