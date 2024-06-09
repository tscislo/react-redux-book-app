import "./App.css"
import {Provider} from "react-redux"
import {booksStore} from "./app/books-store";
import {RouterProvider} from "react-router-dom";
import {router} from "./app/router";

const App = () => {
    return (
        <div className="App">
            <Provider store={booksStore}>
                <RouterProvider router={router}/>
            </Provider>
        </div>
    )
}

export default App
