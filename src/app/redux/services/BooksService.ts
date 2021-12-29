import axios from "axios";
import {GOOGLE_KEY, GOOGLE_URL} from "../constants";

const bookApiClient = axios.create({
    baseURL: GOOGLE_URL,
 });

export default {
    book: {
        fetchBooks(title:any) {
            return bookApiClient.get(title+`&key=${GOOGLE_KEY}&maxResilts=20`);
        },
    }
}
