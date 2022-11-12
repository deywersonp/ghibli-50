import { useQuery } from "react-query";
import { api } from "../services/api";

import { Film } from '../interfaces';

export type User = {
  id: string;
  name: string;
  email: string;
  created_at: string;
};

type GetFilmsResponse = {
  films: Film[];
  totalCount: number;
};

export const getFilms = async (page: number): Promise<GetFilmsResponse> => {
  const { data, headers } = await api.get<GetFilmsResponse>('/films', {
    params: {
      page,
    }
  });

  const totalCount = Number(headers['x-total-count']);
  const films = data.films.filter(film => film.id < 22);

  return {
    films,
    totalCount,
  };
};

export const useFilms = (page: number) => {
  return useQuery(['films', page], () => getFilms(page), {
    staleTime: 1000 * 2 * 60, //2 minutos
  });
}