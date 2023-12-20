function start() {
  document.title=version;
  document.getElementById("periods").style.display="block";
  redrawAll();
}

function createCell(row,s) {
  var cell=document.createElement("td");
  row.appendChild(cell);
  cell.style.border="1px solid green";
  var lab=document.createElement("label");
  lab.className="withoutColon";
  lab.innerText=s;
  cell.appendChild(lab);
}

function createFirstRow(body,s) {
  var row=document.createElement("tr");
  body.appendChild(row);
  for (var j=0;j<8;j++) {
    var cell=document.createElement("td");
    row.appendChild(cell);
    var lab=document.createElement("label");
    lab.setAttribute("tag",s);
    lab.className="withoutColon";
    cell.appendChild(lab);
    if (j<7) s=fieldTypes_default[j].id;
    if (j>0) cell.style.border="1px solid green";
  }
}

function getSelection(x) {
  switch (x) {
    case 1: return "hours_per_day";
    case 2: return "cals_per_week";
    case 3: return "mets_per_week";
  }
  return "";
}

function getDifferenceInDays(startDate,endDate) {
 var start=new Date(startDate);
 var end=new Date(endDate);
 var days=Math.round((end.getTime()-start.getTime())/1000/3600/24+1);
 return days;
}

function generateTable(x) {
  var table=document.getElementById("analyzeTable");
  table.innerHTML="";
  var body=document.createElement("tbody");
  body.id="tableBody";
  table.appendChild(body);
  createFirstRow(body,getSelection(x));
  var periodArr=copyWithoutDeleteds(persons[0].periods);
  var birthDate=getDateString("birthdate");
  for (var i=0;i<periodArr.length;i++) {
    var periodNr=periodArr[i].id;
    var fromDate=getDateString("person_0_period_"+periodNr+"_fromdate");
    var toDate=getDateString("person_0_period_"+periodNr+"_todate");
    var a1=getDifferenceInDays(birthDate,fromDate)/365.25;
    var an=getDifferenceInDays(birthDate,toDate)/365.25;
    var kg=Number(document.getElementById("person_0_period_"+periodNr+"_weight").value);
    var h=Number(document.getElementById("person_0_period_"+periodNr+"_height").value);
    row=document.createElement("tr");
    body.appendChild(row);
    createCell(row,periodArr[i].name);
    var s=document["equation_form"]["equation"].value;
    var BMR;
    if (s[s.length-1]=='1') BMR=getTotalBMR_Harris(a1,an,kg,h);
    else BMR=getTotalBMR_Jeor(a1,an,kg,h);
    for (var j=0;j<7;j++) {
      var val=0;
      if (x==1) val=daysArr[i][j];
      else if (x==2) val=(7*metsArr[i][j]/24*BMR).toFixed(2);
      else if (x==3) val=(7*metsArr[i][j]).toFixed(2);
      createCell(row,val);
    }
  }
}

function getTotalBMR_Harris_plain(a1,an,kg,h,g) {
  var genderKoef=-5.677;
  var rest=13.397*kg+4.799*h+88.362;
  if (g==0) {
    genderKoef=-4.33;
    rest=9.247*kg+3.098*h+477.593;
  }
  return genderKoef*((a1+an)/2)+rest;
}

function getTotalBMR_Harris(a1,an,kg,h) {
  var gender=document.getElementById("gender").selectedIndex;
  return getTotalBMR_Harris_plain(a1,an,kg,h,gender);
}

function getTotalBMR_Jeor(a1,an,kg,h) {
  var gender=document.getElementById("gender").selectedIndex;
  var genderKoef=5;
  if (gender==0) genderKoef=-161;
  return 10*kg+6.25*h-5*(a1+an)/2+genderKoef;
}

function generateArrays() {
  daysArr=[];
  metsArr=[];
  var periodArr=copyWithoutDeleteds(persons[0].periods);
  for (var i=0;i<periodArr.length;i++) {
    var periodNr=periodArr[i].id;
    var periodDaysArr=[],periodMetsArr=[];
    var dayTypeArr=periodArr[i].dayTypes;
    for (var k=0;k<fieldTypes_default.length;k++) {
      periodDaysArr[k]=0;
      periodMetsArr[k]=0;
    }
    for (var j=0;j<dayTypeArr.length;j++) {
      var fieldArr=dayTypeArr[j].fields;
      var daysTotal=getPeriodDayTypeDayCount(periodNr,dayTypeArr[j]);
      for (var k=0;k<fieldArr.length;k++) {
        var prefix="person_0_period_"+periodNr+"_"+dayTypeArr[j].id+"_"+fieldArr[k].id+"_";
        var val=document.getElementById(prefix+"value").value;
        var measureVal=document.getElementById(prefix+"measure").selectedIndex;
        var res=calculateTotalValue(fieldArr[k].id,val,measureVal,daysTotal);
        if (!isNaN(res)) res=Number(res); else res=0.0;
        periodDaysArr[k]+=res;
        var sum=0;
        for (var l=0;l<fieldArr[k].subs.length;l++) {
          var prefix="person_0_period_"+periodNr+"_"+dayTypeArr[j].id+"_"+fieldArr[k].id+"_sub_"+l+"_";
          var val=document.getElementById(prefix+"value").value;
          var measureVal=document.getElementById(prefix+"measure").selectedIndex;
          var res=calculateTotalValue(fieldArr[k].id,val,measureVal,daysTotal);
          if (!isNaN(res)) res=Number(res); else res=0.0;
          var x=res*getMetsByName(fieldArr[k].subs[l]);
          sum+=x;
        }
        periodMetsArr[k]+=sum;
      }
    }
    for (var j=0;j<periodDaysArr.length;j++) {
      var daysInPeriod=getPeriodDayCount(periodNr);
      periodDaysArr[j]=(24*periodDaysArr[j]/daysInPeriod).toFixed(2);
      periodMetsArr[j]=(24*periodMetsArr[j]/daysInPeriod).toFixed(2);
    }
    daysArr.push(periodDaysArr);
    metsArr.push(periodMetsArr);
  }
}

function getMetsByName(s) {
  for (var i=0;i<subCategories.length;i++)
    if (subCategories[i].id==s) return subCategories[i].met;
  return 0;
}

function existsInterval(from,to) {
  if (from==""||to=="") return true;
  for (int of intervals)
    if (int.from==from && int.to==to) return true;
  return false;
}

function analyze() {
  var eq=document["equation_form"]["equation"].value;
  var type=document["valueType_form"]["valueType"].value;
  document.getElementById("analyzeBtn").setAttribute("tag","recalculate");
  generateArrays();
  var sel=Number(type[type.length-1]);
  generateTable(sel);
  var from=document.getElementById("interval_from").value;
  var to=document.getElementById("interval_to").value;
  if (!existsInterval(from,to)) intervals.push({from:from,to:to});
  addIntervalsToTable(sel);
  rewriteAllTexts();
}

function prepareSpanArrays(fromDate,toDate) {
  var birthDate=document.getElementById("birthdate").value;
  timeSpanArr=[];
  timeSpanCalsArr=[];
  timeSpanMetsArr=[];
  for (var i=0;i<fieldTypes_default.length;i++) {
    timeSpanArr.push(0);
    timeSpanCalsArr.push(0);
    timeSpanMetsArr.push(0);
  }
  var periodArr=copyWithoutDeleteds(persons[0].periods);
  for (var i=0;i<periodArr.length;i++) {
    var periodNr=periodArr[i].id;
    var startDate=document.getElementById("person_0_period_"+periodNr+"_fromdate").value;
    var endDate=document.getElementById("person_0_period_"+periodNr+"_todate").value;
    var kg=Number(document.getElementById("person_0_period_"+periodNr+"_weight").value);
    var h=Number(document.getElementById("person_0_period_"+periodNr+"_height").value);
    var days,a1,an;
    if (getDifferenceInDays(endDate,fromDate)>1) continue;
    if (getDifferenceInDays(toDate,startDate)>1) continue;
    if (getDifferenceInDays(fromDate,startDate)>0) {
      if (getDifferenceInDays(toDate,endDate)>0) {
        days=getDifferenceInDays(startDate,toDate);
        a1=getDifferenceInDays(birthDate,startDate);
        an=getDifferenceInDays(birthDate,toDate);
      }
      else {
        days=getDifferenceInDays(startDate,endDate);
        a1=getDifferenceInDays(birthDate,startDate);
        an=getDifferenceInDays(birthDate,endDate);
      }
    }
    else {
      if (getDifferenceInDays(toDate,endDate)>0) {
        days=getDifferenceInDays(fromDate,toDate);
        a1=getDifferenceInDays(birthDate,fromDate);
        an=getDifferenceInDays(birthDate,toDate);
      }
      else {
        days=getDifferenceInDays(fromDate,endDate);
        a1=getDifferenceInDays(birthDate,fromDate);
        an=getDifferenceInDays(birthDate,endDate);
      }
    }
    a1/=365.25;
    an/=365.25;
    var s=document["equation_form"]["equation"].value;
    var BMR;
    if (s[s.length-1]=='1') BMR=getTotalBMR_Harris(a1,an,kg,h);
    else BMR=getTotalBMR_Jeor(a1,an,kg,h);
    for (var j=0;j<fieldTypes_default.length;j++) {
      timeSpanArr[j]+=(days*daysArr[i][j]);
      timeSpanCalsArr[j]+=(days*metsArr[i][j]/24*BMR);
      timeSpanMetsArr[j]+=(days*metsArr[i][j]);
    }
  }
  var dayCount=getDifferenceInDays(fromDate,toDate);
  for (var i=0;i<timeSpanArr.length;i++) {
    timeSpanArr[i]/=dayCount;
    timeSpanCalsArr[i]/=(dayCount/7);
    timeSpanMetsArr[i]/=(dayCount/7);
  }
}

function addIntervalsToTable(x) {
  var body=document.getElementById("tableBody");
  for (int of intervals) {
    row=document.createElement("tr");
    body.appendChild(row);
    var from=int.from;
    var to=int.to;
    var s=language["from"]+" "+from+" "+language["till"]+" "+to;
    createCell(row,s);
    prepareSpanArrays(from,to);
    for (var i=0;i<timeSpanArr.length;i++) {
      var val=0;
      if (x==1) val=timeSpanArr[i];
      else if (x==2) val=timeSpanCalsArr[i];
      else if (x==3) val=timeSpanMetsArr[i];
      createCell(row,val.toFixed(2));
    }
    img=document.createElement("img");
    img.className="headerButton clickable";
    img.src="icons/delete.png";
    img.setAttribute("tag","deleteInterval");
    img.addEventListener("click",function(event) {deleteInterval(event);});
    row.appendChild(img);
  }
}

function deleteInterval(event) {
  var s=event.target.parentNode.childNodes[0].childNodes[0].innerText;
  var interval=extractDates(s);
  intervals = intervals.filter(function (int) {
    return int.from !== interval.from || int.to !== interval.to;
  });
  document.getElementById("interval_from").value="";
  document.getElementById("interval_to").value="";
  analyze();
  rewriteAllTexts();
}

function deepCopy(arr) {
  return JSON.parse(JSON.stringify(arr));
}

function getPeriodById(periodNr) {
  var res=null;
  persons[0].periods.forEach((period, i) => {
    if (!period.deleted && period.id==periodNr) res=period;
  });
  return res;
}

function addPeriod(personNr,dayTypes=dayTypes_default,defaultTypes=true) {
  var s="~~~ "+language["new_period_name"]+" ~~~";
  var p={id:periodCount,name:s,livingPlace:0,dayTypes:deepCopy(dayTypes),deleted:false};
  if (defaultTypes)
    p.dayTypes.forEach((item, i) => {
      item.fields=deepCopy(fieldTypes_default);
    });
  persons[personNr].periods.push(p);
  var periodDiv=document.getElementById("periods");
  var pDiv=createPeriodDiv(periodCount,p["name"]);
  periodCount++;
  periodDiv.appendChild(pDiv);
  rewriteAllTexts();
  addPrintingIDToChildren(pDiv);
}

function renameDefaults() {
  dayTypes_default.forEach((item, i) => {
    var s=language[item.id];
    if (s!="") item.name=s;
  });
  for (var key in measures) {
    measures[key]=language[key];
  }
  subCategories.forEach((item, i) => {
    item.name=language[item.id];
  });
  sortList(subCategories);
}

function renameActivityHints(lang) {
  activities_sport.forEach((item, i) => {
    item.name=item["name_"+lang];
  });
  activities_free.forEach((item, i) => {
    item.name=item["name_"+lang];
  });
  activities_work.forEach((item, i) => {
    item.name=item["name_"+lang];
  });
  sortList(activities_sport);
  sortList(activities_free);
  sortList(activities_work);
}

function renameActualPerson() {
  persons[0].periods.forEach((period, i) => {
    period.dayTypes.forEach((item, i) => {
      var s=language[item.id];
      if (s!=undefined) item.name=s;
    });
  });
}

function switchLanguage(evt) {
  var s=evt.target.src;
  var lang=s.substring(s.lastIndexOf("/")+1,s.indexOf("."));
  language=languages[lang];
  renameDefaults();
  renameActualPerson();
  renameActivityHints(lang);
  rewriteAllTexts();
}

function createSelect(periodNr,id,options) {
  var sel=document.createElement("select");
  sel.className="input shadowed";
  sel.id=id;
  sel.addEventListener("change",function(event) {livingPlaceSelected(event,periodNr);});
  //sel.addEventListener("click",function(event) {printID(event);});
  options.forEach((item, i) => {
    var opt=document.createElement("option");
    sel.appendChild(opt);
    opt.setAttribute("tag",item);
  });
  return sel;
}

function finishChangingPeriodName(btn,input,periodNr) {
  btn.className="headerButton clickable visibleIcon";
  const inputValue = input.value;
  const newLabel = document.createElement("h2");
  newLabel.className="clickable";
  newLabel.id="person_0_period_"+periodNr+"_title";
  newLabel.innerText = inputValue;
  newLabel.setAttribute("onclick","expandCollapse(event)");
  input.parentNode.replaceChild(newLabel, input);
  getPeriodById(periodNr).name=inputValue;
}

function changePeriodName(event,periodNr) {
  var btn=event.target;
  btn.className="headerButton clickable hidden";
  const label = btn.previousElementSibling;
  const labelText = label.innerText;
  const input = document.createElement("input");
  input.type = "text";
  input.value = labelText;
  input.className="editingText";
  label.parentNode.replaceChild(input, label);
  input.focus();
  input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") input.blur();//finishChangingPeriodName(btn,input,periodNr);
  });
  input.addEventListener("blur", function(event) {
    finishChangingPeriodName(btn,input,periodNr);
  });
}

function finishChangingDayTypeName(btn,input,periodNr,dt) {
  var id="person_0_period_"+periodNr+"_"+dt.id+"_title";
  btn.className="headerButton clickable visibleIcon";
  const inputValue = input.value;
  const newLabel = document.createElement("h4");
  newLabel.className="dayTypeLine";
  newLabel.id=id;
  newLabel.innerText = inputValue;
  input.parentNode.replaceChild(newLabel, input);
  dt.name=inputValue;
  var headerBtn=document.getElementById("person_0_period_"+periodNr+"_"+dt.id+"_headerBtn");
  headerBtn.innerText=inputValue;
  var tag="";
  dayTypes_default.forEach((item, i) => {
    if (inputValue==language[item.id]) tag=item.id;
  });
  headerBtn.setAttribute("tag",tag);
  newLabel.setAttribute("tag",tag);
}

function changeDayTypeName(event,periodNr,dt) {
  var btn=event.target;
  btn.className="headerButton clickable hidden";
  var id="person_0_period_"+periodNr+"_"+dt.id+"_title";
  const label=document.getElementById(id);
  const labelText = label.innerText;
  const input = document.createElement("input");
  input.type = "text";
  input.id=id;
  input.value = labelText;
  input.className="editingText";
  label.parentNode.replaceChild(input, label);
  input.focus();
  input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") input.blur();//finishChangingPeriodName(btn,input,periodNr);
  });
  input.addEventListener("blur", function(event) {
    finishChangingDayTypeName(btn,input,periodNr,dt);
  });
}

function createPeriodFilledRow(periodNr,prefix) {
  var div=document.createElement("div");
  var lab=document.createElement("label");
  div.appendChild(lab);
  lab.className="periodLabel";
  lab.setAttribute("tag","period_filled");
  var h2=document.createElement("h2");
  div.appendChild(h2);
  h2.innerText="0";
  h2.className="input number";
  h2.id=prefix+"filledDays";
  //h2.addEventListener("click",function(event) {printID(event);});
  var h4=document.createElement("h4");
  div.appendChild(h4);
  h4.setAttribute("tag","period_days");
  h4.className="input plain";
  h4=document.createElement("h4");
  div.appendChild(h4);
  h4.className="input plain";
  h4.innerText="\xa0(";
  h4=document.createElement("label");
  div.appendChild(h4);
  h4.setAttribute("tag","needed");
  h4.className="input plain";
  h2=document.createElement("h2");
  div.appendChild(h2);
  h2.innerText="0";
  h2.className="input number";
  h2.id=prefix+"totalDays";
  //h2.addEventListener("click",function(event) {printID(event);});
  h4=document.createElement("h4");
  div.appendChild(h4);
  h4.setAttribute("tag","period_days");
  h4.className="input plain";
  h4=document.createElement("h4");
  div.appendChild(h4);
  h4.className="input plain";
  h4.innerText=")";
  return div;
}

function createPeriodLengthRow(periodNr,prefix) {
  var div=document.createElement("div");
  var lab=document.createElement("label");
  div.appendChild(lab);
  lab.className="periodLabel";
  lab.setAttribute("tag","period_length");
  var h2=document.createElement("h2");
  div.appendChild(h2);
  h2.innerText="0";
  h2.className="input number";
  h2.id=prefix+"years";
  //h2.addEventListener("click",function(event) {printID(event);});
  var h4=document.createElement("h4");
  div.appendChild(h4);
  h4.setAttribute("tag","period_years");
  h4.className="input plain";
  h4=document.createElement("h4");
  div.appendChild(h4);
  h4.className="input plain";
  h4.innerText=", ";
  h2=document.createElement("h2");
  div.appendChild(h2);
  h2.innerText="0";
  h2.className="input number";
  h2.id=prefix+"months";
  //h2.addEventListener("click",function(event) {printID(event);});
  h4=document.createElement("h4");
  div.appendChild(h4);
  h4.setAttribute("tag","period_months");
  h4.className="input plain";
  h4=document.createElement("h4");
  div.appendChild(h4);
  h4.className="input plain";
  h4.innerText=", ";
  h2=document.createElement("h2");
  div.appendChild(h2);
  h2.innerText="0";
  h2.className="input number";
  h2.id=prefix+"days";
  //h2.addEventListener("click",function(event) {printID(event);});
  var h4=document.createElement("h4");
  div.appendChild(h4);
  h4.setAttribute("tag","period_days");
  h4.className="input plain";
  h4=document.createElement("h4");
  return div;
}

function createPeriodDiv(i,s) {
  var prefix="person_0_period_"+i+"_";
  var header=document.createElement("div");
  header.addEventListener("click",function(event) {changeActivePeriod(header);});
  header.className="tab-header";
  header.id=prefix+"header";
  //header.onclick="toggleTabs(event)";
  var lab=document.createElement("label");
  lab.innerHTML="+";
  lab.id=prefix+"toggle";
  lab.className="toggle-icon clickable";
  lab.setAttribute("onclick","expandCollapse(event)");
  header.appendChild(lab);
  lab=document.createElement("h2");
  lab.innerText=s;
  lab.className="clickable";
  lab.id=prefix+"title";
  lab.setAttribute("onclick","expandCollapse(event)");
  header.appendChild(lab);
  //var btn=document.createElement("button");
  //btn.setAttribute("tag","changePeriodName");
  //btn.className="headerButton clickable visible";
  //btn.addEventListener("click",function(event) {changePeriodName(event,i);});
  //header.appendChild(btn);
  var img=document.createElement("img");
  img.className="headerButton clickable visible";
  img.src="icons/edit.png";
  img.setAttribute("tag","changePeriodName")
  img.addEventListener("click",function(event) {changePeriodName(event,i);});
  header.appendChild(img);
  img=document.createElement("img");
  img.className="headerButton clickable visible";
  img.src="icons/delete.png";
  img.setAttribute("tag","deletePeriod");
  img.addEventListener("click",function(event) {deletePeriod(event,i);});
  header.appendChild(img);
  var body=document.createElement("div");
  body.addEventListener("click",function(event) {changeActivePeriod(body);});
  body.className="tab-content";
  body.id=prefix+"body";
  var div=createPeriodIntroRow(i,"from",prefix+"fromdate","date","change","periodDateSelected");
  body.appendChild(div);
  div=createPeriodIntroRow(i,"till",prefix+"todate","date","change","periodDateSelected");
  body.appendChild(div);
  div=createPeriodLengthRow(i,prefix);
  body.appendChild(div);
  div=document.createElement("div");
  body.appendChild(div);
  lab=document.createElement("label");
  lab.className="periodLabel";
  lab.setAttribute("tag","livingPlace");
  div.appendChild(lab);
  var sel=createSelect(i,prefix+"livingPlace",["Riga","town","rural"]);
  div.appendChild(sel);
  div=createPeriodIntroRow(i,"weight",prefix+"weight","text","input","periodAttributeChanged");
  body.appendChild(div);
  div=createPeriodIntroRow(i,"height",prefix+"height","text","input","periodAttributeChanged");
  body.appendChild(div);
  lab=document.createElement("label");
  lab.className="periodLabel";
  div=document.createElement("div");
  body.appendChild(div);
  lab.setAttribute("tag","selfEval");
  div.appendChild(lab);
  sel=createSelect(i,prefix+"selfEval",[1,2,3,4,5,6,7,8,9,10]);
  div.appendChild(sel);
  div=createPeriodFilledRow(i,prefix);
  body.appendChild(div);

  var pDiv=document.createElement("div");
  pDiv.className="period visible";
  pDiv.id=prefix+"div";
  pDiv.appendChild(header);
  pDiv.appendChild(body);

  var tabHeaderDiv=document.createElement("div");
  var tabHeaders=document.createElement("div");
  tabHeaders.className="headerButton";
  tabHeaderDiv.appendChild(tabHeaders);
  tabHeaders.id="person_0_period_"+i+"_dayTypesHeader";
  var tabContentsDiv=document.createElement("div");
  tabContentsDiv.id="person_0_period_"+i+"_dayTypesContents";
  body.appendChild(tabHeaderDiv);
  body.appendChild(tabContentsDiv);
  persons[0].periods[i].dayTypes.forEach((item) => {
    if (!item.deleted) createDayTypeTab(tabHeaders,tabContentsDiv,i,item,true);
  });
  var img=document.createElement("img");
  img.className="headerButton clickable";
  img.src="icons/add.png";
  img.setAttribute("tag","addDayType")
  img.addEventListener("click",function(event) {modal_addDayType(event,i);});
  tabHeaderDiv.appendChild(img);
  return pDiv;
}

function modal_addDayType(event,i) {
  currentPeriodNr=i;
  var modal=document.getElementById("modal_addDayType");
  modal.style.display="block";
  var inp=document.getElementById("newDayTypeName");
  inp.value="";
  inp.focus();
  var sel=document.getElementById("dayTypes_list");
  sel.selectedIndex=0;
}

function deletePeriod(event,periodNr) {
  const response = confirm(language["confirm_periodDelete"]);
  if (!response) return;
  getPeriodById(periodNr).deleted=true;
  document.getElementById("restorePeriodsBtn").classList.remove("hidden");
}

function createDayTypeTab(tabHeaderDiv,tabContentsDiv,periodNr,dayType,isDefault) {
  var tabID="person_0_period_"+periodNr+"_"+dayType.id;
  var btn=document.createElement("button");
  if (isDefault) btn.setAttribute("tag",dayType.id);
  btn.innerText=dayType.name;
  btn.id=tabID+"_headerBtn";
  btn.className="tablinks";
  btn.addEventListener("click",function(event) {openTab(event, tabID);});
  tabHeaderDiv.appendChild(btn);
  var div=document.createElement("div");
  div.className="tabcontent";
  div.id=tabID;
  tabContentsDiv.appendChild(div);
  //var p=document.createElement("p");
  //p.innerText=tabID;
  //div.appendChild(p);
  var h4=document.createElement("h4");
  div.appendChild(h4);
  if (isDefault) h4.setAttribute("tag",dayType.id);
  h4.innerText=dayType.name;
  h4.id=tabID+"_title";
  h4.className="dayTypeLine";
  h4=document.createElement("h4");
  div.appendChild(h4);
  h4.innerText="\xa0(";
  h4.className="dayTypeLine";
  h4=document.createElement("label");
  div.appendChild(h4);
  h4.setAttribute("tag","type");
  h4.className="dayTypeLine";
  h4=document.createElement("h4");
  div.appendChild(h4);
  h4.setAttribute("tag",getDayTypeNameByType(dayType.type));
  h4.className="dayTypeLine";
  h4=document.createElement("h4");
  div.appendChild(h4);
  h4.innerText=")";
  h4.className="dayTypeLine";
  var img=document.createElement("img");
  img.className="headerButton clickable";
  img.src="icons/edit.png";
  img.id=tabID+"_changeImg";
  img.setAttribute("tag","changeDayTypeName");
  img.addEventListener("click",function(event) {changeDayTypeName(event,periodNr,dayType);});
  div.appendChild(img);
  img=document.createElement("img");
  img.className="headerButton clickable";
  img.src="icons/delete.png";
  img.setAttribute("tag","deleteDayType");
  img.addEventListener("click",function(event) {deleteDayType(event,periodNr,dayType);});
  div.appendChild(img);

  createFields(div,periodNr,dayType);
  return div;
}

function deleteDayType(event,periodNr,dt) {
  const response = confirm(language["confirm_dayTypeDelete"]);
  if (!response) return;
  dt.deleted=true;
  var tabID="person_0_period_"+periodNr+"_"+dt.id;
  var btn=document.getElementById(tabID+"_headerBtn");
  btn.classList.add("hidden");
  var div=document.getElementById("person_0_period_"+periodNr+"_dayTypesHeader");
  for (var i=0;i<div.childNodes.length;i++) {
    if (div.childNodes[i]==btn) continue;
    if (div.childNodes[i].classList.contains("hidden")) continue;
    div.childNodes[i].click();
    break;
  }
  volumeValueChanged(periodNr);
}

function getDayTypeNameByType(x) {
  var res="";
  dayTypes_default.forEach((item, i) => {
    if (item.type==x) res=item.id;
  });
  return res;
}

function createSubFieldRow(periodNr,dayType,field,subFieldNr,auto) {
  var prefix="person_0_period_"+periodNr+"_"+dayType.id+"_"+field.id+"_sub_"+subFieldNr;
  var div=document.createElement("div");
  //parentDiv.appendChild(div);
  var lab=document.createElement("label");
  lab.setAttribute("tag",field.subs[subFieldNr]);
  lab.className="subLabel";
  if (auto) lab.className+=" automatic";
  lab.id=prefix+"_label";
  div.appendChild(lab);
  var inp=document.createElement("input");
  div.appendChild(inp);
  inp.type="text";
  inp.className="input fixed shadowed";
  inp.id=prefix+"_value";
  inp.addEventListener("input",function(event) {subValueChanged(event.target.id,field,dayType,periodNr);});
  var sel=document.createElement("select");
  div.appendChild(sel);
  sel.className="input shadowed";
  sel.id=prefix+"_measure";
  //sel.addEventListener("click",function(event) {printID(event);});
  sel.addEventListener("input",function(event) {subValueChanged(event.target.id,field,dayType,periodNr);});
  field.measures.forEach((item, i) => {
    var opt=document.createElement("option");
    opt.setAttribute("tag",item);
    sel.appendChild(opt);
  });
  img=document.createElement("img");
  img.className="headerButton clickable";
  img.src="icons/delete.png";
  img.setAttribute("tag","deleteSubcategory");
  img.addEventListener("click",function(event) {deleteSubcategory(event);});
  div.appendChild(img);
  img=document.createElement("img");
  img.className="headerButton clickable";
  img.src="icons/arrow.png";
  img.setAttribute("tag","duplicateSubcategory");
  img.addEventListener("click",function(event) {duplicateSubcategory(event);});
  div.appendChild(img);
  return div;
}

function duplicateSubcategory(event) {
  var div=event.target.parentNode;
  var lab=div.childNodes[0];
  var sub=lab.getAttribute("tag");
  var s=lab.id;
  var res=extractIds(s);
  var dayTypeFrom=getDayTypeByID(res.periodNr,res.dayTypeId);
  var dayTypeTo=null;
  var dt=persons[0].periods[res.periodNr].dayTypes;
  dt.forEach((item, i) => {
    if (item.id==dayTypeFrom.id && i<dt.length-1) dayTypeTo=dt[i+1];
  });
  if (!dayTypeTo) return;
  var fieldFrom=getFieldByID(dayTypeFrom,res.fieldId);
  var fieldTo=getFieldByID(dayTypeTo,res.fieldId);
  res.person=persons[0];
  res.period=persons[0].periods[res.periodNr];
  res.dayType=dayTypeTo;
  res.field=fieldTo;
  var id=getSubCategoryIDByName(fieldFrom.subs[Number(res.subNr)]);
  if (id=="") return;
  if (!res.field.subs.includes(id)) {
    res.field.subs.push(id);
    addSubCategoryToSubDiv(res,true);
    rewriteAllTexts();
  }
  else return;
  var fromField=document.getElementById("person_0_period_"+res.periodNr+"_"+res.dayTypeId+"_"+res.fieldId+"_sub_"+res.subNr+"_value");
  var toField=document.getElementById("person_0_period_"+res.periodNr+"_"+dayTypeTo.id+"_"+fieldTo.id+"_sub_"+(fieldTo.subs.length-1)+"_value");
  toField.value=fromField.value;
  fromField=document.getElementById("person_0_period_"+res.periodNr+"_"+res.dayTypeId+"_"+res.fieldId+"_sub_"+res.subNr+"_measure");
  toField=document.getElementById("person_0_period_"+res.periodNr+"_"+dayTypeTo.id+"_"+fieldTo.id+"_sub_"+(fieldTo.subs.length-1)+"_measure");
  toField.selectedIndex=fromField.selectedIndex;
  subValueChanged("person_0_period_"+res.periodNr+"_"+dayTypeTo.id+"_"+fieldTo.id+"_sub_0_value",fieldTo,dayTypeTo,res.periodNr);
}

function deleteSubcategory(event) {
  var div=event.target.parentNode;
  var lab=div.childNodes[0];
  var sub=lab.getAttribute("tag");
  var s=lab.id;
  var res=extractIds(s);
  var dayType=getDayTypeByID(res.periodNr,res.dayTypeId);
  var field=getFieldByID(dayType,res.fieldId);
  field.subs = field.subs.filter(function (s) {
    return s!=sub;
  });
  var parent=div.parentNode;
  div.remove();
  var count=0;
  for (subDiv of parent.childNodes) {
    for (var x=0;x<3;x++)
      renameId(subDiv.childNodes[x],count);
    count++;
  }
  subValueChanged(lab.id,field,dayType,res.periodNr);
}

function deleteSubcategory1(event) {
  var div=event.target.parentNode;
  var lab=div.childNodes[0];
  var sub=lab.getAttribute("tag");
  var s=lab.id;
  var start="person_0_period_";
  if (!s.startsWith(start)) return false;
  s=s.substring(start.length);
  var i=s.indexOf("_");
  if (i==-1) return false;
  var periodNr=s.substring(0,i);
  s=s.substring(i+1);
  i=s.indexOf("_");
  if (i==-1) return false;
  var dayTypeId=s.substring(0,i);
  var dayType=getDayTypeByID(periodNr,dayTypeId);
  s=s.substring(i+1);
  i=s.indexOf("_");
  if (i==-1) return false;
  var fieldId=s.substring(0,i);
  var field=getFieldByID(dayType,fieldId);
  field.subs = field.subs.filter(function (s) {
    return s!=sub;
  });
  var parent=div.parentNode;
  div.remove();
  var count=0;
  for (subDiv of parent.childNodes) {
    for (var x=0;x<3;x++)
      renameId(subDiv.childNodes[x],count);
    count++;
  }
  subValueChanged(lab.id,field,dayType,periodNr);
}

function renameId(elem,x) {
  if (!elem) return;
  var s=elem.id;
  if (!s) return;
  var i=s.indexOf("_sub_");
  if (i==-1) return;
  var j=s.indexOf("_",i+5);
  if (j==-1) return;
  elem.id=s.substring(0,i+5)+x+s.substring(j);
}

function createFieldRow(parentDiv,periodNr,dayType,field) {
  var prefix="person_0_period_"+periodNr+"_"+dayType.id+"_";
  var div=document.createElement("div");
  parentDiv.appendChild(div);
  var lab=document.createElement("label");
  lab.setAttribute("tag",field.id);
  lab.className="periodLabel";
  div.appendChild(lab);
  var inp=document.createElement("input");
  div.appendChild(inp);
  inp.type="text";
  inp.className="input fixed shadowed";
  inp.id=prefix+field.id+"_value";
  //inp.addEventListener("click",function(event) {printID(event);});
  inp.addEventListener("input",function(event) {valueChanged(event.target.id,dayType,periodNr);});
  var sel=document.createElement("select");
  div.appendChild(sel);
  sel.className="input shadowed";
  sel.id=prefix+field.id+"_measure";
  //sel.addEventListener("click",function(event) {printID(event);});
  sel.addEventListener("input",function(event) {valueChanged(event.target.id,dayType,periodNr);});
  if (field.subs.length>0) {
    inp.disabled=true;
    sel.disabled=true;
  }
  field.measures.forEach((item, i) => {
    var opt=document.createElement("option");
    opt.setAttribute("tag",item);
    sel.appendChild(opt);
  });
  lab=document.createElement("label");
  lab.setAttribute("tag","comment");
  lab.className="commentLabel";
  div.appendChild(lab);
  inp=document.createElement("textarea");
  div.appendChild(inp);
  //inp.type="text";
  //inp.setAttribute("cols",200);
  inp.className="input comment shadowed";
  inp.id=prefix+field.id+"_comment";
  //var br=document.createElement("br");
  //div.appendChild(br);
  var subFieldDiv=document.createElement("div");
  div.appendChild(subFieldDiv);
  //subFieldDiv.id=prefix+field.id+"_";
  subFieldDiv.className="subFieldDiv";
  field.subs.forEach((item, i) => {
    var subDiv=createSubFieldRow(periodNr,dayType,field,i,false);
    subFieldDiv.appendChild(subDiv);
    //subValueChanged(prefix+field.id+"_sub_"+i+"_value",field,dayType,periodNr);
  });
  lab=document.createElement("label");
  subFieldDiv.appendChild(lab);
  lab.innerText="+";
  lab.id=prefix+field.id+"_addSubField";
  lab.className="toggle-icon clickable";
  lab.addEventListener("click",function(event) {addSubField(event);});
}

function createStatsDiv(periodNr,dayType) {
  var prefix="person_0_period_"+periodNr+"_"+dayType.id+"_";
  var statsDiv=document.createElement("div");
  var lab=document.createElement("label");
  statsDiv.appendChild(lab);
  lab.setAttribute("tag","total_in_period");
  lab.className="statsLabel";
  var h2=document.createElement("h2");
  h2.innerText="0";
  h2.className="input number";
  h2.id=prefix+"totalDays";
  statsDiv.appendChild(h2);
  lab=document.createElement("h4");
  statsDiv.appendChild(lab);
  lab.setAttribute("tag","period_days");
  lab.className="input plain_left";
  lab=document.createElement("label");
  statsDiv.appendChild(lab);
  lab.setAttribute("tag","from_these_filled");
  //lab.className="plain_left";
  h2=document.createElement("h2");
  h2.innerText="0";
  h2.className="input number";
  h2.id=prefix+"filledDays";
  statsDiv.appendChild(h2);
  lab=document.createElement("h4");
  statsDiv.appendChild(lab);
  lab.setAttribute("tag","period_days");
  lab.className="input plain_left";
  lab=document.createElement("label");
  statsDiv.appendChild(lab);
  lab.innerText="(";
  lab.className="plain_left";
  h2=document.createElement("label");
  h2.setAttribute("tag","shortage");
  h2.className="inline";
  h2.id=prefix+"shortage";
  statsDiv.appendChild(h2);
  h2=document.createElement("h2");
  h2.innerText="24";
  h2.className="input number green";
  h2.id=prefix+"shortageDays";
  statsDiv.appendChild(h2);
  lab=document.createElement("h4");
  statsDiv.appendChild(lab);
  lab.setAttribute("tag","hours_per_day_lowercase");
  lab.className="inline plain_left";
  lab=document.createElement("label");
  statsDiv.appendChild(lab);
  lab.innerText=")";
  return statsDiv;
}

function prepareHintList(field) {
  if (field.id!="sport" && field.id!="free" && field.id!="work") return;
  var activities=activities_sport;
  if (field.id=="free") activities=activities_free;
  else if (field.id=="work") activities=activities_work;
  var sel=document.getElementById("hintList");
  sel.innerHTML="";
  for (var i=0;i<activities.length;i++) {
    var opt=document.createElement("option");
    opt.value=language["cluster_"+activities[i].cluster]+": "+activities[i].name;
    sel.appendChild(opt);
  }
}

function prepareSubcategoryList(field) {
  var sel=document.getElementById("subCategories");
  sel.innerHTML="";
  for (var i=0;i<subCategories.length;i++) {
    if (subCategories[i].category!=field.id) continue;
    var opt=document.createElement("option");
    opt.value=subCategories[i].name;
    sel.appendChild(opt);
  }
}

function extractIds(s) {
  var res={
    personNr:0,
    periodNr:0,
    dayTypeId:"",
    fieldId:"",
    subNr:0
  };
  if (!s.startsWith("person_")) return res;
  var j=s.indexOf("_",7);
  res.personNr=s.substring(7,j);
  s=s.substring(j+1);
  if (!s.startsWith("period_")) return res;
  j=s.indexOf("_",7);
  res.periodNr=s.substring(7,j);
  s=s.substring(j+1);
  j=s.indexOf("_");
  res.dayTypeId=s;
  if (j==-1) return res;
  res.dayTypeId=s.substring(0,j);
  s=s.substring(j+1);
  j=s.indexOf("_");
  res.fieldId=s;
  if (j==-1) return res;
  res.fieldId=s.substring(0,j);
  s=s.substring(j+1);
  if (!s.startsWith("sub_")) return res;
  var j=s.indexOf("_",4);
  res.subNr=s.substring(4,j);
  return res;
}

function extractEverything(target) {
  var ids=extractIds(target.id);
  var res={
    person:undefined,
    period:undefined,
    dayType:undefined,
    field:undefined,
    sub:""
  };
  res.person=persons[ids.personNr];
  res.period=res.person.periods[ids.periodNr];
  res.dayType=getDayTypeByID(ids.periodNr,ids.dayTypeId);
  res.field=getFieldByID(res.dayType,ids.fieldId);
  if (ids.subNr<res.field.subs.length) res.sub=res.field.subs[ids.subNr];
  return res;
}

function getFieldByID(dt,id) {
  var res=null;
  dt.fields.forEach((item, i) => {
    if (item.id==id) res=item;
  });
  return res;
}

function addSubField(event) {
  everything=extractEverything(event.target);
  var field=everything.field;
  prepareSubcategoryList(field);
  prepareHintList(field);
  var modal=document.getElementById("modal_addSubField");
  modal.style.display="block";
  var hint = document.getElementById("hint");
  //if (field.id=="sport"||field.id=="free"||field.id=="work") hint.style.display = "block";
  //else
  hint.style.display = "none";
  var inp=document.getElementById("subCategoryInput");
  inp.value="";
  inp.focus();
  inp=document.getElementById("hints");
  inp.value="";
  var sel=document.getElementById("dayTypes_list");
  sel.selectedIndex=0;
  //var btn=document.getElementById("addSubField_okBtn");
  //currentField=field;
  //btn.addEventListener("click",function(event) {addSubField_final(event);});
}

function valueChanged(id,dayType,periodNr) {
  var sum=0;
  var prefix="person_0_period_"+periodNr+"_"+dayType.id+"_";
  dayType.fields.forEach((item, i) => {
    var val=Number(document.getElementById(prefix+item.id+"_value").value);
    var measure=document.getElementById(prefix+item.id+"_measure").selectedIndex;
    var h=getHours(val,measure,item.id);
    sum+=h;
  });
  var totalDays=getPeriodDayTypeDayCount(periodNr,dayType);
  var filledDays=sum*totalDays/24;
  document.getElementById(prefix+"filledDays").innerText=(filledDays).toFixed(0);
  sum=0;
  getPeriodById(periodNr).dayTypes.forEach((item, i) => {
    var filled=Number(document.getElementById("person_0_period_"+periodNr+"_"+item.id+"_filledDays").innerText);
    sum+=filled;
  });
  document.getElementById("person_0_period_"+periodNr+"_filledDays").innerText=sum.toFixed(0);
  var missingDays=totalDays-filledDays;
  var missingHoursPerDay=missingDays/totalDays*24;
  var shortEl=document.getElementById(prefix+"shortage");
  var daysEl=document.getElementById(prefix+"shortageDays");
  if (missingHoursPerDay>=0) {
    shortEl.setAttribute("tag","shortage");
    daysEl.classList.remove("red");
    daysEl.classList.add("green");
  }
  else {
    missingHoursPerDay*=-1;
    shortEl.setAttribute("tag","excess");
    daysEl.classList.remove("green");
    daysEl.classList.add("red");
  }
  daysEl.innerText=missingHoursPerDay.toFixed(1);
  rewriteAllTexts();
}

function getHours(val,measure,id) {
  var div=1;
  if (id=="sleep" || id=="work") {
    switch (measure) {
      case 1: div=7; break;
      case 2: div=30.4375; break;
    }
  }
  else {
    switch (measure) {
      case 0: div=60; break;
      case 2: div=7; break;
      case 3: div=30.4375; break;
    }
  }
  return val/div;
}

function subValueChanged(id,field,dayType,periodNr) {
  id=id.substring(0,id.indexOf("_sub_"));
  var sum=0;
  field.subs.forEach((item, i) => {
    var val=Number(document.getElementById(id+"_sub_"+i+"_value").value);
    var measure=document.getElementById(id+"_sub_"+i+"_measure").selectedIndex;
    var h=getHours(val,measure,field.id);
    sum+=h;
  });
  var f=document.getElementById(id+"_value");
  f.value=sum.toFixed(2);
  valueChanged(id+"_value",dayType,periodNr);
}

function getVacationDays(prefix) {
  var val=document.getElementById(prefix+"value").value;
  var second=document.getElementById(prefix+"secondValue").value;
  return val*second;
}

function getWorkdaysDays(prefix) {
  return Number(document.getElementById(prefix+"value").value);
}

function volumeValueChanged(periodNr) {
  var vacationDays=0,workdaysDays=0;
  getPeriodById(periodNr).dayTypes.forEach((item, i) => {
    if (!item.deleted) {
      var prefix="person_0_period_"+periodNr+"_"+item.id+"_volume_";
      if (item.type==3) vacationDays+=getVacationDays(prefix);
      if (item.type==1) workdaysDays+=getWorkdaysDays(prefix);
    }
  });
  var weeks=(52.18-vacationDays/7).toFixed(2);
  var free=7-workdaysDays;
  getPeriodById(periodNr).dayTypes.forEach((item, i) => {
    if (!item.deleted) {
      var prefix="person_0_period_"+periodNr+"_"+item.id+"_volume_";
      if (item.type<3) document.getElementById(prefix+"secondValue").innerText=weeks;
      if (item.type==2) document.getElementById(prefix+"value").innerText=free;
    }
  });
  refreshDayTypeTotalDays(periodNr);
}

function createFields(parentDiv,periodNr,dayType) {
  var prefix="person_0_period_"+periodNr+"_"+dayType.id+"_";
  var div=document.createElement("div");
  parentDiv.appendChild(div);
  var lab=document.createElement("label");
  lab.setAttribute("tag","volume");
  lab.className="periodLabel";
  div.appendChild(lab);
  if (dayType.type==2) {
    var h2=document.createElement("h2");
    h2.innerText="0";
    h2.className="input number";
    h2.id=prefix+"volume_value";
    div.appendChild(h2);
  }
  else {
    var inp=document.createElement("input");
    div.appendChild(inp);
    inp.type="text";
    inp.className="input fixed shadowed";
    inp.id=prefix+"volume_value";
    inp.addEventListener("input",function(event) {volumeValueChanged(periodNr);});
  }
  var h4=document.createElement("h4");
  div.appendChild(h4);
  h4.setAttribute("tag","days_per_week_lowercase");
  h4.id=prefix+"volume_measure";
  h4.className="input plainWithMargin";
  var h4=document.createElement("h4");
  div.appendChild(h4);
  h4.innerText=",";
  h4.className="input plain";
  if (dayType.type==3) {
    var inp=document.createElement("input");
    div.appendChild(inp);
    inp.type="text";
    inp.className="input fixed plain_left shadowed";
    inp.id=prefix+"volume_secondValue";
    inp.addEventListener("input",function(event) {volumeValueChanged(periodNr);});
  }
  else {
    h4=document.createElement("h2");
    div.appendChild(h4);
    h4.id=prefix+"volume_secondValue";
    h4.innerText="0";
    h4.className="input number padded";
  }
  h4=document.createElement("h4");
  div.appendChild(h4);
  h4.setAttribute("tag","weeks_in_year_from");
  h4.className="input plain_left";
  var statsDiv=createStatsDiv(periodNr,dayType);
  div.appendChild(statsDiv);
  dayType.fields.forEach((item, i) => {
    createFieldRow(parentDiv,periodNr,dayType,item);
  });
/*
  div=document.createElement("div");
  parentDiv.appendChild(div);
  h4=document.createElement("label");
  div.appendChild(h4);
  h4.className="periodLabel";
  h4.id=prefix+"changes";
  h4.setAttribute("tag","shortage");
  h4=document.createElement("h2");
  div.appendChild(h4);
  h4.id=prefix+"shortage";
  h4.innerText="0";
  h4.className="input number green";
  h4=document.createElement("h4");
  div.appendChild(h4);
  h4.setAttribute("tag","hours_per_day");
  h4.className="input plain";
*/
}

function createPeriodIntroRow(periodNr,labelTag,inputID,inputType,evt,func) {
  var div=document.createElement("div");
  lab=document.createElement("label");
  lab.className="periodLabel";
  lab.setAttribute("tag",labelTag);
  div.appendChild(lab);
  inp=document.createElement("input");
  inp.className="input shadowed";
  if (inputType=="text") inp.className="input fixed shadowed";
  inp.type=inputType;
  inp.id=inputID;
  inp.addEventListener(evt,function(event) {window[func](event,periodNr);});
  //inp.addEventListener("click",function(event) {printID(event);});
  div.appendChild(inp);
  return div;
}

function printID(event) {
  console.log(event.target.id);
}

function addPrintingIDToElement(el){
  el.addEventListener("click",function(event) {printID(event);});
}

function addPrintingIDToChildren(el) {
  var elems=el.querySelectorAll('*[id]');
  for (el of elems)
    if (el.id!="") addPrintingIDToElement(el);
}

function addPrintingID() {
  var elems=document.querySelectorAll('[id]');
  for (el of elems)
    if (el.id!="") addPrintingIDToElement(el);
}

function rewriteAllTexts() {
  var texts=document.querySelectorAll('[tag]');
  for (el of texts) {
    var tag=el.getAttribute("tag");
    if (tag=="") continue;
    var s=tag;
    if (tag in language) s=language[tag];
    if (el.tagName=="IMG") el.title=s; else el.innerText=s;
    if (el.tagName=="LABEL" && !el.classList.contains("withoutColon")) el.innerText+=":";
  }
  var body=document.getElementById("tableBody");
  if (!body) return;
  for (tr of body.childNodes) {
    var val=tr.cells[0].childNodes[0].innerText;
    var interval=extractDates(val);
    if (!interval.from) continue;
    tr.cells[0].childNodes[0].innerText=language["from"]+" "+interval.from+" "+language["till"]+" "+interval.to;
  }
}

function extractDates(val) {
  var interval={from:undefined,to:undefined};
  var i=val.indexOf(" ");
  if (i==-1) return interval;
  val=val.substring(i+1);
  var i=val.indexOf(" ");
  if (i==-1) return interval;
  var dateFrom=val.substring(0,i);
  if (!isDateStringValid(dateFrom)) return interval;
  val=val.substring(i+1);
  var i=val.indexOf(" ");
  if (i==-1) return interval;
  val=val.substring(i+1);
  if (!isDateStringValid(val)) return interval;
  return {from:dateFrom,to:val};
}

function isDateStringValid(dateString) {
  const date = new Date(dateString);
  return !isNaN(date);
}

function redrawAll() {
  renameDefaults();
  renameActivityHints("lat");
  redrawAllPeriods();
  rewriteAllTexts();
  addPrintingID();
}

function redrawAllPeriods() {
  var periodDiv=document.getElementById("periods");
  periodDiv.innerText="";
  persons[0].periods.forEach(function(p,i) {
    var pDiv=createPeriodDiv(p.id,p["name"]);
    periodDiv.appendChild(pDiv);
  })
}

function dateSelected(event) {
  const selectedDate = new Date(event.target.value);
  var year=selectedDate.getFullYear();
  var month=selectedDate.getMonth()+1;
  var date=selectedDate.getDate();
  var id=event.target.getAttribute("id");
  var prefix="";
  if (id=="birthdate") prefix="birth"; else prefix="fill";
  //persons[0][prefix+"Year"]=year;
  //persons[0][prefix+"Month"]=month;
  //persons[0][prefix+"Date"]=date;
}

function periodDateSelected(event,periodNr) {
  const selectedDate = new Date(event.target.value);
  var year=selectedDate.getFullYear();
  var month=selectedDate.getMonth()+1;
  var date=selectedDate.getDate();
  var id=event.target.getAttribute("id");
  var prefix="";
  if (id=="fromdate") prefix="from"; else prefix="to";
  getPeriodById(periodNr)[prefix+"Year"]=year;
  getPeriodById(periodNr)[prefix+"Month"]=month;
  getPeriodById(periodNr)[prefix+"Date"]=date;
  calculatePeriodLength(periodNr);
}

function calculatePeriodLength(periodNr) {
  var from=document.getElementById("person_0_period_"+periodNr+"_fromdate");
  var to=document.getElementById("person_0_period_"+periodNr+"_todate");
  var fromDate=new Date(from.value);
  var toDate=new Date(to.value);
  var years=0,months=0,days=0,diff=0;
  if (fromDate!="Invalid Date" && toDate!="Invalid Date" && fromDate<=toDate) {
    diff=getDifferenceInDays(fromDate,toDate);
    //diff=(toDate-fromDate)/(60*60*24*1000);
    years=Math.floor(diff/365.25);
    diff-=years*365.25;
    months=Math.floor(diff/30.4375);
    diff-=months*30.4375;
    days=Math.floor(diff);
  }
  document.getElementById("person_0_period_"+periodNr+"_years").innerText=years;
  document.getElementById("person_0_period_"+periodNr+"_months").innerText=months;
  document.getElementById("person_0_period_"+periodNr+"_days").innerText=days;
  document.getElementById("person_0_period_"+periodNr+"_totalDays").innerText=getPeriodDayCount(periodNr);
  refreshDayTypeTotalDays(periodNr);
}

function getPeriodDayTypeDayCount(periodNr,dayType) {
  var periodDays=getPeriodDayCount(periodNr);
  var prefix="person_0_period_"+periodNr+"_"+dayType.id+"_";
  var days=0;
  var daysEl=document.getElementById(prefix+"volume_value");
  if (dayType.type==2) days=daysEl.innerText; else days=daysEl.value;
  var weeksEl=document.getElementById(prefix+"volume_secondValue");
  var weeks=0;
  if (dayType.type==3) weeks=weeksEl.value; else weeks=weeksEl.innerText;
  return days*weeks*(periodDays/365.25);
}

function refreshDayTypeTotalDays(periodNr) {
  getPeriodById(periodNr).dayTypes.forEach((item, i) => {
    var prefix="person_0_period_"+periodNr+"_"+item.id+"_";
    document.getElementById(prefix+"totalDays").innerText=getPeriodDayTypeDayCount(periodNr,item).toFixed(0);
    valueChanged("",item,periodNr);
  });
}

function getPeriodDayCount(periodNr) {
  var years=Number(document.getElementById("person_0_period_"+periodNr+"_years").innerText);
  var months=Number(document.getElementById("person_0_period_"+periodNr+"_months").innerText);
  var days=Number(document.getElementById("person_0_period_"+periodNr+"_days").innerText);
  return Math.floor(years*365.25+months*30.4375+days);
}

function genderSelected(event) {
  var i=event.target.selectedIndex;
  persons[0].gender=i;
}

function livingPlaceSelected(event,periodNr) {
  var i=event.target.selectedIndex;
  getPeriodById(periodNr).livingPlace=i;
}

function attributeChanged(event) {
  //var s=event.target.value;
  //persons[0][event.target.getAttribute("id")]=s;
}

function periodAttributeChanged(event,periodNr) {
  //var s=event.target.value;
  //getPeriodById(periodNr)[event.target.getAttribute("id")]=s;
}

function clickFirstLevelHeader(evt) {
  var header=evt.target.parentNode;
  var s=header.id.substring(0,header.id.indexOf("_"));
  var tabContent = document.querySelector("#"+s);
  var toggleIcon = document.querySelector("#"+s+"_toggle");
  if (tabContent.style.display === "none" || tabContent.style.display === "") {
    tabContent.style.display = "block";
    toggleIcon.innerHTML = "-";
  } else {
    tabContent.style.display = "none";
    toggleIcon.innerHTML = "+";
  }
  if (header.id=="data_header") analyze();
}

function changeActivePeriod(div) {
  var periods=document.getElementById("periods");
  periods.childNodes.forEach(function(ch) {
   ch.className="period";
  })
  div.parentNode.className="period activePeriod";
  refreshPeriods();
}

function refreshPeriods() {
  persons[0].periods.forEach((item, i) => {
    var div=document.getElementById("person_0_period_"+item.id+"_div");
    if (item.deleted) div.classList.add("hidden"); else div.classList.remove("hidden");
  });
}

function restorePeriod() {
  var list=document.getElementById("period_list");
  list.innerText="";
  persons[0].periods.forEach((item, i) => {
    if (item.deleted) {
      var opt=document.createElement("option");
      list.appendChild(opt);
      opt.innerText=item.name;
    }
  });
  var modal=document.getElementById("modal_restorePeriod");
  modal.style.display="block";
}

function restorePeriodByName(s) {
  persons[0].periods.forEach((item, i) => {
    if (item.name==s) item.deleted=false;
  });
}

function getDeletedPeriodCount() {
  var res=0;
  persons[0].periods.forEach((item, i) => {
    if (item.deleted) res++;
  });
  return res;
}

function restorePeriod_final(modalID) {
  closeModal(modalID);
  var list=document.getElementById("period_list");
  var periodNr=restorePeriodByName(list.value);
  refreshPeriods();
  if (getDeletedPeriodCount()==0) {
    document.getElementById("restorePeriodsBtn").classList.add("hidden");
  }
}

function getDayTypeByID(periodNr,id) {
  var res=null;
  getPeriodById(periodNr).dayTypes.forEach((item, i) => {
    if (!(item.deleted) && item.id==id) res=item;
  });
  return res;
}

function getUniqueID(periodNr,type) {
  var s=getDayTypeNameByType(type);
  var i=1;
  while (true) {
    var z=s+i;
    if (!getDayTypeByID(periodNr,z)) return z;
    i++;
  }
}

function getSubCategoryIDByName(s) {
  for (const [key, value] of Object.entries(language)) {
    if (!(key.startsWith("sub_"))) continue;
    if (s==value) return key;
  }
  return s;
}

function addSubField_final(event) {
  closeModal(event.target.parentNode.parentNode.id);
  var inp=document.getElementById("subCategoryInput");
  var res=everything;
  var field=res.field;
  var id=getSubCategoryIDByName(inp.value);
  if (id=="") return;
  if (field.subs.includes(id)) return;
  field.subs.push(id);
  addSubCategoryToSubDiv(res,false);
  rewriteAllTexts();
}

function addSubCategoryToSubDiv(res,auto) {
  var field=res.field;
  var dayType=res.dayType;
  var periodNr=res.period.id;
  var prefix="person_0_period_"+periodNr+"_"+dayType.id+"_"+field.id;
  var div=document.getElementById(prefix+"_addSubField");
  var subDiv=createSubFieldRow(periodNr,dayType,field,field.subs.length-1,auto);
  div.parentNode.insertBefore(subDiv,div);
  var inp=document.getElementById(prefix+"_value");
  inp.disabled=true;
  inp.value="";
  inp=document.getElementById(prefix+"_measure");
  inp.disabled=true;
  inp.selectedIndex=0;
  if (field.id!="sleep" && field.id!="work") inp.selectedIndex=1;
  //subValueChanged(prefix+"_sub_"+field.subs.length-1+"_value",field,dayType,periodNr);
  subValueChanged(prefix+"_sub_0_value",field,dayType,periodNr);
}

function addDayType_final(modalID) {
  closeModal(modalID);
  var name=document.getElementById("newDayTypeName").value;
  if (name=="") return;
  var sel=document.getElementById("dayTypes_list").selectedIndex;
  if (sel>0) sel++;
  var dt={
    id:getUniqueID(currentPeriodNr,sel+1),
    name:name,
    type:sel+1,
    fields:deepCopy(fieldTypes_default),
    deleted:false
  };
  persons[0].periods[currentPeriodNr].dayTypes.push(dt);
  var tabHeaderDiv=document.getElementById("person_0_period_"+currentPeriodNr+"_dayTypesHeader");
  var tabContentsDiv=document.getElementById("person_0_period_"+currentPeriodNr+"_dayTypesContents");
  var div=createDayTypeTab(tabHeaderDiv,tabContentsDiv,currentPeriodNr,dt,false);
  volumeValueChanged(currentPeriodNr);
  var img=document.getElementById("person_0_period_"+currentPeriodNr+"_"+dt.id+"_changeImg");
  img.click();
  var input=document.getElementById("person_0_period_"+currentPeriodNr+"_"+dt.id+"_title");
  finishChangingDayTypeName(img,input,currentPeriodNr,dt);
  rewriteAllTexts();
  addPrintingIDToChildren(div);
  document.getElementById("person_0_period_"+currentPeriodNr+"_"+dt.id+"_headerBtn").click();
}

function closeModal(modalID) {
  var modal=document.getElementById(modalID);
  modal.style.display="none";
}

function expandCollapse(evt) {
  var header=evt.target.parentNode;
  changeActivePeriod(header);
  var tabContent = document.querySelector("#"+header.id.substring(0,header.id.lastIndexOf("_"))+"_body");
  var toggleIcon = document.querySelector("#"+header.id.substring(0,header.id.lastIndexOf("_"))+"_toggle");
  if (tabContent.style.display === "none" || tabContent.style.display === "") {
    tabContent.style.display = "block";
    toggleIcon.innerHTML = "-";
  } else {
    tabContent.style.display = "none";
    toggleIcon.innerHTML = "+";
    header.parentNode.className="period";
  }
}

function toggleTabs(evt) {
  var tabContent = document.querySelector(".tab-content");
  var toggleIcon = document.querySelector("#toggle-icon");
  if (tabContent.style.display === "none" || tabContent.style.display === "") {
    tabContent.style.display = "block";
    toggleIcon.innerHTML = "-";
  } else {
    tabContent.style.display = "none";
    toggleIcon.innerHTML = "+";
  }
}

function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the current tab and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}
