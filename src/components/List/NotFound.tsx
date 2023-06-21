import { LinearProgress, Grid, Typography } from "@mui/material";

interface INotFoundProps {
  loading: boolean;
}

export default function NotFound({ loading }: INotFoundProps) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {loading ? (
          <LinearProgress />
        ) : (
          <Typography variant="h1">No Repositories Found</Typography>
        )}
      </Grid>
    </Grid>
  );
}
