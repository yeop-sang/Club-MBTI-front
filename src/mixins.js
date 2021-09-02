import axios from "axios";

export default {
    methods: {
        async getData(path) {
            return await axios.get("http://yeop.kr:8000" + path, {headers: {}})
                .then(res => {
                    return res['data'];
                })
                .catch(err => {
                    console.debug(err)
                })
        }
    },
}
