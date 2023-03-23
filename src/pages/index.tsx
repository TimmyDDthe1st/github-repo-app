import ArticleList from "@/components/ArticleList";
import Title from "../components/Title";
interface Article {
  body: string;
  id: number;
  title: string;
  userId: number;
}
interface HomeProps {
  articles: Article[];
}

export default function Home({ articles }: HomeProps) {
  return (
    <div>
      <Title title="home" />
      <h1>A nextJS blog</h1>
      <ArticleList articles={articles} />
      <a href="https://youtu.be/mTz0GXj8NN0?t=2010">
        https://youtu.be/mTz0GXj8NN0?t=2010
      </a>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/posts?_limit=6");
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
