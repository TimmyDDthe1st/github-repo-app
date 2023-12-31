import Head from "next/head";

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content="Github, Repository, Display" />
    </Head>
  );
}
