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
    type varchar(50) null,
    placeOnApp varchar(50) null,
    link varchar(1000) null,
    offertype int null
);

create table INSERT INTO sanskar_med_easy.config (`key`, value, helperText) VALUES ('about-us', 'hello about us', 'help text on about us');
INSERT INTO sanskar_med_easy.config (`key`, value, helperText) VALUES ('main-blog', '', 'help text on main blog');
INSERT INTO sanskar_med_easy.config (`key`, value, helperText) VALUES ('Contact-Us', 'Sanskar Medi Easy', '');
INSERT INTO sanskar_med_easy.config (`key`, value, helperText) VALUES ('facebook', 'https://www.facebook.com', 'help text on facebook links');
INSERT INTO sanskar_med_easy.config (`key`, value, helperText) VALUES ('linkedin', 'https://www.linkedin.com/login', 'help text on linkedin');
INSERT INTO sanskar_med_easy.config (`key`, value, helperText) VALUES ('twitter', 'https://twitter.com/login?lang=en', 'help text on twitter');
INSERT INTO sanskar_med_easy.config (`key`, value, helperText) VALUES ('whatsapp', 'https://api.whatsapp.com/send?phone=919582797772', 'help text on whatsapp');
INSERT INTO sanskar_med_easy.config (`key`, value, helperText) VALUES ('logo', 'MedEasy', 'help text on logo');
INSERT INTO sanskar_med_easy.config (`key`, value, helperText) VALUES ('SplashImg', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/medical-132-142608.png', 'help text on splash img');
INSERT INTO sanskar_med_easy.config (`key`, value, helperText) VALUES ('SplashText', 'Sanskar MediEasy
Simplifying Medicines', 'help text on splash text, max 2 lines');
INSERT INTO sanskar_med_easy.config (`key`, value, helperText) VALUES ('events', '', 'help text on events');
INSERT INTO sanskar_med_easy.config (`key`, value, helperText) VALUES ('app-color', 'black', 'app color global, sample names are: orange, orangered, tomato, purple, navy etc');
INSERT INTO sanskar_med_easy.config (`key`, value, helperText) VALUES ('app-text', 'Sanskar MediEasy', 'app text');
INSERT INTO sanskar_med_easy.config (`key`, value, helperText) VALUES ('licence', 'licencing bits
GST Info
main terms of use
Sanskar Group of Industries', 'licencing info for bottom part of app splash page, max 4 lines');
INSERT INTO sanskar_med_easy.config (`key`, value, helperText) VALUES ('tagline', 'made in delhi, india', 'splash page tag line');
INSERT INTO sanskar_med_easy.config (`key`, value, helperText) VALUES ('tagline', 'tagline', 'tagline info');invage
(
    id int auto_increment
        primary key,
    usedon datetime null,
    usedby varchar(50) null,
    loc varchar(200) null
);

create table config
(
    `key` varchar(100) null,
    value text null,
    helperText varchar(500) null
);

create table dealers
(
    id int auto_increment
        primary key,
    agentid varchar(50) null,
    name varchar(300) null,
    address varchar(1000) null,
    pincode varchar(50) null,
    city varchar(100) null,
    country varchar(100) null,
    guid varchar(20) null,
    email varchar(500) null,
    type varchar(50) default 'agent' null,
    constraint dealers_pk
        unique (guid)
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

create table invoice
(
    id bigint auto_increment
        primary key,
    orderid bigint null,
    amount float null,
    taxes float null,
    discount float null,
    finalAmount float null,
    createdon datetime null,
    biller varchar(100) null,
    agentid varchar(50) null
);

create table listingicons
(
    id int auto_increment
        primary key,
    category varchar(100) null,
    icons varchar(1000) null,
    screen varchar(100) null
);

create table offers
(
    id int auto_increment
        primary key,
    type varchar(100) null,
    active int null
);

create table orders
(
    id bigint auto_increment
        primary key,
    createdon datetime null,
    agentid varchar(50) null,
    status varchar(200) null,
    trackingInfo varchar(1000) null
);

create table orderitems
(
    id bigint auto_increment
        primary key,
    item varchar(250) null,
    orderid bigint null,
    createdon datetime null,
    amount float null,
    taxes float null,
    discount float null,
    price float null,
    constraint orderitems_orders_id_fk
        foreign key (orderid) references orders (id)
            on update cascade on delete cascade
);

create table products
(
    id bigint auto_increment
        primary key,
    name varchar(300) null,
    type bigint null,
    price float null,
    tax float null,
    createOn datetime null,
    discount float null,
    description varchar(1000) null
);

create table product_images
(
    id int auto_increment
        primary key,
    productid bigint null,
    uri varchar(1000) null,
    type varchar(50) null,
    constraint product_images_products_id_fk
        foreign key (productid) references products (id)
            on update cascade on delete cascade
);

create table statuscodes
(
    id int auto_increment
        primary key,
    status varchar(100) null
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

create table taxes
(
    id bigint auto_increment
        primary key,
    name varchar(100) null,
    value float null,
    isActive int null,
    createOn datetime null
);

create table types
(
    id bigint auto_increment
        primary key,
    name varchar(100) null,
    createOn datetime null
);



create table agenttype
(
    id int auto_increment
        primary key,
    type varchar(100) null
);



