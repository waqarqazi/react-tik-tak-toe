/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";

import DatePicker from "components/date-picker";
import SelecBox from "components/select-box";
import Tags from "components/tags";
import TextField from "components/textfield";

import { GENDER_OPTIONS } from "constants";
import { DEMO_OPTIONS } from "constants";

const useHelper = () => {
  //states
  const { control } = useForm();
  const [editable, setEditable] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [sortedInfo, setSortedInfo] = useState({});
  const [filteredInfo, setFilteredInfo] = useState({});

  //functions
  const onTableCellEdit = (index, key, newValue) => {};

  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };

  const setAgeSort = () => {
    setSortedInfo({
      order: "descend",
      columnKey: "age",
    });
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  //arrays
  const columns = [
    {
      title: "Task Id",
      dataIndex: "taskId",
      key: "taskId",
      editable: true,
      ellipsis: true,
      render: (text, { firstName }, index) => {
        return editable ? (
          <TextField
            placeholder="Task Id"
            // value={firstName}
            onChange={(e) => onTableCellEdit(index, firstName, e.target.value)}
          />
        ) : (
          <>{text}</>
        );
      },
    },
    {
      title: "Task Name",
      dataIndex: "taskName",
      key: "taskName",
      editable: true,
      ellipsis: true,
      render: (text, { lastName }, index) => {
        return editable ? (
          <TextField
            placeholder="Task Name"
            // value={lastName}
            onChange={(e) => onTableCellEdit(index, lastName, e.target.value)}
          />
        ) : (
          <>{text}</>
        );
      },
    },
    // {
    //   title: 'Li Status',
    //   key: 'tags',
    //   dataIndex: 'tags',
    //   editable: true,
    //   ellipsis: true,
    //   render: (text, { tags }, index) => {
    //     console.log({ tags });
    //     return editable ? (
    //       <SelecBox options={[]} control={control} name={'tags'} />
    //     ) : (
    //       <>
    //         <Tags key={tags} text={text} />
    //       </>
    //     );
    //   },
    // },

    // {
    //   title: 'Li Start Date',
    //   dataIndex: 'liStartDate',
    //   key: 'liStartDate',
    //   editable: true,
    //   ellipsis: true,
    //   render: (text, { liStartDate }, index) => {
    //     return editable ? (
    //       <DatePicker
    //         style={{}}
    //         name="liStartDate"
    //         control={control}
    //         placeholder={text}
    //       />
    //     ) : (
    //       <>{text}</>
    //     );
    //   },
    // },
    // {
    //   title: 'Placement Date',
    //   dataIndex: 'placementDate',
    //   key: 'placementDate',
    //   editable: true,
    //   ellipsis: true,
    //   render: (text, { placementDate }, index) => {
    //     return editable ? (
    //       <DatePicker
    //         name="placementDate"
    //         control={control}
    //         placeholder={text}
    //       />
    //     ) : (
    //       <>{text}</>
    //     );
    //   },
    // },

    {
      title: "Assigned to",
      dataIndex: "assignedTo",
      key: "assignedTo",
      editable: true,
      ellipsis: true,
      render: (text, { demo }, index) => {
        return editable ? (
          <SelecBox options={DEMO_OPTIONS} control={control} name={"demo"} />
        ) : (
          <>{text}</>
        );
      },
    },
    // {
    //   title: 'Gender',
    //   dataIndex: 'gender',
    //   key: 'gender',
    //   render: (text, { gender }, index) => {
    //     return editable ? (
    //       <SelecBox
    //         options={GENDER_OPTIONS}
    //         control={control}
    //         name={'gender'}
    //       />
    //     ) : (
    //       <>{text}</>
    //     );
    //   },
    // },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
      editable: true,
      ellipsis: true,
      render: (text, { city }, index) => {
        return editable ? (
          <TextField
            placeholder="Priority"
            value={city}
            onChange={(e) => onTableCellEdit(index, city, e.target.value)}
          />
        ) : (
          <>{text}</>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      editable: true,
      ellipsis: true,
      render: (text, { school }, index) => {
        return editable ? (
          <SelecBox options={[]} control={control} name={"school"} />
        ) : (
          <>{text}</>
        );
      },
    },
    {
      title: "Created on",
      dataIndex: "createdOn",
      key: "createdOn",
      editable: true,
      ellipsis: true,
      render: (text, { gradeYear }, index) => {
        return editable ? (
          <DatePicker name="createdOn" control={control} placeholder={text} />
        ) : (
          <>{text}</>
        );
      },
    },
  ];

  const data = [
    {
      key: "1",
      taskId: "John",
      taskName: "Kjf",
      // tags: ["nice"],

      assignedTo: "brown american",
      priority: "priority",
      status: "status",
      createdOn: "createdOn",
    },
    {
      key: "2",
      taskId: "John",
      taskName: "Kjf",
      // tags: ["nice"],

      assignedTo: "brown american",
      priority: "priority",
      status: "status",
      createdOn: "createdOn",
    },
    {
      key: "3",
      taskId: "John",
      taskName: "Kjf",
      // tags: ["nice"],

      assignedTo: "brown american",
      priority: "priority",
      status: "status",
      createdOn: "createdOn",
    },
    {
      key: "4",
      taskId: "John",
      taskName: "Kjf",
      // tags: ["nice"],

      assignedTo: "brown american",
      priority: "priority",
      status: "status",
      createdOn: "createdOn",
    },
  ];

  const dataEdit = [
    {
      key: "1",
      firstName: "John",
      lastName: "Brown",
      liStatus: [
        { value: "chocolate", label: "red" },
        { value: "strawberry", label: "blue" },
        { value: "vanilla", label: "green" },
      ],
      liStartDate: "07/22/22",
      placementDate: "07/22/22",
      demo: "brown, american",
      gender: "male",
      city: "lahore",
      school: "LSC",
      gradeYear: "2021",
      parkerScore: "test",
      barLocation: "text location",
      lastBarStatus: "status",
    },
    {
      key: "2",
      firstName: "Rana",
      lastName: "Brown",
      liStatus: [
        { value: "chocolate", label: "red" },
        { value: "strawberry", label: "blue" },
        { value: "vanilla", label: "green" },
      ],
      liStartDate: "07/22/22",
      demo: "brown, american",
      placementDate: "07/22/22",
      gender: "female",
      city: "lahore",
      school: "UMT",
      gradeYear: "2019",
      parkerScore: "test",
      barLocation: "text location",
      lastBarStatus: "status",
    },
    {
      key: "3",
      firstName: "Khan",
      lastName: "Brown",
      liStatus: [
        { value: "chocolate", label: "red" },
        { value: "strawberry", label: "blue" },
        { value: "vanilla", label: "green" },
      ],
      liStartDate: "07/22/22",
      placementDate: "07/22/22",
      demo: "brown, american",
      gender: "male",
      city: "lahore",
      school: "UOL",
      gradeYear: "2022",
      parkerScore: "test",
      barLocation: "text location",
      lastBarStatus: "status",
    },
  ];

  return {
    // columnsEdit,
    columns,
    dataEdit,
    data,
    editable,
    setEditable,
    sortedInfo,
    filteredInfo,
    handleChange,
    clearFilters,
    clearAll,
    setAgeSort,
    rowSelection,
  };
};
export default useHelper;
