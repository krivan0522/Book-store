import { useContext } from 'react';
import { UserContext } from './UserContext';

const Books = (props) => {
    const genrebook = props.genrebook;
    const category = props.category;

    const {value, setValue} = useContext(UserContext);

    const handleCart = (btitle,bprice,bid,bphoto) =>{
        
        const exists = value.booktem.find(x => x.id===bid);
        if(exists){
            value.booktem.forEach(books => {
                if(exists && books.id === bid){
                    books.numq = books.numq + 1;
                    books.totalp = books.totalp + bprice;
                    setValue({"noqty":value.noqty+1 , "fp":value.fp+bprice, "booktem":[...value.booktem]});
                }
                
            });
        }
        else{
            const bobj = {"title":btitle, "price":bprice, "totalp":bprice, "id":bid, "photo":bphoto, "numq":1};
            setValue({"noqty":value.noqty+1 , "fp":value.fp+bprice, "booktem":[...value.booktem, bobj]});
        }
    }
    
    return (
        <>
        <div className="books">
            <h2 className='bookcat'><span>{` ${category}`}</span>{` `} Books</h2>
            <div className="DisplayBooks">
            {genrebook.map(genbook => (
                <div className="booksDisplay" key={genbook.id}>
                    <div className="individualBooks">
                        <img src={genbook.image_url} alt="book" />
                        <h2>{genbook.title}</h2>
                        <div className='authorname'><span>By </span>{genbook.authors}</div>
                        <div><span>Price: </span>{`Rs.${genbook.num_pages}`}</div>
                        <button onClick={() => {handleCart(genbook.title,genbook.num_pages,genbook.id,genbook.image_url)}}><div className='Button'>+ Add to cart</div></button>
                    </div>
                </div>
            ))}
            </div>
        </div>
        </>
    );
}
 
export default Books;