/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import TableCell from "./table-cell";

import fileGray from "assets/icons/file-gray.svg";
import Checkbox from "components/checkbox";

const GenericTable = ({
  columns = [],
  dataSource = [],
  isEditMode = false,
  onSaveSubmit = (data) => console.log(data),
  schema = null,
  onSort = (sort) => console.log(sort),
  renderNoDataFound = null,
  height = "100%",
  width = "100%",
  onScrollBottom = () => console.log("Scrolled to Bottom"),
  formId = "hook-form",
  isDragable = false,
  selectable = false,
  renderSelector = null,
  classes = null,
  onRowClick = (id) => console.log(id),
}) => {
  const [rows, setRows] = useState([]);
  const [sort, setSort] = useState([]);

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setRows([...dataSource]);
  }, [dataSource]);

  useEffect(() => {
    methods.reset({ data: [...rows] });
  }, [rows]);

  const onSubmit = (data) => {
    onSaveSubmit([...data.data]);
  };

  const handleSort = (sortBy) => {
    let tempSort = [...sort];
    const index = tempSort.findIndex((s) => s.sortBy === sortBy);
    if (index === -1) {
      tempSort.push({
        sortBy: sortBy,
        order: "asc",
      });
    } else {
      sort[index].order = sort[index].order === "asc" ? "desc" : "asc";
    }
    setSort([...tempSort]);
    onSort(tempSort);
  };

  const handleDragEnd = (e) => {
    if (!e.destination) return;
    let tempData = Array.from(rows);
    let [source_data] = tempData.splice(e.source.index, 1);
    tempData.splice(e.destination.index, 0, source_data);
    setRows(tempData);
  };

  return (
    <div
      style={{
        height,
        overflowY: "auto",
        width,
      }}
      onScroll={(e) => {
        if (
          e.target.scrollHeight - e.target.scrollTop <
          e.target.clientHeight * 1.1
        )
          onScrollBottom();
      }}
    >
      <form id={formId} onSubmit={methods.handleSubmit(onSubmit)}>
        <div>
          <DragDropContext onDragEnd={handleDragEnd}>
            <table className={classes?.table}>
              <thead className={classes?.thead}>
                <tr>
                  {isDragable && !isEditMode && (
                    <th className={classes?.th}></th>
                  )}
                  {/* {selectable && !isEditMode && (
                    <th className={classes?.th}>
                      <Checkbox />
                    </th>
                  )} */}
                  {columns.map(({ name, key }) => (
                    <th
                      onClick={() => handleSort(key)}
                      key={key}
                      className={classes?.th}
                    >
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>

              <Droppable
                droppableId="droppable-1"
                isDropDisabled={!isDragable || isEditMode}
              >
                {(provider) => (
                  <tbody
                    className="text-capitalize"
                    ref={provider.innerRef}
                    {...(isDragable &&
                      !isEditMode && {
                        ...provider.droppableProps,
                      })}
                  >
                    {rows.length > 0 ? (
                      rows.map((row, key) => (
                        <Draggable
                          key={key}
                          draggableId={key.toString()}
                          index={key}
                          isDragDisabled={!isDragable || isEditMode}
                        >
                          {(provider) => (
                            <tr
                              className={classes?.tableBody}
                              key={key}
                              {...(isDragable &&
                                !isEditMode && {
                                  ...provider.draggableProps,
                                })}
                              ref={provider.innerRef}
                              onClick={() => !isEditMode && onRowClick(row)}
                            >
                              {isDragable && !isEditMode && (
                                <td
                                  {...provider.dragHandleProps}
                                  style={{
                                    padding: "20px 10px",
                                  }}
                                >
                                  {" "}
                                  <img src={fileGray} alt="" />{" "}
                                </td>
                              )}

                              {/* {selectable && !isEditMode && (
                                <td
                                  style={{
                                    padding: "20px 10px",
                                  }}
                                >
                                  {renderSelector()}
                                </td>
                              )} */}
                              {columns.map((col, colKey) => (
                                <TableCell
                                  register={methods.register}
                                  control={methods.control}
                                  errors={methods.formState.errors}
                                  column={col}
                                  key={colKey - 1}
                                  isEditMode={isEditMode}
                                  row={row}
                                  index={key}
                                />
                              ))}
                            </tr>
                          )}
                        </Draggable>
                      ))
                    ) : renderNoDataFound ? (
                      renderNoDataFound()
                    ) : (
                      <tr>
                        <td colSpan={columns.length}>No Data Found</td>
                      </tr>
                    )}

                    {provider.placeholder}
                  </tbody>
                )}
              </Droppable>
            </table>
          </DragDropContext>
        </div>
      </form>
    </div>
  );
};

export default GenericTable;
