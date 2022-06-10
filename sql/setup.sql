-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists cat;

CREATE table cat (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    age INT NOT NULL
);
INSERT INTO cat (name, age) VALUES ('Felix', 4),
('Garfield', 100),
('Dutchess', 30)
;