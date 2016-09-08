import axios from 'axios'

export const FETCH_REPOSITORY = 'FETCH_REPOSITORY'
export const FETCH_COMMITS = 'FETCH_COMMITS'
export const SEARCH_COMMITS = 'SEARCH_COMMITS'

export const fetchRepository = (username) => { 
    const payload = axios.get(`https://api.github.com/users/${this.props.username}/repos`)
    return { type: FETCH_REPOSITORY, payload}
}

export const fetchCommits = (username, repo) => { 
    const payload = axios.get(`https://api.github.com/repos/${username}/${repo}/commits`)
    return { type: FETCH_COMMITS, payload}
}

