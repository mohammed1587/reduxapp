import React, {useState} from 'react';
import {connect} from "react-redux";
import {addBook, deleteAllBook, deleteBook} from "../redux/actions/actionAddBooks";

const AddBook = ({libraryData,addBook,deleteBook,deleteAllBook}:any) => {
     const initialState = {
        title : '',
        author:''
    }
    const [data,setData] = useState(initialState)
    const handleSubmit = (e:any) =>{
        e.preventDefault()
        addBook(data)
        setData(initialState)
    }
    const displayData = libraryData.length>0 ?
        libraryData.map((data:any)=>{
            return (
                <li key={data.id} className="list-group-item list-group-item-light d-flex justify-content-between">
                    <span><strong>Titre: </strong>{data.title}</span>
                    <span><strong>Autheur: </strong>{data.author}</span>
                    <span className="btn btn-danger"
                    onClick={()=>{deleteBook(data.id)}}
                    >x</span>
                </li>
            )
        })
        : <p className="text-center">Aucun data à afficher</p>

    const displayDeleteAllButton = libraryData.length > 0 &&
        <div className="d-flex justify-content-center">
            <button className="btn-danger mt-4 mb-5"
            onClick={()=>deleteAllBook()}
            >Effacer tous les livre </button>
        </div>
    return (
        <main>
            <div className="jumbotron jumbotron-fluid ">
                <div className="container text-center">
                    <h1 className="display-4">BOOK</h1>
                    <p>Ajouter un livre à votre bibliothèque</p>

                    <form className="form-inline justify-content-center" onSubmit={handleSubmit}>
                          <div className="form-group ">
                              <input value={data.title} type="text" className="form-control" placeholder="Titre" required
                                     onChange={e=>setData({...data,title:e.target.value})}
                              />
                          </div>

                        <div className="form-group ">
                            <input value={data.author} type="text" className="form-control m3" placeholder="Autheur" required
                                   onChange={e=>setData({...data,author:e.target.value})}

                            />
                        </div>
                        <div className="form-group ">
                             <button className="btn btn-secondary">Ajouter un livre</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="container" style={{minHeight:'200px'}}>
                <div className="row">
                    <div className="col-md-12">
                        <ul className="list-group">
                            {displayData}
                        </ul>
                        {displayDeleteAllButton}
                    </div>

                </div>
            </div>
        </main>
    );
};

const addStateToProps = (state:any) =>{
    return{
        libraryData:state.library
    }
}

const  addDispatchToProps = (dispatch:any) => {
    return{
        addBook:(param:any) => dispatch(addBook(param)),
        deleteBook:(id:any) => dispatch(deleteBook(id)),
        deleteAllBook:() => dispatch(deleteAllBook())

    }
}
export default connect(addStateToProps,addDispatchToProps)(AddBook);
