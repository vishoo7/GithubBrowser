import React from 'react'
import Repo from '../components/Repo'


export default function(props) {
    return (
        <div>
        {props.repos.map(function(repo){
        return (
          <Repo key={repo.id} name={repo.full_name} description={repo.description} updated={repo.updated_at}/>
        )
        }, this)}
        </div>
    );
}
