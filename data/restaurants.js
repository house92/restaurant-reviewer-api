const MOCK_RESTAURANTS = [
  {
    name: 'Mordecai',
    description: 'Mordecai is a bi- level bar and restaurant located inside the Hotel Zachary in the heart of Wrigleyville.Created by Chef Matthias Merges of Folkart Restaurant Management, the cocktail - centric space features one of the country\'s largest selections of rare and collectible spirits.',
    image: 'https://www.mordecaichicago.com/wp-content/uploads/2019/04/600x600-mordecaiFullSpace.jpg',
  },
  {
    name: 'Esters',
    description: 'Esters is a cafe and a brunch location that does not serve avocado, out of principle. In other words, it’s a cafe — which verges into restaurant territory — with a little more ambition. So chef Jack Lloyd-Jones might scatter some herbs and nutritional yeast over poached eggs, whipped cod’s roe, broad beans, and buckwheat; or serve a sweetcorn soup with nectarine, curry leaf, and crème fraiche. Weekends bring a meat-for-breakfast policy that eschews bacon for confit duck, lamb shoulder, or pork belly. A signature miso and white chocolate cookie, the creation of co-owner Nia Burr, is almost reason enough to visit. So too are coffees made with the same care and precision as the food, and house drinking vinegars and sodas in technicolour hues.',
    image: 'https://cdn.vox-cdn.com/thumbor/ry8cTWTSmrbJbrgNhTj3azjLZ4k=/0x207:1080x873/1200x900/filters:focal(456x474:628x646):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/65421635/esters.0.jpg'
  },
  {
    name: 'P. Franco',
    description: 'The carousel of rotating chefs at this Hackney wine bar and shop are currently responsible for some of the capital’s most arresting gourmet artistry. This is the pared-back playground for some of the world’s most innovative and movable chefs. Amazingly — given use of only three inductions hobs — over the past two years, chefs William Gleave, Tim Spedding, George Tomlin and Giuseppes Lacorazza and Belvedere, respectively, have positioned P. Franco as one of the most exciting and ‘now’ showcases in town. River Cafe and Rochelle Canteen alumna Anna Tobias followed, with new chef Seb Myers now reasserting its debt to Parisian cave traditions, with thoughtful, idiosyncratic comfort food including a red mullet tartine and inky cuttlefish rice.',
    image: 'https://cdn.vox-cdn.com/thumbor/P_JYJGLwHZapovIGXNf2wjYFDx8=/0x0:2367x3550/1200x900/filters:focal(995x1586:1373x1964):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62567058/Eater_day4_P.Franco_0188.0.0.jpg'
  },
  {
    name: 'Westerns Laundry',
    description: 'A relatively recent emphasis — in no small part because of a growing relationship between London restaurants and Cornish suppliers — is being placed on English waters. Westerns Laundry, by the same operators, Jeremie Cometto-Lingenheim and David Gingell, of Primeur and Jolene, is one of London’s best seafood restaurants. The cuttlefish and ham croquette was one of 2017’s standout dishes; langoustine with bloody marie rose is as good as minimal shellfish service gets.',
    image: 'https://cdn.vox-cdn.com/thumbor/aeVPzKwjU2VkrgWs9v4ySQzR1eU=/0x0:428x640/1200x900/filters:focal(180x286:248x354):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62567088/20170614_Westerns_Laundry_food_001_Patricia_Niven.0.0.jpg'
  },
  {
    name: 'Mangal 2',
    description: 'Mangal 2 is famous for three reasons: one, it prepares excellent, no-nonsense Turkish food from an historic ocakbaşı — grilled chicken, lamb, and quail kebabs, pickled chillies and a classic grilled onion, sumac and pomegranate molasses salad. Two, the artists Gilbert and George eat there almost every night of the week. And three, the charismatic young general manager — Ferhat Dirik — runs the room with expert ease. Iconic, reliable and fun, Mangal 2 is the pick of Kingsland Road’s many Turkish options and will always be a London institution.',
    image: 'https://cdn.vox-cdn.com/thumbor/FNGNJbr2JvK2HT9pJjov3aOp3F8=/0x0:2367x3550/1200x900/filters:focal(995x1586:1373x1964):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62567059/Eater_day4_Mangal_2_0185.0.0.jpg'
  },
  {
    name: 'Trullo',
    description: 'Trullo’s elegant dining room and simple, seasonal food, marks it out both as one London’s best Italian restaurants and one of the city’s finest neighbourhood restaurants. Dark wood, low lighting, white table cloths, and just-put-it-on-the-plate plating characterise it as anti-Instagram. Trullo’s spiritual parents are the two most important restaurants of a generation: the River Cafe and St John, so dishes marry Italian traditions with British (and Italian) ingredients, fashioned into delicious antipasti, fresh pastas and secondi, dishes which often do a little time on the charcoal grill. Where sister site, Padella, is cheaper, faster, and increasingly difficult to get into, Trullo, which offers the same signature beef shin pappardelle and other Padella hits, is more of a grown-up place to eat and relax. A largely Italian (and largely natural-leaning) wine list is just as considered as everything else.',
    image: 'https://cdn.vox-cdn.com/thumbor/y7Pxx2KZM3OEfQZ3_YV6iuJn-gQ=/0x0:5616x3744/1200x900/filters:focal(2359x1423:3257x2321):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/64740012/Trullo.0.jpg'
  },
  {
    name: 'Black Axe Mangal',
    description: 'It\'s not that long ago that the existence of a restaurant like B.A.M.would have been unimaginable in London.But chef Lee Tiernan has pedigree(St.John) and London has changed.The madness of Turk- ish(sourdough) flatbreads and kebabs by a British chef in Islington, against the backdrop of graffiti tributes to KISS et al., is matched only by its unique style and invention in the city.',
    image: 'https://cdn.vox-cdn.com/thumbor/RnEW-VPsV75-BK_t2EdM9SHCIcI=/0x0:2367x3550/1200x900/filters:focal(995x1586:1373x1964):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62567060/Eater_day4_Black_Axe_Mangal_0177.0.0.jpg'
  },
  {
    name: 'The Laughing Heart',
    description: 'The Laughing Heart in Hackney is not unlike the great new-wave wine bars of Paris and London. But unlike the small P. Franco and 40 Maltby Street, this two-floor restaurant is more conventional, in format at least. Dishes by chef Tom Anglesea fuse Asian, Modern British and Mediterranean styles and ingredients: olives stuffed with makrut lime and charcuterie offcuts; Jersey Royals with smoked lamb heart and wild garlic; wild boar terrine; and a signature Sichuan crème brulée.',
    image: 'https://cdn.vox-cdn.com/thumbor/autXdN4x17phtt_cEjLQZXVGyO8=/0x0:2048x1536/1200x900/filters:focal(788x571:1114x897):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62567061/Salmon_TLH___1_.0.0.jpg'
  },
  {
    name: 'Marksman',
    description: 'The Sunday roast is a pillar in British food culture, but surprisingly few restaurants better the home-cooked version of this national institution. The Marksman’s roast, one of the finest in the city, is worth travelling to Hackney for. But this is also a pub-restaurant to visit any day of the week — for delicious, seasonal, imaginative cooking — like coco beans, girolles and hen’s egg or brown crab and fennel pollen on toast — brilliantly British and refined, this should be the template for the gastropub 2.0 in London.',
    image: 'https://cdn.vox-cdn.com/thumbor/Wwe1TaQkrw7K5KKDOkQzD43LMwM=/0x0:3550x2367/1200x900/filters:focal(1491x900:2059x1468):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62567062/Eater_day3_Marksman_0151.0.0.jpg'
  },
  {
    name: 'Roti King',
    description: 'The area around Euston station is replete with no-frills, delicious places to eat. This little Malaysian basement setup from chef Sugen Gopal on Doric Way may be the best. Two pieces of freshly made, high-moisture roti canai — eat in or take-away — are best served with curry dhal. That speciality costs only £4.50, though round two is likely. In the evening, be prepared to wait.',
    image: 'https://cdn.vox-cdn.com/thumbor/-P7punEaGjr7aFVaqrPv-o8GXBk=/0x0:2367x3550/1200x900/filters:focal(995x1586:1373x1964):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62567063/Eater_day5_Roti_King_0204_2.0.0.jpg'
  },
  {
    name: 'Brawn',
    description: 'Ed Wilson\'s hearty Franco-Italian menu is a showcase for his own personal love of food. To eat here is to share that passion, especially now with an increased emphasis on fresh pasta. Wines are predominantly natural and biodynamic. Illustrated wine posters, art and curios on whitewashed brick walls also make the two relaxed dining rooms on Columbia Road among London\'s most handsome and cool. Here also lie the city’s smallest and most beautiful bathrooms — among the very first to use Aesop, to boot.',
    image: 'https://cdn.vox-cdn.com/thumbor/_pIA93GU5kO7e_aNqMSadVlT2rQ=/0x0:2367x3550/1200x900/filters:focal(995x1586:1373x1964):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62567064/Eater_day2_Brawn_0109.0.0.jpg'
  },
  {
    name: 'The Clove Club',
    description: 'It’s Shoreditch, so it’s high-end but not fusty; service is low-key but impeccable. One of Britain\'s most talented chefs, Isaac McHale has put in time at high-profile spots Noma and The Ledbury. Stunning, meandering tasting menus — chiefly British — with flashes of flavour from such cuisines as India and Japan are the draw in the dining room. Only one (cult) snack — pine salt fried chicken — and great cocktails are served in the bar for walk-ins, too.',
    image: 'https://cdn.vox-cdn.com/thumbor/795cHIeLBC1hUplXWkHhbft3gLQ=/0x0:1073x676/1200x900/filters:focal(452x253:622x423):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62567065/grouse.0.0.jpg'
  },
  {
    name: 'Moro',
    description: 'This year marks the 20th anniversary of Moro on Exmouth market — the restaurant by River Cafe alumni Sam and Samantha Clark. Their focus has always been on ingredients, presented through menus that travel, not just through Italy, but more broadly across southern Europe, North Africa and often leaning toward the Middle East. A curtained entrance and cool Mediterranean aesthetic make Moro one of a small number of dining rooms in which it is possible to escape the city. It hasn’t dated one bit.',
    image: 'https://cdn.vox-cdn.com/thumbor/vtSU6995Qa2hfFf_GN63hN728Tw=/0x0:2367x3550/1200x900/filters:focal(1026x1416:1404x1794):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62567066/Eater_day2_Morito_0112.0.0.jpg'
  },
  {
    name: 'TāTā Eatery',
    description: 'Tayēr + Elementary — a world-class cocktail bar in-the-making — is the new, permanent home for two of the city’s most genuinely exciting chefs. Zijun Meng and Ana Gonçalves’ TāTā Eatery, a four-seater counter in an ultra modern room, is responsible some of the city’s most exciting cooking. Their self-described “east meets west” cuisine results in dishes like wild strawberry in mushroom broth with savoury sugar puffs; beef with gooseberry, black sesame and shiso; and aged, dried Dover sole with ginger, sake, and a wet herbaceous rice.',
    image: 'https://cdn.vox-cdn.com/thumbor/cyCyFB_YgLex1NU8sHC62umqAIs=/0x0:4032x3024/1200x900/filters:focal(1694x1190:2338x1834):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/65421637/IMG_8760.0.jpg'
  },
  {
    name: 'Quality Chop House',
    description: 'After one mouthful, there’s no need to question the apparent audacity of serving something so basic as mince on dripping toast. Rich, rustic dishes like this, using first-rate beef (they butcher their own aged meat) and sourdough toast, speak to the heritage of the site — once a Farringdon working man\'s eating house — in a 21st-century accent. Bonus: The next-door walk-in wine bar, Quality Wines, is now, low-key, one of the most interesting casual spots to eat and drink in the city.',
    image: 'https://cdn.vox-cdn.com/thumbor/cjVwQP355BVl5cBv2QcNwzJxjqE=/0x0:2367x3550/1200x900/filters:focal(995x1586:1373x1964):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62567067/Eater_day4_Chop_House_0155.0.0.jpg'
  },
  {
    name: 'BRAT',
    description: 'Freshly Michelin-starred Brat, which lives above Smoking Goat in Shoreditch, is named after the old English colloquialism for turbot. Grilled seafood (including whole turbot) sourced from Cornwall is the focus. Lamb from Wales, beef from the English south west, and seasonal fruit and vegetables from all over (mostly grilled) is given plenty of attention, too. Chef Tomos Parry differentiates himself slightly from other grill chefs, aiming to emulate methods used in the north of Spain — using wood fire to cook his range of ingredients slowly. A comparatively classical 100-bin wine list has been organised by the team from Noble Rot, which is another way of saying it is very good.',
    image: 'https://cdn.vox-cdn.com/thumbor/9nTw6hCnW5bPXHgffsUgogHGfRI=/0x0:8256x5504/1200x900/filters:focal(3468x2092:4788x3412):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62567098/2017_BM_Brat_154_copy.0.0.jpg'
  },
  {
    name: 'Honey & Co',
    description: 'After Delia (Smith) and Jamie (Oliver), Britain was Ottolenghiised: The Israeli chef is the go-to doctrine for the de rigueur dinner party. Itamar Srulovich and Sarit Packer worked for Ottolenghi before opening Honey & Co, their warm, welcoming little cafe-dining room in Fitzrovia. It is London\'s finest example of Middle Eastern cuisine, sating a populist craving for sumac and co.; humus and freshly baked pitta; thyme mushrooms. A selection of pickles and home-baked pastries mean it is also one of the city’s most unexpected places to have a satisfying brunch and/or tea.',
    image: 'https://cdn.vox-cdn.com/thumbor/0KunE1qRQNMO_KEktFG767lw3L0=/0x0:2367x3550/1200x900/filters:focal(995x1586:1373x1964):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62567068/Eater_day1_Honey_Co_0104.0.0.jpg'
  },
  {
    name: 'Lyle\'s',
    description: 'This handsome, minimalist Shoreditch restaurant is a marriage of its co-owner James Lowe\'s British heritage(St.John Bread & Wine) and his many stints across the globe,including one at Noma.Lowe is a gifted chef and one of London\'s foremost proponents of the quality of British produce. His relaxed brand of fine dining regularly celebrates mutton, game and goat, as well as wood fire-cooked seafood and seasonal English vegetables.',
    image: 'https://cdn.vox-cdn.com/thumbor/y9D_dnk3kb3Eh3c9J6ptbablJtY=/0x0:2367x3550/1200x900/filters:focal(995x1586:1373x1964):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62567069/Eater_day5_Lyle_s_0200.0.0.jpg'
  },
  {
    name: 'Sushi Tetsu',
    description: 'Clerkenwell’s Sushi Tetsu might be the hardest reservation to secure in London. That’s in part because there are only seven seats. It’s also because pound-for-pound, it serves the best sushi in the city. To observe chef Toru Takahashi’s knife skills and to eat his omakase menu while receiving Harumi Takahashi’s gently flawless hospitality (the two are married) is to experience one of London’s most complete and completely brilliant restaurants.',
    image: 'https://cdn.vox-cdn.com/thumbor/7iTqZ6Zdm0Qky0CVENUbk8z-GDU=/0x0:2367x3550/1200x900/filters:focal(995x1586:1373x1964):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62567070/Eater_day3_Sushi_Tetsu_0136.0.0.jpg'
  },
  {
    name: 'Otto’s Restaurant',
    description: 'Here is a restaurant that unashamedly and decadently revisits the past, where cooking theatrically is done tableside and where one can marvel at the (traditional silverware required for the) preparation of canard à la presse (pressed duck). This is Otto’s trademark, served alongside the world’s most ethereal carbohydrate: pommes soufflées. When a restaurateur opens an eponymous restaurant, especially in the possessive, it can be narcissistic or lazy — or both. In the case of Otto’s, it could not be more appropriate. For this is Otto’s restaurant; it is nobody else’s.',
    image: 'https://cdn.vox-cdn.com/thumbor/xYFPHbw0YL1mpx43GTHozXE9PNc=/0x0:2367x3550/1200x900/filters:focal(995x1586:1373x1964):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62567071/Eater_day3_Otto_0135.0.0.jpg'
  },
  {
    name: 'Noble Rot',
    description: 'In an industry with a tendency to launch “concepts” and experiences guided by zeitgeists, the opening of an actual restaurant is oddly novel. Noble Rot in Bloomsbury is young, confident, and romantic: It has it. Seasonal British food, like slipsole in seaweed butter or smoked eel in gazpacho, is cooked by Paul Weaver under the notional guidance of the Sportsman’s Stephen Harris. Most importantly, it never plays second fiddle to one of the most interesting wine lists in town.',
    image: 'https://cdn.vox-cdn.com/thumbor/mlNFOoyAmFmYhNEIXG0L98anZRk=/0x0:2367x3550/1200x900/filters:focal(995x1586:1373x1964):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62567072/Eater_day3_Noble_Rot_0128.0.0.jpg'
  },
  {
    name: 'Master Wei Xi\'An',
    description: 'The Xi’an Chinese cooking that has made Wei Guirong — an alumnus of Sichuanese restaurant Barshu in Chinatown — a star of London dining, this year got a new home in Bloomsbury. Master Wei is Guirong’s first solo project — following her joint venture, Xi’an Impression by the Emirates Stadium in Highbury, a tiny restaurant which has rightly earned cult status among lovers of regional Chinese food in the capital. At Master Wei, like at Xi’an Impression, the focus is on the region’s flour-foods, mianshi: peerless biang biang noodle dishes, with vegetables or beef and hot chilli oil; fine liang pi, cold skin noodles with a cool, refreshing, umami rich dressing, and the chef’s inimitable “burgers” with a cumin-spiced beef or pork filling.',
    image: 'https://cdn.vox-cdn.com/thumbor/vI5d3QfbnTgmIfEUQ6YnL7pu15U=/0x0:3659x2614/1200x900/filters:focal(1538x1015:2122x1599):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66039268/Eater_MasterWei_7.0.jpg'
  },
  {
    name: 'St. John Bread and Wine',
    description: 'While the original St. John is rightly regarded as the most important British restaurant in a generation, Bread & Wine, the sister site in Spitalfields, is a better and more interesting restaurant today. If food were a religion, then this would be its church. Welsh rarebit, bone marrow and parsley salad, foie gras on toast, mussels with cider, devilled kidneys; half a dozen madeleines; and a whole roast suckling pig are classics: lunch here is one of the purest, most heavenly restaurant experiences in London.',
    image: 'https://cdn.vox-cdn.com/thumbor/8vsfOOXCTq8FWUJbAKx_X3A5EDA=/0x0:2367x3550/1200x900/filters:focal(995x1586:1373x1964):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62567073/Eater_day2_St.John_Bread_Wine_0116.0.0.jpg'
  },
  {
    name: 'Dumpling Shack',
    description: 'The shengjianbao — pork and leek fried soup dumplings — prawn wontons in an umami-rich chilli oil, beef dan dan noodles, and spring onion pancakes at John Li’s Spitalfields stall Dumpling Shack feature on a short menu — spanning the cuisines of Shanghai, Sichuan, and Hong Kong — that offers some of the best takeaway food available anywhere in the east end, if not the whole city. It is also incredibly consistent, such is Li and his team’s dedication to quality and to taste. Li’s expansion late last year to the neighbouring stall with Fen Noodles, offering hand-pulled big plate chicken noodles from the Xinjiang region in northwest China, indicates that he may yet open a restaurant proper — which is an exciting prospect for London’s Chinese restaurant scene.',
    image: 'https://cdn.vox-cdn.com/thumbor/-a_Fq243pq2ZI3WoFML_CjrdvUQ=/0x0:4000x2666/1200x900/filters:focal(1680x1013:2320x1653):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66039269/_DSC4048.0.jpg'
  },
  {
    name: 'BAO Fitzrovia',
    description: 'It now feels like an age since Bao operated as a streetfood stall on a Hackney market. With three restaurants in three years, it’s hard to recall such a stylish example of that graduation, nor a brand that has courted such a devout legion of followers. Bao makes beautiful, pillowy Taiwanese buns and stuffs them with some traditional and some not-so-traditional fillings, often from fine British ingredients. At Fitzrovia, with one of the most sophisticated development kitchens in central London, there are plates like xo sweetcorn with beef butter, aged grilled pork belly over rice, and a fried chicken chop with soy-cured egg yolk. (There are less queues here than at Soho, too.)',
    image: 'https://cdn.vox-cdn.com/thumbor/pxK0wHVah8YjwE7yUhN2IxC85l4=/0x0:3383x2241/1200x900/filters:focal(1422x851:1962x1391):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62567099/DSC_6062.16.jpg'
  },
  {
    name: 'Koya Soho',
    description: 'Shuko Oda\'s little bar in Soho is among London\'s most acclaimed Japanese restaurants. Over a long, blond wooden counter, chefs calmly and politely pass hot bowls of steaming broth containing the noodles made on site, topped with the likes of tempura prawn. The specials board of comparatively modern small plates changes every day and exhibits some of the city’s best undiscovered treasures; the traditional Japanese breakfast is the most steadying in London.',
    image: 'https://cdn.vox-cdn.com/thumbor/vzVJqFQJNPG3eUc3x_o8xjPxjY8=/0x0:2367x3550/1200x900/filters:focal(503x2140:881x2518):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62567075/Eater_day1_KoyaBar_0084.0.0.jpg'
  },
  {
    name: 'Core by Clare Smyth',
    description: 'Clare Smyth, the only woman to hold three Michelin stars in Britain opened her first solo restaurant, Core, last August. Dishes will be familiar to Michelin-star-gazers: crab, scallop, lamb, beef short rib and a chocolate and hazelnut creméux. But there are modern touches, too, and a welcome effort to minimise waste through a ‘whole animal and fish’ approach. The restaurant also makes all attempts — familiar service and loud-ish music — to break down the barriers of fine dining. It has now earned two Michelin stars, 14 months into its life.',
    image: 'https://cdn.vox-cdn.com/thumbor/9-UtEnKpHcFYKgC1-_HMa27HNkA=/0x0:1440x961/1200x900/filters:focal(605x366:835x596):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62567093/2017_BM_Eater_ClareSmyth_267.0.0.jpg'
  },
  {
    name: 'Food House',
    description: 'One of a new wave of (Sichuan and Xi’an) restaurants in Chinatown, Food House (風味食堂) is run by a younger generation of chefs and restaurateurs. Indeed, it might be the trendiest restaurant in central London. Hordes of immaculately dressed shoppers and students gather for hot pots, whole fish in chilli oil, numbing-spiced chongqing noodles, cumin-studded grilled skewers, and Chinese hamburgers while competing with the staff for the coolest look.',
    image: 'https://cdn.vox-cdn.com/thumbor/42mO0oUt-fC7vN_RFgj4xxYj4us=/0x0:1440x810/1200x900/filters:focal(605x290:835x520):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62808932/IMG_0675.0.jpg'
  },
  {
    name: 'Blacklock Soho',
    description: 'Gordon Ker’s homage to quality British meat is dependent on a special relationship with Cornwall butcher Warren’s — it’s one that brings value for money as well as impeccable meat. Proper dry-aged, grass-fed steak is always charred, juicy, and lightly funky. It’s as good as it gets, especially when accompanied by the crispiest dripping-fried chips, and surely London’s finest gravy. Chops — lamb and pork — either “skinny” or fat — and one of the city’s best Sunday roasts are worth trying on subsequent visits.',
    image: 'https://cdn.vox-cdn.com/thumbor/kBphv5DVu9V367DOM3hpnsEVNyc=/0x0:1280x854/1200x900/filters:focal(538x325:742x529):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62808933/Feast___PWF___0069.0.jpeg'
  },
  {
    name: 'Kiln',
    description: 'Ben Chapman is a learner and perfectionist, and curiosity took him to northern Thailand on a research trip in 2016. The findings are now in exhibition at Kiln in Soho. In-house butchery of rare-breed British meat means prices are unusually fair; day boat fish means seafood curries are extra fresh. Thai veg and herbs are grown for him in Cornwall and every single bit of cooking is done not with electricity or gas, but over charcoal. Curries here are often sour and nearly always hot. Larbs, salads, and grilled meats are seasoned exquisitely.',
    image: 'https://cdn.vox-cdn.com/thumbor/S0ibjqwlV3H6ntB2V9jBOlrLFCU=/0x0:2367x3550/1200x900/filters:focal(938x2021:1316x2399):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62567077/Eater_day1_Kiln_0093.0.0.jpg'
  },
  {
    name: 'Ikoyi',
    description: 'St. James’s has had a hard time reinventing itself as a restaurant destination over the past twelve months. But Ikoyi, a fine-dining restaurant is a destination of genuine interest and quality in its own right. Head chef Jeremy Chan — together with business partner Iré Hassan-Odukale — looks to West Africa for inspiration but uses cooking sensibilities and techniques acquired at Noma, Hibiscus, and Dinner by Heston. Dishes such as wild Nigerian tiger prawn, with banga bisque; Jollof rice with smoked crab; and chicken efo with iru — a sauce of fermented locust beans, cassava, kale salt and preserved lemon, are unlike anything London has experienced before. The standout central London opening of the past 18 months.',
    image: 'https://cdn.vox-cdn.com/thumbor/tUm9HxlLdLOnkK62eMD2PyrLPMo=/0x0:2286x1524/1200x900/filters:focal(961x580:1325x944):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62567095/2.0.0.jpg'
  },
  {
    name: 'Santa Maria Pizzeria',
    description: 'Excellent London pizzerias are ten a penny these days, but at Ealing’s homage to Naples, Santa Maria, there remains something original. Flash-cooking in a wood-fired oven blisters the crust, while the interior remains chewy and yields spectacularly. Toppings are almost accessories, given the quality of the base, but there too, there’s quality — nduja, fior di latte, the tomatoes. It\'s far out of town, but worth the journey.',
    image: 'https://cdn.vox-cdn.com/thumbor/h0KYQAaMYPHXdCSnVu0399nqTeI=/0x0:2367x3550/1200x900/filters:focal(995x1586:1373x1964):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62567080/Eater_day4_Santa_Maria_0173.0.0.jpg'
  },
  {
    name: 'The Wolseley',
    description: 'Chris Corbin and Jeremy King opened this ambitious would-be pillar of the London restaurant industry, a homage to Europe’s “grand cafés,” 18 years ago: a spectacular room which has long set the standard for all-day dining in this city. It borders on the theatrical; this is an experience that’s about more than the food. And yet, breakfast is its most formidable offering, with a rich, creamy, savoury omelette Arnold Bennett the highlight. It feels like it’s been in London forever.',
    image: 'https://cdn.vox-cdn.com/thumbor/8BAhfwQe83MYCjgO542rKZ3t6D0=/0x0:3446x2529/1200x900/filters:focal(1448x990:1998x1540):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/65421639/arnoldbennet.0.png'
  },
  {
    name: '40 Maltby St',
    description: 'A treasure. Unmoved by the comings and goings of trends, Bermondsey’s 40 Maltby St is a 40-cover answer to the question, pejorative as it may often be: What is British food? Steve Williams is a chef\'s chef — cited by James Lowe, Brett Graham, and Florence Knight in their top five in the city. Raef Hodgson, of Gergovie Wines — largely low-intervention styles — runs front-of-house without hubris. Go for roast ham with a spot of English mustard, a glass of crémant, and maybe a pie, too. Always order the fritters.',
    image: 'https://cdn.vox-cdn.com/thumbor/zDfzlcjlMkYaQycNbUSU7OAIGRs=/0x0:2367x3550/1200x900/filters:focal(995x1586:1373x1964):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62567084/Eater_day4_40_Maltby_0166.0.0.jpg'
  },
  {
    name: 'A. Wong',
    description: 'The area around Victoria station has long been considered a culinary desert. At the vanguard of a relatively recent effort to up its game, Andrew Wong has reimagined modern Chinese cooking and was awarded a richly deserved Michelin star in 2017. Dim sum at lunch are available by the individual piece, the best of which is a vinegar-sharp xiao long bao. Leave space for the wonderful moo shu pork to share.',
    image: 'https://cdn.vox-cdn.com/thumbor/HG6nsz4YSoWe4IBYbeZLVjA6eBQ=/0x0:2367x3550/1200x900/filters:focal(995x1586:1373x1964):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62567086/Eater_day6_A.Wong_0248.0.0.jpg'
  },
  {
    name: 'River Café',
    description: 'Ruth Rogers and the late, great Rose Gray have had a profound impact on the restaurant industry in London. This leafy riverside overlook might not be the cheapest place to eat “simple” Italian food, but its unshakable commitment to the importance of ingredients has influenced a generation of chefs. The River Cafe alumni roster reads like the Harlem Globetrotters of food: Jamie Oliver, Theo Randall, April Bloomfield, Sam Clark, and Anna Tobias. It remains the benchmark for Italian food outside of Italy, producing bagna cauda, risotto verde, and fritto misto to challenge the most wizened trattorie.',
    image: 'https://cdn.vox-cdn.com/thumbor/gPFe5CCwjRy3Bf7TQWt8U7Yinbc=/0x0:2367x3550/1200x900/filters:focal(995x1586:1373x1964):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62567087/Eater_day6_River_Cafe_0255.0.0.jpg'
  },
  {
    name: 'Nandine',
    description: 'The second branch for this south London institution: Nandine — “kitchen” in Kurdish — is run by Pary Baban, her husband Pola, and sons Rang and Raman. It serves a menu of brunch dishes, mezze, and intricate pastries. Technicoloured and abundant mezze platters served in the evening include kubba (minced beef and rice patties), onion dolma, and qawarma. Pastries like borek — made with a Kurdish pastry called galgali — and baklava are not to be missed. ',
    image: 'https://cdn.vox-cdn.com/thumbor/Uw3XdOR4BWXIQdvonES6yI7snS8=/0x0:963x629/1200x900/filters:focal(405x238:559x392):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66039270/nandine____mezze_.0.jpg'
  },
  {
    name: 'Roti Joupa',
    description: 'Trinidadian culinary culture is as much, if not more, a derivative and evolution of Indian as African cuisine, with curries, dhals, bhajis, and rotis staples in the diet. Doubles — curried chickpeas inside two fried baras, one of the most delicious and fortifying customs at breakfast — can be found here, a takeaway hole-in-the-wall on the edge of Clapham Common, and a specialist in Trinidadian roti breads. Elsewhere there’s curry goat, stew chicken, buss-up shot (broken paratha-like roti), and pholourie (fried doughballs) served with tamarind chutney. To drink? Mauby Fizz and Solo sodas, or sorrel (a sweet-spiced hibiscus flower cordial.)',
    image: 'https://cdn.vox-cdn.com/thumbor/Cv-mTg_u46qP4_Th564aSqA1u-M=/0x136:1080x941/1200x900/filters:focal(454x454:626x626):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62808934/IMG_8155.0.png'
  },
  {
    name: 'Tasty Jerk',
    description: 'Possibly London’s best Jamaican jerk shop. On the edge of Crystal Palace’s Selhurst Park and with a smoky aroma detectable from many hundred metres, this stark room is dedicated to one thing: immaculately, judiciously seasoned protein grilled without remorse. The age of these oil drums and the time-honoured expertise of Murphy Lawrence and his team turn out jerked pork belly, chicken, goat, and even lobster, that is penetrated with smoke, and lifted by all spice, Scotch bonnet, and salt. Tasty Jerk is a heady, intoxicating, and remarkably good value eating experience.',
    image: 'https://cdn.vox-cdn.com/thumbor/8aPsqkvGN7hTfhEAsVN6xErfFFs=/0x0:3072x2304/1200x900/filters:focal(1291x907:1781x1397):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/65421641/Tasty_JErk.0.jpg'
  }
].map((restaurant, i) => ({
  ...restaurant,
  address: `${i + 1} Test Street`,
}));

module.exports = MOCK_RESTAURANTS;
