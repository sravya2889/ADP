import axios from "axios";
import { useState, useEffect } from "react";
import AdpUsersAccordion from "./AdpUsersAccordion";
import FilterUsers from "./FilterUsers";

import "../App.css";

const getAdpUsersList = (setUsersList, setUsersListCopy) => {
  axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    let data = res.data;
    data.forEach((v) => delete v.address.geo);
    const userData = data.map((v) => getFilteredData(v));
    setUsersList(userData.flat());
    setUsersListCopy(userData.flat());
  });
};
const getFilteredData = (obj, final = {}) => {
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] != null) {
      getFilteredData(obj[key], final);
    } else {
      final[key] = obj[key];
    }
  }
  return final;
};

const AdpUsersData = () => {
  const [userList, setUsersList] = useState([]);
  const [userListCopy, setUsersListCopy] = useState([]);
  const filterUsers = (e) => {
    setUsersList(
      userListCopy.filter((val) => // filter data
        val.name.toLowerCase().includes(e.toLowerCase())
      )
    );
  };
  useEffect(() => {
    getAdpUsersList(setUsersList, setUsersListCopy);
  }, []);

  return (
    <div className="content">
      <FilterUsers filterUsers={filterUsers} />
      <AdpUsersAccordion userList={userList} />
    </div>
  );
};

export default AdpUsersData;
