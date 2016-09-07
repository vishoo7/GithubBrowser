import axios from 'axios'

export const FETCH_REPOSITORY = 'FETCH_REPOSITORY'
export const FETCH_COMMITS = 'FETCH_COMMITS'

export function fetchRepository(username) {
  const url = `https://api.github.com/users/${this.props.username}/repos`
  const request = axios.get(url)

  return {
    type: FETCH_REPOSITORY,
    payload: request
  }
}


export function fetchCommits(username, repo) {
  const url = `https://api.github.com/repos/${username}/${repo}/commits`
  const request = axios.get(url)

  return {
    type: FETCH_COMMITS,
    payload: request
  }
}
