import axios from "axios"
const BASEUrl = "https://book-e-sell-node-api.vercel.app/api/book"
class BookService {
    getBooks = async(payload)=>{
       return axios.get(`${BASEUrl}/all`,payload)
    }
    Save = async (payload) => {
        return axios.post(BASEUrl, payload);
      };
    
      GetBookById = async (id) => {
        return axios.get(`${BASEUrl}/byId?id=${id}`);
      };
    
      UpdateBook = async (payload) => {
        return axios.put(BASEUrl, payload);
      };
    
      DeleteBook = async (id) => {
        return axios.delete(`${BASEUrl}?id=${id}`);
      };
}

export default new BookService();
