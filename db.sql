DROP TABLE IF EXISTS companies;
CREATE TABLE companies(
  id SERIAL PRIMARY KEY,
  name VARCHAR(30),
  ceo VARCHAR(30),
  revenue VARCHAR(50),
  number_of_employees VARCHAR(50)
);

INSERT INTO companies(id, name, ceo, revenue, number_of_employees) VALUES(1, 'Facebook', 'Mark Zuckerberg', '$117 billion in 2021', '68,177 in September 2021');

INSERT INTO companies(id, name, ceo, revenue, number_of_employees) VALUES(2, 'Apple', 'Tim Cook', '$94.7 billion in 2021', '154,000 in 2021');

INSERT INTO companies(id, name, ceo, revenue, number_of_employees) VALUES(3, 'Amazon', 'Andy Jassy', '$458 billion in 2021', '1.5 million in September 2021');

INSERT INTO companies(id, name, ceo, revenue, number_of_employees) VALUES(4, 'Netflix', 'Reed Hastings & Ted Sarandos', '$29.7 billion in 2021', '12,135 in 2021');

INSERT INTO companies(id, name, ceo, revenue, number_of_employees) VALUES(5, 'Google', 'Sundar Pichai', '$64.87 billion Q3 2021', '139,995 in 2021');