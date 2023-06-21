import Title from "../components/Title";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import { IGetAllDataReponse } from "./api/repositories";

export default function Home() {
  const [data, setData] = useState<IGetAllDataReponse>()
  const baseUrl = '/api/repositories';

  useEffect(() => {
        fetch(baseUrl)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))

    },[])

  {console.log(data)}

  return (
    <ThemeProvider theme={theme}>
      <Title title="Github Repositories" />
      {data && <Layout repositories={data} />}
    </ThemeProvider>
  );
}
