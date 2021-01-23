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

create table appusage
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

