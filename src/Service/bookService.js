import axios from "axios"
const BASEUrl = "https://book-e-sell-node-api.vercel.app/api/book"
class BookService {
    getBooks = async(payload)=>{
       return axios.get(`${BASEUrl}/all`,payload)
    }
}

export default new BookService();
