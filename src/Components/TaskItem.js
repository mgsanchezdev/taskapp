import { Alert, Row, Col, Button } from 'react-bootstrap';
import { BsFillTrashFill } from 'react-icons/bs';
import { GrEdit } from 'react-icons/gr';

export const TaskItem = ({
  id,
  task,
  done,
  deleteTask,
  toggleTask,
  selectEditTask,
}) => {
  const deleteWork = (e) => {
    const { id } = e.target;
    deleteTask(id);
  };

  const toggleCheckbox = () => {
    toggleTask(id);
  };

  const editTask = (e) => {
    //Este metodo tiene la misma logica que el deleteWork
    //pero hay veces que no logra obtener el ID con e.target.id
    //para dar error agrege un modal(En el componente APP) que te advierte que
    //no se pude editar una tarea
    e.preventDefault();
    const { id } = e.target;

    selectEditTask(id);
  };

  return (
    <>
      <Alert key={id} variant={done ? 'success' : 'primary'}>
        <Row className=" align-items-center">
          <Col md={8}>
            <input type="checkbox" onChange={toggleCheckbox} /> {task}
          </Col>
          <Col md={4}>
            <Button id={id} className="m-2" onClick={editTask}>
              <GrEdit />
            </Button>
            <Button id={id} onClick={deleteWork}>
              <BsFillTrashFill />
            </Button>
          </Col>
        </Row>
      </Alert>
    </>
  );
};
