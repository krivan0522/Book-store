import React from 'react';
import { Link } from 'react-router-dom';

const Genre = () => {
    return (
        <>
            <div className='bg-dark'>
                <h1 className='text-primary p-3 text-center'><u>Browse Genre</u></h1>
                <div className="container ">
                    <div className="row">
                        <div className="col gen grid " id="genre1">
                            <Link to="/educational"><h4 className='bg-dark text-info bg-opacity-50 marg'>Educational</h4></Link>
                        </div>
                        <div className="col gen grid" id='genre2'>
                            <Link to="/adventure"  ><h4 className='bg-dark text-info bg-opacity-50 marg'>Adventure</h4></Link>
                        </div>
                        <div className="col gen grid" id='genre3'>
                            <Link to="/fiction" ><h4 className='bg-dark text-info bg-opacity-50 marg'>Fiction</h4></Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col gen grid " id="genre4">
                            <Link to="/romance" ><h4 className='bg-dark text-info bg-opacity-50 marg'>Romance</h4></Link>
                        </div>
                        <div className="col gen grid" id='genre5'>
                            <Link to="/scifi" ><h4 className='bg-dark text-info bg-opacity-50 marg'>Sci-Fi</h4></Link>
                        </div>
                        <div className="col gen grid" id='genre6'>
                            <Link to="/novels" ><h4 className='bg-dark text-info bg-opacity-50 marg'>Novels</h4></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Genre;