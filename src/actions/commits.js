import axios from 'axios'
import * as types from './types';

export const getCommitsSuccess = (username, repo) => { 
    const request = axios.get(`https://api.github.com/repos/${username}/${repo}/commits`)
    return { type: types.FETCH_COMMITS, payload: request}
}

