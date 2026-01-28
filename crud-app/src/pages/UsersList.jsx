import React, { useEffect, useState } from "react";
import api from "../api/axios";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const UsersList = () => {
  const [users, setUsers] = useState();
  const navigate = useNavigate();

  const fetchUsers = async () => {
    const res = await api.get("/users");

    console.log(res);
    setUsers(res.data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const actionTemplate = (rowData) => (
    <>
      <Button
        icon="pi pi-pencil"
        className="p-button-sm p-button-warning mr-2"
        onClick={() => navigate(`/edit/${rowData.id}`)}
      />
      <Button icon="pi pi-trash" className="p-button-sm p-button-danger" />
    </>
  );
  return (
    <div>
      <div className="flex justify-content-end mb-2 align-items-center">
        <Button
          label="Add User"
          icon="pi pi-plus"
          size="small"
          onClick={() => navigate("/add")}
        />
      </div>
      <DataTable
        value={users}
        showGridlines
        paginator
        stripedRows
        filterDisplay="row"
        rows={5}
        size="small"
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column
          field="name"
          filter
          filterPlaceholder="Search"
          header="Name"
          sortable
        ></Column>
        <Column
          field="username"
          filter
          filterPlaceholder="Search"
          header="UserName"
          sortable
        ></Column>
        <Column
          field="email"
          filter
          filterPlaceholder="Search"
          header="Email"
          sortable
        ></Column>
        <Column
          field="age"
          filter
          filterPlaceholder="Search"
          header="Age"
          sortable
        ></Column>
        <Column
          style={{ width: "13%" }}
          header="Action"
          body={actionTemplate}
        ></Column>
      </DataTable>
    </div>
  );
};

export default UsersList;
