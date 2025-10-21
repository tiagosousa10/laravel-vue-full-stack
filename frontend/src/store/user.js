import {defineStore} from "pinia";
import axiosClient from "../axios.js";

const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
    }),
    actions: {
        fetchUser: (state,payload) => {
            axiosClient.get("/api/user").then(({data}) => {
                console.log(data)
                this.user = data
            })
        }
    }
})