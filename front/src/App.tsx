import "./App.css"
import {Provider} from "react-redux"
import {BooksComponent} from "./features/books/books.component";
import {booksStore} from "./app/books-store";

const App = () => {
  return (
    <div className="App">
      <Provider store={booksStore}>
        <BooksComponent />
      </Provider>
    </div>
  )
}

export default App
