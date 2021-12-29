import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchBooks} from "../redux/slices/thunks";
import {API_STATUS_FAILED, API_STATUS_LOADING} from "../redux/reducers/constants";

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
                            <div className="card mb-2" key={book.id}>
                                <div className="card-header">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed"
                                                aria-expanded="false" data-bs-toggle="collapse"
                                                data-bs-target={`${book.id}`}
                                        >{book.volumeInfo.title}</button>
                                    </h5>
                                </div>

                                <div className="collapse">
                                    <div className="card-body"></div>
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
                <div className="accordion-body">
                    {aa()}

                </div>
            </div>
        </main>
    );
};

export default Search;
