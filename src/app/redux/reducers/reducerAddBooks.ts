import {ADD_BOOKS} from "./constants";
  import { v4 as uuidv4 } from 'uuid';

const initialState={
    books:[]
}

const helperAddData = (action:any) => {
    return{
        id:uuidv4(),
        title:action.payload.title,
        author:action.payload.author
    }
}

//reducer
  const reduerAddBooks =  (state=initialState.books,action:any)=>{
    const dataLocal = localStorage.getItem('bookData')
    if (dataLocal){
        state = JSON.parse(dataLocal)
    }
    switch (action.type) {
        case ADD_BOOKS:
           state = [...state,helperAddData(action) as never]
            localStorage.setItem('bookData',JSON.stringify(state))
            return state
        default:
            return state;
    }
  }


export default reduerAddBooks
