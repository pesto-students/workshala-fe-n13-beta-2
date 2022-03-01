import * as React from "react";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { Grid, Typography, CardContent, Card } from "@mui/material";

const RecentData = {
  Action: "You have applied for mechanic post in ABC company",
  When: "12h ago",
};

export default function LeftContent() {
  return (
    <Card
      sx={{
        mt: 1,
        border: 0,
        borderRadius: 4,
      }}
    >
      <CardContent>
        <Typography
          sx={{ p: 1 }}
          fontSize={16}
          style={{ fontWeight: 600 }}
          align="left"
        >
          {"Recent Activities"}
        </Typography>

        <Grid container sx={{ p: 2 }}>
          <Grid item xs={3} sm={3} md={3}>
            <AppsOutlinedIcon />
          </Grid>
          <Grid item xs={9} sm={9} md={9}>
            {RecentData.Action}
          </Grid>
        </Grid>
        <Typography
          variant="h5"
          fontSize={13}
          sx={{ mx: 8 }}
          style={{ fontWeight: 600 }}
        >
          {RecentData.When}
        </Typography>
      </CardContent>
    </Card>
  );
}
