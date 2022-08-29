import { api } from "~/modules/axios";
import type { MovieResponse } from "~/interfaces/movie-list";
import type { Quality } from "~/interfaces/utils";
import type { MovieDetailsResponse } from "~/interfaces/movie";
import type { MovieSuggestionResponse } from "~/interfaces/movie-suggestion";

type Ran<T extends number> = number extends T ? number : _Range<T, []>;
type _Range<T extends number, R extends unknown[]> = R["length"] extends T
  ? R[number]
  : _Range<T, [R["length"], ...R]>;

interface MovieListParams {
  limit?: Exclude<Ran<51>, 0>;
  page?: number;
  quality?: Quality;
  minimum_rating?: Ran<10>;
  query_term?: string;
  genre?: string;
  sort_by?:
    | "title"
    | " year"
    | " rating"
    | " peers"
    | " seeds"
    | " download_count"
    | " like_count"
    | " date_added";
  order_by?: "asc" | "desc";
  with_rt_ratings?: true;
}

export function getMovieList(params: MovieListParams): Promise<MovieResponse> {
  return api.get("/list_movies.json", { params }).then((r) => r.data);
}

type MovieDetailsParams =
  | { movie_id: string; with_images?: true; with_cast?: true }
  | { imdb_id: string; with_images?: true; with_cast?: true };

export function getMovieById<P extends MovieDetailsParams>(
  params: P
): Promise<MovieDetailsResponse<P["with_images"], P["with_cast"]>> {
  return api.get("/movie_details.json", { params }).then((r) => r.data);
}

export function getMovieSuggestions(
  id: string
): Promise<MovieSuggestionResponse> {
  return api
    .get("/movie_suggestions.json", { params: { movie_id: id } })
    .then((r) => r.data);
}
