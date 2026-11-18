// Pickup deal data. PICKUP ONLY: never add delivery-only offers here.
// value = rough share of a typical order you save (0 to 1). BOGO on one item ~0.5.
// windows: when the deal runs. days: 0=Sun..6=Sat. from/to: local hour (24h). No windows = any time.
// verified: false when the terms came from a headline or summary and need checking in the app.
window.DEALS_CHECKED = "2026-11-18";
window.DEALS = [
  {
    id: "shakeshack-bogo", chain: "Shake Shack", cuisine: "burgers",
    title: "Buy a single ShackBurger, get a second one free",
    code: "BOGOSHACK", how: "Shake Shack app, website or kiosk",
    value: 0.5, end: "2026-11-30", verified: true,
    source: "https://www.mealslash.com/deals/this-week"
  },
  {
    id: "shakeshack-sunday", chain: "Shake Shack", cuisine: "chicken",
    title: "Chicken Sundays: free Chicken Shack, ShackBurger or 6 chicken bites with $10+",
    code: "SHACKSUNDAY", how: "App, website or kiosk. Not drive-thru. Some sites list the code as CHICKENSUNDAY",
    value: 0.5, end: "2026-12-27", windows: [{ days: [0] }], verified: true,
    source: "https://sporked.com/article/every-fast-food-deal-this-week-9/"
  },
  {
    id: "subway-happyhour", chain: "Subway", cuisine: "subs",
    title: "Second footlong 50% off",
    code: "BOGO50", how: "Subway app or website. 4 PM to close on weekdays, all day on weekends",
    value: 0.25, windows: [{ days: [1, 2, 3, 4, 5], from: 16, to: 24 }, { days: [0, 6] }], verified: true,
    source: "https://sporked.com/article/every-fast-food-deal-this-week-9/"
  },
  {
    id: "subway-fritos", chain: "Subway", cuisine: "subs",
    title: "40% off a Footlong Fritos Enchilada sub",
    how: "Subway app, Sub Club members. Limited time, no end date listed",
    value: 0.4, verified: false,
    source: "https://sporked.com/article/every-fast-food-deal-this-week-9/"
  },
  {
    id: "wendys-daves", chain: "Wendy's", cuisine: "burgers",
    title: "Half off a Dave's Single with any purchase",
    code: "FOXBIGNOON", how: "Wendy's app, Rewards members, once a week",
    value: 0.3, end: "2026-12-04", verified: true,
    source: "https://sporked.com/article/every-fast-food-deal-this-week-9/"
  },
  {
    id: "moes-dipper", chain: "Moe's", cuisine: "mexican",
    title: "Free Birria Grilled Burrito Dipper with any purchase",
    how: "Moe's app, Moe Rewards members",
    value: 0.4, end: "2026-11-22", verified: true,
    source: "https://www.mealslash.com/deals/this-week"
  },
  {
    id: "popeyes-wings", chain: "Popeyes", cuisine: "chicken",
    title: "Wing Mondays: free 6-piece wings with a $10+ order",
    how: "Popeyes app or website",
    value: 0.45, end: "2027-01-04", windows: [{ days: [1] }], verified: true,
    source: "https://sporked.com/article/every-fast-food-deal-this-week-9/"
  },
  {
    id: "popeyes-20", chain: "Popeyes", cuisine: "chicken",
    title: "3 proteins and 2 regular sides for $20",
    how: "Popeyes app or website. No end date listed",
    value: 0.2, verified: false,
    source: "https://sporked.com/article/every-fast-food-deal-this-week-9/"
  },
  {
    id: "mcd-fries", chain: "McDonald's", cuisine: "burgers",
    title: "Free medium fries with a $1+ purchase, once a week",
    how: "McDonald's app, Rewards. Not valid on McDelivery",
    value: 0.4, end: "2026-12-31", verified: false,
    source: "https://dealsfinders.com/fastfood-coupons/"
  },
  {
    id: "bk-advent", chain: "Burger King", cuisine: "burgers",
    title: "Holiday advent calendar: a new app deal each day",
    how: "Burger King app. Today's offer is only shown in the app",
    value: 0.3, end: "2026-11-20", verified: false,
    source: "https://www.mealslash.com/deals/this-week"
  },
  {
    id: "kk-thanksgiving", chain: "Krispy Kreme", cuisine: "dessert",
    title: "Free Thanksgiving doughnut with any purchase",
    how: "In shop. Terms not confirmed",
    value: 0.3, start: "2026-11-17", end: "2026-11-23", verified: false,
    source: "https://dealsfinders.com/fastfood-coupons/"
  },
  {
    id: "jm-chips", chain: "Jersey Mike's", cuisine: "subs",
    title: "Free chips and a regular drink with a Regular or Giant sub",
    how: "Jersey Mike's app, Offers tab. Check it is in your account",
    value: 0.25, end: "2027-02-28", verified: false,
    source: "https://dealsfinders.com/fastfood-coupons/"
  },
  {
    id: "zaxbys-5off", chain: "Zaxby's", cuisine: "chicken",
    title: "$5 off $20+ (rotating app coupon)",
    how: "Zaxby's app, Offers tab. Rotates, so it may not be live",
    value: 0.25, verified: false,
    source: "https://dealsfinders.com/fastfood-coupons/"
  },
  {
    id: "hardees-goodness", chain: "Hardee's", cuisine: "burgers",
    title: "$5 off $10+ with the Goodness Pass",
    how: "Hardee's app",
    value: 0.5, start: "2026-12-01", verified: true,
    source: "https://www.mealslash.com/deals/this-week"
  },
  // ---- Signed-in app offers (Uber Eats pickup feed). Refreshed daily at 7:34 AM ET; end date rolls forward each run. ----
  {
    id: "ue-pita-med-bogo", chain: "PITA Mediterranean Street Food", cuisine: "mediterranean",
    title: "Buy 1, get 1 free on Uber Eats pickup",
    how: "Uber Eats app or site, switch to Pickup. Seen in your signed-in pickup feed; offer may apply to select items only",
    value: 0.5, end: "2026-11-20", verified: false,
    source: "https://www.ubereats.com/feed?diningMode=PICKUP"
  },
  {
    id: "ue-med-grill-bogo", chain: "Mediterranean Grill", cuisine: "mediterranean",
    title: "Buy 1, get 1 free on Uber Eats pickup",
    how: "Uber Eats app or site, switch to Pickup. Seen in your signed-in pickup feed; offer may apply to select items only",
    value: 0.5, end: "2026-11-20", verified: false,
    source: "https://www.ubereats.com/feed?diningMode=PICKUP"
  },
  {
    id: "ue-lavash-free-item", chain: "Lavash", cuisine: "mediterranean",
    title: "Buy 1, get a free item on Uber Eats pickup",
    how: "Uber Eats app or site, switch to Pickup. Seen in your signed-in pickup feed; offer may apply to select items only",
    value: 0.4, end: "2026-11-20", verified: false,
    source: "https://www.ubereats.com/feed?diningMode=PICKUP"
  },
  {
    id: "ue-delbar-10off50", chain: "Delbar", cuisine: "mediterranean",
    title: "$10 off $50+ on Uber Eats pickup",
    how: "Uber Eats app or site, switch to Pickup. Seen in your signed-in pickup feed; offer may apply to select items only",
    value: 0.2, end: "2026-11-20", verified: false,
    source: "https://www.ubereats.com/feed?diningMode=PICKUP"
  },
  {
    id: "ue-popeyes-bogo", chain: "Popeyes", cuisine: "chicken",
    title: "Buy 1, get 1 free on Uber Eats pickup",
    how: "Uber Eats app or site, switch to Pickup. Seen in your signed-in pickup feed; offer may apply to select items only",
    value: 0.5, end: "2026-11-20", verified: false,
    source: "https://www.ubereats.com/feed?diningMode=PICKUP"
  },
  {
    id: "ue-tropical-bogo", chain: "Tropical Smoothie", cuisine: "smoothie",
    title: "Buy 1, get 1 free on Uber Eats pickup",
    how: "Uber Eats app or site, switch to Pickup. Seen in your signed-in pickup feed; offer may apply to select items only",
    value: 0.5, end: "2026-11-20", verified: false,
    source: "https://www.ubereats.com/feed?diningMode=PICKUP"
  },
  {
    id: "ue-firehouse-35off", chain: "Firehouse Subs", cuisine: "subs",
    title: "35% off orders of $25+ on Uber Eats pickup",
    how: "Uber Eats app or site, switch to Pickup. Seen in your signed-in pickup feed; offer may apply to select items only",
    value: 0.35, end: "2026-11-20", verified: false,
    source: "https://www.ubereats.com/feed?diningMode=PICKUP"
  },
  {
    id: "ue-rreal-bogo", chain: "Rreal Tacos", cuisine: "mexican",
    title: "Buy 1, get 1 free on Uber Eats pickup",
    how: "Uber Eats app or site, switch to Pickup. Seen in your signed-in pickup feed; offer may apply to select items only",
    value: 0.5, end: "2026-11-20", verified: false,
    source: "https://www.ubereats.com/feed?diningMode=PICKUP"
  },
  {
    id: "ue-lavilla-bogo", chain: "Tacos La Villa", cuisine: "mexican",
    title: "Buy 1, get 1 free on Uber Eats pickup",
    how: "Uber Eats app or site, switch to Pickup. Seen in your signed-in pickup feed; offer may apply to select items only",
    value: 0.5, end: "2026-11-20", verified: false,
    source: "https://www.ubereats.com/feed?diningMode=PICKUP"
  },
  {
    id: "ue-goldbergs-bogo", chain: "Goldberg's", cuisine: "breakfast",
    title: "Buy 1, get 1 free on Uber Eats pickup",
    how: "Uber Eats app or site, switch to Pickup. Seen in your signed-in pickup feed; offer may apply to select items only",
    value: 0.5, end: "2026-11-20", verified: false,
    source: "https://www.ubereats.com/feed?diningMode=PICKUP"
  },
  {
    id: "ue-jimmyjohns-bogo", chain: "Jimmy John's", cuisine: "subs",
    title: "Buy 1, get 1 free on Uber Eats pickup",
    how: "Uber Eats app or site, switch to Pickup. Seen in your signed-in pickup feed; offer may apply to select items only",
    value: 0.5, end: "2026-11-20", verified: false,
    source: "https://www.ubereats.com/feed?diningMode=PICKUP"
  },
  {
    id: "ue-panera-free-item", chain: "Panera", cuisine: "sitdown",
    title: "Buy 1, get a free item on Uber Eats pickup",
    how: "Uber Eats app or site, switch to Pickup. Seen in your signed-in pickup feed; offer may apply to select items only",
    value: 0.4, end: "2026-11-20", verified: false,
    source: "https://www.ubereats.com/feed?diningMode=PICKUP"
  },
  {
    id: "ue-papajohns-bogo", chain: "Papa Johns", cuisine: "pizza",
    title: "Buy 1, get 1 free on Uber Eats pickup",
    how: "Uber Eats app or site, switch to Pickup. Seen in your signed-in pickup feed; offer may apply to select items only",
    value: 0.5, end: "2026-11-20", verified: false,
    source: "https://www.ubereats.com/feed?diningMode=PICKUP"
  },
  {
    id: "ue-dunkin-4off16", chain: "Dunkin'", cuisine: "coffee",
    title: "$4 off $16+ on Uber Eats pickup",
    how: "Uber Eats app or site, switch to Pickup. Seen in your signed-in pickup feed; offer may apply to select items only",
    value: 0.25, end: "2026-11-20", verified: false,
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
