import { Container, Input, Typography } from "@mui/material";
import List from "./List";
import { IGetAllDataReponse } from "@/pages/api/repositories";
import NotFound from "./List/NotFound";
interface ILayoutProps {
  loading: boolean;
  repositories?: IGetAllDataReponse;
  setSearch: (search: string) => void;
}

export default function Layout({
  repositories,
  setSearch,
  loading,
}: ILayoutProps) {
  return (
    <>
      <Container maxWidth="lg" sx={{ pt: 3 }}>
        <Typography variant="h1" sx={{ mb: 3, textAlign: "center" }}>
          Github Repository Viewer
        </Typography>
        <Input
          placeholder="Enter a Github username..."
          fullWidth
          sx={{ mb: 3 }}
          onChange={(event) => setSearch(event.target.value)}
        />
        {repositories && repositories.repoData.length > 0 ? (
          <List repositories={repositories} />
        ) : (
          <NotFound loading={loading} />
        )}
      </Container>
    </>
  );
}
