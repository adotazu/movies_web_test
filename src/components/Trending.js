import { Card, Container, Row, Col, Image } from "react-bootstrap";
import duneImage from "../assets/images/trending/dune.jpg";
import everythingImage from "../assets/images/trending/everything.jpg";
import jokerImage from "../assets/images/trending/joker.jpg";
import lightyearImage from "../assets/images/trending/lightyear.jpg";
import morbiusImage from "../assets/images/trending/morbius.jpg";
import infiniteImage from "../assets/images/trending/infinite.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <br />
        <h1 className="text-white text-center">TRENDING MOVIES</h1>
        <Row>
          <Col md={4} className="movie_wrapper" id="trending">
            <Card className="bg-dark text-white movie_image">
              <Image src={duneImage} alt="Dune Movies" className="images" />
              <Card.Title className="text-center">DUNE</Card.Title>
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
              <Image src={everythingImage} alt="Dune Movies" className="images" />
              <Card.Title className="text-center">EVERYTHING</Card.Title>
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
              <Image src={jokerImage} alt="Dune Movies" className="images" />
              <Card.Title className="text-center">INFINITE</Card.Title>
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
              <Image src={lightyearImage} alt="Dune Movies" className="images" />
              <Card.Title className="text-center">LIGHTYEAR</Card.Title>
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
              <Image src={morbiusImage} alt="Dune Movies" className="images" />
              <Card.Title className="text-center">MORBIUS</Card.Title>
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
              <Image src={infiniteImage} alt="Dune Movies" className="images"/>
              <Card.Title className="text-center">DUNE</Card.Title>
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

export default Trending;
