import * as React from 'react';
import PropTypes from 'prop-types';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';

const CustomToolbar = ({ setFilterButtonEl }) => (
  <GridToolbarContainer>
    <GridToolbarFilterButton ref={setFilterButtonEl} />
  </GridToolbarContainer>
);

CustomToolbar.propTypes = {
  setFilterButtonEl: PropTypes.func.isRequired,
};

export default function CustomFilterPanelPosition(props) {

  const [filterButtonEl, setFilterButtonEl] = React.useState(null);

  return (
    <div style={{ height: '85vh', width: '100%', backgroundColor:"ghostwhite"}}>
      <DataGrid
        columns={props.columns}
        rows={props.rows}
        components={{
          Toolbar: CustomToolbar,
        }}
        
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}
        componentsProps={{
          panel: {
            anchorEl: filterButtonEl,
          },
          toolbar: {
            setFilterButtonEl,
          },
        }}
      />
    </div>
  );
}
