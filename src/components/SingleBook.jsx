import React from 'react'
import {Card, Col, Button} from "react-bootstrap"
import BookReview from "./BookReview"




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

            <div className= { this.state.selected ? "border border-warning rounded" : undefined } >
                <Col xs={6} >
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={this.props.book.img} />
                      <Card.Body>
                        <Card.Title>{this.props.book.title}</Card.Title>
                        <Card.Text>${this.props.book.price}</Card.Text>
                        <Button variant="primary" onClick = {this.toogleSelected}>Review Book</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <BookReview asin={this.props.book.asin} />
            </div>
            
        )
    }
    
}

export default SingleBook