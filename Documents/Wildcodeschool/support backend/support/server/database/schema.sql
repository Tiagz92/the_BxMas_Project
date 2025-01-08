CREATE table movie (
  id INT primary key auto_increment,
  title VARCHAR(255) NOT NULL
);

INSERT INTO movie (title) VALUES ("La ligne verte"),("Le grand bleu");