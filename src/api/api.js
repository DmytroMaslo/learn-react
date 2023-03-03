import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "7f3c19d9-d088-4b96-b87d-d55584ecdcbe"
    }
});
export const userAPI = {
    authUser() {
        return instance.get(`auth/me`, {
            withCredentials: true
        }).then(response => response.data)
    },
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "7f3c19d9-d088-4b96-b87d-d55584ecdcbe"
            }
        }).then(response => response.data)
    },
    followUser(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    }
}




