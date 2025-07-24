-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 26 juin 2025 à 14:37
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `army_finder`
--

-- --------------------------------------------------------

--
-- Structure de la table `ajoute_aux_favoris`
--

CREATE TABLE `ajoute_aux_favoris` (
  `Id_Army` bigint(20) UNSIGNED NOT NULL,
  `Id_User` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `armies`
--

CREATE TABLE `armies` (
  `Id_Army` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `univers` varchar(50) DEFAULT NULL,
  `faction` char(50) DEFAULT NULL,
  `points` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `photo` text DEFAULT NULL,
  `date_creation` date DEFAULT NULL,
  `Id_User` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `contient`
--

CREATE TABLE `contient` (
  `Id_Army` bigint(20) UNSIGNED NOT NULL,
  `Id_Unit` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `est_présent_sur`
--

CREATE TABLE `est_présent_sur` (
  `Id_User` bigint(20) UNSIGNED NOT NULL,
  `Id_Social` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `galerie`
--

CREATE TABLE `galerie` (
  `Id_Galerie` bigint(20) UNSIGNED NOT NULL,
  `photo` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `présente`
--

CREATE TABLE `présente` (
  `Id_Army` bigint(20) UNSIGNED NOT NULL,
  `Id_Galerie` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

CREATE TABLE `roles` (
  `Id_Roles` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `description` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `social`
--

CREATE TABLE `social` (
  `Id_Social` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `link` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `units`
--

CREATE TABLE `units` (
  `Id_Unit` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `nombre` int(11) DEFAULT NULL,
  `equipment` varchar(50) DEFAULT NULL,
  `stratagems` varchar(50) DEFAULT NULL,
  `link` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `Id_User` bigint(20) UNSIGNED NOT NULL,
  `pseudo` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` text DEFAULT NULL,
  `Id_Roles` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `ajoute_aux_favoris`
--
ALTER TABLE `ajoute_aux_favoris`
  ADD PRIMARY KEY (`Id_Army`,`Id_User`),
  ADD KEY `Id_User` (`Id_User`);

--
-- Index pour la table `armies`
--
ALTER TABLE `armies`
  ADD PRIMARY KEY (`Id_Army`),
  ADD UNIQUE KEY `Id_Army` (`Id_Army`),
  ADD KEY `Id_User` (`Id_User`);

--
-- Index pour la table `contient`
--
ALTER TABLE `contient`
  ADD PRIMARY KEY (`Id_Army`,`Id_Unit`),
  ADD KEY `Id_Unit` (`Id_Unit`);

--
-- Index pour la table `est_présent_sur`
--
ALTER TABLE `est_présent_sur`
  ADD PRIMARY KEY (`Id_User`,`Id_Social`),
  ADD KEY `Id_Social` (`Id_Social`);

--
-- Index pour la table `galerie`
--
ALTER TABLE `galerie`
  ADD PRIMARY KEY (`Id_Galerie`),
  ADD UNIQUE KEY `Id_Galerie` (`Id_Galerie`);

--
-- Index pour la table `présente`
--
ALTER TABLE `présente`
  ADD PRIMARY KEY (`Id_Army`,`Id_Galerie`),
  ADD KEY `Id_Galerie` (`Id_Galerie`);

--
-- Index pour la table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`Id_Roles`),
  ADD UNIQUE KEY `Id_Roles` (`Id_Roles`);

--
-- Index pour la table `social`
--
ALTER TABLE `social`
  ADD PRIMARY KEY (`Id_Social`),
  ADD UNIQUE KEY `Id_Social` (`Id_Social`);

--
-- Index pour la table `units`
--
ALTER TABLE `units`
  ADD PRIMARY KEY (`Id_Unit`),
  ADD UNIQUE KEY `Id_Unit` (`Id_Unit`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Id_User`),
  ADD UNIQUE KEY `Id_User` (`Id_User`),
  ADD UNIQUE KEY `pseudo` (`pseudo`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `Id_Roles` (`Id_Roles`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `armies`
--
ALTER TABLE `armies`
  MODIFY `Id_Army` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `galerie`
--
ALTER TABLE `galerie`
  MODIFY `Id_Galerie` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `roles`
--
ALTER TABLE `roles`
  MODIFY `Id_Roles` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `social`
--
ALTER TABLE `social`
  MODIFY `Id_Social` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `units`
--
ALTER TABLE `units`
  MODIFY `Id_Unit` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `Id_User` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `ajoute_aux_favoris`
--
ALTER TABLE `ajoute_aux_favoris`
  ADD CONSTRAINT `ajoute_aux_favoris_ibfk_1` FOREIGN KEY (`Id_Army`) REFERENCES `armies` (`Id_Army`),
  ADD CONSTRAINT `ajoute_aux_favoris_ibfk_2` FOREIGN KEY (`Id_User`) REFERENCES `users` (`Id_User`);

--
-- Contraintes pour la table `armies`
--
ALTER TABLE `armies`
  ADD CONSTRAINT `armies_ibfk_1` FOREIGN KEY (`Id_User`) REFERENCES `users` (`Id_User`);

--
-- Contraintes pour la table `contient`
--
ALTER TABLE `contient`
  ADD CONSTRAINT `contient_ibfk_1` FOREIGN KEY (`Id_Army`) REFERENCES `armies` (`Id_Army`),
  ADD CONSTRAINT `contient_ibfk_2` FOREIGN KEY (`Id_Unit`) REFERENCES `units` (`Id_Unit`);

--
-- Contraintes pour la table `est_présent_sur`
--
ALTER TABLE `est_présent_sur`
  ADD CONSTRAINT `est_présent_sur_ibfk_1` FOREIGN KEY (`Id_User`) REFERENCES `users` (`Id_User`),
  ADD CONSTRAINT `est_présent_sur_ibfk_2` FOREIGN KEY (`Id_Social`) REFERENCES `social` (`Id_Social`);

--
-- Contraintes pour la table `présente`
--
ALTER TABLE `présente`
  ADD CONSTRAINT `présente_ibfk_1` FOREIGN KEY (`Id_Army`) REFERENCES `armies` (`Id_Army`),
  ADD CONSTRAINT `présente_ibfk_2` FOREIGN KEY (`Id_Galerie`) REFERENCES `galerie` (`Id_Galerie`);

--
-- Contraintes pour la table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`Id_Roles`) REFERENCES `roles` (`Id_Roles`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
