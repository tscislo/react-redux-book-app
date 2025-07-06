import "./App.css"
import { RouterProvider } from "react-router"
import { router } from "./app/router.tsx"
// import { Counter } from "./features/counter/Counter"
// import { Quotes } from "./features/quotes/Quotes"
// import logo from "./logo.svg"

export const App = () => (
  <div className="App">
    {/*<Provider store={setupStore()}>*/}
      <RouterProvider router={router}/>
    {/*</Provider>*/}
  </div>
)
