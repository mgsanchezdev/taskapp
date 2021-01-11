import { useState } from 'react';
import { Modal, Button, Form, Row } from 'react-bootstrap';
import './TaskEdit.css';
export const TaskEdit = ({
  editTask,
  visibilidad,
  editArrayTask,
  showModalEdit,
}) => {
  const [inputTask, setInputTask] = useState('');

  const saveChangesTask = (e) => {
    e.preventDefault();
    const newTask = {
      ...editTask,
      task: inputTask,
    };
    editArrayTask(newTask);
    visibilidad = false;
    showModalEdit();
  };

  const closeModal = () => {
    showModalEdit();
  };

  const handleInputonChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setInputTask(value);
  };

  return (
    <>
      <Row className="container-edit-task">
        {visibilidad && (
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Editar la tarea</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    defaultValue={editTask.task}
                    onChange={handleInputonChange}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Cancelar
              </Button>
              <Button variant="primary" onClick={saveChangesTask}>
                Guardar
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        )}
      </Row>
    </>
  );
};
