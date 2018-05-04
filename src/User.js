import React from "react"

const User = ({ userData }) => {
  return (
    <div>
      <div>
        <img src={userData.picture.thumbnail} alt={userData.name.first + ' ' + userData.name.last + "'s avatar"} />
      </div>
      <div>
        {userData.name.first + ' ' + userData.name.last}
      </div>
      <div>
        <a href={'mailto:' + userData.email}>{userData.email}</a>
      </div>
      <hr />
    </div>
  )
}

export default User