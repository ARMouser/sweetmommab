-- MySQL dump 10.13  Distrib 5.7.17, for osx10.12 (x86_64)
--
-- Host: localhost    Database: SMB
-- ------------------------------------------------------
-- Server version	5.7.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Bakeries`
--

DROP TABLE IF EXISTS `Bakeries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Bakeries` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Bakeries`
--

LOCK TABLES `Bakeries` WRITE;
/*!40000 ALTER TABLE `Bakeries` DISABLE KEYS */;
/*!40000 ALTER TABLE `Bakeries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `OrderProducts`
--

DROP TABLE IF EXISTS `OrderProducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `OrderProducts` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `OrderId` int(11) NOT NULL,
  `ProductId` int(11) NOT NULL,
  PRIMARY KEY (`OrderId`,`ProductId`),
  KEY `ProductId` (`ProductId`),
  CONSTRAINT `orderproducts_ibfk_1` FOREIGN KEY (`OrderId`) REFERENCES `Orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `orderproducts_ibfk_2` FOREIGN KEY (`ProductId`) REFERENCES `Products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `OrderProducts`
--

LOCK TABLES `OrderProducts` WRITE;
/*!40000 ALTER TABLE `OrderProducts` DISABLE KEYS */;
/*!40000 ALTER TABLE `OrderProducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Orders`
--

DROP TABLE IF EXISTS `Orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `custom` text,
  `date` datetime DEFAULT NULL,
  `finished` tinyint(1) DEFAULT '0',
  `sent` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Orders`
--

LOCK TABLES `Orders` WRITE;
/*!40000 ALTER TABLE `Orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `Orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Products`
--

DROP TABLE IF EXISTS `Products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text,
  `price` text,
  `photo` varchar(255) DEFAULT NULL,
  `custom` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Products`
--

LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */;
INSERT INTO `Products` VALUES (1,'Peanut Butter Cookies','12','10','pbcookies.png',NULL,'2017-07-28 18:13:41','2017-07-28 18:13:41'),(2,'White Bread','','','',NULL,'2017-07-28 18:15:56','2017-07-28 18:15:56'),(3,'Thumb Prints!','','','',NULL,'2017-07-28 18:17:09','2017-07-28 18:17:09'),(4,'Wilson','','','',NULL,'2017-07-28 18:17:58','2017-07-28 18:17:58'),(5,'Wilson','','','',NULL,'2017-07-28 18:18:01','2017-07-28 18:18:01'),(6,'Phillips','','','',NULL,'2017-07-28 18:19:10','2017-07-28 18:19:10'),(7,'Camera','','','',NULL,'2017-07-28 18:22:29','2017-07-28 18:22:29'),(8,'Tria','','','',NULL,'2017-07-28 18:31:36','2017-07-28 18:31:36'),(9,'Muffin','','','',NULL,'2017-07-29 15:28:10','2017-07-29 15:28:10'),(10,'cookies','','','',NULL,'2017-07-29 15:30:58','2017-07-29 15:30:58'),(11,'Cakes','','','',NULL,'2017-07-29 15:32:28','2017-07-29 15:32:28'),(12,'Cake','','','',NULL,'2017-07-29 15:34:03','2017-07-29 15:34:03'),(13,' Pizza','','','',NULL,'2017-07-29 15:41:11','2017-07-29 15:41:11'),(14,'Pizza','','','',NULL,'2017-07-29 15:42:13','2017-07-29 15:42:13'),(15,'K','','','',NULL,'2017-07-29 15:42:39','2017-07-29 15:42:39'),(16,'K','','','',NULL,'2017-07-29 15:42:40','2017-07-29 15:42:40'),(17,' Cake','','','',NULL,'2017-07-29 15:43:29','2017-07-29 15:43:29'),(18,' M','','','',NULL,'2017-07-29 15:47:47','2017-07-29 15:47:47'),(19,' Price','','','',NULL,'2017-07-29 15:48:41','2017-07-29 15:48:41'),(20,'Canta','','','',NULL,'2017-07-29 15:50:52','2017-07-29 15:50:52'),(21,'Ch','','','',NULL,'2017-07-29 15:51:07','2017-07-29 15:51:07'),(22,'Cake','1','20','cake.jpg',NULL,'2017-07-29 15:51:47','2017-07-29 15:51:47'),(23,'Cake','','','',NULL,'2017-07-29 15:57:32','2017-07-29 15:57:32'),(24,'Cake','','','',NULL,'2017-07-29 16:00:12','2017-07-29 16:00:12'),(25,'C','','','',NULL,'2017-07-29 16:00:36','2017-07-29 16:00:36'),(26,'c','','','',NULL,'2017-07-29 16:01:37','2017-07-29 16:01:37'),(27,'c','','','',NULL,'2017-07-29 16:02:32','2017-07-29 16:02:32'),(28,'Ca','','','',NULL,'2017-07-29 16:03:13','2017-07-29 16:03:13');
/*!40000 ALTER TABLE `Products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Recommendations`
--

DROP TABLE IF EXISTS `Recommendations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Recommendations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `approved` tinyint(1) DEFAULT '0',
  `text` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `recommendations_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Recommendations`
--

LOCK TABLES `Recommendations` WRITE;
/*!40000 ALTER TABLE `Recommendations` DISABLE KEYS */;
/*!40000 ALTER TABLE `Recommendations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `Users_username_unique` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-07-29 14:02:29
