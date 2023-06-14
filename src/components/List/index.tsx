import { IGithubRepository } from "@/pages/api/repositories";
import { Card, Typography } from "@mui/material";

interface IListProps {
  repositories: IGithubRepository[];
}

export default function List({
  repositories,
}: IListProps) {
  return (
    <Card sx={{ display: "flex", flexDirection: "column", p: 3 }}>
      <Typography>LIST</Typography>
    </Card>
  );
}
