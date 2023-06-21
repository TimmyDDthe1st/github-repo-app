import Title from "../components/Title";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import { IGetAllDataReponse } from "./api/repositories";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<IGetAllDataReponse>();
  const baseUrl = `/api/repositories/?authorName=${search}`;

  useEffect(() => {
    setLoading(true);
    const effect = async () => {
      try {
        const res = await fetch(baseUrl);
        const repos = await res.json();
        setData(repos);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };

    effect();
  }, [baseUrl]);

  return (
    <ThemeProvider theme={theme}>
      <Title title="Github Repositories" />
      <Layout repositories={data} setSearch={setSearch} loading={loading} />
    </ThemeProvider>
  );
}
