-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 07, 2019 at 01:42 PM
-- Server version: 10.3.17-MariaDB-0+deb10u1
-- PHP Version: 7.0.33-0+deb9u6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `practicaGI`
--

-- --------------------------------------------------------

--
-- Table structure for table `tMuestra`
--

CREATE TABLE `tMuestra` (
  `ID` int(11) NOT NULL,
  `NIF_Paciente` varchar(50) DEFAULT NULL,
  `Cultivo` varchar(50) DEFAULT NULL,
  `Solucion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tMuestra`
--

INSERT INTO `tMuestra` (`ID`, `NIF_Paciente`, `Cultivo`, `Solucion`) VALUES
(5, '11111111A', 'sangre', 10),
(6, '22222222B', 'orina', 5),
(7, '11111111A', 'citologia', 17),
(8, '22222222B', 'heces', 1),
(14, 'niiif', 'asdasd', 5),
(25, '22222222B', 'orina', 6),
(28, 'paciente28', 'AS', 2);

-- --------------------------------------------------------

--
-- Table structure for table `tPermiso`
--

CREATE TABLE `tPermiso` (
  `rolName` varchar(50) NOT NULL,
  `pantalla` varchar(50) NOT NULL,
  `acceso` bit(1) NOT NULL,
  `insertar` bit(1) NOT NULL,
  `modificar` bit(1) NOT NULL,
  `borrar` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tPermiso`
--

INSERT INTO `tPermiso` (`rolName`, `pantalla`, `acceso`, `insertar`, `modificar`, `borrar`) VALUES
('administrador', 'MUESTRAS', b'1', b'1', b'1', b'1'),
('invitado', 'MUESTRAS', b'1', b'0', b'0', b'0'),
('paciente', 'MUESTRAS', b'0', b'0', b'0', b'0'),
('usuario', 'MUESTRAS', b'1', b'0', b'1', b'0');

-- --------------------------------------------------------

--
-- Table structure for table `tRol`
--

CREATE TABLE `tRol` (
  `rolName` varchar(50) NOT NULL,
  `rolDes` varchar(255) DEFAULT NULL,
  `admin` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tRol`
--

INSERT INTO `tRol` (`rolName`, `rolDes`, `admin`) VALUES
('administrador', 'administrador', b'1'),
('invitado', 'farmaceutico', b'0'),
('paciente', 'paciente', b'0'),
('usuario', 'medico', b'0');

-- --------------------------------------------------------

--
-- Table structure for table `tSolucion`
--

CREATE TABLE `tSolucion` (
  `ID` int(11) NOT NULL,
  `Solucion` varchar(50) DEFAULT NULL,
  `Uso` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tSolucion`
--

INSERT INTO `tSolucion` (`ID`, `Solucion`, `Uso`) VALUES
(1, 'Acido-Alcohol', 'Tinción Ziehl-Neelsen'),
(2, 'Azul de metileno', 'Tinción de flagelos'),
(3, 'Azul de metileno de Loeffler', 'Tinción simple'),
(4, 'Colorante para esporas', 'Solución acuosa saturada de verde malaquita'),
(5, 'Colorante para flagelos de Leifson', 'Tinción para lograr observar flagelos de bacterias'),
(6, 'Cristal violeta', 'Tinción Gram'),
(7, 'Eosina', 'Observación de células sanguíneas'),
(8, 'Fucsina diluida', 'Tinción Gram'),
(9, 'Fucsina fenicada de Ziehl-Neelsen', 'Tinción ácido-alcohol resistente'),
(10, 'Hematoxilina', 'Observación de células sanguíneas'),
(11, 'Lactofenol', 'Preparaciones microscópicas en fresco de mohos'),
(12, 'Lactofenol al Azul Algodón', 'Tinción de mohos'),
(13, 'Lugol', 'Tinción Gram'),
(14, 'Orceína A', 'Tinción de cromosomas'),
(15, 'Orceína B', 'Tinción de cromosomas'),
(16, 'Safranina', 'Tinción Gram'),
(17, 'Tinción de Papanicolaou', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tUsuario`
--

CREATE TABLE `tUsuario` (
  `nif` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `rolName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tUsuario`
--

INSERT INTO `tUsuario` (`nif`, `password`, `rolName`) VALUES
('00000000X', 'admin', 'administrador'),
('11111111A', '1', 'invitado'),
('22222222B', '2', 'paciente'),
('33333333C', '3', 'invitado'),
('44444444D', '4', 'usuario'),
('admin', 'admin', 'administrador'),
('invitado', 'invitado', 'invitado'),
('paciente', 'paciente', 'paciente'),
('usuario', 'usuario', 'usuario');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tMuestra`
--
ALTER TABLE `tMuestra`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tPermiso`
--
ALTER TABLE `tPermiso`
  ADD PRIMARY KEY (`rolName`,`pantalla`);

--
-- Indexes for table `tRol`
--
ALTER TABLE `tRol`
  ADD PRIMARY KEY (`rolName`);

--
-- Indexes for table `tSolucion`
--
ALTER TABLE `tSolucion`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tUsuario`
--
ALTER TABLE `tUsuario`
  ADD PRIMARY KEY (`nif`),
  ADD KEY `fk_tUsuario_tRol1` (`rolName`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tPermiso`
--
ALTER TABLE `tPermiso`
  ADD CONSTRAINT `fk_tPermiso_tRol` FOREIGN KEY (`rolName`) REFERENCES `tRol` (`rolName`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `tUsuario`
--
ALTER TABLE `tUsuario`
  ADD CONSTRAINT `fk_tUsuario_tRol1` FOREIGN KEY (`rolName`) REFERENCES `tRol` (`rolName`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
