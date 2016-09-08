import axios from 'axios'

export const FETCH_REPOSITORY = 'FETCH_REPOSITORY'
export const FETCH_COMMITS = 'FETCH_COMMITS'
export const SEARCH_COMMITS = 'SEARCH_COMMITS'

export const fetchRepository = (username) => { 
    const request = axios.get(`https://api.github.com/users/${username}/repos`)
    return { type: FETCH_REPOSITORY, payload: request}
}

export const fetchCommits = (username, repo) => { 
    const request = axios.get(`https://api.github.com/repos/${username}/${repo}/commits`)
    return { type: FETCH_COMMITS, payload: request}
}

