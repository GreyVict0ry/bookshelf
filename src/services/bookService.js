import API from "./config";
import BOOK_ENDPOINTS from './endPoint';

//Object bookService
const bookService = {
    //Function that reurn all the books.
    getAll: () => new Promise(
        (resolve,reject) => {
            API.get(BOOK_ENDPOINTS.LIST_BOOK + "/volumes")
            .then(
                res => res.data.items
            ).then(
                data => resolve(data)
            ).catch(
                err => reject(err)
            )
        }
    ),
    //Function thar search book who contain the text
    getSearch: (textSearch) => new Promise(
        (resolve,reject) => {
            API.get(`?q=${textSearch}&maxResults=36`)
            .then(
                res => resolve(res.data.items)
            ).catch(
                err => reject(err)
            )
        }
    ),
    //Function receives a id and that return the book with that id.
    getById: (id) => new Promise(
        (resolve, reject) => {
            API.get(`/${id}`)
            .then(
                res =>resolve(res.data.items)
            ).catch(
                err => reject(err)
            )
        }
    ),
    //Function receives a id search a book in a specific bookshelf
    get: (id) => new Promise(
        (resolve, reject) => {
            API.get(BOOK_ENDPOINTS.LIST_BOOK + "/volumes" + id)
            .then(
                res => res.data.data.book
            ).then(
                data => resolve(data)
            ).catch(
                err => reject(err)
            )
        }
    ),
}

export default bookService;