import { createLazyFileRoute, Link } from "@tanstack/react-router";
import useIndex from "../queries/useIndex";
import { useMemo } from "react";
import { format } from "date-fns";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: index } = useIndex();
  const formattedIndex = useMemo(() => {
    return index?.map((post) => {
      const year = parseInt(post.date.substring(0, 4));
      const month = parseInt(post.date.substring(4, 6)) - 1;
      const day = parseInt(post.date.substring(6, 8), 10);
      const date = new Date(year, month, day);
      return ({...post, date: format(date, "MMMM do, yyyy")})
    })
  }, [index])

  return (
    <div>
      <h2>Recent Posts</h2>
      <div id="index">
        {formattedIndex?.map((post, i) => (
          <div key={`index-${i}`} className="indexRow">
            <p className="index-date">{post.date}</p>
            &nbsp;
            <span className="dots"></span>
            <Link 
              to={index ? `/posts/${index[i].date}` : "#"}
              className="indexTitle"
            >
              {post.title}
            </Link>
          </div>
        ))}
      </div>
    
    </div>
  )
}
