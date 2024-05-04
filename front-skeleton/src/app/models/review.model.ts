// Modèle pour la table des avis
export interface Review {
    id?: number;
    user_id?: number;
    entity_id?: number;
    entity_type?: 'movie' | 'place';
    rating: number;
    full_name: string,
    email: string,
    summary: string | null;
    review: string | null;
    image: string | null;
    updated_at?: string | null;
    created_at?: string;
}