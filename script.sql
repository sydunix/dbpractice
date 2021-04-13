CREATE TABLE mentees (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(40), age VARCHAR(40), department VARCHAR(255), role VARCHAR(40), status VARCHAR(255), createdAt DATE);
INSERT INTO mentees (id, name, age, department, role, status, createdAt) VALUES ('1', 'Sarah', '5', 'Accounting', 'PM' , 'Activated', '2020-01-01');
INSERT INTO mentees (id, name, age, department, role, status, createdAt) VALUES ('2', 'Tim', '10', 'Engineering', 'QA' , 'Pending', '2021-02-01');
INSERT INTO mentees (id, name, age, department, role, status, createdAt) VALUES ('3', 'Joe', '17', 'Management', 'PM' , 'Activated', '2021-02-01');
INSERT INTO mentees (id, name, age, department, role, status, createdAt) VALUES ('4', 'Tolu', '25', 'Management', 'Dev' , 'Pending', '2021-02-01');
INSERT INTO mentees (id, name, age, department, role, status, createdAt) VALUES ('5', 'Rob', '5', 'Engineering', 'QA' , 'Activated', '2021-03-01');
INSERT INTO mentees (id, name, age, department, role, status, createdAt) VALUES ('6', 'Ade', '10', 'Management', 'QA' , 'Pending', '2021-04-01');
INSERT INTO mentees (id, name, age, department, role, status, createdAt) VALUES ('7', 'Tom', '17', 'Security', 'QA' , 'Activated', '2021-05-01');
INSERT INTO mentees (id, name, age, department, role, status, createdAt) VALUES ('8', 'Jide', '26', 'Accounting', 'Dev' , 'Activated', '2021-06-01');
 
select * from mentees;