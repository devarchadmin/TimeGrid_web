"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Pagination from "@mui/material/Pagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { visuallyHidden } from "@mui/utils";
import useMaterialTableHook from "@/hooks/useMaterialTableHook";
import HolidayUpdateModal from "./HolidayUpdateModal";
import { holidayHeadCells } from "@/data/table-head-cell/table-head";
import { holidayData } from "@/data/hrm/holiday-data";
import { IHoliday } from "@/interface/table.interface";
import DeleteModal from "@/components/common/DeleteModal";
import TableControls from "@/components/elements/SharedInputs/TableControls";

const HolidayTable = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [editData, setEditData] = useState<IHoliday | null>(null);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<number>(0);
  const {
    order,
    orderBy,
    selected,
    page,
    rowsPerPage,
    searchQuery,
    paginatedRows,
    filteredRows,
    handleDelete,
    handleRequestSort,
    handleClick,
    handleChangePage,
    handleChangeRowsPerPage,
    handleSearchChange,
  } = useMaterialTableHook<IHoliday | any>(holidayData, 10);

  return (
    <>
      <div className="card__wrapper">
        <div className="manaz-common-mat-list w-full table__wrapper table-responsive mat-list-without-checkbox">
          <TableControls
            rowsPerPage={rowsPerPage}
            searchQuery={searchQuery}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            handleSearchChange={handleSearchChange}
          />
          <Box sx={{ width: "100%" }} className="table-responsive">
            <Paper sx={{ width: "100%", mb: 2 }}>
              <TableContainer className="table mb-[20px] hover multiple_tables w-full">
                <Table
                  aria-labelledby="tableTitle"
                  className="whitespace-nowrap"
                >
                  <TableHead>
                    <TableRow className="table__title">
                      {holidayHeadCells.map((headCell) => (
                        <TableCell
                          className="table__title"
                          key={headCell.id}
                          sortDirection={
                            orderBy === headCell.id ? order : false
                          }
                        >
                          <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : "asc"}
                            onClick={() => handleRequestSort(headCell.id)}
                          >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                              <Box component="span" sx={visuallyHidden}>
                                {order === "desc"
                                  ? "sorted descending"
                                  : "sorted ascending"}
                              </Box>
                            ) : null}
                          </TableSortLabel>
                        </TableCell>
                      ))}
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className="table__body">
                    {paginatedRows.map((row, index) => (
                      <TableRow
                        key={index}
                        selected={selected.includes(index)}
                        onClick={() => handleClick(index)}
                      >
                        <TableCell className="table__designation">
                          {row?.date}
                        </TableCell>
                        <TableCell className="table__designation">
                          {row?.day}
                        </TableCell>
                        <TableCell className="table__department">
                          {row?.holidayName}
                        </TableCell>
                        <TableCell className="table__icon-box">
                          <div className="flex items-center justify-start gap-[10px]">
                            <button
                              type="button"
                              className="table__icon edit"
                              onClick={(e) => {
                                e.stopPropagation();
                                setModalOpen(true);
                                setEditData(row);
                              }}
                            >
                              <i className="fa-sharp fa-light fa-pen"></i>
                            </button>
                            <button
                              className="removeBtn table__icon delete"
                              onClick={(e) => {
                                e.stopPropagation();
                                setDeleteId(index);
                                setModalDeleteOpen(true);
                              }}
                            >
                              <i className="fa-regular fa-trash"></i>
                            </button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Box>
          <Box className="table-search-box mt-[30px]" sx={{ p: 2 }}>
            <Box>
              {`Showing ${(page - 1) * rowsPerPage + 1} to ${Math.min(
                page * rowsPerPage,
                filteredRows.length
              )} of ${filteredRows.length} entries`}
            </Box>
            <Pagination
              count={Math.ceil(filteredRows.length / rowsPerPage)}
              page={page}
              onChange={(e, value) => handleChangePage(value)}
              variant="outlined"
              shape="rounded"
              className="manaz-pagination-button"
            />
          </Box>
        </div>
      </div>
      {modalOpen && editData?.holidayName && (
        <HolidayUpdateModal
          open={modalOpen}
          setOpen={setModalOpen}
          editData={editData}
        />
      )}

      {modalDeleteOpen && (
        <DeleteModal
          open={modalDeleteOpen}
          setOpen={setModalDeleteOpen}
          handleDeleteFunc={handleDelete}
          deleteId={deleteId}
        />
      )}
    </>
  );
};

export default HolidayTable;
