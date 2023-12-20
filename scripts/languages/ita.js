const ita = {
  intro_title: "Dati generali",
  periods: "Periodi",
  period: "Periodo",
  add_period: "Aggiungi periodo",
  excel: "MS EXCEL",
  data_analysis: "Analisi dati",
  new_period_name: "Nuovo periodo",
  id:"ID",
  gender:"Genere",
  woman:"Femmina",
  man:"Maschio",
  birth_date:"Data di nascita",
  fill_date:"Data del questionario",
  from:"Dal",
  till:"Al",
  period_length:"Durata del periodo",
  period_years:"anni",
  period_months:"mesi",
  period_days:"giorni",
  weight:"Peso (kg)",
  height:"Altezza (cm)",
  livingPlace:"Luogo di residenza",
  Riga:"Riga",
  town:"Cittadina",
  rural:"Campagna",
  period_filled:"Compilato",
  needed:"necessario in totale",
  changePeriodName:"Modifica nome del periodo",
  deletePeriod:"Elimina periodo",
  workdays:"Giorni lavorativi",
  weekends:"Fine settimana",
  vacations:"Vacanze",
  days_per_week:"Giorni alla settimana",
  days_per_week_lowercase:"giorni alla settimana",
  days_per_month:"Giorni al mese",
  days_per_year:"Giorni all'anno",
  weeks_per_year:"Settimane all'anno",
  hours_per_day:"Ore al giorno",
  hours_per_week:"Ore alla settimana",
  hours_per_month:"Ore al mese",
  minutes_per_day:"Minuti al giorno",
  volume:"Quantità",
  work:"Lavoro",
  sleep:"Sonno",
  walk:"Camminata",
  sport:"Sport",
  self:"Cura personale",
  home:"Attività domestiche",
  free:"Tempo libero",
  select_period:"Seleziona il periodo da ripristinare",
  ok:"OK",
  restore_period:"Ripristina periodo cancellato",
  name: "Nome",
  type: "Tipo di giorno",
  addDayType: "Aggiungi tipo di giorno",
  changeDayTypeName: "Modifica nome tipo di giorno",
  deleteDayType: "Elimina tipo di giorno",
  weeks_in_year_from: "settimane nell'anno (su 52.18)",
  shortage: "carenza",
  excess: "eccesso",
  confirm_periodDelete: "Vuoi eliminare questo periodo?",
  confirm_dayTypeDelete: "Vuoi eliminare questo tipo di giorno?",
  /*
  sub_adisana: "Lavori di maglia",
  sub_arkajam: "A piedi",
  sub_saulosanas: "Esposizione al sole/relax",
  sub_atputadaba: "Attività all'aperto",
  sub_fiz_augsta: "Attività fisica intensa, come saltare con la corda",
  sub_brivais_augsta: "Attività fisica ad alta intensità nel tempo libero",
  sub_sadzive_augsta: "Attività fisica ad alta intensità nella vita quotidiana",
  sub_autosacikstes: "Gare automobilistiche",
  sub_autovadisana: "Guida dell'auto",
  sub_badmintons: "Badminton",
  sub_basketbols: "Basketball",
  sub_baznica: "Visita alla chiesa",
  sub_biatlons: "Biathlon",
  sub_bmx: "BMX",
  sub_bokss: "Boxe",
  sub_brauksanaarlaivu: "Navigazione",
  sub_brauksanaarvelo: "Ciclismo",
  sub_brauksanapasazieris: "Viaggiare come passeggero",
  sub_burasana: "Vela",
  sub_bernuaprupe: "Cura dei bambini",
  sub_cina: "Arti marziali (judo, karate, kickboxing, taekwondo)",
  sub_datoralietosana: "Utilizzo del computer/portatile",
  sub_garaza: "Lavori vari in garage",
  sub_dejosanaballe: "Danza (balli di salone)",
  sub_diendusa: "Passeggio",
  sub_dziedasana: "Canto",
  sub_uzkopsana: "Pulizia della casa",
  sub_darzkopiba: "Giardinaggio",
  sub_darzkopibavirs60: "Giardinaggio >60 anni",
  sub_frisbijs: "Frisbee",
  sub_futbols: "Calcio",
  sub_galdaspeles: "Giochi da tavolo, scacchi, carte",
  sub_galdateniss: "Ping pong",
  sub_gludinasana: "Stiratura",
  sub_golfs: "Golf",
  sub_higiena: "Igiene",
  sub_hokejs: "Hockey",
  sub_iepirksanas: "Acquisti",
  sub_kalnuritenis: "Mountain bike",
  sub_kanoe: "Canoe, canottaggio, kayak",
  sub_krikets: "Cricket",
  sub_kerlings: "Curling",
  sub_lakross: "Lacrosse",
  sub_lasisana: "Lettura/scrittura",
  sub_makskeresana: "Pesca (generale)",
  sub_mazgasanas: "Pulizia (in piedi)",
  sub_medisana: "Caccia (generale)",
  sub_muzicesana: "Musica (generale)",
  sub_majasdarbi: "Apprendimento a casa",
  sub_fiz_merena: "Attività fisica moderatamente intensa, come ginnastica in palestra, bowling, pallavolo",
  sub_muzikasinstrumenti: "Suonare uno strumento musicale (generale)",
  sub_naktsmiegs: "Sonno notturno",
  sub_neformala: "Istruzione informale",
  sub_neklasificeta: "Attività fisica a bassa intensità non classificata",
  sub_orientesanas: "Sport dell'orientamento",
  sub_pastaigaardzivnieku: "Passeggiare con gli animali domestici",
  sub_paukosana: "Ornitologia",
  sub_peldebrass: "Nuoto (stile brass)",
  sub_peldekrauls: "Nuoto (stile crawl)",
  sub_peldesinhrona: "Nuoto sincronizzato",
  sub_peldeteurenis: "Nuoto (stile dorso)",
  sub_peldemugura: "Nuoto (a dorso)",
  sub_pludmalesvolejbols: "Pallavolo sulla spiaggia",
  sub_polo: "Polo",
  sub_raketbols: "Pallacanestro",
  sub_regbijs: "Rugby",
  sub_rokasbumba: "Pallamano",
  sub_sarunas: "Chiacchierare con amici, parenti (incontri sociali)",
  sub_skeitbords: "Skateboard",
  sub_skriesanamaratons: "Corsa (maratona)",
  sub_skriesanastadions: "Corsa (in stadio)",
  sub_skvoss: "Squash",
  sub_slepodistancu: "Sci (distanza)",
  sub_slepokalnu: "Sci (slalom sulla montagna)",
  sub_sportadejas: "Danza sportiva",
  sub_rinda: "In piedi in fila",
  sub_serfosana: "Surf",
  sub_televizija: "Guardare la TV",
  sub_tenissdubultais: "Tennis (doppio)",
  sub_tenissviens: "Tennis (singolo)",
  sub_teatris: "Andare a teatro/concerti",
  sub_vecoaprupe: "Assistenza agli anziani",
  sub_velasmazgasana: "Lavare i vestiti a mano",
  sub_brivais_videja: "Attività fisica a intensità moderata durante il tempo libero",
  sub_sadzive_videja: "Attività fisica a intensità moderata durante la vita quotidiana",
  sub_fiz_videja: "Attività fisica ad alta intensità come hockey, tennis, mountain bike",
  sub_vieglatletikaleksana: "Atletica leggera (salto in alto, salto in lungo, lancio del giavellotto, salto con l'asta)",
  sub_vieglatletikalode: "Atletica leggera (gettata del peso, lancio del disco, lancio del martello)",
  sub_vieglatletikaskersli: "Atletica leggera (corse ad ostacoli, corsa ad ostacoli con barriere)",
  sub_vindserfings: "Windsurf",
  sub_vingrosana: "Ginnastica",
  sub_volejbols: "Pallavolo",
  sub_brivais_zema: "Attività fisica a bassa intensità durante il tempo libero",
  sub_sadzive_zema: "Attività fisica a bassa intensità durante la vita quotidiana",
  sub_zimesana: "Disegno",
  sub_atrslidosana: "Pattinaggio di velocità",
  sub_estgatavosana: "Cucina e pulizia della cucina",
  sub_esana: "Mangiare",
  sub_fiz_lotiaugsta: "Attività fisica molto intensa come la corsa su per le scale",
  sub_sautrinas: "Tiro a segno",
  sub_sosejasritenis: "Ciclismo su strada",
  sub_susana: "Cucito (macchina da cucire)",
  sub_udenspolo: "Pallanuoto",
  sub_sport_1: "Cluster 1 (ad esempio, esercizi a casa, yoga, bowling, biliardo)",
  sub_sport_2: "Cluster 2 (ad esempio, corsa lenta, sci di fondo a ritmo moderato, salto con la corda)",
  sub_sport_3: "Cluster 3 (ad esempio, aerobica in acqua, allenamento in palestra, nuoto ricreativo)",
  sub_sport_4: "Cluster 4 (ad esempio, mountain bike competitiva, maratona)",
  sub_sport_5: "Cluster 5 (ad esempio, corsa ad alta velocità sopra i 18 km/h)",
  sub_free_1: "Cluster 1 (es. leggere sdraiati, stare in fila, sedersi)",
  sub_free_2: "Cluster 2 (es. raccogliere foglie, raccogliere frutta, assistenza ai bambini)",
  sub_free_3: "Cluster 3 (es. spalare la neve, piantare alberi, tagliare il prato)",
  sub_free_4: "Cluster 4 (es. escursionismo, abbattimento di alberi grandi con un'accetta, scavare)",
  sub_free_5: "Cluster 5 (es. caccia a grossa selvaggina)",
  sub_work_1: "Cluster 1",
  sub_work_2: "Cluster 2",
  sub_work_3: "Cluster 3",
  sub_work_4: "Cluster 4",
  sub_work_5: "Cluster 5",
  cluster_1: "Cluster 1",
  cluster_2: "Cluster 2",
  cluster_3: "Cluster 3",
  cluster_4: "Cluster 4",
  cluster_5: "Cluster 5",
  */
  comment: "Commento",
  from_these_filled: ", di cui compilati",
  total_in_period: "Totale nel periodo",
  hours_per_day_lowercase: "ore al giorno",
  subcategory: "Sottocategoria",
  hint: "Suggerimento",
  loadExcel: "Carica da MS Excel",
  generateExcel: "Salva come MS Excel",
  generateReview: "Genera rapporto",
  weight_plain: "Peso",
  height_plain: "Altezza",
  duration: "Durata",
  days_per_week_short:"g/sett",
  days_per_month_short:"g/mese",
  days_per_year_short:"g/anno",
  weeks_per_year_short:"sett/anno",
  hours_per_day_short:"o/g",
  hours_per_week_short:"o/sett",
  hours_per_month_short:"o/mese",
  minutes_per_day_short:"min/g",
  activity: "Attività",
  subActivity: "Sottoattività",
  calories: "Calorie",
  total: "Totale",
  days_uppercase: "Giorni",
  day_type_nr: "Tipo di giorno n.",
  harris_benedict: "Revised Harris-Benedict (1984) equazione",
  mifflin: "Mifflin St Jeor (1990) equazione",
  analyze: "Analizzare",
  cals_per_week: "Calorie per settimana",
  mets_per_week: "METs per settimana",
  recalculate: "Ricalcolare",
  append_interval: "Aggiungi intervallo",
  statistics: "Statistiche",
  deleteInterval: "Elimina intervallo",
  deleteSubcategory: "Elimina sottocategoria",
  default: "(predefinito)",
  duplicateSubcategory: "Duplica la sottocategoria al tipo di giorno successivo",
  selfEval: "Autovalutazione dell'attività fisica"
};
