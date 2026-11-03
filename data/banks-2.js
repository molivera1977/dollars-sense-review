/* ═══════════════════════════════════════════════════════
   DOLLARS AND SENSE — REVIEW SET 2 (built 2026-11-03)
   Marcos 11/3: "Since the reviews can be done multiple times, can the kids get different questions?"
   Each part of the review has 2 tries (more with the Teacher PIN): try 1 is Set 1 (data/banks.js),
   try 2 is this set, a PIN-allowed try 3 is Set 1 again, and so on (reviewSet() in script.js).
   Same level as the test at every item, like Set 1 (dollars-sense-unit-test/tools/check-banks.js checks it):
     VOCAB_BANK_2  every word asked THE OTHER KIND from Set 1: the 12 words Set 1 asks as Used Right are
                   Endings here, and the 12 it asks as Endings are Used Right (Marcos 11/3: "Make 24 of Used
                   Right and 24 Endings. Split those for Review 1 and Review 2."). Each word keeps Set 1's id
                   (V26 = bottom line on both sets), so the dashboard's skill report counts any try the same way.
     COMP_BANK_2   P01–P10 the same article details as Set 1, asked a new way · P11–P20 new Part A / Part B
                   pairs (same skill and page as Set 1's pair), each Part B with a different right sentence
     CLOZE_BANK_2  C01–C24, same word per id, new sentences
   Loaded after data/banks.js (uses its dsUsedRight() and dsEnding()). Same answer rules: answer = index into choices.
═══════════════════════════════════════════════════════ */

window.VOCAB_BANK_2 = [
  /* ── USED RIGHT: WHICH SENTENCE USES THE WORD THE RIGHT WAY? (12 words) ── */
  { id:"V26", q:dsUsedRight("bottom line"), choices:["The ice cream truck's bottom line is the stripe painted on its side.", "The bottom line is the name of our class pet.", "The ice cream truck's bottom line was strong because it earned more than it spent.", "The diner's bottom line told how many days of the week it was open."], answer:2 },
  { id:"V27", q:dsUsedRight("compassionate"), choices:["The compassionate kid took the last cookie from his crying sister.", "The compassionate girl pushed her little brother off the swing.", "The compassionate man yelled at the lost puppy to go away.", "The compassionate firefighter gave the frightened puppy a blanket and a gentle pat."], answer:3 },
  { id:"V29", q:dsUsedRight("measure"), choices:["Please measure the door shut when you leave.", "Use a ruler to measure how long the table is.", "We will measure to the park and play tag.", "The baby will measure loudly when she is hungry."], answer:1 },
  { id:"V31", q:dsUsedRight("inventive"), choices:["The inventive artist traced a picture exactly and added nothing new.", "The inventive team had zero ideas, so they sat and waited.", "The inventive cook only ever made toast the same plain way.", "Using only rubber bands and spoons, the inventive boy built a catapult."], answer:3 },
  { id:"V33", q:dsUsedRight("model"), choices:["Jen will model a glass of water because she is thirsty.", "Jen will model her clay dog on a picture of her own puppy.", "We will model to the store and buy bread.", "The kids will model loudly at the funny movie."], answer:1 },
  { id:"V35", q:dsUsedRight("innovative"), choices:["The innovative phone works exactly like the first phone from long ago.", "Our innovative plan copies the plan we used last year, step by step.", "His innovative idea was to do it the exact way it was done 100 years ago.", "The innovative bridge has lights that turn on by themselves when someone walks across."], answer:3 },
  { id:"V38", q:dsUsedRight("enterprise"), choices:["Jamal's enterprise is the shadow he sees on the wall.", "The enterprise is the river that runs by our town.", "Washing windows for neighbors became Jamal's new enterprise.", "An enterprise is a sound a duck makes."], answer:2 },
  { id:"V39", q:dsUsedRight("charity"), choices:["Charity is when you take things away from people in need.", "We gave our old toys to charity, and then we kept every one of them.", "The store gave money to charity to buy itself a new sign.", "The bike shop gives part of what it earns to a charity that helps families in need."], answer:3 },
  { id:"V42", q:dsUsedRight("process"), choices:["The process is the color of the sky.", "The process is a cat that sleeps on our couch.", "Making bread is a process: mix, knead, wait, and then bake.", "Our process is a jacket we wear in the rain."], answer:2 },
  { id:"V43", q:dsUsedRight("design"), choices:["Leo will design his milk because he is thirsty.", "Please design the trash outside.", "The dog will design at the mail carrier.", "An engineer will design the new bridge, so she is drawing a careful plan first."], answer:3 },
  { id:"V45", q:dsUsedRight("exceptional"), choices:["The exceptional cake was burned and tasted bad.", "Kim is an exceptional singer who won first place in the contest.", "His exceptional work was messy and only half done.", "The exceptional team lost every single game."], answer:1 },
  { id:"V47", q:dsUsedRight("profit"), choices:["The pumpkin patch earned a profit, which means it lost money and could not pay its bills.", "The profit is the oven we used to bake cookies.", "A profit is money you lose when you buy too much.", "The pumpkin patch kept a profit of $300 after paying for seeds, water, and workers."], answer:3 },
  /* ── ENDINGS: WHICH ENDING MAKES THE MOST SENSE? (the other 12 words) ── */
  { id:"V01", q:dsEnding("Her desire for a garden grew so strong that Abby", "desire"), choices:["pulled up every plant she saw.", "planted seeds in pots on her window.", "said she hated green things.", "never thought about plants again."], answer:1 },
  { id:"V04", q:dsEnding("The skate company wants to earn more money, so it", "company"), choices:["makes new skates and sells them.", "gives every skate away for free.", "stops making skates forever.", "hides its skates in a closet."], answer:0 },
  { id:"V06", q:dsEnding("Mr. Ford's routine at the start of class is to", "routine"), choices:["do something different every single day.", "skip class and go home.", "take attendance, read the schedule, and start the warm-up.", "do whatever he feels like, in any order."], answer:2 },
  { id:"V08", q:dsEnding("Moving the whole library to a new building was such an undertaking that the town", "undertaking"), choices:["planned for months and asked many people to help.", "finished it before breakfast.", "did not need a plan.", "had one person carry one book."], answer:0 },
  { id:"V10", q:dsEnding("On the first night of summer, Mia's family traditionally", "traditionally"), choices:["tries a brand-new thing they have never done.", "does something different every time.", "watches fireworks from the same hill, as they have since Mia was a baby.", "stays home, which they have never done before."], answer:2 },
  { id:"V12", q:dsEnding("After the summer camp expanded, it", "expanded"), choices:["had room for twice as many kids.", "had fewer kids than ever.", "closed its cabins for good.", "stayed exactly the same size."], answer:0 },
  { id:"V13", q:dsEnding("When Ms. Park saw the clean classroom, she was so pleased that she", "pleased"), choices:["sighed and looked upset.", "smiled and thanked us.", "made us stay in from recess.", "said it was the worst day ever."], answer:1 },
  { id:"V16", q:dsEnding("The bakery's motto is", "motto"), choices:["“Fresh bread, made with love.”", "the oven in the back room.", "a tall stack of plates.", "the truck that brings the flour."], answer:0 },
  { id:"V17", q:dsEnding("The club needed more funds, so the members", "funds"), choices:["took a long nap.", "put on a talent show and charged a dollar to get in.", "planted flowers in the park.", "spent the money they already had on candy."], answer:1 },
  { id:"V20", q:dsEnding("Grandpa forgot the location of his car, so he", "location"), choices:["walked up and down the parking lot to find it.", "asked what color it was.", "counted how many tires it had.", "washed it right away."], answer:0 },
  { id:"V22", q:dsEnding("The foundation raised money so it could", "foundation"), choices:["keep it all for itself.", "build a pool for its own workers.", "buy wheelchairs for people who need them.", "throw it away."], answer:2 },
  { id:"V24", q:dsEnding("Water is such a necessity on a desert hike that you", "necessity"), choices:["should carry plenty of it.", "can leave it at home.", "only need it for splashing.", "should pour it on the sand."], answer:0 },
];

window.COMP_BANK_2 = [
  /* ── PART I: ARTICLE DETAILS (the same details as Set 1, asked a new way) ──────────── */
  { id:"P01", page:59, lvl:1, trap:3, q:"Before his trip in 2006, Mycoskie wanted something. What was it? (page 59)", choices:["a break from his usual routine","a line of T-shirts to sell","a hotel to run","a new pair of eyeglasses"], answer:0 },
  { id:"P02", page:59, lvl:1, trap:2, q:"Where did Mycoskie learn to sail and to dance? (page 59)", choices:["in Hollywood, Florida","in Argentina, in South America","in the United States","in Canada"], answer:1 },
  { id:"P03", page:59, lvl:1, trap:3, q:"What problem did Mycoskie see in the poor villages? (page 59)", choices:["The children needed eyeglasses.","The children had serious medical problems.","Very few of the children had shoes.","The children needed money for their community."], answer:2 },
  { id:"P04", page:59, lvl:1, trap:3, q:"What is “TOMS: Shoes for Tomorrow”? (page 59)", choices:["the motto of the Hard Rock Cafe company","the name of a charity on the graph","the name of the event for the Make-A-Wish Foundation","the name of Mycoskie’s shoe business"], answer:3 },
  { id:"P05", page:59, lvl:1, trap:3, q:"TOMS has a one-for-one program. How does it work? (page 59)", choices:["For every pair of shoes that is purchased, TOMS gives away one pair.","For every T-shirt that is sold, part of the money goes to charity.","For every child with a medical problem, one wish is granted.","For every store, the employees raise money for their community."], answer:0 },
  { id:"P06", page:60, lvl:1, trap:2, q:"After the company expanded, what new thing did TOMS sell? (page 60)", choices:["T-shirts","eyeglasses","hotel rooms","bikes"], answer:1 },
  { id:"P07", page:60, lvl:1, trap:3, q:"In 1990, the Hard Rock Cafe company started something new. What was it? (page 60)", choices:["a one-for-one shoe program","a high school in Florida","charity","a graph of charities"], answer:2 },
  { id:"P08", page:60, lvl:1, trap:3, q:"“Love All, Serve All” is the motto of which company? (page 60)", choices:["TOMS","United Way Worldwide","The Salvation Army","Hard Rock Cafe"], answer:3 },
  { id:"P09", page:60, lvl:1, trap:3, q:"What do rock stars do for the Hard Rock Cafe T-shirts? (page 60)", choices:["They design the art that goes on the shirts.","They sell the shirts on the Internet.","They give the shirts to charity.","They raise money for their community."], answer:0 },
  { id:"P10", page:61, lvl:1, trap:3, q:"Look at the graph on page 61. Which charity was number 3? (page 61)", choices:["United Way Worldwide","Feeding America","The Salvation Army","YMCA of the USA"], answer:1 },
  /* ── PART II: INFERENCES, CONCLUSIONS, AND EVIDENCE (A/B pairs) ── */
  { id:"P11", page:59, lvl:3, trap:0, q:"Part A: What can the reader infer about how Mycoskie felt about the children in the villages? (page 59)", choices:["He cared about them and wanted to help them.","He thought they should buy their own shoes.","He was too busy to think about them.","He wanted them to work for his company."], answer:0 },
  { id:"P12", page:59, lvl:2, trap:3, q:"Part B: Which sentence from page 59 best supports the answer to Part A?", choices:["“In 2006, he traveled to Argentina, in South America, and while he was there he learned to sail and to dance.”","“Mycoskie decided he had to do something.”","“He named it TOMS: Shoes for Tomorrow.”","“The slip-on shoes are modeled on shoes that are traditionally worn by Argentine workers.”"], answer:1 },
  { id:"P13", page:60, lvl:3, trap:0, q:"Part A: What can the reader infer about TOMS eyeglasses? (page 60)", choices:["TOMS eyeglasses are given only to people in Argentina.","TOMS stopped selling shoes when it began selling eyeglasses.","Buying a pair of TOMS eyeglasses also helps a person in need.","TOMS eyeglasses cost more than TOMS shoes."], answer:2 },
  { id:"P14", page:60, lvl:2, trap:3, q:"Part B: Which sentence from page 60 best supports the answer to Part A?", choices:["“The company has expanded to sell eyeglasses.”","“Mycoskie is pleased and surprised.”","“The company runs restaurants and hotels.”","“In a similar program, one pair of eyeglasses is donated for every pair that is bought.”"], answer:3 },
  { id:"P15", page:60, lvl:3, trap:0, q:"Part A: What can the reader conclude about the Hard Rock Cafe company’s new enterprise in 1990? (page 60)", choices:["The company wanted to help others, not only make money.","The company wanted to close its restaurants.","The company wanted to build new schools.","The company stopped giving money away."], answer:0 },
  { id:"P16", page:60, lvl:3, trap:3, q:"Part B: Which sentence from page 60 best supports the answer to Part A?", choices:["“The company runs restaurants and hotels.”","“Since then, it has given away millions of dollars to different causes.”","“Then the shirts are sold on the Internet.”","“Have you ever seen a Hard Rock Cafe?”"], answer:1 },
  { id:"P17", page:61, lvl:3, trap:0, q:"Part A: Why did the author most likely use the heading “The Bottom Line” for the last section? (page 61)", choices:["The section is at the bottom of the page.","The section tells a funny story.","The section tells the most important idea about business.","The section explains how to read a graph."], answer:2 },
  { id:"P18", page:61, lvl:3, trap:3, q:"Part B: Which sentence from page 61 best supports the answer to Part A?", choices:["“The restaurant in Hollywood, Florida, worked with some exceptional students from two Florida high schools.”","“The foundation grants wishes to children with serious medical problems.”","“This graph shows the American charities that got the most donations in 2016 and how much money they raised.”","“However, helping others is just as important as the bottom line.”"], answer:3 },
  { id:"P19", page:59, lvl:3, trap:0, q:"Part A: What is the main idea of the whole article? (pages 59–61)", choices:["Some businesses use what they earn to help people in need.","Businesses should keep all the money they make.","It is easy to start a new business.","Only rich people can help others."], answer:0 },
  { id:"P20", page:59, lvl:3, trap:3, q:"Part B: Which sentence from page 59 best supports the answer to Part A?", choices:["“He named it TOMS: Shoes for Tomorrow.”","“Many large businesses in the United States and all over the world are finding unusual ways to help people in need.”","“The slip-on shoes are modeled on shoes that are traditionally worn by Argentine workers.”","“In 2006, he traveled to Argentina, in South America, and while he was there he learned to sail and to dance.”"], answer:1 },
];

window.CLOZE_BANK_2 = [
  { id:"C01", q:"The puppy looked at the bone with a strong __________ to chew it.", choices:["desire","location","motto"], answer:0 },
  { id:"C02", q:"The toy store’s __________ showed that it lost money this year.", choices:["routine","bottom line","desire"], answer:1 },
  { id:"C03", q:"The __________ coach sat with the player who was sad after the game.", choices:["inventive","innovative","compassionate"], answer:2 },
  { id:"C04", q:"Dad’s __________ makes paper cups and plates for restaurants.", choices:["company","motto","location"], answer:0 },
  { id:"C05", q:"Use a cup to __________ the flour for the cookies.", choices:["model","measure","design"], answer:1 },
  { id:"C06", q:"Brushing my teeth before bed is part of my nightly __________.", choices:["profit","location","routine"], answer:2 },
  { id:"C07", q:"The __________ boy thought of a new way to use an old milk jug: he made it into a bird feeder.", choices:["inventive","pleased","compassionate"], answer:0 },
  { id:"C08", q:"Cleaning up the whole park was a huge __________ for our club.", choices:["desire","undertaking","location"], answer:1 },
  { id:"C09", q:"Ava will __________ her sand castle on a real castle from her book.", choices:["measure","expanded","model"], answer:2 },
  { id:"C10", q:"At my house, we __________ open one present on the night before the holiday, like we have for years.", choices:["traditionally","inventive","compassionate"], answer:0 },
  { id:"C11", q:"The school bought an __________ new robot that helps kids learn to code.", choices:["compassionate","innovative","pleased"], answer:1 },
  { id:"C12", q:"The library __________ its reading room by adding more chairs and shelves.", choices:["measure","design","expanded"], answer:2 },
  { id:"C13", q:"Mom was __________ that I finished my homework before dinner.", choices:["pleased","inventive","exceptional"], answer:0 },
  { id:"C14", q:"Selling lemonade became the twins’ summer __________.", choices:["location","enterprise","necessity"], answer:1 },
  { id:"C15", q:"Our class gave the money from the bake sale to __________.", choices:["location","routine","charity"], answer:2 },
  { id:"C16", q:"The team’s __________ is “Never give up,” and they shout it before every game.", choices:["motto","profit","location"], answer:0 },
  { id:"C17", q:"The class needs more __________ to pay for the field trip bus.", choices:["motto","funds","location"], answer:1 },
  { id:"C18", q:"Growing a plant is a slow __________: plant the seed, water it, and wait for it to sprout.", choices:["charity","desire","process"], answer:2 },
  { id:"C19", q:"Our class will __________ a poster by sketching the pictures first.", choices:["design","measure","expanded"], answer:0 },
  { id:"C20", q:"The map shows the __________ of every water fountain in the park.", choices:["routine","location","motto"], answer:1 },
  { id:"C21", q:"Mia is an __________ swimmer who won every race this year.", choices:["compassionate","pleased","exceptional"], answer:2 },
  { id:"C22", q:"The __________ gives money to help animals that have no homes.", choices:["foundation","routine","location"], answer:0 },
  { id:"C23", q:"Jay spent five dollars on beads and sold his bracelets for twelve dollars, so he made a __________.", choices:["location","profit","desire"], answer:1 },
  { id:"C24", q:"A warm coat is a __________ in the cold winter.", choices:["motto","location","necessity"], answer:2 },
];
