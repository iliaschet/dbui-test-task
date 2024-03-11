import { useGetListQuery } from '../api';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export function Table() {
  const { data = [] } = useGetListQuery('');

  return (
    <DataGrid
      getRowId={(row) => row.phone}
      initialState={{
        pagination: { paginationModel: { pageSize: 5 } },
      }}
      pageSizeOptions={[5, 10, 25]}
      columns={[
        { field: 'name', headerName: 'Name', width: 250 },
        { field: 'phone', headerName: 'Phone', width: 250 },
        { field: 'email', headerName: 'Email', width: 250 },
        { field: 'country', headerName: 'Country', width: 250 },
        { field: 'online', headerName: 'Online', type: 'boolean', width: 250 },
      ]}
      rows={data}
      slots={{
        toolbar: GridToolbar,
      }}
      slotProps={{
        toolbar: {
          showQuickFilter: true,
        },
      }}
    />
  );
}
