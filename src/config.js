const CASTLE_PROD_URL = "https://v1.icall.co.kr:7300"
const CASTLE_DEV_URL = "https://localhost:7300"

var BASE_URL = ''

if (process.env.NODE_ENV == 'prod') {
    BASE_URL = CASTLE_PROD_URL;
} else {
    BASE_URL = CASTLE_DEV_URL;
}

export default BASE_URL