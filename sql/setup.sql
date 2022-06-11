-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists cat;

CREATE table cat (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    url VARCHAR NOT NULL,
    year INT NOT NULL,
    lives INT NOT NULL, 
    is_sidekick BOOLEAN

);
INSERT INTO cat (name,type,url,year,lives, is_sidekick) VALUES ('Felix','Tuxedo','https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Felix_the_cat.svg/200px-Felix_the_cat.svg.png',1892, 3, false),
('Garfield','Orange Tabby','https://static.wikia.nocookie.net/garfield/images/9/9f/GarfieldCharacter.jpg',1978, 7, false),
('Duchess','Angora','https://static.wikia.nocookie.net/disney/images/e/eb/Profile_-_Duchess.jpeg',1970, 9, false)
;