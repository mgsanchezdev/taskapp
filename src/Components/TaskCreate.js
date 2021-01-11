import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import shortid from 'shortid';

export const TaskCreate = ({ addTask }) => {
  const initialState = {
    id: '',
    task: '',
    done: false,
  };

  const [task, setTask] = useState(initialState);

  const handleTask = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { task: t } = task;
    if (t.trim() === '') return;
    const taskObject = {
      ...task,
      id: shortid(),
    };
    setTask(initialState);
    addTask(taskObject);
  };

  return (
    <>
      <h4>Crear tarea</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            name="task"
            value={task.task}
            onChange={handleTask}
            placeholder="Ingresa una tarea"
          ></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit" block>
          Agregar tarea
        </Button>
      </Form>
    </>
  );
};
