var version="CALC Reloaded v4.2";
var periodCount=0;
var persons=[{
  periods:[],
  gender:0 //0-female;1-male
}];

var currentPeriodNr=-1;
var currentField=undefined;
var currentDayType=undefined;
var everything={};
var intervals=[],daysArr=[],metsArr=[],timeSpanArr=[],timeSpanMetsArr=[],timeSpanCalsArr=[];

var intensityLevels=[
  {name:"Zema",met:1.7},
  {name:"Mērena",met:2.7},
  {name:"Mēreni augsta",met:3.7},
  {name:"Augsta",met:5},
  {name:"Ļoti augsta",met:7.8}
];

const dayTypes_default=[
  {
    id:"workdays",
    name:"Workdays",
    type:1,
    deleted:false
  },
  {
    id:"weekends",
    name:"Weekends",
    type:2,
    deleted:false
  },
  {
    id:"vacations",
    name:"Vacations",
    type:3,
    deleted:false
  }
];

var measures={
  "days_per_week":"",
  "days_per_month":"",
  "days_per_year":"",
  "weeks_per_year":"",
  "hours_per_day":"",
  "hours_per_week":"",
  "hours_per_month":"",
  "minutes_per_day":""
};

const fieldTypes_default=[
  {
    id:"work",
    name:"",
    subs:[],
    measures:["hours_per_day","hours_per_week","hours_per_month"],
    comment:""
  },
  {
    id:"sleep",
    name:"",
    subs:[],
    measures:["hours_per_day","hours_per_week","hours_per_month"],
    comment:""
  },
  {
    id:"walk",
    name:"",
    subs:[],
    measures:["minutes_per_day","hours_per_day","hours_per_week","hours_per_month"],
    comment:""
  },
  {
    id:"sport",
    name:"",
    subs:[],
    measures:["minutes_per_day","hours_per_day","hours_per_week","hours_per_month"],
    comment:""
  },
  {
    id:"home",
    name:"",
    subs:[],
    measures:["minutes_per_day","hours_per_day","hours_per_week","hours_per_month"],
    comment:""
  },
  {
    id:"self",
    name:"",
    subs:[],
    measures:["minutes_per_day","hours_per_day","hours_per_week","hours_per_month"],
    comment:""
  },
  {
    id:"free",
    name:"",
    subs:[],
    measures:["minutes_per_day","hours_per_day","hours_per_week","hours_per_month"],
    comment:""
  }
];

var languages={
  lat:lat,
  eng:eng,
  ita:ita,
  esp:esp,
  fra:fra,
  ukr:ukr,
  vtn:vtn
}

var aboutTexts={
  lat:aboutText_lat,
  eng:aboutText_eng,
  ita:aboutText_ita,
  esp:aboutText_esp,
  fra:aboutText_fra,
  ukr:aboutText_ukr,
  vtn:aboutText_vtn
}

var language=lat;
var aboutText=aboutText_lat;
var subCategories;

function getThreeDigits(i) {
 if (i>99) return i;
 if (i>9) return "0"+i;
 return "00"+i;
}

function fillSubCategorysubCategoriesarray() {
 subCategories=[];
 var i=0;
 /*
 subCategories[i++]={id:"sub_sport_1",name:"",met:3.5,category:"sport"}
 subCategories[i++]={id:"sub_sport_2",name:"",met:6.5,category:"sport"}
 subCategories[i++]={id:"sub_sport_3",name:"",met:9.6,category:"sport"}
 subCategories[i++]={id:"sub_sport_4",name:"",met:13.3,category:"sport"}
 subCategories[i++]={id:"sub_sport_5",name:"",met:20.6,category:"sport"}
 subCategories[i++]={id:"sub_free_1",name:"",met:1.8,category:"free"}
 subCategories[i++]={id:"sub_free_2",name:"",met:3.52,category:"free"}
 subCategories[i++]={id:"sub_free_3",name:"",met:5.28,category:"free"}
 subCategories[i++]={id:"sub_free_4",name:"",met:8.28,category:"free"}
 subCategories[i++]={id:"sub_free_5",name:"",met:11.3,category:"free"}
 subCategories[i++]={id:"sub_work_1",name:"",met:1.7,category:"work"}
 subCategories[i++]={id:"sub_work_2",name:"",met:2.7,category:"work"}
 subCategories[i++]={id:"sub_work_3",name:"",met:3.7,category:"work"}
 subCategories[i++]={id:"sub_work_4",name:"",met:5,category:"work"}
 subCategories[i++]={id:"sub_work_5",name:"",met:7.8,category:"work"}
 */

 /*
 subCategories[i++]={id:"sub_esana",name:"Ēšana",met:1.5,category:"self"}
 subCategories[i++]={id:"sub_mazgasanas",name:"Mazgāšanās (stāvus)",met:2,category:"self"}
 subCategories[i++]={id:"sub_higiena",name:"Higiēna",met:2,category:"self"}
 subCategories[i++]={id:"sub_arkajam",name:"Ar kājām",met:4,category:"walk"}
 subCategories[i++]={id:"sub_autovadisana",name:"Automašīnas vadīšana",met:2.5,category:"walk"}
 subCategories[i++]={id:"sub_brauksanaarvelo",name:"Braukšana ar velosipēdu",met:6.8,category:"walk"}
 subCategories[i++]={id:"sub_brauksanapasazieris",name:"Braukšana transportā kā pasažierim",met:1.3,category:"walk"}
 subCategories[i++]={id:"sub_pastaigaardzivnieku",name:"Pastaiga ar mājdzīvnieku",met:3,category:"walk"}
 subCategories[i++]={id:"sub_estgatavosana",name:"Ēst gatavošana un virtuves uzkopšana",met:3.3,category:"home"}
 subCategories[i++]={id:"sub_uzkopsana",name:"Dzīvesvietas uzkopšana",met:3.5,category:"home"}
 subCategories[i++]={id:"sub_velasmazgasana",name:"Veļas mazgāšana ar rokām",met:4,category:"home"}
 subCategories[i++]={id:"sub_bernuaprupe",name:"Bērnu aprūpe",met:2.5,category:"home"}
 subCategories[i++]={id:"sub_vecoaprupe",name:"Vecu cilvēku aprūpe",met:2.3,category:"home"}
 subCategories[i++]={id:"sub_darzkopiba",name:"Dārzkopība",met:3.8,category:"home"}
 subCategories[i++]={id:"sub_darzkopibavirs60",name:"Dārzkopība >60 gadiem",met:2.3,category:"home"}
 subCategories[i++]={id:"sub_gludinasana",name:"Gludināšana",met:1.8,category:"home"}
 subCategories[i++]={id:"sub_sadzive_zema",name:"Zemas intensitātes sadzīves aktivitāte",met:1.5,category:"home"}
 subCategories[i++]={id:"sub_sadzive_videja",name:"Vidējas intensitātes sadzīves aktivitāte",met:4.5,category:"home"}
 subCategories[i++]={id:"sub_sadzive_augsta",name:"Augstas intensitātes sadzīves aktivitāte",met:8,category:"home"}
 subCategories[i++]={id:"sub_naktsmiegs",met:0.9,category:"sleep"}
 */

 /*
 var c=0;
 subCategories[i++]={id:"sub_work_",name:"",met:0,category:"work"}
 subCategories[i++]={id:"sub_work_",name:"",met:0,category:"work"}
 subCategories[i++]={id:"sub_work_",name:"",met:0,category:"work"}
 subCategories[i++]={id:"sub_work_",name:"",met:0,category:"work"}
 subCategories[i++]={id:"sub_work_",name:"",met:0,category:"work"}
 */

 subCategories[i++]={id:"sub_free_000",name:"",met:1.5,category:"free"}
 subCategories[i++]={id:"sub_free_001",name:"",met:4.25,category:"free"}
 subCategories[i++]={id:"sub_free_002",name:"",met:3.66,category:"free"}
 subCategories[i++]={id:"sub_free_003",name:"",met:2.93,category:"free"}
 subCategories[i++]={id:"sub_free_004",name:"",met:2.21,category:"free"}
 subCategories[i++]={id:"sub_free_005",name:"",met:2.02,category:"free"}
 subCategories[i++]={id:"sub_free_006",name:"",met:2.15,category:"free"}
 subCategories[i++]={id:"sub_free_007",name:"",met:1.53,category:"free"}
 subCategories[i++]={id:"sub_free_008",name:"",met:1.55,category:"free"}
 subCategories[i++]={id:"sub_free_009",name:"",met:1.65,category:"free"}
 subCategories[i++]={id:"sub_free_010",name:"",met:1.5,category:"free"}
 subCategories[i++]={id:"sub_free_011",name:"",met:1.21,category:"free"}
 subCategories[i++]={id:"sub_free_012",name:"",met:1.13,category:"free"}
 subCategories[i++]={id:"sub_free_013",name:"",met:1.33,category:"free"}
 subCategories[i++]={id:"sub_free_014",name:"",met:1.15,category:"free"}
 subCategories[i++]={id:"sub_free_015",name:"",met:1.38,category:"free"}
 subCategories[i++]={id:"sub_free_016",name:"",met:1.5,category:"free"}
 subCategories[i++]={id:"sub_free_017",name:"",met:1.9,category:"free"}
 subCategories[i++]={id:"sub_free_018",name:"",met:2.18,category:"free"}
 subCategories[i++]={id:"sub_free_019",name:"",met:1.7,category:"free"}
 subCategories[i++]={id:"sub_free_020",name:"",met:2.15,category:"free"}
 subCategories[i++]={id:"sub_free_021",name:"",met:1.6,category:"free"}
 subCategories[i++]={id:"sub_free_022",name:"",met:1.8,category:"free"}
 subCategories[i++]={id:"sub_free_023",name:"",met:1.54,category:"free"}
 subCategories[i++]={id:"sub_free_024",name:"",met:1.5,category:"free"}
 subCategories[i++]={id:"sub_free_025",name:"",met:2.1,category:"free"}
 subCategories[i++]={id:"sub_free_026",name:"",met:2.1,category:"free"}
 subCategories[i++]={id:"sub_free_027",name:"",met:2.3,category:"free"}
 subCategories[i++]={id:"sub_free_028",name:"",met:1.62,category:"free"}
 subCategories[i++]={id:"sub_free_029",name:"",met:4.5,category:"free"}
 subCategories[i++]={id:"sub_free_030",name:"",met:4.5,category:"free"}
 subCategories[i++]={id:"sub_free_031",name:"",met:6,category:"free"}
 subCategories[i++]={id:"sub_free_032",name:"",met:4.5,category:"free"}
 subCategories[i++]={id:"sub_free_033",name:"",met:6,category:"free"}
 subCategories[i++]={id:"sub_free_034",name:"",met:1.5,category:"free"}
 subCategories[i++]={id:"sub_free_035",name:"",met:1.42,category:"free"}
 subCategories[i++]={id:"sub_free_036",name:"",met:1.75,category:"free"}
 subCategories[i++]={id:"sub_free_037",name:"",met:2.29,category:"free"}
 subCategories[i++]={id:"sub_free_038",name:"",met:2,category:"free"}
 subCategories[i++]={id:"sub_free_039",name:"",met:2.5,category:"free"}
 subCategories[i++]={id:"sub_free_040",name:"",met:1.54,category:"free"}
 subCategories[i++]={id:"sub_free_041",name:"",met:1.54,category:"free"}
 subCategories[i++]={id:"sub_sleep_000",name:"",met:0.92,category:"sleep"}
 subCategories[i++]={id:"sub_work_000",name:"",met:1.73,category:"work"}
 subCategories[i++]={id:"sub_work_001",name:"",met:1.67,category:"work"}
 subCategories[i++]={id:"sub_work_002",name:"",met:1.58,category:"work"}
 subCategories[i++]={id:"sub_work_003",name:"",met:1.64,category:"work"}
 subCategories[i++]={id:"sub_work_004",name:"",met:2.02,category:"work"}
 subCategories[i++]={id:"sub_work_005",name:"",met:2.08,category:"work"}
 subCategories[i++]={id:"sub_work_006",name:"",met:1.5,category:"work"}
 subCategories[i++]={id:"sub_work_007",name:"",met:2.5,category:"work"}
 subCategories[i++]={id:"sub_work_008",name:"",met:2.13,category:"work"}
 subCategories[i++]={id:"sub_work_009",name:"",met:2.22,category:"work"}
 subCategories[i++]={id:"sub_work_010",name:"",met:2.83,category:"work"}
 subCategories[i++]={id:"sub_work_011",name:"",met:2.56,category:"work"}
 subCategories[i++]={id:"sub_work_012",name:"",met:2.58,category:"work"}
 subCategories[i++]={id:"sub_work_013",name:"",met:3.58,category:"work"}
 subCategories[i++]={id:"sub_work_014",name:"",met:2.53,category:"work"}
 subCategories[i++]={id:"sub_work_015",name:"",met:2,category:"work"}
 subCategories[i++]={id:"sub_work_016",name:"",met:1.83,category:"work"}
 subCategories[i++]={id:"sub_work_017",name:"",met:3.67,category:"work"}
 subCategories[i++]={id:"sub_work_018",name:"",met:4.29,category:"work"}
 subCategories[i++]={id:"sub_work_019",name:"",met:3.19,category:"work"}
 subCategories[i++]={id:"sub_work_020",name:"",met:2.67,category:"work"}
 subCategories[i++]={id:"sub_work_021",name:"",met:2.51,category:"work"}
 subCategories[i++]={id:"sub_self_000",name:"",met:2.1,category:"self"}
 subCategories[i++]={id:"sub_self_001",name:"",met:1.5,category:"self"}
 subCategories[i++]={id:"sub_walk_000",name:"",met:3.3,category:"walk"}
 subCategories[i++]={id:"sub_walk_001",name:"",met:2.5,category:"walk"}
 subCategories[i++]={id:"sub_walk_002",name:"",met:2,category:"walk"}
 subCategories[i++]={id:"sub_walk_003",name:"",met:1,category:"walk"}
 subCategories[i++]={id:"sub_walk_004",name:"",met:4,category:"walk"}
 subCategories[i++]={id:"sub_home_000",name:"",met:3.01,category:"home"}
 subCategories[i++]={id:"sub_home_001",name:"",met:2.51,category:"home"}
 subCategories[i++]={id:"sub_home_002",name:"",met:2.16,category:"home"}
 subCategories[i++]={id:"sub_home_003",name:"",met:2.54,category:"home"}
 subCategories[i++]={id:"sub_home_004",name:"",met:3.85,category:"home"}
 subCategories[i++]={id:"sub_home_005",name:"",met:4.49,category:"home"}
 subCategories[i++]={id:"sub_home_006",name:"",met:2.72,category:"home"}
 subCategories[i++]={id:"sub_home_007",name:"",met:2.67,category:"home"}
 subCategories[i++]={id:"sub_home_008",name:"",met:2.89,category:"home"}
 subCategories[i++]={id:"sub_home_009",name:"",met:2.18,category:"home"}
 subCategories[i++]={id:"sub_home_010",name:"",met:1.84,category:"home"}
 subCategories[i++]={id:"sub_home_011",name:"",met:2.51,category:"home"}
 subCategories[i++]={id:"sub_home_012",name:"",met:2.51,category:"home"}
 subCategories[i++]={id:"sub_sport_000",name:"",met:6.83,category:"sport"}
 subCategories[i++]={id:"sub_sport_001",name:"",met:5,category:"sport"}
 subCategories[i++]={id:"sub_sport_002",name:"",met:8,category:"sport"}
 subCategories[i++]={id:"sub_sport_003",name:"",met:8,category:"sport"}
 subCategories[i++]={id:"sub_sport_004",name:"",met:2.5,category:"sport"}
 subCategories[i++]={id:"sub_sport_005",name:"",met:4.64,category:"sport"}
 subCategories[i++]={id:"sub_sport_006",name:"",met:3,category:"sport"}
 subCategories[i++]={id:"sub_sport_007",name:"",met:9.5,category:"sport"}
 subCategories[i++]={id:"sub_sport_008",name:"",met:5.33,category:"sport"}
 subCategories[i++]={id:"sub_sport_009",name:"",met:6,category:"sport"}
 subCategories[i++]={id:"sub_sport_010",name:"",met:8,category:"sport"}
 subCategories[i++]={id:"sub_sport_011",name:"",met:3.75,category:"sport"}
 subCategories[i++]={id:"sub_sport_012",name:"",met:4,category:"sport"}
 subCategories[i++]={id:"sub_sport_013",name:"",met:8,category:"sport"}
 subCategories[i++]={id:"sub_sport_014",name:"",met:10,category:"sport"}
 subCategories[i++]={id:"sub_sport_015",name:"",met:8.5,category:"sport"}
 subCategories[i++]={id:"sub_sport_016",name:"",met:6,category:"sport"}
 subCategories[i++]={id:"sub_sport_017",name:"",met:10,category:"sport"}
 subCategories[i++]={id:"sub_sport_018",name:"",met:7.5,category:"sport"}
 subCategories[i++]={id:"sub_sport_019",name:"",met:7,category:"sport"}
 subCategories[i++]={id:"sub_sport_020",name:"",met:7,category:"sport"}
 subCategories[i++]={id:"sub_sport_021",name:"",met:5,category:"sport"}
 subCategories[i++]={id:"sub_sport_022",name:"",met:3.3,category:"sport"}
 subCategories[i++]={id:"sub_sport_023",name:"",met:5.5,category:"sport"}
 subCategories[i++]={id:"sub_sport_024",name:"",met:3.8,category:"sport"}
 subCategories[i++]={id:"sub_sport_025",name:"",met:5.22,category:"sport"}
 subCategories[i++]={id:"sub_sport_026",name:"",met:3,category:"sport"}
 subCategories[i++]={id:"sub_sport_027",name:"",met:2.5,category:"sport"}
 subCategories[i++]={id:"sub_sport_028",name:"",met:6,category:"sport"}
 subCategories[i++]={id:"sub_sport_029",name:"",met:3,category:"sport"}
 subCategories[i++]={id:"sub_sport_030",name:"",met:5.1,category:"sport"}
 subCategories[i++]={id:"sub_sport_031",name:"",met:4.78,category:"sport"}
 subCategories[i++]={id:"sub_sport_032",name:"",met:4.78,category:"sport"}
 subCategories[i++]={id:"sub_sport_033",name:"",met:4.78,category:"sport"}
 subCategories[i++]={id:"sub_sport_034",name:"",met:5.1,category:"sport"}
 subCategories[i++]={id:"sub_sport_035",name:"",met:5.1,category:"sport"}

 /*
 c=0;
 subCategories[i++]={id:"sub_walk_",name:"",met:0,category:"walk"}
 subCategories[i++]={id:"sub_walk_",name:"",met:0,category:"walk"}
 subCategories[i++]={id:"sub_walk_",name:"",met:0,category:"walk"}
 subCategories[i++]={id:"sub_walk_",name:"",met:0,category:"walk"}

 c=0;
 subCategories[i++]={id:"sub_sport_",name:"",met:0,category:"sport"}
 subCategories[i++]={id:"sub_sport_",name:"",met:0,category:"sport"}
 subCategories[i++]={id:"sub_sport_",name:"",met:0,category:"sport"}
 subCategories[i++]={id:"sub_sport_",name:"",met:0,category:"sport"}

 c=0;
 subCategories[i++]={id:"sub_home_",name:"",met:0,category:"home"}
 subCategories[i++]={id:"sub_home_",name:"",met:0,category:"home"}
 subCategories[i++]={id:"sub_home_",name:"",met:0,category:"home"}
 subCategories[i++]={id:"sub_home_",name:"",met:0,category:"home"}

 c=0;
 subCategories[i++]={id:"sub_self_",name:"",met:0,category:"self"}
 subCategories[i++]={id:"sub_self_",name:"",met:0,category:"self"}
 subCategories[i++]={id:"sub_self_",name:"",met:0,category:"self"}
 subCategories[i++]={id:"sub_self_",name:"",met:0,category:"self"}

 c=0;
 subCategories[i++]={id:"sub_free_",name:"",met:0,category:"free"}
 subCategories[i++]={id:"sub_free_",name:"",met:0,category:"free"}
 subCategories[i++]={id:"sub_free_",name:"",met:0,category:"free"}
 subCategories[i++]={id:"sub_free_",name:"",met:0,category:"free"}
 */

 /*
 var commons=[
   {id:"sub_all_0",name:"",met:0},
   {id:"sub_all_1",name:"",met:0},
   {id:"sub_all_2",name:"",met:0},
   {id:"sub_all_3",name:"",met:0},
   {id:"sub_all_4",name:"",met:0}
 ];
 fieldTypes_default.forEach((ft, j) => {
   commons.forEach((common, k) => {
     subCategories[i++]={id:common.id,name:common.name,met:common.met,category:ft.id}
   });
 });
 */
}

function sortList(subCategories) {
  subCategories.sort(function(a,b){
   var x=a.name;
   if (x) x=x.toLowerCase();
   var y=b.name;
   if (y) y=y.toLowerCase();
   if (x<y) return -1;
   if (x>y) return 1;
   return 0;
  });
}

fillSubCategorysubCategoriesarray();
