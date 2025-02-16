import { compile, run } from "@mdx-js/mdx";
import { useQuery } from "@tanstack/react-query"
import { MDXContent } from "mdx/types";
import remarkFrontmatter from "remark-frontmatter";
import * as runtime from "react/jsx-runtime";

const useArticle = (date: string) => {
    return useQuery<MDXContent>({
        queryKey: ["ARTICLE", date],
        queryFn: async () => {
            const response = await fetch(`https://articles.daviddunham.dev/articles/${date}.mdx`);
            const article = await response.text();
            const file = String(await compile(article, { remarkPlugins: [remarkFrontmatter], outputFormat: "function-body"}))
            const mdxModule = await run(file, {...runtime, baseUrl: import.meta.url})
            return mdxModule.default;
        },
        staleTime: Infinity,
        gcTime: Infinity
    })
};

export default useArticle;