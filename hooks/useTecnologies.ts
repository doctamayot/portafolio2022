import useSWR, { SWRConfiguration } from "swr";

const fetcher = (...args: [key: string]) =>
  fetch(...args).then((res) => res.json());

export const useTecnologies = (url: string, config: SWRConfiguration = {}) => {
  const { data, error } = useSWR(`/api${url}`, config);

  return {
    tecnologies: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};

export const useProjects = (url: string, config: SWRConfiguration = {}) => {
  const { data, error } = useSWR(`/api${url}`, config);

  return {
    projects: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};
