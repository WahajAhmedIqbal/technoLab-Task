import React from "react";
import { useSelector } from "react-redux";

const TablePage = () => {
  const userDetail = useSelector((state) => state.user);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>E-mail</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{userDetail.firstName}</td>
            <td>{userDetail.lastName}</td>
            <td>{userDetail.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TablePage;
