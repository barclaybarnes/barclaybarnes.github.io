// Pickup deal data. PICKUP ONLY: never add delivery-only offers here.
// item = EXACTLY what the discount or free item is (e.g. "Bag of chips", "Second footlong, half off", "Whole order of $20+").
// save = estimated dollars saved on that item at menu price. Ranking uses save ($8+ = full marks).
// value = old fallback (0 to 1), used at half weight only when save is missing.
// windows: when the deal runs. days: 0=Sun..6=Sat. from/to: local hour (24h). No windows = any time.
// verified: false when the terms came from a headline or summary and need checking in the app.
window.DEALS_CHECKED = "2026-11-20";
window.DEALS = [
  {
    id: "shakeshack-bogo", item: "Single ShackBurger (second one free)", save: 7.0, chain: "Shake Shack", cuisine: "burgers",
    title: "Buy a single ShackBurger, get a second one free",
    code: "BOGOSHACK", how: "Shake Shack app, website or kiosk",
    value: 0.5, end: "2026-11-30", verified: true,
    source: "https://www.mealslash.com/deals/this-week"
  },
  {
    id: "shakeshack-sunday", item: "Chicken Shack, single ShackBurger or 6-piece chicken bites, up to $9.99", save: 8.5, chain: "Shake Shack", cuisine: "chicken",
    title: "Chicken Sundays: free Chicken Shack, ShackBurger or 6 chicken bites with $10+",
    code: "SHACKSUNDAY", how: "App, website or kiosk. Not drive-thru. Some sites list the code as CHICKENSUNDAY",
    value: 0.5, end: "2026-12-27", windows: [{ days: [0] }], verified: true,
    source: "https://sporked.com/article/every-fast-food-deal-this-week-9/"
  },
  {
    id: "subway-happyhour", item: "Second footlong, half off", save: 5.0, chain: "Subway", cuisine: "subs",
    title: "Second footlong 50% off",
    code: "BOGO50", how: "Subway app or website. 4 PM to close on weekdays, all day on weekends",
    value: 0.25, windows: [{ days: [1, 2, 3, 4, 5], from: 16, to: 24 }, { days: [0, 6] }], verified: true,
    source: "https://sporked.com/article/every-fast-food-deal-this-week-9/"
  },
  {
    id: "subway-fritos", item: "Footlong Fritos Enchilada sub, 40% off", save: 4.4, chain: "Subway", cuisine: "subs",
    title: "40% off a Footlong Fritos Enchilada sub",
    how: "Subway app, Sub Club members. Limited time, no end date listed",
    value: 0.4, verified: false,
    source: "https://sporked.com/article/every-fast-food-deal-this-week-9/"
  },
  {
    id: "wendys-daves", item: "Dave's Single, half off", save: 3.5, chain: "Wendy's", cuisine: "burgers",
    title: "Half off a Dave's Single with any purchase",
    code: "FOXBIGNOON", how: "Wendy's app, Rewards members, once a week",
    value: 0.3, end: "2026-12-04", verified: true,
    source: "https://sporked.com/article/every-fast-food-deal-this-week-9/"
  },
  {
    id: "moes-dipper", item: "Birria Grilled Burrito Dipper", save: 5.0, chain: "Moe's", cuisine: "mexican",
    title: "Free Birria Grilled Burrito Dipper with any purchase",
    how: "Moe's app, Moe Rewards members",
    value: 0.4, end: "2026-11-22", verified: true,
    source: "https://www.mealslash.com/deals/this-week"
  },
  {
    id: "popeyes-wings", item: "6-piece wings", save: 7.5, chain: "Popeyes", cuisine: "chicken",
    title: "Wing Mondays: free 6-piece wings with a $10+ order",
    how: "Popeyes app or website",
    value: 0.45, end: "2027-01-04", windows: [{ days: [1] }], verified: true,
    source: "https://sporked.com/article/every-fast-food-deal-this-week-9/"
  },
  {
    id: "popeyes-20", item: "Bundle: 3 proteins and 2 regular sides", save: 4.0, chain: "Popeyes", cuisine: "chicken",
    title: "3 proteins and 2 regular sides for $20",
    how: "Popeyes app or website. No end date listed",
    value: 0.2, verified: false,
    source: "https://sporked.com/article/every-fast-food-deal-this-week-9/"
  },
  {
    id: "mcd-fries", item: "Medium fries", save: 3.3, chain: "McDonald's", cuisine: "burgers",
    title: "Free medium fries with a $1+ purchase, once a week",
    how: "McDonald's app, Rewards. Not valid on McDelivery",
    value: 0.4, end: "2026-12-31", verified: false,
    source: "https://dealsfinders.com/fastfood-coupons/"
  },
  {
    id: "bk-advent", item: "Changes daily, shown only in the app", chain: "Burger King", cuisine: "burgers",
    title: "Holiday advent calendar: a new app deal each day",
    how: "Burger King app. Today's offer is only shown in the app",
    value: 0.3, end: "2026-11-20", verified: false,
    source: "https://www.mealslash.com/deals/this-week"
  },
  {
    id: "kk-thanksgiving", item: "One Thanksgiving doughnut", save: 2.0, chain: "Krispy Kreme", cuisine: "dessert",
    title: "Free Thanksgiving doughnut with any purchase",
    how: "In shop. Terms not confirmed",
    value: 0.3, start: "2026-11-17", end: "2026-11-23", verified: false,
    source: "https://dealsfinders.com/fastfood-coupons/"
  },
  {
    id: "jm-chips", item: "Chips and a regular drink", save: 4.0, chain: "Jersey Mike's", cuisine: "subs",
    title: "Free chips and a regular drink with a Regular or Giant sub",
    how: "Jersey Mike's app, Offers tab. Check it is in your account",
    value: 0.25, end: "2027-02-28", verified: false,
    source: "https://dealsfinders.com/fastfood-coupons/"
  },
  {
    id: "zaxbys-5off", item: "Whole order of $20+", save: 5.0, chain: "Zaxby's", cuisine: "chicken",
    title: "$5 off $20+ (rotating app coupon)",
    how: "Zaxby's app, Offers tab. Rotates, so it may not be live",
    value: 0.25, verified: false,
    source: "https://dealsfinders.com/fastfood-coupons/"
  },
  {
    id: "hardees-goodness", item: "Whole order of $10+", save: 5.0, chain: "Hardee's", cuisine: "burgers",
    title: "$5 off $10+ with the Goodness Pass",
    how: "Hardee's app",
    value: 0.5, start: "2026-12-01", verified: true,
    source: "https://www.mealslash.com/deals/this-week"
  },
  {
    id: "dominos-carryout", item: "Any 1-topping pizza (not XL), or 8-piece wings or boneless chicken, for $7.99", save: 6.0, chain: "Domino's", cuisine: "pizza",
    title: "Carryout special: 1-topping pizza or 8-piece wings for $7.99",
    how: "Order carryout in the Domino's app or online. Some stores charge $8.99. No end date listed",
    value: 0.4, verified: false,
    source: "https://www.brandeating.com/p/current-menu-promotions.html"
  },
  {
    id: "papajohns-50off", item: "Regular menu-priced pizzas, half off", save: 7.0, chain: "Papa Johns", cuisine: "pizza",
    title: "50% off regular menu-priced pizzas for carryout",
    how: "Papa Johns app or website, carryout. Rotating codes that vary by market (e.g. MT50); check the app's Deals page",
    value: 0.5, end: "2026-11-30", verified: false,
    source: "https://fabulesslyfrugal.com/deals/dining-deals/"
  },
  {
    id: "jj-app20", item: "Whole app order, 20% off", save: 2.5, chain: "Jimmy John's", cuisine: "subs",
    title: "20% off app orders",
    code: "APP20", how: "Jimmy John's app, choose pickup. No end date listed",
    value: 0.2, verified: false,
    source: "https://fabulesslyfrugal.com/deals/dining-deals/"
  },
  {
    id: "jm-giant-half", item: "One Giant sub, half off", save: 9.0, chain: "Jersey Mike's", cuisine: "subs",
    title: "50% off a Giant sub for MyMike's members",
    how: "Jersey Mike's app, MyMike's Rewards. Check the Offers tab, it may be targeted. No end date listed",
    value: 0.5, verified: false,
    source: "https://fabulesslyfrugal.com/deals/dining-deals/"
  },
  {
    id: "wendys-wed-nuggets", item: "6-piece chicken nuggets", save: 3.0, chain: "Wendy's", cuisine: "chicken",
    title: "Nugget Wednesdays: free 6-piece nuggets with a $5+ purchase",
    how: "Wendy's app, Rewards offer. No end date listed",
    value: 0.3, windows: [{ days: [3] }], verified: false,
    source: "https://www.brandeating.com/p/current-menu-promotions.html"
  },
  {
    id: "wendys-fri-fries", item: "Fries (free with a $5+ purchase)", save: 2.8, chain: "Wendy's", cuisine: "burgers",
    title: "Fry Fridays: free fries with a $5+ purchase",
    how: "Wendy's app, Rewards offer. No end date listed",
    value: 0.25, windows: [{ days: [5] }], verified: false,
    source: "https://www.brandeating.com/p/current-menu-promotions.html"
  },
  {
    id: "wendys-chili", item: "Small chili", save: 2.9, chain: "Wendy's", cuisine: "burgers",
    title: "Free small chili with a $5+ purchase",
    how: "Wendy's app, Rewards offer. No end date listed",
    value: 0.25, verified: false,
    source: "https://www.brandeating.com/p/current-menu-promotions.html"
  },
  {
    id: "wendys-3off20", item: "Whole order of $20+", save: 3.0, chain: "Wendy's", cuisine: "burgers",
    title: "$3 off a $20+ purchase",
    how: "Wendy's app, Rewards offer. No end date listed",
    value: 0.15, verified: false,
    source: "https://www.brandeating.com/p/current-menu-promotions.html"
  },
  {
    id: "bk-fries", item: "Fries (free with a $3+ purchase)", save: 3.0, chain: "Burger King", cuisine: "burgers",
    title: "Free fries with a $3+ purchase, once a week",
    how: "Burger King app, Royal Perks members. No end date listed",
    value: 0.3, verified: false,
    source: "https://www.brandeating.com/p/current-menu-promotions.html"
  },
  {
    id: "papajohns-bogo-large", item: "Second large 1-topping pizza free with a regular-price large", save: 13.0, chain: "Papa Johns", cuisine: "pizza",
    title: "Buy a large pizza at menu price, get a large 1-topping free",
    how: "Papa Johns app or website, choose carryout. Terms and end date not confirmed",
    value: 0.5, verified: false,
    source: "https://www.brandeating.com/p/current-menu-promotions.html"
  },
  {
    id: "tacobell-happier-hour", item: "Medium fountain drink or Freeze for $1", save: 2.0, chain: "Taco Bell", cuisine: "mexican",
    title: "Happier Hour: $1 medium drink or Freeze, 2 to 5 PM",
    how: "Taco Bell app or in store, 2 to 5 PM. No end date listed",
    value: 0.2, windows: [{ days: [0, 1, 2, 3, 4, 5, 6], from: 14, to: 17 }], verified: false,
    source: "https://www.brandeating.com/p/current-menu-promotions.html"
  },
  {
    id: "dunkin-6meal", item: "Bacon, Egg & Cheese, hash browns and a medium coffee for $6", save: 3.0, chain: "Dunkin'", cuisine: "coffee",
    title: "$6 Meal Deal: Bacon, Egg & Cheese, hash browns and medium coffee",
    how: "Dunkin' app or in store. No end date listed",
    value: 0.3, verified: false,
    source: "https://www.brandeating.com/p/current-menu-promotions.html"
  },
  // ---- Signed-in app offers (Uber Eats pickup feed, item prices read from each store page). Refreshed daily at 7:34 AM ET. ----
  {
    id: "ue-pita-med-bogo", item: "3 Mini Pitas $17 or Signature Platter $19.50 (also Greek Fries $11)", save: 17.0, chain: "PITA Mediterranean Street Food", cuisine: "mediterranean",
    title: "Buy one, get one free on Signature Platter, 3 Mini Pitas or Greek Fries",
    how: "Uber Eats app or site, switch to Pickup and add the item from the store page",
    value: 0.5, end: "2026-11-20", verified: true,
    source: "https://www.ubereats.com/feed?diningMode=PICKUP"
  },
  {
    id: "ue-med-grill-bogo", item: "Gyro Sandwich Combo $10.35 (also Hummus $6.32)", save: 10.35, chain: "Mediterranean Grill", cuisine: "mediterranean",
    title: "Buy one, get one free on the Gyro Sandwich Combo or Hummus",
    how: "Uber Eats app or site, switch to Pickup and add the item from the store page",
    value: 0.5, end: "2026-11-20", verified: true,
    source: "https://www.ubereats.com/feed?diningMode=PICKUP"
  },
  {
    id: "ue-delbar-bogo", item: "Falafel $21.24, Koobideh $22.42, Joojeh or Lamb & Labneh $24.78 sandwich", save: 21.24, chain: "Delbar", cuisine: "mediterranean",
    title: "Buy one, get one free on sandwiches",
    how: "Uber Eats app or site, switch to Pickup and add the item from the store page",
    value: 0.5, end: "2026-11-20", verified: true,
    source: "https://www.ubereats.com/feed?diningMode=PICKUP"
  },
  {
    id: "ue-lavash-free-hummus", item: "Buy Chicken Soltani Plate $22.50, get Hummus ($8) free", save: 8.0, chain: "Lavash", cuisine: "mediterranean",
    title: "Free hummus with a Chicken Soltani Plate",
    how: "Uber Eats app or site, switch to Pickup and add the item from the store page",
    value: 0.3, end: "2026-11-20", verified: true,
    source: "https://www.ubereats.com/feed?diningMode=PICKUP"
  },
  {
    id: "ue-popeyes-bogo", item: "Classic Chicken Sandwich $6.86 or Spicy $7.09 (also 12pc wings $17.36, wraps, Coke)", save: 6.86, chain: "Popeyes", cuisine: "chicken",
    title: "Buy one, get one free on chicken sandwiches, wings and wraps",
    how: "Uber Eats app or site, switch to Pickup and add the item from the store page",
    value: 0.5, end: "2026-11-20", verified: true,
    source: "https://www.ubereats.com/feed?diningMode=PICKUP"
  },
  {
    id: "ue-tropical-bogo", item: "Three Cheese Chicken 'Dilla $9.19 or Acai Bowl $13.69 (smoothies not included)", save: 9.19, chain: "Tropical Smoothie", cuisine: "smoothie",
    title: "Buy one, get one free on acai bowls and the Three Cheese Chicken 'Dilla",
    how: "Uber Eats app or site, switch to Pickup and add the item from the store page",
    value: 0.5, end: "2026-11-20", verified: true,
    source: "https://www.ubereats.com/feed?diningMode=PICKUP"
  },
  {
    id: "ue-firehouse-20off", item: "Club On A Sub $15.90 to $12.72, Steak & Cheese Melt $17.55 to $14.04", save: 3.18, chain: "Firehouse Subs", cuisine: "subs",
    title: "20% off select large subs",
    how: "Uber Eats app or site, switch to Pickup and add the item from the store page",
    value: 0.2, end: "2026-11-20", verified: true,
    source: "https://www.ubereats.com/feed?diningMode=PICKUP"
  },
  {
    id: "ue-rreal-bogo", item: "Single taco: Grilled Chicken or Al Pastor $5.94, Asada $7.49 (also Rreal Nachos $21.25)", save: 5.94, chain: "Rreal Tacos", cuisine: "mexican",
    title: "Buy one, get one free on single tacos, nachos and the Trio",
    how: "Uber Eats app or site, switch to Pickup and add the item from the store page",
    value: 0.5, end: "2026-11-20", verified: true,
    source: "https://www.ubereats.com/feed?diningMode=PICKUP"
  },
  {
    id: "ue-lavilla-bogo", item: "Regular Burrito $10.99, Taco Plate $11.99, Birria tacos + consome $13.99", save: 10.99, chain: "Tacos La Villa", cuisine: "mexican",
    title: "Buy one, get one free on plates, burritos and nachos",
    how: "Uber Eats app or site, switch to Pickup and add the item from the store page",
    value: 0.5, end: "2026-11-20", verified: true,
    source: "https://www.ubereats.com/feed?diningMode=PICKUP"
  },
  {
    id: "ue-goldbergs-bogo", item: "Egg & Cheese on a Bagel $10.80 or Egg, Meat & Cheese $13.35 (also soup $9.20, plain bagel $2.96)", save: 10.8, chain: "Goldberg's", cuisine: "breakfast",
    title: "Buy one, get one free on bagel sandwiches and soup",
    how: "Uber Eats app or site, switch to Pickup and add the item from the store page",
    value: 0.5, end: "2026-11-20", verified: true,
    source: "https://www.ubereats.com/feed?diningMode=PICKUP"
  },
  {
    id: "ue-panera-free-soup", item: "Buy a sandwich (Tuna $8.69, Frontega or Bravo $10.69), get a soup ($8.09) free", save: 8.09, chain: "Panera", cuisine: "sitdown",
    title: "Free bowl of soup with a sandwich",
    how: "Uber Eats app or site, switch to Pickup and add the item from the store page",
    value: 0.4, end: "2026-11-20", verified: true,
    source: "https://www.ubereats.com/feed?diningMode=PICKUP"
  },
  {
    id: "ue-papajohns-bogo", item: "Cheese or Create Your Own $12.79, Pepperoni $13.09, Grand Papa $23.09", save: 12.79, chain: "Papa Johns", cuisine: "pizza",
    title: "Buy one, get one free on large pizzas",
    how: "Uber Eats app or site, switch to Pickup and add the item from the store page",
    value: 0.5, end: "2026-11-20", verified: true,
    source: "https://www.ubereats.com/feed?diningMode=PICKUP"
  },
  {
    id: "ue-jimmyjohns-bogo", item: "Chips $2.29 or cookies $2.79 (not sandwiches)", save: 2.29, chain: "Jimmy John's", cuisine: "subs",
    title: "Buy one, get one free on chips, cookies and brownies only",
    how: "Uber Eats app or site, switch to Pickup and add the item from the store page",
    value: 0.1, end: "2026-11-20", verified: true,
    source: "https://www.ubereats.com/feed?diningMode=PICKUP"
  }
];

// How to recognize each chain in map data, and its cuisine.
window.CHAINS = {
  "Burger King": { re: /burger king/i, cuisine: "burgers" },
  "CAVA": { re: /^cava\b/i, cuisine: "mediterranean" },
  "Cheesecake Factory": { re: /cheesecake factory/i, cuisine: "sitdown" },
  "Chick-fil-A": { re: /chick-?fil-?a/i, cuisine: "chicken" },
  "Chipotle": { re: /chipotle/i, cuisine: "mexican" },
  "Crumbl": { re: /crumbl/i, cuisine: "dessert" },
  "Domino's": { re: /domino'?s/i, cuisine: "pizza" },
  "Dutch Bros": { re: /dutch bros/i, cuisine: "coffee" },
  "Firehouse Subs": { re: /firehouse subs/i, cuisine: "subs" },
  "Hardee's": { re: /hardee'?s/i, cuisine: "burgers" },
  "Huddle House": { re: /huddle house/i, cuisine: "breakfast" },
  "Jersey Mike's": { re: /jersey mike/i, cuisine: "subs" },
  "Krispy Kreme": { re: /krispy kreme/i, cuisine: "dessert" },
  "McDonald's": { re: /mcdonald'?s/i, cuisine: "burgers" },
  "Moe's": { re: /moe'?s southwest/i, cuisine: "mexican" },
  "Olive Garden": { re: /olive garden/i, cuisine: "sitdown" },
  "Outback": { re: /outback steakhouse/i, cuisine: "sitdown" },
  "Panda Express": { re: /panda express/i, cuisine: "asian" },
  "Popeyes": { re: /popeyes/i, cuisine: "chicken" },
  "Shake Shack": { re: /shake shack/i, cuisine: "burgers" },
  "Starbucks": { re: /starbucks/i, cuisine: "coffee" },
  "Subway": { re: /^subway\b/i, cuisine: "subs" },
  "Taco Bell": { re: /taco bell/i, cuisine: "mexican" },
  "Tropical Smoothie": { re: /tropical smoothie/i, cuisine: "smoothie" },
  "Wendy's": { re: /wendy'?s/i, cuisine: "burgers" },
  "Zaxby's": { re: /zaxby'?s/i, cuisine: "chicken" },
  // Local spots and extra chains with signed-in app offers
  "PITA Mediterranean Street Food": { re: /^pita mediterranean/i, cuisine: "mediterranean" },
  "Mediterranean Grill": { re: /^mediterranean grill/i, cuisine: "mediterranean" },
  "Lavash": { re: /^lavash\b/i, cuisine: "mediterranean" },
  "Delbar": { re: /^delbar\b/i, cuisine: "mediterranean" },
  "Rreal Tacos": { re: /rreal tacos/i, cuisine: "mexican" },
  "Tacos La Villa": { re: /tacos la villa/i, cuisine: "mexican" },
  "Goldberg's": { re: /goldberg'?s/i, cuisine: "breakfast" },
  "Jimmy John's": { re: /jimmy john'?s/i, cuisine: "subs" },
  "Panera": { re: /^panera\b/i, cuisine: "sitdown" },
  "Papa Johns": { re: /papa john'?s/i, cuisine: "pizza" },
  "Dunkin'": { re: /^dunkin/i, cuisine: "coffee" }
};

window.MED_RE = {
  cuisine: /mediterranean|greek|lebanese|middle_eastern|turkish|falafel|kebab|persian|shawarma|israeli/i,
  name: /mediterranean|pita|gyro|falafel|shawarma|kabob|kebab|hummus|^cava\b|taziki|zo[eë]'?s kitchen|garbanzo|greek|lebanese|persian/i
};
