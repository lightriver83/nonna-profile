/* Nona — recipe dataset.
   Single source of truth for the dynamic recipe.html template.
   Edit any entry here; recipe.html?slug=<key> will reflect changes on next load. */

window.recipesData = {

  "cappelletti-romagnoli": {
    title: "Cappelletti romagnoli in brodo",
    byNonna: "Nonna Teresa",
    region: "Forlì, Romagna",
    category: "primi",
    badge: "Primi",
    hero: { src: "images/recipes/cappelletti-romagnoli.jpg", alt: "Cappelletti romagnoli in brodo, plated at a rustic wooden table" },
    extraThumbs: [
      { src: "images/recipes/cappelletti-romagnoli-step-2.jpg", alt: "Nonna Teresa rolling a sheet of fresh pasta with the wooden mattarello" },
      { src: "images/recipes/cappelletti-romagnoli-step-3.jpg", alt: "Copper pot of brodo simmering on a vintage stove" }
    ],
    meta: { time: "3h 00m", servings: "6", difficulty: "Hard" },
    storyHtml: "&ldquo;In Romagna i cappelletti are <em>di magro</em>: cheeses only, no meat. My grandmother Teresa made them on Christmas Eve, with sisters and cousins around the big table and a radio on in the kitchen. The filling &mdash; ricotta, raviggiolo, parmigiano, a grate of lemon &mdash; she sealed by hand into tiny &lsquo;hats&rsquo; that fit two to a spoon. The brodo started at seven in the morning, capon and beef. By noon there was only one question allowed: <em>&ldquo;quanti?&rdquo;</em>.&rdquo;<br/><br/>&mdash; <em>Nicola, her grandson</em>",
    basket: { title: "Nonna Teresa's Sunday basket", price: "€32", when: "Order by Thursday · arrives Saturday morning" },
    ingredients: [
      { name: "Flour 00", qty: "400 g" },
      { name: "Eggs (whole, large)", qty: "4" },
      { name: "Fresh ricotta", qty: "250 g" },
      { name: "Raviggiolo (or stracchino)", qty: "150 g" },
      { name: "Parmigiano-Reggiano 24m", qty: "150 g + extra" },
      { name: "Lemon zest (untreated)", qty: "½ lemon" },
      { name: "Nutmeg, salt", qty: "q.b." },
      { name: "Hen or capon, for brodo", qty: "½ · ≈ 1 kg" },
      { name: "Beef shank", qty: "400 g" },
      { name: "Onion, carrot, celery, tomato", qty: "1 each" }
    ],
    steps: [
      "<strong>Make the filling the day before.</strong> Mix 250g fresh ricotta with 150g raviggiolo (or stracchino), 150g grated Parmigiano, one whole egg, a generous grate of fresh nutmeg, the zest of half an untreated lemon and a pinch of salt. Cover and rest overnight in the fridge.",
      "<strong>The dough, Sunday morning.</strong> 400g flour 00, 4 eggs, a pinch of salt. Knead by hand for 15 minutes until elastic and pale. Wrap and rest under a warm bowl for 30 minutes. No shortcuts.",
      "<strong>Roll the sfoglia.</strong> Thin enough to read the Gazzetta through it. Cut into 3×3 cm squares. Keep the rest covered &mdash; the pasta dries faster than you think.",
      "<strong>Fill &amp; fold the cappelletto.</strong> A pea-sized dot of filling in the centre. Fold the square into a triangle, press the edges, wrap the long side around your fingertip, pinch the two tips together, flip up the top fold. The first twenty look shy. The next two hundred won't.",
      "<strong>The brodo.</strong> Half a hen, 400g beef shank, one onion, one carrot, one stalk of celery, one small tomato. Cover with cold water. Four hours on the lowest possible flame. Skim the foam slowly.",
      "<strong>Cook and serve.</strong> Drop the cappelletti into the gently simmering brodo. Four minutes, no more. Serve in warmed bowls with a snowfall of Parmigiano. The only question allowed at the table is <em>&ldquo;quanti?&rdquo;</em>."
    ],
    similar: ["orecchiette-cime-di-rapa", "tiramisu", "piadina"]
  },

  "orecchiette-cime-di-rapa": {
    title: "Orecchiette con cime di rapa",
    byNonna: "Nonna Rosa",
    region: "Bari, Puglia",
    category: "primi",
    badge: "Primi",
    hero: { src: "images/recipes/orecchiette-cime-di-rapa.jpg", alt: "A bowl of orecchiette with cime di rapa and breadcrumbs" },
    meta: { time: "1h 15m", servings: "4", difficulty: "Medium" },
    storyHtml: "&ldquo;In Bari Vecchia my grandmother Rosa makes orecchiette in front of her door, on a wooden board worn smooth by forty years of thumbs. Just semola and water. The cime di rapa come from the same field her father used to walk &mdash; <em>la stessa terra</em>. No cream, no butter: only good olive oil, a clove of garlic, an anchovy melted in the pan, and a fistful of breadcrumbs toasted to replace the cheese the poor never had.&rdquo;<br/><br/>&mdash; <em>Giulio, her grandson</em>",
    basket: { title: "Nonna Rosa's Puglia basket", price: "€26", when: "Order by Thursday · arrives Saturday morning" },
    ingredients: [
      { name: "Semola di grano duro", qty: "400 g" },
      { name: "Warm water", qty: "200 ml" },
      { name: "Cime di rapa, cleaned", qty: "1 kg" },
      { name: "Garlic", qty: "2 cloves" },
      { name: "Salt-cured anchovies", qty: "3 fillets" },
      { name: "Dried chilli (peperoncino)", qty: "1 small" },
      { name: "Extra virgin olive oil", qty: "5 tbsp" },
      { name: "Stale bread, grated", qty: "60 g" },
      { name: "Salt", qty: "q.b." }
    ],
    steps: [
      "<strong>The dough.</strong> Mix semola with warm water and a pinch of salt. Knead 10 minutes until smooth. Rest 30 minutes wrapped in a cloth.",
      "<strong>Shape the orecchiette.</strong> Roll a rope of dough, cut small pieces, drag each one with a butter knife on the wooden board, then flip it over your thumb. Lay them on a floured cloth.",
      "<strong>Toast the breadcrumbs.</strong> In a dry pan, toast 60g of stale bread crumbs with a drop of oil until deep gold. Set aside. This is the <em>poor man's parmigiano</em>.",
      "<strong>The condimento.</strong> In a wide pan, warm the oil with two cloves of garlic and a small chilli. Add three anchovies and let them melt. Toss in the cime di rapa &mdash; they will sigh.",
      "<strong>Cook together.</strong> Boil orecchiette and the trimmed cime di rapa stalks in the same pot for 5 minutes. Drain, finish in the pan two more minutes.",
      "<strong>Serve.</strong> A handful of toasted breadcrumbs on top, a thread of raw oil. No cheese. Eat with your hands warm around the bowl."
    ],
    similar: ["cappelletti-romagnoli", "pesto-genovese", "taralli"]
  },

  "risotto-milanese": {
    title: "Risotto alla milanese",
    byNonna: "Nonna Adelina",
    region: "Milano, Lombardia",
    category: "primi",
    badge: "Primi",
    hero: { src: "images/recipes/risotto-milanese.jpg", alt: "Saffron risotto plated all'onda on a white plate" },
    meta: { time: "45m", servings: "4", difficulty: "Medium" },
    storyHtml: "&ldquo;Adelina cooked at the Ospedale Maggiore for thirty years and learned the rule that matters: <em>il riso non aspetta nessuno</em>. The midollo gives it the soul; the saffron only the dress. She stirs with a wooden spoon she has been using since 1981 &mdash; the only one her wrist trusts. The risotto must move <em>all'onda</em> on the plate, like a slow wave. If it sits still, it's polenta.&rdquo;<br/><br/>&mdash; <em>Marco, her grandson</em>",
    basket: { title: "Nonna Adelina's Milano basket", price: "€34", when: "Order by Thursday · arrives Saturday morning" },
    ingredients: [
      { name: "Carnaroli rice", qty: "320 g" },
      { name: "Beef marrow, chopped", qty: "40 g" },
      { name: "White onion, finely diced", qty: "½" },
      { name: "Dry white wine", qty: "1 glass" },
      { name: "Hot beef broth", qty: "≈ 1.2 L" },
      { name: "Saffron threads", qty: "1 sachet (0.15 g)" },
      { name: "Parmigiano-Reggiano 30m", qty: "80 g" },
      { name: "Cold butter, cubed", qty: "70 g" },
      { name: "Salt", qty: "q.b." }
    ],
    steps: [
      "<strong>Bloom the saffron.</strong> Soak the threads in half a ladle of hot broth for 20 minutes. The colour will deepen on its own.",
      "<strong>Soffritto.</strong> Melt the marrow with a spoon of butter on low heat. Add the onion, sweat without colour for 6&ndash;7 minutes &mdash; it must be transparent, never gold.",
      "<strong>Tostatura.</strong> Add the rice. Stir 2 minutes until each grain is hot and shiny. Pour the wine, evaporate completely.",
      "<strong>Cottura.</strong> Add hot broth one ladle at a time, stirring slowly. After 14 minutes, add the saffron infusion. Total cooking: 17&ndash;18 minutes.",
      "<strong>Mantecatura.</strong> Off the heat. Add cold butter and grated Parmigiano. Beat hard with the spoon for 30 seconds &mdash; this is where the risotto becomes silk. Rest 1 minute, lid on.",
      "<strong>Serve.</strong> Plate by tapping the bottom of the dish: the risotto must <em>fare l'onda</em>. No garnish. No parsley. Adelina would not allow it."
    ],
    similar: ["osso-buco-milanese", "cappelletti-romagnoli", "saltimbocca"]
  },

  "osso-buco-milanese": {
    title: "Osso buco alla milanese",
    byNonna: "Nonna Luigia",
    region: "Milano, Lombardia",
    category: "secondi",
    badge: "Secondi",
    hero: { src: "images/recipes/osso-buco-milanese.jpg", alt: "Veal osso buco with gremolada and a marrow spoon" },
    meta: { time: "2h 30m", servings: "4", difficulty: "Medium" },
    storyHtml: "&ldquo;Luigia served the ossobuco only on Sundays, with risotto alla milanese on the same plate &mdash; never beside it. The gremolada (lemon, garlic, parsley) was her invention against the heaviness, she said. The marrow was reserved for whoever set the table that morning. There was a tiny silver spoon for it, kept in a drawer with the wedding rings.&rdquo;<br/><br/>&mdash; <em>Camilla, her granddaughter</em>",
    basket: { title: "Nonna Luigia's Sunday basket", price: "€38", when: "Order by Thursday · arrives Saturday morning" },
    ingredients: [
      { name: "Veal shank, 4 cm slices", qty: "4 (≈ 1.4 kg)" },
      { name: "Flour 00", qty: "for dusting" },
      { name: "Butter", qty: "60 g" },
      { name: "White onion, finely diced", qty: "1" },
      { name: "Dry white wine", qty: "200 ml" },
      { name: "Beef broth", qty: "500 ml" },
      { name: "Lemon zest (untreated)", qty: "1" },
      { name: "Garlic", qty: "1 clove" },
      { name: "Flat-leaf parsley", qty: "1 bunch" },
      { name: "Salt, pepper", qty: "q.b." }
    ],
    steps: [
      "<strong>Tie and dust.</strong> Tie a thin string around each ossobuco so it holds together. Score the silver skin in 3&ndash;4 points. Dust lightly with flour, shake off the excess.",
      "<strong>Sear.</strong> Brown the veal in butter on both sides until deep gold, 3 minutes per side. Set aside.",
      "<strong>Soffritto.</strong> In the same pan, soften the onion in the buttery juices for 8 minutes. Return the meat. Pour the wine, reduce by half.",
      "<strong>Slow cook.</strong> Add hot broth to halfway up the veal. Cover. Cook on the lowest flame for 1h 45m, turning every 20 minutes. The bone marrow should still be intact.",
      "<strong>Make the gremolada.</strong> Chop together very finely: zest of one lemon, one clove of garlic, a generous bunch of parsley. Don't prepare it ahead &mdash; the lemon dies in 10 minutes.",
      "<strong>Serve.</strong> One ossobuco per plate, alongside the risotto alla milanese. A spoonful of gremolada on top of the meat at the very last second. The marrow goes first."
    ],
    similar: ["risotto-milanese", "pollo-cacciatora", "saltimbocca"]
  },

  "pollo-cacciatora": {
    title: "Pollo alla cacciatora",
    byNonna: "Nonna Carmela",
    region: "Firenze, Toscana",
    category: "secondi",
    badge: "Secondi",
    hero: { src: "images/recipes/pollo-cacciatora.jpg", alt: "Hunter-style chicken in a copper pan with olives and rosemary" },
    meta: { time: "1h 30m", servings: "4", difficulty: "Easy" },
    storyHtml: "&ldquo;Carmela cooked it on autumn Sundays, when my grandfather came home from hunting empty-handed &mdash; <em>cacciatora senza cacciatore</em>, she joked. Tuscan chicken, Chianti from the demijohn, the rosemary clipped at the door. The olives and capers were the salt of the woods. The bread, sliced thick and rubbed with garlic, was the only utensil allowed.&rdquo;<br/><br/>&mdash; <em>Lorenzo, her grandson</em>",
    basket: { title: "Nonna Carmela's Toscana basket", price: "€30", when: "Order by Thursday · arrives Saturday morning" },
    ingredients: [
      { name: "Free-range chicken, in pieces", qty: "1.4 kg" },
      { name: "Chianti or other dry red wine", qty: "300 ml" },
      { name: "Pelati (whole peeled tomatoes)", qty: "400 g" },
      { name: "Black olives (taggiasche)", qty: "100 g" },
      { name: "Capers in salt, rinsed", qty: "1 tbsp" },
      { name: "Rosemary, fresh", qty: "2 sprigs" },
      { name: "Garlic", qty: "3 cloves" },
      { name: "Extra virgin olive oil", qty: "4 tbsp" },
      { name: "Salt, pepper", qty: "q.b." }
    ],
    steps: [
      "<strong>Marinate.</strong> The night before, lay the chicken pieces in red wine with rosemary and a clove of crushed garlic. Cover and refrigerate.",
      "<strong>Brown.</strong> Drain (keep the marinade!), pat dry. Brown in oil and garlic on high heat until golden on all sides, 8&ndash;10 minutes.",
      "<strong>Deglaze.</strong> Pour the marinade in. Let it boil aggressively for 3 minutes &mdash; the alcohol must leave.",
      "<strong>Tomato.</strong> Crush the pelati by hand into the pan. Add olives, rinsed capers, the second sprig of rosemary. Salt, pepper.",
      "<strong>Slow cook.</strong> Cover, lowest flame, 50 minutes. Turn the pieces twice. The sauce reduces, becomes glossy.",
      "<strong>Rest and serve.</strong> Off the heat, lid on, 10 minutes. Serve with thick country bread, rubbed with raw garlic. Use it as a sponge."
    ],
    similar: ["osso-buco-milanese", "saltimbocca", "parmigiana"]
  },

  "saltimbocca": {
    title: "Saltimbocca alla romana",
    byNonna: "Nonna Luisa",
    region: "Roma, Lazio",
    category: "secondi",
    badge: "Secondi",
    hero: { src: "images/recipes/saltimbocca.jpg", alt: "Roman saltimbocca with prosciutto and sage" },
    meta: { time: "25m", servings: "4", difficulty: "Easy" },
    storyHtml: "&ldquo;In Trastevere, Luisa makes them in the time it takes to set the table. <em>Saltimbocca</em> &mdash; literally &lsquo;jumps in the mouth&rsquo;. Veal, prosciutto, a sage leaf: a flag of three colours. No flour on the prosciutto side, never. The pan is the same blackened iron one she got married with, in 1962.&rdquo;<br/><br/>&mdash; <em>Flavio, her grandson</em>",
    basket: { title: "Nonna Luisa's Roma basket", price: "€28", when: "Order by Thursday · arrives Saturday morning" },
    ingredients: [
      { name: "Veal escalopes, thin", qty: "8 (≈ 80 g each)" },
      { name: "Prosciutto crudo di Parma", qty: "8 slices" },
      { name: "Fresh sage leaves", qty: "16" },
      { name: "Flour 00", qty: "for dusting" },
      { name: "Butter", qty: "60 g" },
      { name: "Dry white wine", qty: "100 ml" },
      { name: "Salt, pepper", qty: "q.b." }
    ],
    steps: [
      "<strong>Build the saltimbocca.</strong> Lay an escalope flat. Cover with a slice of prosciutto. Pin two sage leaves through both layers with a wooden toothpick.",
      "<strong>Flour one side only.</strong> Dust the veal side with flour. The prosciutto side must stay bare &mdash; that's the whole secret.",
      "<strong>Sear prosciutto down first.</strong> Melt half the butter in a hot pan. Lay the saltimbocca prosciutto-side down. 90 seconds, until the prosciutto crisps and shrinks. Flip.",
      "<strong>Finish veal side.</strong> One more minute on the veal side. Salt only the veal side. The prosciutto is salt enough.",
      "<strong>Deglaze.</strong> Remove the meat. Pour the white wine in the pan, scrape, reduce 1 minute. Off the heat, swirl in the cold butter cubes &mdash; the sauce becomes glossy.",
      "<strong>Serve.</strong> Saltimbocca on warmed plates, sauce poured over, an extra raw sage leaf for perfume. Bread on the side. Eat in the next 4 minutes."
    ],
    similar: ["osso-buco-milanese", "pollo-cacciatora", "parmigiana"]
  },

  "caponata": {
    title: "Caponata",
    byNonna: "Nonna Concetta",
    region: "Catania, Sicilia",
    category: "contorni",
    badge: "Contorni",
    hero: { src: "images/recipes/caponata.jpg", alt: "Sicilian caponata in a glazed terracotta bowl" },
    meta: { time: "1h 20m + rest", servings: "6", difficulty: "Medium" },
    storyHtml: "&ldquo;Concetta's caponata never goes on the table the day you make it. <em>Riposa una notte, almeno</em>. The agrodolce balance &mdash; sugar against vinegar &mdash; only finds itself overnight, like a quarrel that needed sleep. She fries each vegetable separately. &lsquo;Otherwise they cook in each other's mood,&rsquo; she says.&rdquo;<br/><br/>&mdash; <em>Salvo, her grandson</em>",
    basket: { title: "Nonna Concetta's Sicilia basket", price: "€24", when: "Order by Thursday · arrives Saturday morning" },
    ingredients: [
      { name: "Aubergines (long, firm)", qty: "800 g" },
      { name: "Celery (inner stalks)", qty: "3" },
      { name: "Red onions", qty: "2" },
      { name: "Tomato passata", qty: "300 g" },
      { name: "Green olives, pitted", qty: "100 g" },
      { name: "Capers in salt, rinsed", qty: "30 g" },
      { name: "Pine nuts", qty: "30 g" },
      { name: "Sultanas, soaked", qty: "30 g" },
      { name: "White wine vinegar", qty: "60 ml" },
      { name: "Sugar", qty: "30 g" },
      { name: "Extra virgin olive oil", qty: "for frying" },
      { name: "Basil, salt", qty: "q.b." }
    ],
    steps: [
      "<strong>Salt the aubergines.</strong> Cube into 2 cm. Salt heavily, rest 45 minutes in a colander. Squeeze the bitter water out, pat dry.",
      "<strong>Fry separately.</strong> Hot oil. Fry the aubergines until deep gold, drain on paper. In another pan, blanch the celery 3 minutes, then fry. In a third, soften the onions with two tablespoons of oil until sweet.",
      "<strong>Build.</strong> To the onions add tomato passata, olives, rinsed capers, soaked sultanas, pine nuts. Simmer 10 minutes.",
      "<strong>Agrodolce.</strong> Dissolve 30g sugar in 60ml vinegar. Pour into the pan, evaporate 2 minutes, until your nose stops stinging.",
      "<strong>Combine.</strong> Fold in the fried aubergines and celery gently. Salt to taste. Off the heat, tear in fresh basil.",
      "<strong>Rest, eat the next day.</strong> Cool, refrigerate overnight. Serve at room temperature, with bread, or alongside grilled fish."
    ],
    similar: ["peperonata", "parmigiana", "arancini"]
  },

  "peperonata": {
    title: "Peperonata della domenica",
    byNonna: "Nonna Ida",
    region: "Napoli, Campania",
    category: "contorni",
    badge: "Contorni",
    hero: { src: "images/recipes/peperonata.jpg", alt: "Napoletana peperonata with red and yellow peppers" },
    meta: { time: "55m", servings: "4", difficulty: "Easy" },
    storyHtml: "&ldquo;Ida cooks her peperonata on Sunday morning, while the ragù sleeps in the other pan. The peppers come from her balcony in Sant'Antimo &mdash; <em>tre piante, ottanta peperoni l'anno</em>. The trick, she says, is patience: forty minutes on low heat, no water, no shortcut. The peppers must release their own sweetness. The next day, on bread, it's even better.&rdquo;<br/><br/>&mdash; <em>Chiara, her granddaughter</em>",
    basket: { title: "Nonna Ida's Napoli basket", price: "€22", when: "Order by Thursday · arrives Saturday morning" },
    ingredients: [
      { name: "Red bell peppers", qty: "3" },
      { name: "Yellow bell peppers", qty: "3" },
      { name: "White onion, sliced", qty: "1 large" },
      { name: "Garlic", qty: "2 cloves" },
      { name: "Pelati (whole peeled tomatoes)", qty: "300 g" },
      { name: "Extra virgin olive oil", qty: "5 tbsp" },
      { name: "Basil, fresh", qty: "1 small bunch" },
      { name: "Salt", qty: "q.b." }
    ],
    steps: [
      "<strong>Cut wide strips.</strong> Halve the peppers, remove seeds and white ribs. Cut into 2 cm wide strips. The width matters &mdash; thinner strips collapse.",
      "<strong>Soffritto.</strong> Warm the oil with two crushed garlic cloves. Once they whisper, add the onion. Sweat for 8 minutes on low.",
      "<strong>The peppers.</strong> Add all peppers, salt lightly, stir to coat. Lid on. Lowest flame possible. 25 minutes, stirring every 5.",
      "<strong>Tomato.</strong> Crush the pelati by hand. Add to the pan. No water, ever. Lid back on, 15 more minutes.",
      "<strong>Finish.</strong> Adjust salt. Off the heat, tear in fresh basil. Cover, rest 10 minutes &mdash; this is when the flavour settles.",
      "<strong>Serve warm or the next day.</strong> Beside roast meat, on toasted country bread, or stirred into pasta. The leftovers are not leftovers &mdash; they are the dish."
    ],
    similar: ["caponata", "parmigiana", "pollo-cacciatora"]
  },

  "tiramisu": {
    title: "Tiramisù (the real one)",
    byNonna: "Nonna Marilena",
    region: "Treviso, Veneto",
    category: "dolci",
    badge: "Dolci",
    hero: { src: "images/recipes/tiramisu.jpg", alt: "A spoonful of tiramisù lifted from a glass dish" },
    meta: { time: "30m + 4h chill", servings: "6", difficulty: "Easy" },
    storyHtml: "&ldquo;Marilena was born in Treviso in 1948. The tiramisù was invented there, at <em>Le Beccherie</em>, the year she turned thirty. Her version is the original: no cream, no liqueur, no cocoa in the cream &mdash; only mascarpone, eggs, sugar, espresso, savoiardi, and a thin black sky of cocoa on top. <em>&ldquo;Tirami su&rdquo;</em> &mdash; pick me up. It does, every time.&rdquo;<br/><br/>&mdash; <em>Anna, her granddaughter</em>",
    basket: { title: "Nonna Marilena's Treviso basket", price: "€26", when: "Order by Thursday · arrives Saturday morning" },
    ingredients: [
      { name: "Mascarpone (cold, full fat)", qty: "500 g" },
      { name: "Very fresh eggs (pasteurised)", qty: "4" },
      { name: "Caster sugar", qty: "100 g" },
      { name: "Savoiardi (Italian ladyfingers)", qty: "300 g" },
      { name: "Strong espresso, cold", qty: "300 ml" },
      { name: "Bitter cocoa powder", qty: "for dusting" }
    ],
    steps: [
      "<strong>Make 4 espressi.</strong> Brew them, sweeten lightly only if you wish. Cool completely &mdash; warm coffee melts the savoiardi to mush.",
      "<strong>Yolks &amp; sugar.</strong> Whip 4 yolks with 80g sugar until pale, thick and tripled in volume. 5 minutes by hand, 3 with electric beaters.",
      "<strong>Mascarpone.</strong> Add the cold mascarpone in three turns. Fold gently, don't beat &mdash; the cream must stay light.",
      "<strong>Whip the whites.</strong> Whip 4 egg whites with a pinch of salt and 20g sugar to soft peaks. Fold into the mascarpone in three additions, from below up. Don't deflate.",
      "<strong>Layer.</strong> Dip each savoiardo in cold espresso for 1 second per side &mdash; they should be wet, not soaked. Layer in a glass dish: biscuits, cream, biscuits, cream. Two layers.",
      "<strong>Chill, then dust.</strong> 4 hours minimum in the fridge, overnight is better. Just before serving, dust generously with bitter cocoa through a fine sieve. Spoon vertically, all the way to the bottom."
    ],
    similar: ["cantucci", "cassata", "cappelletti-romagnoli"]
  },

  "cantucci": {
    title: "Cantucci alle mandorle",
    byNonna: "Nonna Giulia",
    region: "Siena, Toscana",
    category: "dolci",
    badge: "Dolci",
    hero: { src: "images/recipes/cantucci.jpg", alt: "Tuscan cantucci with almonds, beside a glass of vin santo" },
    meta: { time: "1h 15m", servings: "≈ 40 pieces", difficulty: "Easy" },
    storyHtml: "&ldquo;Giulia was a teacher in Prato. The cantucci were her end-of-school-year gift &mdash; one paper cone per child, tied with a ribbon. Twice baked, hard as a promise, soft only when dipped in Vin Santo. Almonds whole, never blanched &mdash; <em>la pellicina dà carattere</em>. The dough is shaped by hand, not measured.&rdquo;<br/><br/>&mdash; <em>Tommaso, her grandson</em>",
    basket: { title: "Nonna Giulia's Toscana basket", price: "€24", when: "Order by Thursday · arrives Saturday morning" },
    ingredients: [
      { name: "Flour 00", qty: "300 g" },
      { name: "Caster sugar", qty: "200 g" },
      { name: "Whole eggs", qty: "2" },
      { name: "Egg yolk (extra)", qty: "1" },
      { name: "Whole almonds, with skin", qty: "200 g" },
      { name: "Lemon zest, untreated", qty: "1" },
      { name: "Baking powder", qty: "5 g" },
      { name: "Salt", qty: "1 pinch" }
    ],
    steps: [
      "<strong>Mix dry.</strong> On a board, mound flour, sugar, baking powder, lemon zest, a pinch of salt. Make a well.",
      "<strong>Add eggs.</strong> Crack 2 whole eggs and 1 yolk in the well (keep the white for glaze). Fork them, then bring the flour in from the sides.",
      "<strong>Almonds in.</strong> Knead briefly. Add 200g whole almonds with their skin. Knead until evenly distributed &mdash; the dough is sticky, that's right.",
      "<strong>Shape logs.</strong> Divide in two. Shape into long logs, 4 cm wide, 2 cm tall. Lay on baking paper. Brush with the reserved egg white.",
      "<strong>First bake.</strong> 180°C / 350°F for 25 minutes, until golden. Remove. Cool 10 minutes.",
      "<strong>Slice and re-bake.</strong> With a serrated knife, cut diagonal slices 1.5 cm thick. Lay flat, return to the oven at 160°C / 320°F for 12&ndash;15 minutes, turning once. They should sound hollow. Cool fully, store airtight. Dip in Vin Santo."
    ],
    similar: ["tiramisu", "cassata", "taralli"]
  },

  "cassata": {
    title: "Cassata siciliana",
    byNonna: "Nonna Agata",
    region: "Palermo, Sicilia",
    category: "dolci",
    badge: "Dolci",
    hero: { src: "images/recipes/cassata.jpg", alt: "Sicilian cassata decorated with candied fruit" },
    meta: { time: "3h + chill", servings: "10", difficulty: "Hard" },
    storyHtml: "&ldquo;Agata's cassata is a baroque painting that you eat. The marzipan green of the Conca d'Oro, the white glaze of Palermo's churches, the candied fruit shining like the mosaics of Monreale. She makes it for Easter, for confirmations, for a daughter coming home from abroad. <em>&ldquo;È troppo&rdquo;</em>, we always say. <em>&ldquo;È giusto così&rdquo;</em>, she answers.&rdquo;<br/><br/>&mdash; <em>Davide, her grandson</em>",
    basket: { title: "Nonna Agata's Palermo basket", price: "€42", when: "Order by Thursday · arrives Saturday morning" },
    ingredients: [
      { name: "Sponge cake (pan di Spagna)", qty: "500 g" },
      { name: "Sheep's milk ricotta, drained", qty: "700 g" },
      { name: "Caster sugar", qty: "250 g" },
      { name: "Dark chocolate, in tiny chips", qty: "80 g" },
      { name: "Pistachio marzipan (green)", qty: "300 g" },
      { name: "Candied citrus fruit", qty: "150 g" },
      { name: "Marsala or orange-flower water", qty: "100 ml" },
      { name: "Icing sugar, for glaze", qty: "300 g" },
      { name: "Lemon juice", qty: "2 tbsp" }
    ],
    steps: [
      "<strong>The ricotta cream.</strong> Drain ricotta overnight in muslin in the fridge. Whip with 250g sugar until silky. Pass through a fine sieve. Fold in chocolate chips. Refrigerate.",
      "<strong>Line the mould.</strong> Roll the green pistachio marzipan thin (3 mm) on icing sugar. Cut a strip the height of your round mould (24 cm). Line the inside walls. Cut a disc of sponge cake for the base.",
      "<strong>Layer.</strong> Brush the sponge with Marsala diluted in water. Pour in half the ricotta cream. Add a second disc of sponge, brush again. Top with the rest of the cream. Close with a final disc of sponge. Press gently. Cover, refrigerate 4 hours.",
      "<strong>Unmould.</strong> Invert onto a serving plate. The marzipan now sits on the outside, smooth and pale green.",
      "<strong>The glaze.</strong> Whisk 300g icing sugar with 2 tbsp lemon juice and a few drops of water until thick and pourable. Pour over the top of the cassata, letting it slide down the sides. Smooth with a spatula.",
      "<strong>Decorate.</strong> Arrange candied citrus fruit on top in a baroque pattern &mdash; whole orange slices, citron, cherries. Refrigerate one more hour before slicing. Cut with a hot knife."
    ],
    similar: ["tiramisu", "cantucci", "arancini"]
  },

  "focaccia-di-recco": {
    title: "Focaccia di Recco",
    byNonna: "Nonna Pinuccia",
    region: "Recco, Liguria",
    category: "pani",
    badge: "Pani",
    hero: { src: "images/recipes/focaccia-di-recco.jpg", alt: "Focaccia di Recco with melted stracchino cheese" },
    meta: { time: "1h 30m", servings: "4", difficulty: "Medium" },
    storyHtml: "&ldquo;Pinuccia was born in Recco, twenty kilometres from Genova, where the focaccia is something else entirely &mdash; no yeast, two paper-thin layers of dough, stracchino in the middle, twenty seconds in a furnace. She taught me to stretch the dough in the air, like a pizzaiolo from Naples turned sailor. The cheese must <em>weep</em> through the cracks, never run.&rdquo;<br/><br/>&mdash; <em>Edoardo, her grandson</em>",
    basket: { title: "Nonna Pinuccia's Liguria basket", price: "€30", when: "Order by Thursday · arrives Saturday morning" },
    ingredients: [
      { name: "Flour 00 (or 0)", qty: "400 g" },
      { name: "Water, warm", qty: "200 ml" },
      { name: "Extra virgin olive oil (Ligurian)", qty: "40 ml + extra" },
      { name: "Fine salt", qty: "8 g" },
      { name: "Stracchino / crescenza cheese", qty: "500 g" }
    ],
    steps: [
      "<strong>The dough &mdash; no yeast.</strong> Mix flour, salt, oil, water. Knead 10 minutes until smooth and elastic. Divide in two equal balls. Brush with oil, cover, rest 1 hour at room temperature.",
      "<strong>Stretch the first layer.</strong> Roll one ball as thin as possible on a floured surface. Then lift it on the back of your hands and stretch it in the air, slowly, until it's almost transparent. Lay over a 32 cm oiled tray, letting it overhang.",
      "<strong>Stracchino in tufts.</strong> Tear the stracchino into walnut-sized pieces. Distribute them across the dough, keeping a 1 cm border free. No salt: the cheese is enough.",
      "<strong>Stretch the second layer.</strong> Repeat the stretching with the second ball. Lay it over the cheese, gently. Press the borders to seal. Tear away the excess overhang.",
      "<strong>Pinch the surface.</strong> With your fingertips, pinch holes in the top dough at random spots &mdash; this lets the steam escape. Drizzle generously with oil. A whisper of salt flakes on top.",
      "<strong>Hot, hot, fast.</strong> Bake at 270°C / 520°F (or as hot as your oven goes) for 7&ndash;9 minutes, until the surface is bubbling and dark gold in spots. Eat in the next 8 minutes, with your hands, standing in the kitchen."
    ],
    similar: ["piadina", "taralli", "pesto-genovese"]
  },

  "piadina": {
    title: "Piadina romagnola",
    byNonna: "Nonna Mirella",
    region: "Forlì, Romagna",
    category: "pani",
    badge: "Pani",
    hero: { src: "images/recipes/piadina.jpg", alt: "Romagna piadina folded around prosciutto and squacquerone" },
    meta: { time: "40m", servings: "6", difficulty: "Easy" },
    storyHtml: "&ldquo;Mirella has a cast iron <em>testo</em> hanging in her kitchen since 1970. The piadina is the bread of poor Romagna &mdash; flour, water, lard, salt, and the fire of the wood stove. No yeast. She rolls them thicker towards Cesenatico (the fishermen liked them sturdy), thinner here in Forlì. Filled with squacquerone and a leaf of rocket, it's all the lunch you need.&rdquo;<br/><br/>&mdash; <em>Nicola, her grandson</em>",
    basket: { title: "Nonna Mirella's Romagna basket", price: "€22", when: "Order by Thursday · arrives Saturday morning" },
    ingredients: [
      { name: "Flour 00", qty: "500 g" },
      { name: "Lard (strutto) at room temp", qty: "80 g" },
      { name: "Whole milk, lukewarm", qty: "150 ml" },
      { name: "Water, lukewarm", qty: "100 ml" },
      { name: "Fine salt", qty: "10 g" },
      { name: "Baking soda (optional)", qty: "1 tsp" }
    ],
    steps: [
      "<strong>Mix dry.</strong> Mound flour with salt and (if using) baking soda on a board.",
      "<strong>Fat first.</strong> Make a well. Add the lard. Rub it into the flour with your fingertips until sandy.",
      "<strong>Liquids.</strong> Pour in milk and water gradually. Knead 8 minutes until smooth. Wrap, rest 30 minutes.",
      "<strong>Divide.</strong> Cut into 6 balls (90&ndash;100 g each). Cover with a cloth.",
      "<strong>Roll thin.</strong> Each ball, with a wooden pin, into a 22 cm disc &mdash; 2 mm thick. Pierce randomly with a fork.",
      "<strong>Cook on the testo.</strong> A dry cast-iron pan, hot. 90 seconds per side, until pale gold with brown spots. Stack in a clean cloth to keep warm. Fold around prosciutto crudo, squacquerone and a leaf of rocket. Eat warm."
    ],
    similar: ["focaccia-di-recco", "taralli", "cappelletti-romagnoli"]
  },

  "taralli": {
    title: "Taralli pugliesi al finocchietto",
    byNonna: "Nonna Angela",
    region: "Bari, Puglia",
    category: "pani",
    badge: "Pani",
    hero: { src: "images/recipes/taralli.jpg", alt: "Pugliese taralli with fennel seeds in a linen napkin" },
    meta: { time: "1h 30m", servings: "≈ 50 pieces", difficulty: "Easy" },
    storyHtml: "&ldquo;Angela makes taralli in batches of three hundred, every two weeks, for the whole condominium. Boiled first, then baked. The wild fennel seeds (<em>finocchietto selvatico</em>) come from the side of the road on the way to Polignano &mdash; she stops, picks, dries them on a cloth on the balcony. With a glass of Primitivo at sundown, they are the calmest aperitivo on earth.&rdquo;<br/><br/>&mdash; <em>Gianni, her grandson</em>",
    basket: { title: "Nonna Angela's Puglia basket", price: "€20", when: "Order by Thursday · arrives Saturday morning" },
    ingredients: [
      { name: "Flour 00", qty: "500 g" },
      { name: "Dry white wine", qty: "150 ml" },
      { name: "Extra virgin olive oil", qty: "120 ml" },
      { name: "Wild fennel seeds", qty: "1 tbsp" },
      { name: "Fine salt", qty: "10 g" },
      { name: "Black pepper (optional)", qty: "1 tsp" }
    ],
    steps: [
      "<strong>The dough.</strong> Mix flour, salt, fennel seeds. Add wine and oil. Knead 10 minutes until smooth and firm. Wrap, rest 30 minutes.",
      "<strong>Shape.</strong> Roll thin ropes (1 cm thick). Cut 8 cm pieces. Form rings, sealing the ends with a press of the thumb. Lay on a cloth.",
      "<strong>Boil.</strong> Bring a wide pot of water to the boil. Drop the taralli, in batches. Wait until they float (≈ 30 seconds). Lift with a slotted spoon onto a clean cloth.",
      "<strong>Dry briefly.</strong> Pat dry, let rest 5 minutes &mdash; this is what gives the bite.",
      "<strong>Bake.</strong> 180°C / 350°F on baking paper, 25 minutes, until deep gold. Turn once, halfway. They should sound hollow when tapped.",
      "<strong>Cool fully.</strong> Crisp up as they cool. Store in a glass jar with a clove of bay leaf. They keep three weeks &mdash; if they survive the first evening."
    ],
    similar: ["focaccia-di-recco", "piadina", "orecchiette-cime-di-rapa"]
  },

  "arancini": {
    title: "Arancini al ragù",
    byNonna: "Nonna Rosalia",
    region: "Palermo, Sicilia",
    category: "street",
    badge: "Street food",
    hero: { src: "images/recipes/arancini.jpg", alt: "Sicilian arancini with ragù filling, golden crust" },
    meta: { time: "3h 30m", servings: "10 pieces", difficulty: "Hard" },
    storyHtml: "&ldquo;In Palermo, Rosalia disagrees with Catania about the gender (<em>arancinA</em>, she insists, feminine, like a small orange) and about the shape (round, not pointed). The rice is cooked in saffron broth like a risotto, then stuffed with a long ragù made the day before. The breadcrumbs are home-toasted. They are the breakfast of every market porter in the Vucciria.&rdquo;<br/><br/>&mdash; <em>Andrea, her grandson</em>",
    basket: { title: "Nonna Rosalia's Palermo basket", price: "€36", when: "Order by Thursday · arrives Saturday morning" },
    ingredients: [
      { name: "Carnaroli or Vialone rice", qty: "500 g" },
      { name: "Hot beef broth", qty: "1.2 L" },
      { name: "Saffron threads", qty: "1 sachet" },
      { name: "Butter", qty: "50 g" },
      { name: "Parmigiano-Reggiano", qty: "60 g" },
      { name: "Beef ragù (made the day before)", qty: "400 g" },
      { name: "Frozen peas, blanched", qty: "100 g" },
      { name: "Caciocavallo, in small cubes", qty: "100 g" },
      { name: "Eggs", qty: "3" },
      { name: "Flour, breadcrumbs", qty: "for coating" },
      { name: "Frying oil (peanut)", qty: "for deep frying" }
    ],
    steps: [
      "<strong>Saffron risotto base.</strong> Cook the rice in hot broth with saffron, stirring like a risotto, until the liquid is absorbed (15 minutes). Mantecare with butter and Parmigiano. Spread on a tray, cool completely.",
      "<strong>The filling.</strong> Mix the cold ragù with peas. Cube the caciocavallo separately. Both must be cold before stuffing.",
      "<strong>Shape.</strong> Wet your palms in cold water. Take 100g of cold rice, flatten it. A spoon of ragù in the centre, two cubes of cheese. Cover with another 30g of rice. Close into a ball &mdash; round, the size of a small orange.",
      "<strong>Three coats.</strong> Roll in flour, dip in beaten egg, roll in breadcrumbs. Press firmly. Refrigerate the arancini 30 minutes &mdash; this prevents bursting.",
      "<strong>Fry.</strong> Oil at 175°C / 350°F. Fry 2&ndash;3 at a time, 4 minutes, until deep gold all around. Drain on paper.",
      "<strong>Serve standing up.</strong> Hold by a paper napkin, bite from the top. The cheese must pull a thread when you split one in two."
    ],
    similar: ["panzerotti", "cassata", "caponata"]
  },

  "panzerotti": {
    title: "Panzerotti pugliesi",
    byNonna: "Nonna Marta",
    region: "Bari, Puglia",
    category: "street",
    badge: "Street food",
    hero: { src: "images/recipes/panzerotti.jpg", alt: "Fried panzerotti, golden, cut open showing mozzarella and tomato" },
    meta: { time: "2h 30m", servings: "8 pieces", difficulty: "Medium" },
    storyHtml: "&ldquo;Marta makes panzerotti on rainy Saturdays in Bari, when the family stays inside and the kitchen window steams up. The dough is the same as pizza, the filling is the simplest possible &mdash; tomato, mozzarella, a leaf of basil. Frying is the trick: oil at the right temperature, two minutes, never longer. The first one is always for the cook.&rdquo;<br/><br/>&mdash; <em>Pietro, her grandson</em>",
    basket: { title: "Nonna Marta's Bari basket", price: "€26", when: "Order by Thursday · arrives Saturday morning" },
    ingredients: [
      { name: "Flour 00", qty: "500 g" },
      { name: "Water, warm", qty: "300 ml" },
      { name: "Fresh yeast", qty: "10 g (or 3 g dry)" },
      { name: "Extra virgin olive oil", qty: "20 ml" },
      { name: "Fine salt", qty: "10 g" },
      { name: "Mozzarella fior di latte, drained", qty: "300 g" },
      { name: "Tomato passata", qty: "200 g" },
      { name: "Basil, oregano, salt", qty: "q.b." },
      { name: "Frying oil (peanut)", qty: "for deep frying" }
    ],
    steps: [
      "<strong>The dough.</strong> Dissolve yeast in warm water. Mix with flour, oil and salt. Knead 12 minutes until smooth. Cover, rise 90 minutes until doubled.",
      "<strong>Prep filling.</strong> Cube mozzarella, drain in a sieve 30 minutes (the water inside is the enemy). Mix passata with a pinch of salt, oregano, basil. Don't pre-cook.",
      "<strong>Divide.</strong> Punch down the dough. Cut into 8 balls (≈ 90 g each). Cover, rest 15 minutes.",
      "<strong>Fill.</strong> Roll each ball into a 14 cm disc. Place a spoon of tomato and a small handful of mozzarella in the centre, off to one side. Don't overfill.",
      "<strong>Seal tight.</strong> Fold in half. Press the borders firmly with a fork &mdash; if any filling escapes during frying, the oil will spit. Patch any holes.",
      "<strong>Fry.</strong> Oil at 180°C / 360°F. Fry two at a time, 90 seconds per side, until deep gold and puffed. Drain. Eat hot, carefully &mdash; the inside is lava."
    ],
    similar: ["arancini", "focaccia-di-recco", "parmigiana"]
  },

  "pesto-genovese": {
    title: "Trenette al pesto",
    byNonna: "Nonna Rita",
    region: "Genova, Liguria",
    category: "primi",
    badge: "Primi",
    hero: { src: "images/recipes/pesto-genovese.jpg", alt: "Trenette pasta with pesto, green beans and potatoes" },
    meta: { time: "30m", servings: "4", difficulty: "Easy" },
    storyHtml: "&ldquo;Rita owns a marble mortar her father bought in Carrara in 1958. <em>Pesto</em> means &lsquo;pounded&rsquo; &mdash; never blended. The blade of a blender heats the basil and turns it black. The basil must be Genovese DOP, picked young, before flowering. The trick passed down: a pinch of coarse salt on the basil while pounding helps the leaves break without bruising. Trenette, with potatoes and green beans cooked in the same water.&rdquo;<br/><br/>&mdash; <em>Federico, her grandson</em>",
    basket: { title: "Nonna Rita's Genova basket", price: "€28", when: "Order by Thursday · arrives Saturday morning" },
    ingredients: [
      { name: "Trenette (or linguine)", qty: "400 g" },
      { name: "Genovese basil, young leaves", qty: "60 g" },
      { name: "Pine nuts", qty: "30 g" },
      { name: "Garlic, Vessalico if possible", qty: "1 small clove" },
      { name: "Pecorino Sardo, grated", qty: "30 g" },
      { name: "Parmigiano-Reggiano, grated", qty: "60 g" },
      { name: "Extra virgin olive oil (Ligurian)", qty: "100 ml" },
      { name: "Coarse salt", qty: "1 pinch + for water" },
      { name: "Small new potatoes", qty: "150 g" },
      { name: "Green beans, trimmed", qty: "150 g" }
    ],
    steps: [
      "<strong>Wash and dry the basil.</strong> Rinse leaves, lay on a cloth, pat dry. They must be bone-dry or the pesto turns watery.",
      "<strong>Mortar &amp; pestle, in order.</strong> First: garlic and a pinch of coarse salt &mdash; pound to paste. Second: pine nuts &mdash; pound to cream.",
      "<strong>Then the basil.</strong> Add basil leaves a handful at a time. Pound with a circular motion against the walls of the mortar &mdash; never down. The colour must stay bright green.",
      "<strong>Cheeses last.</strong> Add pecorino and parmigiano. Stir, don't pound. Then drizzle the oil in a thin stream while turning the pestle. The pesto should be loose but not liquid.",
      "<strong>The pasta &amp; vegetables.</strong> Boil potatoes in salted water for 8 minutes. Add green beans for 4 more. Add trenette for the time on the box. They all finish together.",
      "<strong>Mantecate off the heat.</strong> Drain (reserve a ladle of water). Toss in a warm bowl with the pesto and a spoonful of the cooking water &mdash; never on the flame. The pesto must stay raw."
    ],
    similar: ["orecchiette-cime-di-rapa", "focaccia-di-recco", "cappelletti-romagnoli"]
  },

  "parmigiana": {
    title: "Parmigiana di melanzane",
    byNonna: "Nonna Assunta",
    region: "Napoli, Campania",
    category: "secondi",
    badge: "Secondi",
    hero: { src: "images/recipes/parmigiana.jpg", alt: "Aubergine parmigiana, golden top, melted mozzarella" },
    meta: { time: "2h", servings: "6", difficulty: "Medium" },
    storyHtml: "&ldquo;Assunta makes the parmigiana the day before. <em>Sempre</em>. It needs to settle, like a story you tell twice. Aubergines fried, never grilled (Napoli, not Sicilia). The tomato is San Marzano, simmered slowly with basil, no onion, no garlic. The mozzarella is fior di latte, drained, never buffalo &mdash; too wet. Layered low, baked golden, eaten cold the next day, in the garden with a glass of Greco di Tufo.&rdquo;<br/><br/>&mdash; <em>Sara, her granddaughter</em>",
    basket: { title: "Nonna Assunta's Napoli basket", price: "€32", when: "Order by Thursday · arrives Saturday morning" },
    ingredients: [
      { name: "Aubergines, long and firm", qty: "1.2 kg" },
      { name: "San Marzano tomato passata", qty: "800 g" },
      { name: "Fior di latte mozzarella, drained", qty: "400 g" },
      { name: "Parmigiano-Reggiano, grated", qty: "120 g" },
      { name: "Basil, fresh", qty: "1 bunch" },
      { name: "Frying oil (peanut)", qty: "for deep frying" },
      { name: "Extra virgin olive oil", qty: "3 tbsp" },
      { name: "Salt", qty: "q.b." }
    ],
    steps: [
      "<strong>Salt the aubergines.</strong> Slice 6 mm thick, lengthwise. Salt heavily, layer in a colander, weight on top. 1 hour. Rinse, pat dry &mdash; this removes bitterness and excess water.",
      "<strong>The tomato.</strong> Warm 3 tbsp olive oil. Pour the passata, salt, half the basil. Simmer uncovered 35 minutes on low until slightly thick. Discard the basil.",
      "<strong>Fry, don't grill.</strong> Heat frying oil to 175°C / 350°F. Fry the aubergine slices 90 seconds per side, until pale gold. Drain on paper. Don't be afraid of the oil: a Napoli parmigiana that's not fried is not a parmigiana.",
      "<strong>Drain the mozzarella.</strong> Tear into thin shreds. Lay on a cloth in the fridge 30 minutes &mdash; the water is the enemy.",
      "<strong>Layer low.</strong> Oil a 28 cm baking dish. Layer: tomato, aubergines, mozzarella, parmigiano, fresh basil. Repeat three times. Finish with tomato and a generous parmigiano crust.",
      "<strong>Bake, then wait.</strong> 180°C / 360°F for 35 minutes, until the top is bubbling and dark. Rest 1 hour at room temperature before slicing &mdash; or, ideally, the next day. Serve at room temperature."
    ],
    similar: ["caponata", "peperonata", "saltimbocca"]
  }

};
