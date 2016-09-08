import axios from 'axios'
import * as types from './types';

export const getRepositorySuccess = (repos) => { 
    return { type: types.LOAD_REPOSITORY_SUCCESS, repos}
}

