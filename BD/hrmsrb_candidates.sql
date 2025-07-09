-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: 167.234.234.188    Database: hrmsrb
-- ------------------------------------------------------
-- Server version	8.0.42-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `candidates`
--

DROP TABLE IF EXISTS `candidates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `candidates` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `experience` text,
  `education` text,
  `resume_pdf` varchar(255) DEFAULT NULL,
  `id_vacancy` int DEFAULT NULL,
  `application_status` enum('aplicado','em processo','aprovado','rejeitado') DEFAULT 'aplicado',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidates`
--

LOCK TABLES `candidates` WRITE;
/*!40000 ALTER TABLE `candidates` DISABLE KEYS */;
INSERT INTO `candidates` VALUES (18,'Ana Oliveira','samuka-srb@live.com','1699768-9503','2024-09-22','Psicóloga Clínica na Clínica  ABC  Empresa XYZ ',' Bacharel em Psicologia pela Universidade de São Paulo ',NULL,25,'em processo','2024-09-03 00:03:48','2024-10-20 19:20:50'),(19,'Carlos Pereira','samuka-srb@live.com','(16)99404-0438','2010-02-04','Desenvolvedor Backend na Tech SolutionsXYZ  estágio em Desenvolvimento de Software na InovaXyZ ','Engenharia de Software pela Universidade Federal do Rio de Janeiro UFRJ',NULL,25,'aprovado','2024-09-03 16:14:56','2024-10-20 19:20:50'),(20,'Maria Santos','samuka-srb@live.com','(16) 99404-0438','1996-02-04','Gerente de Projetos na Empresa ABC ',' Bacharel em Administração de Empresas pela Fundação Getúlio Vargas',NULL,25,'aplicado','2024-09-04 22:03:50','2024-10-20 19:20:50'),(21,'João Silva','samuka-srb@live.com','(16) 99404-0438','2024-09-12',' Análise de Dados na TechAnalytics ','Engenheiro de Dados na DataScience Inc',NULL,25,'rejeitado','2024-09-04 22:05:43','2024-10-20 19:20:50');
/*!40000 ALTER TABLE `candidates` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-14  9:54:14
