-- Seleccionar la cantidad de pedidos de cada cliente, mostrando la cantidad y el nombre completo del cliento.
SELECT COUNT(o.id) AS 'Cantidad de pedidos', SUM(o.total) AS 'Total', CONCAT(c.name, ' ', c.last_name) AS 'Cliente'
FROM orders o
INNER JOIN clients c ON o.id_client = c.id
GROUP BY c.name, c.last_name
ORDER BY [Cantidad de pedidos] DESC, [Cliente] ASC;

-- Seleccionar que cantidad de cada pedido se compró o alquiló.
SELECT SUM(d.cant) AS 'Cantidad', p.title AS 'Producto' FROM order_details d
INNER JOIN products p ON p.id = d.id_product
GROUP BY p.title;

-- Seleccionar Top 3 de los géneros más solicitados.
SELECT TOP 5 g.gender AS 'Género', SUM(d.cant) AS 'Cantidad' FROM order_details d
INNER JOIN products p ON p.id = d.id_product
INNER JOIN genders g ON g.id = p.id_gender
GROUP BY g.gender
ORDER BY SUM(d.cant) DESC

-- Seleccionar Empleados (legajo, Nombre y Apellido) que trabajaron entre el 12 y 15 de enero ordenados por fecha desc y legajo asc
SELECT e.legajo AS 'Legajo', e.name + ' ' + e.last_name AS 'Nombre', o.date AS 'Fecha' FROM employees e
INNER JOIN orders o ON o.id_employee = e.id
WHERE o.date <= '2024-01-15' AND o.date >= '2024-01-12'
ORDER BY o.date DESC, [Legajo] ASC

-- Seleccionar métodos de pago que hayan sido usados más de dos veces.
SELECT p.payment_method AS 'Método de pago', COUNT(o.id) AS 'Cantidad' FROM payment_methods p
INNER JOIN orders o ON o.id_payment_method = p.id
INNER JOIN clients c ON o.id_client = c.id
WHERE c.is_partner = 1
GROUP BY p.payment_method
HAVING COUNT(o.id) > 1