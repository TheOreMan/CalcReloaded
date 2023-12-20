var version="CALC Reloaded v3.0";
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
  vtn:vtn
}

var language=lat;
console.log(language);
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
 subCategories[i++]={id:"sub_work_"+getThreeDigits(c++),name:"",met:0,category:"work"}
 subCategories[i++]={id:"sub_work_"+getThreeDigits(c++),name:"",met:0,category:"work"}
 subCategories[i++]={id:"sub_work_"+getThreeDigits(c++),name:"",met:0,category:"work"}
 subCategories[i++]={id:"sub_work_"+getThreeDigits(c++),name:"",met:0,category:"work"}
 subCategories[i++]={id:"sub_work_"+getThreeDigits(c++),name:"",met:0,category:"work"}
 */

 c=0;
 subCategories[i++]={id:"sub_sleep_"+getThreeDigits(c++),name:"",met:0,category:"sleep"}

 /*
 c=0;
 subCategories[i++]={id:"sub_walk_"+getThreeDigits(c++),name:"",met:0,category:"walk"}
 subCategories[i++]={id:"sub_walk_"+getThreeDigits(c++),name:"",met:0,category:"walk"}
 subCategories[i++]={id:"sub_walk_"+getThreeDigits(c++),name:"",met:0,category:"walk"}
 subCategories[i++]={id:"sub_walk_"+getThreeDigits(c++),name:"",met:0,category:"walk"}

 c=0;
 subCategories[i++]={id:"sub_sport_"+getThreeDigits(c++),name:"",met:0,category:"sport"}
 subCategories[i++]={id:"sub_sport_"+getThreeDigits(c++),name:"",met:0,category:"sport"}
 subCategories[i++]={id:"sub_sport_"+getThreeDigits(c++),name:"",met:0,category:"sport"}
 subCategories[i++]={id:"sub_sport_"+getThreeDigits(c++),name:"",met:0,category:"sport"}

 c=0;
 subCategories[i++]={id:"sub_home_"+getThreeDigits(c++),name:"",met:0,category:"home"}
 subCategories[i++]={id:"sub_home_"+getThreeDigits(c++),name:"",met:0,category:"home"}
 subCategories[i++]={id:"sub_home_"+getThreeDigits(c++),name:"",met:0,category:"home"}
 subCategories[i++]={id:"sub_home_"+getThreeDigits(c++),name:"",met:0,category:"home"}

 c=0;
 subCategories[i++]={id:"sub_self_"+getThreeDigits(c++),name:"",met:0,category:"self"}
 subCategories[i++]={id:"sub_self_"+getThreeDigits(c++),name:"",met:0,category:"self"}
 subCategories[i++]={id:"sub_self_"+getThreeDigits(c++),name:"",met:0,category:"self"}
 subCategories[i++]={id:"sub_self_"+getThreeDigits(c++),name:"",met:0,category:"self"}

 c=0;
 subCategories[i++]={id:"sub_free_"+getThreeDigits(c++),name:"",met:0,category:"free"}
 subCategories[i++]={id:"sub_free_"+getThreeDigits(c++),name:"",met:0,category:"free"}
 subCategories[i++]={id:"sub_free_"+getThreeDigits(c++),name:"",met:0,category:"free"}
 subCategories[i++]={id:"sub_free_"+getThreeDigits(c++),name:"",met:0,category:"free"}
 */

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
