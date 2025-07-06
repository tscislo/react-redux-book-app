import { useParams } from "react-router"
import { useGetBookQuery } from "../../api/api-slice.ts"

export const BookDetailsComponent = () => {
  const { id } = useParams();
  const { isError, isSuccess, isLoading, data } = useGetBookQuery(id ?? "");

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {isSuccess && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.author}</p>
          <p>stron: {data.pages}</p>
          <p>
            cena: {data.price} {data.currency}
          </p>
          <img src={data.cover_url} alt={data.title} width={"150px"} />
        </div>
      )}
    </div>
  )
}
