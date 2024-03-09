import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "57ee803999794e06b973e31033783610"
    }
})