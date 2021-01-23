
# INSERTS
INSERT INTO adrotator (description, about, type, placeOnApp, link, offertype) VALUES ('medical supplies made easy....', 'Sanskar', 'text', 'banner', null, null);
INSERT INTO adrotator (description, about, type, placeOnApp, link, offertype) VALUES ('https://cdn.iconscout.com/icon/premium/png-128-thumb/medical-132-142608.png', 'adasdas', 'image', 'banner', null, null);
INSERT INTO adrotator (description, about, type, placeOnApp, link, offertype) VALUES ('https://cdn.iconscout.com/icon/premium/png-128-thumb/medical-heart-heartcare-care-healthcare-treatment-health-2-27540.png', 'sample', 'image', 'banner', null, null);
INSERT INTO adrotator (description, about, type, placeOnApp, link, offertype) VALUES ('https://cdn.iconscout.com/icon/premium/png-128-thumb/medical-653-831543.png', 'sample', 'image', 'banner', null, null);
INSERT INTO adrotator (description, about, type, placeOnApp, link, offertype) VALUES ('https://cdn.iconscout.com/icon/free/png-128/medical-83-112586.png', 'sample', 'image', 'offer', 'http://google.com', 1);
INSERT INTO adrotator (description, about, type, placeOnApp, link, offertype) VALUES ('https://cdn.iconscout.com/icon/premium/png-128-thumb/medical-43-112255.png', 'sample', 'image', 'offer', 'http://google.com', 1);
INSERT INTO adrotator (description, about, type, placeOnApp, link, offertype) VALUES ('https://cdn.iconscout.com/icon/premium/png-128-thumb/medical-chart-data-document-file-medicalchart-paper-report-41865.png', 'sample', 'image', 'offer', 'http://dpresume.com', 2);


INSERT INTO agenttype (type) VALUES ('agent');
INSERT INTO agenttype (type) VALUES ('delivery');
INSERT INTO agenttype (type) VALUES ('shipper');
INSERT INTO agenttype (type) VALUES ('warehouse');
INSERT INTO agenttype (type) VALUES ('retailer');


INSERT INTO config (`key`, value, helperText) VALUES ('about-us', 'hello about us', 'help text on about us');
INSERT INTO config (`key`, value, helperText) VALUES ('main-blog', '', 'help text on main blog');
INSERT INTO config (`key`, value, helperText) VALUES ('Contact-Us', 'Sanskar Medi Easy', '');
INSERT INTO config (`key`, value, helperText) VALUES ('facebook', 'https://www.facebook.com', 'help text on facebook links');
INSERT INTO config (`key`, value, helperText) VALUES ('linkedin', 'https://www.linkedin.com/login', 'help text on linkedin');
INSERT INTO config (`key`, value, helperText) VALUES ('twitter', 'https://twitter.com/login?lang=en', 'help text on twitter');
INSERT INTO config (`key`, value, helperText) VALUES ('whatsapp', 'https://api.whatsapp.com/send?phone=919582797772', 'help text on whatsapp');
INSERT INTO config (`key`, value, helperText) VALUES ('logo', 'MedEasy', 'help text on logo');
INSERT INTO config (`key`, value, helperText) VALUES ('SplashImg', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/medical-132-142608.png', 'help text on splash img');
INSERT INTO config (`key`, value, helperText) VALUES ('SplashText', 'Sanskar MediEasy
Simplifying Medicines', 'help text on splash text, max 2 lines');
INSERT INTO config (`key`, value, helperText) VALUES ('events', '', 'help text on events');
INSERT INTO config (`key`, value, helperText) VALUES ('app-color', 'black', 'app color global, sample names are: orange, orangered, tomato, purple, navy etc');
INSERT INTO config (`key`, value, helperText) VALUES ('app-text', 'Sanskar MediEasy', 'app text');
INSERT INTO config (`key`, value, helperText) VALUES ('licence', 'licencing bits
GST Info
main terms of use
Sanskar Group of Industries', 'licencing info for bottom part of app splash page, max 4 lines');
INSERT INTO config (`key`, value, helperText) VALUES ('tagline', 'made in delhi, india', 'splash page tag line');
INSERT INTO config (`key`, value, helperText) VALUES ('tagline', 'tagline', 'tagline info');



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

INSERT INTO agenttype (type) VALUES ('agent');
INSERT INTO agenttype (type) VALUES ('delivery');
INSERT INTO agenttype (type) VALUES ('shipper');
INSERT INTO agenttype (type) VALUES ('warehouse');
INSERT INTO agenttype (type) VALUES ('retailer');


INSERT INTO listingicons (category, icons, screen) VALUES ('Orders', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/order-2007308-1694622.png', 'FillOrder');
INSERT INTO listingicons (category, icons, screen) VALUES ('Products', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/products-3133123-2606683.png', 'Catalogue');
INSERT INTO listingicons (category, icons, screen) VALUES ('Capture', 'https://cdn.iconscout.com/icon/premium/png-128-thumb/camera-2543-721043.png', 'OrderScanner');


INSERT INTO dealers (agentid, name, address, pincode, city, country, guid, email, type) VALUES ('dp12', 'devendra', 'lucknow', '129298', 'LKO', 'india', 'admin', 'devendraprasad1984@gmaill.com', '1');
INSERT INTO dealers (agentid, name, address, pincode, city, country, guid, email, type) VALUES ('xy1', 'shukla', 'delhi', '123233', 'LKO', 'india', 'abc', 'devendraprasad1984@gmaill.com', '2');


INSERT INTO product_images (productid, uri, type) VALUES (1, 'https://cdn.iconscout.com/icon/free/png-128/medicine-1671471-1422447.png', 'image');
INSERT INTO product_images (productid, uri, type) VALUES (2, 'https://cdn.iconscout.com/icon/premium/png-128-thumb/medicine-1673048-1419805.png', 'image');
INSERT INTO product_images (productid, uri, type) VALUES (4, 'https://cdn.iconscout.com/icon/premium/png-128-thumb/medicine-2270567-1890898.png', 'image');

