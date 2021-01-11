import { TaskItem } from './TaskItem';

export const TaskList = ({ tasks, deleteTask, toggleTask, selectEditTask }) => {
  return (
    <>
      {tasks.length === 0 && <h4 className="text-center"> No hay tareas</h4>}
      {tasks.map((item) => (
        <TaskItem
          key={item.id}
          {...item}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          selectEditTask={selectEditTask}
        />
      ))}
    </>
  );
};
