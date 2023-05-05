import useSWR  from "swr";

const fetcher = (...args: [key: string]) =>
  fetch(...args).then((res) => res.json());

export const useTecnologies = (url: string) => {
  const { data, error } = useSWR(`/api${url}`, fetcher);

  return {
    tecnologies: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};
