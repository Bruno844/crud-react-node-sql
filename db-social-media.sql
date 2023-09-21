-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-09-2023 a las 04:18:59
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db-social-media`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publishes`
--

CREATE TABLE `publishes` (
  `id` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `date` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `location` varchar(255) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `publishes`
--

INSERT INTO `publishes` (`id`, `description`, `date`, `image`, `location`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, 'paseo con mi perrita en el parque', '2023-09-18', 'la gina', 'cipolletti', 1, '2023-09-18 20:27:57', '2023-09-18 20:27:57');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `createdAt`, `updatedAt`) VALUES
(1, 'maximiliano', 'maxi123', 'theboy@gmail.com', '2023-09-18 20:25:26', '2023-09-18 20:25:26'),
(2, 'bruno', '123455', 'brunoruiz@gmail.com', '2023-09-18 20:25:53', '2023-09-18 20:25:53'),
(4, 'cerati', '567', 'cerati@gmail.com', '2023-09-20 20:38:05', '2023-09-20 20:38:05');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `publishes`
--
ALTER TABLE `publishes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `publishes`
--
ALTER TABLE `publishes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `publishes`
--
ALTER TABLE `publishes`
  ADD CONSTRAINT `publishes_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
