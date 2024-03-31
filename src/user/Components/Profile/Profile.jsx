import React from "react";
import ProfileComponent from "./ProfileComponent";
import axios from "axios";

const updateUserProfileApi = async (
  name,
  lastName,
  phoneNumber,
  address,
  country,
  state,
  password,
  city,
  zipcode
) => {
  const { data } = await axios.put("http://localhost:3001/api/users/profile", {
    name,
    lastName,
    phoneNumber,
    address,
    country,
    state,
    password,
    city,
    zipcode,
  });
  console.log(data);

  return data;
};

function Profile() {
  return <ProfileComponent updateUserProfileApi={updateUserProfileApi} />;
}

export default Profile;
