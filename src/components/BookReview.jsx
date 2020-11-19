import React from 'react'

import {Form, Row, Col, Button, Alert, Spinner} from 'react-bootstrap';

class BookReview extends React.Component {
    state = {
        userReview : {
          comment: "", // comment inserted by the user
          rate: 1, //value between 1 and 5
          elementId: this.props.asin // ASIN of the book
        } ,
        errMessage: '',  
    }

    updateUserReview = (e) => {
        let userReview = {...this.state.userReview} // creating a copy of the current state
        let currentId = e.currentTarget.id; // 'name', 'phone', et
        userReview[currentId] = e.currentTarget.value;
        userReview.elementId = this.props.asin
        this.setState({userReview}) // this.setState({reservation: reservation}) pretty much the same
    }

    submitUserReview = async (e) => {
        e.preventDefault();
        this.setState({loading: true})
        try {
          let url = "https://striveschool-api.herokuapp.com/api/comments/";
      let headers = {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiY2M5NDRiY2RlMTAwMTc2MTZhOTYiLCJpYXQiOjE2MDUwOTQ1NDksImV4cCI6MTYwNjMwNDE0OX0.JMToVdUvDxcKoie5yISpJXvFS_X7OxsS8cbw33i1oV0",
      };
            let response = await fetch(url, {
              method: "PUT",
              body: JSON.stringify(this.state.userReview),
              headers
            });
            
            
            if (response.ok) {
                alert('User Review Saved!')
                this.setState({
                  userReview : {
                    comment: "", 
                    rate: 1, 
                    elementId: ""  
                  } ,
                  errMessage: '',
                    loading: false
                })
            } else {
                console.log('an error occurred')
                let error = await response.json()
                this.setState(
                    {
                        errMessage: error.message,
                        loading: false
                    }
                )
            }
        } catch (e) {
            console.log(e)
            this.setState(
                {errMessage: e.message}
            )
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.errMessage && (
                        <Alert variant="danger">
                            We encountered a problem with your request {this.state.errMessage}
                        </Alert>
                    )
                }
                {
                    this.state.loading && (
                        <div className="d-flex justify-content-center my-5">
                            Adding your comment, please wait
                            <div className="ml-2">
                            <Spinner animation="border" variant="success" />
                            </div>
                        </div>

                    )
                }
                
            <Form className="w-100 mb-5" onSubmit={this.submitUserReview}>
            <Row>
                  <Col md={12}>
                      <Form.Group>
                          <Form.Label htmlFor="comment">Users Comment</Form.Label>
                          <Form.Control
                              type="text"
                              name="comment"
                              id="comment"
                              placeholder="Add your review about the book"
                              value={this.state.userReview.comment}
                              onChange={this.updateUserReview}
                          />
                      </Form.Group>
                  </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Form.Group>
                            <Form.Label htmlFor="rate">Rate Book</Form.Label>
                            <Form.Control 
                                as="select"
                                name="rate"
                                id="rate"
                                value={this.state.userReview.rate}
                                onChange={this.updateUserReview}
                            >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            
                           </Form.Control>
                        </Form.Group>
                     </Col>
                </Row>
                
                
                <Button type="submit">Submit</Button>
               
            </Form>
            </div>
        )
    }
}

export default BookReview
