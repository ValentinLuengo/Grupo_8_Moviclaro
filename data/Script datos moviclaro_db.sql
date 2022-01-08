-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: moviclaro_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.21-MariaDB

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
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Samsung'),(2,'Motorola'),(3,'Huawei'),(4,'Apple'),(5,'Xiaomi'),(6,'LG'),(7,'Sony'),(8,'Lenovo'),(9,'Nokia'),(10,'ZTE'),(11,'TCL'),(12,'HTC'),(13,'BlackBerry'),(14,'Alcatel'),(15,'BGH'),(16,'Noblex'),(17,'Kyocera'),(18,'Sagem'),(19,'Bess'),(20,'Palm');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'Negro'),(2,'Blanco'),(3,'Violeta'),(4,'Verde'),(5,'Azul'),(6,'Dorado'),(7,'Plateado'),(8,'Fuscia'),(9,'Rojo'),(10,'Rosa'),(11,'Celeste'),(12,'Naranja'),(13,'Amarillo'),(14,'Gris'),(15,'Verde Claro'),(16,'Celeste Claro'),(17,'Turquesa'),(18,'Marrón'),(19,'Beige'),(20,'Metalizado');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `countries`
--

DROP TABLE IF EXISTS `countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `countries` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countries`
--

LOCK TABLES `countries` WRITE;
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
INSERT INTO `countries` VALUES (1,'Argentina'),(2,'Uruguay'),(3,'Chile'),(4,'Brasil'),(5,'Ecuador'),(6,'Venezuela'),(7,'Bolivia'),(8,'Paraguay'),(9,'Mexico'),(10,'Perú'),(11,'Paraná'),(12,'Cuba'),(13,'Costa Rica'),(14,'Colombia'),(15,'Guatemala'),(16,'Estados Unidos'),(17,'República Dominicana'),(18,'Honduras'),(19,'Nicaragua'),(20,'El Salvador');
/*!40000 ALTER TABLE `countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_categories`
--

DROP TABLE IF EXISTS `product_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_categories`
--

LOCK TABLES `product_categories` WRITE;
/*!40000 ALTER TABLE `product_categories` DISABLE KEYS */;
INSERT INTO `product_categories` VALUES (1,'Ofertas'),(2,'Promociones');
/*!40000 ALTER TABLE `product_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `brand_id` int(11) NOT NULL,
  `model` varchar(100) NOT NULL,
  `stock` int(11) NOT NULL,
  `price` float NOT NULL,
  `image` varchar(100) NOT NULL,
  `product_categories_id` int(11) NOT NULL,
  `color_id` int(11) NOT NULL,
  `description` varchar(500) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `products_FK` (`brand_id`),
  KEY `products_FK_1` (`product_categories_id`),
  KEY `products_FK_2` (`color_id`),
  CONSTRAINT `products_FK` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_FK_1` FOREIGN KEY (`product_categories_id`) REFERENCES `product_categories` (`id`),
  CONSTRAINT `products_FK_2` FOREIGN KEY (`color_id`) REFERENCES `colors` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,1,'Galaxy A01 Core-oferta',20,20000,'image-1637013748757.png',1,1,'Con una pantalla HD+ de 5.3 \\\", el Galaxy A01 Core ofrece una experiencia de inmersión con la gran pantalla panorámica. Disfrutá de tus contenidos con una vista agradable.'),(2,1,'Galaxy A22-promo',40,30000,'sam-a22.jpg',2,2,'Pantalla asombrosa para un desplazamiento verdaderamente fluido. Ampliá tu visión con la pantalla Infinity-U de 6,4\'\' del Galaxy A22 y mirá todo lo que te estabas perdiendo. Gracias a la pantalla Super Amoled HD+ que alcanza los 600 nits1 para lograr más claridad, tus contenidos se ven nítidos, definidos y deslumbrantes. Además, Real Smooth mantiene el desplazamiento fluido en tus juegos y redes sociales.'),(3,2,'Moto G30-promo',34,49999.8,'moto-g30.jpg',2,1,'Motorola presenta el nuevo Moto G30: un teléfono de gama media que presume de características muy exigentes, empezando por su cámara de fotos de alta resolución y su pantalla. De hecho, ofrece desde su diseño interno y externo un equipo de alto rendimiento.'),(4,2,'Moto E6i-oferta',23,65555.6,'image-1637013418948.png',1,2,'Disfrutá al máximo de tus películas, series, sitios web y juegos favoritos en una pantalla ultra wide. La pantalla Max Vision HD+ de 6,1” ofrece la mayor amplitud de visión gracias a su relación de aspecto de 19,5:9. No vas a poder creer poder ver tanto y aun así sostener el teléfono con una sola mano.'),(5,1,'Galaxy A22',22,444444,'sam-a22.jpg',1,5,'Pantalla asombrosa para un desplazamiento verdaderamente fluido. Ampliá tu visión con la pantalla Infinity-U de 6,4\'\' del Galaxy A22 y mirá todo lo que te estabas perdiendo. Gracias a la pantalla Super Amoled HD+ que alcanza los 600 nits1 para lograr más claridad, tus contenidos se ven nítidos, definidos y deslumbrantes. Además, Real Smooth mantiene el desplazamiento fluido en tus juegos y redes sociales.'),(6,1,'Galaxy A32 128GB ',22,22,'image-1639009756235.png',1,1,'Actualizá el modelo de tu smartphone con el nuevo Samsung A32 y acelerá tu experiencia móvil. La velocidad del nuevo celular de Samsung de la Línea A va a cambiar completamente la forma de navegar y compartir contenidos. Vas a lograr desde un juego o streaming más fluido, hasta compartir y bajar contenidos de forma súper rápida.'),(7,2,'Moto G30',2,98520,'sam-a22.jpg',1,1,'Motorola presenta el nuevo Moto G30: un teléfono de gama media que presume de características muy exigentes, empezando por su cámara de fotos de alta resolución y su pantalla. De hecho, ofrece desde su diseño interno y externo un equipo de alto rendimiento.'),(8,1,'Moto Edge 20 Pro',2,33999,'moto-e7.jpg',2,7,'El nuevo Moto E7 es el smartphone ideal para los que buscan un equipo completo y funcional. Este modelo cuenta con una cámara de 48 MP que permite sacar fotos y grabar videos más nítidos y brillantes en cualquier condición de luz, incluso de noche. Además, posee una segunda cámara macro la cual tiene como objetivo capturar hasta los detalles más pequeños.'),(9,1,'Moto G9 Plus',2,102000,'image-1637013418948.png',2,5,'Llegó el Moto G9 Plus con todo lo que querés. Su diseño elegante y compacto, es ideal para utilizarlo con una sola mano durante todo el día sin sentir cansancio. Además de ser un equipo que combina estéticamente con cualquier look, Motorola desarrolló en la carcasa del dispositivo un botón especial que, al presionarlo, inicia rápidamente el asistente de Google para recibir toda la ayuda que necesites con un solo toque.'),(10,1,'Moto G9 Plus',2,102000,'moto-g9plus.jpg',2,5,'Llegó el Moto G9 Plus con todo lo que querés. Su diseño elegante y compacto, es ideal para utilizarlo con una sola mano durante todo el día sin sentir cansancio. Además de ser un equipo que combina estéticamente con cualquier look, Motorola desarrolló en la carcasa del dispositivo un botón especial que, al presionarlo, inicia rápidamente el asistente de Google para recibir toda la ayuda que necesites con un solo toque.'),(11,2,'Moto E6i',2,18999,'image-1637013418948.png',2,5,'Disfrutá al máximo de tus películas, series, sitios web y juegos favoritos en una pantalla ultra wide. La pantalla Max Vision HD+ de 6,1” ofrece la mayor amplitud de visión gracias a su relación de aspecto de 19,5:9. No vas a poder creer poder ver tanto y aun así sostener el teléfono con una sola mano.'),(12,6,'K52',2,31999,'image-1637013549955.png',2,7,'Son 6.6 pulgadas de una Espectacular Pantalla. Gran Pantalla. Con un discreto orificio en la parte delantera, ya no hay nada que se interponga para disfrutar tus contenidos. Ve más allá de la imaginación y siente toda la emoción de las escenas de tus películas y juegos favoritos.'),(13,14,'1V',2,15599,'image-1637013651068.png',2,7,'Alcatel 1V tiene el equilibrio perfecto de vista amplia y tamaño de bolsillo. Su pantalla de vista completa 18: 9 de 5.5¨ te ofrece una vista amplia para disfrutar lo que más te gusta en un dispositivo compacto con un perfil elegante'),(14,1,'Galaxy A01 Core',2,15499,'image-1637013748757.png',2,7,'Con una pantalla HD+ de 5.3 \\\", el Galaxy A01 Core ofrece una experiencia de inmersión con la gran pantalla panorámica. Disfrutá de tus contenidos con una vista agradable.'),(15,11,'20 Y',2,30999,'image-1637013862177.png',2,2,'Con triple cámara AI para capturar cada escena de tu vida y una batería de 4000mAh para que tengas diversión ininterrumpida.'),(16,1,'Galaxy A22',8,41.999,'sam-a22.jpg',1,5,'Pantalla asombrosa para un desplazamiento verdaderamente fluido. Ampliá tu visión con la pantalla Infinity-U de 6,4\'\' del Galaxy A22 y mirá todo lo que te estabas perdiendo. Gracias a la pantalla Super Amoled HD+ que alcanza los 600 nits1 para lograr más claridad, tus contenidos se ven nítidos, definidos y deslumbrantes. Además, Real Smooth mantiene el desplazamiento fluido en tus juegos y redes sociales.'),(17,1,'Galaxy A32 128GB',9,239.999,'sam-a32.jpg',1,2,'Actualizá el modelo de tu smartphone con el nuevo Samsung A32 y acelerá tu experiencia móvil. La velocidad del nuevo celular de Samsung de la Línea A va a cambiar completamente la forma de navegar y compartir contenidos. Vas a lograr desde un juego o streaming más fluido, hasta compartir y bajar contenidos de forma súper rápida.'),(18,2,'Moto G30',2,98520,'moto-g30.jpg',1,1,'Motorola presenta el nuevo Moto G30: un teléfono de gama media que presume de características muy exigentes, empezando por su cámara de fotos de alta resolución y su pantalla. De hecho, ofrece desde su diseño interno y externo un equipo de alto rendimiento.'),(19,1,'Moto Edge 20 Pro',2,33999,'moto-e7.jpg',2,7,'El nuevo Moto E7 es el smartphone ideal para los que buscan un equipo completo y funcional. Este modelo cuenta con una cámara de 48 MP que permite sacar fotos y grabar videos más nítidos y brillantes en cualquier condición de luz, incluso de noche. Además, posee una segunda cámara macro la cual tiene como objetivo capturar hasta los detalles más pequeños.'),(20,1,'Moto G9 Plus',2,102000,'moto-g9plus.jpg',2,5,'Llegó el Moto G9 Plus con todo lo que querés. Su diseño elegante y compacto, es ideal para utilizarlo con una sola mano durante todo el día sin sentir cansancio. Además de ser un equipo que combina estéticamente con cualquier look, Motorola desarrolló en la carcasa del dispositivo un botón especial que, al presionarlo, inicia rápidamente el asistente de Google para recibir toda la ayuda que necesites con un solo toque.'),(21,1,'Moto G9 Plus',2,102000,'moto-g9plus.jpg',2,5,'Llegó el Moto G9 Plus con todo lo que querés. Su diseño elegante y compacto, es ideal para utilizarlo con una sola mano durante todo el día sin sentir cansancio. Además de ser un equipo que combina estéticamente con cualquier look, Motorola desarrolló en la carcasa del dispositivo un botón especial que, al presionarlo, inicia rápidamente el asistente de Google para recibir toda la ayuda que necesites con un solo toque.'),(22,2,'Moto E6i',2,18999,'image-1637013418948.png',2,5,'Disfrutá al máximo de tus películas, series, sitios web y juegos favoritos en una pantalla ultra wide. La pantalla Max Vision HD+ de 6,1” ofrece la mayor amplitud de visión gracias a su relación de aspecto de 19,5:9. No vas a poder creer poder ver tanto y aun así sostener el teléfono con una sola mano.'),(23,6,'K52',2,31999,'image-1637013549955.png',2,7,'Son 6.6 pulgadas de una Espectacular Pantalla. Gran Pantalla. Con un discreto orificio en la parte delantera, ya no hay nada que se interponga para disfrutar tus contenidos. Ve más allá de la imaginación y siente toda la emoción de las escenas de tus películas y juegos favoritos.'),(24,14,'1V',2,15599,'image-1637013651068.png',2,7,'Alcatel 1V tiene el equilibrio perfecto de vista amplia y tamaño de bolsillo. Su pantalla de vista completa 18: 9 de 5.5¨ te ofrece una vista amplia para disfrutar lo que más te gusta en un dispositivo compacto con un perfil elegante'),(25,2,'C-115',4,45000,'image-1637013651068.png',1,9,'Es un celular que puede ser algo así como el \"abuelo\" de las actuales generaciones de celulares. Sobre todo de los Motorola. El Motorola C115 es un teléfono que puede ser considerado como el más básico de la marca. Este equipo sirve para las cuestiones más básicas de la vida: tiene consigo una calculadora cronómetro, convertidor de monedas, identificador y memoria de llamadas y, además, es muy pequeño en dimensiones, mide 98 x 45 x 21 mm y pesa solo 80 gramos.'),(26,2,'C-115',6,2000,'image-1637165665547.jpg',1,4,'Es un celular que puede ser algo así como el \"abuelo\" de las actuales generaciones de celulares. Sobre todo de los Motorola. El Motorola C115 es un teléfono que puede ser considerado como el más básico de la marca. Este equipo sirve para las cuestiones más básicas de la vida: tiene consigo una calculadora cronómetro, convertidor de monedas, identificador y memoria de llamadas y, además, es muy pequeño en dimensiones, mide 98 x 45 x 21 mm y pesa solo 80 gramos.');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_categories`
--

DROP TABLE IF EXISTS `user_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_categories` (
  `user_category_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`user_category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_categories`
--

LOCK TABLES `user_categories` WRITE;
/*!40000 ALTER TABLE `user_categories` DISABLE KEYS */;
INSERT INTO `user_categories` VALUES (1,'cliente'),(2,'admin');
/*!40000 ALTER TABLE `user_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `category_id` int(11) NOT NULL,
  `image` varchar(100) NOT NULL,
  `country_id` int(11) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `users_FK` (`country_id`),
  KEY `users_FK_1` (`category_id`),
  CONSTRAINT `users_FK` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`),
  CONSTRAINT `users_FK_1` FOREIGN KEY (`category_id`) REFERENCES `user_categories` (`user_category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'VIVI','ADMIN',2,'1641570675154_img.png',1,'$2a$10$tq.00H4TmeprKW7e5bs03OylTyA7h4nH7GiyFnWY55lN8yUhflNwu','vivi@gmail.com','5555555'),(2,'vivi cliente','ana',1,'1638151254485_img.png',2,'$2a$10$tq.00H4TmeprKW7e5bs03OylTyA7h4nH7GiyFnWY55lN8yUhflNwu','ana@gmail.com','34568799'),(3,'ghjg','ghjg',1,'',1,'123456','asdf@gmail.com','11111'),(4,'ana','ana',1,'una-imagen',1,'123456','dgdsfg@hot.com','11111'),(5,'hjkl','hjkl',1,'1641159077483_img.png',1,'123456','11111@g.com','11111'),(7,'ghjgk','ghjgk',1,'1641163223226_img.png',1,'$2a$10$JJlqgGY8ev/WkT8R3IOX1ulFjHUtGyDMMaXxXtOSGzgntGMXTKR7C','asdg@gss.com','123444'),(8,'Benedict','Burnyeat',1,'https://robohash.org/perferendisametest.png?size=50x50&set=set1',5,'RW8nUvy7OkgQ','bburnyeat0@vk.com','449-486-9532'),(9,'Harli','Monkton',1,'https://robohash.org/veroetullam.png?size=50x50&set=set1',7,'Hrg9htnpx','hmonkton1@deliciousdays.com','854-807-9640'),(10,'Agnola','Glandon',1,'https://robohash.org/pariatureterror.png?size=50x50&set=set1',9,'VR2Qs2BorXwx','aglandon2@ihg.com','676-525-3601'),(11,'Adriane','Raoux',1,'https://robohash.org/nemoinventoremolestias.png?size=50x50&set=set1',3,'aWeJl119FIq','araoux3@toplist.cz','147-477-0328'),(12,'Evangelia','Claridge',1,'https://robohash.org/pariaturdictacorrupti.png?size=50x50&set=set1',3,'VtMNIc8n','eclaridge4@washington.edu','421-873-2147'),(13,'Rosette','Emnoney',1,'https://robohash.org/autemutdebitis.png?size=50x50&set=set1',2,'Ty1IBxMBev3g','remnoney5@google.com.br','806-248-7063'),(14,'Vito','Walbrook',1,'https://robohash.org/eumdolorrerum.png?size=50x50&set=set1',8,'4XRhq1DDM02','vwalbrook6@behance.net','290-761-9767'),(15,'Sheryl','Ferri',1,'https://robohash.org/repellatvitaesequi.png?size=50x50&set=set1',8,'JTijVVA7tv','sferri7@feedburner.com','935-274-9065'),(16,'Otis','McGahey',1,'https://robohash.org/dolornonunde.png?size=50x50&set=set1',5,'OSldsJSCu','omcgahey8@360.cn','770-562-5108'),(17,'Sammie','Stenbridge',1,'https://robohash.org/utfacilismagnam.png?size=50x50&set=set1',4,'Y7R3V1Cwr','sstenbridge9@apple.com','299-271-5536'),(18,'Trescha','Castanone',1,'https://robohash.org/magnamoditet.png?size=50x50&set=set1',6,'01VEXW9','tcastanonea@ow.ly','883-857-2125'),(19,'Tye','Haskew',1,'https://robohash.org/consequaturminusquo.png?size=50x50&set=set1',6,'zQHeqm','thaskewb@networkadvertising.org','606-494-7917'),(20,'Collie','Smeeton',1,'https://robohash.org/minimaillumprovident.png?size=50x50&set=set1',12,'uXZcRtA8Us','csmeetonc@behance.net','787-650-3760'),(21,'Omar','Choak',1,'https://robohash.org/adipisciquiasint.png?size=50x50&set=set1',15,'cDQTapVmIA','ochoakd@godaddy.com','246-237-4152'),(22,'Syman','O\'Hartnedy',1,'https://robohash.org/sinttotamvelit.png?size=50x50&set=set1',18,'ffPRCXSBVG1','sohartnedye@theglobeandmail.com','462-635-6355'),(23,'Gina','Sainz',1,'https://robohash.org/doloremqueabdelectus.png?size=50x50&set=set1',20,'J0K2H0rmIAWH','gsainzf@woothemes.com','980-927-3680'),(24,'Caddric','Kynsey',1,'https://robohash.org/quiutquaerat.png?size=50x50&set=set1',19,'E3y3e6mtiADn','ckynseyg@fda.gov','907-723-8901'),(25,'Hendrika','Hazelgreave',1,'https://robohash.org/porroestrerum.png?size=50x50&set=set1',10,'ftStolYoxK4x','hhazelgreaveh@ow.ly','239-949-4502'),(26,'Shermie','Berkowitz',1,'https://robohash.org/doloresrerumquasi.png?size=50x50&set=set1',16,'1CrxAmIAWH','sberkowitzi@yellowbook.com','939-495-3864'),(27,'Tish','Godfery',1,'https://robohash.org/doloreomnisratione.png?size=50x50&set=set1',6,'3QlyF7mIAWH','tgodferyj@example.com','931-216-5093');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'moviclaro_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08 12:32:13
