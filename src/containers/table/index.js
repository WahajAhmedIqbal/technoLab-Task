// import { Table } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const TablePage = () => {
  const userDetail = useSelector((state) => state.user);

  const styles = {
    paddingRight: 50,
  };

  // const columns = [
  //   {
  //     title: "First Name",
  //     dataIndex: "firstName",
  //   },
  //   {
  //     title: "Last Name",
  //     dataIndex: "lastName",
  //   },
  //   {
  //     title: "Email",
  //     dataIndex: "email",
  //   },
  // ];
  // const data = [userDetail];
  // console.log(
  //   "🚀 ~ file: index.js ~ line 23 ~ TablePage ~ userDetail",
  //   userDetail
  // );

  return (
    <div className="table-box">
      {/* <Table columns={columns} dataSource={data} /> */}
      <table>
        <thead>
          <tr>
            <th style={styles}>First Name</th>
            <th style={styles}>Last Name</th>
            <th style={styles}>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {userDetail.map((item, index) => {
            return (
              <tr key={index + 1}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TablePage;
