import Card from "@mui/material/Card";
// import Icon from "@mui/material/Icon";
// import { TextField } from "@mui/material";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Grid from "@mui/material/Grid";

function BlockCard() {
  return (
    <Card>
      <MDBox m={1}>
        <Grid>
          <MDTypography />
        </Grid>
      </MDBox>
    </Card>
  );
}

export default BlockCard;
