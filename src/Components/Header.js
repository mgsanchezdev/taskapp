import { Container, Row, Col } from 'react-bootstrap';

export const Header = ({ title, tasks }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">{title}</h1>
        </Col>
        <Col>
          <h2>
            Tareas sin realizar:{' '}
            {tasks.filter((task) => task.done === false).length}
          </h2>
        </Col>
        <Col>
          <h2>
            Tareas realizadas:{' '}
            {tasks.filter((task) => task.done === true).length}
          </h2>
        </Col>
      </Row>
    </Container>
  );
};
