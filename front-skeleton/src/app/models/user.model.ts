// Modèle pour la table des utilisateurs
export interface User {
    id: number;
    first_name: string;
    last_name: string;
    birthdate: string | null;
    username: string; // 
    email: string; // 
    password: string;
    image: Buffer | null;
    updated_at: string | null;
    created_at: string;
}