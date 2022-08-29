import type { Movie } from "./movie-list";
import type { Meta } from "./utils";

export interface MovieSuggestionResponse {
  status: string;
  status_message: string;
  data: Data;
  "@meta": Meta;
}

export interface Data {
  movie_count: number;
  movies: [Movie, Movie, Movie, Movie];
}
