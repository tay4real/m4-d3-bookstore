import React from 'react'
import {Card, Col, Button} from "react-bootstrap"



class SingleBook extends React.Component {
    state = {
        selected : false
    }


    toogleSelected = () => {
        this.state.selected ? 
        this.setState({
            selected: true
        }): this.setState({
            selected: false
        })
    }
    
    render(){
        return (

            <div className= { this.state.selected ? "border border-warning rounded" : undefined } onClick = {this.toogleSelected}>
                <Col xs={6} >
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={this.props.book.img} />
                      <Card.Body>
                        <Card.Title>{this.props.book.title}</Card.Title>
                        <Card.Text>${this.props.book.price}</Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                      </Card.Body>
                    </Card>
                  </Col>
            </div>
        )
    }
    
}

export default SingleBook