import {
  GridColumnMenu,
  useGridApiContext,
} from "@mui/x-data-grid";

const CustomColumnMenu = (props) => {
  const { hideMenu, currentColumn, open } = props;
  const apiRef = useGridApiContext();
  
  return (
    <GridColumnMenu
      hideMenu={hideMenu}
      currentColumn={currentColumn}
      open={open}
      slots={{
        // Keep default menu items
        columnMenuFilterItem: true,
        columnMenuHideItem: true,
      }}
      slotProps={{
        columnMenuFilterItem: {
          onClick: hideMenu,
        },
        columnMenuHideItem: {
          onClick: hideMenu,
        },
      }}
    />
  );
};

export default CustomColumnMenu;
