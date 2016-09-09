import React from 'react'
import Repo from './Repo'


export default function(props) {
    return (
        <div>
        {props.repos.map(repo => {
            let date = new Date(repo.updated_at);
            let updated_at = date.toDateString();
            return (
                <Repo key={repo.id} reponame={repo.name} fullname={repo.full_name} description={repo.description} updated={updated_at}/>
            );
        })}
        </div>
    );
}
