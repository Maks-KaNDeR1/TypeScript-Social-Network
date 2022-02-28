import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "d885d4a3-64ff-4a70-8cfb-d6db15bc8bae"
    }
})



export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data),
    follow: (id: number) => instance.delete(`follow/${id}`)
        .then(response => response.data),
    unfollow: (id: number) => instance.post(`follow/${id}`)
        .then(response => response.data),
}

export const authAPI = {
    me: () => instance.get('auth/me')
        .then(response => response.data)
}

export const profileAPI = {
    getUserProfie: (userId: number) => instance.get(`profile/${userId}`)
        .then(response => response.data),
}

