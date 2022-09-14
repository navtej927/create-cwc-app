CREATE TABLE users
(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL
);

INSERT INTO users(name) VALUES
 ('Eric singh'),
 ('Perceptor'),
 ('Prince');

CREATE TABLE comments
(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id),
    review TEXT NOT NULL
);

INSERT INTO comments(review, user_id) VALUES
 ('God is one.', 1),
 ('Long liv ethe queen', 3),
 ('We should believe in god.', 1);

