import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: "Bearer fzcrQMxq03BE2_6cW_9ljHD6dunVYQuDBRrEMBkKnRyLIUdpS0YWQehdLPx8ETc3u8YkXnlYH__VhjV7UrCwvOJ1Mk7Jf8mvY_HupTzv6CBCuxyMso32F8EmICJRZXYx"
    }
})