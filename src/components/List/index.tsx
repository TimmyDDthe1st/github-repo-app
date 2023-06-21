import { IGetAllDataReponse } from "@/pages/api/repositories";
import { Grid } from "@mui/material";
import RepoCard from "./RepoCard";

interface IListProps {
  repositories: IGetAllDataReponse;
}

export default function List({ repositories }: IListProps) {
  const { repoData } = repositories;
  return (
    <Grid container spacing={2}>
      {repoData.map((repo) => (
        <Grid item sm={12} md={3} key={repo.repoName}>
          <RepoCard repo={repo} />
        </Grid>
      ))}
    </Grid>
  );
}
