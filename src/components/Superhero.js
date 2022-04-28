import { Card, Container, Row, Col, Image } from "react-bootstrap";
import antmanImage from "../assets/images/superhero/antman.jpg";
import avengerImage from "../assets/images/superhero/avenger.jpg";
import batmanImage from "../assets/images/superhero/batman.jpg";
import robinhoodImage from "../assets/images/superhero/robinhood.jpg";
import spidermanImage from "../assets/images/superhero/spiderman.jpg";
import supermanImage from "../assets/images/superhero/superman.jpg";

const Superhero = () => {
  return (
    <div>
      <Container>
        <br />
        <br />
        <h1 className="text-white text-center">SUPERHERO'S MOVIES</h1>
        <Row>
          <Col md={4} className="movie_wrapper" id="superhero">
            <Card className="bg-dark text-white movie_image">
              <Image src={antmanImage} alt="Dune Movies" className="images" />
              <Card.Title className="text-center">ANT-MAN</Card.Title>
              <Card.Text className="text-left m-2">
                This is a wider card with supporting text below as a natural.
              </Card.Text>
              <Card.Text className="text-left m-2">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movie_wrapper">
            <Card className="bg-dark text-white movie_image">
              <Image src={avengerImage} alt="Dune Movies" className="images" />
              <Card.Title className="text-center">AVENGER</Card.Title>
              <Card.Text className="text-left m-2">
                This is a wider card with supporting text below as a natural.
              </Card.Text>
              <Card.Text className="text-left m-2">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movie_wrapper">
            <Card className="bg-dark text-white movie_image">
              <Image src={batmanImage} alt="Dune Movies" className="images" />
              <Card.Title className="text-center">BATMAN</Card.Title>
              <Card.Text className="text-left m-2">
                This is a wider card with supporting text below as a natural.
              </Card.Text>
              <Card.Text className="text-left m-2">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movie_wrapper">
            <Card className="bg-dark text-white movie_image">
              <Image src={robinhoodImage} alt="Dune Movies" className="images" />
              <Card.Title className="text-center">ROBIN HOOD</Card.Title>
              <Card.Text className="text-left m-2">
                This is a wider card with supporting text below as a natural.
              </Card.Text>
              <Card.Text className="text-left m-2">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movie_wrapper">
            <Card className="bg-dark text-white movie_image">
              <Image src={spidermanImage} alt="Dune Movies" className="images" />
              <Card.Title className="text-center">SPIDERMAN</Card.Title>
              <Card.Text className="text-left m-2">
                This is a wider card with supporting text below as a natural.
              </Card.Text>
              <Card.Text className="text-left m-2">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movie_wrapper">
            <Card className="bg-dark text-white movie_image">
              <Image src={supermanImage} alt="Dune Movies" className="images"/>
              <Card.Title className="text-center">SUPERMAN</Card.Title>
              <Card.Text className="text-left m-2">
                This is a wider card with supporting text below as a natural.
              </Card.Text>
              <Card.Text className="text-left m-2">
                Last updated 3 mins ago
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Superhero;
