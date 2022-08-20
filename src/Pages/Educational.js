import Books from '../Books';
import useFetch from "../useFetch";

const Educational = () => {
    const {data, isPending, error} = useFetch();

    return (
        <div className="action">
            <div className="booksAct">
                {error &&  <div>{ error }</div>}
                {isPending && <div>Loading...</div>}

                {data && <Books genrebook={data.filter(book => book.genre_list.includes('Academic'||'School'))} category={"Educational"}/>}
            </div>
        </div>
    );
}
 
export default Educational;