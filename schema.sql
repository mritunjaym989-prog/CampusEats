CREATE DATABASE IF NOT EXISTS campuseats;
USE campuseats;

CREATE TABLE IF NOT EXISTS dishes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    available BOOLEAN DEFAULT TRUE
);

-- Seed initial data
INSERT INTO dishes (name, price, available) VALUES
('Paneer Tikka', 180.00, true),
('Veg Biryani', 150.00, true),
('Masala Dosa', 80.00, false);