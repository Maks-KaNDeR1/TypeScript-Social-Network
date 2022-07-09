import { ProfileType } from '../components/Profile/profile-reducer';
import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        // 'API-KEY': 'd885d4a3-64ff-4a70-8cfb-d6db15bc8bae'
        'API-KEY': '92a851fe-fc48-452f-b6b6-b08cb1364d0d'
    }
})


export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) =>
        instance.get(`users?page=${currentPage}&count=${pageSize}`),
    follow: (id: number) => instance.delete(`follow/${id}`),

    unfollow: (id: number) => instance.post(`follow/${id}`),

}

export const authAPI = {
    me: () => instance.get('auth/me'),

    login: (email: string, password: string, rememberMe: boolean, captcha = false) =>
        instance.post(`auth/login`, { email, password, rememberMe, captcha }),

    logout: () => instance.delete(`auth/login`),
}

export const profileAPI = {
    getUserProfie: (userId: number) => instance.get<ProfileType>(`profile/${userId}`),

    getStatus: (userId: number) => instance.get(`profile/status/${userId}`),

    updateStatus: (status: string) => instance.put(`profile/status`, { status }),

    saveProfilePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile)
    }
}

