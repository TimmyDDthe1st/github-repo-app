import { Container } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Container maxWidth="sm" sx={{ pt: 3 }}>
        <main>{children}</main>
      </Container>
    </>
  );
}
