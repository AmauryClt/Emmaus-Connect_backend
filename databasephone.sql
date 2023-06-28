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