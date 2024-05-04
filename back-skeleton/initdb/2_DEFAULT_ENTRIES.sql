-- Générer des données fictives pour la table des utilisateurs
INSERT INTO users (first_name, last_name, birthdate, username, password, image)
VALUES 
    ('John', 'Doe', '1990-05-15', 'john_doe', 'password123', NULL),
    ('Jane', 'Smith', '1985-10-20', 'jane_smith', 'securepass', NULL),
    ('Alice', 'Johnson', '1992-07-03', 'alice_j', 'mysecretpwd', NULL);

-- Générer des données fictives pour la table des films
INSERT INTO movies (title, director, release_date, synopsis, poster_url)
VALUES 
    ('The Matrix', 'Lana Wachowski, Lilly Wachowski', '1999-03-31', 'A computer hacker learns about the true nature of reality and his role in the war against its controllers.', 'https://example.com/poster1.jpg'),
    ('Inception', 'Christopher Nolan', '2010-07-16', 'A thief who enters the dreams of others to steal secrets from their subconscious.', 'https://example.com/poster2.jpg'),
    ('The Shawshank Redemption', 'Frank Darabont', '1994-10-14', 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', 'https://example.com/poster3.jpg');

-- Générer des données fictives pour la table des types de lieu
INSERT INTO place_types (name)
VALUES 
    ('Cinema'),
    ('Restaurant'),
    ('Bar'),
    ('Park');

-- Générer des données fictives pour la table des lieux
INSERT INTO places (title, type_id, address, opening_hours)
VALUES 
    ('The Roxy Cinema', 1, '123 Main St, Cityville', 'Mon-Sun: 12:00 PM - 12:00 AM'),
    ('Le Petit Bistro', 2, '456 Elm St, Townsville', 'Tue-Sat: 5:00 PM - 10:00 PM'),
    ('The Tipsy Tavern', 3, '789 Oak St, Villagetown', 'Mon-Fri: 4:00 PM - 2:00 AM'),
    ('Central Park', 4, 'Central Park West & 79th St, New York', 'Open 24 hours');

-- Générer des données fictives pour la table des avis
INSERT INTO reviews (user_id, entity_id, entity_type, rating, summary, review)
VALUES 
    (1, 1, 'movie', 5, 'Amazing movie!', 'I loved every minute of it. The action scenes were thrilling and the story was mind-bending.'),
    (2, 2, 'movie', 4, 'Great film, but a bit confusing', 'Inception was visually stunning and had a unique concept, but I found some parts hard to follow.'),
    (3, 3, 'movie', 5, 'A timeless classic', 'The Shawshank Redemption is a masterpiece. The performances are stellar and the story is deeply moving.');

-- Exemple de données pour la table des commentaires (à adapter selon vos besoins)
INSERT INTO comments (user_id, review_id, content)
VALUES 
    (1, 1, 'I agree, The Matrix is one of my all-time favorites.'),
    (2, 2, 'I think the ambiguity of Inception is part of its charm.'),
    (3, 3, 'This movie made me cry tears of joy.');

-- Exemple de données pour la table des likes sur les avis (à adapter selon vos besoins)
INSERT INTO review_likes (review_id, user_id, liked)
VALUES 
    (1, 2, true),
    (2, 3, true),
    (3, 1, true);

-- Exemple de données pour la table des likes sur les commentaires (à adapter selon vos besoins)
INSERT INTO comment_likes (comment_id, user_id, liked)
VALUES 
    (1, 3, true),
    (2, 1, true),
    (3, 2, true);
