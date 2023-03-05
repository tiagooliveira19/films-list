-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 05-Mar-2023 às 10:29
-- Versão do servidor: 10.4.25-MariaDB
-- versão do PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `projeto`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `filmes`
--

CREATE TABLE `filmes` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `genero` varchar(150) DEFAULT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `data_de_lancamento` varchar(255) DEFAULT NULL,
  `pontuacao` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `filmes`
--

INSERT INTO `filmes` (`id`, `titulo`, `genero`, `descricao`, `data_de_lancamento`, `pontuacao`, `createdAt`, `updatedAt`) VALUES
(1, 'Seinfeld', 'Comedy', 'The continuing misadventures of neurotic New York City stand-up comedian Jerry Seinfeld and his equally neurotic New York City friends.', '05 Jul 1989', '8.9', '2023-03-05 09:16:02', '2023-03-05 09:16:02'),
(2, 'Titanic', 'Drama, Romance', 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.', '19 Dec 1997', '7.9', '2023-03-05 09:17:28', '2023-03-05 09:17:28'),
(3, 'Game of Thrones', 'Action, Adventure, Drama', 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.', '17 Apr 2011', '9.2', '2023-03-05 09:17:54', '2023-03-05 09:17:54'),
(4, 'Strange Things', 'Short, Drama, Sci-Fi', 'Mind powers. Manipulation. There are no superheroes in this life.', 'N/A', '9.1', '2023-03-05 09:21:36', '2023-03-05 09:21:36'),
(5, '2 Fast 2 Furious', 'Action, Crime, Thriller', 'Former cop Brian O\'Conner is called upon to bust a dangerous criminal and he recruits the help of a former childhood friend and street racer who has a chance to redeem himself.', '06 Jun 2003', '5.9', '2023-03-05 09:25:53', '2023-03-05 09:25:53');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `filmes`
--
ALTER TABLE `filmes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `filmes`
--
ALTER TABLE `filmes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
