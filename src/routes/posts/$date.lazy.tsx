import { createLazyFileRoute } from "@tanstack/react-router";
import useArticle from "../../queries/useArticle";

export const Route = createLazyFileRoute("/posts/$date")({
    component: PostComponent
})

function PostComponent(){
    const { date } = Route.useParams();
    const { data: Content } = useArticle(date);

    return Content ? (<Content /> ): null
}