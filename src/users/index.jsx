import React, { useEffect, useState } from "react";
import "./users.css";

function UserList(props) {

    const { title, users, sayMyName } = props;

    const [keyword, setKeyword] = useState('');
    const [myUsers, setMyUsers] = useState(users || []);

    useEffect(() => {
        setMyUsers(users);
        console.log('Filtering users with keyword:', keyword);
        const filteredUsers = users.filter(user =>
            user.name.toLowerCase().includes(keyword) ||
            user.email.toLowerCase().includes(keyword)
        );
        setMyUsers(filteredUsers);
    }, [users, keyword]);

    useEffect(() => {
        console.log("UserList component mounted");
    }, []);

    return (
        <div className="users">
            <h2>{title}</h2>
            <div>{keyword}</div>
            <div>
                <input
                    type="text"
                    placeholder="Search users..."
                    onChange={(e) => {
                        setKeyword(e.target.value.toLowerCase());
                        // const searchTerm = e.target.value.toLowerCase();
                        // const filteredUsers = users.filter(user =>
                        //     user.name.toLowerCase().includes(searchTerm) ||
                        //     user.email.toLowerCase().includes(searchTerm)
                        // );
                        // setMyUsers(filteredUsers);
                    }}
                />
            </div>
            <div>
                {myUsers?.map(user => (
                    <div key={user.id} className="user" onClick={() => sayMyName(user.name)}>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserList;