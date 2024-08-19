const fra = {
  intro_title: "Données générales",
  periods: "Périodes",
  period: "Période",
  add_period: "Ajouter une période",
  excel: "MS EXCEL",
  data_analysis: "Analyse de données",
  new_period_name: "Nouvelle période",
  id:"ID",
  gender:"Genre",
  woman:"Femme",
  man:"Homme",
  birth_date:"Date de naissance",
  fill_date:"Date de remplissage",
  from:"De",
  till:"À",
  period_length:"Durée de la période",
  period_years:"années",
  period_months:"mois",
  period_days:"jours",
  weight:"Poids (kg)",
  height:"Taille (cm)",
  livingPlace:"Lieu de résidence",
  Riga:"Riga",
  town:"Ville",
  rural:"Rural",
  period_filled:"Rempli",
  needed:"nécessaire au total",
  changePeriodName:"Changer le nom de la période",
  deletePeriod:"Supprimer la période",
  workdays:"Jours de travail",
  weekends:"Week-ends",
  vacations:"Vacances",
  days_per_week:"Jours par semaine",
  days_per_week_lowercase:"jours par semaine",
  days_per_month:"Jours par mois",
  days_per_year:"Jours par an",
  weeks_per_year:"Semaines par an",
  hours_per_day:"Heures par jour",
  hours_per_week:"Heures par semaine",
  hours_per_month:"Heures par mois",
  minutes_per_day:"Minutes par jour",
  volume:"Volume",
  work:"Travail",
  sleep:"Sommeil",
  walk:"Marche",
  sport:"Sport",
  self:"Soins personnels",
  home:"Activités ménagères",
  free:"Temps libre",
  select_period:"Sélectionnez la période à restaurer",
  ok:"OK",
  restore_period:"Restaurer la période supprimée",
  name: "Nom",
  type: "Type de jour",
  addDayType: "Ajouter un type de jour",
  changeDayTypeName: "Modifier le nom du type de jour",
  deleteDayType: "Supprimer le type de jour",
  weeks_in_year_from: "semaines dans l'année (sur 52.18)",
  shortage: "pénurie",
  excess: "excès",
  confirm_periodDelete: "Voulez-vous supprimer ce période?",
  confirm_dayTypeDelete: "Voulez-vous supprimer ce type de jour?",
  /*
  sub_adisana: "Tricotage",
  sub_arkajam: "À pied",
  sub_saulosanas: "Bronzage",
  sub_atputadaba: "Plein air",
  sub_fiz_augsta: "Activité physique intense, comme le saut à l'élastique",
  sub_brivais_augsta: "Activité de loisir de haute intensité",
  sub_sadzive_augsta: "Activité domestique de haute intensité",
  sub_autosacikstes: "Course de voitures",
  sub_autovadisana: "Conduite de voiture",
  sub_badmintons: "Badminton",
  sub_basketbols: "Basket-ball",
  sub_baznica: "Visite d'église",
  sub_biatlons: "Biathlon",
  sub_bmx: "BMX",
  sub_bokss: "Boxe",
  sub_brauksanaarlaivu: "Navigation",
  sub_brauksanaarvelo: "Cyclisme",
  sub_brauksanapasazieris: "Transport en tant que passager",
  sub_burasana: "Voile",
  sub_bernuaprupe: "Garde d'enfants",
  sub_cina: "Arts martiaux (judo, karaté, kickboxing, taekwondo)",
  sub_datoralietosana: "Utilisation d'un ordinateur/ordinateur portable",
  sub_garaza: "Travaux divers dans le garage",
  sub_dejosanaballe: "Danse (bal)",
  sub_diendusa: "Méditation",
  sub_dziedasana: "Chant",
  sub_uzkopsana: "Entretien du logement",
  sub_darzkopiba: "Jardinage",
  sub_darzkopibavirs60: "Jardinage >60 ans",
  sub_frisbijs: "Frisbee",
  sub_futbols: "Football",
  sub_galdaspeles: "Jeux de société, échecs, cartes",
  sub_galdateniss: "Tennis de table",
  sub_gludinasana: "Repassage",
  sub_golfs: "Golf",
  sub_higiena: "Hygiène",
  sub_hokejs: "Hockey",
  sub_iepirksanas: "Shopping",
  sub_kalnuritenis: "VTT",
  sub_kanoe: "Canoe, aviron, kayak",
  sub_krikets: "Cricket",
  sub_kerlings: "Curling",
  sub_lakross: "Lacrosse",
  sub_lasisana: "Lecture/écriture",
  sub_makskeresana: "Pêche (général)",
  sub_mazgasanas: "Nettoyage (debout)",
  sub_medisana: "Chasse (général)",
  sub_muzicesana: "Musique (général)",
  sub_majasdarbi: "Apprentissage à domicile",
  sub_fiz_merena: "Activité physique modérée, tels que des exercices de club de santé, bowling, volley-ball",
  sub_muzikasinstrumenti: "Jouer d'un instrument de musique (général)",
  sub_naktsmiegs: "Sommeil nocturne",
  sub_neformala: "Éducation non formelle",
  sub_neklasificeta: "Activités physiques de faible intensité non classées",
  sub_orientesanas: "Sport d'orientation",
  sub_pastaigaardzivnieku: "Promenade avec un animal domestique",
  sub_paukosana: "Observation d'oiseaux",
  sub_peldebrass: "Natation (brasse)",
  sub_peldekrauls: "Natation (crawl)",
  sub_peldesinhrona: "Natation (synchro)",
  sub_peldeteurenis: "Natation (style taureau)",
  sub_peldemugura: "Natation (sur le dos)",
  sub_pludmalesvolejbols: "Volley-ball de plage",
  sub_polo: "Polo",
  sub_raketbols: "Basket-ball",
  sub_regbijs: "Rugby",
  sub_rokasbumba: "Handball",
  sub_sarunas: "Discussions avec des amis, des parents (rencontres ensemble)",
  sub_skeitbords: "Planche à roulettes",
  sub_skriesanamaratons: "Course à pied (marathon)",
  sub_skriesanastadions: "Course à pied (stade)",
  sub_skvoss: "Squash",
  sub_slepodistancu: "Ski de fond",
  sub_slepokalnu: "Ski (slalom de montagne)",
  sub_sportadejas: "Danse sportive",
  sub_rinda: "File d'attente",
  sub_serfosana: "Surf",
  sub_televizija: "Regarder la télévision",
  sub_tenissdubultais: "Tennis (double)",
  sub_tenissviens: "Tennis (simple)",
  sub_teatris: "Assister à une pièce de théâtre / un concert",
  sub_vecoaprupe: "Soins aux personnes âgées",
  sub_velasmazgasana: "Lavage de linge à la main",
  sub_brivais_videja: "Activité physique modérée en temps libre",
  sub_sadzive_videja: "Activité physique modérée à domicile",
  sub_fiz_videja: "Activité physique élevée, comme le hockey, le tennis, le VTT",
  sub_vieglatletikaleksana: "Athlétisme (saut en hauteur, saut en longueur, lancer de javelot, saut à la perche)",
  sub_vieglatletikalode: "Athlétisme (lancer du poids, lancer du disque, lancer du marteau)",
  sub_vieglatletikaskersli: "Athlétisme (course de haies, course d'obstacles)",
  sub_vindserfings: "Planche à voile",
  sub_vingrosana: "Gymnastique",
  sub_volejbols: "Volley-ball",
  sub_brivais_zema: "Activité physique légère en temps libre",
  sub_sadzive_zema: "Activité physique légère à domicile",
  sub_zimesana: "Dessin",
  sub_atrslidosana: "Patinage",
  sub_estgatavosana: "Préparation des repas et entretien de la cuisine",
  sub_esana: "Manger",
  sub_fiz_lotiaugsta: "Activité physique très élevée, comme la course d'escaliers",
  sub_sautrinas: "Tir",
  sub_sosejasritenis: "Cyclisme sur route",
  sub_susana: "Couture (machine à coudre)",
  sub_udenspolo: "Polo aquatique",
  sub_sport_1: "1er groupe (par exemple, exercices à la maison, yoga, bowling, billard)",
  sub_sport_2: "2e groupe (par exemple, course lente, ski de fond à allure modérée, saut à la corde)",
  sub_sport_3: "3e groupe (par exemple, aquagym, entraînement en club de santé, natation récréative)",
  sub_sport_4: "4e groupe (par exemple, VTT en compétition, marathon)",
  sub_sport_5: "5e groupe (par exemple, course à haute vitesse supérieure à 18 km/h)",
  sub_free_1: "1er groupe (par exemple, lire allongé, faire la queue debout, s'asseoir)",
  sub_free_2: "2e groupe (par exemple, ramasser des feuilles, récolter des fruits, s'occuper des enfants)",
  sub_free_3: "3e groupe (par exemple, déneiger, planter des arbres, tondre la pelouse)",
  sub_free_4: "4e groupe (par exemple, faire de la randonnée, abattre de gros arbres avec une hache, creuser)",
  sub_free_5: "5e groupe (par exemple, chasser de gros gibiers)",
  sub_work_1: "1er groupe",
  sub_work_2: "2e groupe",
  sub_work_3: "3e groupe",
  sub_work_4: "4e groupe",
  sub_work_5: "5e groupe",
  cluster_1: "1er groupe",
  cluster_2: "2e groupe",
  cluster_3: "3e groupe",
  cluster_4: "4e groupe",
  cluster_5: "5e groupe",
  */
  sub_free_000: "Coudre, réparer et entretenir les textiles",
  sub_free_001: "Construction et réparation de meubles",
  sub_free_002: "Pelouse, jardin et plantes d'intérieur",
  sub_free_003: "Réparation et entretien de véhicules (par soi-même)",
  sub_free_004: "Soins et aide aux enfants du ménage",
  sub_free_005: "Éducation",
  sub_free_006: "Achats de consommation",
  sub_free_007: "Utilisation de services médicaux",
  sub_free_008: "Utilisation de services de maintenance, réparation, décoration, construction à domicile",
  sub_free_009: "Obligations civiques et participation",
  sub_free_010: "Socialisation et communication avec les autres",
  sub_free_011: "Détente, réflexion",
  sub_free_012: "Usage du tabac et de drogues",
  sub_free_013: "Télévision et films (non religieux)",
  sub_free_014: "Écoute de la radio",
  sub_free_015: "Écoute/jouer de la musique (hors radio)",
  sub_free_016: "Jouer",
  sub_free_017: "Utilisation de l'ordinateur pour les loisirs (sauf jeux)",
  sub_free_018: "Arts et artisanat comme passe-temps",
  sub_free_019: "Collection comme passe-temps",
  sub_free_020: "Loisirs, sauf arts et artisanat et collection",
  sub_free_021: "Lire par intérêt personnel",
  sub_free_022: "Écrire par intérêt personnel",
  sub_free_023: "Détente et loisirs, n.c.a., 1",
  sub_free_024: "Assister aux arts de la scène",
  sub_free_025: "Assister aux musées",
  sub_free_026: "Assister aux films/cinéma",
  sub_free_027: "Assister aux établissements de jeux de hasard",
  sub_free_028: "Socialiser, se détendre et loisirs, n.c.a.",
  sub_free_029: "Danser",
  sub_free_030: "Pêche",
  sub_free_031: "Randonnée",
  sub_free_032: "Chasse",
  sub_free_033: "Rollerblade",
  sub_free_034: "Assister à des événements sportifs, n.c.a.",
  sub_free_035: "Assister à des services religieux",
  sub_free_036: "Activités religieuses et spirituelles, n.c.a.",
  sub_free_037: "Activités bénévoles",
  sub_free_038: "Marche, marche à domicile",
  sub_free_039: "Marche, 3.2 km/h, niveau, pas lent, surface ferme",
  sub_free_040: "Détente et loisirs, n.c.a., 2",
  sub_free_041: "Détente et loisirs, n.c.a., 3",
  sub_sleep_000: "Dormir",
  sub_work_000:"Gestion (directeurs, managers, superviseurs)",
  sub_work_001:"Affaires et finances (comptables, analystes commerciaux, spécialistes financiers)",
  sub_work_002:"Informatique et mathématiques (programmeurs, concepteurs web, analystes logiciels)",
  sub_work_003:"Architecture et ingénierie (architectes, ingénieurs)",
  sub_work_004:"Sciences de la vie, physique et sociale (historiens, géologues, psychologues, anthropologues)",
  sub_work_005:"Services communautaires et sociaux (travailleurs sociaux, travailleurs de la santé publique)",
  sub_work_006:"Juridique (avocats, juges)",
  sub_work_007:"Éducation, formation et bibliothèque (éducateurs, bibliothécaires)",
  sub_work_008:"Arts, design, divertissement, sports, médias (designers d'intérieur, fleuristes, stylistes, acteurs, musiciens, producteurs, entraîneurs, photographes, spécialistes des relations publiques)",
  sub_work_009:"Praticien et technique de santé (médecins, dentistes, orthophonistes, chirurgiens)",
  sub_work_010:"Soutien médical",
  sub_work_011:"Service de protection (pompiers, policiers)",
  sub_work_012:"Préparation des aliments et services connexes (chefs, barman, serveurs)",
  sub_work_013:"Nettoyage et entretien des bâtiments et des terrains (concierges et travailleurs de l'entretien des bâtiments, travailleurs de la lutte antiparasitaire)",
  sub_work_014:"Soins personnels et service (coiffeurs, esthéticiennes)",
  sub_work_015:"Ventes et professions connexes (caissiers, mannequins, agents d'assurance)",
  sub_work_016:"Soutien administratif et de bureau (secrétaires, représentants du service clientèle)",
  sub_work_017:"Agriculture, pêche et foresterie (travailleurs de la conservation des forêts et de la nature, pêcheurs, travailleurs agricoles)",
  sub_work_018:"Construction et extraction (charpentiers, inspecteurs du bâtiment, travailleurs de l'isolation, installateurs de plafonds, murs, sols)",
  sub_work_019:"Installation, maintenance et réparation (techniciens et mécaniciens de service automobile, installateurs et réparateurs électriciens et électroniques, travailleurs généraux de maintenance et de réparation)",
  sub_work_020:"Production (travailleurs du traitement des aliments, travailleurs d'équipement métallique et plastique)",
  sub_work_021:"Transport et mouvement de matériaux (conducteurs de bus, conducteurs, chauffeurs de taxi)",
  sub_self_000: "Se laver, s'habiller et se coiffer",
  sub_self_001: "Manger et boire",
  sub_walk_000: "Marcher au travail, 4.8 km/h, au bureau, vitesse modérée, sans rien porter",
  sub_walk_001: "Marcher de la maison à la voiture ou au bus, du bus ou de la voiture pour se rendre à des endroits, de la voiture ou du bus au lieu de travail et vice versa",
  sub_walk_002: "Conduire une voiture ou un camion léger (pas un camion)",
  sub_walk_003: "Voyager en voiture ou en camion",
  sub_walk_004: "Faire du vélo, <16 km/h, loisirs, pour le travail ou pour le plaisir",
  sub_home_000: "Nettoyage intérieur",
  sub_home_001: "Travaux ménagers, n.c.a., 1",
  sub_home_002: "Préparation de la nourriture et des boissons",
  sub_home_003: "Nettoyage de la cuisine et des ustensiles",
  sub_home_004: "Maintenance intérieure, réparation et décoration, n.c.a.",
  sub_home_005: "Maintenance extérieure, réparation et décoration",
  sub_home_006: "Soin des animaux de compagnie, n.c.a.",
  sub_home_007: "Soin physique des enfants du ménage",
  sub_home_008: "Soin physique des adultes du ménage",
  sub_home_009: "Soin et aide aux membres non du ménage, n.c.a.",
  sub_home_010: "Utilisation des services vétérinaires",
  sub_home_011: "Travaux ménagers, n.c.a., 2",
  sub_home_012: "Travaux ménagers, n.c.a., 3",
  sub_sport_000: "Faire de l'aérobic",
  sub_sport_001: "Jouer au baseball",
  sub_sport_002: "Jouer au basketball",
  sub_sport_003: "Faire du vélo",
  sub_sport_004: "Jouer au billard",
  sub_sport_005: "Navigation",
  sub_sport_006: "Bowling",
  sub_sport_007: "Escalade, spéléologie, spéléologie",
  sub_sport_008: "Participation à des sports équestres",
  sub_sport_009: "Escrime",
  sub_sport_010: "Jouer au football",
  sub_sport_011: "Golf",
  sub_sport_012: "Faire de la gymnastique",
  sub_sport_013: "Jouer au hockey",
  sub_sport_014: "Participer à des arts martiaux",
  sub_sport_015: "Jouer à des sports de raquette",
  sub_sport_016: "Participer à des compétitions de rodéo",
  sub_sport_017: "Jouer au rugby",
  sub_sport_018: "Courir",
  sub_sport_019: "Ski, patinage sur glace, snowboard",
  sub_sport_020: "Jouer au football",
  sub_sport_021: "Softball",
  sub_sport_022: "Tourisme/course de véhicules",
  sub_sport_023: "Jouer au volleyball",
  sub_sport_024: "Marcher",
  sub_sport_025: "Participer à des sports nautiques",
  sub_sport_026: "Haltérophilie/entraînement en force",
  sub_sport_027: "S'entraîner, non spécifié",
  sub_sport_028: "Lutte",
  sub_sport_029: "Faire du yoga",
  sub_sport_030: "Jouer à des sports, n.c.a., 1",
  sub_sport_031: "Sports, exercice et loisirs, n.c.a., 1",
  sub_sport_032: "Sports, exercice et loisirs, n.c.a., 2",
  sub_sport_033: "Sports, exercice et loisirs, n.c.a., 3",
  sub_sport_034: "Jouer à des sports, n.c.a., 2",
  sub_sport_035: "Jouer à des sports, n.c.a., 3",
  comment: "Commentaire",
  from_these_filled: ", dont ils sont remplies",
  total_in_period: "Total sur la période",
  hours_per_day_lowercase: "heures par jour",
  subcategory: "Sous-catégorie",
  hint: "Indice",
  loadExcel: "Charger depuis MS Excel",
  generateExcel: "Enregistrer en tant que MS Excel",
  generateReview: "Générer un rapport",
  weight_plain: "Poids",
  height_plain: "Taille",
  duration: "Durée",
  days_per_week_short:"j/sem",
  days_per_month_short:"j/mois",
  days_per_year_short:"j/an",
  weeks_per_year_short:"sem/an",
  hours_per_day_short:"h/j",
  hours_per_week_short:"h/sem",
  hours_per_month_short:"h/mois",
  minutes_per_day_short:"min/j",
  activity: "Activité",
  subActivity: "Sous-activité",
  calories: "Calories",
  total: "Total",
  days_uppercase: "Jours",
  day_type_nr: "Type de jour n°",
  harris_benedict: "Revised Harris-Benedict (1984) équation",
  mifflin: "Mifflin St Jeor (1990) équation",
  analyze: "Analyser",
  cals_per_week: "Calories par semaine",
  mets_per_week: "METs par semaine",
  recalculate: "Recalculer",
  append_interval: "Ajouter un intervalle",
  statistics: "Statistiques",
  deleteInterval: "Supprimer l'intervalle",
  deleteSubcategory: "Supprimer la sous-catégorie",
  default: "(par défaut)",
  duplicateSubcategory: "Dupliquer la sous-catégorie vers le type de jour suivant",
  about:"À propos du programme",
  selfEval: "Auto-évaluation de l'activité physique"
};

const aboutText_fra=`
<h1>Programme "Calculateur d'Activités à Vie"</h1>
<h2>Version v4.2</h2>
<ol>
<li>Correction d'une erreur dans le calcul des heures par jour lors du choix des unités "Heures par semaine" et "Heures par mois".</li>
</ol>
<h2>Version v4.1</h2>
<ol>
<li>Si, lors de la lecture des données d'Excel, on rencontre une sous-catégorie qui n'existe pas dans cette version de l'outil, son nom est placé entre crochets pour plus de clarté.</li>
</ol>
<h2>Version v4</h2>
<ol>
<li>Quatre sous-catégories ont été triplées :</li>
  <ol style="list-style-type: lower-alpha; padding-bottom: 0;">
    <li>Détente et loisirs, n.e.c.</li>
    <li>Tâches ménagères, n.e.c.</li>
    <li>Sports, exercice et loisirs, n.e.c.</li>
    <li>Pratiquer des sports, n.e.c.</li>
  </ol>
<li>Une version simplifiée du déploiement de l'outil a été créée - elle est maintenant disponible en mode test sur https://theoreman.github.io/CalcReloaded</li>
</ol>
<h2>Version v3.1</h2>
<ol>
<li>Pour toutes les sous-catégories d'emploi, des exemples de professions spécifiques sont inclus entre parenthèses.</li>
<li>L'abréviation "n.c.a." a été supprimée du titre de certaines sous-catégories de loisirs et de ménage.</li>
<li>Il est fait en sorte que le bouton "À propos du programme" soit toujours dans le coin inférieur droit lors du défilement de l'écran.</li>
</ol>
<h2>Version v3.0</h2>
<ol>
  <li>Ajouté un bouton "À propos du programme" où vous pouvez voir tous les changements de version historiques.</li>
  <li>Nouvelles sous-catégories introduites pour toutes les catégories.</li>
  <li>Ajout du support de la langue ukrainienne.</li>
  <li>Correction d'un bug lors de l'importation depuis MS Excel : les unités des supercatégories n'étaient pas modifiées en "Heures par jour".</li>
  <li>Correction d'un bug lors de la suppression des sous-catégories : lors de la suppression de la dernière sous-catégorie, les champs de saisie de la catégorie parente n'étaient pas réactivés.</li>
</ol>
<h2>Version v2.0</h2>
<ol>
  <li>Amélioration de l'apparence des boutons et des champs de saisie.</li>
  <li>Équation de Mifflin St Jeor définie par défaut, et le mot "par défaut" ajouté entre parenthèses.</li>
  <li>Ajout de l'option de dupliquer des sous-catégories pour le type de jour suivant en cliquant sur l'icône avec une flèche verte. Dans ce cas, la sous-catégorie dans le type de jour suivant est surlignée en rouge pour remarquer facilement qu'elle a été ajoutée automatiquement et peut nécessiter une attention pour la correction.</li>
  <li>Ajout d'une vérification pour s'assurer que plusieurs sous-catégories avec le même nom ne sont pas ajoutées à une catégorie (manuellement ou en dupliquant [voir point 3]).</li>
  <li>Ajout d'un nouveau champ de saisie "Auto-évaluation de l'activité physique" pour chaque période, qui est également exporté vers Excel et importé de nouveau dans l'outil.</li>
</ol>
<h2>Version v1.0</h2>
<ol>
  <li>Nouveau design avec tout en un seul endroit.</li>
  <li>Support multi-langue.</li>
  <li>Réorganisation de la structure des catégories et sous-catégories - maintenant chaque type de jour peut avoir son propre ensemble de catégories, et chaque catégorie peut avoir son propre ensemble de sous-catégories.</li>
  <li>Possibilité de supprimer des périodes et de restaurer des périodes supprimées.</li>
  <li>Possibilité d'ajouter et de supprimer des types de jour (jours de travail et vacances).</li>
  <li>Possibilité de supprimer des sous-catégories.</li>
  <li>Rénovation de la section d'analyse des données pour des recalculs plus faciles (automatiques), effectuant diverses actions - ouverture de cette section, appui sur le bouton "Recalculer", changement de l'équation ou du type de valeur, etc.</li>
  <li>Dans la section d'analyse des données, ajout de la possibilité de créer des intervalles arbitraires, qui sont sauvegardés même lors du recalcul des données. Ajout également de l'option de supprimer les intervalles créés.</li>
  <li>Les intervalles d'analyse des données créés dans l'exportation vers Excel sont exportés avec toutes les données de période.</li>
  <li>L'importation Excel fonctionne uniquement pour les fichiers exportés avec cette nouvelle version CalcReloaded v1.0. Peut-être plus tard, nous ferons (si nécessaire) une importation pour les anciens fichiers également.</li>
  <li>Note importante - lors de l'importation d'un fichier Excel (bouton "Charger depuis MS Excel"), le calculateur doit être réglé sur la même langue que la langue utilisée pour l'exportation du fichier importé (après l'importation, bien sûr, la langue peut être librement changée à nouveau).</li>
</ol>
<br>
`
