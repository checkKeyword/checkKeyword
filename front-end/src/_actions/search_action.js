import axios from 'axios';

export function checkKeyword(body) {
    const request = axios.post('/api/checkKeyword', body)
        .then(res => res.data)
    
    return {
        type: "CHECK_KEYWORD",
        payload: request
    }
} 