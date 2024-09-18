-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 13, 2024 at 05:31 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecom`
--

-- --------------------------------------------------------

--
-- Table structure for table `addproduct`
--

CREATE TABLE `addproduct` (
  `id` int(11) NOT NULL,
  `P_Name` varchar(255) NOT NULL,
  `Brand` varchar(255) NOT NULL,
  `P_Type` varchar(255) NOT NULL,
  `P_Price` varchar(255) NOT NULL,
  `Detail` varchar(255) NOT NULL,
  `Img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `addproduct`
--

INSERT INTO `addproduct` (`id`, `P_Name`, `Brand`, `P_Type`, `P_Price`, `Detail`, `Img`) VALUES
(2, 'Samsung A10', 'Samsung', 'Mobile', '25000', '5G Processor - Snapdragon 6s Gen 3 Fast 5G phone with a Fast processor in the segment. The moto g45 5G is powered by the Snapdragon 6s Gen 3 octa-core processor and LPDDR4X memory.', ''),
(3, 'Realme 1 Pro 5G', 'Realme', 'Mobile', '50000', 'Explore the realme P1 Pro 5G, where power and brilliance collide. Enjoy beautiful images on this 120 Hz curved AMOLED panel with Pro-XDR technology for amazing HDR effects. Even in low light, your eyes.', 'uploads\\kural.jpg'),
(4, 'Cotton Blend Black T-Shirt', 'NB NICKY BOY ', 'Dress', '219', 'Look confident with this Casual Men T-Shirt It is regular machine wash. This fabric is soft in touch and it makes feel so comfort when you wear. The fabric does not pill and the color will not fade easily. ', 'uploads\\T-shirt.jpeg'),
(5, 'Fabric 3 Seater Sofa ', 'TIRTHANKARA ', 'Furniture', '8099', '\r\nThe color of the product may vary slightly from the picture displayed on your screen: this is due to lighting, pixel quality and color settings. Please check the product dimensions to ensure the product will fit in the desired location. ', '');

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `Username` varchar(100) DEFAULT NULL,
  `Pass` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `Username`, `Pass`) VALUES
(1, 'admin', '123');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phno` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `phno`, `subject`, `message`) VALUES
(1, 'vfjvnj', 'vdvdv@gmil.com', '4454879654', 'dcsdcwfc', '  cjsdjcnjdndwdkwkd');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `total_price` decimal(10,2) DEFAULT NULL,
  `user_name` varchar(100) DEFAULT NULL,
  `address` text,
  `phone` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `product_id`, `quantity`, `total_price`, `user_name`, `address`, `phone`) VALUES
(1, 2, 1, '0.00', 'Aro edisan alwa ', 'House\nMamaraththupatti.', '789456130'),
(2, 5, 1, '8746.92', 'surya', 'pdkt', '8546971230'),
(3, 4, 2, '473.04', 'saro', 'trichy', '5897463210'),
(4, 5, 5, '43734.60', 'imman', 'pdkt', '3214569870'),
(5, 4, 1, '236.52', 'Aro edisan alwa C', 'House\nMamaraththupatti', '9874563210'),
(6, 4, 1, '236.52', 'ARO EDISAN ALWA CK', 'Mamarathupatti', '8838431399'),
(7, 4, 1, '236.52', 'surya', 'Mamarathupatti\n', '9045454560'),
(8, 5, 1, '8746.92', 'surya', 'ljsklflksddusbsios', '4545454545'),
(9, 4, 1, '236.52', 'surya', 'PDKT', '4545454545'),
(10, 3, 1, '54000.00', 'SSSuurya', 'djlkdinkdni', '4141414141'),
(11, 5, 1, '8746.92', 'evelyn', 'pdkt', '9874563210');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(225) NOT NULL,
  `email` varchar(225) NOT NULL,
  `password` varchar(225) NOT NULL,
  `address` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `address`) VALUES
(1, 'surya', 'surya@gmail.com', '232345', 'pdkt'),
(2, 'edison', 'edi@gmail.com', 'edi56567', 'pdkt'),
(3, 'edison', 'edisan@gmail.com', 'edi56567', 'trichy'),
(4, 'leela', 'leela@gmail.com', 'leela12345', 'pdkt\r\n'),
(5, 'Aro', 'aro@gmail.com', '@edi', 'chennai');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addproduct`
--
ALTER TABLE `addproduct`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addproduct`
--
ALTER TABLE `addproduct`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `addproduct` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
