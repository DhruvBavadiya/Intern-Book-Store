import axios from "axios"
const BASEUrl = "https://book-e-sell-node-api.vercel.app/api/user/"
class Authservice {
    Register = async(payload)=>{
       return axios.post(`${BASEUrl}`,payload)
    }

    Login = async(payload)=>{
        return axios.post(`${BASEUrl}login`,payload)
    }
}

export default new Authservice();
