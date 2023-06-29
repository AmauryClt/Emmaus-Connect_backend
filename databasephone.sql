CREATE TABLE user (
    ID INT PRIMARY KEY,
    Firstname VARCHAR(50),
    Lastname VARCHAR(50),
    Password VARCHAR(50),
    Email VARCHAR(50)
);

CREATE TABLE smartphone (
    ID INT PRIMARY KEY,
    Phonename VARCHAR(50),
    Systemeexploitation VARCHAR(50),
    Marque VARCHAR(50),
    Ram ENUM('1', '2', '3', '4', '5', '6', '7', '8'),
    Memoire ENUM('8', '16', '32', '64', '128', '256', '512'),
    Reseau VARCHAR(50),
    Ecran VARCHAR(50),
    Etatglobal ENUM('mauvais', 'correct', 'bon', 'excellent', 'neuf'),
    Etatecran ENUM('rayé', 'correct', 'bon', 'excellent'),
    Capacitebatterie ENUM('mauvais', 'correct', 'bon', 'excellent'),
    Chargeur ENUM('oui', 'non')
);

INSERT INTO smartphone (ID, Phonename, Systemeexploitation, Marque, Ram, Memoire, Reseau, Ecran, Etatglobal, Etatecran, Capacitebatterie, Chargeur)
VALUES
  (1, 'Téléphone 1', 'Android', 'Samsung', '4', '64', '4G', '6 pouces', 'bon', 'bon', 'excellent', 'oui'),
  (2, 'Téléphone 2', 'iOS', 'Apple', '8', '256', '5G', '5.8 pouces', 'excellent', 'excellent', 'excellent', 'oui'),
  (3, 'Téléphone 3', 'Android', 'Huawei', '6', '128', '4G', '6.4 pouces', 'correct', 'bon', 'bon', 'oui'),
  (4, 'Téléphone 4', 'iOS', 'Apple', '4', '128', '4G', '5.5 pouces', 'mauvais', 'correct', 'correct', 'non'),
  (5, 'Téléphone 5', 'Android', 'Xiaomi', '8', '256', '5G', '6.67 pouces', 'excellent', 'excellent', 'excellent', 'oui');
