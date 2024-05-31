-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
CREATE TABLE "shopping_list" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unit" VARCHAR(20) NOT NULL,
    "purchased" BOOLEAN DEFAULT FALSE
);

INSERT INTO "shopping_list"
   ("name", "quantity", "unit", "purchased")
   VALUES 
   ('Apples', 5, 'lbs', false),
   ('Bread', 1, 'loaf', false),
   ('Milk', 1, 'gallon', false),
   ('Sliced Almonds', 2, 'cups', false),
   ('Bananas', 1, 'bunch', true);