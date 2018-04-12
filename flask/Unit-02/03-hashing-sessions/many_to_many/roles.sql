\c movies_db
DROP TABLE IF EXISTS roles;
CREATE TABLE roles
(
  id SERIAL PRIMARY KEY,
  movie_id INTEGER REFERENCES movies (id) ON DELETE CASCADE,
  star_id INTEGER REFERENCES stars (id) ON DELETE CASCADE
);

INSERT INTO roles 
  (movie_id, star_id)
VALUES
  (44, 1),
  (10, 3),
  (61, 3),
  (73, 3),
  (81, 3),
  (85, 3),
  (99, 3),
  (32, 3),
  (76, 3),
  (32, 4),
  (61, 4),
  (73, 4),
  (76, 4),
  (81, 4),
  (85, 4),
  (99, 4),
  (8, 6),
  (15, 6),
  (57, 7),
  (69, 7),
  (16, 8),
  (58, 8),
  (96, 8),
  (3, 9),
  (12, 10),
  (34, 10),
  (66, 10),
  (30, 12),
  (43, 12),
  (5, 14),
  (14, 14),
  (24, 14),
  (40, 14),
  (65, 14),
  (94, 14),
  (12, 15),
  (19, 15),
  (67, 15),
  (70, 15),
  (5, 17),
  (12, 17),
  (14, 17),
  (27, 17),
  (34, 17),
  (60, 17),
  (65, 17),
  (66, 17),
  (100, 17),
  (21, 18),
  (55, 18),
  (78, 19),
  (18, 20),
  (25, 20),
  (48, 20),
  (88, 20),
  (3, 22),
  (1, 24),
  (13, 24),
  (62, 24),
  (68, 24),
  (84, 24),
  (57, 26),
  (31, 27),
  (45, 27),
  (53, 27),
  (92, 27),
  (42, 28),
  (58, 28),
  (6, 29),
  (15, 29),
  (79, 29),
  (7, 30),
  (7, 32),
  (10, 33),
  (35, 33),
  (46, 33),
  (63, 33),
  (72, 33),
  (58, 34),
  (38, 35),
  (47, 35),
  (97, 35),
  (11, 36),
  (14, 36),
  (40, 36),
  (47, 36),
  (64, 36),
  (26, 37),
  (47, 37),
  (7, 38),
  (24, 38),
  (21, 39),
  (50, 39),
  (51, 39),
  (39, 40),
  (97, 40),
  (89, 41),
  (32, 43),
  (52, 43),
  (73, 43),
  (76, 43),
  (81, 43),
  (1, 44),
  (71, 44),
  (98, 45),
  (2, 46),
  (31, 46),
  (53, 46),
  (70, 46),
  (4, 47),
  (13, 47),
  (31, 47),
  (53, 47),
  (15, 48),
  (52, 48),
  (11, 49),
  (33, 49),
  (5, 50),
  (14, 50),
  (23, 50),
  (24, 50),
  (51, 50),
  (60, 50),
  (65, 50);

