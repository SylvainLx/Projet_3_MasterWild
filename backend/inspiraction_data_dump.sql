insert into user (firstname, lastname, email, password, birthday_date, role) values ('Modesty', 'Macartney', 'mmacartney0@privacy.gov.au', 'l1X6qhhRBB4h', '2008-02-11', 'admin');
insert into user (firstname, lastname, email, password, birthday_date,role) values ('Marv', 'Swepstone', 'mswepstone1@phpbb.com', '9dyNkm22enPI', '1975-03-21','admin');
insert into user (firstname, lastname, email, password, birthday_date,role) values ('Jessey', 'Ciciari', 'jciciari2@prweb.com', 'vjqnNDPRm', '2007-08-01','subscriber');
insert into user (firstname, lastname, email, password, birthday_date,role) values ('Gabie', 'Bicker', 'gbicker3@123-reg.co.uk', 'O08l3kOR77y', '1956-05-20','subscriber');
insert into user (firstname, lastname, email, password, birthday_date) values ('Belinda', 'Stefanovic', 'bstefanovic4@nifty.com', 'd94JwWJ', '1974-07-04');
insert into user (firstname, lastname, email, password, birthday_date) values ('Johnathon', 'Schellig', 'jschellig5@technorati.com', 'b14CaonW', '2002-06-06');
insert into user (firstname, lastname, email, password, birthday_date) values ('Archibaldo', 'Harbage', 'aharbage6@kickstarter.com', 'YN0KPa1QxbM', '1960-04-23');
insert into user (firstname, lastname, email, password, birthday_date) values ('Lindsey', 'Shinn', 'lshinn7@smh.com.au', 'MErT2xm', '1992-09-15');
insert into user (firstname, lastname, email, password, birthday_date) values ('Elbertina', 'Brimilcombe', 'ebrimilcombe8@soup.io', '21OMWWkxHYz', '1959-03-17');
insert into user (firstname, lastname, email, password, birthday_date) values ('Julina', 'Apedaile', 'japedaile9@facebook.com', 'MxRX7dHd', '1998-08-03');


insert into author (firstname, lastname, speciality) values ('Hugot', 'Clement', 'journalist');
insert into author (firstname, lastname, speciality) values ('Xavier', 'Niel', 'business man');
insert into author (firstname, lastname, speciality) values ('Harry', 'Roselmack', 'journalist');
insert into author (firstname, lastname, speciality) values ('Bentlee', 'Betteson', 'Engineer');

insert into photo (name, source, author_id) values ('hugot_clement_picture', 'http://localhost:5001/backend/public/data/uploads/hugoclement.png', 1);
insert into photo (name, source, author_id) values ('xavier_niel_picture', 'http://localhost:5001/backend/public/data/uploads/xavierniel.png', 2);
insert into photo (name, source, author_id) values ('harry_roselmack_picture', 'http://localhost:5001/backend/public/data/uploads/harryroselmack.png', 3);
insert into photo (name, source, author_id) values ('bentlee_betteson_picture', 'http://localhost:5001/backend/public/data/uploads/bentleebetteson.png', 4);

insert into masterclass (name, source, description, author_id) values ('Video Xavier Niel 1', 'https://www.youtube.com/watch?v=Mk4C9ynvXaI&ab_channel=Roxette', 'Voici une description de la vidéo. Vous trouverez ici les informations sur la célébrtité et le sujet sur lequel la vidéo portera. Les masterclass, ou classe de maître en français, sont organisées sur le schéma d/une conférence, où l/intervenant partage son expérience ou sa maîtrise d/un sujet, et propose aux participants d/échanger à ce sujet. Dans les univers artistiques et culturels, là aussi, la masterclass s/impose comme un format qui intéresse et accroche les auditeurs. De l/écriture au cinéma, en passant par la musique, la cuisine ou tout simplement une réflexion sur la créativité, les contenus fleurissent sur la toile.', 2);
insert into masterclass (name, source, description, author_id) values ('Video Harry Roselmack 1', 'https://www.youtube.com/watch?v=Mk4C9ynvXaI&ab_channel=Roxette', 'Voici une description de la vidéo. Vous trouverez ici les informations sur la célébrtité et le sujet sur lequel la vidéo portera. Les masterclass, ou classe de maître en français, sont organisées sur le schéma d/une conférence, où l/intervenant partage son expérience ou sa maîtrise d/un sujet, et propose aux participants d/échanger à ce sujet. Dans les univers artistiques et culturels, là aussi, la masterclass s/impose comme un format qui intéresse et accroche les auditeurs. De l/écriture au cinéma, en passant par la musique, la cuisine ou tout simplement une réflexion sur la créativité, les contenus fleurissent sur la toile.', 3);
insert into masterclass (name, source, description, author_id) values ('Video Harry Roselmack 2', 'https://www.youtube.com/watch?v=Mk4C9ynvXaI&ab_channel=Roxette', 'Voici une description de la vidéo. Vous trouverez ici les informations sur la célébrtité et le sujet sur lequel la vidéo portera. Les masterclass, ou classe de maître en français, sont organisées sur le schéma d/une conférence, où l/intervenant partage son expérience ou sa maîtrise d/un sujet, et propose aux participants d/échanger à ce sujet. Dans les univers artistiques et culturels, là aussi, la masterclass s/impose comme un format qui intéresse et accroche les auditeurs. De l/écriture au cinéma, en passant par la musique, la cuisine ou tout simplement une réflexion sur la créativité, les contenus fleurissent sur la toile.', 3);
insert into masterclass (name, source, description, author_id) values ('Video Bentlee Betteson 1', 'https://www.youtube.com/watch?v=Mk4C9ynvXaI&ab_channel=Roxette', 'Voici une description de la vidéo. Vous trouverez ici les informations sur la célébrtité et le sujet sur lequel la vidéo portera. Les masterclass, ou classe de maître en français, sont organisées sur le schéma d/une conférence, où l/intervenant partage son expérience ou sa maîtrise d/un sujet, et propose aux participants d/échanger à ce sujet. Dans les univers artistiques et culturels, là aussi, la masterclass s/impose comme un format qui intéresse et accroche les auditeurs. De l/écriture au cinéma, en passant par la musique, la cuisine ou tout simplement une réflexion sur la créativité, les contenus fleurissent sur la toile.', 4);
insert into masterclass (name, source, description, author_id) values ('Video Hugo Clément 1', 'https://www.youtube.com/watch?v=Mk4C9ynvXaI&ab_channel=Roxette', 'Voici une description de la vidéo. Vous trouverez ici les informations sur la célébrtité et le sujet sur lequel la vidéo portera. Les masterclass, ou classe de maître en français, sont organisées sur le schéma d/une conférence, où l/intervenant partage son expérience ou sa maîtrise d/un sujet, et propose aux participants d/échanger à ce sujet. Dans les univers artistiques et culturels, là aussi, la masterclass s/impose comme un format qui intéresse et accroche les auditeurs. De l/écriture au cinéma, en passant par la musique, la cuisine ou tout simplement une réflexion sur la créativité, les contenus fleurissent sur la toile.', 1);
insert into masterclass (name, source, description, author_id) values ('Video Hugo Clément 1', 'https://www.youtube.com/watch?v=Mk4C9ynvXaI&ab_channel=Roxette', 'Voici une description de la vidéo. Vous trouverez ici les informations sur la célébrtité et le sujet sur lequel la vidéo portera. Les masterclass, ou classe de maître en français, sont organisées sur le schéma d/une conférence, où l/intervenant partage son expérience ou sa maîtrise d/un sujet, et propose aux participants d/échanger à ce sujet. Dans les univers artistiques et culturels, là aussi, la masterclass s/impose comme un format qui intéresse et accroche les auditeurs. De l/écriture au cinéma, en passant par la musique, la cuisine ou tout simplement une réflexion sur la créativité, les contenus fleurissent sur la toile.', 1);
insert into masterclass (name, source, description, author_id) values ('Video Bentlee Betteson 2', 'https://www.youtube.com/watch?v=Mk4C9ynvXaI&ab_channel=Roxette', 'Voici une description de la vidéo. Vous trouverez ici les informations sur la célébrtité et le sujet sur lequel la vidéo portera. Les masterclass, ou classe de maître en français, sont organisées sur le schéma d/une conférence, où l/intervenant partage son expérience ou sa maîtrise d/un sujet, et propose aux participants d/échanger à ce sujet. Dans les univers artistiques et culturels, là aussi, la masterclass s/impose comme un format qui intéresse et accroche les auditeurs. De l/écriture au cinéma, en passant par la musique, la cuisine ou tout simplement une réflexion sur la créativité, les contenus fleurissent sur la toile.', 4);
insert into masterclass (name, source, description, author_id) values ('Video Bentlee Betteson 3', 'https://www.youtube.com/watch?v=Mk4C9ynvXaI&ab_channel=Roxette', 'Voici une description de la vidéo. Vous trouverez ici les informations sur la célébrtité et le sujet sur lequel la vidéo portera. Les masterclass, ou classe de maître en français, sont organisées sur le schéma d/une conférence, où l/intervenant partage son expérience ou sa maîtrise d/un sujet, et propose aux participants d/échanger à ce sujet. Dans les univers artistiques et culturels, là aussi, la masterclass s/impose comme un format qui intéresse et accroche les auditeurs. De l/écriture au cinéma, en passant par la musique, la cuisine ou tout simplement une réflexion sur la créativité, les contenus fleurissent sur la toile.', 4);
insert into masterclass (name, source, description, author_id) values ('Video Harry Roselmack 3', 'https://www.youtube.com/watch?v=Mk4C9ynvXaI&ab_channel=Roxette', 'Voici une description de la vidéo. Vous trouverez ici les informations sur la célébrtité et le sujet sur lequel la vidéo portera. Les masterclass, ou classe de maître en français, sont organisées sur le schéma d/une conférence, où l/intervenant partage son expérience ou sa maîtrise d/un sujet, et propose aux participants d/échanger à ce sujet. Dans les univers artistiques et culturels, là aussi, la masterclass s/impose comme un format qui intéresse et accroche les auditeurs. De l/écriture au cinéma, en passant par la musique, la cuisine ou tout simplement une réflexion sur la créativité, les contenus fleurissent sur la toile.', 3);
insert into masterclass (name, source, description, author_id) values ('Video Xavier Niel 2', 'https://www.youtube.com/watch?v=Mk4C9ynvXaI&ab_channel=Roxette', 'Voici une description de la vidéo. Vous trouverez ici les informations sur la célébrtité et le sujet sur lequel la vidéo portera. Les masterclass, ou classe de maître en français, sont organisées sur le schéma d/une conférence, où l/intervenant partage son expérience ou sa maîtrise d/un sujet, et propose aux participants d/échanger à ce sujet. Dans les univers artistiques et culturels, là aussi, la masterclass s/impose comme un format qui intéresse et accroche les auditeurs. De l/écriture au cinéma, en passant par la musique, la cuisine ou tout simplement une réflexion sur la créativité, les contenus fleurissent sur la toile.', 2);

insert into category (name) values ('Art & Entertainment');
insert into category (name) values ('Music');
insert into category (name) values ('Writing');
insert into category (name) values ('Food');
insert into category (name) values ('Business');
insert into category (name) values ('Design & Style');
insert into category (name) values ('Sport & gaming');
insert into category (name) values ('Science & Tech');
insert into category (name) values ('Community & Gouvernment');
insert into category (name) values ('dirigeants');
insert into category (name) values ('entrepreneurs');
insert into category (name) values ('journalistes');
insert into category (name) values ('politiques');
insert into category (name) values ('artistes');
insert into category (name) values ('sportifs');

insert into keyword (name) values ('astronmie');
insert into keyword (name) values ('journalisme');+
insert into keyword (name) values ('improvisation');

insert into masterclass_has_category (masterclass_id, category_id) values (1, 10);
insert into masterclass_has_category (masterclass_id, category_id) values (2, 12);
insert into masterclass_has_category (masterclass_id, category_id) values (3, 12);
insert into masterclass_has_category (masterclass_id, category_id) values (4, 8);
insert into masterclass_has_category (masterclass_id, category_id) values (5, 12);
insert into masterclass_has_category (masterclass_id, category_id) values (6, 3);
insert into masterclass_has_category (masterclass_id, category_id) values (7, 7);
insert into masterclass_has_category (masterclass_id, category_id) values (8, 8);
insert into masterclass_has_category (masterclass_id, category_id) values (9, 1);
insert into masterclass_has_category (masterclass_id, category_id) values (10, 11);

insert into masterclass_has_keyword (masterclass_id, keyword_id) values (2, 2);
insert into masterclass_has_keyword (masterclass_id, keyword_id) values (3, 2);
insert into masterclass_has_keyword (masterclass_id, keyword_id) values (4, 2);
insert into masterclass_has_keyword (masterclass_id, keyword_id) values (5, 2);
insert into masterclass_has_keyword (masterclass_id, keyword_id) values (9, 2);
insert into masterclass_has_keyword (masterclass_id, keyword_id) values (10, 3);
insert into masterclass_has_keyword (masterclass_id, keyword_id) values (8, 1);

insert into favorite (masterclass_id, user_id) values (4,4);
insert into favorite (masterclass_id, user_id) values (7,4);
insert into favorite (masterclass_id, user_id) values (8,4);
insert into favorite (masterclass_id, user_id) values (1,7);
insert into favorite (masterclass_id, user_id) values (2,7);
insert into favorite (masterclass_id, user_id) values (3,7);
insert into favorite (masterclass_id, user_id) values (4,7);
insert into favorite (masterclass_id, user_id) values (5,7);
insert into favorite (masterclass_id, user_id) values (6,7);
insert into favorite (masterclass_id, user_id) values (7,7);
insert into favorite (masterclass_id, user_id) values (8,7);
insert into favorite (masterclass_id, user_id) values (9,7);
insert into favorite (masterclass_id, user_id) values (10,7);




