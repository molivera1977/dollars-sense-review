/* ═══════════════════════════════════════════════════════
   DOLLARS AND SENSE — REVIEW QUESTION BANKS (built 2026-11-03)
   Written new for this year's class (Marcos 10/21: never last year's test or review).
   The review and the test cover the same words and the same parts of the article
   with different sentences and stems. Pages 58–61 (58 = the photo + Essential Question).
     VOCAB_BANK  24 items, each word once: 12 Used Right + 12 Endings (Marcos 11/3: "Make 24 of Used
                 Right and 24 Endings. Split those for Review 1 and Review 2."). Set 2 asks each word the
                 other kind. A word keeps one id on every form (V01 = desire …, V26 = bottom line …), so the
                 dashboard's skill report counts any try the same way. Same level as the test (Marcos 11/3:
                 the easiest-to-hardest rule is for math; a reading review matches its test).
     COMP_BANK   P01–P10 article details (in the article's own words) · P11–P20 Part A / Part B pairs
     CLOZE_BANK  C01–C24 (same word per id on both; new sentence)
   answer = index into choices (choices are shuffled at run time).
   page = the article page (58–61) the story panel opens to.
   lvl / trap (comprehension), the CLOZE choices and the vocabulary's kinds are what
   dollars-sense-unit-test/tools/check-banks.js compares with the test, item by item: they must match.
   The teacher dashboard reads this file (REVIEW_FILES) — keep ids stable.
═══════════════════════════════════════════════════════ */

/* Vocabulary (Marcos 11/3: "Make 24 of Used Right and 24 Endings. Split those for Review 1 and Review 2.
   Then make new ones for the test. Half Used Right and half Endings."): the Vocab Practice's two kinds,
   with four choices. Used Right: four sentences, one uses the word the right way. Endings: the start of
   a sentence with the word underlined, and four endings, one that fits what the word means. */
function dsUsedRight(word) { return `Which sentence uses <b>${word}</b> the right way?`; }
function dsEnding(stem, word) {
  const underlined = stem.replace(new RegExp('\\b' + word + '\\b', 'i'), m => `<u>${m}</u>`);
  return `${underlined} __________<br>Which ending makes the most sense?`;
}

window.VOCAB_BANK = [
  /* ── USED RIGHT: WHICH SENTENCE USES THE WORD THE RIGHT WAY? (12 words) ── */
  { id:"V01", q:dsUsedRight("desire"), choices:["Because of her desire for a kitten, Pia ran away whenever she saw one.", "Because of his desire for a guitar, Omar saved every dollar he earned.", "His desire to sleep was so strong that he jumped up and ran around the yard.", "Nora's desire for pizza made her push her plate away and say no thanks."], answer:1 },
  { id:"V04", q:dsUsedRight("company"), choices:["The company builds skateboards, and shops all over town buy them to sell.", "The company is my grandma's cat, Whiskers.", "A company is the sound thunder makes.", "The company never sells anything, so it is a business that earns money."], answer:0 },
  { id:"V06", q:dsUsedRight("routine"), choices:["Kai never does the same thing twice, and that is his routine.", "Kai's routine is a sport he played one time when he was little.", "Kai's routine after school is snack first, homework second, and then soccer.", "Kai's routine is a sandwich with ham and cheese."], answer:2 },
  { id:"V08", q:dsUsedRight("undertaking"), choices:["The class spent three weeks on their undertaking: building a raft for the river race.", "Snapping my fingers is my biggest undertaking, and it takes no time at all.", "The undertaking was so easy that it took one second and no planning.", "An undertaking is a quick little sneeze."], answer:0 },
  { id:"V10", q:dsUsedRight("traditionally"), choices:["We traditionally visited the new aquarium, but today was our first visit.", "My little brother traditionally lost his first tooth this morning.", "Every year on the first snow day, our street traditionally has a snowman contest.", "The traditionally is a game we play outside."], answer:2 },
  { id:"V12", q:dsUsedRight("expanded"), choices:["The farmers market expanded and added twenty more tables.", "When the farmers market expanded, half of its tables went away.", "My sandcastle expanded when the waves washed most of it away.", "The crowd expanded as people left and went home."], answer:0 },
  { id:"V13", q:dsUsedRight("pleased"), choices:["The coach was so pleased that she stomped off the field in anger.", "The coach was pleased that every player came to practice on time.", "Ana was pleased when her new kite ripped on its first flight.", "We were pleased, so we booed and turned off the show."], answer:1 },
  { id:"V16", q:dsUsedRight("motto"), choices:["The art club's motto, “Make a mess, make it great,” hangs above the sink.", "The art club's motto is the bus that takes us on trips.", "Our motto is a pet turtle named Shelly.", "The motto was a whole book with fifty chapters."], answer:0 },
  { id:"V17", q:dsUsedRight("funds"), choices:["The town collected funds, which were rocks from the river.", "The town collected funds to fix the old bridge.", "We used our funds to wash the dishes, like soap.", "The funds were the kids who came to the party."], answer:1 },
  { id:"V20", q:dsUsedRight("location"), choices:["We found a quiet location under a tree to read.", "The location is the time when school starts.", "My location is my favorite color, blue.", "The party's location is a funny joke Dad told."], answer:0 },
  { id:"V22", q:dsUsedRight("foundation"), choices:["The foundation keeps all its money and never helps anyone.", "The foundation is a game we play at recess.", "The foundation pays for doctors to visit towns that have no hospital.", "The foundation is a pet hamster that lives in our classroom."], answer:2 },
  { id:"V24", q:dsUsedRight("necessity"), choices:["When you hike in a forest you do not know, a map is a necessity.", "Shoes are a necessity on the rocky trail, so we went barefoot because we did not need them.", "A necessity is something you can always skip.", "The necessity was a toy we never wanted or needed."], answer:0 },
  /* ── ENDINGS: WHICH ENDING MAKES THE MOST SENSE? (the other 12 words) ── */
  { id:"V26", q:dsEnding("The car wash had a great bottom line this summer because", "bottom line"), choices:["its sign was painted bright yellow.", "it has a long driveway.", "it earned a lot and spent only a little.", "it is open on Saturdays."], answer:2 },
  { id:"V27", q:dsEnding("Ana is compassionate, so when her friend was sad, she", "compassionate"), choices:["laughed and walked away.", "told her to stop crying.", "took her friend's snack.", "sat with her and asked how she could help."], answer:3 },
  { id:"V29", q:dsEnding("To measure how heavy her backpack was, Rosa", "measure"), choices:["opened the zipper.", "put it on the bathroom scale.", "put stickers on it.", "hung it on a hook."], answer:1 },
  { id:"V31", q:dsEnding("Luis is so inventive that he", "inventive"), choices:["copies every idea from the person next to him.", "does every project the same old way.", "only builds what the box tells him to.", "turned an old umbrella into a tent for his toys."], answer:3 },
  { id:"V33", q:dsEnding("Tess will model her clay pot on one she saw at the museum, so she will", "model"), choices:["make it look like nothing she has seen.", "copy its shape and its painted lines.", "throw the clay in the trash.", "close her eyes while she works."], answer:1 },
  { id:"V35", q:dsEnding("The innovative company found a new way to", "innovative"), choices:["do things the same way it always had.", "copy what every other company did.", "stop making anything at all.", "turn old plastic bottles into warm jackets."], answer:3 },
  { id:"V38", q:dsEnding("For her new enterprise, Zoe", "enterprise"), choices:["took a nap on the couch.", "brushed her teeth.", "started a business baking dog treats to sell.", "watched a movie with her dad."], answer:2 },
  { id:"V39", q:dsEnding("Tickets for our school play raised money for a charity that", "charity"), choices:["keeps the money for itself.", "sells toys to rich people.", "takes coats away from cold kids.", "buys warm coats for kids who need them."], answer:3 },
  { id:"V42", q:dsEnding("Making a clay pot is a long process, so you", "process"), choices:["finish it in one quick step.", "skip the hard parts.", "shape it, let it dry, and then bake it.", "bake it before you shape it."], answer:2 },
  { id:"V43", q:dsEnding("To design a new board game, Nico started by", "design"), choices:["buying a game at the store.", "playing outside all day.", "taking a long bath.", "sketching the board and writing the rules."], answer:3 },
  { id:"V45", q:dsEnding("Her painting was exceptional, so", "exceptional"), choices:["everyone said it was the worst one.", "it was chosen to hang in the town hall.", "the teacher asked her to try again.", "it looked just like all the others."], answer:1 },
  { id:"V47", q:dsEnding("Because the art club's sale had a profit, the club", "profit"), choices:["had to borrow money to pay its bills.", "owed money to the art store.", "had less money than when it started.", "had money to save for next year."], answer:3 },
];

window.COMP_BANK = [
  /* ── PART I: ARTICLE DETAILS (the article's own words) ──────────── */
  { id:"P01", page:59, lvl:1, trap:3, q:"After starting and running four businesses, what did Blake Mycoskie want? (page 59)", choices:["a break from his usual routine","to sell eyeglasses","to run restaurants and hotels","to raise money for the Make-A-Wish Foundation"], answer:0 },
  { id:"P02", page:59, lvl:1, trap:2, q:"In 2006, where did Mycoskie travel? (page 59)", choices:["to Argentina, in South America","to two high schools in Florida","to a Hard Rock Cafe restaurant","to a big city in Canada"], answer:0 },
  { id:"P03", page:59, lvl:1, trap:3, q:"Mycoskie visited poor villages. What did very few of the children there have? (page 59)", choices:["shoes","eyeglasses","T-shirts","dance lessons"], answer:0 },
  { id:"P04", page:59, lvl:1, trap:3, q:"What did Mycoskie name his new business? (page 59)", choices:["TOMS: Shoes for Tomorrow","Hard Rock Cafe","Hearts and Soles","The Bottom Line"], answer:0 },
  { id:"P05", page:59, lvl:1, trap:3, q:"What does TOMS give away for every pair of shoes that is purchased? (page 59)", choices:["one pair of shoes","one pair of eyeglasses","part of the money from a T-shirt","a wish for a child who is sick"], answer:0 },
  { id:"P06", page:60, lvl:1, trap:2, q:"The company has expanded. What new thing does it sell? (page 60)", choices:["eyeglasses","T-shirts","rooms in hotels","bikes"], answer:0 },
  { id:"P07", page:60, lvl:1, trap:3, q:"What did the Hard Rock Cafe company launch in 1990? (page 60)", choices:["a new enterprise: charity","a line of eyeglasses","a line of slip-on shoes","a trip to Argentina"], answer:0 },
  { id:"P08", page:60, lvl:1, trap:3, q:"Hard Rock Cafe has a motto. What is it? (page 60)", choices:["Love All, Serve All","Shoes for Tomorrow","Helping Others Is Good Business","The Bottom Line"], answer:0 },
  { id:"P09", page:60, lvl:1, trap:3, q:"Who designs the art that goes on the Hard Rock Cafe T-shirts? (page 60)", choices:["rock stars","students from two Florida high schools","TOMS’ employees","Argentine workers"], answer:0 },
  { id:"P10", page:61, lvl:1, trap:3, q:"Look at the graph on page 61. Which charity got the most donations in 2016? (page 61)", choices:["United Way Worldwide","Feeding America","The Salvation Army","YMCA of the USA"], answer:0 },
  /* ── PART II: INFERENCES, CONCLUSIONS, AND EVIDENCE (A/B pairs) ── */
  { id:"P11", page:59, lvl:3, trap:0, q:"Part A: What can the reader infer about why Mycoskie started TOMS? (page 59)", choices:["He wanted to help children who did not have shoes.","He wanted to learn how to make shoes.","He wanted to sell shoes only to rich families.","He wanted to move to Argentina forever."], answer:0 },
  { id:"P12", page:59, lvl:2, trap:3, q:"Part B: Which sentence from page 59 best supports the answer to Part A?", choices:["“He also visited poor villages where very few of the children had shoes.”","“In 2006, he traveled to Argentina, in South America, and while he was there he learned to sail and to dance.”","“He named it TOMS: Shoes for Tomorrow.”","“After starting and running four businesses, Blake Mycoskie wanted a break from his usual routine.”"], answer:0 },
  { id:"P13", page:60, lvl:3, trap:0, q:"Part A: Why is Mycoskie pleased and surprised? (page 60)", choices:["He found out he could make money and help others at the same time.","He found out that people did not want to buy his shoes.","He found out that eyeglasses cost more than shoes.","He found out that he could stop working forever."], answer:0 },
  { id:"P14", page:60, lvl:2, trap:3, q:"Part B: Which sentence from page 60 best supports the answer to Part A?", choices:["“I never thought I could do both at the same time.”","“The company has expanded to sell eyeglasses.”","“TOMS’ employees unpack shoes to give away.”","“Have you ever seen a Hard Rock Cafe?”"], answer:0 },
  { id:"P15", page:60, lvl:3, trap:0, q:"Part A: What can the reader conclude about buying a Hard Rock Cafe T-shirt? (page 60)", choices:["Buying a shirt helps people in need.","Buying a shirt pays only the rock stars.","The shirts can be bought only at the hotels.","The shirts are given away for free."], answer:0 },
  { id:"P16", page:60, lvl:3, trap:3, q:"Part B: Which sentence from page 60 best supports the answer to Part A?", choices:["“Part of the money that is raised from the sales of the shirts is given to charity.”","“The process starts with rock stars designing the art that goes on the shirts.”","“The company runs restaurants and hotels.”","“Every store does it differently.”"], answer:0 },
  { id:"P17", page:61, lvl:3, trap:0, q:"Part A: What can the reader conclude from the graph on page 61? (page 61)", choices:["Americans gave a lot of money to charities in 2016.","Americans stopped giving money to charities in 2016.","Only one charity got money in 2016.","The charities gave their money to businesses."], answer:0 },
  { id:"P18", page:61, lvl:3, trap:3, q:"Part B: Which sentence from page 61 best supports the answer to Part A?", choices:["“This graph shows the American charities that got the most donations in 2016 and how much money they raised.”","“The foundation grants wishes to children with serious medical problems.”","“If you own a business, making a profit is a necessity.”","“Every day companies are thinking of innovative ways to give back to their community.”"], answer:0 },
  { id:"P19", page:61, lvl:3, trap:0, q:"Part A: What does the author think about businesses that help others? (pages 59–61)", choices:["Helping others is good for a business.","A business should care only about money.","Only small businesses should help others.","Helping others makes a business lose money."], answer:0 },
  { id:"P20", page:61, lvl:3, trap:3, q:"Part B: Which sentence from page 61 best supports the answer to Part A?", choices:["“Helping others is good business!”","“If you own a business, making a profit is a necessity.”","“The restaurant in Hollywood, Florida, worked with some exceptional students from two Florida high schools.”","“Together, they put on an event to raise money for the Make-A-Wish Foundation.”"], answer:0 },
];

window.COMP_PAIRS = [['P11','P12'], ['P13','P14'], ['P15','P16'], ['P17','P18'], ['P19','P20']];

window.CLOZE_BANK = [
  { id:"C01", q:"After watching the space show, Ana had a __________ to become an astronaut someday.", choices:["profit","desire","location"], answer:1 },
  { id:"C02", q:"At the end of the year, the shoe store looked at its __________ to see if it made or lost money.", choices:["bottom line","desire","routine"], answer:0 },
  { id:"C03", q:"The __________ lunch helper gave a warm hug to the new student who missed her old school.", choices:["inventive","innovative","compassionate"], answer:2 },
  { id:"C04", q:"The __________ that makes our school buses hired ten new workers this month.", choices:["location","company","desire"], answer:1 },
  { id:"C05", q:"The vet will __________ how much my puppy weighs on a special scale.", choices:["measure","design","model"], answer:0 },
  { id:"C06", q:"Before every game, the team follows the same __________: stretch, run two laps, then practice kicks.", choices:["charity","profit","routine"], answer:2 },
  { id:"C07", q:"The __________ girl had a clever idea: she made a raincoat for her doll out of a plastic bag.", choices:["inventive","compassionate","pleased"], answer:0 },
  { id:"C08", q:"Painting the whole school fence was a big __________ that took the class three weekends.", choices:["desire","undertaking","charity"], answer:1 },
  { id:"C09", q:"We will __________ our costumes on our favorite book characters, with the same hats and capes.", choices:["measure","expanded","model"], answer:2 },
  { id:"C10", q:"In our family, we __________ eat pancakes on the first day of school, like we have for years.", choices:["traditionally","inventive","exceptional"], answer:0 },
  { id:"C11", q:"The museum has an __________ new tour where a robot guide walks you from room to room.", choices:["compassionate","innovative","pleased"], answer:1 },
  { id:"C12", q:"Our school __________ the playground by adding a climbing wall and three new swings.", choices:["model","measure","expanded"], answer:2 },
  { id:"C13", q:"The librarian was __________ that every student returned their books on time.", choices:["pleased","inventive","exceptional"], answer:0 },
  { id:"C14", q:"Selling fresh eggs from their chickens became the Lopez family’s new __________.", choices:["foundation","enterprise","location"], answer:1 },
  { id:"C15", q:"The runners raised money for __________ to help families who lost their homes in a fire.", choices:["desire","process","charity"], answer:2 },
  { id:"C16", q:"The library’s __________, “Read every day,” is painted above the front desk.", choices:["motto","profit","foundation"], answer:0 },
  { id:"C17", q:"The animal shelter needs more __________ to buy food and blankets for the dogs.", choices:["location","funds","motto"], answer:1 },
  { id:"C18", q:"Making apple juice is a __________: wash the apples, cut them, then press out the juice.", choices:["charity","profit","process"], answer:2 },
  { id:"C19", q:"Our class will __________ a new school flag by drawing ideas and choosing the colors.", choices:["design","measure","expanded"], answer:0 },
  { id:"C20", q:"Mark the __________ of the treasure on the map with a big red X.", choices:["routine","location","desire"], answer:1 },
  { id:"C21", q:"Our class had an __________ year, with the best reading scores in the whole school.", choices:["compassionate","pleased","exceptional"], answer:2 },
  { id:"C22", q:"A __________ gave money to our town so that every child could get free swimming lessons.", choices:["foundation","routine","location"], answer:0 },
  { id:"C23", q:"Mia sold her painted rocks for two dollars each and made a __________ after buying the paint.", choices:["location","profit","desire"], answer:1 },
  { id:"C24", q:"Sunscreen is a __________ on a hot, sunny day at the beach.", choices:["location","company","necessity"], answer:2 },
];
