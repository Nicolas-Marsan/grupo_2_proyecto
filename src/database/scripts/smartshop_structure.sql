    -- MySQL Workbench Forward Engineering

    SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
    SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
    SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
    
    -- -----------------------------------------------------
    -- Schema smartshop_db
    -- -----------------------------------------------------
    
    -- -----------------------------------------------------
    -- Schema smartshop_db
    -- -----------------------------------------------------
    CREATE SCHEMA IF NOT EXISTS `smartshop_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;
    USE `smartshop_db` ;
    
    
    -- -----------------------------------------------------
    -- Table `smartshop_db`.`usuarios`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `smartshop_db`.`usuarios` (
      `id` INT NOT NULL AUTO_INCREMENT,
      `nombre` VARCHAR(255) COLLATE utf8mb4_unicode_ci  NOT NULL,
      `apellido` VARCHAR(255) COLLATE utf8mb4_unicode_ci  NOT NULL,
      `mail` VARCHAR(255) COLLATE utf8mb4_unicode_ci  NOT NULL UNIQUE,
      `contrasenia` VARCHAR(255) COLLATE utf8mb4_unicode_ci  NOT NULL,
      `tyc` TINYINT(1) NOT NULL,
      `newletter` TINYINT(1) NULL DEFAULT NULL,
      `imagen` VARCHAR(255) COLLATE utf8mb4_unicode_ci,
      PRIMARY KEY (`id`))
    ENGINE = InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    
    
    -- -----------------------------------------------------
    -- Table `smartshop_db`.`marcas`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `smartshop_db`.`marcas` (
      `id` INT NOT NULL AUTO_INCREMENT,
      `nombre` VARCHAR(255) COLLATE utf8mb4_unicode_ci  NOT NULL,
      PRIMARY KEY (`id`))
    ENGINE = InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    
    
    -- -----------------------------------------------------
    -- Table `smartshop_db`.`categorias`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `smartshop_db`.`categorias` (
      `id` INT NOT NULL AUTO_INCREMENT,
      `nombre` VARCHAR(255) COLLATE utf8mb4_unicode_ci  NOT NULL,
      PRIMARY KEY (`id`))
    ENGINE = InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    
    
    -- -----------------------------------------------------
    -- Table `smartshop_db`.`sistemas_operativos`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `smartshop_db`.`sistemas_operativos` (
      `id` INT NOT NULL AUTO_INCREMENT,
      `nombre` VARCHAR(255) COLLATE utf8mb4_unicode_ci  NOT NULL,
      PRIMARY KEY (`id`))
    ENGINE = InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    
    
    -- -----------------------------------------------------
    -- Table `smartshop_db`.`rams`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `smartshop_db`.`rams` (
      `id` INT NOT NULL AUTO_INCREMENT,
      `valor` INT NOT NULL,
      PRIMARY KEY (`id`))
    ENGINE = InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    
    
    -- -----------------------------------------------------
    -- Table `smartshop_db`.`memorias`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `smartshop_db`.`memorias` (
      `id` INT NOT NULL AUTO_INCREMENT,
      `valor` INT NOT NULL,
      PRIMARY KEY (`id`))
    ENGINE = InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    
    
    -- -----------------------------------------------------
    -- Table `smartshop_db`.`pantallas`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `smartshop_db`.`pantallas` (
      `id` INT NOT NULL AUTO_INCREMENT,
      `tamaño` VARCHAR(255) COLLATE utf8mb4_unicode_ci  NOT NULL,
      `resolucion` VARCHAR(255) COLLATE utf8mb4_unicode_ci  NULL DEFAULT NULL,
      PRIMARY KEY (`id`))
    ENGINE = InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    
    
    -- -----------------------------------------------------
    -- Table `smartshop_db`.`procesadores`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `smartshop_db`.`procesadores` (
      `id` INT NOT NULL AUTO_INCREMENT,
      `nombre` VARCHAR(255) COLLATE utf8mb4_unicode_ci  NOT NULL,
      PRIMARY KEY (`id`))
    ENGINE = InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    
    
    -- -----------------------------------------------------
    -- Table `smartshop_db`.`colores`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `smartshop_db`.`colores` (
      `id` INT NOT NULL AUTO_INCREMENT,
      `nombre` VARCHAR(255) COLLATE utf8mb4_unicode_ci  NOT NULL,
      PRIMARY KEY (`id`))
    ENGINE = InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    
    
    -- -----------------------------------------------------
    -- Table `smartshop_db`.`productos`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `smartshop_db`.`productos` (
      `id` INT NOT NULL AUTO_INCREMENT,
      `modelo` VARCHAR(255) COLLATE utf8mb4_unicode_ci  NOT NULL,
      `marca_id` INT NOT NULL,
      `categoria_id` INT NOT NULL,
      `sistema_operativo_id` INT NOT NULL,
      `ram_id` INT NOT NULL,
      `memoria_id` INT NOT NULL,
      `pantalla_id` INT NOT NULL,
      `procesador_id` INT NOT NULL,
      `color_id` INT NOT NULL,
      `imagen` VARCHAR(255) COLLATE utf8mb4_unicode_ci  NULL,
      `stock` INT NOT NULL DEFAULT 3,
	  `precio_unitario` INT NOT NULL,
      PRIMARY KEY (`id`),
      INDEX `marca_id_idx` (`marca_id` ASC),
      INDEX `categoria_id_idx` (`categoria_id` ASC),
      INDEX `sistema_id_idx` (`sistema_operativo_id` ASC),
      INDEX `ram_id_idx` (`ram_id` ASC),
      INDEX `memoria_id_idx` (`memoria_id` ASC),
      INDEX `pantalla_id_idx` (`pantalla_id` ASC),
      INDEX `procesador_id_idx` (`procesador_id` ASC),
      INDEX `color_id_idx` (`color_id` ASC))
    ENGINE = InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    
    
    -- -----------------------------------------------------
    -- Table `smartshop_db`.`ordenes_detalles`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `smartshop_db`.`ordenes_detalles` (
      `id` INT NOT NULL AUTO_INCREMENT,
      `usuario_id` INT NOT NULL,
      `producto_id` INT NOT NULL,
      `cantidad` INT NOT NULL DEFAULT 1,
      `estado` VARCHAR(255) NOT NULL,
      PRIMARY KEY (`id`),
      INDEX `producto_id_idx` (`producto_id` ASC))
    ENGINE = InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    
    
    
    SET SQL_MODE=@OLD_SQL_MODE;
    SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
    SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
    