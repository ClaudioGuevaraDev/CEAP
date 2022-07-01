import MUIDataTable from "mui-datatables";

const options = {
  selectableRowsHideCheckboxes: true,
};

export default function DataTable({ title, data, columns }) {
  return (
    <MUIDataTable
      title={title}
      data={data}
      columns={columns}
      options={options}
    />
  );
}
