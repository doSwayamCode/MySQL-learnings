# GROUP BY

SELECT gender, AVG(age), MAX(age), MIN(age), COUNT(age)
FROM employee_demographics
GROUP BY gender;

-- SELECT occupation, salary
-- FROM employee_salary
-- GROUP BY occupation, salary;


# ORDER BY
SELECT *
FROM employee_demographics
ORDER BY first_name;

SELECT *
FROM employee_demographics
ORDER BY first_name ASC;

SELECT *
FROM employee_demographics
ORDER BY first_name DESC;

SELECT *
FROM employee_demographics
ORDER BY gender, age;

SELECT *
FROM employee_demographics
ORDER BY 5,4; # order of column jaise 5 pr gender and 4 par age (not recommended)

SELECT *
FROM employee_demographics
ORDER BY gender, age DESC;

SELECT *
FROM employee_demographics
ORDER BY age, gender;  #order by me order of writing matters jaise yaha order by AGE doesnt matter. 




