import { useGetBooksQuery } from "../../api/api-slice.ts"
import { BookComponent } from "./book.component.tsx"
import classes from "./books.component.module.css"

export const BooksComponent = () => {
  const {data, isError, isLoading, isSuccess} = useGetBooksQuery();

  return <div className={classes.books}>
    {isError && (<div>Unable to get books!</div>)}
    {isLoading && (<div>Loading books...</div>)}
    {isSuccess && data.map(book => (
      <BookComponent book={book} />
    ))}
  </div>
}
