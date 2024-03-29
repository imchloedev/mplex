export interface IContent {
  adult: string;
  backdrop_path: string;
  budget?: number;
  genres?: string[];
  homepage?: string;
  imdb_id?: string;
  id: string;
  name?: string;
  title?: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids?: string[];
  popularity: number;
  status?: string;
  first_air_date?: string;
  release_date?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  production_companies?: string[];
  production_countries?: string[];
  revenue?: number;
  runtime?: number;
  episode_run_time?: number[];
  number_of_episodes?: number;
  number_of_seasons?: number;
}

export interface IContentList<T> {
  content?: T[];
}
