-- Active: 1727836521955@@127.0.0.1@3306@pos_db


CREATE TABLE customers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100),
  phone VARCHAR(20),
  address TEXT,
  provinsi VARCHAR(100),      
  country VARCHAR(100),         
  level VARCHAR(50),            
  deleted_at DATETIME DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE products ADD COLUMN foto VARCHAR(255);


CREATE TABLE transactions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id INT,
  transaction_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  invoice_number VARCHAR(50) NOT NULL UNIQUE,
  total_qty INT NOT NULL DEFAULT 0,
  total_amount INT NOT NULL DEFAULT 0,
  FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE SET NULL
);

CREATE TABLE transaction_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  transaction_id INT,
  product_id INT,
  quantity INT NOT NULL,
  price INT NOT NULL,
  subtotal INT NOT NULL,
  FOREIGN KEY (transaction_id) REFERENCES transactions(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- ALTER TABLE transactions
-- ADD COLUMN invoice_number VARCHAR(50) NOT NULL UNIQUE AFTER id,
-- ADD COLUMN total_qty INT NOT NULL DEFAULT 0 AFTER customer_id,
-- ADD COLUMN total_amount INT NOT NULL DEFAULT 0 AFTER total_qty;

-- ALTER TABLE transaction_items
-- ADD COLUMN price INT NOT NULL AFTER quantity,
-- ADD COLUMN subtotal INT NOT NULL AFTER price;
