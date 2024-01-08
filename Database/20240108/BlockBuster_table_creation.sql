CREATE TABLE
  companies (/* empresas */ id INT NOT NULL IDENTITY (1, 1) PRIMARY KEY, name VARCHAR(255))
CREATE TABLE
  cities (/* ciudades */ id INT NOT NULL IDENTITY (1, 1) PRIMARY KEY, name VARCHAR(255), cod_postal VARCHAR(255))
CREATE TABLE
  locations (/* ubicaciones */ id INT NOT NULL IDENTITY (1, 1) PRIMARY KEY, street VARCHAR(255) NOT NULL, number INT NOT NULL, id_city INT NOT NULL, FOREIGN key (id_city) REFERENCES cities (id))
CREATE TABLE
  types (id INT NOT NULL IDENTITY (1, 1) PRIMARY KEY, type VARCHAR(255) NOT NULL)
CREATE TABLE
  branchs (/* sucursales */ id INT NOT NULL IDENTITY (1, 1) PRIMARY KEY, name VARCHAR(255) NOT NULL, id_companie INT NOT NULL, id_location INT NOT NULL, FOREIGN KEY (id_location) REFERENCES locations (id), FOREIGN KEY (id_companie) REFERENCES companies (id))
CREATE TABLE
  genders (id INT NOT NULL IDENTITY (1, 1) PRIMARY KEY, gender VARCHAR(255) NOT NULL)
CREATE TABLE
  formats (id INT NOT NULL IDENTITY (1, 1) PRIMARY KEY, format VARCHAR(255) NOT NULL)
CREATE TABLE
  products (
    id INT NOT NULL IDENTITY (1, 1) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    stock INT NOT NULL,
    stock_min INT NOT NULL,
    author VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    sale_price FLOAT NOT NULL,
    rental_price FLOAT,
    id_type INT NOT NULL,
    id_gender INT NOT NULL,
    id_format INT NOT NULL,
    id_branch INT NOT NULL,
    FOREIGN key (id_type) REFERENCES types (id),
    FOREIGN key (id_gender) REFERENCES genders (id),
    FOREIGN key (id_format) REFERENCES formats (id),
    FOREIGN key (id_branch) REFERENCES branchs (id)
  )
CREATE TABLE
  clients (
    id INT NOT NULL IDENTITY (1, 1) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    tel BIGINT NOT NULL,
    birth_date DATE NOT NULL,
    is_partner bit NOT NULL,
    id_location INT NOT NULL,
    id_branch INT NOT NULL,
    FOREIGN key (id_location) REFERENCES locations (id),
    FOREIGN key (id_branch) REFERENCES branchs (id),
  )
CREATE TABLE
  employees (
    id INT NOT NULL IDENTITY (1, 1) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    dni BIGINT NOT NULL,
    email VARCHAR(255) NOT NULL,
    tel BIGINT NOT NULL,
    legajo VARCHAR(255) NOT NULL,
    id_location INT NOT NULL,
    id_branch INT NOT NULL,
    FOREIGN key (id_location) REFERENCES locations (id),
    FOREIGN key (id_branch) REFERENCES branchs (id),
  )
CREATE TABLE
  payment_methods (id INT NOT NULL IDENTITY (1, 1) PRIMARY KEY, payment_method VARCHAR(255) NOT NULL)
CREATE TABLE
  orders (
    id INT NOT NULL IDENTITY (1, 1) PRIMARY KEY,
    number_order INT NOT NULL,
    DATE DATE NOT NULL,
    total FLOAT NOT NULL,
    discount FLOAT NOT NULL,
    id_client INT NOT NULL,
    id_employee INT NOT NULL,
    id_payment_method INT NOT NULL,
    FOREIGN key (id_client) REFERENCES clients (id),
    FOREIGN key (id_employee) REFERENCES employees (id),
    FOREIGN key (id_payment_method) REFERENCES payment_methods (id),
  )
CREATE TABLE
  order_details (
    id INT NOT NULL IDENTITY (1, 1) PRIMARY KEY,
    cant INT NOT NULL,
    is_buy bit NOT NULL,
    price FLOAT NOT NULL,
    date_return DATE,
    id_product INT NOT NULL,
    id_order INT NOT NULL,
    FOREIGN key (id_product) REFERENCES products (id),
    FOREIGN key (id_order) REFERENCES orders (id),
  )
CREATE TABLE
  penalties (id INT NOT NULL IDENTITY (1, 1) PRIMARY KEY, date_return_real DATE NOT NULL, amount_day FLOAT NOT NULL, id_order_detail INT NOT NULL, FOREIGN key (id_order_detail) REFERENCES order_details (id),)
CREATE TABLE
  bills (id INT NOT NULL IDENTITY (1, 1) PRIMARY KEY, cuil BIGINT NOT NULL, location VARCHAR(255) NOT NULL, total FLOAT NOT NULL, id_order INT NOT NULL, FOREIGN key (id_order) REFERENCES orders (id),)
  -- Insertar ciudades de C�rdoba, Argentina
INSERT INTO
  cities (name, cod_postal)
VALUES
  ('C�rdoba', '5000'),
  ('Villa Mar�a', '5900'),
  ('R�o Cuarto', '5800'),
  ('Jes�s Mar�a', '5220'),
  ('La Falda', '5172');

-- Insertar ubicaciones en C�rdoba, Argentina
INSERT INTO
  locations (street, number, id_city)
VALUES
  ('Avenida Principal', 123, 1),
  ('Calle del Centro', 456, 1),
  ('Avenida Norte', 789, 2),
  ('Calle Sur', 321, 3),
  ('Avenida Oeste', 654, 4),
  ('Calle Este', 987, 5);

INSERT INTO
  companies (name)
VALUES
  ('blockbuster cordoba')
INSERT INTO
  branchs (name, id_companie, id_location)
VALUES
  ('Sucursal Principal - Tech Solutions Inc.', 1, 2),
  ('Sede Principal - Global Innovations Co.', 1, 3),
  ('Sucursal Secundaria - Global Innovations Co.', 1, 2),
  ('Sucursal Principal - Green Energy Ltd.', 1, 3),
  ('Sucursal Secundaria - Green Energy Ltd.', 1, 4),
  ('Sede Central - Financial Dynamics Group', 1, 5),
  ('Sucursal de Operaciones - Financial Dynamics Group', 1, 5);

-- Insertar tipos (m�sica, pel�cula, serie)
INSERT INTO
  types (type)
VALUES
  ('M�sica'),
  ('Pel�cula'),
  ('Serie');

INSERT INTO
  genders (gender)
VALUES
  ('Drama'),
  ('Comedia'),
  ('Acci�n');

INSERT INTO
  formats (format)
VALUES
  ('CD'),
  ('DVD'),
  ('Vinilo'),
  ('Blu-ray');

-- Inserciones de clientes con id_branch en 1
INSERT INTO
  clients (name, last_name, email, tel, birth_date, is_partner, id_location, id_branch)
VALUES
  ('Juan', 'Gomez', 'juan@gmail.com', 123456789, '1990-05-15', 1, 2, 1),
  ('Maria', 'Rodriguez', 'maria@gmail.com', 987654321, '1985-08-22', 0, 2, 1),
  ('Pedro', 'Martinez', 'pedro@gmail.com', 555888777, '1992-12-10', 1, 3, 1),
  ('Ana', 'Lopez', 'ana@gmail.com', 33322211, '1980-03-28', 0, 4, 1),
  ('Luis', 'Hernandez', 'luis@gmail.com', 11444777, '1995-06-18', 1, 5, 1);

INSERT INTO
  employees (name, last_name, dni, email, tel, legajo, id_location, id_branch)
VALUES
  ('Carlos', 'Gonzalez', 123456789, 'carlos@gmail.com', 555666777, 'EMP001', 3, 1),
  ('Laura', 'Fernandez', 987654321, 'laura@gmail.com', 333444555, 'EMP002', 2, 1),
  ('Roberto', 'Alvarez', 555666777, 'roberto@gmail.com', 11222333, 'EMP003', 3, 1),
  ('Sofia', 'Mendoza', 333444555, 'sofia@gmail.com', 999888777, 'EMP004', 4, 1),
  ('Alejandro', 'Perez', 11222333, 'alejandro@gmail.com', 777888999, 'EMP005', 5, 1);

-- Inserciones adicionales de productos
INSERT INTO
  products (title, stock, stock_min, author, description, sale_price, rental_price, id_type, id_gender, id_format, id_branch)
VALUES
  ('Inception', 20, 5, 'Christopher Nolan', 'Una pel�cula de ciencia ficci�n y acci�n.', 21.99, 3.99, 2, 3, 4, 1),
  ('Breaking Bad', 15, 4, 'Vince Gilligan', 'Una serie de televisi�n dram�tica y criminal.', 18.99, 3.29, 3, 2, 2, 1),
  ('The Rolling Stones - Sticky Fingers', 25, 8, 'The Rolling Stones', '�lbum cl�sico de rock and roll.', 27.99, 2.79, 1, 2, 3, 1),
  ('Stranger Things 2', 18, 5, 'Duffer Brothers', 'La continuaci�n de la emocionante serie de ciencia ficci�n.', 19.99, 3.79, 3, 1, 2, 1),
  ('The Shawshank Redemption', 28, 7, 'Frank Darabont', 'Una pel�cula dram�tica basada en una historia de Stephen King.', 23.99, 4.29, 2, 1, 4, 1),
  ('Pink Floyd - The Dark Side of the Moon', 32, 10, 'Pink Floyd', 'Uno de los �lbumes m�s vendidos de todos los tiempos.', 29.99, 3.19, 1, 2, 3, 1),
  ('Game of Thrones', 22, 6, 'David Benioff, D. B. Weiss', 'Una serie �pica de fantas�a medieval.', 20.99, 3.59, 3, 1, 2, 1),
  ('Queen - A Night at the Opera', 30, 9, 'Queen', '�lbum que contiene la famosa canci�n Bohemian Rhapsody.', 28.99, 2.89, 1, 2, 3, 1),
  ('The Sopranos', 17, 4, 'David Chase', 'Una serie de televisi�n sobre la vida de un jefe de la mafia.', 17.99, 3.49, 3, 1, 2, 1),
  ('Led Zeppelin - IV', 26, 8, 'Led Zeppelin', '�lbum ic�nico de rock con Stairway to Heaven.', 26.99, 2.69, 1, 2, 3, 1);

INSERT INTO
  payment_methods (payment_method)
VALUES
  ('Mercado Pago'),
  ('Transferencia'),
  ('Efectivo'),
  ('Crypto');

-- Inserciones de pedidos
INSERT INTO
  orders (number_order, DATE, total, discount, id_client, id_employee, id_payment_method)
VALUES
  (1001, '2024-01-10', 150.50, 10.00, 2, 2, 2),
  (1002, '2024-01-1', 220.75, 15.50, 2, 2, 3),
  (1003, '2024-01-12', 75.20, 5.25, 3, 3, 3),
  (1004, '2024-01-1', 300.00, 20.00, 4, 4, 4),
  (1005, '2024-01-14', 180.90, 12.75, 5, 5, 3),
  (1006, '2024-01-15', 90.30, 6.25, 2, 4, 2),
  (1007, '2024-01-16', 120.75, 8.50, 2, 2, 3),
  (1008, '2024-01-17', 45.60, 3.25, 3, 3, 4),
  (1009, '2024-01-18', 250.00, 17.50, 4, 4, 2),
  (1010, '2024-01-19', 15.80, 9.50, 5, 5, 2);

INSERT INTO
  order_details (cant, is_buy, price, date_return, id_product, id_order)
VALUES
  (2, 1, 29.99, NULL, 4, 2),
  (1, 0, 4.99, '2024-02-01', 4, 2),
  (3, 1, 17.99, NULL, 5, 2),
  (1, 1, 24.99, NULL, 5, 2),
  (2, 0, 14.99, '2024-02-03', 4, 2),
  (1, 1, 9.99, NULL, 6, 2),
  (4, 1, 27.99, NULL, 8, 3),
  (1, 0, 3.99, '2024-02-05', 3, 3),
  (2, 1, 22.99, NULL, 2, 3),
  (3, 1, 19.99, NULL, 4, 4),
  (2, 0, 6.99, '2024-02-07', 6, 4),
  (1, 1, 1.99, NULL, 8, 4),
  (1, 1, 29.99, NULL, 2, 5),
  (3, 0, 12.99, '2024-02-09', 2, 5),
  (2, 1, 23.99, NULL, 3, 5),
  (2, 1, 15.99, NULL, 2, 6),
  (1, 0, 8.99, '2024-02-1', 2, 6),
  (3, 1, 18.99, NULL, 1, 6);

INSERT INTO
  bills (cuil, location, total, id_order)
VALUES
  (234567890, 'Ciudad B', 218.25, 2),
  (34567890123, 'Ciudad C', 80.45, 3),
  (45678901234, 'Ciudad D', 320.00, 4),
  (56789012345, 'Ciudad E', 168.15, 5),
  (12345678901, 'Ciudad A', 135.50, 6),
  (23456789012, 'Ciudad B', 218.25, 7),
  (34567890123, 'Ciudad C', 80.45, 8),
  (45678901234, 'Ciudad D', 320.00, 9),
  (56789012345, 'Ciudad E', 168.15, 7),
  (56789012345, 'Ciudad Z', 168.15, 1);

-- Inserciones de penalidades
INSERT INTO
  penalties (date_return_real, amount_day, id_order_detail)
VALUES
  ('2024-02-15', 5.00, 2);

INSERT INTO
  penalties (date_return_real, amount_day, id_order_detail)
VALUES
  ('2024-02-06', 2.50, 5);

INSERT INTO
  penalties (date_return_real, amount_day, id_order_detail)
VALUES
  ('2024-02-10', 3.75, 8);