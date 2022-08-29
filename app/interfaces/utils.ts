export const enum MpaRating {
  Empty = "",
  R = "R",
}

export const enum Stat {
  Ok = "ok",
}

export interface Torrent {
  url: string;
  hash: string;
  quality: Quality;
  type: Type;
  seeds: number;
  peers: number;
  size: string;
  size_bytes: number;
  date_uploaded: string;
  date_uploaded_unix: number;
}

export const enum Quality {
  The2160P = "2160p",
  The1080P = "1080p",
  The720P = "720p",
  The3D = "3D",
}

export const enum Type {
  Bluray = "bluray",
  Web = "web",
}

export interface Cast {
  name: string;
  character_name: string;
  url_small_image: string;
  imdb_code: string;
}

export interface Meta {
  server_time: number;
  server_timezone: string;
  api_version: number;
  execution_time: string;
}
