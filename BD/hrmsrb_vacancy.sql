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
-- Table structure for table `vacancy`
--

DROP TABLE IF EXISTS `vacancy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vacancy` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `address` varchar(255) NOT NULL,
  `city_id` int DEFAULT NULL,
  `state_id` int DEFAULT NULL,
  `salary` decimal(10,2) DEFAULT NULL,
  `employment_type_id` int DEFAULT NULL,
  `company_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `banner` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `city_id` (`city_id`),
  KEY `employment_type_id` (`employment_type_id`),
  KEY `company_id` (`company_id`),
  CONSTRAINT `vacancy_ibfk_1` FOREIGN KEY (`employment_type_id`) REFERENCES `employment_types` (`id`),
  CONSTRAINT `vacancy_ibfk_2` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`),
  CONSTRAINT `vacancy_ibfk_3` FOREIGN KEY (`city_id`) REFERENCES `city` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vacancy`
--

LOCK TABLES `vacancy` WRITE;
/*!40000 ALTER TABLE `vacancy` DISABLE KEYS */;
INSERT INTO `vacancy` VALUES (25,'Gerente de Projetos','O gerente de projetos será responsável por liderar equipes e garantir a entrega dos projetos no prazo.\r\n\r\n\r\nAKJFkslajfklsjdfklsdjklfjdskl','MIGUEL MErmejo',NULL,NULL,5200.00,3,16,'2024-09-11 16:26:58','2024-10-20 19:56:50','C:\\Users\\Samuel R Batista\\Desktop\\3_WorkSpace-Prod\\hrmsrbapi\\src\\uploads\\1729454210522-2842579.jpg'),(26,'Desenvolvedor Full Stack','Estamos em busca de um desenvolvedor full stack com experiência em Node.js, React e MySQL para integrar nossa equipe. Responsável por criar APIs e interfaces de usuário otimizadas.','MIGUEL MErmejo ',NULL,NULL,520000.00,3,21,'2024-09-11 16:29:33','2024-10-20 19:52:02','C:\\Users\\Samuel R Batista\\Desktop\\3_WorkSpace-Prod\\hrmsrbapi\\src\\uploads\\1729453922818-2842579.jpg'),(27,'Designer UI UX','O profissional será responsável por criar protótipos e interfaces atraentes e funcionais para nossos produtos digitais. Foco em melhorar a experiência do usuário.','MIGUEL MErmejo',NULL,NULL,50000.00,2,21,'2024-09-11 18:35:34','2024-10-20 19:55:30','C:\\Users\\Samuel R Batista\\Desktop\\3_WorkSpace-Prod\\hrmsrbapi\\src\\uploads\\1729454130323-banner.webp'),(28,'Gerente de Projetos','Estamos em busca de um desenvolvedor full stack com experiência em Node.js, React e MySQL para integrar nossa equipe. Responsável por criar APIs e interfaces de usuário otimizadas.','Av Paulista',554,17,820000.00,2,16,'2024-09-12 15:49:07','2024-10-20 19:53:11','C:\\Users\\Samuel R Batista\\Desktop\\3_WorkSpace-Prod\\hrmsrbapi\\src\\uploads\\1729453991217-banner2.jpg'),(29,'Vaga teste','Estamos em busca de um desenvolvedor full stack com experiência em Node.js, React e MySQL para integrar nossa equipe. Responsável por criar APIs e interfaces de usuário otimizadas.\r\n\r\nManari','Rua Miguel Mermejo',NULL,NULL,200000.00,4,20,'2024-10-20 19:29:21','2024-10-20 19:53:51','C:\\Users\\Samuel R Batista\\Desktop\\3_WorkSpace-Prod\\hrmsrbapi\\src\\uploads\\1729454031254-2842579.jpg');
/*!40000 ALTER TABLE `vacancy` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-14  9:54:13
