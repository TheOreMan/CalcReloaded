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
  sub_free_000:"Tekstilizstrādājumu šūšana, labošana un apkope",
  sub_free_001:"Mēbeļu izgatavošana, atjaunošana un remonts",
  sub_free_002:"Dārzkopība un telpaugu kopšana",
  sub_free_003:"Pašrocīgi veikts automašīnu remonts un apkope",
  sub_free_004:"Laiks ar bērniem",
  sub_free_005:"Mācīšanās",
  sub_free_006:"Iepirkšanās",
  sub_free_007:"Medicīnas pakalpojumu izmantošana",
  sub_free_008:"Dzīvesvietas labiekārtošana",
  sub_free_009:"Pilsoniskā līdzdalība un pilsoniskā atbildība (vēlēšanas u.c. pasākumi)",
  sub_free_010:"Socializēšanās un komunikācija ar citiem ",
  sub_free_011:"Atpūta, relaksācija",
  sub_free_012:"Tabakas un narkotisko vielu lietošana",
  sub_free_013:"Televīzijas un kino skatīšanās",
  sub_free_014:"Radio klausīšanās",
  sub_free_015:"Mūzikas klausīšanās (izņemot radio)",
  sub_free_016:"Galda spēļu spēlēšana",
  sub_free_017:"Datora izmantošana atpūtai un izklaidei (izņemt datorspēļu spēlēšanu)",
  sub_free_018:"Rokdarbi un māksla",
  sub_free_019:"Kolekcionēšana",
  sub_free_020:"Citi hobiji, izņemot mākslu, rokdarbus un kolekcionēšanu",
  sub_free_021:"Lasīšana",
  sub_free_022:"Rakstīšana",
  sub_free_023:"Citur neminēti atpūtas veidi 1",
  sub_free_024:"Skatuves mākslas pasākumu apmeklēšana",
  sub_free_025:"Muzeju apmeklēšana",
  sub_free_026:"Kino apmeklēšana",
  sub_free_027:"Azartspēļu zāļu apmeklēšana",
  sub_free_028:"Citur neminēta socializēšanās, atpūta un brīvā laika pavadīšana",
  sub_free_029:"Dejošana",
  sub_free_030:"Makšķerēšana",
  sub_free_031:"Pārgājieni",
  sub_free_032:"Medības",
  sub_free_033:"Skrituļslidošana",
  sub_free_034:"Citur neminētu sporta pasākumu apmeklēšana",
  sub_free_035:"Dievkalpojumu, reliģisku pasākumu apmeklēšana",
  sub_free_036:"Citur neminētas reliģiskās un garīgās aktivitātes",
  sub_free_037:"Brīvprātīgā darba aktivitātes",
  sub_free_038:"Staigāšana/iešana, pārvietošanās pa dzīvesvietu",
  sub_free_039:"Lēna iešana, 3.2km/h, līdzens, lēns temps, stingra virsma",
  sub_free_040:"Citur neminēti atpūtas veidi 2",
  sub_free_041:"Citur neminēti atpūtas veidi 3",
  sub_sleep_000: "Miegs",
  sub_work_000:"Vadība un pārvaldība (direktori, vadītāji, priekšnieki)",
  sub_work_001:"Uzņēmējdarbība un finanses (grāmatveži, biznesa analītiķi, finanšu speciālisti)",
  sub_work_002:"Datorzinības un matemātika (programmētāji, web dizaineri, datorprogrammu analītiķi)",
  sub_work_003:"Arhitektūra un inženierzinātnes (arhitekti, inženieri)",
  sub_work_004:"Zinātne (vēsturnieki, ģeologi, psihologi, antropologi)",
  sub_work_005:"Sociālie pakalpojumi un sociālā palīdzība (sociālie darbinieki, sabiedrības veselības aprūpes darbinieki)",
  sub_work_006:"Tieslietas un jurisprudence (juristi, tiesneši)",
  sub_work_007:"Izglītība, pedagoģija un bibliotēkzinātne (pedagogi, bibliotekāri)",
  sub_work_008:"Māksla, dizains, izklaide, sports un plašsaziņas līdzekļi (interjera dizaineri, floristi, modes dizaineri, aktieri, mūziķi, producenti, treneri, fotogrāfi, sabiedrisko attiecību speciālisti)",
  sub_work_009:"Ārstniecības persona (ārsti, zobārsti, audiologopēdi, ķirurgi)",
  sub_work_010:"Ārstniecības atbalsta personāls",
  sub_work_011:"Sabiedrības aizsardzība un drošība (ugunsdzēsēji, policisti)",
  sub_work_012:"Viesmīlība un ēdināšana (pavāri, bārmeņi, viesmīļi)",
  sub_work_013:"Teritoriju uzkopšana, ēku un būvju uzturēšana (sētnieki un ēku uzturētāji, kaitēkļu kontroles darbinieki)",
  sub_work_014:"Skaistumkopšana (frizieri, kosmetologi)",
  sub_work_015:"Tirdzniecība un ar to saistītās profesijas (kasieri, modeles, apdrošināšanas aģenti)",
  sub_work_016:"Biroja darbs u.c. administratīvais darbs (sekretāri, klientu apkalpošanas pārstāvji)",
  sub_work_017:"Lauksaimniecība, mežsaimniecība un zivsaimniecība (meža un dabas aizsardzības darbinieki, zvejnieki, lauksaimniecības strādnieki)",
  sub_work_018:"Būvniecība un dabas resursu izguve (galdnieki, būvinspektori, siltināšanas strādnieki, griestu, sienu, grīdas uzstādītāji)",
  sub_work_019:"Tehniķi un mehāniķi, iekārtu uzstādīšana, apkope un remonts (automobiļu servisa tehniķi un mehāniķi, elektrības un elektronikas uzstādītāji un remontētāji, vispārējie apkopes un remonta darbinieki)",
  sub_work_020:"Ražošana (pārtikas apstrādes strādnieki, metāla un plastmasas iekārtu strādnieki)",
  sub_work_021:"Transports un pārvadājumi (autobusa vadītāji, stujarti, taksometru vadītāji)",
  sub_self_000:"Personīgā higiēna (mazgāšanās, ģērbšanās, sevis apkopšana)",
  sub_self_001:"Ēšana un dzeršana",
  sub_walk_000:"Pārvietošanās/staigāšana darba laikā mērenā tempā",
  sub_walk_001:"Iešana no mājam uz automašīnu vai autobusu; iešana no automašīnas vai autobusa līdz galamērķim, iešana no automašīnas vai autobusa uz un no darba vietas",
  sub_walk_002:"Vieglā auto transporta vadīšana (B kategorijas tiesības)",
  sub_walk_003:"Pārvietošanās kā pasažierim vieglajā vai smagajā auto transportā",
  sub_walk_004:"Pārvientošanās ar velosipēdu (nepiedaloties sacensībās)",
  sub_home_000:"Iekštelpu uzkopšana",
  sub_home_001:"Citur neminēti mājsaimniecības darbi 1",
  sub_home_002:"Maltītes pagatavošana (tai skaitā dzērienu)",
  sub_home_003:"Virtuves uzkopšana",
  sub_home_004:"Citur neminēta dzīvesvietas iekštelpu atjaunošana, remonts, apdare",
  sub_home_005:"Dzīvesvietas ārtelpu atjaunošana (fasāde, jumts u.c.) remonts, apdare",
  sub_home_006:"Mājdzīvnieku aprūpe",
  sub_home_007:"Mājsaimniecībā esošu bērnu aprūpe",
  sub_home_008:"Mājsaimniecībā esošu pieaugušo aprūpe",
  sub_home_009:"Ārpus mājsaimniecības esošu cilvēku aprūpe",
  sub_home_010:"Veterināro pakalpojumu izmantošana",
  sub_home_011:"Citur neminēti mājsaimniecības darbi 2",
  sub_home_012:"Citur neminēti mājsaimniecības darbi 3",
  sub_sport_000:"Aerobikas vingrinājumi",
  sub_sport_001:"Beisbols",
  sub_sport_002:"Basketbols",
  sub_sport_003:"Riteņbraukšana",
  sub_sport_004:"Biljards",
  sub_sport_005:"Laivošana",
  sub_sport_006:"Boulings",
  sub_sport_007:"Klinšu kāpšana, alu tūrisms",
  sub_sport_008:"Jāšanas sports",
  sub_sport_009:"Paukošanās",
  sub_sport_010:"Amerikāņu futbols",
  sub_sport_011:"Golfs",
  sub_sport_012:"Vingrošana",
  sub_sport_013:"Hokejs",
  sub_sport_014:"Cīņas māksla",
  sub_sport_015:"Rakešu sporta aktivitātes (teniss, badmintons, u.c.)",
  sub_sport_016:"Rodeo",
  sub_sport_017:"Regbijs",
  sub_sport_018:"Skriešana",
  sub_sport_019:"Slēpošana, slidošana, snovbords",
  sub_sport_020:"Futbols",
  sub_sport_021:"Softbols",
  sub_sport_022:"Auto tūrisms, ātrumsacīkstes",
  sub_sport_023:"Volejbols",
  sub_sport_024:"Soļošana",
  sub_sport_025:"Ūdens sports",
  sub_sport_026:"Svarcelšana/spēka treniņš",
  sub_sport_027:"Treniņš (treniņnodarbība), neprecizēta",
  sub_sport_028:"Cīkstēšanās",
  sub_sport_029:"Joga",
  sub_sport_030:"Citur neminēts komandu sports 1",
  sub_sport_031:"Citur neminēts individuālais sports 1",
  sub_sport_032:"Citur neminēts individuālais sports 2",
  sub_sport_033:"Citur neminēts individuālais sports 3",
  sub_sport_034:"Citur neminēts komandu sports 2",
  sub_sport_035:"Citur neminēts komandu sports 3",
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
  about:"Par programmu",
  selfEval:"Sava fiziskā aktivitāte",

  login: "Iežurnalēties",
  register: "Reģistrēties",
  userlogin: "Lietotāja iežurnalēšanās",
  userregister: "Lietotāja reģistrēšanās",
  username: "Lietotāja vārds",
  password: "Parole",
  password_repeated: "Parole atkārtoti"
};

const aboutText_lat=`
<h1>Programma "Dzīves laika aktivitāšu kalkulators"</h1>
<h2>Versija v4.1</h2>
<ol>
<li>Ja, ielasot datus no Excel, tiek sastapta apakškategorija, kas šajā rīka versijā neeksistē, tās nosaukums uzskatāmības labad tiek ielikts kvadrātiekavās.</li>
<li>Ielasot datus no Excel, pielikta pārbaude, vai apakškategorijas nosaukums nesakrīt ar kādu no vecajiem nosaukumiem, kuri tika nomainīti uz citiem versijā v4 - tādā gadījumā tie tiek aizstāti ar kādu no jaunajiem.</li>
</ol>
<h2>Versija v4</h2>
<ol>
<li>Pārvietošanās apakškategorija "Pārvietošanās ka pasažierim vieglajā vai smagajā auto transportā (ne sabiedriskajā transportā)" pārsaukta par "Pārvietošanās kā pasažierim vieglajā vai smagajā auto transportā".</li>
<li>Četrām apakškategorijām izveidotas pa trim kopijām katrai:</li>
  <ol style="list-style-type: lower-alpha; padding-bottom: 0;">
   <li>Citur neminēti atpūtas veidi</li>
   <li>Citur neminēti mājsaimniecības darbi</li>
   <li>Citur neminēts individuālais sports</li>
   <li>Citur neminēts komandu sports</li>
 </ol>
<li>Izveidots atvieglots variants rīka izplatīšanai - tas tagad testa režīmā pieejams saitē https://theoreman.github.io/CalcReloaded</li>
</ol>
<h2>Versija v3.1</h2>
<ol>
<li>Atsevišķām nodarbinātības apakškategorijām nomainīti nosaukumi uz latviskākiem.</li>
<li>Visām nodarbinātības apakškategorijām iekavās pielikti konkrētu profesiju piemēri.</li>
<li>Atsevišķām brīvā laika un sadzīves apakškategorijām no nosaukuma izmesta frāze "Citur neminēts".</li>
<li>Uzlikts, lai poga "Par programmu", ritinot ekrānu, vienmēr atrastos apakšējā labajā stūrī.</li>
</ol>
<h2>Versija v3.0</h2>
<ol>
<li>Pielikta poga "Par programmu", kurā var redzēt visu vēsturisko versiju izmaiņas.</li>
<li>Visām kategorijām ieviestas jaunās apakškategorijas.</li>
<li>Pievienots ukraiņu valodas atbalsts.</li>
<li>Izlabota kļūda importā no MS Excel: virskategoriju mērvienības netika nomainītas uz "Stundas dienā".</li>
<li>Izlabota kļūda apakškategoriju dzēšanā: izdzēšot pēdējo apakškategoriju, virskategorijas ievadlauki netika atiespējoti.</li>
</ol>
<h2>Versija v2.0</h2>
<ol>
<li>Uzlabots pogu un ievadlauku izskats.</li>
<li>Mifflin St Jeor vienādojums padarīts par noklusēto, kā arī tam iekavās pierakstīts vārds "noklusētais".</li>
<li>Pielikta iespēja dublēt apakškategorijas uz nākamo dienas tipu, spiežot ikonu ar zaļas bultas attēlu. Tādā gadījumā nākamajā dienas tipā šī apakškategorija tiek iezīmēta sarkana, lai vieglāk būtu pamanīt, ka tā ir automātiski pievienota un ka tai, iespējams, vajag pievērst uzmanību, to piekoriģējot.</li>
<li>Pielikta kontrole, vai vienai kategorijai netiek pievienotas (manuāli vai dublējot [skatīt 3. punktu]) vairākas apakškategorijas ar vienādiem nosaukumiem.</li>
<li>Katram periodam pievienots jauns ievadlauks "Sava fiziskā aktivitāte", kas arī tiek eksportēts uz Excel un importēts no tā atpakaļ rīkā.</li>
</ol>
<h2>Versija v1.0</h2>
<ol>
<li>Jauns dizains ar visu vienā šķirklī.</li>
<li>Vairākvalodu atbalsts.</li>
<li>Pārorganizēta kategoriju un apakškategoriju struktūra - tagad katram dienas tipam var būt savs kategoriju komplekts un katrai kategorijai var būt savs apakškategoriju komplekts.</li>
<li>Iespēja dzēst periodus un atjaunot izdzēstus periodus.</li>
<li>Iespēja pievienot un dzēst dienas tipus (darba dienas un atvaļinājumus).</li>
<li>Iespēja dzēst apakškategorijas.</li>
<li>Pārtaisīta datu analīzes daļa, lai dati vieglāk (automātiski) pārrēķinātos, veicot dažādas darbības - atverot šo sadaļu, spiežot pogu "Pārrēķināt", mainot vienādojuma vai vērtību tipu izvēli u.tml.</li>
<li>Datu analīzes sadaļā pielikta iespēja veidot patvaļīgus intervālus, kas saglabājas arī, pārrēķinot datus. Pielikta arī iespēja dzēst izveidotos intervālus.</li>
<li>Excel exportā izveidoti datu analīzes intervāli tiek eksportēti kopā ar visu periodu datiem.</li>
<li>Excel imports strādā tikai tām datnēm, kas eksportējas ar šo jauno versiju CalcReloaded v1.0. Varbūt vēlāk izveidosim (ja vajadzēs) arī veco datņu importu.</li>
<li>Būtiska piezīme - importējot Excel datni (poga "Ielādēt no MS Excel"), kalkulatorā jābūt izvēlētai tai pašai valodai, ar kuru iepriekš veikts importējamās datnes eksports (pēc importa, protams, valodu var atkal brīvi mainīt).</li>
</ol>
<br>
`;
