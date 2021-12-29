import axios from "axios";
import {GOOGLE_KEY, GOOGLE_URL} from "../reducers/constants";

const bookApiClient = axios.create({
    baseURL: GOOGLE_URL,
    //timeout: 1000,
});

export default {
    book: {
        fetchBooks(title:any) {
            return bookApiClient.get(title+`&key=${GOOGLE_KEY}&maxResilts=20`);
        },
    }
}
