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
  sub_free_000: "Cucire, riparare e mantenere tessuti",
  sub_free_001: "Costruzione e riparazione di mobili",
  sub_free_002: "Prato, giardino e piante da interno",
  sub_free_003: "Riparazione e manutenzione di veicoli (fatto da sé)",
  sub_free_004: "Cura e assistenza ai bambini in casa",
  sub_free_005: "Educazione",
  sub_free_006: "Acquisti",
  sub_free_007: "Utilizzo di servizi medici",
  sub_free_008: "Utilizzo di servizi di manutenzione, riparazione, decorazione, costruzione a casa",
  sub_free_009: "Obblighi civici e partecipazione",
  sub_free_010: "Socializzare e comunicare con gli altri",
  sub_free_011: "Rilassarsi, riflettere",
  sub_free_012: "Uso di tabacco e droghe",
  sub_free_013: "Televisione e film (non religiosi)",
  sub_free_014: "Ascoltare la radio",
  sub_free_015: "Ascoltare/suonare musica (non radio)",
  sub_free_016: "Giocare",
  sub_free_017: "Uso del computer per svago (tranne giochi)",
  sub_free_018: "Arti e mestieri come hobby",
  sub_free_019: "Collezionare come hobby",
  sub_free_020: "Hobby, tranne arti e mestieri e collezionismo",
  sub_free_021: "Lettura per interesse personale",
  sub_free_022: "Scrittura per interesse personale",
  sub_free_023: "Rilassamento e tempo libero, n.d., 1",
  sub_free_024: "Frequentare spettacoli dal vivo",
  sub_free_025: "Frequentare musei",
  sub_free_026: "Frequentare cinema",
  sub_free_027: "Frequentare locali per il gioco d'azzardo",
  sub_free_028: "Socializzare, rilassarsi e tempo libero, n.d.",
  sub_free_029: "Danzare",
  sub_free_030: "Pesca",
  sub_free_031: "Escursionismo",
  sub_free_032: "Caccia",
  sub_free_033: "Pattinaggio a rotelle",
  sub_free_034: "Frequentare eventi sportivi, n.d.",
  sub_free_035: "Frequentare servizi religiosi",
  sub_free_036: "Attività religiose e spirituali, n.d.",
  sub_free_037: "Attività di volontariato",
  sub_free_038: "Camminare, camminare in casa",
  sub_free_039: "Camminare, 3.2 km/h, livello, passo lento, superficie ferma",
  sub_free_040: "Rilassamento e tempo libero, n.d., 2",
  sub_free_041: "Rilassamento e tempo libero, n.d., 3",
  sub_sleep_000: "Dormire",
  sub_work_000:"Gestione (direttori, manager, supervisori)",
  sub_work_001:"Affari e Finanza (contabili, analisti aziendali, specialisti finanziari)",
  sub_work_002:"Informatica e Matematica (programmatori, web designer, analisti software)",
  sub_work_003:"Architettura e Ingegneria (architetti, ingegneri)",
  sub_work_004:"Scienze della vita, fisiche e sociali (storici, geologi, psicologi, antropologi)",
  sub_work_005:"Servizi Comunitari e Sociali (assistenti sociali, operatori sanitari)",
  sub_work_006:"Legale (avvocati, giudici)",
  sub_work_007:"Educazione, Formazione e Biblioteca (educatori, bibliotecari)",
  sub_work_008:"Arti, Design, Intrattenimento, Sport, Media (designer d'interni, fioristi, stilisti, attori, musicisti, produttori, allenatori, fotografi, specialisti in relazioni pubbliche)",
  sub_work_009:"Pratiche e Tecniche Sanitarie (medici, dentisti, logopedisti, chirurghi)",
  sub_work_010:"Supporto Sanitario",
  sub_work_011:"Servizio di Protezione (vigili del fuoco, agenti di polizia)",
  sub_work_012:"Preparazione e Servizio Alimentare (chef, baristi, camerieri)",
  sub_work_013:"Pulizia e Manutenzione degli Edifici e dei Terreni (custodi e addetti alla manutenzione degli edifici, addetti al controllo dei parassiti)",
  sub_work_014:"Cura Personale e Servizi (parrucchieri, estetisti)",
  sub_work_015:"Vendite e Occupazioni Correlate (cassieri, modelle, agenti di assicurazione)",
  sub_work_016:"Supporto Ufficio e Amministrativo (segretari, rappresentanti del servizio clienti)",
  sub_work_017:"Agricoltura, Pesca e Silvicoltura (addetti alla conservazione delle foreste e della natura, pescatori, lavoratori agricoli)",
  sub_work_018:"Costruzione ed Estrazione (falegnami, ispettori edilizi, lavoratori dell'isolamento, installatori di soffitti, pareti, pavimenti)",
  sub_work_019:"Installazione, Manutenzione e Riparazione (tecnici e meccanici del servizio auto, installatori e riparatori elettrici ed elettronici, lavoratori generici di manutenzione e riparazione)",
  sub_work_020:"Produzione (lavoratori della trasformazione alimentare, lavoratori di attrezzature metalliche e plastiche)",
  sub_work_021:"Trasporto e Movimentazione di Materiali (autisti di autobus, conduttori, tassisti)",
  sub_self_000: "Lavarsi, vestirsi e curarsi",
  sub_self_001: "Mangiare e bere",
  sub_walk_000: "Camminare sul lavoro, 4.8 km/h, in ufficio, velocità moderata, senza portare nulla",
  sub_walk_001: "Camminare da casa, verso l'auto o l'autobus, dall'auto o dall'autobus per andare in giro, dall'auto o dall'autobus al luogo di lavoro e viceversa",
  sub_walk_002: "Guidare un'auto o un furgone leggero (non un camion)",
  sub_walk_003: "Viaggiare in auto o camion",
  sub_walk_004: "Ciclismo, <16 km/h, tempo libero, per lavoro o piacere",
  sub_home_000: "Pulizia interna",
  sub_home_001: "Lavori domestici, n.d., 1",
  sub_home_002: "Preparazione di cibo e bevande",
  sub_home_003: "Pulizia della cucina e delle stoviglie",
  sub_home_004: "Manutenzione interna, riparazione e decorazione, n.d.",
  sub_home_005: "Manutenzione esterna, riparazione e decorazione",
  sub_home_006: "Cura di animali domestici, n.d.",
  sub_home_007: "Cura fisica dei bambini in casa",
  sub_home_008: "Cura fisica degli adulti in casa",
  sub_home_009: "Assistenza a membri non conviventi, n.d.",
  sub_home_010: "Utilizzo di servizi veterinari",
  sub_home_011: "Lavori domestici, n.d., 2",
  sub_home_012: "Lavori domestici, n.d., 3",
  sub_sport_000: "Aerobica",
  sub_sport_001: "Giocare a baseball",
  sub_sport_002: "Giocare a basket",
  sub_sport_003: "Ciclismo",
  sub_sport_004: "Giocare a biliardo",
  sub_sport_005: "Navigare",
  sub_sport_006: "Bowling",
  sub_sport_007: "Arrampicata, speleologia, grotte",
  sub_sport_008: "Partecipazione a sport equestri",
  sub_sport_009: "Scherma",
  sub_sport_010: "Giocare a calcio",
  sub_sport_011: "Golf",
  sub_sport_012: "Ginnastica",
  sub_sport_013: "Giocare a hockey",
  sub_sport_014: "Partecipare a arti marziali",
  sub_sport_015: "Giocare a sport con racchetta",
  sub_sport_016: "Partecipare a competizioni di rodeo",
  sub_sport_017: "Giocare a rugby",
  sub_sport_018: "Corsa",
  sub_sport_019: "Sci, pattinaggio su ghiaccio, snowboard",
  sub_sport_020: "Giocare a calcio",
  sub_sport_021: "Softball",
  sub_sport_022: "Tour/raduno veicolare",
  sub_sport_023: "Giocare a pallavolo",
  sub_sport_024: "Camminare",
  sub_sport_025: "Partecipare a sport acquatici",
  sub_sport_026: "Sollevamento pesi/allenamento di forza",
  sub_sport_027: "Allenarsi, non specificato",
  sub_sport_028: "Lotta",
  sub_sport_029: "Praticare yoga",
  sub_sport_030: "Giocare a sport, n.d., 1",
  sub_sport_031: "Sport, esercizio e ricreazione, n.d., 1",
  sub_sport_032: "Sport, esercizio e ricreazione, n.d., 2",
  sub_sport_033: "Sport, esercizio e ricreazione, n.d., 3",
  sub_sport_034: "Giocare a sport, n.d., 2",
  sub_sport_035: "Giocare a sport, n.d., 3",
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
  about:"Sul programma",
  selfEval: "Autovalutazione dell'attività fisica"
};

const aboutText_ita=`
<h1>Programma "Calcolatore delle attività per tutta la vita"</h1>
<h2>Versione v4</h2>
<ol>
<li>Quattro sottocategorie sono state triplicate:</li>
  <ol style="list-style-type: lower-alpha; padding-bottom: 0;">
    <li>Relax e tempo libero, n.e.c.</li>
    <li>Lavori domestici, n.e.c.</li>
    <li>Sport, esercizio e ricreazione, n.e.c.</li>
    <li>Giocare a sport, n.e.c.</li>
  </ol>
<li>È stata creata una versione semplificata del rilascio dello strumento: ora è disponibile in modalità di test su https://theoreman.github.io/CalcReloaded</li>
</ol>
<h2>Versione v3.1</h2>
<ol>
<li>Per tutte le sottocategorie dell'occupazione, gli esempi di professioni specifiche sono racchiusi tra parentesi.</li>
<li>L'abbreviazione "n.d." è stata rimossa dal titolo di alcune sottocategorie del tempo libero e della casa.</li>
<li>È stato fatto in modo che il pulsante "Informazioni sul programma" sia sempre nell'angolo in basso a destra quando si scorre lo schermo.</li>
</ol>
<h2>Versione v3.0</h2>
<ol>
  <li>Aggiunto un pulsante "Informazioni sul programma" dove è possibile vedere tutte le modifiche delle versioni storiche.</li>
  <li>Nuove sottocategorie introdotte per tutte le categorie.</li>
  <li>Aggiunto supporto per la lingua ucraina.</li>
  <li>Risolto un bug nell'importazione da MS Excel: le unità delle supercategorie non venivano cambiate in "Ore al giorno".</li>
  <li>Risolto un bug nella cancellazione delle sottocategorie: quando si cancellava l'ultima sottocategoria, i campi di input della categoria padre non venivano riabilitati.</li>
</ol>
<h2>Versione v2.0</h2>
<ol>
  <li>Migliorato l'aspetto dei pulsanti e dei campi di input.</li>
  <li>L'equazione di Mifflin St Jeor impostata come predefinita, e la parola "predefinito" aggiunta tra parentesi.</li>
  <li>Aggiunta l'opzione di duplicare le sottocategorie per il tipo di giorno successivo cliccando sull'icona con una freccia verde. In questo caso, la sottocategoria nel tipo di giorno successivo viene evidenziata in rosso per notare facilmente che è stata aggiunta automaticamente e potrebbe richiedere attenzione per la correzione.</li>
  <li>Aggiunto un controllo per assicurare che non vengano aggiunte più sottocategorie con lo stesso nome a una categoria (manualmente o duplicando [vedere punto 3]).</li>
  <li>Aggiunto un nuovo campo di input "Autovalutazione dell'attività fisica" per ogni periodo, che viene anche esportato su Excel e importato nuovamente nel tool.</li>
</ol>
<h2>Versione v1.0</h2>
<ol>
  <li>Nuovo design con tutto in un unico posto.</li>
  <li>Supporto multilingue.</li>
  <li>Riorientata la struttura di categorie e sottocategorie - ora ogni tipo di giorno può avere il proprio insieme di categorie, e ogni categoria può avere il proprio insieme di sottocategorie.</li>
  <li>Possibilità di eliminare periodi e ripristinare periodi eliminati.</li>
  <li>Possibilità di aggiungere ed eliminare tipi di giorno (giorni lavorativi e vacanze).</li>
  <li>Possibilità di eliminare sottocategorie.</li>
  <li>Rinnovata la sezione di analisi dati per facilitare i ricalcoli (automatici), eseguendo varie azioni - aprendo questa sezione, premendo il pulsante "Ricalcola", cambiando l'equazione o il tipo di valore, ecc.</li>
  <li>Nella sezione di analisi dati, aggiunta la possibilità di creare intervalli arbitrari, che vengono salvati anche durante il ricalcolo dei dati. Aggiunta anche l'opzione di eliminare gli intervalli creati.</li>
  <li>Gli intervalli di analisi dati creati nell'esportazione su Excel vengono esportati insieme a tutti i dati del periodo.</li>
  <li>L'importazione su Excel funziona solo per i file esportati con questa nuova versione CalcReloaded v1.0. Forse in seguito verrà realizzata (se necessario) anche l'importazione per i vecchi file.</li>
  <li>Nota importante - durante l'importazione di un file Excel (pulsante "Carica da MS Excel"), il calcolatore deve essere impostato sulla stessa lingua della lingua utilizzata per l'esportazione del file importato (dopo l'importazione, naturalmente, la lingua può essere cambiata liberamente).</li>
</ol>
<br>
`
