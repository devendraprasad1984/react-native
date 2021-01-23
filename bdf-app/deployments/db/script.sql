# CREATES
create table adrotator
(
    id int auto_increment
        primary key,
    description varchar(1000) null,
    about text null,
    type varchar(50) null
);

create table category
(
    id int auto_increment primary key,
    category varchar(30) null,
    description varchar(200) null,
    icons varchar(300) null,
    styles varchar(1000) null
);

create table categorydetails
(
    catid int not null,
    id int auto_increment
        primary key,
    detail_description varchar(200) null
);

create table categorylevel1
(
    id int auto_increment
        primary key,
    catid int null,
    description varchar(200) null,
    sortorder int null
);

create table categorylevel2
(
    id int auto_increment
        primary key,
    catL1Id int null,
    description varchar(200) null,
    sortorder int null
);


create table config
(
    `key` varchar(100) null,
    value text null,
    helperText varchar(500) null
);



create table user_detail
(
    user_id int not null
        primary key,
    user_name varchar(30) null,
    email varchar(30) null,
    mobile_no bigint null,
    timestamp time null
);

create table error_log
(
    log_id         int auto_increment      primary key,
    error_message  longtext                           not null,
    error_file     longtext                           not null,
    error_line     longtext                           not null,
    error_trace    longtext                           not null,
    error_log_date datetime default CURRENT_TIMESTAMP null
);

create table upcoming_event
(
    event_id bigint auto_increment primary key,
    event_date      datetime not null,
    title           varchar(255) not null,
    description     varchar(255) not null
);

create table categorylevel2
(
    id int auto_increment
        primary key,
    catL1 int null,
    description varchar(200) null,
    sortorder int null
);

create table categorylevelpages
(
    id int auto_increment
        primary key,
    catL2 int null,
    subhead varchar(200) null,
    description longtext null,
    type varchar(50) null
);

create table eventregistrationdetails
(
    id int auto_increment
        primary key,
    name varchar(255) null,
    email varchar(255) null,
    mobile varchar(20) null,
    info varchar(1000) null,
    eventid int null
);

create table supportqueries
(
    id int auto_increment primary key,
    name varchar(100) null,
    mobile bigint null,
    email varchar(255) null,
    query varchar(1000) null
);
create table supportReplies
(
    id int auto_increment primary key,
    supportid int,
    reply varchar(1000) null,
    repliedOn datetime
);

create table admins
(
    id int auto_increment
        primary key,
    name varchar(200) null,
    icon varchar(1000) null,
    password varchar(50) null
);



# INSERTS
INSERT INTO adrotator (about, description, type) VALUES ('Creating a Disability-Smart World UDPATED', 'Contemporary understandings of disability derive from concepts that arose during the West''s scientific Enlightenment; prior to the Enlightenment, physical differences were viewed through a different lens.[7]

There is evidence of humans during prehistory that looked after people with disabilities. At the Windover Archeological Site, one of the skeletons that was found was a male about 15 years old, who had spina bifida. The condition meant that the boy, probably paralyzed below the waist, was taken care of in a Hunter-gatherer community.[8][9]

Provision that enabled individuals with impaired mobility to access temples and healing sanctuaries were made in ancient Greece.[10].Specifically, by 370 B.C., at the most important healing sanctuary in the wider area, the Sanctuary of Asclepius at Epidaurus, there were at least 11 permanent stone ramps that provided access to mobility-impaired visitors to nine different structures; evidence that people with disabilities were acknowledged and cared for, at least partly, in ancient Greece.[11]

During the Middle Ages, madness and other conditions were thought to be caused by demons. They were also thought to be part of the natural order, especially during and in the fallout of the Plague, which wrought impairments throughout the general population.[12] In the early modern period there was a shift to seeking biological causes for physical and mental differences, as well as heightened interest in demarcating categories: for example, Ambroise Pare, in the sixteenth century, wrote of "monsters", "prodigies", and "the maimed".[13] The European Enlightenment''s emphases on knowledge derived from reason and on the value of natural science to human progress helped spawn the birth of institutions and associated knowledge systems that observed and categorized human beings; among these, the ones significant to the development of today''s concepts of disability were asylums, clinics, and, prisons.[12]

Contemporary concepts of disability are rooted in eighteenth- and nineteenth-century developments. Foremost among these was the development of clinical medical discourse, which made the human body visible as a thing to be manipulated, studied, and transformed. These worked in tandem with scientific discourses that sought to classify and categorize and, in so doing, became methods of normalization.[14]

The concept of the "norm" developed in this time period, and is signaled in the work of the Belgian statistician, sociologist, mathematician, and astronomer Adolphe Quetelet, who wrote in the 1830s of l''homme moyen – the average man. Quetelet postulated that one could take the sum of all people''s attributes in a given population (such as their height or weight) and find their average and that this figure should serve as a norm toward which all should aspire.

This idea of statistical norm threads through the rapid take-up of statistics gathering by Britain, the United States, and the Western European states during this time period, and it is tied to the rise of eugenics. Disability, as well as other concepts including: abnormal, non-normal, and normalcy came from this.[15] The circulation of these concepts is evident in the popularity of the freak show, where showmen profited from exhibiting people who deviated from those norms.[16]

With the rise of eugenics in the latter part of the nineteenth century, such deviations were viewed as dangerous to the health of entire populations. With disability viewed as part of a person''s biological make-up and thus their genetic inheritance, scientists turned their attention to notions of weeding such as "deviations" out of the gene pool. Various metrics for assessing a person''s genetic fitness, which was then used to deport, sterilize, or institutionalize those deemed unfit. At the end of the Second World War, with the example of Nazi eugenics, eugenics faded from public discourse, and increasingly disability cohered into a set of attributes that medicine could attend to – whether through augmentation, rehabilitation, or treatment. In both contemporary and modern history, disability was often viewed as a by-product of incest between first-degree relatives or second-degree relatives.[17]

In the early 1970s, disability activists began to challenge how society treated disabled people and the medical approach to disability. Due to this work, physical barriers to access were identified. These conditions functionally disabled them, and what is now known as the social model of disability emerged. Coined by Mike Oliver in 1983, this phrase distinguishes between the medical model of disability – under which an impairment needs to be fixed – and the social model of disability – under which the society that limits a person needs to be fixed.[18]', 'Text');
INSERT INTO adrotator (about, description, type) VALUES ('ximg2', 'https://dh1b0dk701o2c.cloudfront.net/prod/uploads/2020/10/IMG_2887-1536x1024.jpg', 'Image');
INSERT INTO adrotator (about, description, type) VALUES ('BDF', 'Our 300+ members employ around 20% of the UK workforce and an estimated 8 million people worldwide.Our 300+ members employ around 20% of the UK workforce and an estimated 8 million people worldwide.Our 300+ members employ around 20% of the UK workforce and an estimated 8 million people worldwide.Our 300+ members employ around 20% of the UK workforce and an estimated 8 million people worldwide.Our 300+ members employ around 20% of the UK workforce and an estimated 8 million people worldwide.Our 300+ members employ around 20% of the UK workforce and an estimated 8 million people worldwide.', 'Text');
INSERT INTO adrotator (about, description, type) VALUES ('test video', 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', 'Video');
INSERT INTO adrotator (about, description, type) VALUES ('BUSINESS DISABILITY FORUM', 'Share your Disability Smart Stories with us.', 'Text');
INSERT INTO adrotator (about, description, type) VALUES ('ximage', 'https://dh1b0dk701o2c.cloudfront.net/prod/uploads/2020/03/employment-taskforce-220x220.jpg', 'Image');
INSERT INTO adrotator (about, description, type) VALUES ('testing about', 'https://cdn.pixabay.com/photo/2016/11/09/16/24/virus-1812092_1280.jpg', 'Image');


INSERT INTO config (`key`, value, helperText) VALUES ('about-us', 'hello about us', 'help text on about us');
INSERT INTO config (`key`, value, helperText) VALUES ('news', 'this is news contents - updated/nice', 'help text on news');
INSERT INTO config (`key`, value, helperText) VALUES ('main-blog', 'https://businessdisabilityforum.org.uk/wp-json/wp/v2/posts', 'help text on main blog');
INSERT INTO config (`key`, value, helperText) VALUES ('Contact-Us', 'BDF App
England, Uk
yet another address', 'help text on contact us');
INSERT INTO config (`key`, value, helperText) VALUES ('facebook', 'https://www.facebook.com', 'help text on facebook links');
INSERT INTO config (`key`, value, helperText) VALUES ('linkedin', 'https://www.linkedin.com/login', 'help text on linkedin');
INSERT INTO config (`key`, value, helperText) VALUES ('twitter', 'https://twitter.com/login?lang=en', 'help text on twitter');
INSERT INTO config (`key`, value, helperText) VALUES ('whatsapp', 'https://api.whatsapp.com/send?phone=919807574209', 'help text on whatsapp');
INSERT INTO config (`key`, value, helperText) VALUES ('logo', 'BDF', 'help text on logo');
INSERT INTO config (`key`, value, helperText) VALUES ('SplashImg', 'https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-blue-purple-vertical-stripes-frosted-simple-atmospheric-background-image_70163.jpg', 'help text on splash img');
INSERT INTO config (`key`, value, helperText) VALUES ('SplashText', 'Business Disablity Forum
Building Disablity-Smart Organisation', 'help text on splash text, max 2 lines');

INSERT INTO upcoming_event (event_id, event_date, title, description) VALUES (2, '2020-11-18 13:50:04', 'test event', 'this is just a test');
INSERT INTO upcoming_event (event_id, event_date, title, description) VALUES (3, '2020-12-30 13:50:08', 'launch event', 'this is a just launch event');


# Insertion in Category table
INSERT INTO category (id, category, description, icons, styles) VALUES
(1,'Support Staff', 'ABC', 'https://cdn0.iconfinder.com/data/icons/service-and-support/512/Support_staff-512.png', '{backgroundColor:''red'', color: ''white''}')
,(2,'RD/FD', 'OPen RD/FD', 'https://cdn3.iconfinder.com/data/icons/fintech-color-pop-vol-1/64/deposit-512.png', '{backgroundColor:''magenta'', color: ''white''}')
,(3,'Issues', 'Register Issues', 'https://icon-library.com/images/resolved-icon/resolved-icon-2.jpg', '{backgroundColor:''purple'', color: ''white''}')
,(4,'Customer Support', 'XYZ', 'https://cdn3.iconfinder.com/data/icons/customer-support-7/32/52_customer_support_service_care_help_team-512.png', '{backgroundColor:''green'', color: ''white''}')
,(5,'Cards', 'Cars Details', 'https://i.pinimg.com/originals/45/9f/3b/459f3b61d6a74993f4d31f51ee873750.png', '{backgroundColor:''tomato'', color: ''white''}')
,(6,'Banking', 'ABCyt', 'https://cdn.onlinewebfonts.com/svg/img_454375.png', '{backgroundColor:''navy'', color: ''white''}')


# Insertion in Detail table
INSERT INTO categoryDetails (id,catid, `detail_description`) VALUES
(1,1, 'In this article, I’d like to reacquaint you with the humble workhorse of communication that is the paragraph. Paragraphs are everywhere.'),
(2,2, 'In this article, I’d like to reacquaint you with the humble workhorse.'),
(3,3, ' In fact, at the high risk of stating the obvious, you are reading one now.'),
(4,4, ' Many people, designers included, think that typography consists of only selecting a typeface, choosing a font size and whether it should be regular or bold.'),
(5,5, 'Choosing a font size and whether it should be regular or bold.'),
(6,6, 'For most people it ends there. But there is much more to achieving good typography and it’s in the details that designers often neglect.');


Update category set icons = 'https://cdn0.iconfinder.com/data/icons/service-and-support/512/Support_staff-512.png' where id=1;
Update category set icons = 'https://cdn3.iconfinder.com/data/icons/customer-support-7/32/52_customer_support_service_care_help_team-512.png' where id=2;
Update category set icons = 'https://cdn.onlinewebfonts.com/svg/img_454375.png' where id=3;
Update category set icons = 'https://i.pinimg.com/originals/45/9f/3b/459f3b61d6a74993f4d31f51ee873750.png' where id=4;
Update category set icons = 'https://cdn3.iconfinder.com/data/icons/fintech-color-pop-vol-1/64/deposit-512.png' where id=5;
Update category set icons = 'https://icon-library.com/images/resolved-icon/resolved-icon-2.jpg' where id=6;


INSERT INTO categorylevel1 (catid, description, sortorder) VALUES (1, 'test1', 1);
INSERT INTO categorylevel1 (catid, description, sortorder) VALUES (1, 'test2', 2);
INSERT INTO categorylevel1 (catid, description, sortorder) VALUES (1, 'test3', 3);
INSERT INTO categorylevel1 (catid, description, sortorder) VALUES (2, 'fine1', 1);
INSERT INTO categorylevel1 (catid, description, sortorder) VALUES (2, 'fine2', 2);

INSERT INTO categorylevel2 (id, catL1, description, sortorder) VALUES (1, 1, 'values1', null);
INSERT INTO categorylevel2 (id, catL1, description, sortorder) VALUES (2, 1, 'value2', null);
INSERT INTO categorylevel2 (id, catL1, description, sortorder) VALUES (3, 2, 'nice1', null);
INSERT INTO categorylevel2 (id, catL1, description, sortorder) VALUES (4, 2, 'nice2', null);
INSERT INTO categorylevel2 (id, catL1, description, sortorder) VALUES (5, 2, 'nice3', null);

INSERT INTO categorylevelpages (id, catL2, subhead, description, type) VALUES (1, 1, 'header1', 'page info text 1', 'text');
INSERT INTO categorylevelpages (id, catL2, subhead, description, type) VALUES (2, 1, 'header2', 'page info text 2', 'text');
INSERT INTO categorylevelpages (id, catL2, subhead, description, type) VALUES (3, 2, 'header3', 'page info text 3', 'text');
INSERT INTO categorylevelpages (id, catL2, subhead, description, type) VALUES (4, 2, 'Fun', 'Nice', 'text');
INSERT INTO categorylevelpages (id, catL2, subhead, description, type) VALUES (5, 3, 'Cool', 'Nice things', 'text');
INSERT INTO categorylevelpages (id, catL2, subhead, description, type) VALUES (6, 4, null, 'fine things are here', 'text');
INSERT INTO categorylevelpages (id, catL2, subhead, description, type) VALUES (7, 5, null, 'cool pages of texts', 'text');
INSERT INTO categorylevelpages (id, catL2, subhead, description, type) VALUES (8, 1, 'Checking Image', 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png', 'image');
INSERT INTO categorylevelpages (id, catL2, subhead, description, type) VALUES (9, 2, null, 'https://homepages.cae.wisc.edu/~ece533/images/cat.png', 'image');
