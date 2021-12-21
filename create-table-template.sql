CREATE TABLE Blogs(
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
  title VARCHAR(255) COMMENT 'Title',
  subtitle VARCHAR(255) COMMENT 'subtitle',
  blog_data JSON CHECK (JSON_VALID(blog_data)),
  author_id INT NOT NULL,
  CONSTRAINT `fk_book_author` FOREIGN KEY (author_id) REFERENCES Users (id) ON DELETE CASCADE ON UPDATE RESTRICT,
  created_on DATETIME COMMENT 'Create Time',
  updated_on DATETIME COMMENT 'Update Time'
) ENGINE = InnoDB;

CREATE TABLE Users(
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
  first_name VARCHAR(255) COMMENT 'Title',
  last_name VARCHAR(255) COMMENT 'Subtitle',
  email VARCHAR(255) COMMENT 'E-mail',
  joined_on DATE COMMENT 'Join Date'
) ENGINE = InnoDB;