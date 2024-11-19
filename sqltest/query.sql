SELECT DISTINCT city
FROM station
WHERE city REGEXP '^[aeiou]'
--mysql seleccionar distintos nombres cuya primera letra sea a-e-i-o-u
SELECT DISTINCT city
FROM station
WHERE city REGEXP '[aeiou]$'
--mysql seleccionar distintos nombres cuya ultima letra sea a-e-i-o-u
SELECT libros.titulo, prestamos.fecha_prestamo
FROM libros
INNER JOIN prestamos ON libros.id_libro = prestamos.id_libro
WHERE prestamos.fecha_prestamo > '2024-09-01';
 
SELECT libros.titulo, COUNT(prestamos.id_prestamo) AS cantidad_prestamos
FROM libros
INNER JOIN prestamos ON libros.id_libro = prestamos.id_libro
GROUP BY libros.titulo
HAVING COUNT(prestamos.id_prestamo) > 1;


 