class State {
  constructor(st){
    this.st = st;
  }

  rawcode(){
    let coded = '<option class="' + this.st + '">' + this.st + '</option>';

    return coded;
  }
}

let states=[];

let db = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri','Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'West Virginia', 'Washington', 'Wisconsin', 'Wyoming']

for (i=0;i<50;i++){
  let ind = db[i];
  let sel = new State(ind);
  states.push(sel);
}



//must create a


function getStateData(filler){
  let url = 'https://covidtracking.com/api/v1/states/'+filler+'/current.json';
  console.log(url);
  fetch(url)
  .then(async(data) => {
    let obj = await data.json();
    return obj;
  })

  .then((jason) => {
    let ans = jason;
    let cases = document.getElementById("cases");
    let deaths = document.getElementById("deaths")
    let hosp = document.getElementById("hosp")
    let icu = document.getElementById("icu")
    //PROCESSING
    console.log(ans.positive)
    ctext = ans.positive === null? 'N/A' : ans.positive;
    cases.innerHTML = ctext + ' cases';
    console.log(ans.hospitalizedCurrently)

    htext = ans.hospitalizedCurrently === null? 'N/A' : ans.hospitalizedCurrently;
    hosp.innerHTML = htext + ' hospitalizations';
  
    console.log(ans.death)
    dtext = ans.death === null? 'N/A' : ans.death;
    deaths.innerHTML = dtext + ' deaths';

    console.log(ans.inIcuCurrently)

    itext = ans.inIcuCurrently === null? 'N/A' : ans.inIcuCurrently;

    icu.innerHTML = itext + ' in ICU';
  })

  .catch((e) => {
    console.log(e);
  });
}

function clickHandler(){
  let dropdown = document.getElementById("dropdown");
  let state = dropdown.options[dropdown.selectedIndex].value;
  getStateData(state);
  return true;
}

//fetch(url)
//  .then(function(resp){
//    return resp.json();
//  })
//
//  .then(function(data){
//    stata = data;
//    console.log(data);
//  })
//
//  .catch(function(e){
//    console.error('The error is '+e);
//  });
////}

//A WEIRD THING I DIDN'T END UP USING
//const thingy = async() => {
//  let clog = await fetch(url);
//  stata = await clog.json();
//  console.log(stata);
//}
//thingy();





//GENERAL FORMAT
/*fetch(url)
  .then(process)
  .then(save)
  .catch(handleErrors)
;*/
