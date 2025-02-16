import { useQuery } from "@tanstack/react-query"

const useArticle = (date: string) => {
    return useQuery<string>({
        queryKey: ["ARTICLE", date],
        queryFn: async () => {
            const response = await fetch(`https://articles.daviddunham.dev/articles/${date}.mdx`);
            const article = await response.text();
            return article;
        },
        staleTime: Infinity,
        gcTime: Infinity
    })
};

export default useArticle;