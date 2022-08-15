import React from "react";
import PropTypes from "prop-types";


function Profile({ fullName, bio, profession, children ,handleName}) {
console.log(handleName);
const handleClick=()=>{
    handleName(fullName)
}

  return (
    <div>
      <div>
        <span><b>FullName: </b>{fullName} </span>
      </div>
      <div>
        <span><b>Bio: </b>{bio}</span>
      </div>
      <div>
        <span> <b>Profession: </b>{profession}</span>
      </div>
      <div>{children}</div>
      <div>
        <button onClick={handleClick}>Say Name!</button>
      </div>
    </div>
  );
}
Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func
   };
export default Profile;
