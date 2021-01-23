create table admins
(
    id int auto_increment
        primary key,
    name varchar(200) null,
    icon varchar(1000) null,
    password varchar(50) null,
    email varchar(500) null
);

create table adrotator
(
    id int auto_increment
        primary key,
    description text null,
    about varchar(1000) null,
    type varchar(50) null
);

create table category
(
    id int auto_increment
        primary key,
    category varchar(30) null,
    description varchar(200) null,
    icons varchar(300) null,
    backgroundColor varchar(50) default 'white' null,
    fontColor varchar(50) default 'black' null
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

create table config
(
    `key` varchar(100) null,
    value text null,
    helperText varchar(500) null
);

create table error_log
(
    log_id int auto_increment
        primary key,
    error_message longtext not null,
    error_file longtext not null,
    error_line longtext not null,
    error_trace longtext not null,
    error_log_date datetime default CURRENT_TIMESTAMP null
);

create table fileuploads
(
    id bigint auto_increment
        primary key,
    file varchar(1000) null,
    size bigint null,
    type varchar(100) null,
    loc text null,
    absloc text null,
    tags varchar(1000) null
);

create table supportqueries
(
    id int auto_increment
        primary key,
    name varchar(100) null,
    mobile bigint null,
    email varchar(255) null,
    query varchar(1000) null,
    isreplied int default 0 null
);

create table supportreplies
(
    id int auto_increment
        primary key,
    supportid int null,
    reply varchar(1000) null,
    repliedOn datetime null
);




# INSERTS
INSERT INTO admins (name, icon, password, email) VALUES ('devendra', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/windy-weather-1865250-1581463.png', 'admin123', 'devendraprasad1984@gmail.com');
INSERT INTO admins (name, icon, password, email) VALUES ('jacob', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/cool-3056046-2542452.png', 'jacobadmin', 'devendraprasad1984@gmail.com');
INSERT INTO admins (name, icon, password, email) VALUES ('bhuvan', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/cool-4-92528.png', 'bhuvanCoolGuy', 'devendraprasad1984@gmail.com');
INSERT INTO admins (name, icon, password, email) VALUES ('stefan', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/beverage-26-136275.png', 'nicestefan', 'devendraprasad1984@gmail.com');

INSERT INTO adrotator (description, about, type) VALUES ('Contemporary understandings of disability derive from concepts that arose during the West''s scientific Enlightenment; prior to the Enlightenment, physical differences were viewed through a different lens.[7]

There is evidence of humans during prehistory that looked after people with disabilities. At the Windover Archeological Site, one of the skeletons that was found was a male about 15 years old, who had spina bifida. The condition meant that the boy, probably paralyzed below the waist, was taken care of in a Hunter-gatherer community.[8][9]

Provision that enabled individuals with impaired mobility to access temples and healing sanctuaries were made in ancient Greece.[10].Specifically, by 370 B.C., at the most important healing sanctuary in the wider area, the Sanctuary of Asclepius at Epidaurus, there were at least 11 permanent stone ramps that provided access to mobility-impaired visitors to nine different structures; evidence that people with disabilities were acknowledged and cared for, at least partly, in ancient Greece.[11]

During the Middle Ages, madness and other conditions were thought to be caused by demons. They were also thought to be part of the natural order, especially during and in the fallout of the Plague, which wrought impairments throughout the general population.[12] In the early modern period there was a shift to seeking biological causes for physical and mental differences, as well as heightened interest in demarcating categories: for example, Ambroise Pare, in the sixteenth century, wrote of "monsters", "prodigies", and "the maimed".[13] The European Enlightenment''s emphases on knowledge derived from reason and on the value of natural science to human progress helped spawn the birth of institutions and associated knowledge systems that observed and categorized human beings; among these, the ones significant to the development of today''s concepts of disability were asylums, clinics, and, prisons.[12]

Contemporary concepts of disability are rooted in eighteenth- and nineteenth-century developments. Foremost among these was the development of clinical medical discourse, which made the human body visible as a thing to be manipulated, studied, and transformed. These worked in tandem with scientific discourses that sought to classify and categorize and, in so doing, became methods of normalization.[14]

The concept of the "norm" developed in this time period, and is signaled in the work of the Belgian statistician, sociologist, mathematician, and astronomer Adolphe Quetelet, who wrote in the 1830s of l''homme moyen – the average man. Quetelet postulated that one could take the sum of all people''s attributes in a given population (such as their height or weight) and find their average and that this figure should serve as a norm toward which all should aspire.

This idea of statistical norm threads through the rapid take-up of statistics gathering by Britain, the United States, and the Western European states during this time period, and it is tied to the rise of eugenics. Disability, as well as other concepts including: abnormal, non-normal, and normalcy came from this.[15] The circulation of these concepts is evident in the popularity of the freak show, where showmen profited from exhibiting people who deviated from those norms.[16]

With the rise of eugenics in the latter part of the nineteenth century, such deviations were viewed as dangerous to the health of entire populations. With disability viewed as part of a person''s biological make-up and thus their genetic inheritance, scientists turned their attention to notions of weeding such as "deviations" out of the gene pool. Various metrics for assessing a person''s genetic fitness, which was then used to deport, sterilize, or institutionalize those deemed unfit. At the end of the Second World War, with the example of Nazi eugenics, eugenics faded from public discourse, and increasingly disability cohered into a set of attributes that medicine could attend to – whether through augmentation, rehabilitation, or treatment. In both contemporary and modern history, disability was often viewed as a by-product of incest between first-degree relatives or second-degree relatives.[17]

In the early 1970s, disability activists began to challenge how society treated disabled people and the medical approach to disability. Due to this work, physical barriers to access were identified. These conditions functionally disabled them, and what is now known as the social model of disability emerged. Coined by Mike Oliver in 1983, this phrase distinguishes between the medical model of disability – under which an impairment needs to be fixed – and the social model of disability – under which the society that limits a person needs to be fixed.[18]', 'Creating a Disability-Smart World UDPATED', 'Text');
INSERT INTO adrotator (description, about, type) VALUES ('https://cdn.iconscout.com/icon/free/png-128/business-growth-column-chart-analysis-graph-10-6522.png', 'ximg2', 'Image');
INSERT INTO adrotator (description, about, type) VALUES ('Our 300+ members employ around 20% of the UK workforce and an estimated 8 million people worldwide.Our 300+ members employ around 20% of the UK workforce and an estimated 8 million people worldwide.Our 300+ members employ around 20% of the UK workforce and an estimated 8 million people worldwide.Our 300+ members employ around 20% of the UK workforce and an estimated 8 million people worldwide.Our 300+ members employ around 20% of the UK workforce and an estimated 8 million people worldwide.Our 300+ members employ around 20% of the UK workforce and an estimated 8 million people worldwide.', 'BDF', 'Text');
INSERT INTO adrotator (description, about, type) VALUES ('http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', 'test video', 'Video');
INSERT INTO adrotator (description, about, type) VALUES ('Share your Disability Smart Stories with us.', 'BUSINESS DISABILITY FORUM', 'Text');
INSERT INTO adrotator (description, about, type) VALUES ('https://img.icons8.com/doodle/2x/big-puzzle--v1.png', 'ximage', 'Image');
INSERT INTO adrotator (description, about, type) VALUES ('https://img.icons8.com/doodle/2x/home--v1.png', 'testing about', 'Image');



INSERT INTO category (category, description, icons, backgroundColor, fontColor) VALUES ('Support Staff Updates', 'ABC', 'https://cdn.iconscout.com/icon/free/png-128/business-report-chart-pie-analysis-statics-graph-1-6007.png', 'white', '#14e085');
INSERT INTO category (category, description, icons, backgroundColor, fontColor) VALUES ('Changed', 'icon works', 'https://cdn3.iconfinder.com/data/icons/customer-support-7/32/52_customer_support_service_care_help_team-512.png', 'navy', 'gray');
INSERT INTO category (category, description, icons, backgroundColor, fontColor) VALUES ('Issues', 'Register Issues', 'https://cdn.onlinewebfonts.com/svg/img_454375.png', 'magenta', 'yellow');
INSERT INTO category (category, description, icons, backgroundColor, fontColor) VALUES ('Customer Support', 'XYZ', 'https://i.pinimg.com/originals/45/9f/3b/459f3b61d6a74993f4d31f51ee873750.png', '#ab1bab', '#f5e1f5');
INSERT INTO category (category, description, icons, backgroundColor, fontColor) VALUES ('Cards', 'Cars Details', 'https://img.icons8.com/fluent/2x/double-right.png', '#80f2dd', '#e635c2');
INSERT INTO category (category, description, icons, backgroundColor, fontColor) VALUES ('BankingNew', 'testing banking', 'https://img.icons8.com/officel/2x/services--v2.gif', 'white', '#931ce8');
INSERT INTO category (category, description, icons, backgroundColor, fontColor) VALUES ('new icon', 'new icon desc', 'https://cdn.iconscout.com/icon/free/png-128/archlinux-2752241-2285058.png', 'white', 'black');


INSERT INTO categorydetails (catid, detail_description) VALUES (1, 'In this article, I’d like to reacquaint you with the humble workhorse of communication that is the paragraph. Paragraphs are everywhere.');
INSERT INTO categorydetails (catid, detail_description) VALUES (2, 'In this article, I’d like to reacquaint you with the humble workhorse.');
INSERT INTO categorydetails (catid, detail_description) VALUES (3, ' In fact, at the high risk of stating the obvious, you are reading one now.');
INSERT INTO categorydetails (catid, detail_description) VALUES (4, ' Many people, designers included, think that typography consists of only selecting a typeface, choosing a font size and whether it should be regular or bold.');
INSERT INTO categorydetails (catid, detail_description) VALUES (5, 'Choosing a font size and whether it should be regular or bold. updated cards');
INSERT INTO categorydetails (catid, detail_description) VALUES (6, 'testing banking icon categories and pages in it');


INSERT INTO categorylevel1 (catid, description, sortorder) VALUES (1, 'test1', 1);
INSERT INTO categorylevel1 (catid, description, sortorder) VALUES (1, 'test2', 2);
INSERT INTO categorylevel1 (catid, description, sortorder) VALUES (1, 'test3', 3);
INSERT INTO categorylevel1 (catid, description, sortorder) VALUES (2, 'fine1', 1);
INSERT INTO categorylevel1 (catid, description, sortorder) VALUES (2, 'fine2', 2);
INSERT INTO categorylevel1 (catid, description, sortorder) VALUES (4, 'test1', null);
INSERT INTO categorylevel1 (catid, description, sortorder) VALUES (6, 'banking level1', null);
INSERT INTO categorylevel1 (catid, description, sortorder) VALUES (5, 'page 1 cards', null);


INSERT INTO categorylevel2 (catL1, description, sortorder) VALUES (1, 'values1', null);
INSERT INTO categorylevel2 (catL1, description, sortorder) VALUES (1, 'value2', null);
INSERT INTO categorylevel2 (catL1, description, sortorder) VALUES (2, 'nice1', null);
INSERT INTO categorylevel2 (catL1, description, sortorder) VALUES (2, 'nice2', null);
INSERT INTO categorylevel2 (catL1, description, sortorder) VALUES (2, 'nice3', null);
INSERT INTO categorylevel2 (catL1, description, sortorder) VALUES (7, 'page1', null);
INSERT INTO categorylevel2 (catL1, description, sortorder) VALUES (7, 'page2', null);
INSERT INTO categorylevel2 (catL1, description, sortorder) VALUES (7, 'page3', null);
INSERT INTO categorylevel2 (catL1, description, sortorder) VALUES (3, 'new page level 1', null);
INSERT INTO categorylevel2 (catL1, description, sortorder) VALUES (8, 'cards1', null);
INSERT INTO categorylevel2 (catL1, description, sortorder) VALUES (8, 'cards2', null);


INSERT INTO categorylevelpages (catL2, subhead, description, type) VALUES (1, 'header1', 'page info text 1', 'text');
INSERT INTO categorylevelpages (catL2, subhead, description, type) VALUES (1, 'header2', 'page info text 2', 'text');
INSERT INTO categorylevelpages (catL2, subhead, description, type) VALUES (2, 'header3', 'page info text 3', 'text');
INSERT INTO categorylevelpages (catL2, subhead, description, type) VALUES (2, 'Fun', 'Nice', 'text');
INSERT INTO categorylevelpages (catL2, subhead, description, type) VALUES (3, 'Cool', 'Nice things', 'text');
INSERT INTO categorylevelpages (catL2, subhead, description, type) VALUES (4, null, 'fine things are here', 'text');
INSERT INTO categorylevelpages (catL2, subhead, description, type) VALUES (5, null, 'cool pages of texts', 'text');
INSERT INTO categorylevelpages (catL2, subhead, description, type) VALUES (1, 'Checking Image', 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png', 'image');
INSERT INTO categorylevelpages (catL2, subhead, description, type) VALUES (2, null, 'https://homepages.cae.wisc.edu/~ece533/images/cat.png', 'image');
INSERT INTO categorylevelpages (catL2, subhead, description, type) VALUES (6, 'heading1', 'page heading 1', 'Text');
INSERT INTO categorylevelpages (catL2, subhead, description, type) VALUES (6, 'heading image2', 'https://cdni.iconscout.com/illustration/premium/thumb/abandoned-rusty-old-car-wreckage-in-desert-with-saguaro-cactus-and-an-animal-skull-next-to-it-2880380-2397426.png', 'Image');
INSERT INTO categorylevelpages (catL2, subhead, description, type) VALUES (7, 'image', 'https://cdn.iconscout.com/icon/free/png-128/business-growth-column-chart-analysis-graph-10-6522.png', 'Image');
INSERT INTO categorylevelpages (catL2, subhead, description, type) VALUES (9, 'dummy page', 'text1 2 3', 'Text');
INSERT INTO categorylevelpages (catL2, subhead, description, type) VALUES (9, '', 'https://img.icons8.com/doodle/2x/sun--v1.png', 'Image');
INSERT INTO categorylevelpages (catL2, subhead, description, type) VALUES (10, 'heading cards1', 'looks ok to me', 'Text');
INSERT INTO categorylevelpages (catL2, subhead, description, type) VALUES (10, '', 'https://cdn.iconscout.com/icon/free/png-128/atom-2130793-1798573.png', 'Image');
INSERT INTO categorylevelpages (catL2, subhead, description, type) VALUES (11, '', 'https://img.icons8.com/dusk/2x/under-computer.png', 'Image');


INSERT INTO config (`key`, value, helperText) VALUES ('about-us', 'we will think on it', 'help text on about us');
INSERT INTO config (`key`, value, helperText) VALUES ('main-blog', 'https://businessdisabilityforum.org.uk/wp-json/wp/v2/posts', 'help text on main blog');
INSERT INTO config (`key`, value, helperText) VALUES ('Contact-Us', 'BDF App
England, Uk
yet another address', 'help text on contact us');
INSERT INTO config (`key`, value, helperText) VALUES ('facebook', 'https://www.facebook.com', 'help text on facebook links');
INSERT INTO config (`key`, value, helperText) VALUES ('linkedin', 'https://www.linkedin.com/login', 'help text on linkedin');
INSERT INTO config (`key`, value, helperText) VALUES ('twitter', 'https://twitter.com/login?lang=en', 'help text on twitter');
INSERT INTO config (`key`, value, helperText) VALUES ('whatsapp', 'https://api.whatsapp.com/send?phone=919807574209', 'help text on whatsapp');
INSERT INTO config (`key`, value, helperText) VALUES ('logo', 'BDF', 'help text on logo');
INSERT INTO config (`key`, value, helperText) VALUES ('SplashImg', 'https://img.icons8.com/officel/2x/speech-bubble--v2.gif', 'help text on splash img');
INSERT INTO config (`key`, value, helperText) VALUES ('SplashText', 'Business Disability Forum
Smart Organisation
By: Natwest Group', 'help text on splash text, max 3 lines');
INSERT INTO config (`key`, value, helperText) VALUES ('events', 'https://businessdisabilityforum.org.uk/wp-json/wp/v2/events', 'help text on events');
INSERT INTO config (`key`, value, helperText) VALUES ('app-color', '#7424e3', 'app color global, sample names are: orange, orangered, tomato, purple, navy etc');
INSERT INTO config (`key`, value, helperText) VALUES ('app-text', 'Business Disability Forum', 'app text');



INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/cool-2886038-2392465.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/cool-2635861-2207307.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/cool-3056046-2542452.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/cool-4-92528.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/beverage-26-136275.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/ice-cubes-672732.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/teenage-boy-3055446-2543148.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/teenage-boy-3055770-2542662.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/cool-breeze-995077.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/windy-weather-forecast-1865209-1581422.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/fashion-girl-3-984907.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/windy-weather-1865250-1581463.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdni.iconscout.com/illustration/free/thumb/cool-guy-2372150-1999360.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdni.iconscout.com/illustration/free/thumb/cool-guy-2372197-1999405.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdni.iconscout.com/illustration/free/thumb/cool-businessman-2043008-1730195.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdni.iconscout.com/illustration/premium/thumb/cool-dj-playing-music-2812450-2352335.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdni.iconscout.com/illustration/free/thumb/woman-enjoying-cool-breeze-2814631-2343685.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdni.iconscout.com/illustration/premium/thumb/cool-minimalistic-ride-on-toy-car-2880305-2396707.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdni.iconscout.com/illustration/premium/thumb/kid-2144357-1809369.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdni.iconscout.com/illustration/premium/thumb/yoga-man-1485650-1257072.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdni.iconscout.com/illustration/premium/thumb/work-from-home-2279533-1906743.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdni.iconscout.com/illustration/premium/thumb/storage-cooling-system-2545388-2162287.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdni.iconscout.com/illustration/premium/thumb/ethereum-server-connectivity-2545313-2146448.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdni.iconscout.com/illustration/premium/thumb/young-people-dancing-and-singing-in-karaoke-club-2952767-2463908.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdni.iconscout.com/illustration/premium/thumb/female-photographer-holding-camera-sitting-on-chair-2706571-2266529.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdni.iconscout.com/illustration/premium/thumb/girls-gossiping-2880317-2409455.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdni.iconscout.com/illustration/premium/thumb/cheerful-kiteboarder-pulled-by-a-power-kite-2812472-2370368.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdni.iconscout.com/illustration/premium/thumb/abandoned-rusty-old-car-wreckage-in-desert-with-saguaro-cactus-and-an-animal-skull-next-to-it-2880380-2397426.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn3d.iconscout.com/3d/premium/thumb/man-holding-calculator-3118517-2606159.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn3d.iconscout.com/3d/premium/thumb/santa-holding-presents-3095125-2577669.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn3d.iconscout.com/3d/premium/thumb/doctor-2996951-2495218.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn3d.iconscout.com/3d/premium/thumb/business-goal-2869618-2384369.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn3d.iconscout.com/3d/free/thumb/business-woman-holding-credit-card-2869228-2384332.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn3d.iconscout.com/3d/free/thumb/launch-3078221-2560929.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn3d.iconscout.com/3d/free/thumb/adobe-2950160-2447921.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn3d.iconscout.com/3d/free/thumb/ios-calculator-2978357-2476734.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn3d.iconscout.com/3d/free/thumb/safari-logo-2978364-2476741.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn3d.iconscout.com/3d/free/thumb/ios-photos-2978365-2476742.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn3d.iconscout.com/3d/free/thumb/macos-home-logo-2978368-2476745.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn3d.iconscout.com/3d/free/thumb/app-store-in-ios-2978358-2476735.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn3d.iconscout.com/3d/free/thumb/facetime-logo-2978361-2476738.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn3d.iconscout.com/3d/free/thumb/macos-calendar-2978363-2476740.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn3d.iconscout.com/3d/free/thumb/macos-contacts-2978362-2476739.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn3d.iconscout.com/3d/free/thumb/macos-messages-2978360-2476737.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn3d.iconscout.com/3d/free/thumb/3d-mac-os-finder-logo-2978366-2476743.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/free/png-128/house-promotion-2913206-2424715.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/free/png-128/social-promotion-1416904-1199897.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/free/png-128/marketing-1568409-1326966.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/free/png-128/loudspeaker-259-1114166.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/free/png-128/email-marketing-tool-seo-newsletter-advertising-promotion-3-9498.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/free/png-128/gmail-2-93927.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/free/png-128/photo-storage-1937700-1646154.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/free/png-128/business-statics-analysis-email-mail-document-paper-6024.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/free/png-128/apple-phone-2-493154.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/free/png-128/gmail-2923657-2416660.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/free/png-128/window-2332759-1939467.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/free/png-128/interaction-3051166-2554813.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/free/png-128/atom-2130793-1798573.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/free/png-128/5g-network-3002666-2505844.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/free/png-128/tv-1751696-1489692.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/free/png-128/wifi-1867139-1589166.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/free/png-128/android-1869028-1583152.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/free/png-128/business-man-connection-linking-partnership-node-network-5994.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/free/png-128/business-model-connected-employee-manage-hierarchy-people-6015.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/free/png-128/business-location-finance-place-pin-marker-placement-2-5901.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/free/png-128/business-person-employee-finance-salary-female-avatar-2-5927.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/free/png-128/business-growth-column-chart-analysis-graph-10-6522.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/free/png-128/business-wall-clock-watch-time-schedule-optimization-5995.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/free/png-128/business-report-chart-pie-analysis-statics-graph-6000.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/free/png-128/business-report-chart-pie-analysis-statics-graph-1-6007.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/free/png-128/business-hierarchy-13-1121431.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/free/png-128/strategy-2687950-2229412.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/free/png-128/group-2639525-2187528.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/free/png-128/archlinux-2752241-2285058.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/free/png-128/authy-2752239-2285056.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/officel/2x/bookmark-ribbon.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/officel/2x/bookmark.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/officel/2x/delete-sign.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/officel/2x/edit.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/officel/2x/plus.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/officel/2x/refresh.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/officel/2x/search--v2.gif', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/officel/2x/share.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/officel/2x/synchronize.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/officel/2x/document.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/officel/2x/folder-invoices.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/officel/2x/services--v2.gif', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/officel/2x/puzzle.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/officel/2x/settings--v2.gif', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/officel/2x/services--v1.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/officel/2x/checked--v1.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/officel/2x/unlock.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/officel/2x/box.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/officel/2x/contacts.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/officel/2x/home.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/officel/2x/calendar.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/officel/2x/user-female.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/officel/2x/mailbox-closed-flag-down.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/officel/2x/speech-bubble--v1.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/officel/2x/speech-bubble--v2.gif', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/officel/2x/sun.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/officel/2x/user-male.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/offices/2x/money-transfer.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/dusk/2x/processor.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/dusk/2x/under-computer.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/doodle/2x/scroll.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/doodle/2x/wrong-puzzle-piece.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/doodle/2x/big-puzzle--v1.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/doodle/2x/services--v1.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/doodle/2x/home--v1.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/doodle/2x/binoculars--v1.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/doodle/2x/sun--v1.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/doodle/2x/key--v1.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/doodle/2x/icons8-new-logo.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/doodle/2x/news.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://img.icons8.com/fluent/2x/double-right.png', null, 'sample');




