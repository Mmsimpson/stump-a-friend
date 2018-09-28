INSERT INTO users (username, password, email)
    VALUES ('mmsimpson',
    'trello', 
    'mmsimpson@yahoo.com'
);

INSERT INTO users (username, password, email)
    VALUES ('clint1',
    'lolrus', 
    'clint@yahoo.com'
);INSERT INTO users (username, password, email)
    VALUES ('clint1',
    'lolrus', 
    'clint@yahoo.com'
);


INSERT INTO users (username, password, email)
    VALUES ('Johnny',
    'seeds', 
    'reddit@yahoo.com'
);

-- users table seed data
INSERT INTO users (username, email, password)
VALUES ('testUser1', 'test1@test.com', 'password');
INSERT INTO users (username, email, password)
VALUES ('testUser2', 'test2@test.com', 'password');
INSERT INTO users (username, email, password)
VALUES ('testUser3', 'test3@test.com', 'password');
INSERT INTO users (username, email, password)
VALUES ('testUser4', 'test4@test.com', 'password');
INSERT INTO users (username, email, password)
VALUES ('testUser5', 'test5@test.com', 'password');

-- quizzes table seed data
INSERT INTO quizzes (id, created_by, sent_to, name) VALUES ('100',1,2,'Quiz Name');
INSERT INTO quizzes (id, created_by, sent_to, name) VALUES ('101',1,3,'Quiz Name');
INSERT INTO quizzes (id, created_by, sent_to, name) VALUES ('102',1,4,'Quiz Name');
INSERT INTO quizzes (id, created_by, sent_to, name) VALUES ('103',1,5,'Quiz Name');
INSERT INTO quizzes (id, created_by, sent_to, name) VALUES ('104',1,5,'Quiz Name');
INSERT INTO quizzes (id, created_by, sent_to, name) VALUES ('105',2,1,'Quiz Name');
INSERT INTO quizzes (id, created_by, sent_to, name) VALUES ('106',2,3,'Quiz Name');
INSERT INTO quizzes (id, created_by, sent_to, name) VALUES ('107',3,1,'Quiz Name');
INSERT INTO quizzes (id, created_by, sent_to, name) VALUES ('108',3,1,'Quiz Name');
INSERT INTO quizzes (id, created_by, sent_to, name) VALUES ('109',3,1,'Quiz Name');

-- questions table seed data (copy and paste these after quizzes data)
INSERT INTO questions (id, quiz_id, question, correct_answer, player_answer, incorrect1, incorrect2, incorrect3)
VALUES ('1', '100', 'This is the question?', 'This is the correct answer', 'Recipients Answer here.' , 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3');
INSERT INTO questions (id, quiz_id, question, correct_answer, player_answer, incorrect1, incorrect2, incorrect3)
VALUES ('2', '100', 'This is the question?', 'This is the correct answer', 'Recipients Answer here.' , 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3');
INSERT INTO questions (id, quiz_id, question, correct_answer, player_answer, incorrect1, incorrect2, incorrect3)
VALUES ('3', '100', 'This is the question?', 'This is the correct answer', 'Recipients Answer here.' , 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3');
INSERT INTO questions (id, quiz_id, question, correct_answer, player_answer, incorrect1, incorrect2, incorrect3)
VALUES ('4', '100', 'This is the question?', 'This is the correct answer', 'Recipients Answer here.' , 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3');
INSERT INTO questions (id, quiz_id, question, correct_answer, player_answer, incorrect1, incorrect2, incorrect3)
VALUES ('5', '100', 'This is the question?', 'This is the correct answer', 'Recipients Answer here.' , 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3');
INSERT INTO questions (id, quiz_id, question, correct_answer, player_answer, incorrect1, incorrect2, incorrect3)
VALUES ('6', '101', 'This is the question?', 'This is the correct answer', 'Recipients Answer here.' , 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3');
INSERT INTO questions (id, quiz_id, question, correct_answer, player_answer, incorrect1, incorrect2, incorrect3)
VALUES ('7', '101', 'This is the question?', 'This is the correct answer', 'Recipients Answer here.' , 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3');
INSERT INTO questions (id, quiz_id, question, correct_answer, player_answer, incorrect1, incorrect2, incorrect3)
VALUES ('8', '102', 'This is the question?', 'This is the correct answer', 'Recipients Answer here.' , 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3');
INSERT INTO questions (id, quiz_id, question, correct_answer, player_answer, incorrect1, incorrect2, incorrect3)
VALUES ('9', '102', 'This is the question?', 'This is the correct answer', 'Recipients Answer here.' , 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3');
INSERT INTO questions (id, quiz_id, question, correct_answer, player_answer, incorrect1, incorrect2, incorrect3)
VALUES ('10', '102', 'This is the question?', 'This is the correct answer', 'Recipients Answer here.' , 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3');
INSERT INTO questions (id, quiz_id, question, correct_answer, player_answer, incorrect1, incorrect2, incorrect3)
VALUES ('11', '103', 'This is the question?', 'This is the correct answer', 'Recipients Answer here.' , 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3');
INSERT INTO questions (id, quiz_id, question, correct_answer, player_answer, incorrect1, incorrect2, incorrect3)
VALUES ('12', '103', 'This is the question?', 'This is the correct answer', 'Recipients Answer here.' , 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3');
INSERT INTO questions (id, quiz_id, question, correct_answer, player_answer, incorrect1, incorrect2, incorrect3)
VALUES ('13', '103', 'This is the question?', 'This is the correct answer', 'Recipients Answer here.' , 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3');
INSERT INTO questions (id, quiz_id, question, correct_answer, player_answer, incorrect1, incorrect2, incorrect3)
VALUES ('14', '103', 'This is the question?', 'This is the correct answer', 'Recipients Answer here.' , 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3');
INSERT INTO questions (id, quiz_id, question, correct_answer, player_answer, incorrect1, incorrect2, incorrect3)
VALUES ('15', '104', 'This is the question?', 'This is the correct answer', 'Recipients Answer here.' , 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3');
INSERT INTO questions (id, quiz_id, question, correct_answer, player_answer, incorrect1, incorrect2, incorrect3)
VALUES ('16', '105', 'This is the question?', 'This is the correct answer', 'Recipients Answer here.' , 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3');
INSERT INTO questions (id, quiz_id, question, correct_answer, player_answer, incorrect1, incorrect2, incorrect3)
VALUES ('17', '106', 'This is the question?', 'This is the correct answer', 'Recipients Answer here.' , 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3');
INSERT INTO questions (id, quiz_id, question, correct_answer, player_answer, incorrect1, incorrect2, incorrect3)
VALUES ('18', '107', 'This is the question?', 'This is the correct answer', 'Recipients Answer here.' , 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3');
INSERT INTO questions (id, quiz_id, question, correct_answer, player_answer, incorrect1, incorrect2, incorrect3)
VALUES ('19', '108', 'This is the question?', 'This is the correct answer', 'Recipients Answer here.' , 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3');
INSERT INTO questions (id, quiz_id, question, correct_answer, player_answer, incorrect1, incorrect2, incorrect3)
VALUES ('20', '109', 'This is the question?', 'This is the correct answer', 'Recipients Answer here.' , 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3');
INSERT INTO questions (id, quiz_id, question, correct_answer, player_answer, incorrect1, incorrect2, incorrect3)
VALUES ('21', '110', 'This is the question?', 'This is the correct answer', 'Recipients Answer here.' , 'Incorrect Answer 1', 'Incorrect Answer 2', 'Incorrect Answer 3');