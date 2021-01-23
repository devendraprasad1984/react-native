
# INSERTS
INSERT INTO adrotator (description, about, type, placeOnApp, link, offertype) VALUES ('medical supplies made easy....', 'Sanskar', 'text', 'banner', null, null);
INSERT INTO adrotator (description, about, type, placeOnApp, link, offertype) VALUES ('https://cdn.iconscout.com/icon/premium/png-128-thumb/medical-132-142608.png', 'adasdas', 'image', 'banner', null, null);
INSERT INTO adrotator (description, about, type, placeOnApp, link, offertype) VALUES ('https://cdn.iconscout.com/icon/premium/png-128-thumb/medical-heart-heartcare-care-healthcare-treatment-health-2-27540.png', 'sample', 'image', 'banner', null, null);
INSERT INTO adrotator (description, about, type, placeOnApp, link, offertype) VALUES ('https://cdn.iconscout.com/icon/premium/png-128-thumb/medical-653-831543.png', 'sample', 'image', 'banner', null, null);
INSERT INTO adrotator (description, about, type, placeOnApp, link, offertype) VALUES ('https://cdn.iconscout.com/icon/free/png-128/medical-83-112586.png', 'sample', 'image', 'offer', 'http://google.com', 1);
INSERT INTO adrotator (description, about, type, placeOnApp, link, offertype) VALUES ('https://cdn.iconscout.com/icon/premium/png-128-thumb/medical-43-112255.png', 'sample', 'image', 'offer', 'http://google.com', 1);
INSERT INTO adrotator (description, about, type, placeOnApp, link, offertype) VALUES ('https://cdn.iconscout.com/icon/premium/png-128-thumb/medical-chart-data-document-file-medicalchart-paper-report-41865.png', 'sample', 'image', 'offer', 'http://dpresume.com', 2);

INSERT INTO config (`key`, value, helperText)VALUES ('about-us', 'hello about us', 'help text on about us');
INSERT INTO config (`key`, value, helperText)VALUES ('main-blog', '', 'help text on main blog');
INSERT INTO config (`key`, value, helperText)VALUES ('Contact-Us', 'Sanskar Medi Easy', '');
INSERT INTO config (`key`, value, helperText)VALUES ('facebook', 'https://www.facebook.com', 'help text on facebook links');
INSERT INTO config (`key`, value, helperText)VALUES ('linkedin', 'https://www.linkedin.com/login', 'help text on linkedin');
INSERT INTO config (`key`, value, helperText)VALUES ('twitter', 'https://twitter.com/login?lang=en', 'help text on twitter');
INSERT INTO config (`key`, value, helperText)VALUES ('whatsapp', 'https://api.whatsapp.com/send?phone=919582797772', 'help text on whatsapp');
INSERT INTO config (`key`, value, helperText)VALUES ('logo', 'MedEasy', 'help text on logo');
INSERT INTO config (`key`, value, helperText)VALUES ('SplashImg','https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-blue-purple-vertical-stripes-frosted-simple-atmospheric-background-image_70163.jpg','help text on splash img');
INSERT INTO config (`key`, value, helperText)VALUES ('SplashText', 'Sanskar MediEasy
Simplifying Medicines', 'help text on splash text, max 2 lines');
INSERT INTO config (`key`, value, helperText)VALUES ('events', '', 'help text on events');
INSERT INTO config (`key`, value, helperText)VALUES ('app-color', 'orangered', 'app color global, sample names are: orange, orangered, tomato, purple, navy etc');
INSERT INTO config (`key`, value, helperText)VALUES ('app-text', 'Sanskar MediEasy', 'app text');
INSERT INTO config (`key`, value, helperText)VALUES ('licence', 'licencing bits', 'licencing info for bottom part of app splash page, max 4 lines');


INSERT INTO admins (name, icon, password, email)VALUES ('devendra', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/windy-weather-1865250-1581463.png', 'admin',        'devendraprasad1984@gmail.com');
INSERT INTO admins (name, icon, password, email)VALUES ('akhilesh', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/cool-3056046-2542452.png', 'jacobadmin','devendraprasad1984@gmail.com');

# default uploads images
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/cool-2886038-2392465.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/cool-2635861-2207307.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/cool-3056046-2542452.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/cool-4-92528.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/beverage-26-136275.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/products-3133123-2606683.png', null, 'sample');
INSERT INTO fileuploads (file, size, type, loc, absloc, tags) VALUES ('sample', null, 'image/png', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/order-2007308-1694622.png', null, 'sample');



INSERT INTO listingicons (category, icons, screen) VALUES ('Orders', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/order-2007308-1694622.png', 'FillOrder');
INSERT INTO listingicons (category, icons, screen) VALUES ('Products', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/products-3133123-2606683.png', 'Catalogue');

INSERT INTO dealers (agentid, name, address, pincode, city, country, guid, email) VALUES ('dp12', 'devendra', 'lucknow', '129298', 'LKO', 'india', 'admin', 'devendraprasad1984@gmaill.com');



INSERT INTO products (name, type, price, tax, createOn, discount) VALUES ('prod1', 1, 100, 18, '2021-01-09 00:32:04', 0);
INSERT INTO products (name, type, price, tax, createOn, discount) VALUES ('prod2', 1, 110, 18, '2021-01-09 00:32:10', 0);
INSERT INTO products (name, type, price, tax, createOn, discount) VALUES ('prod3', 1, 120, 18, '2021-01-09 00:32:12', 0);
INSERT INTO products (name, type, price, tax, createOn, discount) VALUES ('prod4', 2, 130, 18, '2021-01-09 00:32:13', 0);
INSERT INTO products (name, type, price, tax, createOn, discount) VALUES ('prod5', 3, 140, 18, '2021-01-09 00:32:13', 0);


