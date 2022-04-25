import { ProfileType } from './../redux/profile-reducer';
import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "d885d4a3-64ff-4a70-8cfb-d6db15bc8bae"
    }
})



export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) =>
        instance.get(`users?page=${currentPage}&count=${pageSize}`),

    follow: (id: number) => instance.delete(`follow/${id}`),

    unfollow: (id: number) => instance.post(`follow/${id}`),

}




export const authAPI = {
    me: () => instance.get('auth/me'),

    login: (email: string, password: number, rememberMe: boolean, captcha = false) =>
        instance.post(`auth/login`, { email, password, rememberMe, captcha }),

    logout: () => instance.delete(`auth/login`),
}

export const profileAPI = {
    getUserProfie: (userId: number) => instance.get<ProfileType>(`profile/${userId}`),

    getStatus: (userId: number) => instance.get(`profile/status/${userId}`),

    updateStatus: (status: string) => instance.put(`profile/status`, { status }),

    saveProfilePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
}

