import Link from "next/link";
interface Article {
  body: string;
  id: number;
  title: string;
  userId: number;
}

interface ArticleListProps {
  articles: Article[];
}

export default function ArticleList({ articles }: ArticleListProps) {
  return (
    <div>
      {articles.map((article) => (
        <Link href={`/article/${article.id}`} key={article.id}>
          <h3 key={article.id}>{article.title}</h3>
        </Link>
      ))}
    </div>
  );
}
