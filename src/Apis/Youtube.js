import axios from 'axios';

const KEY = 'AIzaSyD6h3NWZhXVWLIDzBbMtvrydQKc9lCU70g';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY,
        type: 'video'
    }
});