import axios from 'axios';
import store from '../store';
import { getRepositorySuccess } from '../actions/repository';
import { getCommitsSuccess } from '../actions/commits';


export function fetchRepository(username) {
  return axios.get(`https://api.github.com/users/${username}/repos`)
    .then(response => {
      store.dispatch(getRepositorySuccess(response.data));
      return response;
    });
}

export function fetchCommits(username, repo) {
  return axios.get(`https://api.github.com/repos/${username}/${repo}/commits`)
    .then(response => {
      store.dispatch(getCommitsSuccess(response.data));
      return response;
    });
}