import { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { Header } from './Components/Header';
import { TaskCreate } from './Components/TaskCreate';
import { TaskList } from './Components/TaskList';
import { TaskEdit } from './Components/TaskEdit';
import './App.css';

function App() {
  const initialState = [];
  const [tasks, setTasks] = useState(initialState);
  const [editTask, setEditTask] = useState(initialState);
  const [visibildadEditTask, setVisibilidadEditTask] = useState(false);

  const [errorModal, setErrorModal] = useState(false);

  const setError = () => {
    setErrorModal(!errorModal);
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const editArrayTask = (task) => {
    if (task.task !== '') {
      const newTasks = tasks.map((t) =>
        t.id === task.id ? { ...t, task: task.task } : t
      );
      setTasks(newTasks);
    }
  };

  const showModalEdit = () => {
    setVisibilidadEditTask(!visibildadEditTask);
  };
  const selectEditTask = (id) => {
    if (id === '') {
      setError();
    } else {
      const editTaskk = tasks.filter((t) => (t.id === id ? t : null));
      setEditTask(editTaskk[0]);
      showModalEdit();
    }
  };
  return (
    <Container className="container-principal ">
      <Container>
        <Header title={'ToDo'} tasks={tasks} />
        <Row className="justify-content-center">
          <Col md={8}>
            <TaskCreate addTask={addTask} />
          </Col>

          <Col md={8} className="mt-5">
            <TaskList
              tasks={tasks}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
              selectEditTask={selectEditTask}
            />
          </Col>
        </Row>
        {visibildadEditTask && (
          <TaskEdit
            editTask={editTask}
            visibilidad={true}
            editArrayTask={editArrayTask}
            showModalEdit={showModalEdit}
          />
        )}
      </Container>
      <Row className="container-error-id">
        {
          //Esto lo agrega para que muestre el error cuando no logra capturar el id en el
          //componente TaskItem en el medo onClick delboton de editar <GrEdit />
          //Tiene la misma funcionalidad que el boton <BsFillTrashFill />, pero el boton de
          //borra funciona perfecto,pero el de editar hay veces que no logra leer el ID de la tarea
        }
        {errorModal && (
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Error al intentar modificar tarea</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Por favor intente de nuevo</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={setError}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        )}
      </Row>
    </Container>
  );
}

export default App;
