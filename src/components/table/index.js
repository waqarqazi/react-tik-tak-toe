/* eslint-disable no-unused-vars */
import React from "react";

import { Table } from "antd";
import Button from "components/button";
import useHelper from "./helper";

//import 'antd/lib/table/style/index.css';

const DataTable = () => {
  const {
    columns,
    dataEdit,
    data,
    rowSelection,
    editable,
    handleChange,
    setEditable,
  } = useHelper();

  const onSort = (field, order) => {};
  const onFilter = (field) => {};

  return (
    <>
      <Button text={"Export"} handleClick={() => setEditable(true)} />
      <Button text={"Create"} handleClick={() => setEditable(false)} />
      <div>
        <div
          style={{
            marginBottom: 20,
          }}
        ></div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          scroll={{ x: 200, y: true }}
          onChange={(filters, sorter) => {
            if (sorter) onSort(sorter.field, sorter.order);
            if (filters) onFilter(filters.field);
          }}
          rowSelection={rowSelection}
        />
      </div>
    </>
  );
};
export default DataTable;

// import React from 'react';

// import { Table } from 'antd';
// import { useState } from 'react';

// import style from './table.module.scss';

// const columns = [
//   {
//     title: 'First Name',
//     dataIndex: 'name',
//     key: 'name',
//     render: (text) => <div>{text}</div>,

//     // render: (text) => <a>{text}</a>,
//   },
//   {
//     title: 'Last Name',
//     dataIndex: 'lastname',
//     key: 'lastname',
//     render: (text) => <div>{text}</div>,
//   },
//   {
//     title: 'LI Status',
//     dataIndex: 'liStatus',
//     key: 'liStatus',
//     render: (text) => <div>{text}</div>,
//   },
//   {
//     title: 'LI Start Date',
//     key: 'liStartDate',
//     dataIndex: 'liStartDate',
//     render: (text) => <div>{text}</div>,
//   },
//   {
//     title: 'Placement Date',
//     key: 'placementDate',
//     dataIndex: 'placementDate',
//     render: (text) => <div>{text}</div>,
//   },
//   {
//     title: 'Demo',
//     key: 'demo',
//     dataIndex: 'demo',
//     render: (text) => <div>{text}</div>,
//   },
//   {
//     title: 'Gender',
//     key: 'gender',
//     dataIndex: 'gender',
//     render: (text) => <div>{text}</div>,
//   },
//   {
//     title: 'City',
//     key: 'city',
//     dataIndex: 'city',
//     render: (text) => <div>{text}</div>,
//   },
//   {
//     title: 'School',
//     dataIndex: 'school',
//     key: 'school',

//     render: (text) => <div>{text}</div>,
//   },
//   {
//     title: 'Grade Year',
//     dataIndex: 'gradeYear',
//     key: 'gradeYear',

//     render: (text) => <div>{text}</div>,
//   },
//   {
//     title: 'Parker Score',
//     dataIndex: 'parkerScore',
//     key: 'parkerScore',

//     render: (text) => <div>{text}</div>,
//   },
//   {
//     title: 'Bar Location',
//     dataIndex: 'barLocation',
//     key: 'barLocation',

//     render: (text) => <div>{text}</div>,
//   },
//   {
//     title: 'Last Bar Status',
//     dataIndex: 'lastBarStatus',
//     key: 'lastBarStatus',

//     render: (text) => <div>{text}</div>,
//   },
// ];
// const data = [
//   {
//     key: '1',
//     name: 'Fred',
//     lastname: 'Smith',
//     liStatus: 'Nontraditional Placement',
//     liStartDate: '07/22/22',
//     placementDate: '07/22/22',
//     demo: 'Asian, LGBTQIA+...',
//     gender: 'Male',
//     city: 'NY',
//     school: 'Subject',
//     gradeYear: '2019',
//     parkerScore: '2',
//     barLocation: 'DHA',
//     lastBarStatus: 'last',
//     age: 32,
//     address: 'NY No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//     enabled: true,
//   },
//   {
//     key: '1',
//     name: 'Fred',
//     lastname: 'Smith',
//     liStatus: 'Nontraditional Placement',
//     liStartDate: '07/22/22',
//     placementDate: '07/22/22',
//     demo: 'Asian, LGBTQIA+...',
//     gender: 'Male',
//     city: 'NY',
//     school: 'Subject',
//     gradeYear: '2019',
//     parkerScore: '2',
//     barLocation: 'DHA',
//     lastBarStatus: 'last',
//     age: 32,
//     address: 'NY No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '1',
//     name: 'Fred',
//     lastname: 'Smith',
//     liStatus: 'Nontraditional Placement',
//     liStartDate: '07/22/22',
//     placementDate: '07/22/22',
//     demo: 'Asian, LGBTQIA+...',
//     gender: 'Male',
//     city: 'NY',
//     school: 'Subject',
//     gradeYear: '2019',
//     parkerScore: '2',
//     barLocation: 'DHA',
//     lastBarStatus: 'last',
//     age: 32,
//     address: 'NY No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '1',
//     name: 'Fred',
//     lastname: 'Smith',
//     liStatus: 'Nontraditional Placement',
//     liStartDate: '07/22/22',
//     placementDate: '07/22/22',
//     demo: 'Asian, LGBTQIA+...',
//     gender: 'Male',
//     city: 'NY',
//     school: 'Subject',
//     gradeYear: '2019',
//     parkerScore: '2',
//     barLocation: 'DHA',
//     lastBarStatus: 'last',
//     age: 32,
//     address: 'NY No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '1',
//     name: 'Fred',
//     lastname: 'Smith',
//     liStatus: 'Nontraditional Placement',
//     liStartDate: '07/22/22',
//     placementDate: '07/22/22',
//     demo: 'Asian, LGBTQIA+...',
//     gender: 'Male',
//     city: 'NY',
//     school: 'Subject',
//     gradeYear: '2019',
//     parkerScore: '2',
//     barLocation: 'DHA',
//     lastBarStatus: 'last',
//     age: 32,
//     address: 'NY No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '1',
//     name: 'Fred',
//     lastname: 'Smith',
//     liStatus: 'Nontraditional Placement',
//     liStartDate: '07/22/22',
//     placementDate: '07/22/22',
//     demo: 'Asian, LGBTQIA+...',
//     gender: 'Male',
//     city: 'NY',
//     school: 'Subject',
//     gradeYear: '2019',
//     parkerScore: '2',
//     barLocation: 'DHA',
//     lastBarStatus: 'last',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
// ];

// const DataTable = () => {
//   const [selected, setSelected] = useState([]);

//   return (
//     <Table
//       className={style.tableStyle}
//       columns={columns}
//       rowClassName={() => style['table-row-light']}
//       dataSource={data}
//       pagination={false}
//       rowSelection={{
//         onChange: () => {
//           setSelected(selected);
//         },
//       }}
//     />
//   );
// };

// export default DataTable;
