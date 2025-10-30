
import type { NarrativeUniverses } from './types';

export const JEWELRY_TYPES = [
    { value: 'collana', label: 'Collana' },
    { value: 'orecchini', label: 'Orecchini' },
    { value: 'bracciale', label: 'Bracciale' },
    { value: 'anello', label: 'Anello' },
    { value: 'spilla', label: 'Spilla' },
    { value: 'cavigliera', label: 'Cavigliera' }
];

export const CHARACTER_SCENARIOS = [
    { value: 'studio', label: 'Studio Fotografico' },
    { value: 'lifestyle', label: 'Lifestyle Mediterraneo' },
    { value: 'fashion', label: 'Fashion Editorial' },
    { value: 'luxury', label: 'Luxury Hotel' },
    { value: 'nature', label: 'Natura e Mare' }
];

export const NARRATIVE_UNIVERSES: NarrativeUniverses = {
    positano_bouganville: {
        name: "Positano - Cascata di Bouganville",
        category: "Costiera Italiana",
        tags: ["positano", "costiera", "amalfitana", "bouganville", "fucsia", "terrazza", "mare", "limoni", "romantico", "tramonto", "vacanza", "mediterraneo", "eleganza"],
        worn_detail_hint: "donna con pelle naturale realistica (texture visibile, abbronzatura dorata, pori), bouganville fucsia cascanti, mare azzurro sfocato",
        portrait_prompt: "Ritratto donna su terrazza Positano, pelle iperrealistica con texture naturale e pori visibili, {JEWELRY_TYPE} protagonista, bouganville fucsia rampicanti, abito lino bianco mosso da brezza marina, mare cobalto e case colorate sfocate sfondo. Luce golden hour calda laterale. Stile editoriale Vogue. --ar 2:3",
        gesture_prompt: "Mani femminili con pelle realistica (venature delicate, abbronzatura naturale), {JEWELRY_TYPE} scintillante, raccolgono limone maturo da albero in vaso terracotta anticato, foglie verdi lucide, petali bouganville fucsia. Luce naturale morbida filtrata da tenda lino. --ar 2:3",
        atmosphere_prompt: "{JEWELRY_TYPE} su ringhiera ferro battuto bianco screpolato dal sole, petali bouganville fucsia freschi sparsi, bicchiere limonata con condensa e fetta limone, mare azzurro sfocato sfondo. Luce solare diretta golden hour. --ar 1:1",
        still_life_1_prompt: "{JEWELRY_TYPE} su piastrella ceramica Vietri dipinta a mano motivo limoni, due limoni Amalfi IGP (uno intero lucido, uno tagliato mostra polpa), fiore ibisco rosa, tovaglietta lino grezzo. Luce laterale morbida finestra. Sfondo crema #FCFCF9. --ar 1:1",
        still_life_2_prompt: "{JEWELRY_TYPE} su tovaglia lino bianco grezzo (texture trama visibile), ombra netta foglie limone proiettata dal sole, singolo fiore zagara profumato, pagine libro poesie Neruda ingiallite. Dettagli nitidi. --ar 4:5"
    },
    capri_faraglioni: {
        name: "Capri - Riflessi dei Faraglioni",
        category: "Costiera Italiana",
        tags: ["capri", "faraglioni", "mare", "cristallino", "blu", "gozzo", "barca", "esclusivo", "glamour", "estate", "dolcevita", "caprese"],
        worn_detail_hint: "donna con pelle realistica (texture naturale, lentiggini sole), gozzo caprese bianco, faraglioni mare turchese",
        portrait_prompt: "Donna elegante su gozzo caprese legno bianco, pelle iperrealistica con lentiggini estive e texture naturale visibile, {JEWELRY_TYPE} chic, camicia lino azzurro chiaro, cappello paglia, Faraglioni rocciosi mare turchese cristallino sfocati. Luce riflessa acqua illumina viso dal basso. --ar 2:3",
        gesture_prompt: "Mani curate con pelle realistica (articolazioni delicate, unghie naturali), {JEWELRY_TYPE} elegante, sfiorano acqua cristallina turchese trasparente da bordo gozzo legno bianco consumato sale, piccole onde dolci. Momento contemplativo. --ar 2:3",
        atmosphere_prompt: "{JEWELRY_TYPE} su corda nautica grossa arrotolata (fibre naturali visibili, texture ruvida), stella marina essiccata color sabbia, legno barca schiarito sole con venature, riflessi azzurri acqua. Luce indiretta riflessa. --ar 1:1",
        still_life_1_prompt: "{JEWELRY_TYPE} su tavola legno barca decapato bianco (screpolature autentiche, nodi legno), conchiglia madreperla iridescente, ciuffo alghe marine essiccate, foulard seta color oceano piegato. Luce naturale diffusa. Sfondo blu #13343B. --ar 1:1",
        still_life_2_prompt: "{JEWELRY_TYPE} su velluto blu oceano profondo (trama pelo visibile), tre perle barocche irregolari (superficie imperfetta naturale), frammento corallo rosa levigato, libro navigazione vintage cuoio. --ar 4:5"
    },
    taormina_etna: {
        name: "Taormina - Vista Etna e Mare Ionio",
        category: "Costiera Italiana",
        tags: ["taormina", "sicilia", "etna", "mare", "ionio", "pietra", "antico", "greco", "vulcano", "tramonto", "maestoso", "mediterraneo"],
        worn_detail_hint: "donna con pelle mediterranea realistica (tonalità calda, texture naturale), terrazza pietra lavica, Etna innevato",
        portrait_prompt: "Donna su terrazza pietra lavica Taormina, pelle iperrealistica mediterranea texture calda naturale, {JEWELRY_TYPE} prezioso, abito lungo lino terracotta mosso brezza, Etna innevato maestoso e mare Ionio blu cobalto sfondo. Luce golden hour radente drammatica. --ar 2:3",
        gesture_prompt: "Mano femminile con pelle realistica (texture naturale, bracciale abbronzatura), {JEWELRY_TYPE} elegante, sfiora pietra lavica nera porosa antica (superficie ruvida vulcanica), bouganville fucsia, mare sfocato. Connessione tellurica. --ar 2:3",
        atmosphere_prompt: "{JEWELRY_TYPE} su pietra lavica nera (superficie porosa vulcanica, texture unica), rametto alloro siciliano argentato, fico d'india maturo tagliato (polpa arancio magenta), mare e vulcano sfocati. Luce tramonto calda. --ar 1:1",
        still_life_1_prompt: "{JEWELRY_TYPE} su ceramica Caltagirone dipinta a mano (decorazione testa di moro, colori vivaci blu oro verde), limone siciliano con foglie, mandorla sgusciata, tovaglietta lino grezzo. Luce laterale netta. --ar 1:1",
        still_life_2_prompt: "{JEWELRY_TYPE} su velluto color melanzana #5A476B (pelo corto trama visibile), frammento pietra lavica levigata nera, chicco pistacchio Bronte verde brillante, filo seta oro #D4B68A. --ar 4:5"
    },
    cinque_terre_vigneti: {
        name: "Cinque Terre - Vigneti a Picco sul Mare",
        category: "Costiera Italiana",
        tags: ["cinque", "terre", "liguria", "vigneti", "mare", "terrazzamenti", "picco", "scogliera", "uva", "tramonto", "fatica", "bellezza"],
        worn_detail_hint: "donna con pelle realistica (texture naturale, gocce sudore), vigneto terrazzato, mare ligure turchese",
        portrait_prompt: "Donna tra vigneti terrazzati Cinque Terre, pelle iperrealistica con texture naturale e luminosità sole, {JEWELRY_TYPE} semplice elegante, canotta lino color sabbia, tra tralci vite carichi uva, mare Ligure turchese verticale sotto, case colorate Vernazza sfocate. Luce pomeriggio estate intensa. --ar 2:3",
        gesture_prompt: "Mani con pelle realistica (polpastrelli, linee palmo), {JEWELRY_TYPE} visibile, raccolgono grappolo uva bianca Bosco (acini dorati traslucidi al sole, foglia vite verde), muretto pietra a secco, mare verticale sfondo. --ar 2:3",
        atmosphere_prompt: "{JEWELRY_TYPE} su muretto pietra a secco (pietre irregolari incastrate, licheni gialli), grappolo uva penzolante, cappello paglia contadino, mare turchese scintillante sotto. Luce zenitale forte. --ar 1:1",
        still_life_1_prompt: "{JEWELRY_TYPE} su tavola legno rustico (venature evidenti, consumata), bottiglia vino Sciacchetrà mezza piena, bicchiere cristallo con vino ambrato, grappolo uva passita, tovaglietta lino. Luce calda sera. --ar 1:1",
        still_life_2_prompt: "{JEWELRY_TYPE} su tela sacco iuta grezza (trama tessuto rustica visibile), chicchi uva passa dorati, foglia vite secca nervature evidenti, filo ferro legatura vite arrugginito. Materico agricolo. --ar 4:5"
    },
    procida_case_colorate: {
        name: "Procida - Arcobaleno di Case Pastello",
        category: "Costiera Italiana",
        tags: ["procida", "isola", "case", "colorate", "pastello", "porto", "pescatori", "barche", "romantico", "primavera", "napoli", "golfo"],
        worn_detail_hint: "donna con pelle realistica (texture naturale, incarnato luminoso), case pastello azzurro rosa giallo, porto peschereccio",
        portrait_prompt: "Donna su terrazza vista porto Procida, pelle iperrealistica texture luminosa naturale, {JEWELRY_TYPE} delicato, abito lino rosa cipria, case colorate pastello (azzurro, giallo, rosa, verde acqua) affacciate mare sfocate sfondo, barche pescarecce. Luce mattino primavera morbida. --ar 2:3",
        gesture_prompt: "Mani femminili con pelle realistica (venature sottili, unghie curate naturali), {JEWELRY_TYPE} romantico, sistemano bouquet margherite di campo e fiori limone bianchi, carta kraft, case colorate sfocate. Gesto spontaneo. --ar 2:3",
        atmosphere_prompt: "{JEWELRY_TYPE} su persiana legno azzurro pastello screpolata (vernice scrostata sole sale, texture autentica), vaso terracotta con geranio rosso, corda marinara arrotolata, mare calmo. Luce screziata. --ar 1:1",
        still_life_1_prompt: "{JEWELRY_TYPE} su mattonella maiolica dipinta a mano motivo limoni (azzurro giallo verde pastello), mazzo piccolo margherite campo, limone con foglie, tovaglietta lino color crema #FCFCF9. Luce naturale. --ar 1:1",
        still_life_2_prompt: "{JEWELRY_TYPE} su tessuto cotone righe marinare (bianco e azzurro pastello, trama visibile), conchiglia piccola madreperla, bottone madreperla vintage, filo cotone azzurro. Delicato. --ar 4:5"
    },
    portofino_caletta: {
        name: "Portofino - Caletta Nascosta",
        category: "Costiera Italiana",
        tags: ["portofino", "liguria", "caletta", "scogli", "mare", "cristallino", "nascosta", "esclusivo", "pini", "mediterraneo", "chic", "glamour"],
        worn_detail_hint: "donna con pelle realistica (texture bagnata mare, gocce acqua), scogli, mare verde smeraldo cristallino",
        portrait_prompt: "Donna su scogli caletta nascosta Portofino, pelle iperrealistica con gocce acqua mare e texture naturale visibile, {JEWELRY_TYPE} waterproof chic, costume intero bianco, capelli umidi sale marino, mare verde smeraldo cristallino trasparente, pini marittimi roccia. Luce mezzogiorno intensa riflessa acqua. --ar 2:3",
        gesture_prompt: "Mani con pelle realistica (umida mare, polpastrelli rugosi acqua), {JEWELRY_TYPE} resistente acqua, emergono da acqua cristallina verde smeraldo (trasparenza totale vede fondale roccioso), gocce scintillanti. Momento estivo. --ar 2:3",
        atmosphere_prompt: "{JEWELRY_TYPE} su roccia liscia grigia levigata mare (superficie asciutta sole, pozze acqua), asciugamano lino righe bianco verde, occhiali sole, libro tascabile, mare calmo. Luce diretta forte. --ar 1:1",
        still_life_1_prompt: "{JEWELRY_TYPE} su tavola legno teak yacht (venature scure, superficie marina trattata), foulard seta Hermès motivo catene (colori oro verde), occhiali sole tartarugati, calice Vermentino ghiacciato condensa. Luxury mare. --ar 1:1",
        still_life_2_prompt: "{JEWELRY_TYPE} su lino mare bianco ottico (trama tessuto visibile, candido), corda marinara intrecciata bianca-blu, nodo savoia perfetto, conchiglia cowrie lucida, sale marino grosso. --ar 4:5"
    },
    sardegna_calagoloritzè: {
        name: "Sardegna - Cala Goloritze Turchese",
        category: "Isole Mediterranee",
        tags: ["sardegna", "cala", "goloritze", "turchese", "spiaggia", "sarda", "pinnacolo", "calcare", "smeraldo", "paradiso", "selvaggio"],
        worn_detail_hint: "donna con pelle realistica (abbronzatura mediterranea, texture naturale), acqua turchese innaturale, spiaggia sassolini bianchi",
        portrait_prompt: "Donna su spiaggia Cala Goloritze, pelle iperrealistica abbronzatura naturale texture visibile, {JEWELRY_TYPE} marino, pareo lino turchese, sassolini bianchi calcari sotto piedi nudi, acqua turchese surreale trasparente, Pinnacolo calcare bianco maestoso sfondo. Luce mezzogiorno brillante. --ar 2:3",
        gesture_prompt: "Mani con pelle realistica (abbronzatura intensa, texture naturale), {JEWELRY_TYPE} protagonista, raccolgono sassolino calcare bianco levigato mare (forma tonda perfetta), acqua turchese bagna polsi, altri ciottoli. Gesto meditativo. --ar 2:3",
        atmosphere_prompt: "{JEWELRY_TYPE} su sasso calcare bianco piatto (superficie liscia mare), conchiglia madreperla, alga secca, acqua turchese trasparente lambisce bordo, riflessi smeraldo. Luce intensa zenitale. --ar 1:1",
        still_life_1_prompt: "{JEWELRY_TYPE} su tavola legno ginepro sardo nodoso (venature tortuose, profumo resina), tre sassolini bianchi levigati, rametto mirto sardo con bacche blu, tovaglietta lino grezzo. Sfondo turchese #13343B. --ar 1:1",
        still_life_2_prompt: "{JEWELRY_TYPE} su lino color sabbia (trama grezza visibile), sale marino Sardegna grosso cristalli irregolari, conchiglia Pecten jacobaeus, filo alghe essiccate, quarzo bianco. Marino essenziale. --ar 4:5"
    },
    eolie_vulcano: {
        name: "Eolie - Fanghi di Vulcano",
        category: "Isole Mediterranee",
        tags: ["eolie", "vulcano", "fanghi", "termale", "zolfo", "nero", "spiaggia", "nera", "benessere", "selvaggio", "sicilia", "lipari"],
        worn_detail_hint: "donna con pelle realistica (texture naturale, maschera fango termale), spiaggia nera vulcanica, fumarole",
        portrait_prompt: "Donna su spiaggia nera Vulcano Eolie, pelle iperrealistica texture naturale (maschera fango termale grigio sul viso), {JEWELRY_TYPE} resistente, costume nero, sabbia vulcanica nera fine, fumarole vapore sfondo, mare blu cobalto contrasto. Luce intensa riflessa sabbia scura. --ar 2:3",
        gesture_prompt: "Mani con pelle realistica (texture naturale, fango termale grigio), {JEWELRY_TYPE} waterproof, raccolgono fango termale caldo (consistenza cremosa grigia, vapore), pozza acqua termale fumante, sabbia nera vulcanica. Rituale benessere. --ar 2:3",
        atmosphere_prompt: "{JEWELRY_TYPE} su pietra pomice grigia (superficie porosa leggerissima, texture spugnosa), cristalli zolfo gialli naturali, argilla verde secca, vapore fumarola sfocato sfondo. Luce calda geotermale. --ar 1:1",
        still_life_1_prompt: "{JEWELRY_TYPE} su vassoio ardesia nera vulcanica (superficie opaca granulosa), ciotola ceramica con argilla verde Eolie, sale nero vulcanico, rametto cappero fiore violetto, asciugamano lino grezzo. Wellness. --ar 1:1",
        still_life_2_prompt: "{JEWELRY_TYPE} su tessuto lino nero (trama visibile), sabbia vulcanica nera finissima, ossidiana levigata nera lucida (superficie vetro vulcanico), cristallo zolfo giallo, vapore. Tellurico. --ar 4:5"
    },
    lampedusa_conigli: {
        name: "Lampedusa - Isola dei Conigli",
        category: "Isole Mediterranee",
        tags: ["lampedusa", "isola", "conigli", "caraibico", "turchese", "tartarughe", "caretta", "sabbia", "bianca", "paradiso", "trasparente"],
        worn_detail_hint: "donna con pelle realistica (texture naturale, protezione solare), acqua turchese caraibica irreale, sabbia bianchissima",
        portrait_prompt: "Donna sulla spiaggia Isola dei Conigli Lampedusa, pelle iperrealistica texture naturale con crema solare visibile, {JEWELRY_TYPE} marino minimal, bikini bianco, sabbia bianchissima finissima, acqua turchese caraibica trasparente innaturale, nido tartaruga Caretta protetto sfondo. Luce tropicale intensa. --ar 2:3",
        gesture_prompt: "Mani con pelle realistica (texture naturale, granelli sabbia aderenti), {JEWELRY_TYPE} delicato, lasciano impronte su sabbia bianca finissima come talco, onda acqua cristallina turchese cancella tracce. Effimero. --ar 2:3",
        atmosphere_prompt: "{JEWELRY_TYPE} su conchiglia gigante rosa (Charonia tritonis, interno madreperla iridescente), sabbia bianca finissima, acqua turchese trasparente riflette cielo, stella marina arancio. Paradisiaco. --ar 1:1",
        still_life_1_prompt: "{JEWELRY_TYPE} su tavola legno bianco decapato (effetto sbiancato sole sale), conchiglia cowrie lucida, dollaro della sabbia (riccio mare piatto), corallo bianco, tovaglietta lino color crema #FCFCF9. Tropicale mediterraneo. --ar 1:1",
        still_life_2_prompt: "{JEWELRY_TYPE} su mussola cotone bianco (trama leggerissima visibile, trasparenza), madreperla iridescente frammento, sabbia bianca finissima, perla barocca bianca irregolare. Purezza marina. --ar 4:5"
    },
    ponza_chiaia_luna: {
        name: "Ponza - Grotta della Maga Circe",
        category: "Isole Mediterranee",
        tags: ["ponza", "grotta", "circe", "maga", "mitologia", "turchese", "scogliere", "faraglioni", "lazio", "odissea", "magico"],
        worn_detail_hint: "donna con pelle realistica (texture naturale, riflessi azzurri acqua), grotta rocciosa, luce riflessa turchese magica",
        portrait_prompt: "Donna all'ingresso Grotta di Circe Ponza, pelle iperrealistica texture naturale con riflessi azzurri luce acqua dal basso, {JEWELRY_TYPE} mitologico, abito lino bianco vaporoso, roccia vulcanica bianca, luce magica riflessa acqua turchese grotta crea atmosfera fiabesca. Evocativo Odissea. --ar 2:3",
        gesture_prompt: "Mano femminile con pelle realistica (riflessi turchesi acqua, texture naturale), {JEWELRY_TYPE} prezioso, sfiora parete roccia vulcanica levigata mare (superficie fredda umida, licheni), luce azzurra grotta, acqua turchese sotto. Connessione mitologica. --ar 2:3",
        atmosphere_prompt: "{JEWELRY_TYPE} su roccia vulcanica bianca (superficie porosa, cristalli feldspato), ramo mirto selvatico (pianta sacra Circe), conchiglia murex (porpora antica), luce turchese riflessa acqua grotta. Magico. --ar 1:1",
        still_life_1_prompt: "{JEWELRY_TYPE} su pietra pomice bianca levigata (superficie morbida porosa), libro Odissea Omero aperto pagina Circe, rametto alloro, conchiglia nautilus tagliata mostra spirale, candela cera. Mitologico. --ar 1:1",
        still_life_2_prompt: "{JEWELRY_TYPE} su velluto blu notte (pelo corto trama visibile), frammento vetro mare verde smeraldo levigato, stella marina secca bianca, filo argento 925, polvere madreperla iridescente. --ar 4:5"
    },
    ischia_sant_angelo: {
        name: "Ischia - Borgo di Sant'Angelo",
        category: "Isole Mediterranee",
        tags: ["ischia", "sant", "angelo", "borgo", "pescatori", "terme", "sorgenti", "calde", "benessere", "romantico", "napoletano", "golfo"],
        worn_detail_hint: "donna con pelle realistica (texture rilassata benessere, incarnato roseo), borgo pescatori colorato, mare calmo",
        portrait_prompt: "Donna su terrazza vista borgo Sant'Angelo Ischia, pelle iperrealistica texture naturale rilassata (incarnato roseo post-terme), {JEWELRY_TYPE} delicato, accappatoio lino bianco, case pescatori colorate abbracciano baia calma, isolotto roccioso collegato, mare turchese tranquillo. Luce pomeriggio dorata benessere. --ar 2:3",
        gesture_prompt: "Mani con pelle realistica (texture morbida idratata, unghie curate), {JEWELRY_TYPE} elegante, immergono dita in pozza acqua termale naturale calda (vapore leggero, minerali), roccia vulcanica, mare sfondo. Rituale curativo. --ar 2:3",
        atmosphere_prompt: "{JEWELRY_TYPE} su roccia termale calda (superficie levigata acqua minerale, vapore sale), asciugamano lino bianco arrotolato, fiore bouganville fucsia, sale termale grosso cristalli, mare calmo. Benessere. --ar 1:1",
        still_life_1_prompt: "{JEWELRY_TYPE} su vassoio ceramica vietrese (decorazione blu cobalto a mano), ciotola sale termale Ischia, rametto rosmarino fresco, sapone artigianale argilla verde, tovaglietta lino. Spa mediterranea. --ar 1:1",
        still_life_2_prompt: "{JEWELRY_TYPE} su cotone nido d'ape bianco (trama waffle visibile texture assorbente), argilla verde termale secca, pietra lavica levigata nera, petalo rosa, gocce acqua termale. Detox. --ar 4:5"
    },
    agrumeto_sicilia: {
        name: "Agrumeto Siciliano - Zagara in Fiore",
        category: "Natura Mediterranea",
        tags: ["agrumi", "sicilia", "limoni", "arance", "zagara", "fiori", "profumo", "primavera", "bianco", "essenze", "frutteto"],
        worn_detail_hint: "donna con pelle realistica (texture naturale, luce filtrata foglie), alberi agrumi fiori bianchi, profumo intenso",
        portrait_prompt: "Donna in agrumeto siciliano in fioritura, pelle iperrealistica texture naturale con luce verde-oro filtrata foglie lucide, {JEWELRY_TYPE} fresco, abito lino bianco lungo, tra alberi carichi fiori zagara bianchi profumatissimi e frutti aranci-limoni, ceste vimini. Luce primavera mattino profumata. --ar 2:3",
        gesture_prompt: "Mani femminili con pelle realistica (polpastrelli, unghie naturali), {JEWELRY_TYPE} delicato, raccolgono fiore zagara appena sbocciato (cinque petali bianchi cerosi, stami gialli, profumo intenso), rametto con foglie lucide verde scuro, arancia acerba verde. Rituale olfattivo. --ar 2:3",
        atmosphere_prompt: "{JEWELRY_TYPE} su cassa legno agrumi (assi chiare, scritta stencil 'Limoni di Sicilia'), arance rosse tagliate (polpa rubino succosa), fiori zagara, foglie, luce solare diretta calda. Sensoriale. --ar 1:1",
        still_life_1_prompt: "{JEWELRY_TYPE} su piatto ceramica Caltagirone (decorazione limoni gialli e blu), tre fiori zagara freschi, scorza arancia candita arrotolata, miele agrumi in barattolo vetro, tovaglietta lino grezzo. Profumato. --ar 1:1",
        still_life_2_prompt: "{JEWELRY_TYPE} su mussola cotone bianco (trama leggerissima visibile), rametto zagara con bocciolo e fiore aperto (dettagli stami dorati), goccia essenza neroli in ampolla, petalo singolo. Etereo essenziale. --ar 4:5"
    },
    oliveto_salento: {
        name: "Oliveto Secolare del Salento",
        category: "Natura Mediterranea",
        tags: ["ulivo", "salento", "puglia", "olive", "millenario", "argentato", "antico", "olio", "pace", "radici", "terra", "rossa"],
        worn_detail_hint: "donna con pelle realistica (texture naturale, luce argentata foglie), ulivi contorti millenari, terra rossa",
        portrait_prompt: "Donna tra ulivi millenari Salento, pelle iperrealistica texture naturale con luce argentata filtrata foglie bifacciali, {JEWELRY_TYPE} simbolico, abito lino verde salvia lungo, scalza su terra rossa pugliese, tronchi ulivo nodosi contorti antichissimi, foglie argentate brezza. Luce pomeriggio mistica pace. --ar 2:3",
        gesture_prompt: "Mani con pelle realistica (linee vita, terra rossa sotto unghie), {JEWELRY_TYPE} essenziale, raccolgono olive nere mature (drupe lucide, foglie lanceolate verde-argento), rametto benedetto, frantoia pietra sfocata. Gesto millenario benedizione. --ar 2:3",
        atmosphere_prompt: "{JEWELRY_TYPE} su pietra muratura a secco (calcari irregolari bianchi, muschio giallo licheni), rametto ulivo legato spago iuta, anfora terracotta antica olio, terra rossa, luce autunno calda. Tradizione. --ar 1:1",
        still_life_1_prompt: "{JEWELRY_TYPE} su tavola legno ulivo (venature intrecciate chiaro-scure uniche, superficie satinata), ampolla vetro olio extravergine oro-verde, tre olive taggiasche, pane casereccio, tovaglietta canapa. Genuino. --ar 1:1",
        still_life_2_prompt: "{JEWELRY_TYPE} su tela sacco juta (trama rustica grezza visibile), frammento legno ulivo levigato (venature ipnotiche, caldo), olive denocciolate, foglia argentata, terra rossa fine. Materico organico. --ar 4:5"
    },
    macchia_mediterranea: {
        name: "Macchia Mediterranea Profumata",
        category: "Natura Mediterranea",
        tags: ["macchia", "mediterranea", "rosmarino", "mirto", "lavanda", "timo", "profumo", "aromatica", "selvaggio", "essenze", "erbe"],
        worn_detail_hint: "donna con pelle realistica (texture naturale, profumo erbe), cespugli aromatici fioriti, colline mare",
        portrait_prompt: "Donna nella macchia mediterranea in fiore, pelle iperrealistica texture naturale (profumo erbe aromatiche), {JEWELRY_TYPE} naturale, abito lino color lavanda, tra cespugli rosmarino fiorito blu, mirto, cisto rosa, timo serpillo, colline verde mare blu sfondo. Luce mattino primavera profumata intensa. --ar 2:3",
        gesture_prompt: "Mani femminili con pelle realistica (polpastrelli aromatici, unghie corte), {JEWELRY_TYPE} bohémien, raccolgono rametto rosmarino fiorito (aghetti verde scuro, fiorellini blu-viola, profumo intenso), cesto vimini erbe aromatiche. Rituale erboristico. --ar 2:3",
        atmosphere_prompt: "{JEWELRY_TYPE} appoggiato su pietra calcarea bianca (superficie calda sole, licheni), mazzo erbe aromatiche fresche legate spago (rosmarino, timo, lavanda), farfalla macaone posata, mare sfocato. Selvaggio profumato. --ar 1:1",
        still_life_1_prompt: "{JEWELRY_TYPE} su tavola legno rustico, tre vasetti vetro (miele rosmarino, timo, lavanda), rametti erbe fresche, sacchetto lino profumato, candela cera api. Luce naturale calda. Aromaterapia. --ar 1:1",
        still_life_2_prompt: "{JEWELRY_TYPE} su lino color lavanda (trama visibile), spiga lavanda essiccata (fiorellini viola profumati), rametto timo serpillo, sale marino erbe aromatiche, goccia olio essenziale. Sensoriale. --ar 4:5"
    },
    pineta_mare: {
        name: "Pineta Marittima - Ombra e Salsedine",
        category: "Natura Mediterranea",
        tags: ["pineta", "pini", "marittimi", "ombra", "salsedine", "resina", "aghi", "dune", "sabbia", "mediterraneo", "estate"],
        worn_detail_hint: "donna con pelle realistica (texture naturale, ombra screziata pini), pini marittimi, sabbia e mare",
        portrait_prompt: "Donna sdraiata amaca tra pini marittimi, pelle iperrealistica texture naturale con ombra screziata aghi pino, {JEWELRY_TYPE} estivo, costume lino color sabbia, libro, tappeto berbero, tronchi pini rosso-marroni corteccia squamosa, aghi pino terra, dune sabbia mare turchese sfondo. Luce filtrata chioma. --ar 2:3",
        gesture_prompt: "Mani con pelle realistica (texture naturale, resina appiccicosa dita), {JEWELRY_TYPE} bohémien, raccolgono pigna maritima (squame aperte, semi alati dentro), aghi pino lunghi, profumo resina. Gesto infantile estate. --ar 2:3",
        atmosphere_prompt: "{JEWELRY_TYPE} su radice pino marittimo emersa sabbia (legno levigato vento, forma scultorea naturale), pigna secca aperta, conchiglia, aghi pino, duna sabbia mare sfocato. Luce pomeriggio calda. --ar 1:1",
        still_life_1_prompt: "{JEWELRY_TYPE} su tavola legno pino nodoso (venature resinose, profumo), candela cera resina pino, pigna decorativa, tazza tè pinoli, tovaglietta lino grezzo color sabbia. Forestale marino. --ar 1:1",
        still_life_2_prompt: "{JEWELRY_TYPE} su tessuto lino grezzo color resina ambrata (trama visibile), corteccia pino marittimo (texture squamosa rosso-marrone), resina fossilizzata (ambra), ago pino, sale marino. Materico. --ar 4:5"
    },
    fico_india: {
        name: "Distesa di Fichi d'India - Pale e Frutti",
        category: "Natura Mediterranea",
        tags: ["fico", "india", "pale", "opuntia", "frutti", "magenta", "spine", "desertico", "mediterraneo", "estate", "sicilia", "messico"],
        worn_detail_hint: "donna con pelle realistica (texture naturale, protezione spine), pale verdi carnose, frutti fucsia",
        portrait_prompt: "Donna tra distesa fichi d'India, pelle iperrealistica texture naturale con attenzione (spine), {JEWELRY_TYPE} audace, abito lino color magenta, pale verdi carnose giganti, frutti maturi fucsia-arancio, fiori gialli, paesaggio arido mediterraneo, luce intensa mezzogiorno. Vibrante materico. --ar 2:3",
        gesture_prompt: "Mani con pelle realistica (attenzione texture spine, guanti tela), {JEWELRY_TYPE} colorato, reggono fico d'India maturo tagliato (polpa magenta con semi neri, buccia verde spine dorate), succo cola, carta paglia. Rituale estivo. --ar 2:3",
        atmosphere_prompt: "{JEWELRY_TYPE} su pala fico d'India (superficie verde carnosa cerosa, spine dorate glochidi), frutto maturo fucsia, fiore giallo arancio, pietra calcarea bianca, luce intensa ombre nette. Desertico vibrante. --ar 1:1",
        still_life_1_prompt: "{JEWELRY_TYPE} su piatto ceramica rustica, tre fichi d'India tagliati (polpa magenta-arancio brillante, semi), coltello manico legno, tovagliolo lino grezzo macchiato succo, fiore. Cromatico. --ar 1:1",
        still_life_2_prompt: "{JEWELRY_TYPE} su lino color terracotta (trama visibile), seme fico d'India nero, spina dorata glochide (macro), frammento pala secca beige, polvere magenta. Texture contrastanti. --ar 4:5"
    },
    corallo_rosso_alghero: {
        name: "Corallo Rosso di Alghero - Oro Rosso",
        category: "Tradizioni Marinare",
        tags: ["corallo", "rosso", "alghero", "sardegna", "oro", "rosso", "pescatori", "tradizione", "amuleto", "protezione", "artigianato", "prezioso"],
        worn_detail_hint: "donna con pelle realistica (texture naturale, incarnato caldo), rametti corallo rosso, laboratorio artigiano",
        portrait_prompt: "Donna in laboratorio corallo Alghero, pelle iperrealistica texture naturale incarnato caldo, {JEWELRY_TYPE} corallo rosso protagonista, camicia lino bianca, dietro espositore rametti corallo grezzo rosso sangue-rosa, attrezzi artigiano, finestra luce naturale mare. Tradizione preziosa. --ar 2:3",
        gesture_prompt: "Mani artigiane con pelle realistica (polpastrelli sensibili, segni lavoro), {JEWELRY_TYPE} corallo, tengono rametto corallo rosso grezzo controluce (trasparenza rubino, ramificazioni naturali), lente ingrandimento, mare sfocato finestra. Valutazione maestria. --ar 2:3",
        atmosphere_prompt: "{JEWELRY_TYPE} corallo su velluto nero (pelo corto trama visibile, contrasto drammatico), rametto corallo bambù levigato rosso brillante, lente gioielliere, strumenti incisione vintage argento. Luce calda laboratorio. Prezioso. --ar 1:1",
        still_life_1_prompt: "{JEWELRY_TYPE} su base velluto blu notte, rametto corallo originale rosso sangue grezzo (superficie porosa naturale, ramificazioni), corallo bambù levigato, perle barocche, certificato autenticità antica carta. Tradizione sarda. --ar 1:1",
        still_life_2_prompt: "{JEWELRY_TYPE} su seta color bordeaux (trama visibile lucente), frammento corallo levigato (superficie liscia lucida rosso intenso), polvere corallo rosa, filo argento 925, perla barocca. Contrasti materici. --ar 4:5"
    },
    rete_pescatore: {
        name: "Reti da Pesca - Nodi e Mare",
        category: "Tradizioni Marinare",
        tags: ["rete", "pesca", "pescatore", "nodi", "mare", "tradizione", "lavoro", "manuale", "sughero", "corda", "mestiere"],
        worn_detail_hint: "donna con pelle realistica (texture naturale, luce calda porto), reti pesca turchesi, barche legno",
        portrait_prompt: "Donna su banchina porto peschereccio, pelle iperrealistica texture naturale luce calda oro pomeriggio, {JEWELRY_TYPE} marino autentico, maglietta marinara righe, siede su rete pesca turchese ammassata (nodi corda, galleggianti sughero arancio), barche legno colorate ormeggiate sfondo. Vita marinara. --ar 2:3",
        gesture_prompt: "Mani femminili con pelle realistica (calli luce, venature forti), {JEWELRY_TYPE} semplice, fanno nodo marinaro su corda canapa grossa (texture fibre naturali ruvida), rete pesca turchese sfocata, attrezzi. Maestria manuale. --ar 2:3",
        atmosphere_prompt: "{JEWELRY_TYPE} incastrato in rete pesca verde-turchese (maglia rombi, nodi corda, galleggianti sughero arancio), stella marina arancio secca, conchiglia, legno barca, mare calmo sfondo. Trovato. --ar 1:1",
        still_life_1_prompt: "{JEWELRY_TYPE} su tavola legno barca azzurra (vernice screpolata sale, texture autentica), porzione rete pesca piegata, tre galleggianti sughero, nodo savoia corda, boccale birra peroni. Portuale autentico. --ar 1:1",
        still_life_2_prompt: "{JEWELRY_TYPE} su corda canapa marina grezza (trama intrecciata visibile, fibre stoppose), nodo marinaio stretto (dettaglio texture corda), filo catrame nero, frammento sughero grezzo. Nautico. --ar 4:5"
    },
    ceramica_vietrese: {
        name: "Ceramica Vietrese - Colori del Sole",
        category: "Tradizioni Marinare",
        tags: ["ceramica", "vietri", "vietrese", "maiolica", "dipinta", "mano", "limoni", "colori", "artigianato", "campania", "costiera"],
        worn_detail_hint: "donna con pelle realistica (texture naturale, luce laboratorio), ceramiche colorate, pennelli, forno",
        portrait_prompt: "Donna in laboratorio ceramica Vietri, pelle iperrealistica texture naturale luce naturale finestra, {JEWELRY_TYPE} colorato, grembiule lino macchiato smalti, dipinge piatto maiolica (motivo limoni gialli blu verde), scaffali ceramiche colorate sfocate, pennelli, forno. Artigianato vivo. --ar 2:3",
        gesture_prompt: "Mani artigiane con pelle realistica (macchie smalto colorato dita, unghie corte), {JEWELRY_TYPE} vivace, tengono piastrella ceramica appena dipinta a mano (motivo onde mare blu cobalto, limoni gialli, smalti brillanti umidi), pennello sottile. Creazione. --ar 2:3",
        atmosphere_prompt: "{JEWELRY_TYPE} su pila piastrelle ceramica Vietri decorate (motivi diversi limoni pesci onde, colori vivaci blu giallo verde), pennelli vasetto acqua sporca colorata, stracci macchiati, luce laboratorio. Pittorico. --ar 1:1",
        still_life_1_prompt: "{JEWELRY_TYPE} su piatto ceramica Vietri dipinto a mano (bordo limoni gialli foglie verdi, centro blu cobalto), due limoni veri con foglie, pennello, boccetta smalto blu, tovaglietta lino. Cromatico mediterraneo. --ar 1:1",
        still_life_2_prompt: "{JEWELRY_TYPE} su tessuto cotone color cobalto (trama visibile), frammento ceramica antica Vietri (smalto screpolato craquelé, decorazione sbiadita), polvere pigmento blu oltremare, pennello setole. Artigianale. --ar 4:5"
    },
    sale_marino_trapani: {
        name: "Saline di Trapani - Sale e Mulini",
        category: "Tradizioni Marinare",
        tags: ["sale", "marino", "saline", "trapani", "sicilia", "mulini", "vento", "tramonto", "rosa", "cristalli", "bianco", "tradizione"],
        worn_detail_hint: "donna con pelle realistica (texture naturale, luce rosa tramonto), vasche sale rosa, mulini vento",
        portrait_prompt: "Donna tra saline Trapani al tramonto, pelle iperrealistica texture naturale con luce rosa magica riflessa, {JEWELRY_TYPE} essenziale, abito lino bianco lungo, cammina su argini tra vasche sale (acqua rosa tramonto, cristalli sale bianchi bordi), mulini vento storici sagome nere cielo fucsia-arancio. Fiabesco. --ar 2:3",
        gesture_prompt: "Mani con pelle realistica (cristalli sale aderenti pelle, texture naturale), {JEWELRY_TYPE} resistente, raccolgono manciata sale marino grosso (cristalli irregolari bianchi brillanti umidi), vasca acqua rosa tramonto riflessa, mulino sagoma. Rituale antico. --ar 2:3",
        atmosphere_prompt: "{JEWELRY_TYPE} su cumulo sale marino (montagna bianca cristalli irregolari, texture granulosa), pala legno sale incrostata, fiore sale cristallizzato (forma geometrica naturale), cielo tramonto rosa riflesso. Alchemico. --ar 1:1",
        still_life_1_prompt: "{JEWELRY_TYPE} su tavola legno grezzo sbiancato sale, barattolo vetro sale marino Trapani integrale grosso (cristalli bianchi irregolari), rametto rosmarino, sacchetto tela grezza, mulino miniatura. Puro. --ar 1:1",
        still_life_2_prompt: "{JEWELRY_TYPE} su lino bianco grezzo (trama visibile), cristalli sale marino macro (forme geometriche cubiche naturali trasparenti), filo alghe essiccate, polvere sale fino rosa tramonto. Minerale. --ar 4:5"
    }
};
