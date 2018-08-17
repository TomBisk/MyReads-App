import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import SearchBook from './SearchBook'



class BooksApp extends React.Component {
  state = {
 		myBooks : []
	}

	componentDidMount() {
		BooksAPI.getAll().then((myBooks) => {
			this.setState({myBooks})
		})
	}

	moveBook = (book, shelf) => {
		BooksAPI.update(book, shelf).then(() => {
		
		BooksAPI.getAll().then((myBooks) => {
			this.setState({myBooks})
		})
		})
	}

  render() {
    return (
      <div className="app">
				<Route exact path="/" render={() => (
					<BookShelf 
						myBooks={this.state.myBooks}
						moveBook={this.moveBook}
					/>		
				)}/> 
				
				<Route path="/search" render={() => (
					<SearchBook moveBook={this.moveBook}
myBooks={this.state.myBooks}/>														
				)}/>
      </div>
    )
  }
}

export default BooksApp
