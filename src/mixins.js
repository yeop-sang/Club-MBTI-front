import axios from "axios";

export default {
    methods: {
        async getData(path) {
            return await axios.get(
                "https://07ee33e5-d0c6-4577-8d4c-a609942f1aef.mock.pstmn.io" + path
            )
                .then(res => {
                    console.debug(res['data'])
                    return res['data'];
                })
                .catch(err => {
                    console.debug(err)
                })
        }
    },
}
