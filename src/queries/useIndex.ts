import { useQuery } from "@tanstack/react-query"

type Index = {
    date: string;
    title: string;
}[]

const useIndex = () => {
    return useQuery<Index>({
        queryKey: ["INDEX"],
        queryFn: () => {
            return [{
                title: "To Begin Again",
                date: "20250209"
            }];
        }
    })
};

export default useIndex;