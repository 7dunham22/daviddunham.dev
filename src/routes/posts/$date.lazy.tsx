import { createLazyFileRoute } from "@tanstack/react-router";
import useArticle from "../../queries/useArticle";
import { useEffect, useState } from "react";
import { compile, run } from "@mdx-js/mdx"
import remarkFrontmatter from "remark-frontmatter";
import { MDXModule } from "mdx/types";
import * as runtime from 'react/jsx-runtime'

export const Route = createLazyFileRoute("/posts/$date")({
    component: PostComponent
})

function PostComponent(){
    const { date } = Route.useParams();
    const { data: mdxText } = useArticle(date);
    const [ArticleFile, setArticleFile] = useState<MDXModule | null>(null);
    const Content = ArticleFile ? ArticleFile.default : null;

    useEffect(() => {
        const getVFile = async () => {
            if (mdxText) {
                const file = String(await compile(mdxText, { remarkPlugins: [remarkFrontmatter], outputFormat: "function-body"}));
                setArticleFile(await run(file, {...runtime, baseUrl: import.meta.url}));
            }
        }
        getVFile();
    }, [mdxText])

    return Content ? (<Content /> ): null
}