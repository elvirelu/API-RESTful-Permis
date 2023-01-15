--
-- Database: bdpermis
--
CREATE DATABASE IF NOT EXISTS bdPermis DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE bdPermis;

-- --------------------------------------------------------

--
-- Table structure for table permis
--

DROP TABLE IF EXISTS permis;
CREATE TABLE permis (
  Permis_Numéro int(11) PRIMARY KEY NOT NULL,
  Permis_Date_de_début  varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  Permis_Date_de_fin varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  Gardien_Territoire_ex_villes varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  Animal_Type_de_permis varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  Animal_Nom varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  Animal_Catégorie_race_primaire_de_chiens varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  Animal_Race_primaire_des_chiens varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  Animal_Race_croisé_des_chiens varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  Animal_Sexe varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  Animal_Couleur varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  Animal_Date_de_naissance int(11) NOT NULL,
  Animal_Vaccination int(11) NOT NULL,
  Animal_Stérilisation int(11) NOT NULL,
  Animal_Poids_kg decimal(11,2) NOT NULL,
  Animal_Micropuce int(11) NOT NULL,
  Animal_Potentiellement_dangereux int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

DROP TABLE IF EXISTS membres;
CREATE TABLE membres (
  idm int(11) PRIMARY KEY AUTO_INCREMENT,
  nom  varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  prenom varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  courriel varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  motdepass varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  cle varchar(80) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
