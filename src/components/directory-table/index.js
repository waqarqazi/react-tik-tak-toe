/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import DatePicker from 'components/date-picker';
import TextField from 'components/textfield';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import InfiniteScroll from 'react-infinite-scroll-component';
import Checkbox from './checkbox';
import style from './directory-table.module.scss';
import moment from 'moment';

import Select from 'react-select';

const DirectoryTable = ({
  columns,
  fetchData,
  data,
  loading,
  upDateCollection,
  onRowClick,
  editable,
  editItems,
  items,
  setItems,
  setSortTable,
  sortTable,
  setEditItems,
}) => {
  const { control, errors } = useForm();

  //  const [items, setItems] = useState(data);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  //const [editItems, setEditItems] = useState([]);

  useEffect(() => {
    fetchData(sortTable.sort, sortTable.sortBy, items.length + sortTable.limit);
  }, [sortTable]);

  useEffect(() => {
    setItems(data);
  }, [data]);

  const mapMultiSelect = (item, index, key) =>
    updateColumn({
      columnKey: key,
      index: index,
      value: item?.map((ele) => {
        return ele.value;
      }),
    });

  const updateColumn = ({ columnKey, index, value }) => {
    setEditItems((prev) => {
      const newArr = [...prev];
      newArr[index][columnKey] = value;
      newArr[index].isUpdated = true;
      return newArr;
    });
  };

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(items?.map((li, index) => index + '-checkbox'));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  return (
    <>
      <div className={style.innerScrollDiv}>
        <div className={style.main}>
          <InfiniteScroll
            dataLength={items?.length}
            next={async () => {
              await fetchData(
                sortTable.sort,
                sortTable.sortBy,
                items.length + sortTable.limit
              );
            }}
            hasMore={true}
            scrollableTarget={'fff'}
          >
            <table className={style.table}>
              <thead>
                <tr>
                  <th>
                    <Checkbox
                      type="checkbox"
                      id="selectAll"
                      handleClick={handleSelectAll}
                      isChecked={isCheckAll}
                    />
                  </th>
                  {columns?.map((column) => (
                    <th
                      onClick={() => {
                        setSortTable((prev) => ({
                          ...prev,
                          sortBy: column.key,
                          sort: prev.sort == 'asc' ? 'desc' : 'asc',
                        }));
                      }}
                      key={column.key}
                    >
                      {column.title}
                    </th>
                  ))}
                  <th>+</th>
                </tr>
              </thead>

              <tbody>
                {(editable ? editItems : items)?.map((val, key) => {
                  return (
                    <>
                      <tr
                        style={{ cursor: 'pointer' }}
                        key={key}
                        onClick={() => {
                          if (!editable) onRowClick(val);
                        }}
                      >
                        <td>
                          <Checkbox
                            key={key + '-checkbox'}
                            type="checkbox"
                            id={key + '-checkbox'}
                            handleClick={handleClick}
                            isChecked={isCheck.includes(key + '-checkbox')}
                          />
                        </td>

                        {columns?.map((column, columnKey) =>
                          editable ? (
                            <td key={column.key + key + columnKey}>
                              {column.inputType == 'text' ||
                              column.inputType == 'number' ? (
                                <TextField
                                  value={val[column.key]}
                                  type={column.inputType}
                                  className={style.field}
                                  onChange={(e) =>
                                    updateColumn({
                                      columnKey: column.key,
                                      index: key,
                                      value: e.target.value,
                                    })
                                  }
                                />
                              ) : column.inputType == 'date' ? (
                                <DatePicker
                                  inputClass={style.datepickerStyle}
                                  id={column.key + key + columnKey}
                                  name={column.key + key + columnKey}
                                  control={control}
                                  errorMessage={errors?.date?.message}
                                  defaultVal={
                                    val[column.key]
                                      ? moment(
                                          val[column.key],
                                          'DD/MM/YYYY'
                                        ).toDate()
                                      : undefined
                                  }
                                  handleChange={(value) => {
                                    updateColumn({
                                      columnKey: column.key,
                                      index: key,
                                      value: moment(value).format('DD/MM/YYYY'),
                                    });
                                  }}
                                />
                              ) : column.inputType == 'select' ? (
                                <select
                                  value={val[column.key]}
                                  onChange={(e) => {
                                    updateColumn({
                                      columnKey: column.key,
                                      index: key,
                                      value: e.target.value,
                                    });
                                  }}
                                >
                                  {column.options?.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                      {opt.label}
                                    </option>
                                  ))}
                                </select>
                              ) : column.inputType == 'multi-select' ? (
                                <Select
                                  styles={styles}
                                  closeMenuOnSelect={false}
                                  isMulti
                                  options={column?.options}
                                  defaultValue={val[column.key]?.map((ele) => ({
                                    label: ele,
                                    value: ele,
                                  }))}
                                  onChange={(item) =>
                                    mapMultiSelect(item, key, column.key)
                                  }
                                />
                              ) : (
                                ''
                              )}
                            </td>
                          ) : (
                            <td
                              onClick={() => console.log(val[column.key])}
                              key={column.key}
                            >
                              {column.formatter
                                ? column.formatter(val[column.key])
                                : val[column.key]}
                            </td>
                          )
                        )}
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};

export default DirectoryTable;
const styles = {
  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: 'papayawhip',
    };
  },
};
