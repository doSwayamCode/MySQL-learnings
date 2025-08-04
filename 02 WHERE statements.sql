# WHERE clause

SELECT * 
FROM employee_salary;

SELECT * FROM employee_salary
WHERE first_name='Ron';

SELECT * FROM employee_salary
WHERE salary >=50000;

SELECT * FROM employee_salary
WHERE salary <50000;

# LOGICAL OPERATORS

SELECT * FROM employee_demographics
WHERE employee_id=1
OR NOT gender= 'Male';

-- SELECT * FROM employee_demographics
-- WHERE first_name LIKE 'Jer%'

-- SELECT * FROM employee_demographics
-- WHERE first_name LIKE 'A%'

-- SELECT * FROM employee_demographics
-- WHERE first_name LIKE 'A__'

-- SELECT * FROM employee_demographics
-- WHERE first_name LIKE 'A___%' # starts with A, have 3 letters(any) and then can have anything after (%)

SELECT * FROM employee_demographics
WHERE birth_date LIKE '1989%'
