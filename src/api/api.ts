import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "d885d4a3-64ff-4a70-8cfb-d6db15bc8bae"
    }
})


export const userAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(responce => responce.data),
    getFollow: (id: number) => instance.delete(`follow/${id}`)
        .then(responce => responce.data),
    getUnfollow: (id: number) => instance.post(`follow/${id}`)
        .then(responce => responce.data),
}

export const authAPI = {
    login: () => instance.get('auth/me')
        .then(responce => responce.data)
}
