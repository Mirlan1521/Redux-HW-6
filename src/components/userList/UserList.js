import React from 'react';

const UserList = ({users}) => {
        if(users.length===0){
                return (
                    <ul>
                            <li>No Users</li>
                    </ul>)
        }
        else {
        return (
        <ul>
            {users.map((user, key) => <li key={key}>{user}</li>)}
        </ul>);}


}

export default UserList;