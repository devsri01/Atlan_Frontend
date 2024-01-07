import React from "react";
import SqlQuerry from "../../components/sqlquery/sqlsuggession/SqlQuery";
import MergeTable from "../../components/tablecomponent/MergeTable";
import './Homepage.css';


const Homepage = () => {
  return (
    <>
      <div className="homecontainer">
        <SqlQuerry />
        <MergeTable/>
      </div>
    </>
  );
};

export default Homepage;
