
import * as types from './types';

export const getCommitsSuccess = (commits) => { 
    return { type: types.LOAD_COMMITS_SUCCESS, commits}
}

