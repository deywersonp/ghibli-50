export interface Film {
  id: number;
  banner: string;
  title: string;
  description: string;
  director: string;
  producer: string;
};

export interface GhibliFilmsResponse {
  added_films: {
    count: number;
  }
};