import Title from "../components/Title";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import { getAllData, IGithubRepository } from "./api/repositories";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

interface HomeProps {
  allRepositories: IGithubRepository[];
}

export default function Home({ allRepositories }: HomeProps) {
  const [repositories, setRepositories] = useState<any[]>([]);

  useEffect(() => {
    const effect = async () => {
      try {
        const response = await getAllData();
        const allRepositories = response.data;
        setRepositories(allRepositories);
      } catch (error) {
        console.error(error);
      }
    }
    effect();
    console.log(repositories);
  }, [repositories])

  return (
    <ThemeProvider theme={theme}>
      <Title title="Github Repositories" />
      {allRepositories && <Layout repositories={allRepositories} />}
    </ThemeProvider>
  );
}
