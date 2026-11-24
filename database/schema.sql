-- GameVault Database Schema
-- Digital PC Offline Games E-commerce

CREATE DATABASE IF NOT EXISTS gamevault
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE gamevault;

-- Users
CREATE TABLE users (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('customer', 'admin') NOT NULL DEFAULT 'customer',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uk_users_username (username),
  UNIQUE KEY uk_users_email (email)
) ENGINE=InnoDB;

-- Categories
CREATE TABLE categories (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  slug VARCHAR(50) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uk_categories_slug (slug)
) ENGINE=InnoDB;

-- Games
CREATE TABLE games (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  title VARCHAR(150) NOT NULL,
  slug VARCHAR(150) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  genre VARCHAR(100) NOT NULL,
  category_id INT UNSIGNED NOT NULL,
  size VARCHAR(20) DEFAULT NULL,
  developer VARCHAR(100) DEFAULT NULL,
  image_url VARCHAR(255) DEFAULT NULL,
  is_active TINYINT(1) NOT NULL DEFAULT 1,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uk_games_slug (slug),
  KEY idx_games_category (category_id),
  KEY idx_games_active (is_active),
  CONSTRAINT fk_games_category
    FOREIGN KEY (category_id) REFERENCES categories (id)
    ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;

-- Cart items (logged-in users)
CREATE TABLE cart_items (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  game_id INT UNSIGNED NOT NULL,
  quantity INT UNSIGNED NOT NULL DEFAULT 1,
  added_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uk_cart_user_game (user_id, game_id),
  KEY idx_cart_user (user_id),
  CONSTRAINT fk_cart_user
    FOREIGN KEY (user_id) REFERENCES users (id)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_cart_game
    FOREIGN KEY (game_id) REFERENCES games (id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

-- Orders
CREATE TABLE orders (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  order_number VARCHAR(32) NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  status ENUM('pending', 'paid', 'completed', 'cancelled') NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uk_orders_number (order_number),
  KEY idx_orders_user (user_id),
  CONSTRAINT fk_orders_user
    FOREIGN KEY (user_id) REFERENCES users (id)
    ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;

-- Order items
CREATE TABLE order_items (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  order_id INT UNSIGNED NOT NULL,
  game_id INT UNSIGNED NOT NULL,
  quantity INT UNSIGNED NOT NULL DEFAULT 1,
  unit_price DECIMAL(10,2) NOT NULL,
  subtotal DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id),
  KEY idx_order_items_order (order_id),
  CONSTRAINT fk_order_items_order
    FOREIGN KEY (order_id) REFERENCES orders (id)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_order_items_game
    FOREIGN KEY (game_id) REFERENCES games (id)
    ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;

-- Seed categories
INSERT INTO categories (name, slug) VALUES
('Action', 'action'),
('Adventure', 'adventure'),
('Sports', 'sports'),
('RPG', 'rpg'),
('Racing', 'racing'),
('Shooter', 'shooter'),
('Simulation', 'simulation');

-- Seed games (24 PC Offline games)
INSERT INTO games (title, slug, description, price, genre, category_id, size, developer) VALUES
('Grand Theft Auto V', 'grand-theft-auto-v', 'Experience the ultimate open-world crime saga. Fully playable offline after installation. Includes all single-player content.', 5.10, 'Action, Adventure', 1, '95 GB', 'Rockstar North'),
('Cyberpunk 2077', 'cyberpunk-2077', 'Become a cyberpunk mercenary in Night City. Complete offline single-player experience with no online requirements after install.', 12.99, 'RPG, Action', 4, '70 GB', 'CD Projekt RED'),
('Elden Ring', 'elden-ring', 'Rise, Tarnished. A vast open-world action RPG fully playable offline. Explore the Lands Between at your own pace.', 14.50, 'RPG, Action', 4, '60 GB', 'FromSoftware'),
('Red Dead Redemption 2', 'red-dead-redemption-2', 'An epic tale of life in America\'s unforgiving heartland. Complete story mode available offline.', 11.25, 'Action, Adventure', 1, '120 GB', 'Rockstar Games'),
('The Witcher 3: Wild Hunt', 'the-witcher-3-wild-hunt', 'Play as Geralt of Rivia in this award-winning open-world RPG. Full game + expansions playable offline.', 6.75, 'RPG, Adventure', 4, '50 GB', 'CD Projekt RED'),
('FC 25 PC', 'fc-25-pc', 'The latest football simulation experience. Career mode, Ultimate Team offline features, and more. Optimized for PC offline play.', 8.90, 'Sports', 3, '45 GB', 'EA Sports'),
('PES 2021 (Season Patch)', 'pes-2021-season-patch', 'Classic eFootball experience with updated kits and squads. Fully offline football action on any decent PC.', 3.65, 'Sports', 3, '25 GB', 'Konami'),
('Football Manager 2025', 'football-manager-2025', 'Build your dream club and dominate world football. Deep management simulation fully playable offline.', 9.40, 'Sports, Simulation', 7, '8 GB', 'Sports Interactive'),
('GTA IV – Complete Edition', 'gta-iv-complete-edition', 'Liberty City awaits. Includes Episodes from Liberty City. Classic open-world action fully offline.', 3.20, 'Action, Adventure', 1, '22 GB', 'Rockstar North'),
('Sleeping Dogs: Definitive Edition', 'sleeping-dogs-definitive', 'Undercover cop in the Hong Kong underworld. Stylish open-world combat and story, fully offline.', 4.80, 'Action, Adventure', 1, '18 GB', 'United Front Games'),
('Batman: Arkham Knight', 'batman-arkham-knight', 'The finale to the Arkham series. Become the Batman and take back Gotham. Complete offline experience.', 5.50, 'Action, Adventure', 1, '55 GB', 'Rocksteady Studios'),
('Assassin\'s Creed Odyssey', 'assassins-creed-odyssey', 'Explore Ancient Greece as a legendary mercenary. Massive open world fully playable offline.', 7.15, 'Action, RPG', 4, '46 GB', 'Ubisoft Quebec'),
('Need for Speed: Most Wanted (2005)', 'nfs-most-wanted-2005', 'The legendary street racing classic. Blacklist chase system and open-world free roam, fully offline.', 2.90, 'Racing', 5, '4 GB', 'EA Black Box'),
('Forza Horizon 5', 'forza-horizon-5', 'Open-world racing festival in Mexico. Huge map, hundreds of cars, fully enjoyable offline.', 13.80, 'Racing', 5, '110 GB', 'Playground Games'),
('Call of Duty: Modern Warfare 2 (2009)', 'cod-mw2-2009', 'Iconic campaign and Spec Ops. Classic single-player experience fully playable offline.', 4.25, 'Shooter', 6, '16 GB', 'Infinity Ward'),
('Doom Eternal', 'doom-eternal', 'Rip and tear through demons in this high-octane FPS. Complete campaign available offline.', 8.60, 'Shooter', 6, '50 GB', 'id Software'),
('Sekiro: Shadows Die Twice', 'sekiro-shadows-die-twice', 'Shinobi action from FromSoftware. Precise combat and exploration, fully offline.', 10.20, 'Action, Adventure', 1, '25 GB', 'FromSoftware'),
('Hades', 'hades', 'Escape the Underworld in this award-winning roguelike. Perfect for offline sessions.', 6.40, 'Action, Roguelike', 1, '15 GB', 'Supergiant Games'),
('Stardew Valley', 'stardew-valley', 'Build the farm of your dreams. Relaxing life sim fully playable offline.', 4.10, 'Simulation, RPG', 7, '1 GB', 'ConcernedApe'),
('Cities: Skylines', 'cities-skylines', 'Build and manage your dream city. Deep city-builder experience with no online requirements.', 5.75, 'Simulation', 7, '6 GB', 'Colossal Order'),
('Mafia: Definitive Edition', 'mafia-definitive-edition', 'Remade classic crime story set in Lost Heaven. Cinematic single-player experience offline.', 7.90, 'Action, Adventure', 1, '50 GB', 'Hangar 13'),
('Control Ultimate Edition', 'control-ultimate-edition', 'Supernatural action-adventure in the Federal Bureau of Control. Fully offline.', 6.95, 'Action, Adventure', 1, '42 GB', 'Remedy Entertainment'),
('Hollow Knight', 'hollow-knight', 'Explore a vast interconnected underground kingdom. One of the best offline Metroidvanias.', 3.95, 'Adventure, Metroidvania', 2, '2 GB', 'Team Cherry'),
('Celeste', 'celeste', 'Help Madeline survive Mount Celeste in this precise and emotional platformer. Fully offline.', 3.50, 'Platformer', 2, '1.5 GB', 'Maddy Makes Games');