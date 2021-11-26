import React from "react";

const Users = (props) => {
    return <>
        {
            props.users.map(a => {
                return <div key={a.id}>{a.login}</div>
            })
        }
    </>
}
export default Users;