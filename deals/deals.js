// Pickup deal data. PICKUP ONLY: never add delivery-only offers here.
// item = EXACTLY what the discount or free item is (e.g. "Bag of chips", "Second footlong, half off", "Whole order of $20+").
// save = estimated dollars saved on that item at menu price. Ranking uses save ($8+ = full marks).
// value = old fallback (0 to 1), used at half weight only when save is missing.
// windows: when the deal runs. days: 0=Sun..6=Sat. from/to: local hour (24h). No windows = any time.
// verified: false when the terms came from a headline or summary and need checking in the app.
window.DEALS_CHECKED = "2026-11-27";
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
    how: "Dunkin' app or in store. Runs through Dec 29",
    value: 0.3, end: "2026-12-29", verified: false,
    source: "https://www.brandeating.com/p/current-menu-promotions.html"
  },
  {
    id: "subway-2fl-1299", item: "Two footlongs for $12.99 total", save: 9.0, chain: "Subway", cuisine: "subs",
    title: "2 footlongs for $12.99",
    code: "1299FL", how: "Subway app or website, Sub Club members. End date estimated from a countdown",
    value: 0.4, end: "2026-12-03", verified: false,
    source: "https://www.dealsonmeals.app/national"
  },
  {
    id: "subway-fl-699", item: "One footlong for $6.99", save: 4.0, chain: "Subway", cuisine: "subs",
    title: "Any footlong for $6.99",
    code: "FOOTLONG699", how: "Subway app or website, Sub Club members. End date estimated from a countdown",
    value: 0.35, end: "2026-12-03", verified: false,
    source: "https://www.dealsonmeals.app/national"
  },
  {
    id: "dunkin-wed-donut", item: "One classic donut (free with a full-price medium or larger drink)", save: 1.8, chain: "Dunkin'", cuisine: "coffee",
    title: "Free classic donut with a medium drink on Wednesdays",
    how: "Dunkin' app, weekly Rewards offer in the Offers tab",
    value: 0.2, end: "2027-02-28", windows: [{ days: [3] }], verified: false,
    source: "https://dealsfinders.com/fastfood-coupons/"
  },
  {
    id: "tsc-buy2get1", item: "Third smoothie free when you buy two", save: 7.0, chain: "Tropical Smoothie", cuisine: "smoothie",
    title: "Buy 2 smoothies, get 1 free",
    how: "Tropical Smoothie Cafe app (Tropic Mode offer), order for pickup. Check the app's Offers tab",
    value: 0.33, end: "2026-11-30", verified: false,
    source: "https://www.mealslash.com/deals/this-week"
  },
  {
    id: "moes-bogo-bf", item: "Second entree free (buy one entree)", save: 11.0, chain: "Moe's", cuisine: "mexican",
    title: "Black Friday weekend: buy one entree, get one free for Moe Rewards members",
    how: "Moe's app or website, order for pickup, Moe Rewards members. Nov 27 to 29. No minimum or code listed",
    value: 0.5, start: "2026-11-27", end: "2026-11-29", verified: false,
    source: "https://thefreebieguy.com/black-friday-freebies-deals/"
  },
  {
    id: "jm-2off-email", item: "One Regular or Giant sub, $2 off", save: 2.0, chain: "Jersey Mike's", cuisine: "subs",
    title: "$2 off a Regular or Giant sub with an Email and Text Club code",
    how: "Promo code sent to Jersey Mike's Email and Text Club members in MyMike's. Use in the app or online for pickup",
    value: 0.15, end: "2027-02-28", verified: false,
    source: "https://dealsfinders.com/fastfood-coupons/"
  },
  {
    id: "bk-bogo-ocs", item: "Second Original Chicken Sandwich free (buy one)", save: 6.0, chain: "Burger King", cuisine: "burgers",
    title: "Buy one Original Chicken Sandwich, get one free",
    how: "Burger King app or website, Royal Perks offer, order for pickup. Terms from a summary only; check the app's Offers tab",
    value: 0.5, end: "2026-11-29", verified: false,
    source: "https://www.mealslash.com/deals/this-week"
  },
  {
    id: "bk-bf-free-sandwich", item: "One sandwich: Cheeseburger, Original Chicken Sandwich or Croissan'wich (free with $5+)", save: 6.0, chain: "Burger King", cuisine: "burgers",
    title: "Black Friday weekend: free Original Chicken Sandwich, Cheeseburger or Croissan'wich with $5+",
    how: "Burger King app or website, Royal Perks members, order for pickup. One per day, Nov 27 to 30",
    value: 0.45, start: "2026-11-27", end: "2026-11-30", verified: false,
    source: "https://spoonuniversity.com/news/black-friday-fast-food-deals-2026/"
  },
  {
    id: "tacobell-chalupa-1", item: "Chalupa Supreme for $1 (with a $15+ app order)", save: 4.0, chain: "Taco Bell", cuisine: "mexican",
    title: "$1 Chalupa Supreme with a $15+ app order",
    how: "Taco Bell app, Rewards members, order for pickup. Once per member",
    value: 0.2, end: "2026-12-04", verified: false,
    source: "https://sporked.com/article/every-fast-food-deal-this-week-10/"
  },
  {
    id: "kk-1-dozen", item: "Second dozen Original Glazed for $1 (buy a regular-price dozen or 16 Minis)", save: 13.0, chain: "Krispy Kreme", cuisine: "dessert",
    title: "$1 dozen Original Glazed with a regular-price dozen",
    how: "Krispy Kreme Rewards members, in the app, online for pickup or in shop",
    value: 0.5, end: "2026-11-29", verified: false,
    source: "https://sporked.com/article/every-fast-food-deal-this-week-10/"
  },
  {
    id: "dunkin-fri-donut", item: "One classic donut (free with a drink)", save: 1.8, chain: "Dunkin'", cuisine: "coffee",
    title: "Free classic donut with a drink on Fridays, starting Black Friday",
    how: "Dunkin' app or scan your Rewards ID, Rewards members. Fridays Nov 27 to Dec 11, participating stores",
    value: 0.2, start: "2026-11-27", end: "2026-12-11", windows: [{ days: [5] }], verified: false,
    source: "https://spoonuniversity.com/news/black-friday-fast-food-deals-2026/"
  },
  {
    id: "popeyes-12for12", item: "12 bone-in or boneless wings, or 12 tenders, for $12", save: 6.0, chain: "Popeyes", cuisine: "chicken",
    title: "12 wings or tenders for $12",
    how: "Popeyes app or website, Rewards members, order for pickup. No end date listed",
    value: 0.35, verified: false,
    source: "https://sporked.com/article/every-fast-food-deal-this-week-10/"
  },
  {
    id: "hardees-5off15", item: "Whole order of $15+", save: 5.0, chain: "Hardee's", cuisine: "burgers",
    title: "$5 off a $15+ order for My Rewards members",
    how: "Hardee's app or online, or scan your member QR code in store. One per day, through Nov 30",
    value: 0.3, end: "2026-11-30", verified: false,
    source: "https://thefrugaler.com/black-friday-food-deals-2026/"
  },
  {
    id: "shakeshack-truffle", item: "Black Truffle Sauce (free with any purchase)", save: 1.0, chain: "Shake Shack", cuisine: "burgers",
    title: "Black Friday: free Black Truffle Sauce with any order",
    code: "TRUFFLE", how: "Shake Shack app, website or in-Shack kiosk. Nov 27 only",
    value: 0.1, start: "2026-11-27", end: "2026-11-27", verified: false,
    source: "https://www.foodnetwork.com/fn-dish/news/black-friday-food-deals-roundup-2026"
  },
  {
    id: "chipotle-pga-bogo", item: "Second entree free (buy one entree)", save: 11.0, chain: "Chipotle", cuisine: "mexican",
    title: "BOGO entree code from PGA TOUR keyword drops",
    how: "During select PGA TOUR broadcasts, @PGATOUR posts a keyword on X or Instagram; text it to 888222 for a BOGO code. 5,000 codes per drop, while codes last",
    value: 0.5, end: "2026-12-31", verified: false,
    source: "https://thekrazycouponlady.com/tips/money/food-deals-near-me"
  },
  {
    id: "subway-bf-bundle-22", item: "Bundle: two footlongs, two 20-oz fountain drinks and six cookies for $22", save: 11.0, chain: "Subway", cuisine: "subs",
    title: "Black Friday Bundle: 2 footlongs, 2 drinks and 6 cookies for $22",
    how: "Subway app or website, Sub Club members, order for pickup. One per member, Nov 27 to Dec 6",
    value: 0.35, start: "2026-11-27", end: "2026-12-06", verified: true,
    source: "https://thekrazycouponlady.com/tips/money/free-food-on-black-friday"
  },
  // ---- Signed-in app offers (Uber Eats pickup feed, item prices read from each store page). Refreshed daily at 7:34 AM ET. ----
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
