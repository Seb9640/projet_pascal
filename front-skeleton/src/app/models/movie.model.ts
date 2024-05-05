// Modèle pour la table des films
export interface Movie {
  id: number;
  title: string;
  director: string | null;
  release_date: string | null;
  synopsis: string | null;
  poster_url: string | null;
  updatedAt?: string| Date | null;
  createdAt?: string| Date;
}
