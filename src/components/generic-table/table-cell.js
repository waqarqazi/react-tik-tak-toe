import React from "react";

const TableCell = ({
  column,
  control,
  index,
  row,
  register,
  errors,
  isEditMode,
}) => {
  const inputName = `data.${index}.${column.key}`;
  let message = "";
  if (Object.keys(errors).length && errors?.data[index])
    message = errors?.data[index][column.key]?.message;

  if (column.render) {
    return (
      <>
        <td>
          {column?.render(
            {
              value: row[column.key],
              errorMessage: message,
              register,
              inputName,
              control,
            },
            column,
            isEditMode && column.editable
          )}
        </td>
      </>
    );
  } else {
    return (
      <td>
        {isEditMode && column.editable ? (
          <>
            <input type={column.type} {...register(inputName)} />
            {message && <p> {message} </p>}
          </>
        ) : (
          row[column.key]
        )}
      </td>
    );
  }
};

export default TableCell;
