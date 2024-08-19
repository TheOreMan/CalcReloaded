function readDataFromTitle(period,s) {
  var value,j,i=s.indexOf("(no ");
  if (i!=-1) {
    j=s.indexOf(".",i);
    value=s.substring(i+4,j);
    period.data.push({key:"startYear",value:value});
  }
  i=s.indexOf(". gada ");
  if (i!=-1) {
    j=s.indexOf(".",i+1);
    value=s.substring(i+7,j);
    period.data.push({key:"startDay",value:value});
    i=s.indexOf(" ",j+2);
    value=s.substring(j+2,i);
    period.data.push({key:"startMonth",value:value});
  }
  i=s.indexOf(" līdz ");
  if (i!=-1) {
    j=s.indexOf(".",i);
    value=s.substring(i+6,j);
    period.data.push({key:"endYear",value:value});
    i=s.indexOf(".",j+1);
    value=s.substring(j+7,i);
    period.data.push({key:"endDay",value:value});
    j=s.indexOf(";",i);
    value=s.substring(i+2,j);
    period.data.push({key:"endMonth",value:value});
  }
  i=s.indexOf(" gadi, ");
  if (i!=-1) {
    j=s.lastIndexOf(" ",i-1);
    value=s.substring(j+1,i);
    period.data.push({key:"periodYears",value:value});
  }
  i=s.indexOf(" mēneši, ");
  if (i!=-1) {
    j=s.lastIndexOf(" ",i-1);
    value=s.substring(j+1,i);
    period.data.push({key:"periodMonths",value:value});
  }
  i=s.indexOf(" dienas; ");
  if (i!=-1) {
    j=s.lastIndexOf(" ",i-1);
    value=s.substring(j+1,i);
    period.data.push({key:"periodDays",value:value});
  }
  i=s.indexOf("dzīvesvieta: ");
  if (i!=-1) {
    j=s.indexOf(";",i);
    value=s.substring(i+13,j);
    period.data.push({key:"residence",value:value});
  }
  i=s.indexOf("masa: ");
  if (i!=-1) {
    j=s.indexOf(" ",i+6);
    value=s.substring(i+6,j);
    period.data.push({key:"weight",value:value});
  }
  i=s.indexOf("augums: ");
  if (i!=-1) {
    j=s.indexOf(" ",i+8);
    value=s.substring(i+8,j);
    period.data.push({key:"length1",value:value});
  }
}

function getNextColumn(s) {
  if (s=="") return 'A';
  var last=s.charAt(s.length-1);
  if (last=='Z')
    if (s.length==1) return 'AA'; else return String.fromCharCode(s.charCodeAt(0)+1)+'A';
  return s.substring(0,s.length-1)+String.fromCharCode(last.charCodeAt(0)+1);
}

function getPrevColumn(s) {
  if (s=="") return 'A';
  var last=s.charAt(s.length-1);
  if (last=='A')
    if (s.length==1) return 'A';
    else if (s.charAt(0)=='A') return 'Z'; else return String.fromCharCode(s.charCodeAt(0)-1)+'Z';
  return s.substring(0,s.length-1)+String.fromCharCode(last.charCodeAt(0)-1);
}

function getFieldId(s) {
  var types=["work","sleep","walk","sport","self","home","free"];
  for (var type of types)
    if (s==language[type]) return type;
  return "";
}

function getSelectedIndex(fieldId,measure) {
  var measures=["minutes_per_day_short","hours_per_day_short","hours_per_week_short","hours_per_month_short"];
  var res=0;
  measures.forEach((val, i) => {
    if (measure==language[val]) res=i;
  });
  if (fieldId=="work"||fieldId=="sleep") res--;
  return res;
}

function inFieldArray(fieldArr,s) {
  var res=false;
  for (var i=0;i<fieldArr.length;i++)
    if (fieldArr[i].id==s) {
      res=true;
      break;
    }
  return res;
}

function getFieldTypeByID(s) {
  for (var item of fieldTypes_default)
    if (item.id==s) return item;
  return null;
}

function putValueIntoFields(prefix,fieldId,value) {
  var val=value;
  var measure=language["hours_per_day_short"];
  var i=value.indexOf(" ");
  if (i!=-1) {
    val=value.substring(0,i);
    measure=value.substring(i+1,value.length);
  }
  if (prefix.includes("_sub_") && val=="0.00") return false;
  document.getElementById(prefix+"value").value=val;
  document.getElementById(prefix+"measure").selectedIndex=getSelectedIndex(fieldId,measure);
  return true;
}

function getCellValue(sheet,cell) {
  if (sheet[cell]) return sheet[cell].v.toString();
  return "";
}

function putPeriodHeaderIntoFields(s,period) {
  var prefix="person_0_period_"+period.id+"_";
  var i=s.indexOf('"');
  if (i==-1) return;
  s=s.substring(i+1);
  i=s.indexOf('"');
  if (i==-1) return;
  document.getElementById(prefix+"title").innerText=s.substring(0,i);
  period.name=s.substring(0,i);
  s=s.substring(i+4+language["from"].length);
  i=s.indexOf(" ");
  if (i==-1) return;
  document.getElementById(prefix+"fromdate").value=s.substring(0,i);
  s=s.substring(i+2+language["till"].length);
  i=s.indexOf(";");
  if (i==-1) return;
  document.getElementById(prefix+"todate").value=s.substring(0,i);
  var z=language["livingPlace"].toLowerCase();
  i=s.indexOf(z);
  if (i==-1) return;
  s=s.substring(i+2+z.length);
  i=s.indexOf(";");
  if (i==-1) return;
  document.getElementById(prefix+"livingPlace").value=s.substring(0,i);
  i=s.indexOf(":");
  if (i==-1) return;
  s=s.substring(i+2);
  i=s.indexOf(" ");
  if (i==-1) return;
  document.getElementById(prefix+"weight").value=s.substring(0,i);
  i=s.indexOf(":");
  if (i==-1) return;
  s=s.substring(i+2);
  i=s.indexOf(" ");
  if (i==-1) return;
  document.getElementById(prefix+"height").value=s.substring(0,i);
  i=s.indexOf(":");
  if (i==-1) return;
  s=s.substring(i+2);
  i=s.indexOf(")");
  if (i==-1) return;
  document.getElementById(prefix+"selfEval").selectedIndex=s.substring(0,i)-1;
  var event = new Event('change');
  document.getElementById(prefix+"todate").dispatchEvent(event);
}

function getSubId(s) {
  //Šeit tiek padots normālais subField nosaukums kaut kādā valodā
  //Vajag atgriezt subField id, piemēram "sub_naktsmiegs"
  for (const [key, value] of Object.entries(language)) {
    if (!key.startsWith("sub_")) continue;
    if (value==s) return key;
  }
  return "["+s+"]";
}

function checkAndReplaceOlds(s) {
  switch (s) {
    case "Pārvietošanās ka pasažierim vieglajā vai smagajā auto transportā (ne sabiedriskajā transportā)": return "Pārvietošanās kā pasažierim vieglajā vai smagajā auto transportā";
    case "Citur neminēti atpūtas veidi":;
    case "Citur neminēti mājsaimniecības darbi":;
    case "Citur neminēts individuālais sports":;
    case "Citur neminēts komandu sports": return s+" 1";
  }
  return s;
}

function generateDayTypes(sheet,row) {
  var dayTypes=[];
  var col="A";
  var fieldName=getCellValue(sheet,col+(row+2));
  while (fieldName!="") {
    if (fieldName==language["volume"]) {
      var dayTypeName=getCellValue(sheet,col+(row+1));
      var type=1;
      var i=dayTypeName.indexOf("|");
      if (i!=-1) {
        type=dayTypeName.substring(i+1);
        dayTypeName=dayTypeName.substring(0,i);
      }
      var id=(dayTypeName==language["workdays"])?"workdays":(dayTypeName==language["weekends"]||dayTypeName=="Brīvdienas"?"weekends":(dayTypeName==language["vacations"]?"vacations":dayTypeName));
      var dayType={name:dayTypeName,id:id,type:type,deleted:false,fields:[],comment:""};
      dayTypes.push(dayType);
      col=getNextColumn(col);
    }
    else {
      var field=deepCopy(getFieldTypeByID(getFieldId(fieldName)));
      dayTypes[dayTypes.length-1].fields.push(field);
      var subFieldName=getCellValue(sheet,col+(row+3));
      while (subFieldName!=language["comment"]) {
        subFieldName=checkAndReplaceOlds(subFieldName)
        if (subFieldName!="") field.subs.push(getSubId(subFieldName));
        col=getNextColumn(col);
        subFieldName=getCellValue(sheet,col+(row+3));
      }
    }
    col=getNextColumn(col);
    var fieldName=getCellValue(sheet,col+(row+2));
  }
  return dayTypes;
}

function splitValue(field,value) {
  var measure=getSelectedIndex(field.id,language["hours_per_day_short"]);
  var i=value.indexOf(" ");
  if (i!=-1) {
    measure=getSelectedIndex(field.id,value.substring(i+1));
    value=value.substring(0,i);
  }
  return {value:value,measure:measure};
}

function fillPeriod(period,sheet,row) {
  var col="A";
  for (dayType of period.dayTypes) {
    var prefix="person_0_period_"+period.id+"_"+dayType.id+"_";
    var value=getCellValue(sheet,col+(row+4));
    var el=document.getElementById(prefix+"volume_value");
    if (dayType.type==2) el.innerText=value; else el.value=value;
    col=getNextColumn(col);
    value=getCellValue(sheet,col+(row+4));
    var el=document.getElementById(prefix+"volume_secondValue");
    if (dayType.type==3) el.value=value; else el.innerText=value;
    for (field of dayType.fields) {
      col=getNextColumn(col);
      var res=splitValue(field,getCellValue(sheet,col+(row+4)));
      prefix="person_0_period_"+period.id+"_"+dayType.id+"_"+field.id+"_";
      if (field.subs.length==0) {
        document.getElementById(prefix+"value").value=res.value;
        document.getElementById(prefix+"measure").selectedIndex=res.measure;
        col=getNextColumn(col);
      }
      for (var i=0;i<field.subs.length;i++) {
        prefix="person_0_period_"+period.id+"_"+dayType.id+"_"+field.id+"_sub_"+i+"_";
        document.getElementById(prefix+"value").value=res.value;
        document.getElementById(prefix+"measure").selectedIndex=res.measure;
        subValueChanged(prefix+"_value",field,dayType,period.id);
        col=getNextColumn(col);
        res=splitValue(field,getCellValue(sheet,col+(row+4)));
      }
      value=getCellValue(sheet,col+(row+4));
      document.getElementById("person_0_period_"+period.id+"_"+dayType.id+"_"+field.id+"_comment").value=value;
    }
    col=getNextColumn(col);
  }
  refreshDayTypeTotalDays(period.id);
}

var OneSheetExcelToJSON = function() {
  this.parseExcel = function(file) {
    var reader = new FileReader();
    reader.onload = function(e) {
      var data = e.target.result;
      var workbook = XLSX.read(data, {type: 'binary'});
      var sheet=workbook.Sheets[workbook.SheetNames[0]];
      document.getElementById("id").value=getCellValue(sheet,'B1');
      var genderNode=document.getElementById("gender");
      if (getCellValue(sheet,'D1')==language["woman"]) genderNode.selectedIndex=0; else genderNode.selectedIndex=1;
      document.getElementById("birthdate").value=getCellValue(sheet,'B2');
      document.getElementById("filldate").value=getCellValue(sheet,'B3');
      var row=4;
      var periodHeader=getCellValue(sheet,'A'+row);
      while (periodHeader!="") {
        var dayTypes=generateDayTypes(sheet,row);
        addPeriod(0,dayTypes,false);
        var period=persons[0].periods[persons[0].periods.length-1];
        putPeriodHeaderIntoFields(periodHeader,period);
        fillPeriod(period,sheet,row);
        row+=6;
        periodHeader=getCellValue(sheet,'A'+row);
      }
    }
    reader.onerror = function(ex) {console.log(ex);};
    reader.readAsBinaryString(file);
  }
}

function handleUploadBtnClick() {
  var fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.addEventListener('change', handleFileSelect);
  fileInput.click();
}

function handleFileSelect(evt) {
 var files = evt.target.files;
 var xl2json = new OneSheetExcelToJSON();
 xl2json.parseExcel(files[0]);
}

function calculateTotalValue(prefix,fieldId,inp,measure,totalDays) {
  var s="";
  if (prefix.includes("_workdays_" )) s=prefix.substring(0,prefix.indexOf("_workdays_"))+"_workdays_volume_value";
  else if (prefix.includes("_weekends_" )) s=prefix.substring(0,prefix.indexOf("_weekends_"))+"_weekends_volume_value";
  else s=prefix.substring(0,prefix.indexOf("_vacations_"))+"_vacations_volume_value";
  var vol=document.getElementById(s);
  var volValue=7;
  if (vol)
    if (prefix.includes("_weekends_")) volValue=vol.innerText; else volValue=vol.value;
  if (fieldId=="sleep" || fieldId=="work") measure++;
  var res=inp;
  switch (measure) {
    case 0:res*=totalDays/1440;break;
    case 1:res*=totalDays/24;break;
    case 2:res*=totalDays/volValue/24;break;
    case 3:res*=totalDays/30.4375/7*volValue/24;break;
  }
  if (!isNaN(res)) res=Number(res).toFixed(2); else res="---";
  return res;
}

function getMetsById(s) {
 for (var i=0;i<subCategories.length;i++)
  if (subCategories[i].id==s) return subCategories[i].met;
 return 0;
}

function copyWithoutDeleteds(periods) {
  var res=[];
  periods.forEach((period, i) => {
    if (!period.deleted) {
      res.push(deepCopy(period));
      res[res.length-1].dayTypes=[];
      period.dayTypes.forEach((dayType, j) => {
        if (!dayType.deleted) res[res.length-1].dayTypes.push(deepCopy(dayType));
      });
    }
  });
  return res;
}

function generateReview() {
  var excel = $JExcel.new();
  var genderNode=document.getElementById("gender");
  var gender="";
  if (genderNode) gender=genderNode.selectedIndex;
  var gend=language["woman"];
  if (gender==1) gend=language["man"];
  var sheetName=document.getElementById("id").value;
  var regularStyle=excel.addStyle({font:"Calibri 12 0",align:"R C"});
  var nameStyle=excel.addStyle({font:"Calibri 18 #00FF00 B",align:"L C"});
  var birthDayStyle=excel.addStyle({font:"Calibri 14 0",align:"L C"});
  var periodStyle=excel.addStyle({font:"Calibri 16 #FF0000 B",align:"C C"});
  var dayTypeStyle=excel.addStyle({font:"Calibri 15 0",align:"C C"});
  var activityStyle=excel.addStyle({font:"Calibri 14 0",align:"C C"});
  var subActivityStyle=excel.addStyle({font:"Calibri 13 0",align:"C C"});
  excel.set(0,1,0,sheetName,nameStyle);
  excel.addSheet(sheetName+" "+language["calories"]);
  excel.set(1,1,0,sheetName,nameStyle);
  excel.mergeRow(0,0,1,3);
  excel.mergeRow(1,0,1,3);
  excel.set(0,0,0,language["id"]+":",regularStyle);
  excel.set(1,0,0,language["id"]+":",regularStyle);
  excel.set(0,4,0,language["gender"]+":",regularStyle);
  excel.set(1,4,0,language["gender"]+":",regularStyle);
  excel.set(0,5,0,gend,birthDayStyle);
  excel.set(1,5,0,gend,birthDayStyle);
  excel.set(0,0,1,language["birth_date"]+":",regularStyle);
  excel.set(1,0,1,language["birth_date"]+":",regularStyle);
  var bd=getDateString("birthdate");
  excel.set(0,1,1,bd,birthDayStyle);
  excel.set(1,1,1,bd,birthDayStyle);
  excel.mergeRow(0,1,1,3);
  excel.mergeRow(1,1,1,3);
  excel.set(0,0,2,language["fill_date"]+":",regularStyle);
  excel.set(1,0,2,language["fill_date"]+":",regularStyle);
  var fd=getDateString("filldate");
  excel.set(0,1,2,fd,birthDayStyle);
  excel.set(1,1,2,fd,birthDayStyle);
  excel.mergeRow(0,2,1,3);
  excel.mergeRow(1,2,1,3);
  if (sheetName=="") sheetName=gend+" X";
  excel.set({sheet:0,value:sheetName+" "+language["days_uppercase"]});
  excel.set({sheet:1,value:sheetName+" "+language["calories"]});
  var row=3;
  excel.set(0,0,row,language["period"],dayTypeStyle);
  excel.set(1,0,row,language["period"],dayTypeStyle);
  excel.mergeCol(0,row,row+1,0); //0. šķirklī, 0. kolonnā, rindas no row līdz row+1
  excel.mergeCol(1,row,row+1,0);
  row--;
  var totals=[],totalCals=[];
  var dayTypeArr=[],fieldArr=[];
  var maxDayTypes=3;
  for (var i=0;i<100;i++) {
    totals[i]=0;
    totalCals[i]=0;
  }
  var dayTypesFilled=0;
  var periodArr=copyWithoutDeleteds(persons[0].periods);
  for (var i=0;i<periodArr.length;i++) {
    var prefix="person_0_period_"+periodArr[i].id+"_";
    var periodNr=periodArr[i].id;
    var kg=document.getElementById(prefix+"weight").value;
    excel.set(0,0,row+3+i,periodArr[i].name,periodStyle);
    excel.set(1,0,row+3+i,periodArr[i].name,periodStyle);
    dayTypeArr=[];
    var arr=periodArr[i].dayTypes;
    if (arr) dayTypeArr=arr.slice();
    if (dayTypeArr.length>maxDayTypes) maxDayTypes=dayTypeArr.length;
    var offset=1,temp=0;
    if (dayTypeArr.length>dayTypesFilled) {
      for (var j=dayTypesFilled;j<dayTypeArr.length;j++) {
        var fieldArr=[];
        var arr=dayTypeArr[j].fields;
        if (arr) fieldArr=arr.slice();
        var typeName=dayTypeArr[j].name;
        if (j>2) typeName=language["day_type_nr"]+" "+(j+1);
        excel.set(0,j*7+1,row+1,typeName,dayTypeStyle);
        excel.set(1,j*7+1,row+1,typeName,dayTypeStyle);
        excel.mergeRow(0,row+1,j*7+1,j*7+7);
        excel.mergeRow(1,row+1,j*7+1,j*7+7);
        for (var k=0;k<fieldArr.length;k++) {
          excel.set(0,j*7+k,row+2,language[fieldArr[k].id],activityStyle);
          excel.set(1,j*7+k,row+2,language[fieldArr[k].id],activityStyle);
        }
      }
      dayTypesFilled=dayTypeArr.length;
    }
    for (var j=0;j<dayTypeArr.length;j++) {
      var fieldArr=[];
      var arr=dayTypeArr[j].fields;
      if (arr) fieldArr=arr.slice();
      var daysTotal=getPeriodDayTypeDayCount(periodNr,dayTypeArr[j]);
      for (var k=0;k<fieldArr.length;k++,offset++) {
        if (i==0) {
          excel.set(0,offset,row+2,language[fieldArr[k].id],activityStyle);
          excel.set(1,offset,row+2,language[fieldArr[k].id],activityStyle);
        }
        var prefix="person_0_period_"+periodNr+"_"+dayTypeArr[j].id+"_"+fieldArr[k].id+"_";
        var val=document.getElementById(prefix+"value").value;
        var measureVal=document.getElementById(prefix+"measure").selectedIndex;
        var res=calculateTotalValue(prefix,fieldArr[k].id,val,measureVal,daysTotal);
        if (!isNaN(res)) res=Number(res); else res=0.0;
        excel.set(0,offset,row+i+3,res.toFixed(2),regularStyle);
        totals[j*(fieldArr.length)+k]+=res;
        var sum=0;
        for (var l=0;l<fieldArr[k].subs.length;l++) {
          var prefix="person_0_period_"+periodNr+"_"+dayTypeArr[j].id+"_"+fieldArr[k].id+"_sub_"+l+"_";
          var val=document.getElementById(prefix+"value").value;
          var measureVal=document.getElementById(prefix+"measure").selectedIndex;
          var res=calculateTotalValue(prefix,fieldArr[k].id,val,measureVal,daysTotal);
          if (!isNaN(res)) res=Number(res); else res=0.0;
          var x=res*24*kg*getMetsById(fieldArr[k].subs[l]);
          sum+=x;
        }
        excel.set(1,offset,row+i+3,sum,regularStyle);
        totalCals[j*(fieldArr.length)+k]+=sum;
      }
    }
  }
  excel.set(0,0,row+3+periodArr.length,language["total"]+":",regularStyle);
  excel.set(1,0,row+3+periodArr.length,language["total"]+":",regularStyle);
  for (var i=0;i<maxDayTypes*(fieldArr.length);i++) {
    excel.set(0,i+1,row+3+periodArr.length,totals[i].toFixed(2),regularStyle);
    excel.set(1,i+1,row+3+periodArr.length,totalCals[i].toFixed(2),regularStyle);
  }
  generateStatisticsTab(excel);
  excel.generate("Review.xlsx");
}

function generateStatisticsTab(excel) {
  var birthDate=getDateString("birthdate");
  var regularStyle=excel.addStyle({font:"Calibri 12 0",align:"R C"});
  var periodStyle=excel.addStyle({font:"Calibri 16 #FF0000 B",align:"C C"});
  var activityStyle=excel.addStyle({font:"Calibri 14 0",align:"C C"});
  var titleStyle=excel.addStyle({font:"Calibri 15 #000000 B",align:"C C"});
  var genderNode=document.getElementById("gender");
  var gender="";
  if (genderNode) gender=genderNode.selectedIndex;
  var gend=language["woman"];
  if (gender==1) gend=language["man"];
  var sheetName=document.getElementById("id").value;
  if (sheetName=="") sheetName=gend+" X";
  excel.set({sheet:0,value:sheetName+" "+language["days_uppercase"]});
  excel.addSheet(sheetName+" "+language["statistics"]);
  var row=0,col=0;
  for (x=1;x<=3;x++) {
    document.getElementById("type"+x).checked=true;
    analyze();
    var body=document.getElementById("tableBody");
    if (!body) return;
    for (tr of body.childNodes) {
      col=0;
      for (cell of tr.cells) {
        if (!tr.previousSibling)
          if (col==0) style=titleStyle; else style=activityStyle;
        else
          if (col==0) style=periodStyle; else style=regularStyle;
        var val=cell.childNodes[0].innerText;
        excel.set(2,col,row,val,style);
        col++;
      }
      row++;
    }
    row++;
  }
}

function getDateString(id) {
  var d=document.getElementById(id);
  return d.value;
}

function getPeriodInfo(periodNr) {
  var from=document.getElementById("person_0_period_"+periodNr+"_fromdate").value;
  var to=document.getElementById("person_0_period_"+periodNr+"_todate").value;
  var s=language["from"].toLowerCase()+" "+from+" "+language["till"].toLowerCase()+" "+to+"; ";
  s+=language["duration"].toLowerCase()+": "+document.getElementById("person_0_period_"+periodNr+"_years").innerText+" "+language["period_years"]+", "+document.getElementById("person_0_period_"+periodNr+"_months").innerText+" "+language["period_months"]+", "+document.getElementById("person_0_period_"+periodNr+"_days").innerText+" "+language["period_days"];
  s+="; "+language["livingPlace"].toLowerCase()+": "+document.getElementById("person_0_period_"+periodNr+"_livingPlace").value+"; "+language["weight_plain"].toLowerCase()+": "+document.getElementById("person_0_period_"+periodNr+"_weight").value+" kg, "+language["height_plain"].toLowerCase()+": "+document.getElementById("person_0_period_"+periodNr+"_height").value+" cm, "+language["selfEval"].toLowerCase()+": "+(document.getElementById("person_0_period_"+periodNr+"_selfEval").selectedIndex+1);
  return s;
}

function getShortNotation(fieldId,measure) {
  var s="";
  if (fieldId=="sleep" || fieldId=="work") {
    switch (measure) {
      case 0: s=language["hours_per_day_short"]; break;
      case 1: s=language["hours_per_week_short"]; break;
      case 2: s=language["hours_per_month_short"]; break;
    }
  }
  else {
    switch (measure) {
      case 0: s=language["minutes_per_day_short"]; break;
      case 1: s=language["hours_per_day_short"]; break;
      case 2: s=language["hours_per_week_short"]; break;
      case 3: s=language["hours_per_month_short"]; break;
    }
  }
 return s;
}

function getFieldIndex(arr,s) {
  var i=0;
  for (;i<arr.length;i++)
    if (arr[i].id==s) return i;
  arr.push({id:s,subs:[],intensities:[]});
  return i;
}

function getTableRow(table,dt,f,s){
  for (var i=0;i<table.length;i++)
    if (table[i].dayType==dt && table[i].field==f && table[i].sub==s) return table[i];
  return null;
}

function generateSecondTab(excel) {
  excel.addSheet("Vertical");
  var defaultWidth=10;
  var nameStyle=excel.addStyle({font:"Calibri 18 #00FF00 B",align:"L C"});
  var birthDayStyle=excel.addStyle({font:"Calibri 14 0",align:"L C"});
  var periodStyle=excel.addStyle({font:"Calibri 16 #FF0000 B",align:"C C"});
  var dayTypeStyle=excel.addStyle({font:"Calibri 15 #000000 B",align:"C C"});
  var activityStyle=excel.addStyle({font:"Calibri 14 #000000 B",align:"C C"});
  var subActivityStyle=excel.addStyle({font:"Calibri 11 0",align:"R C"});
  var regularStyle=excel.addStyle({font:"Calibri 12 0",align:"C C"});
  var genderNode=document.getElementById("gender");
  var gender="";
  if (genderNode) gender=genderNode.selectedIndex;
  var gend=language["woman"];
  if (gender==1) gend=language["man"];
  var sheetName=document.getElementById("id").value;
  excel.set(1,0,0,language["id"]+":",regularStyle);
  excel.set(1,1,0,sheetName,nameStyle);
  excel.set(1,2,0,language["gender"]+":",regularStyle);
  excel.set(1,3,0,gend,birthDayStyle);
  excel.set(1,0,1,language["birth_date"]+":",regularStyle);
  var bd=getDateString("birthdate");
  excel.set(1,1,1,bd,birthDayStyle);
  excel.mergeRow(1,1,1,3);
  excel.set(1,0,2,language["fill_date"]+":",regularStyle);
  var fd=getDateString("filldate");
  excel.set(1,1,2,fd,birthDayStyle);
  excel.mergeRow(1,2,1,3);
  if (sheetName=="") sheetName=gend+" X";
  var globalDayTypeArr=[],globalFieldArr=[],faIndex=0;
  var table=[];
  var periodArr=copyWithoutDeleteds(persons[0].periods);
  for (var i=0;i<periodArr.length;i++) {
    var dayTypeArr=[];
    var arr=periodArr[i].dayTypes;
    if (arr) dayTypeArr=arr.slice();
    for (var j=0;j<dayTypeArr.length;j++) {
      if (!globalDayTypeArr.includes(dayTypeArr[j].name)) globalDayTypeArr.push(dayTypeArr[j].name);
      var fieldArr=[];
      arr=dayTypeArr[j].fields;
      if (arr) fieldArr=arr.slice();
      for (var k=0;k<fieldArr.length;k++) {
        var index=getFieldIndex(globalFieldArr,language[fieldArr[k].id]);
        for (var l=0;l<fieldArr[k].subs.length;l++) {
          var s=language[fieldArr[k].subs[l]];
          //if (!globalFieldArr[index].subs.includes(s))
            globalFieldArr[index].subs.push(s);
        }
      }
    }
  }
  for (var i=0;i<globalDayTypeArr.length;i++)
    for (var j=0;j<globalFieldArr.length;j++) {
      table.push({dayType:globalDayTypeArr[i],field:globalFieldArr[j].id,sub:"",values:[]});
      for (var k=0;k<globalFieldArr[j].subs.length;k++)
        table.push({dayType:globalDayTypeArr[i],field:globalFieldArr[j].id,sub:globalFieldArr[j].subs[k],values:[]});
    }
  var row=3,prev="",prevRow=row;
  for (var i=0;i<periodArr.length;i++) {
    excel.set(1,2+i,row,periodArr[i].name,periodStyle);
    var dayTypeArr=[];
    var arr=periodArr[i].dayTypes;
    if (arr) dayTypeArr=arr.slice();
    for (var j=0;j<dayTypeArr.length;j++) {
      var fieldArr=[];
      arr=dayTypeArr[j].fields;
      if (arr) fieldArr=arr.slice();
      for (var k=0;k<fieldArr.length;k++) {
        var prefix="person_0_period_"+periodArr[i].id+"_"+dayTypeArr[j].id+"_"+fieldArr[k].id+"_";
        var val=document.getElementById(prefix+"value").value;
        var measureVal=document.getElementById(prefix+"measure").selectedIndex;
        val=Number(val).toFixed(2)+" "+getShortNotation(fieldArr[k].id,measureVal);
        var entry=getTableRow(table,dayTypeArr[j].name,language[fieldArr[k].id],"");
        if (entry) entry.values.push(val);
        for (var l=0;l<fieldArr[k].subs.length;l++) {
          var prefix="person_0_period_"+periodArr[i].id+"_"+dayTypeArr[j].id+"_"+fieldArr[k].id+"_sub_"+l+"_";
          var val=document.getElementById(prefix+"value").value;
          var measureVal=document.getElementById(prefix+"measure").selectedIndex;
          val=Number(val).toFixed(2)+" "+getShortNotation(fieldArr[k].id,measureVal);
          var s=language[fieldArr[k].subs[l]];
          var entry=getTableRow(table,dayTypeArr[j].name,language[fieldArr[k].id],s);
          if (entry) entry.values.push(val);
        }
      }
    }
    for (var j=0;j<table.length;j++)
      if (table[j].values.length<=i) table[j].values.push("");
  }
  excel.set(1,0,row,language["type"],regularStyle);
  excel.set(1,1,row,language["activity"]+"/"+language["subActivity"].toLowerCase(),regularStyle);
  row++;
  for (var i=0;i<table.length;i++) {
    if (table[i].dayType!=prev) {
      excel.set(1,0,row+i,table[i].dayType,dayTypeStyle);
      if (prevRow>=row) excel.mergeCol(1,prevRow,row+i-1,0);
      prevRow=row+i;
    }
    if (i==table.length-1) excel.mergeCol(1,prevRow,row+i,0);
    var prev=table[i].dayType;
    if (table[i].sub=="") excel.set(1,1,row+i,table[i].field,activityStyle);
    else excel.set(1,1,row+i,"- "+table[i].sub,subActivityStyle);
    for (j=0;j<table[i].values.length;j++)
      excel.set(1,2+j,row+i,table[i].values[j],regularStyle);
  }
}

function saveToExcel() {
  var defaultWidth=10;
  var excel = $JExcel.new();
  var nameStyle=excel.addStyle({font:"Calibri 18 #00FF00 B",align:"L C"});
  var birthDayStyle=excel.addStyle({font:"Calibri 14 0",align:"L C"});
  var periodStyle=excel.addStyle({font:"Calibri 16 #FF0000 B",align:"C C"});
  var dayTypeStyle=excel.addStyle({font:"Calibri 15 0",align:"C C"});
  var activityStyle=excel.addStyle({font:"Calibri 14 0",align:"C C"});
  var subActivityStyle=excel.addStyle({font:"Calibri 13 0",align:"C C"});
  var regularStyle=excel.addStyle({font:"Calibri 12 0",align:"R C"});
  var genderNode=document.getElementById("gender");
  var gender="";
  if (genderNode) gender=genderNode.selectedIndex;
  var sheetName=document.getElementById("id").value;
  excel.set(0,0,0,language["id"]+":",regularStyle);
  excel.set(0,1,0,sheetName,nameStyle);
  excel.set(0,2,0,language["gender"]+":",regularStyle);
  var gend=language["woman"];
  if (gender==1) gend=language["man"];
  excel.set(0,3,0,gend,birthDayStyle);
  excel.set(0,0,1,language["birth_date"]+":",regularStyle);
  var bd=getDateString("birthdate");
  excel.set(0,1,1,bd,birthDayStyle);
  excel.mergeRow(0,1,1,3);
  excel.set(0,0,2,language["fill_date"]+":",regularStyle);
  var fd=getDateString("filldate");
  excel.set(0,1,2,fd,birthDayStyle);
  excel.mergeRow(0,2,1,3);
  var defaultName=gend+" X";
  if (gender==0) defaultName=gend+" X";
  if (sheetName=="") sheetName=defaultName;
  excel.set({sheet:0,value:sheetName});
  var row=3;
  var periodArr=copyWithoutDeleteds(persons[0].periods);
  for (var i=0;i<periodArr.length;i++) {
    excel.set(0,0,row,language["period"]+" \""+periodArr[i].name+"\" ("+getPeriodInfo(periodArr[i].id)+")",periodStyle);
    var dayTypeArr=[];
    var arr=periodArr[i].dayTypes;
    if (arr) dayTypeArr=arr.slice();
    var fieldArr=[];
    var offset=0,temp=0;
    for (var j=0;j<dayTypeArr.length;j++) {
      excel.set(0,offset,row+2,language["volume"],activityStyle);
      excel.mergeRow(0,row+2,offset,offset+1);
      arr=dayTypeArr[j].fields;
      if (arr) fieldArr=arr.slice();
      excel.set(0,offset,row+1,dayTypeArr[j].name+"|"+dayTypeArr[j].type,dayTypeStyle);
      var prefix="person_0_period_"+periodArr[i].id+"_"+dayTypeArr[j].id+"_volume_";
      var valEl=document.getElementById(prefix+"value");
      var val="";
      if (dayTypeArr[j].type!=2) val=valEl.value; else val=valEl.innerText;
      //var measureVal=document.getElementById(prefix+"measure").selectedIndex;
      var measureVal=language["days_per_week"];
      excel.set(0,offset,row+4,val,regularStyle);
      excel.set(0,offset,row+3,measureVal,subActivityStyle);
      var secValueEl=document.getElementById(prefix+"secondValue");
      var secValue="";
      if (dayTypeArr[j].type==3) secValue=secValueEl.value; else secValue=secValueEl.innerText;
      offset++;
      excel.set(0,offset,row+4,secValue,regularStyle);
      var val=language["weeks_per_year"];
      excel.set(0,offset,row+3,val,subActivityStyle);
      offset++;
      for (var k=0;k<fieldArr.length;k++) {
        excel.set(0,offset,row+2,language[fieldArr[k].id],activityStyle);
        var start=offset;
        for (var l=0;l<fieldArr[k].subs.length;l++) {
          var s=language[fieldArr[k].subs[l]];
          if (s==undefined) s=fieldArr[k].subs[l];
          excel.set(0,offset,row+3,s,subActivityStyle);
          var prefix="person_0_period_"+periodArr[i].id+"_"+dayTypeArr[j].id+"_"+fieldArr[k].id+"_sub_"+l+"_";
          var val=document.getElementById(prefix+"value").value;
          var measureVal=document.getElementById(prefix+"measure").selectedIndex;
          val=Number(val).toFixed(2)+" "+getShortNotation(fieldArr[k].id,measureVal);
          excel.set(0,offset,row+4,val,regularStyle);
          offset++;
        }
        if (fieldArr[k].subs.length==0) {
          var prefix="person_0_period_"+periodArr[i].id+"_"+dayTypeArr[j].id+"_"+fieldArr[k].id+"_";
          var val=document.getElementById(prefix+"value").value;
          var measureVal=document.getElementById(prefix+"measure").selectedIndex;
          val=Number(val).toFixed(2)+" "+getShortNotation(fieldArr[k].id,measureVal);
          excel.set(0,offset,row+4,val,regularStyle);
          excel.mergeCol(0,row+2,row+3,offset);
          offset++;
        }
        if (offset-start>1) excel.mergeRow(0,row+2,start,offset-1);
        var prefix="person_0_period_"+periodArr[i].id+"_"+dayTypeArr[j].id+"_"+fieldArr[k].id+"_comment";
        var val=document.getElementById(prefix).value;
        excel.set(0,offset,row+2,language[fieldArr[k].id],activityStyle);
        excel.set(0,offset,row+3,language["comment"],activityStyle);
        excel.set(0,offset,row+4,val,regularStyle);
        offset++;
      }
      //excel.set(0,offset,row+2,"Komentārs",activityStyle);
      //setColumnWidth(offset,"Komentārs");
      //excel.mergeCol(0,row+2,row+3,offset);
      //excel.set(0,offset,row+4,dayTypeArr[j].comment,activityStyle);
      //setColumnWidth(offset,dayTypeArr[j].comment);
      //offset++;
      excel.mergeRow(0,row+1,temp,offset-1);
      temp=offset;
    }
    excel.mergeRow(0,row,0,offset-1);
    row+=6;
  }
  //generateSecondTab(excel);
  excel.generate("Elpa_COG.xlsx");
}
