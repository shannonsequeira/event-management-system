-- Create the database
CREATE DATABASE IF NOT EXISTS event_management;

-- Use the database
USE event_management;

-- Create the users table for user registration and login
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,  -- Ensure to hash passwords in your application
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the user_profiles table for storing additional profile information
CREATE TABLE IF NOT EXISTS user_profiles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  bio TEXT,
  profile_picture BLOB,  -- Use BLOB for storing images
  contact_number VARCHAR(20),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Create the events table for event details
CREATE TABLE IF NOT EXISTS events (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  schedule TEXT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  location VARCHAR(255) NOT NULL,
  venue VARCHAR(255) NOT NULL,
  photos LONGBLOB,
  video_content LONGBLOB,
  ticket_amount DECIMAL(10, 2),
  capacity INT,
  user_id INT NOT NULL,  -- Reference to the user who creates or heads the event
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Insert sample data for users (passwords should be hashed)
INSERT INTO users (name, email, password) VALUES
('John Doe', 'john@example.com', 'hashed_password1'),
('Jane Smith', 'jane@example.com', 'hashed_password2');

-- Insert sample data for user profiles
INSERT INTO user_profiles (user_id, bio, profile_picture, contact_number) VALUES
(1, 'Tech enthusiast and conference organizer.', NULL, '123-456-7890'),
(2, 'Artist and curator.', NULL, '987-654-3210');

-- Insert sample data for events
INSERT INTO events (title, description, schedule, start_date, end_date, location, venue, photos, video_content, ticket_amount, capacity, user_id) VALUES
('Procrastinators Anonymous Annual Meetup', 'A meetup for procrastinators to share tips and stories.', '9 AM - 5 PM', '2025-11-30', '2025-11-30', 'Tomorrowland', 'Main Hall', NULL, NULL, 0.00, 100, 1),
('How to Win at Losing', 'A seminar on embracing failure and learning from it.', '10 AM - 4 PM', '2025-11-30', '2025-11-30', 'Sisyphus Arena', 'Conference Room 1', NULL, NULL, 50.00, 50, 2),
('Flat Earth Society Annual Convention', 'Annual gathering of Flat Earth believers.', 'All day', '2025-11-30', '2025-11-30', 'Edge of the World', 'Convention Center', NULL, NULL, 0.00, 200, 1),
('World’s Shortest Conference', 'A conference that lasts only a few minutes.', '12 PM - 12:05 PM', '2025-11-30', '2025-11-30', 'The Nonexistent Room', 'Small Hall', NULL, NULL, 0.00, 10, 2),
('Effective Time Management... Eventually', 'A workshop on managing time effectively, eventually.', '11 AM - 3 PM', '2025-11-30', '2025-11-30', 'Procrastination Station', 'Training Room', NULL, NULL, 25.00, 30, 1),
('Shadow of Mordor', 'An immersive experience in Middle-Earth.', '9 AM - 6 PM', '2025-02-28', '2025-02-28', 'Middle-Earth', 'Mordor', NULL, NULL, 100.00, 150, 2),
('"X-Men/Avengers" House of M', 'A special event exploring the House of M storyline.', '10 AM - 5 PM', '2024-08-08', '2024-08-08', 'Island nation of Genosha', 'Genosha Conference Hall', NULL, NULL, 75.00, 120, 1);

-- Refactor db structure. Get rid of 'user_profiles' table and use only 'users' table
-- Step 1: Alter the 'users' table to include all fields from 'user_profiles'
ALTER TABLE users
ADD COLUMN bio TEXT,
ADD COLUMN profile_picture BLOB,
ADD COLUMN contact_number VARCHAR(20);

-- Step 2: Copy data from 'user_profiles' to 'users'
UPDATE users u
JOIN user_profiles p ON u.id = p.user_id
SET u.bio = p.bio,
    u.profile_picture = p.profile_picture,
    u.contact_number = p.contact_number;

-- Step 3: Drop the 'user_profiles' table
DROP TABLE IF EXISTS user_profiles;


-- Triggers

-- Trigger to prevent event creation with end_date earlier than start_date
DELIMITER $$
CREATE TRIGGER check_event_dates
BEFORE INSERT ON events
FOR EACH ROW
BEGIN
  IF NEW.end_date < NEW.start_date THEN
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'End date cannot be earlier than start date';
  END IF;
END$$
DELIMITER ;

-- Trigger to ensure capacity is a positive number
DELIMITER $$
CREATE TRIGGER check_event_capacity
BEFORE INSERT ON events
FOR EACH ROW
BEGIN
  IF NEW.capacity <= 0 THEN
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Event capacity must be a positive number';
  END IF;
END$$
DELIMITER ;

-- Trigger to ensure ticket amount is not negative
DELIMITER $$
CREATE TRIGGER check_ticket_amount
BEFORE INSERT ON events
FOR EACH ROW
BEGIN
  IF NEW.ticket_amount < 0 THEN
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Ticket amount cannot be negative';
  END IF;
END$$
DELIMITER ;