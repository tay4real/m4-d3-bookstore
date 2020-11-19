import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Fantasy from "./data/fantasy.json";
import History from "./data/history.json";
import Horror from "./data/horror.json";
import Romance from "./data/romance.json";
import Scifi from "./data/scifi.json";

import MyNav from "./components/MyNav";
import MyWelcome from "./components/MyWelcome";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";

let books = {
  Fantasy,
  History,
  Horror,
  Romance,
  Scifi,
};

let booksCategories = ["Fantasy", "History", "Horror", "Romance", "Scifi"];

function App() {
  console.log(books);
  return (
    <div className="App">
      <MyNav title="Glitzsint" />
      <MyWelcome />
      <BookList books={books} booksCategories={booksCategories} />
      <MyFooter />
    </div>
  );
}

export default App;
