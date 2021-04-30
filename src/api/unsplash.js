import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization:
            "Client-ID XttKMHBX8rtT_OSkFhWiNzdg7I7qv1euHSF_Z20BwpU"
    }
})