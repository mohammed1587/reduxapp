import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchBooks} from "../redux/thunks/thunksFetchBooks";
import {API_STATUS_FAILED, API_STATUS_LOADING} from "../redux/constants";

const Search = () => {
    const {list, status, error} = useSelector((state: any) => state.books);
    const dispatch = useDispatch();

    const [title, setTitle] = useState('')

    const handleSubmit = (e: any) => {
        e.preventDefault()
        dispatch(fetchBooks({title: `${title}`}));
    }

    // useEffect(() => {
    //     dispatch(fetchBooks({title: `${title}`}));
    //
    // }, [])
    const aa = () => {
        return (
            status === API_STATUS_LOADING ? (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-info" role="status">
                        <span>Loading.....</span>
                    </div>
                </div>
            ) : (status === API_STATUS_FAILED) ? <p>{error}</p> :

                    list.map((book: any) => {
                         return (
                            <div className="card mb-2 accordion-item" key={book.id}>
                                <div className="card-header accordion-header" id={book.volumeInfo.title}>
                                    <h5 className="mb-0 " >
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                 aria-expanded="true"
                                                aria-controls={book.id.replace(/[0-9]/g, '')}
                                                 data-bs-target={`#${book.id.replace(/[0-9]/g, '')}`}
                                        >{book.volumeInfo.title}</button>
                                    </h5>
                                </div>

                                <div  className="accordion-collapse collapse"
                                     aria-labelledby={book.volumeInfo.title} data-bs-parent="#accordion"
                                     key={book.id} id={book.id.replace(/[0-9]/g, '')}>
                                    <div className="card-body accordion-body">
                                        {
                                            book.volumeInfo.hasOwnProperty('imageLinks') &&
                                            <img style={{width:"auto"}} src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
                                        }
                                        <br/>
                                        <h4 className="card-title">Titre: {book.volumeInfo.title}</h4>
                                        <h5 className="card-title">Auteur: {book.volumeInfo.authors}</h5>
                                        <p className="card-text">Description: {book.volumeInfo.description}</p>
                                        <a className="btn btn-outline-secondary" target="_blank" rel="noopener noreferrer"
                                           href={book.volumeInfo.previewLink}
                                        >Plus d'info</a>

                                    </div>
                                </div>
                            </div>
                        )
                    })

        )
    }


    return (
        <main>
            <div className="jumbotron jumbotron-fluid ">
                <div className="container text-center">
                    <h1 className="display-4">BOOK</h1>
                    <p>Ajouter un livre à votre bibliothèque</p>

                    <form className="form-inline justify-content-center" onSubmit={handleSubmit}>
                        <div className="form-group ">
                            <input type="text" className="form-control" placeholder="Quoi chercher" required
                                   value={title} onChange={(e => setTitle(e.target.value))}
                            />
                        </div>

                        <div className="form-group ">
                            <button className="btn btn-secondary">Rechercher</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="container" style={{minHeight: '200px'}}>
                    <div className="accordion" id="accordion">
                    {aa()}

                </div>
            </div>
        </main>
    );
};

export default Search;
