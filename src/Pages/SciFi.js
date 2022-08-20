import Books from '../Books';
import useFetch from "../useFetch";

const SciFi = () => {
    const {data, isPending, error} = useFetch();

    return (
        <div className="action">
            <div className="booksAct">
                {error &&  <div>{ error }</div>}
                {isPending && <div>Loading...</div>}

                {data && <Books genrebook={data.filter(book => book.genre_list.includes('Science'||'Fiction'))} category={"Sci-Fi"}/>}
            </div>
        </div>
    );
}
 
export default SciFi;