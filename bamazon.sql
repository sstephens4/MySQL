-- DROP DATABASE IF EXISTS bamazon;

-- CREATE DATABASE bamazon;

USE bamazon;

-- CREATE TABLE products(
-- item_id INTEGER NOT NULL AUTO_INCREMENT,
-- product_name VARCHAR(100) NOT NULL,
-- department_name VARCHAR(100) NOT NULL,
-- price INTEGER(255),
-- stock_quantity INTEGER(50),
-- five_times BOOLEAN DEFAULT false,
-- PRIMARY KEY (item_id)
-- );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iRobot Roomba 671", "Electronics", 350, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Painting Canvas Panels - 10pk", "Arts & Crafts", 15, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Stainless Steel Knife Set", "Kitchen", 30, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dr. Seuss Classics", "Books", 20, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pineapple iPhone Case", "Cellphones & Acc.", 10, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dining Table Set", "Furniture", 450, 35);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Vans Slip-on Classics", "Fashion", 45, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sony Noise-Cancelling Headphones", "Music", 80, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tire Inflator W/ Pressure Gauge", "Automotive", 35, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Volleyball Net", "Sports & Outdoors", 60, 24);

SELECT * FROM products;