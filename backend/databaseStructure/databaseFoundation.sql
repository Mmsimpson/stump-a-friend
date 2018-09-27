CREATE TABLE users (
    id serial primary key,
    username character varying (200),
    password character varying (200),
    email character varying (200)
);

CREATE TABLE quizzes (
    id serial PRIMARY KEY,
    created_by INTEGER REFERENCES users(id),
    sent_to INTEGER REFERENCES users(id),
    name character varying(255) NOT NULL,
    grade character varying(255)
);

CREATE TABLE questions (
    id character varying(255) PRIMARY KEY,
    quiz_id INTEGER REFERENCES quizzes(id),
    question character varying(255) NOT NULL,
    correct_answer character varying(255) NOT NULL,
    player_answer character varying(255),
    incorrect1 character varying(255),
    incorrect2 character varying(255),
    incorrect3 character varying(255),
    answered_correctly BOOLEAN DEFAULT false
);
