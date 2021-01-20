import { Card, Col } from "react-bootstrap"

const RecipeCard = function(props) {
    return (
    <Col lg={3} md={6} sm={12}>
        <Card>
        <Card.Img variant="top" src={props.img} alt={props.name} />
        <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
                    {props.desc}
        </Card.Text>
        </Card.Body>
    </Card>
  </Col>
  )
}
export default RecipeCard;