// Modèle pour la table des lieux
export interface Place {
    id: number;
    title: string;
    type_id: number;
    address: string | null;
    image_Url: string | null;
    opening_hours: string | null;
    updatedAt?: string| Date | null;
    createdAt?: string| Date;
}
