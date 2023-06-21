import { Container, Typography } from "@mui/material";
import List from "./List";
import { IGetAllDataReponse } from "@/pages/api/repositories";
interface ILayoutProps {
  repositories: IGetAllDataReponse;
}

export default function Layout({ repositories }: ILayoutProps) {
  return (
    <>
      <Container maxWidth="lg" sx={{ pt: 3 }}>
        <Typography variant="h1" sx={{ mb: 3, textAlign: 'center' }}>Github Repository Viewer</Typography>
        <List repositories={repositories} />
      </Container>
    </>
  );
}
