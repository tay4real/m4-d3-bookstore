import React, { Component } from 'react'

import {Container, InputGroup, DropdownButton, Dropdown, FormControl, Row} from 'react-bootstrap'
import SingleBook from "./SingleBook";


 class BookList extends Component {
    

   
      state = {
        books: this.props.books.Fantasy,
        categories: this.props.booksCategories,
        categorySelected: "Fantasy"
      }

   

      handleDropdownChange = (category) => {
        this.setState({
          books: this.props.books[category].slice(0, 5),
          categorySelected: category,
        });
      };

      handleSearchQuery = (searchQuery) => {
        let category = this.state.categorySelected;
    
        if (searchQuery) {
          let filteredBooks = this.props.books[category].filter((book) =>
            book.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
          this.setState({ books: filteredBooks.slice(0, 5) });
        } else {
          this.setState({ books: this.props.books[category].slice(0, 12) });
        }
      };



    render() {
        console.log(this.state.books)
        
        
        return (
          
            <Container>
          <InputGroup>
            <DropdownButton
              as={InputGroup.Prepend}
              id="dropdown-basic-button"
              className="mb-3"
              title={this.state.categorySelected}
            >
              {this.state.categories.map((category, index) => {
                return (
                  <Dropdown.Item
                    href="#/action-1"
                    key={`dropdown-category-${index}`}
                    onClick={() => this.handleDropdownChange(category)}
                  >
                    {category}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
            
            <FormControl
              placeholder="Search Books by Title"
              aria-label="Search"
              aria-describedby="basic-addon1"
              onChange={(e) => this.handleSearchQuery(e.target.value)}
            />
          </InputGroup>
          <Row>
            {this.state.books ? (
              this.state.books.map((book) => {
                return (
                  <SingleBook key={book.asin} book={book} />
                );
              })
            ) : (
              <div> nothing here </div>
            )}
          </Row>
        </Container>
        )
    }
}

export default  BookList 