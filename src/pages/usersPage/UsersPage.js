import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addUser, changeInput, cleaRInput, deleteUsers} from "../../store/usersSlice";
import UserList from "../../components/userList/UserList";


function UsersPage(props) {
    const dispatch = useDispatch();

    const name = useSelector(state => state.usersReducer.name);
    const users = useSelector(state => state.usersReducer.users);




    const changeInputFunc = (e) => {
        dispatch(changeInput(e.target.value));
    }

    const createUser  = () => {
        dispatch(addUser(name))
        dispatch(cleaRInput(name))

    }
    const deletEUsers = () => {
        dispatch(deleteUsers())
    }




    return (
        <div>
            <div>
                <input type="text" onChange={changeInputFunc} value={name}  />
                <button onClick={createUser}>create user</button>
                <button onClick={deletEUsers} >delete users</button>
            </div>

            -----------------------------------------------------------------------------------------

            <UserList users={users}/>
        </div>
    );
}

export default UsersPage;