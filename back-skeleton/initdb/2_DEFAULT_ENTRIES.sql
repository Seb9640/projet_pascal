-- Insertion des données de films

-- Supprimer les données précédentes si nécessaire
DELETE FROM movies;

-- Insérer les nouveaux enregistrements
INSERT INTO movies (id, title, director, release_date, synopsis, poster_url, updated_at, created_at) VALUES
  (1, 'Intouchables', 'Olivier Nakache et Éric Toledano', '2001-01-01', 'A la suite d’un accident de parapente, Philippe, riche aristocrate, engage comme aide à domicile Driss, un jeune de banlieue tout juste sorti de prison… Bref la personne la moins adaptée pour le job. Ensemble ils vont faire cohabiter Vivaldi et Earth Wind and Fire, le verbe et la vanne, les costumes et les bas de survêtement… Deux univers vont se téléscoper, s’apprivoiser, pour donner naissance à une amitié aussi dingue, drôle et forte qu’inattendue, une relation unique qui fera des étincelles et qui les rendra… Intouchables.', 'assets/images/movies/Intouchables.jpg', NULL, '2024-05-04'),
  (2, 'La Communauté de l''Anneau', 'Peter Jackson', '2001-01-01', 'Le Seigneur des anneaux : La Communauté de l''anneau (The Lord of The Rings: The Fellowship of the Ring) est un film américano-néo-zélandais réalisé par Peter Jackson, sorti en 2001. C''est le premier volet de la trilogie Le Seigneur des anneaux et l''adaptation du livre La Communauté de l''Anneau de J. R. R. Tolkien. L''histoire commence lorsque, sur la Terre du Milieu, le magicien Gandalf le Gris (Ian McKellen) découvre que l''anneau que possède le jeune Hobbit Frodon Sacquet (Elijah Wood), qui lui a été légué par son oncle Bilbon et qui lui permet de se rendre invisible, est en réalité l''Anneau unique recherché avidement par le seigneur ténébreux Sauron car il lui permettrait de retrouver toute sa puissance. Afin d''éviter que Sauron ne récupère l''anneau, Frodon et ses huit compagnons, la Communauté de l''Anneau, entament un périlleux voyage dans le but de le détruire...', 'assets/images/movies/la_communaute_de_lanneau.jpg', NULL, '2024-05-04'),
  (3, 'Les Aventuriers de l''Arche Perdue', 'Steven Spielberg', '1981-01-01', 'Les Aventuriers de l''arche perdue (Raiders of the Lost Ark) est un film d''aventure fantastique américain, réalisé par Steven Spielberg et co-produit par George Lucas, sorti en 1981. À partir de l''an 2000, il est exploité sous le nom Indiana Jones et les Aventuriers de l''arche perdue1 (Indiana Jones and the Raiders of the Lost Ark). Premier volet de la saga Indiana Jones (deuxième chronologiquement), Raiders of the Lost Ark a été nommé neuf fois aux Oscars 1982 et en a remporté cinq (dont un spécial pour les effets sonores).', 'assets/images/movies/les_aventuriers_arche_perdue.jpg', NULL, '2024-05-04'),
  (4, 'La Guerre des Etoiles', 'George Lucas', '1977-01-01', 'La Guerre des étoiles (Star Wars) est un film américain de science-fiction de type space opera sorti en 1977 écrit et réalisé par George Lucas. À partir de 2000, il est exploité sous le nom Star Wars, épisode IV : Un nouvel espoir (Star Wars: Episode IV – A New Hope). C''est le premier opus de la saga Star Wars par sa date de sortie, mais le quatrième selon l''ordre chronologique de l''histoire. Il est le premier volet de la trilogie originale qui est constituée également des films L''Empire contre-attaque et Le Retour du Jedi. Ce film est aussi le troisième long métrage réalisé par Lucas...', 'assets/images/movies/la_guerre_des_etoiles.jpg', NULL, '2024-05-04'),
  (5, 'Les Deux Tours', 'Peter Jackson', '2002-01-01', 'Le Seigneur des anneaux : Les Deux Tours (The Lord of the Rings: The Two Towers) est un film américano-néo-zélandais réalisé par Peter Jackson, sorti en 2002. Il est adapté du deuxième tome (1954) du roman Le Seigneur des anneaux, de l''écrivain britannique J. R. R. Tolkien. Dans la trilogie cinématographique de Peter Jackson, qui reproduit la trilogie du roman, le film suit La Communauté de l''anneau et précède Le Retour du roi. Le scénario du film a été écrit par Peter Jackson, son épouse Fran Walsh et Philippa Boyens, mais a été modifié en cours de tournage sur de nombreux points, avec l''aide et les idées des interprètes, et notamment pour répondre aux critiques formulées par les fans sur les informations qui avaient filtré sur Internet1. Le tournage a eu lieu en Nouvelle-Zélande, entre les années 1999 et 20002. L''histoire du film commence après la dissolution de la communauté de l''Anneau. Boromir est mort des mains du chef des Uruk-hai, Lurtz, en essayant de sauver les Hobbits Meriadoc Brandebouc et Peregrin Touque, qui ont été capturés. Aragorn, Gimli et Legolas poursuivent les Uruks afin de libérer leurs compagnons capturés, tandis que Frodon Sacquet et Samsagace Gamegie sont partis seuls pour le Mordor afin de détruire l''Anneau unique, à la Montagne du Destin...', 'assets/images/movies/les_deux_tours.jpg', NULL, '2024-05-04'),
  (6, 'Le Retour du Roi', 'Peter Jackson', '2003-01-01', 'Le Seigneur des anneaux : Le Retour du roi (The Lord of the Rings: The Return of the King) est un film américano-néo-zélandais réalisé par Peter Jackson, sorti en 2003. Adapté du livre Le Retour du roi de J. R. R. Tolkien, il incorpore également des événements du livre précédent, Les Deux Tours. C''est le troisième volet de la trilogie Le Seigneur des anneaux, après La Communauté de l''anneau et Les Deux Tours. Alors que Sauron lance ses armées à l''assaut de la Terre du Milieu, le magicien Gandalf et le roi Théoden réunissent leurs forces pour défendre la capitale du Gondor, Minas Tirith. Aragorn réclame son trône et fait appel à l''armée des Morts pour remporter la bataille des Champs du Pelennor. Pendant ce temps, les hobbits Frodon Sacquet et Samsagace Gamegie traversent le Mordor guidés par Gollum pour aller détruire l''Anneau unique à la montagne du Destin...', 'assets/images/movies/le_retour_du_roi.jpg', NULL, '2024-05-04'),
  (7, 'L''Empire Contre Attaque', 'Irvin Kershner', '1980-01-01', 'L''Empire contre-attaque (The Empire Strikes Back) est un film américain de science-fiction de type space opera sorti en 1980, co-écrit par George Lucas et Lawrence Kasdan, et réalisé par Irvin Kershner. À partir de l''année 2000, il est exploité sous le nom Star Wars, épisode V : L''Empire contre-attaque (Star Wars: Episode V – The Empire Strikes Back). C''est le deuxième opus de la saga Star Wars par sa date de sortie, mais le cinquième selon l''ordre chronologique de l''histoire. Il est le deuxième volet de la trilogie originale qui est constituée également des films Un nouvel espoir et Le Retour du Jedi. L''histoire de cet épisode se déroule trois ans après les événements d’Un nouvel espoir. La guerre entre le maléfique Empire galactique et son antagoniste, l’Alliance rebelle, bat son plein. Les héros de l’Alliance Luke Skywalker et Han Solo se séparent après la prise de la principale base rebelle par l’Empire. Luke part sur la planète Dagobah afin de suivre la formation de Jedi auprès du maître Yoda. Solo tente lui d’échapper à la chasse spatiale que lui mène Dark Vador, l’apprenti de l’Empereur Palpatine.', 'assets/images/movies/l_empire_contre_attaque.jpg', NULL, '2024-05-04'),
  (8, 'Le Retour du Jedi', 'Richard Marquand', '1983-01-01', 'Le Retour du Jedi (Return of the Jedi) est un film américain de science-fiction de type space opera sorti en 1983, co-écrit par George Lucas et Lawrence Kasdan, et réalisé par Richard Marquand. À partir de l''année 2000, il est exploité sous le nom Star Wars, épisode VI : Le Retour du Jedi (Star Wars: Episode VI – Return of the Jedi). C''est le troisième opus de la saga Star Wars par sa date de sortie, mais le sixième selon l''ordre chronologique de l''histoire. Il est le dernier volet de la trilogie originale qui est constituée également des films Un nouvel espoir et L''Empire contre-attaque. L''histoire de cet épisode se déroule un an après les événements de L''Empire contre-attaque. Le maléfique Empire galactique construit une nouvelle station spatiale Étoile de la mort pour anéantir définitivement l''Alliance rebelle, son opposition principale. Pour tendre un piège à la flotte ennemie, l''empereur Palpatine se rend sur la station encore vulnérable. Les dirigeants de l''Alliance lancent donc toutes leurs forces à l''assaut ne se doutant pas que la flotte impériale les attend de pied ferme. De son côté, le jeune Jedi Luke Skywalker, l''un des héros de l''Alliance veut sauver son père Dark Vador du côté obscur de la Force et le rallier à sa cause.', 'assets/images/movies/le_retour_du_jedi.jpg', NULL, '2024-05-04'),
  (9, 'Indiana Jones et le Temple Maudit', 'Steven Spielberg', '1984-01-01', 'C''est le deuxième volet de la série de quatre films centrés sur le personnage d''Indiana Jones. Son action se déroule en 1935 donc avant celle du premier volet Les Aventuriers de l''arche perdue située en 1936. Shanghai, 1935 : Indiana Jones arrive dans un bar appartenant à un gangster chinois, Lao Che. Il doit récupérer un diamant et l''échanger contre les cendres de Nurhachi, un empereur chinois. Mais l''échange tourne à la fusillade et Indiana, emportant avec lui Willie Scott, une meneuse de revue qui s''intéressait à la pierre, parvient à quitter la Chine avec l''aide de Demi-Lune, un petit garçon chinois de 11 ans débrouillard, à bord d''un avion. Mais l''avion appartient à Lao Che et les pilotes, après avoir vidé les réservoirs, sautent en parachute. Utilisant un canot de sauvetage pneumatique pour amortir leur chute, Indiana, Willie et Demi-Lune sautent de l''avion et parviennent à fuir...', 'assets/images/movies/le_temple_maudit.jpg', NULL, '2024-05-04'),
  (10, 'Indiana Jones et la Dernière Croisade', 'Steven Spielberg', '1989-01-01', 'Indiana Jones et la Dernière Croisade (Indiana Jones and the Last Crusade) est un film d''aventure fantastique américain réalisé par Steven Spielberg, sorti en 1989. Il s''agit du troisième volet de la série de quatre films centrés sur le personnage d''Indiana Jones incarné par Harrison Ford. Utah, 1912. Le jeune Indiana Jones (River Phoenix) fait partie d''une troupe de scouts quand il surprend des pilleurs de tombes dans une grotte. Il leur dérobe un objet précieux, la croix de Coronado, et leur échappe après une longue poursuite, mais il se voit contraint de la leur restituer un peu plus tard...', 'assets/images/movies/la_derniere_croisade.jpg', NULL, '2024-05-04'),
  (11, 'Pulp Fiction', 'Quentin Tarantino', '1994-01-01', 'Pulp Fiction est un film policier et une comédie noire américaine réalisé par Quentin Tarantino et sorti en 1994. Il est considéré comme l''un des meilleurs films de tous les temps. Le film mêle plusieurs histoires ayant pour protagonistes différents personnages criminels de Los Angeles. L''intrigue est présentée de manière chronologiquement désordonnée et comprend des scènes de violence, d''humour noir et de dialogues riches en références culturelles. Pulp Fiction a remporté la Palme d''or au Festival de Cannes 1994, deux Oscars (meilleur scénario original pour Tarantino et Roger Avary et meilleur second rôle masculin pour Samuel L. Jackson) ainsi que de nombreux autres prix et nominations.', 'assets/images/movies/pulp_fiction.jpg', NULL, '2024-05-04'),
  (12, 'Forrest Gump', 'Robert Zemeckis', '1994-01-01', 'Forrest Gump est une comédie dramatique américaine réalisée par Robert Zemeckis, sortie en 1994. Le film est l''adaptation du roman du même nom de Winston Groom, publié en 1986. L''histoire est celle de Forrest Gump, un homme simple d''esprit, qui traverse l''histoire des États-Unis des années 1960 aux années 1980. Malgré son handicap mental, il se retrouve impliqué dans de nombreux événements marquants de l''époque. Le film met en vedette Tom Hanks dans le rôle-titre, ainsi que Robin Wright, Gary Sinise et Sally Field.', 'assets/images/movies/forrest_gump.jpg', NULL, '2024-05-04'),
  (13, 'Inception', 'Christopher Nolan', '2010-01-01', 'Inception est un thriller de science-fiction américano-britannique écrit, produit et réalisé par Christopher Nolan, sorti en 2010. Le film, qui se déroule dans l''architecture de l''esprit humain, explore le thème des rêves et met en vedette un ensemble de personnages qui tentent de voler des secrets industriels en utilisant une technologie qui permet l''infiltration de l''esprit d''une personne et le vol de ses secrets les plus intimes. Leonardo DiCaprio tient le rôle principal du « voleur » Dom Cobb. Inception est réputé pour son scénario complexe, ses effets visuels spectaculaires et sa bande-son, et a été largement acclamé par la critique.', 'assets/images/movies/inception.jpg', NULL, '2024-05-04'),
  (14, 'Le Parrain', 'Francis Ford Coppola', '1972-01-01', 'Le Parrain (The Godfather) est un film américain réalisé par Francis Ford Coppola et produit par les studios Paramount, sorti en 1972. Il s''agit d''une adaptation du roman éponyme de Mario Puzo. Le film met en vedette Marlon Brando dans le rôle de Don Vito Corleone, le patriarche de la famille mafieuse Corleone de New York. Le Parrain est devenu une référence dans la culture populaire, largement considéré comme l''un des meilleurs films jamais réalisés. Il a remporté trois Oscars, dont celui du meilleur film, et a été suivi de deux suites, Le Parrain 2 en 1974 et Le Parrain 3 en 1990.', 'assets/images/movies/le_parrain.jpg', NULL, '2024-05-04'),
  (15, 'Le Seigneur des Anneaux: La Communauté de l''Anneau', 'Peter Jackson', '2001-01-01', 'Le Seigneur des anneaux : La Communauté de l''anneau (The Lord of The Rings: The Fellowship of the Ring) est un film américano-néo-zélandais réalisé par Peter Jackson, sorti en 2001. C''est le premier volet de la trilogie Le Seigneur des anneaux et l''adaptation du livre La Communauté de l''Anneau de J. R. R. Tolkien. L''histoire commence lorsque, sur la Terre du Milieu, le magicien Gandalf le Gris (Ian McKellen) découvre que l''anneau que possède le jeune Hobbit Frodon Sacquet (Elijah Wood), qui lui a été légué par son oncle Bilbon et qui lui permet de se rendre invisible, est en réalité l''Anneau unique recherché avidement par le seigneur ténébreux Sauron car il lui permettrait de retrouver toute sa puissance. Afin d''éviter que Sauron ne récupère l''anneau, Frodon et ses huit compagnons, la Communauté de l''Anneau, entament un périlleux voyage dans le but de le détruire...', 'assets/images/movies/la_communaute_de_lanneau.jpg', NULL, '2024-05-04');



INSERT INTO places (id, title, image_Url, address, opening_hours, updated_at, created_at) VALUES
(1, 'Le Louvre', 'assets/images/places/1.png', 'Rue de Rivoli, 75001 Paris', '9h-18h', NULL, '2024-04-30'),
(2, 'Tour Eiffel', 'assets/images/places/2.png', 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris', '9h30-23h45', NULL, '2024-04-30'),
(3, 'Musée d''Orsay', 'assets/images/places/3.png', '1 Rue de la Légion d''Honneur, 75007 Paris', '9h30-18h', NULL, '2024-04-30'),
(4, 'Cathédrale Notre-Dame de Paris', 'assets/images/places/4.png', '6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris', '8h-18h45', NULL, '2024-04-30'),
(5, 'Mont Saint-Michel', 'assets/images/places/5.png', '50170 Le Mont-Saint-Michel', 'Ouvert 24h/24', NULL, '2024-04-30'),
(6, 'Château de Versailles', 'assets/images/places/6.png', 'Place d''Armes, 78000 Versailles', '9h-18h30', NULL, '2024-04-30'),
(7, 'Futuroscope', 'assets/images/places/7.png', 'Avenue René Monory, 86360 Chasseneuil-du-Poitou', 'Selon calendrier d''ouverture', NULL, '2024-04-30'),
(8, 'Parc Astérix', 'assets/images/places/8.png', '60128 Plailly', 'Selon calendrier d''ouverture', NULL, '2024-04-30'),
(9, 'Musée du Louvre-Lens', 'assets/images/places/9.png', '99 Rue Paul Bert, 62300 Lens', '10h-18h', NULL, '2024-04-30'),
(10, 'Puy du Fou', 'assets/images/places/10.png', '85590 Les Epesses', 'Selon calendrier d''ouverture', NULL, '2024-04-30');


INSERT INTO users (id, first_name, last_name, birthdate, username, email, password, image, updated_at, created_at) VALUES
(1, 'John', 'Doe', '1990-05-15', 'johndoe', 'john@example.com', 'password123', NULL, '2024-04-30T12:00:00Z', '2024-04-30T10:00:00Z'),
(2, 'Alice', 'Smith', '1985-08-22', 'alice.smith', 'alice@example.com', 'securepwd', NULL, '2024-04-29T15:30:00Z', '2024-04-29T13:00:00Z'),
(3, 'Emily', 'Johnson', NULL, 'emilyj', 'emily@example.com', 'userpass', NULL, NULL, '2024-04-28T18:45:00Z'),
(4, 'Michael', 'Brown', '1988-12-10', 'mikebrown', 'mike@example.com', 'pass1234', NULL, '2024-04-27T09:15:00Z', '2024-04-26T17:30:00Z'),
(5, 'Emma', 'Taylor', '1993-06-25', 'emma.taylor', 'emma@example.com', 'emma123', NULL, '2024-04-26T14:20:00Z', '2024-04-25T12:45:00Z'),
(6, 'David', 'Wilson', '1995-09-18', 'david.wilson', 'david@example.com', 'davidpass', NULL, '2024-04-25T08:30:00Z', '2024-04-24T17:20:00Z'),
(7, 'Sophia', 'Garcia', '1985-03-12', 'sophia.garcia', 'sophia@example.com', 'sophia456', NULL, '2024-04-24T16:10:00Z', '2024-04-23T11:20:00Z'),
(8, 'Ethan', 'Martinez', '1990-08-30', 'ethan.martinez', 'ethan@example.com', 'ethanpass', NULL, '2024-04-23T15:40:00Z', '2024-04-22T21:15:00Z'),
(9, 'Isabella', 'Lopez', '1997-11-05', 'isabella.lopez', 'isabella@example.com', 'bella123', NULL, '2024-04-22T08:20:00Z', '2024-04-21T17:15:00Z'),
(10, 'Mason', 'Hernandez', '1987-06-18', 'masonh', 'mason@example.com', 'masonpass', NULL, '2024-04-21T11:30:00Z', '2024-04-20T16:20:00Z'),
(11, 'Amelia', 'King', '1992-09-25', 'amelia.king', 'amelia@example.com', 'amelia456', NULL, '2024-04-20T13:50:00Z', '2024-04-19T18:45:00Z'),
(12, 'Liam', 'Young', '1984-12-09', 'liam_young', 'liam@example.com', 'liam1234', NULL, '2024-04-19T16:30:00Z', '2024-04-18T20:15:00Z'),
(13, 'Olivia', 'Allen', '1989-05-15', 'olivia_allen', 'olivia@example.com', 'olivia567', NULL, '2024-04-18T09:40:00Z', '2024-04-17T14:35:00Z'),
(14, 'Noah', 'Scott', '1993-10-22', 'noahscott', 'noah@example.com', 'noahpass', NULL, '2024-04-17T11:20:00Z', '2024-04-16T16:30:00Z'),
(15, 'Ava', 'Green', '1986-07-08', 'avagreen', 'ava@example.com', 'avapass', NULL, '2024-04-16T08:50:00Z', '2024-04-15T17:25:00Z'),
(16, 'William', 'Baker', '1996-02-14', 'willbaker', 'will@example.com', 'will123', NULL, '2024-04-15T14:30:00Z', '2024-04-14T19:10:00Z');



INSERT INTO reviews (id, user_id, entity_id, entity_type, rating, full_name, email, summary, review, image, updated_at, created_at)
VALUES
  (1, 3, 7, 'movie', 4, 'John Doe', 'john@example.com', 'Great movie!', 'I really enjoyed watching this movie. It had a great storyline and amazing performances.', 'https://example.com/image1.jpg', '2024-05-05T12:00:00Z', '2024-05-05T10:30:00Z'),
  (2, 8, 4, 'place', 5, 'Alice Smith', 'alice@example.com', 'Fantastic experience!', 'I visited this place with my family and we had an amazing time. The staff was friendly and the atmosphere was great.', NULL, NULL, '2024-05-04T15:45:00Z'),
  (3, 12, 9, 'movie', 3, 'Emma Johnson', 'emma@example.com', NULL, 'The movie was okay. It did not quite meet my expectations.', NULL, NULL, '2024-05-03T09:20:00Z'),
  (4, 6, 2, 'place', 4, 'Michael Brown', 'michael@example.com', 'Nice place to visit', 'I had a pleasant experience visiting this place. Would recommend it to others.', 'https://example.com/image2.jpg', NULL, '2024-05-02T18:10:00Z'),
  (5, 9, 5, 'movie', 5, 'Sophia Wilson', 'sophia@example.com', 'Must-watch!', 'This movie is a must-watch! It kept me engaged from start to finish.', NULL, '2024-05-01T14:20:00Z', '2024-04-30T20:05:00Z'),
  (6, 15, 1, 'place', 3, 'David Lee', 'david@example.com', NULL, 'The place was nice but a bit crowded. Overall, it was an okay experience.', NULL, NULL, '2024-04-29T12:30:00Z'),
  (7, 5, 8, 'movie', 4, 'Olivia Martinez', 'olivia@example.com', 'Enjoyable movie', 'I enjoyed watching this movie with my friends. It had some unexpected twists.', 'https://example.com/image3.jpg', '2024-04-28T16:40:00Z', '2024-04-27T21:15:00Z'),
  (8, 11, 3, 'place', 2, 'James Rodriguez', 'james@example.com', 'Disappointing experience', 'I was disappointed with my experience at this place. The service was slow and the food was not good.', NULL, '2024-04-26T11:55:00Z', '2024-04-25T17:30:00Z'),
  (9, 14, 6, 'movie', 5, 'Isabella Garcia', 'isabella@example.com', NULL, 'Absolutely loved this movie! It was one of the best movies I ve seen in a while.', NULL, '2024-04-24T09:10:00Z', '2024-04-23T22:25:00Z'),
  (10, 2, 10, 'place', 4, 'William Brown', 'william@example.com', 'Good place for a family outing', 'Visited this place with my family and we had a great time. The facilities were clean and well-maintained.', 'https://example.com/image4.jpg', '2024-04-22T13:20:00Z', '2024-04-21T18:45:00Z');
