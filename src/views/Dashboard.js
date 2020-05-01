import React from "react";
import Auth from "../utils/Auth";
import { useHistory } from "react-router-dom";
import { PublicPaths } from "../routes";
import { getCount } from "../redux/example/countReducer";
import { useSelector } from "react-redux";

const Dashboard = () => {
  let history = useHistory();
  const count = useSelector(getCount);

  const handleLogOut = () => {
    Auth.removeToken();
    history.push(PublicPaths.LOGIN);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>The value of count in the store is {count}</p>
      <button onClick={handleLogOut}> LOG OUT</button>
    </div>
  );
};

export default Dashboard;
