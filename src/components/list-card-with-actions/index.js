import React, { useEffect, useState } from "react";
import * as Yup from "yup";

import GenericTable from "components/generic-table";
import Checkbox from "components/checkbox";

import style from "./directory-table.module.scss";
import { useNavigate } from "react-router-dom";

const ListCardWithActions = ({
  editTable,
  setEditTable,
  rows,
  columns,
  onRowClick,
}) => {
  const [dataSource, setDataSource] = useState([...rows]);
  const navigate = useNavigate();
  useEffect(() => {
    setDataSource([...rows]);
  }, [rows]);

  return (
    <div>
      <div className={style.tableWidth}>
        <GenericTable
          columns={columns}
          dataSource={dataSource}
          isEditMode={editTable}
          onSaveSubmit={(updatedRows) => {
            setDataSource([...updatedRows]);
            setEditTable(false);
          }}
          height={"500px"}
          formId="hook-form"
          schema={schema}
          onSort={(sort) => console.log(sort)}
          renderNoDataFound={() => (
            <tr>
              <td colSpan={columns.length}>No Data Found</td>
            </tr>
          )}
          onScrollBottom={() => {
            console.log("Scrolled to bottom, Do pagination logic here");
          }}
          onRowClick={onRowClick}
          selectable={true}
          // renderSelector={(props) => (
          //   <>
          //     {/* <Checkbox containerClass={style.checkboxContainer} {...props} /> */}
          //   </>
          // )}
          classes={{
            table: style.table,
            th: style.th,
            tableBody: style.tableRow,
          }}
        />
      </div>
    </div>
  );
};

export default ListCardWithActions;

const schema = Yup.object({
  data: Yup.array().of(
    Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string()
        .email("Please input a valid email")
        .required("Email is required"),
      username: Yup.string().required("Username is required"),
    })
  ),
});
