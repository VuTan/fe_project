import axios from "./axios";


const getUserByEmail = (email: string) => {
    return axios.get(`user?email=${email}`);
}

export {getUserByEmail}
