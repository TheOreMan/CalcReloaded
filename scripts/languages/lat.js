const lat = {
  intro_title: "Vispārīgi dati",
  periods: "Periodi",
  period: "Periods",
  add_period: "Pievienot periodu",
  excel: "MS EXCEL",
  data_analysis: "Datu analīze",
  new_period_name: "Jauns periods",
  id:"ID",
  gender:"Dzimums",
  woman:"Sieviete",
  man:"Vīrietis",
  birth_date:"Dzimšanas datums",
  fill_date:"Aptaujas datums",
  from:"No",
  till:"Līdz",
  period_length:"Perioda garums",
  period_years:"gadi",
  period_months:"mēneši",
  period_days:"dienas",
  weight:"Masa (kg)",
  height:"Augums (cm)",
  livingPlace:"Dzīvesvieta",
  Riga:"Rīga",
  town:"Mazpilsēta",
  rural:"Lauki",
  period_filled:"Aizpildīts",
  needed:"kopā vajadzīgs",
  changePeriodName:"Labot perioda nosaukumu",
  deletePeriod:"Dzēst periodu",
  workdays:"Darba dienas",
  weekends:"Nedēļas nogales",
  vacations:"Atvaļinājums",
  days_per_week:"Dienas nedēļā",
  days_per_week_lowercase:"dienas nedēļā",
  days_per_month:"Dienas mēnesī",
  days_per_year:"Dienas gadā",
  weeks_per_year:"Nedēļas gadā",
  hours_per_day:"Stundas dienā",
  hours_per_week:"Stundas nedēļā",
  hours_per_month:"Stundas mēnesī",
  minutes_per_day:"Minūtes dienā",
  volume:"Apjoms",
  work:"Nodarbinātība",
  sleep:"Miegs",
  walk:"Pārvietošanās",
  sport:"Sports",
  self:"Pašaprūpe",
  home:"Sadzīves aktivitātes",
  free:"Brīvais laiks",
  select_period:"Izvēlies periodu, ko atjaunot",
  ok:"Labi",
  restore_period:"Atjaunot izdzēstu periodu",
  name:"Nosaukums",
  type:"Dienas tips",
  addDayType:"Pievienot dienas tipu",
  changeDayTypeName:"Labot dienas tipa nosaukumu",
  deleteDayType:"Dzēst dienas tipu",
  weeks_in_year_from:"nedēļas gadā (no 52.18)",
  shortage:"iztrūkums",
  excess:"pārpalikums",
  confirm_periodDelete:"Vai vēlies dzēst šo periodu?",
  confirm_dayTypeDelete:"Vai vēlies dzēst šo dienas tipu?",
  /*
  sub_adisana: "Adīšana",
  sub_arkajam: "Ar kājām",
  sub_saulosanas: "Atlaišanās gultā/sauļošanās",
  sub_atputadaba: "Atpūta dabā",
  sub_fiz_augsta: "Augsta fiziskā aktivitāte, piemēram, lekšana ar lecamauklu",
  sub_brivais_augsta: "Augstas intensitātes brīvā laika aktivitāte",
  sub_sadzive_augsta: "Augstas intensitātes sadzīves aktivitāte",
  sub_autosacikstes: "Auto sacīkstes",
  sub_autovadisana: "Automašīnas vadīšana",
  sub_badmintons: "Badmintons",
  sub_basketbols: "Basketbols",
  sub_baznica: "Baznīcas apmeklējums",
  sub_biatlons: "Biatlons",
  sub_bmx: "BMX",
  sub_bokss: "Bokss",
  sub_brauksanaarlaivu: "Braukšana ar laivu",
  sub_brauksanaarvelo: "Braukšana ar velosipēdu",
  sub_brauksanapasazieris: "Braukšana transportā kā pasažierim",
  sub_burasana: "Burāšana",
  sub_bernuaprupe: "Bērnu aprūpe",
  sub_cina: "Cīņas māksla (džudo, karatē, kikbokss, taekvondo)",
  sub_datoralietosana: "Datora/portatīvā datora lietošana",
  sub_garaza: "Dažādi darbi garāžā",
  sub_dejosanaballe: "Dejošana (ballē)",
  sub_diendusa: "Diendusa",
  sub_dziedasana: "Dziedāšana",
  sub_uzkopsana: "Dzīvesvietas uzkopšana",
  sub_darzkopiba: "Dārzkopība",
  sub_darzkopibavirs60: "Dārzkopība >60 gadiem",
  sub_frisbijs: "Frīsbijs",
  sub_futbols: "Futbols",
  sub_galdaspeles: "Galda spēles, šahs, kārtis",
  sub_galdateniss: "Galda teniss",
  sub_gludinasana: "Gludināšana",
  sub_golfs: "Golfs",
  sub_higiena: "Higiēna",
  sub_hokejs: "Hokejs",
  sub_iepirksanas: "Iepirkšanās",
  sub_kalnuritenis: "Kalnu riteņbraukšana",
  sub_kanoe: "Kanoe, airēšana, kajaks",
  sub_krikets: "Krikets",
  sub_kerlings: "Kērlings",
  sub_lakross: "Lakross",
  sub_lasisana: "Lasīšana/rakstīšana",
  sub_makskeresana: "Makšķerēšana (vispārīgi)",
  sub_mazgasanas: "Mazgāšanās (stāvus)",
  sub_medisana: "Medīšana (vispārīgi)",
  sub_muzicesana: "Muzicēšana (vispārīgi)",
  sub_majasdarbi: "Mājas darbu mācīšanās",
  sub_fiz_merena: "Mēreni augsta fiziskā aktivitāte, piemēram, veselības kluba vingrojumi, boulings, volejbols",
  sub_muzikasinstrumenti: "Mūzikas instrumenta spēlēšana (vispārīgi)",
  sub_naktsmiegs: "Nakts miegs",
  sub_neformala: "Neformālā izglītība",
  sub_neklasificeta: "Neklasificētas zemas intensitātes fiziskās aktivitātes",
  sub_orientesanas: "Orientēšanās sports",
  sub_pastaigaardzivnieku: "Pastaiga ar mājdzīvnieku",
  sub_paukosana: "Paukošana",
  sub_peldebrass: "Peldēšana (brass)",
  sub_peldekrauls: "Peldēšana (krauls)",
  sub_peldesinhrona: "Peldēšana (sinhronā)",
  sub_peldeteurenis: "Peldēšana (tauriņstils)",
  sub_peldemugura: "Peldēšana (uz muguras)",
  sub_pludmalesvolejbols: "Pludmales volejbols",
  sub_polo: "Polo",
  sub_raketbols: "Raketbols",
  sub_regbijs: "Regbijs",
  sub_rokasbumba: "Rokasbumba",
  sub_sarunas: "Sarunas ar draugiem, radiem (kopā sanākšana)",
  sub_skeitbords: "Skeitbords",
  sub_skriesanamaratons: "Skriešana (maratons)",
  sub_skriesanastadions: "Skriešana (stadionā)",
  sub_skvoss: "Skvošs",
  sub_slepodistancu: "Slēpošana (distanču)",
  sub_slepokalnu: "Slēpošana (kalnu slaloms)",
  sub_sportadejas: "Sporta dejas",
  sub_rinda: "Stāvēšana rindā",
  sub_serfosana: "Sērfošana",
  sub_televizija: "Televīzijas skatīšanās",
  sub_tenissdubultais: "Teniss (dubultspēle)",
  sub_tenissviens: "Teniss (vienspēle)",
  sub_teatris: "Teātra/koncerta apmeklēšana",
  sub_vecoaprupe: "Vecu cilvēku aprūpe",
  sub_velasmazgasana: "Veļas mazgāšana ar rokām",
  sub_brivais_videja: "Vidējas intensitātes brīvā laika aktivitāte",
  sub_sadzive_videja: "Vidējas intensitātes sadzīves aktivitāte",
  sub_fiz_videja: "Vidēji augsta fiziskā aktivitāte, piemēram, hokejs, teniss, kalnu riteņbraukšana",
  sub_vieglatletikaleksana: "Vieglatlētika (augstlēkšana, tāllēkšana, šķēpa mešana, kārtslēkšana)",
  sub_vieglatletikalode: "Vieglatlētika (lodes grūšana, diska mešana, vesera mešana)",
  sub_vieglatletikaskersli: "Vieglatlētika (šķēršļu skriešana, barjerskriešana)",
  sub_vindserfings: "Vindsērfings",
  sub_vingrosana: "Vingrošana",
  sub_volejbols: "Volejbols",
  sub_brivais_zema: "Zemas intensitātes brīvā laika aktivitāte",
  sub_sadzive_zema: "Zemas intensitātes sadzīves aktivitāte",
  sub_zimesana: "Zīmēšana",
  sub_atrslidosana: "Ātrslidošana",
  sub_estgatavosana: "Ēst gatavošana un virtuves uzkopšana",
  sub_esana: "Ēšana",
  sub_fiz_lotiaugsta: "Ļoti augsta fiziskā aktivitāte, piemēram, skriešana pa trepēm",
  sub_sautrinas: "Šautriņas",
  sub_sosejasritenis: "Šosejas riteņbraukšana",
  sub_susana: "Šūšana (šujmašīna)",
  sub_udenspolo: "Ūdenspolo",
  sub_sport_1: "1. klāsteris (piemēram, mājas vingrinājumi, joga, boulings, biljards)",
  sub_sport_2: "2. klāsteris (piemēram, lēna skriešana, distanču slēpošana mērenā tempā, lekšana ar lecamauklu)",
  sub_sport_3: "3. klāsteris (piemēram, ūdens aerobika, veselības kluba vingrošana, atpūtas peldēšana)",
  sub_sport_4: "4. klāsteris (piemēram, kalnu riteņbraukšana sacensībās, maratons)",
  sub_sport_5: "5. klāsteris (piemēram, skriešana augstā tempā virs 18 km/h)",
  sub_free_1: "1. klāsteris (piemēram, lasīšana guļus, stāvēšana rindā, sēdēšana)",
  sub_free_2: "2. klāsteris (piemēram, lapu grābšana, augļu novākašana, bērnu aprūpe)",
  sub_free_3: "3. klāsteris (piemēram, sniega šķūrēšana, koku stādīšana, zāliena pļaušana)",
  sub_free_4: "4. klāsteris (piemēram, medības pārgājienā, lielizmēra koku ciršana ar cirvi, rakšana)",
  sub_free_5: "5. klāsteris (piemēram, lielo medījumu medības)",
  sub_work_1: "1. klāsteris",
  sub_work_2: "2. klāsteris",
  sub_work_3: "3. klāsteris",
  sub_work_4: "4. klāsteris",
  sub_work_5: "5. klāsteris",
  cluster_1: "1. klāsteris",
  cluster_2: "2. klāsteris",
  cluster_3: "3. klāsteris",
  cluster_4: "4. klāsteris",
  cluster_5: "5. klāsteris",
  */
  sub_sleep_000: "Dienas vai nakts miegs",

  sub_all_0: "1: Zema aktivitāte",
  sub_all_1: "2: Vidēji zema aktivitāte",
  sub_all_2: "3: Vidēja aktivitāte",
  sub_all_3: "4: Vidēji augsta aktivitāte",
  sub_all_4: "5: Augsta aktivitāte",
  comment: "Komentārs",
  from_these_filled:", no tām aizpildītas",
  total_in_period:"Kopā periodā",
  hours_per_day_lowercase:"stundas dienā",
  subcategory: "Apakškategorija",
  hint: "Mājiens",
  loadExcel: "Ielādēt no MS Excel",
  generateExcel: "Saglabāt kā MS Excel",
  generateReview: "Ģenerēt pārskatu",
  weight_plain:"Masa",
  height_plain:"Augums",
  duration: "Ilgums",
  days_per_week_short:"d/ned",
  days_per_month_short:"d/mēn",
  days_per_year_short:"d/g",
  weeks_per_year_short:"ned/g",
  hours_per_day_short:"h/d",
  hours_per_week_short:"h/ned",
  hours_per_month_short:"h/mēn",
  minutes_per_day_short:"min/d",
  activity:"Aktivitāte",
  subActivity: "Apakšaktivitāte",
  calories: "Kalorijas",
  total: "Kopā",
  days_uppercase: "Dienas",
  day_type_nr: "Dienas tips nr.",
  harris_benedict: "Revised Harris-Benedict (1984) vienādojums",
  mifflin: "Mifflin St Jeor (1990) vienādojums",
  analyze: "Analizēt",
  cals_per_week: "Kilokalorijas nedēļā",
  mets_per_week: "Meti nedēļā",
  recalculate: "Pārrēķināt",
  append_interval: "Pievienot intervālu",
  statistics: "Statistika",
  deleteInterval: "Dzēst intervālu",
  deleteSubcategory: "Dzēst apakškategoriju",
  default: "(noklusētais)",
  duplicateSubcategory:"Dublēt apakškategoriju uz nākamo dienas tipu",
  selfEval:"Sava fiziskā aktivitāte"
};
