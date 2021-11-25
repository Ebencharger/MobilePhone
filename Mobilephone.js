let ba3 = document.getElementById('cell');
let phone_time = document.getElementById('time');
let power = document.getElementById('power')
let home_screen = document.getElementById('homescreen')
let screen_saver = document.getElementById('screensaver')
let list = document.getElementById('list')
let finger = document.getElementById('finger')
let faint = document.getElementById('faint')
let on = document.getElementById('on')
let itoffit = document.getElementById('itoff')
let off = document.getElementById('soff')
let lock = document.getElementById('lock')
let offit = document.getElementById('offit');
let poff = document.getElementById('poff')
let restart = document.getElementById('restart')
let start = document.getElementById('start')
let sto = document.getElementById('stop')
let menubts = document.getElementById('menubts')
let fullday = document.getElementById('fullday')
let contactlist = document.getElementById('contactlist')
let callscree = document.getElementById('callscree')
let contactdown = document.getElementById('contactdown')
let line = document.getElementById('line')
let callsusp = document.getElementById('callsusp')
let call1susp = document.getElementById('call1susp')
let contactsusp = document.getElementById('contactsusp')
let phonelist = document.getElementById('phonelist')
let contactslist = document.getElementById('contactslist')
let keypad = document.getElementById('keypad')
let keypadword = document.getElementById('keypadword')
let favlist = document.getElementById('favlist')
let calldial = document.querySelectorAll('button')
let callplate = document.getElementById('callplate')
let sicall = document.getElementById('sicall')
let makingcall = document.getElementById('makingcall')
let callone = document.getElementById('callone');
let calltwo = document.getElementById('calltwo');
let callhang = document.getElementById('callhang');
let contactline = document.getElementById('contactline');
let callDur = document.getElementById('callDur');
let eachContact = document.getElementById('eachContact');
let contactname = document.getElementById('contactname');
let contactno = document.getElementById('contactno');
let recharge = document.getElementById('recharge');
let okay = document.getElementById('recharge');
let callinfoB = document.getElementById('callinfoB');
let callinfoH = document.getElementById('callinfoH');
let callinfo = document.getElementById('callinfo');
let contactinfoB = document.getElementById('contactinfoB');
let contactinfoH = document.getElementById('contactinfoH');
let contactinfo = document.getElementById('contactinfo');
let phoneVol = document.getElementById('phoneVol');
let volumemove = document.getElementById('volumemove');
let volumeup = document.getElementById('volumeup');
let volumedown = document.getElementById('volumedown');
let ba3cell = document.getElementById('ba3cell');
let messageinfo = document.getElementById('messageinfo');
let messageMy = document.getElementById('messageMy');
let mMyplaceholder = document.getElementById('mMyplaceholder');
let sendMessage = document.getElementById('sendMessage');
let takemessage = document.getElementById('takemessage');
let Isentit = document.getElementById('Isentit');
let messagetype = document.getElementById('messagetype');
let messageName = document.getElementById('messageName');
let removeUser = document.getElementById('removeUser');
let removeUser1 = document.getElementById('removeUser1');
let typenumber = document.getElementById('typenumber');
let typenumHolder = document.getElementById('typenumHolder');
let messageButtom = document.getElementById('messageButtom');
let Menu = document.getElementById('Menu');
let Sleepmenu = document.getElementById('Sleepmenu');
let newmessage = document.getElementById('newmessage');
let label = document.getElementById('label');
let minim = document.getElementById('minim');
let header = document.getElementById('header');
let Editme = document.getElementById('Editme');
let editnumber = document.getElementById('editnumber');
let editname = document.getElementById('editname');
let password = document.getElementById('password');
let ssText = document.getElementById('ssText');
let passcode = document.getElementById('passcode');
let accesspass = document.getElementById('accesspass');
let facebok = document.getElementById('facebok');
let powerpress = false, lockpress, powercount = 0; lockcount = 0;
let onn = false, offf = false, lockphon, mysim, myno;
let fingerout, onscre, callpick, eachCon;
let hangup, uscallname, uscallno, stoprecharge, sim1Bal, sim2Bal, updatecard;
let offout, wanttocall = false, checkmtn, checkglo, j, t, q, z, condition = false, dialled = false, iwantCall = false, myPhone;
let checkmtnbal, checkglobal, checkBalsim, simcardName, sec2 = 0, min2 = 0, deduct;
let mtntarrif = 0.11, glotarrif = 0.32, myaudio, sendnewMessage = false, messagebox = false, muchpress, itrings = false, itpicks = false, Estimatedvalue = 0, callduration;
let stopDed, stopDed1, voiceded, Contact1test = false, Contact2test = false, contactli = false, dialopt = false, powertimeon, powerontime = 0, powertimeoff, powerofftime = 0;
let naNum1, naNum2, numNa1, numNa2, special, special2, reg, reg1, da, namm;
let ben, king, batteryLife, phoneVolume;
let an, an1, bn, bn1, cn, missCall, missCall1, receiveCall, receiveCall1, calltim, me;
let dialledcall = [];
let nom, nom1, misscalno, nom2, nom3, i, k, sentmessage = false, iwantunlock = false;
let VolRange, activeon = 0, useroff = false;
let VolArray, contactindex, sim1index, sim2index;
let minimizeapp = [{ message: true }, { contact: true }, { menu: true }];
let sim2balan, editone = false, edittwo = false;
let mySentmess, amay, Mycontname, Mycontno, Mycontname1, Mycontno1;
let mtnMesstarrif = 4;
let gloMesstarrif = 4, getparams;
let myword, getmessage, getmessage2, eachUsermess, simOption;
let contname, idialleditname, idialleditno, idialledittime;
let secondd = -1, word = "Bentel";
document.getElementById('startt').hidden = true;





//i get array from local storage for card recharge.
if (localStorage.getItem("generate")) {
    let v = localStorage.getItem('generate');
    let loadcard = JSON.parse(v);
    card = loadcard;
}
//i get array from local storage for my phone.
if (localStorage.getItem("Myphone")) {
    let k = localStorage.getItem('Myphone');
    getPhone = JSON.parse(k);
    myPhone = getPhone;
}
else if (!localStorage.getItem("Myphone")) {
    // let me save my phone list with JSON
myPhone = [{users: { usersname: "Ebencharger", userpsd: "Ebencharger" },batterylife:100, phoneVolume:14, volume:14, sims: { phonesim1: { simname: "MTN NG", simno: "08167302289", simcode: 1, balance: 8, dialledcall:[], contacts: [{ contactsname: "Ascii", contactsno: "08181663856" }, { contactsname: "Aunt Mi", contactsno: "08141366215" },{ contactsname: "Bro Joshua", contactsno: "09061359277" }, { contactsname: "Bro Royal", contactsno: "07035488635" },{ contactsname: "Jewel", contactsno: "08161333321" }, { contactsname: "Mr Henshaw", contactsno: "08164690239" }, { contactsname: "Uncle Timi", contactsno: "09150692488" }, { contactsname: "Teacher", contactsno: "08130585248" }], messages:[{contactsname:"Jewel", contactsno:"08161333321",message:[{content:"When are you coming home?",time:"9:50PM", day:3, info:"Incoming", sim:'MTN NG'}]}],missedcalls: [{ contactname: "Teacher", time: "10:02am Yesterday", date: "Today", contact: "08130585248" }, { contactname: "Jewel", time: "09:06am Yesterday", date: "Today", contact: "08161333321" }], receivedcalls: [{ contactname: "Teacher", time: "10:02am Yesterday", date: "Today", contact: "08130585248" }, { contactname: "Jewel", time: "09:06am Yesterday", date: "Today", contact: "08161333321" }]}, phonesim2: { simname: "GLO NG", simno: "08167302289", simcode: 2, balance: 8, dialledcall:[], contacts: [{ contactsname: "Bukola", contactsno: "08100929637" },{ contactsname: "Bukunmi Ib", contactsno: "08143189638" },{ contactsname: "Claron", contactsno: "07039342611" },{ contactsname: "Corper Tolu", contactsno: "08145502944" },{ contactsname: "My Number", contactsno: "08167302289" }, { contactsname: "Q SQI", contactsno: "09075619656" }, { contactsname: "Quyum SQI", contactsno: "07057814399" }, { contactsname: "Teacher", contactsno: "08130585248" }], missedcalls: [{ contactname: "Teacher", contact:'08130585248', time: "11:02am Today", date: "Today" }, { contactname: "Jewel",contactsno:'08161333321', time: "12:22pm Today", date: "Today" }], receivedcalls: [{ contactname: "Teacher", contact:'08130585248', time: "10:12am Yesterday", date: "Today" }, {contactname: "Jewel", contact:'08161333321', time: "09:32am Today", date: "Today" }], messages:[{contactsname:"Teacher", contactsno:"08130585248",message:[{content:"How are you",time:"9:52PM", day:4, info:"Incoming", sim:"GLO NG"}]}]}}}]
localStorage.setItem('Myphone', JSON.stringify(myPhone));
}


//i create a regex for balance check code and recharge code
let mtn = /[*]{1}[5]{1}[5]{1}[5]{1}[*]{1}[0-9]{16}[#]{1}/
let glo = /[*]{1}[1]{1}[2]{1}[3]{1}[*]{1}[0-9]{16}[#]{1}/
let mtnbal = /[*]{1}[5]{1}[5]{1}[6]{1}[#]{1}/
let global = /[#]{1}[1]{1}[2]{1}[4]{1}[*]{1}[1]{1}[#]{1}/




// loop through my phone, and get both sims arrays for me
for (i = 0; i < myPhone.length; i++) {
    an = myPhone[i].sims.phonesim1;
    an1 = myPhone[i].sims.phonesim2;
}
an = an;
an1 = an1;



// sim one dialled calls variables
function DcallsVar(params) {
    idialleditname = an.dialledcall[i].name;
    idialleditno = an.dialledcall[i].contact;
    idialledittime = an.dialledcall[i].time
}

// // sim one dialled calls variables
function D1callsVar(params) {
    idialleditgname = an1.dialledcall[k].name;
    idialleditgno = an1.dialledcall[k].contact;
    idialleditgtime = an1.dialledcall[k].time
}

//loop through dialled calls of sim onearray
function diallArr(params) {
    for (i = 0; i < an.dialledcall.length; i++) {
        DcallsVar();
        contactdown.innerHTML += `<div class="together"><p><button id="but" onclick="alar(this)">${idialleditname}<p id="conno" hidden>{${idialleditno}}</p></button></p><div><i class="fa fa-ellipsis-v mt-4" onclick='ellipsis0(this)'><p hidden>${idialleditname}</p><p hidden>{${idialleditno}}</p><p hidden>${idialledittime}</p></i></div></div>`;
        contactdown.innerHTML += `<p id="tome1">${idialledittime}<p><p style="margin-top:-20px">MTN NG<p><hr style="margin-top="-9px"">`;
    }

}

// //loop through dialled calls of sim onearray
function diall1Arr(params) {
    for (k = 0; k < an1.dialledcall.length; k++) {
        D1callsVar();
        contactdown.innerHTML += `<div class="together"><p><button id="but" onclick="alar(this)">${idialleditgname}<p id="conno" hidden>${idialleditgno}</p></button></p><div><i class="fa fa-ellipsis-v mt-4" onclick='ellipsisglo(this)'><p hidden>${idialleditgname}</p><p hidden>{${idialleditgno}}</p><p hidden>${idialleditgtime}</p></i></div></div>`;
        contactdown.innerHTML += `<p id="tome1">${idialleditgtime}<p><p style="margin-top:-20px">GLO NG<p><hr style="margin-top="-9px"">`;
    }

}


//my sim one missed calls variables
function McallsVar() {
    misscalno = an.missedcalls[i];
    nom = an.missedcalls[i].contact;
    calltim = (an.missedcalls[i].time);
    missCall = an.missedcalls[i].contactname;
}

//sim one missed call list
function McallsList(params) {
    for (i = 0; i < an.missedcalls.length; i++) {
        McallsVar();
        contactdown.innerHTML += `<div class="together"><p><button id="but" onclick="alar(this)">${missCall}<p id="conno" hidden>{${nom}}</p></button></p><div><i class="fa fa-ellipsis-v mt-4" onclick='ellipsis(this)'><p hidden>${missCall}</p><p hidden>{${nom}}</p><p hidden>${calltim}</p></i></div></div>`;
        contactdown.innerHTML += `<p id="tome">${calltim}<p><p style="margin-top:-20px">MTN NG<p><hr style="margin-top="-9px"">`;
    }
}



//my sim one recieved calls variables
function RcallsVar() {
    nom2 = an.receivedcalls[i].contact;
    receiveCall = an.receivedcalls[i].contactname;
    calltim1 = (an.receivedcalls[i].time);
}

function RcallsList(params) {
    for (i = 0; i < an.missedcalls.length; i++) {
        RcallsVar();
        contactdown.innerHTML += `<div class="together"><p><button id="but" onclick="alar(this)">${receiveCall}<p id="conno" hidden>{${nom2}}</p></button></p><div><i class="fa fa-ellipsis-v mt-4" id="elipsis" onclick='ellipsis2(this)'><p hidden>${receiveCall}</p><p hidden>{${nom2}}</p><p hidden>${calltim1}</p></i></div></div>`;
        contactdown.innerHTML += `<p id="time2">${calltim1}<p><p style="margin-top:-20px">MTN NG<p><hr style="margin-top="-9px"">`;
    }
}

//my sim two missed calls variables
function M1callsVar() {
    nom1 = an1.missedcalls[i].contact;
    missCall1 = an1.missedcalls[i].contactname;
    calltim2 = (an1.missedcalls[i].time);
}
function M1callsList(params) {
    for (i = 0; i < an.missedcalls.length; i++) {
        M1callsVar();
        contactdown.innerHTML += `<div class="together"><p><button id="but" onclick="alar(this)">${missCall1}<p id="conno" hidden>{${nom1}}</p></button></p><div><i class="fa fa-ellipsis-v mt-4" id="elipsis" onclick='ellipsis3(this)'><p hidden>${missCall1}</p><p hidden>{${nom1}}</p><p hidden>${calltim2}</p></i></div></div>`;
        contactdown.innerHTML += `<p id="tome">${calltim2}<p><p style="margin-top:-20px">GLO NG<p><hr style="margin-top="-9px"">`;
    }
}


//my sim one recieved calls variables
function R1callsVar() {
    nom3 = an1.receivedcalls[i].contact;
    calltim3 = (an1.receivedcalls[i].time);
    receiveCall1 = an1.receivedcalls[i].contactname;
}

function R1callsList(params) {
    for (i = 0; i < an.missedcalls.length; i++) {
        R1callsVar();
        contactdown.innerHTML += `<div class="together"><p><button id="but" onclick="alar(this)">${receiveCall1}<p id="conno" hidden >{${nom3}}</p></button></p><div><i class="fa fa-ellipsis-v mt-4" id="elipsis" onclick='ellipsis4(this)'><p hidden>${receiveCall1}</p><p hidden>{${nom3}}</p><p hidden>${calltim3}</p></i></div>`;
        contactdown.innerHTML += `<p id="time2">${calltim3}<p><p style="margin-top:-20px">GLO NG<p><hr style="margin-top="-9px"">`;
    }
}


// i want to get my contact for missed and recieved and dialled calls into dialled list
function mycontactlist() {
    contactli = true;
    callsusp.hidden = false;
    diallArr();
    diall1Arr();
    McallsList();
    RcallsList();
    M1callsList();
    R1callsList();
}


// function that calls each dialled contact
function alar(params) {
    sicall.hidden = false;
    faint.hidden = false;
    uscallname = params.innerHTML;
    let a = (params.closest('button').children[0].innerHTML);
    uscallno = a;
    console.log(params);
}


//load recharge card;
function rechargecard() {
    for (let i = 0; i < card.length; i++) {
        console.log(card[0].cardpin);
        if (callplate.value == card[i].cardpin) {
            //if card is not used
            if (card[i].cardused == "unused") {
                console.log(1);
                recharge.innerHTML = "";
                recharge.innerHTML = `<p>Congratulations, You have successfully recharged ${card[i].cardnam} of #${card[i].cardvalue}</p><button id="okay" onclick="successful(${i})">OK</button>`;
                card[i].cardused = "used"
                card[i] = card[i];
                localStorage.setItem('generate', JSON.stringify(card));
                updatecard = card[i].cardvalue;
                console.log(updatecard);
                //recharge card and update my account, it is calling the function
                rechargeMylin();
                clearTimeout(callpick);
                return;
            }
            //if card is used
            else if (card[i].cardused == "used") {
                console.log(2);
                recharge.innerHTML = `<p>Dear Customer, Pin is already used</p><button id="okay" onclick="successful(${i})">OK</button>`;
                clearTimeout(callpick);
                return;
            }
            condition = false;
            break;
        }
        //if card is not valid 
        if (i == card.length - 1 && condition == false) {
            console.log(3);
            recharge.innerHTML = `<p>Dear Customer,Check the Pin or use appropriate provider code</p><button id="okay" onclick="successful(${i})">OK</button>`;
            clearTimeout(callpick);
        }
    }
}

//okay button when recharge or you check balance.
function successful() {
    callDur.innerHTML = "";
    recharge.innerHTML = "";
    recharge.hidden = true;
    faint.hidden = true;
}

//get battery Life from Json
for (let i = 0; i < myPhone.length; i++) {
    batteryLife = Number(myPhone[i].batterylife);

}

// set my phone time
let myPhonetime = new Date();
let myPhonehour = myPhonetime.getHours();
let myPhonemin = myPhonetime.getUTCMinutes();
let date = new Date(), day = date.getDay(), month = date.getMonth(), timwzon, a, b;
let hour = date.getHours(), minutes = date.getMinutes();
let countminutes = 0, second = 60, newmonth;
ba3.innerHTML = `${batteryLife}%`
let montharray = [{ month: "01" }, { month: "02" }, { month: "03" },
{ month: "04" }, { month: "05" }, { month: "06" }, { month: "07" }, { month: "08" },
{ month: "09" }, { month: "10" }, { month: "11" }, { month: "12" }];
let dayarray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
for (let k = 0; k < montharray.length; k++) {
    newmonth = montharray[k];
}
newmonth = montharray[month].month;
let newday = dayarray[day];
let todaysday;
let fulldate = (`${date.getDate()}/${newmonth}/${date.getFullYear()}`);

fullday.innerHTML = `<p>${fulldate}</p><p>${newday}</p>`
if (minutes < 10) {
    minutes = `0${minutes}`;
}

if (hour >= 12) {
    timwzon = "PM"
    hour = hour - 12;
}
else if (hour < 12) {
    if (hour == 0) {
        hour = 12
    }
    timwzon = "AM"
    hour = hour;
}

console.log(batteryLife);

//change time
setInterval(changetime, 1000)
function changetime() {
    if (batteryLife <= 20) {
        ba3cell.style.border = "2px solid red"
        ba3.style.border = "1px solid red"
    }
    if (!second) {
        minutes = (Number(minutes)) + 1;
        second = 60;
        //reduce battery life only when phone is on
        if (batteryLife > 0 && activeon == 1) {
            batteryLife = (batteryLife - 1);
            ba3.innerHTML = `${batteryLife}%`;
            for (let i = 0; i < myPhone.length; i++) {
                myPhone[i].batterylife = batteryLife;
                myPhone[i].batterylife = myPhone[i].batterylife;
                localStorage.setItem('Myphone', JSON.stringify(myPhone));
            }
            //always power off when battery is zero life percentage.
            if (batteryLife == 0) {
                batteryLife = 0;
                setTimeout(() => {
                    poweroff();
                }, 1000);
            }
        }
    }
    if (minutes == 60) {
        minutes = 0;
        hour = hour + 1;
    }

    second--;
    phone_time.innerHTML = `<p>${hour}:${minutes}${timwzon}</p>`;
}


//intialize phone, switching on phone
function onscreen() {
    secondd = -1;
    document.getElementById('startt').hidden = false;
    document.getElementById('startt').innerHTML = "";
    console.log("dddddd");
    setTimeout(() => {
        console.log("ffffff");
        king = setInterval(changetime, 1000);
        function changetime() {
            if (secondd == 5) {
                clearInterval(ben);
                return;
            }
            secondd++;
            document.getElementById('startt').innerHTML += word[secondd];
        }
    }, 100);
    setTimeout(() => {
        document.getElementById('startt').hidden = true;
        document.getElementById('startt').innerHTML = "";
        secondd = -1;
        start.hidden = false;
        onscre = setTimeout(() => {
            clearInterval(king);
            start.hidden = true;
            ssText.hidden = false;
            screen_saver.hidden = false;
            list.hidden = false;
            finger.hidden = false;
        }, 10000);
    }, 10000);
}






//this is where Home screen is display always
function callscreen() {
    offit.hidden = true;
    home_screen.hidden = false;
    Sleepmenu.hidden = false;
    menubts.hidden = false;
    keypadword.hidden = true;
    keypad.hidden = true;
    ssText.hidden = true;
    screen_saver.hidden = true;
    list.hidden = false;
    Menu.hidden = true;
    makingcall.hidden = true;
    sicall.hidden = true;
    finger.hidden = true;
    contactlist.hidden = true;
    callinfoB.hidden = true;
    contactinfoB.hidden = true;
    faint.hidden = true;
    start.hidden = true;
}

//i lost the function of this 
function unlockscreen() {
    callscreen();
}

// if i press off button, aftert 10secs, and no button press, sleep.
function offscreen() {
    console.log('screen off');
    home_screen.hidden = false;
    screen_saver.hidden = true;
    list.hidden = false;
    contactinfoB.hidden = true;
    finger.hidden = true;
    keypadword.hidden = true;
    keypad.hidden = true;
    ssText.hidden = true;
    sicall.hidden = true;
    Menu.hidden = true;
    faint.hidden = false;
    makingcall.hidden = true;
    offit.hidden = false;
    menubts.hidden = true;
    callinfoB.hidden = true;
    contactinfoB.hidden = true;
    contactlist.hidden = true;
    start.hidden = true;
    offout = setTimeout(() => {
        console.log(powerpress, onn);
        offit.hidden = true;
        home_screen.hidden = true;
        screen_saver.hidden = true;
        list.hidden = true;
        Menu.hidden = true;
        makingcall.hidden = true;
        finger.hidden = true;
        contactinfoB.hidden = true;
        faint.hidden = true;
        sicall.hidden = true;
        menubts.hidden = true;
        contactlist.hidden = true;
        start.hidden = true;
        console.log(1234);
    }, 10000);
}


//i call power off function when i click power off on off operation
function poweroff() {
    offit.hidden = true;
    home_screen.hidden = true;
    screen_saver.hidden = true;
    list.hidden = true;
    finger.hidden = true;
    faint.hidden = true;
    Menu.hidden = true;
    keypadword.hidden = true;
    password.hidden = true;
    sto.hidden = false;
    makingcall.hidden = true;
    sicall.hidden = true;
    contactinfoB.hidden = true;
    callinfoB.hidden = true;
    contactlist.hidden = true;
    menubts.hidden = false;
    setTimeout(function () {
        offit.hidden = true;
        home_screen.hidden = true;
        screen_saver.hidden = true;
        list.hidden = true;
        finger.hidden = true;
        faint.hidden = true;
        makingcall.hidden = true;
        contactinfoB.hidden = true;
        callinfoB.hidden = true;
        sto.hidden = true;
        contactlist.hidden = true;
        powerpress = false;
        offf = false;
        powercount = 0;
        console.log(powerpress, offf, powercount);
        menubts.hidden = true;
    }, 15000)
}
// i call restart function, once i click on restart from off operation
function restat() {
    offit.hidden = true;
    home_screen.hidden = true;
    screen_saver.hidden = true;
    keypadword.hidden = true;
    password.hidden = true;
    list.hidden = true;
    finger.hidden = true;
    sicall.hidden = true;
    faint.hidden = true;
    contactinfoB.hidden = true;
    callinfoB.hidden = true;
    makingcall.hidden = true;
    start.hidden = true;
    contactlist.hidden = true;
    menubts.hidden = true;
    onscreen();
}

// when i press finger print
function fingerl() {
    finger.style.backgroundColor = "green";
    fingerout = setTimeout(() => {
        home_screen.hidden = false;
        screen_saver.hidden = true;
        list.hidden = false;
        finger.hidden = true;
        keypadword.hidden = true;
        menubts.hidden = false;
        makingcall.hidden = true;
        sicall.hidden = true;
        contactinfoB.hidden = true;
        callinfoB.hidden = true;
        faint.hidden = true;
        contactlist.hidden = true;
        finger.style.backgroundColor = "white";
    }, 3000);
}

clearTimeout(fingerout);
clearTimeout(offout);
clearTimeout(onscre);

//Switch on my phone on;
power.addEventListener('mouseup', switchon)
power.addEventListener('mousedown', mousdown)

//I want to track the duration of key down
function mousdown() {
    powertimeon = setInterval(() => {
        powerontime++
        console.log(powerontime, "on");
        label.innerHTML = powerontime;
        muchpress = powerontime;
    }, 1000);
}

// I create a function that will return screen home and pop up switch off or power off modal
function callOffscreen() {
    offscreen();
    onn == true;
    setTimeout(() => {
        clearInterval(powertimeon);
        label.innerHTML = "";
        activeon = 0;
    }, 1000);
}

function switchon(params) {
    console.log(lockpress);
    muchpress = powerontime;
    powerontime = 0;
    powerpress = true;
    powercount++;
    console.log(lockpress);
    setTimeout(() => {
        clearInterval(powertimeon);
        label.innerHTML = "";
        powerontime == 0;
        label.innerHTML = powerontime;
    }, 10);
    //if i press on and power button for the first time;
    if (batteryLife == 0) {
        activeon = -1;
    }
    else if (batteryLife > 0) {
        if (muchpress >= 2 && activeon == 0) {
            onscreen();
            onn = false;
            console.log(onn);
            lockpress = true;
            setTimeout(() => {
                clearInterval(powertimeon);
                activeon = 1;
                label.innerHTML = "";
                lockpress = false;
            }, 1000);
        }

        //turn to function if it works eventually
        // if i press off button and press button
        if (muchpress >= 2 && activeon == 1) {
            if (home_screen.hidden == false) {
                callOffscreen()
            }
            else if (Menu.hidden == false) {
                Menu.hidden = true;
                callOffscreen()
            }
            else if (messageHome.hidden == false) {
                messageHome.hidden = true;
                callOffscreen()
            }
            else if (messagetype.hidden == false) {
                messagetype.hidden = true;
                callOffscreen()
            }
            else if (contactlist.hidden == false) {
                contactlist.hidden = true;
                callOffscreen()
            }
        }
        //if i press lock and power button
        else if (muchpress <= 2 && home_screen.hidden == false) {
            console.log(1235);
            offit.hidden = true;
            home_screen.hidden = true;
            screen_saver.hidden = true;
            list.hidden = true;
            finger.hidden = true;
            makingcall.hidden = true;
            sicall.hidden = true;
            faint.hidden = true;
            menubts.hidden = true;
            contactlist.hidden = true;
            callinfoB.hidden = true;
            contactinfoB.hidden = true;
            lock.innerHTML = "Unlock";
            setTimeout(() => {
                clearInterval(powertimeon);
                label.innerHTML = "";
            }, 1000);
        }

        //if i press unlock and power button
        else if (muchpress <= 2 && home_screen.hidden == true && lockpress == false) {
            console.log(6789);
            offit.hidden = true;
            home_screen.hidden = true;
            screen_saver.hidden = false;
            ssText.hidden = false;
            menubts.hidden = true;
            sicall.hidden = true;
            makingcall.hidden = true;
            finger.hidden = false;
            list.hidden = false;
            faint.hidden = true;
            contactinfoB.hidden = true;
            callinfoB.hidden = true;
            contactlist.hidden = true;
            lock.innerHTML = "Lock";
            setTimeout(() => {
                clearInterval(powertimeon);
                label.innerHTML = "";
            }, 1000);
        }
        //if i want to off the phone but i press power button again
        else if (muchpress <= 2 && onn == true) {
            home_screen.hidden = false;
            screen_saver.hidden = true;
            list.hidden = false;
            finger.hidden = true;
            sicall.hidden = true;
            faint.hidden = true;
            contactinfoB.hidden = true;
            callinfoB.hidden = true;
            makingcall.hidden = true;
            offit.hidden = true;
            menubts.hidden = false;
            contactlist.hidden = true;
            clearTimeout(onscre);
            clearTimeout(offout);
            if (offf == true && powerpress == true && onn == true) {
                console.log(offf, powerpress, onn);
                clearTimeout(offout);
            }
        }
    }
}



// Whenever a call icon is pressed from home
function callsr(params) {
    home_screen.hidden = true;
    screen_saver.hidden = true;
    list.hidden = false;
    Menu.hidden = true;
    finger.hidden = true;
    faint.hidden = true;
    offit.hidden = true;
    makingcall.hidden = true;
    menubts.hidden = false;
    contactlist.hidden = false;
    mycontactlist();
}

//When a minimize icon is pressed, no matter where, go home
function always_screen() {
    home_screen.hidden = false;
    screen_saver.hidden = true;
    list.hidden = false;
    facebok.hidden = true;
    newmessage.hidden = true;
    messageHome.hidden = true;
    messagetype.hidden = true;
    finger.hidden = true;
    Menu.hidden = true;
    Sleepmenu.hidden = false;
    menubts.hidden = false;
    faint.hidden = true;
    offit.hidden = true;
    menubts.hidden = false;
    contactlist.hidden = true;
    makingcall.hidden = true;
    keypad.hidden = true;
    keypadword.hidden = true;
    sicall.hidden = true;
    call1susp.hidden = true;
}

//if i click on phone call list
function phlist(params) {
    contactdown.innerHTML = "";
    line.style.marginLeft = "-5px";
    callsusp.hidden = false;
    contactsusp.hidden = true;
    keypad.hidden = true;
    keypadword.hidden = true;
    menubts.hidden = false;
    call1susp.hidden = true;
    makingcall.hidden = true;
    callplate.value = "";
    mycontactlist();
}

//if i click on contact list
function colist(params) {
    contactdown.innerHTML = "";
    line.style.marginLeft = "105px";
    callsusp.hidden = true;
    home_screen.hidden = true;
    faint.hidden = true;
    contactlist.hidden = false;
    contactsusp.hidden = false;
    keypad.hidden = true;
    keypadword.hidden = true;
    Menu.hidden = true;
    makingcall.hidden = true;
    menubts.hidden = false;
    call1susp.hidden = true
    callplate.value = "";
    for (let i = 0; i < an.contacts.length; i++) {
        bn = an.contacts[i].contactsname;
        contactindex = i;
        let numb1 = an.contacts[i].contactsno;
        contactdown.innerHTML += `<div class="together" id="eachContact" onclick="Mycontact1(this)"><div class="d-flex mb-3"><div class="userA">${bn[0]}</div><p class="ml-2 mt-1">${bn}</p></div><p class="mt-1" id="smcode">${an.simcode}</p><p hidden>${numb1}</p><p hidden>${contactindex}</p></div>`
        bn1 = an1.contacts[i % an1.contacts.length].contactsname;
        let numb2 = an1.contacts[i % an1.contacts.length].contactsno;
        contactdown.innerHTML += `<div class="together" id="eachContact" onclick="Mycontact2(this)"><div class="d-flex mb-3"><div class="userA">${bn1[0]}</div><p class="ml-2 mt-1">${bn1}</p></div><p class="mt-1" id="smcode1">${an1.simcode}</p><p hidden>${numb2}</p><p hidden>${contactindex}</p></div>`
    }

}


//do for each of my contact 
function Mycontact1(params) {
    contactlist.hidden = true;
    Editme.hidden = true;
    sim1index = (params.closest('div').children[3].innerHTML);
    Mycontno = (params.closest('div').children[2].innerHTML);
    Mycontname = (params.closest('div').children[0].children[1].innerHTML);
    console.log(Mycontname, Mycontno);
    Editme.hidden = true;
    contactinfoB.hidden = false;
    contactinfoH.innerHTML += `<i class="fa fa-user biguser"></i>`
    contactinfo.innerHTML += `<div class="Mycontname">${Mycontname}</div><div class="twofa d-flex"><i class="fa fa-pencil" onclick="editCont()"></i><i class="fa fa-ellipsis-v ml-4"></i></div><div class="d-flex justify-content-between"><div class="d-flex"><i class="fa fa-phone" onclick="callCont1(this)"><p hidden>${Mycontname}</p><p hidden>${Mycontno}</p></i><div class="pl-3"><p>${Mycontno}</p><p>Mobile</p></div></div><div class="ml-5 famessage"><i class="fa fa-commenting-o"></i></div><div>`
}

//My sim 1 contact function
function callCont1(params) {
    Contact1test = true;
    let faname = params.closest('i').children[0].innerHTML;
    let fano = params.closest('i').children[1].innerHTML;
    console.log(faname, fano);
    faint.hidden = false;
    sicall.hidden = false
    contactlist.hidden = true;
    uscallno = fano;
    uscallname = faname;
}

//Edit my contact
function editCont() {
    contactinfoB.hidden = false;
    contactinfoH.innerHTML = "";
    contactinfo.innerHTML = "";
    contactinfo.innerHTML += `<div class="Mycontname">${Mycontname}</div> <div class="twofa d-flex"><p onclick="PushCont1()">Okay</p></div>`
    Editme.hidden = false;
    editname.value = Mycontname;
    editnumber.value = Mycontno;
}

//edit contact name box
function editContnam() {
    editone = true;
    edittwo = false;
    Editme.style.marginTop = '4px';
    keypadword.hidden = false;
}

//edit contact number box
function editContnum() {
    edittwo = true;
    editone = false;
    Editme.style.marginTop = '4px';
    keypadword.hidden = false;
    keypadword.hidden = false;
}

function Mycontact2(params) {
    contactlist.hidden = true;
    Editme.hidden = true;
    sim2index = (params.closest('div').children[3].innerHTML);
    let Mycontno = (params.closest('div').children[2].innerHTML);
    let Mycontname = (params.closest('div').children[0].children[1].innerHTML);
    Mycontno1 = (params.closest('div').children[2].innerHTML);
    Mycontname1 = (params.closest('div').children[0].children[1].innerHTML);
    console.log(Mycontname, Mycontno);
    contactinfoB.hidden = false;
    contactinfoH.innerHTML += `<i class="fa fa-user biguser"></i>`
    contactinfo.innerHTML += `<div class="twofa d-flex"><i class="fa fa-pencil" onclick="editCont2()"></i><i class="fa fa-ellipsis-v ml-4"></i></div><div class="Mycontname">${Mycontname}</div><div class="d-flex justify-content-between"><div class="d-flex"><i class="fa fa-phone" onclick="callCont2(this)"><p hidden>${Mycontname}</p><p hidden>${Mycontno}</p></i><div class="pl-3"><p>${Mycontno}</p><p>Mobile</p></div></div><div class="ml-5 famessage"><i class="fa fa-commenting-o"></i></div><div>`
}
//My sim 2 contact function
function callCont2(params) {
    Contact2test = true;
    let faname = params.closest('i').children[0].innerHTML;
    let fano = params.closest('i').children[1].innerHTML;
    console.log(faname, fano);
    faint.hidden = false;
    sicall.hidden = false
    uscallno = fano;
    uscallname = faname;
}


//Edit my contact
function editCont2() {
    contactinfoB.hidden = false;
    contactinfoH.innerHTML = "";
    contactinfo.innerHTML = "";
    contactinfo.innerHTML += `<div class="Mycontname">${Mycontname1}</div> <div class="twofa d-flex"><p onclick="PushCont2()">Okay</p></div>`
    Editme.hidden = false;
    editname.value = Mycontname1;
    editnumber.value = Mycontno1;
}


//Add new user
function Addnewcontact() {
    editname.value = ""
    editnumber.value = ""
    contactinfoB.hidden = false;
    contactlist.hidden = true;
    contactinfoH.innerHTML = "";
    contactinfo.innerHTML = "";
    contactinfo.innerHTML += `<div class="Mycontname">New Contact</div> <div class="twofa d-flex"><p onclick="Pushnew()">Okay</p><select name="" id="selectsim" onchange="Simopt(this)"><option value="Sim 1">Sim 1</option><option value="Sim 2">Sim 2</option></select></div>`
    Editme.hidden = false;
}

//check sim option;
function Simopt(params) {
    simOption = (params.value);
}
function Pushnew() {
    if (simOption == "Sim 1") {
        myPhone[0].sims.phonesim1.contacts.push({ contactsname: editname.value, contactsno: editnumber.value });
        localStorage.setItem('Myphone', JSON.stringify(myPhone));
        reformatList()
    }
    else if (simOption == "Sim 2") {
        myPhone[0].sims.phonesim2.contacts.push({ contactsname: editname.value, contactsno: editnumber.value });
        localStorage.setItem('Myphone', JSON.stringify(myPhone));
        reformatList()
    }
}

//set my list back to default and update it.
function reformatList() {
    Editme.hidden = true;
    keypadword.hidden = true;
    contactinfoB.hidden = true;
    contactinfoH.innerHTML = "";
    contactinfo.innerHTML = "";
    editname.value = "";
    editnumber.value = "";
    Editme.style.marginTop = "50px";
    colist();
}

//update contact info I edited for sim 1
function PushCont1() {
    contactindex = (sim1index);
    (myPhone[0].sims.phonesim1.contacts[contactindex].contactsname) = editname.value;
    (myPhone[0].sims.phonesim1.contacts[contactindex].contactsno) = editnumber.value;
    localStorage.setItem('Myphone', JSON.stringify(myPhone));
    reformatList()
}
//update contact info I edited for sim2
function PushCont2() {
    contactindex = (sim2index);
    console.log(contactindex);
    (myPhone[0].sims.phonesim2.contacts[contactindex].contactsname) = editname.value;
    (myPhone[0].sims.phonesim2.contacts[contactindex].contactsno) = editnumber.value;
    localStorage.setItem('Myphone', JSON.stringify(myPhone));
    reformatList()
}


//edit contact name box function
function editContnam() {
    editone = true;
    edittwo = false;
    Editme.style.marginTop = '4px';
    keypadword.hidden = false;
}

//edit contact number box function
function editContnum() {
    edittwo = true;
    editone = false;
    Editme.style.marginTop = '4px';
    keypadword.hidden = false;
    keypadword.hidden = false;
}

//if i click on favorite list
function fvlist(params) {
    contactdown.innerHTML = "";
    line.style.marginLeft = "235px";
    callsusp.hidden = false;
    contactsusp.hidden = true;
    keypad.hidden = true;
    makingcall.hidden = true;
    menubts.hidden = false;
    call1susp.hidden = true
    callplate.value = "";
}


//if i click on menupad of call list or fav list
function call(params) {
    iwantCall = true;
    keypad.hidden = false;
    call1susp.hidden = false;
    callsusp.hidden = true;
    call1susp.style.marginLeft = "125px"
    callplate.value = "";
    makingcall.hidden = true;
    menubts.hidden = false;
}

//get number from keypad
calldial.forEach(function (max) {
    max.addEventListener('click', dialno)
})

function dialno(params) {
    callplate.value += (params.target.innerHTML);

}

//delete part of the number
function deleteNumber(params) {
    let a = callplate.value.slice(0, callplate.value.length - 1);
    callplate.value = a;
}

//i want to select a sim to call with
function callme(params) {
    console.log(callplate.value);
    //if callplate is empty and a call icon is pressed, display a default number
    if (callplate.value == "") {
        callplate.value = "08130585248";
    }
    else if (callplate != "") {
        keypad.hidden = true;
        call1susp.hidden = true;
        sicall.hidden = false;
        makingcall.hidden = true;
        faint.hidden = false;
        menubts.hidden = false;
    }
}

// function sensecall() {
//     wanttocall = true;
//     alert();
// }


//when i dial number, check whether i have the number in my contact, then display its name
//for sim one
function displayCo(params) {
    for (let i = 0; i < an.contacts.length; i++) {
        console.log(an.contacts[i].contactsno);
        if (contactno.innerHTML == an.contacts[i].contactsno) {
            contname = an.contacts[i].contactsname;
            console.log(contname);
            console.log("e day");
            break;
        }
        else if (i == an.contacts.length - 1 && contactno.innerHTML != an.contacts[i].contactsno) {
            contname = "No Name";
        }
    }
}

// for sim two
function displayCoglo(params) {
    for (let i = 0; i < an1.contacts.length; i++) {
        console.log(an1.contacts[i].contactsno);
        if (contactno.innerHTML == an1.contacts[i].contactsno) {
            contname = an1.contacts[i].contactsname;
            console.log(contname);
            console.log("e day");
            break;
        }
        else if (i == an.contacts.length - 1 && contactno.innerHTML != an.contacts[i].contactsno) {
            contname = "No Name";
            console.log("no name");
        }
    }
}


//always update my dialled list
function Dial1update(params) {
    for (let i = 0; i < myPhone.length; i++) {
        let contno = callplate.value;
        let tim = `${hour}:${minutes}${timwzon}`
        myPhone[i].sims.phonesim1.dialledcall.push({ name: contname, contact: contno, time: tim });
        localStorage.setItem('Myphone', JSON.stringify(myPhone));
    }
}
function Dial2update(params) {
    for (let i = 0; i < myPhone.length; i++) {
        let contno = callplate.value;
        let tim = `${hour}:${minutes}${timwzon}`
        myPhone[i].sims.phonesim2.dialledcall.push({ name: contname, contact: contno, time: tim });
        localStorage.setItem('Myphone', JSON.stringify(myPhone));
    }
}

function Dial3update(params) {
    for (i = 0; i < myPhone.length; i++) {
        let contno = contactno.innerHTML;
        let tim = `${hour}:${minutes}${timwzon}`
        myPhone[i].sims.phonesim1.dialledcall.push({ name: contactname.innerHTML, contact: contno, time: tim });
        localStorage.setItem('Myphone', JSON.stringify(myPhone));
    }
}
function Dial4update(params) {
    for (i = 0; i < myPhone.length; i++) {
        let contno = contactno.innerHTML;
        let tim = `${hour}:${minutes}${timwzon}`
        myPhone[i].sims.phonesim2.dialledcall.push({ name: contactname.innerHTML, contact: contno, time: tim });
        localStorage.setItem('Myphone', JSON.stringify(myPhone));
    }
}



//let me click on a preferred sim but do different task
callone.addEventListener('click', itcalls);
calltwo.addEventListener('click', itcalls);
function itcalls(params) {
    checkBalsim = params.target.id;
    console.log(params.target.id);
    checkmtn = mtn.test(callplate.value);
    checkglo = glo.test(callplate.value);
    checkmtnbal = mtnbal.test(callplate.value);
    checkglobal = global.test(callplate.value);
    simcardName = params.target.innerHTML;

    //if i dialled a number....
    if (iwantCall == true && (params.target.id == "simname1")) {
        if (checkmtnbal == false && checkglobal == false && checkmtn == false && checkglo == false) {
            makingcall.hidden = false;
            sicall.hidden = true;
            contactno.innerHTML = callplate.value;
            contactline.innerHTML = `calling via ${simcardName}`;
            displayCo();
            contactname.innerHTML = contname;
            Dial1update()
            beforeCall1();
        }
        else if (checkmtnbal == true && checkglobal == false && checkmtn == false && checkglo == false) {
            sicall.hidden = true;
            recharge.innerHTML = `<p class="spinner-border text-primary"></p>
        <p class="pl-2">Please wait...</p>`;
            recharge.hidden = false;
            callsusp.hidden = false;
            callpick1 = setTimeout(() => {
                console.log('mtn');
                checkmtbal();
            }, 6000);
            setTimeout(() => {
                checkmtnbal = false;
                console.log(checkmtnbal);
            }, 10);
        }

        else if (checkglobal == true && checkmtnbal == false && checkmtn == false && checkglo == false) {
            sicall.hidden = true;
            recharge.innerHTML = `<p class="spinner-border text-primary"></p>
        <p class="pl-2">Please wait...</p>`;
            recharge.hidden = false;
            callsusp.hidden = false;
            callpick = setTimeout(() => {
                recharge.innerHTML = `<p>Dear Customer, we couldn't recognize this code </p><button id="okay" onclick="successful()">OK</button>`;
            }, 6000);
            setTimeout(() => {
                checkglobal = false;
                console.log(checkglobal);
            }, 10);
        }
        else if (checkglobal == false && checkmtn == true && checkglo == false && checkmtnbal == false) {
            sicall.hidden = true;
            recharge.innerHTML = `<p class="spinner-border text-primary"></p>
        <p class="pl-2">Please wait...</p>`;
            recharge.hidden = false;
            callsusp.hidden = false;
            callpick = setTimeout(() => {
                rechargecard();
            }, 6000);
            setTimeout(() => {
                checkmtn = false;
                console.log(checkmtn);
            }, 10);
        }
        else if (checkglobal == false && checkmtn == false && checkglo == true && checkmtnbal == false) {
            sicall.hidden = true;
            recharge.innerHTML = `<p class="spinner-border text-primary"></p>
                <p class="pl-2">Please wait...</p>`;
            recharge.hidden = false;
            callsusp.hidden = false;
            callpick = setTimeout(() => {
                recharge.innerHTML = "";
                recharge.innerHTML = `<p>Dear Customer, we couldn't recognize this code </p><button id="okay" onclick="successful()">OK</button>`;
            }, 6000);
            setTimeout(() => {
                checkglo = false;
                console.log(checkglo);
            }, 10);
        }
        setTimeout(() => {
            iwantCall = false;
            console.log(iwantCall);
        }, 10);
        // 
    }

    //if i dialled number and i call with sim 2
    if (iwantCall == true && (params.target.id == "simname2")) {
        if (checkmtnbal == false && checkglobal == false && checkmtn == false && checkglo == false) {
            makingcall.hidden = false;
            sicall.hidden = true;
            contactno.innerHTML = callplate.value;
            let contno = callplate.value;
            let tim = `${hour}:${minutes}${timwzon}`
            contactline.innerHTML = `calling via ${simcardName}`;
            displayCoglo();
            contactname.innerHTML = contname;
            Dial2update(); //I CALL DIALLED CALL UPDATE FUNCTION
            beforeCall2();
        }
        else if (checkmtnbal == false && checkglobal == true && checkmtn == false && checkglo == false) {
            sicall.hidden = true;
            recharge.innerHTML = `<p class="spinner-border text-primary"></p>
        <p class="pl-2">Please wait...</p>`;
            recharge.hidden = false;
            callsusp.hidden = false;
            callpick1 = setTimeout(() => {
                console.log('glo');
                checkglbal();
            }, 6000);
            setTimeout(() => {
                checkglobal = false;
                console.log(checkglobal);
            }, 10);
        }

        else if (checkglobal == false && checkmtnbal == true && checkmtn == false && checkglo == false) {
            sicall.hidden = true;
            recharge.innerHTML = `<p class="spinner-border text-primary"></p>
        <p class="pl-2">Please wait...</p>`;
            recharge.hidden = false;
            callsusp.hidden = false;
            callpick = setTimeout(() => {
                recharge.innerHTML = `<p>Dear Customer, your code is not valid </p><button id="okay" onclick="successful()">OK</button>`;
            }, 6000);
            setTimeout(() => {
                checkmtnbal = false;
                console.log(checkmtnbal);
            }, 10);
        }
        else if (checkglobal == false && checkmtn == false && checkglo == true && checkmtnbal == false) {
            sicall.hidden = true;
            recharge.innerHTML = `<p class="spinner-border text-primary"></p>
        <p class="pl-2">Please wait...</p>`;
            recharge.hidden = false;
            callsusp.hidden = false;
            callpick = setTimeout(() => {
                rechargecard();
            }, 6000);
            setTimeout(() => {
                checkglo = false;
                console.log(checkmtnbal);
            }, 10);
        }
        else if (checkglobal == false && checkmtn == true && checkglo == false && checkmtnbal == false) {
            sicall.hidden = true;
            recharge.innerHTML = `<p class="spinner-border text-primary"></p>
                <p class="pl-2">Please wait...</p>`;
            recharge.hidden = false;
            callsusp.hidden = false;
            callpick = setTimeout(() => {
                recharge.innerHTML = "";
                recharge.innerHTML = `<p>Dear Customer, use a valid code </p><button id="okay" onclick="successful()">OK</button>`;
            }, 6000);
            setTimeout(() => {
                checkmtn = false;
                console.log(checkmtnbal);
            }, 10);
        }
        // 
        setTimeout(() => {
            iwantCall = false;
            console.log(iwantCall);
        }, 10);
    }


    else if (iwantCall == false && (params.target.id == "simname1")) {
        if (((checkmtnbal == false || checkmtnbal == true) && (checkglobal == false || checkglobal == true) && (checkmtn == false || checkmtn == true) && (checkglo == false || checkglo == true) && sentmessage == false)) {
            makingcall.hidden = false;
            sicall.hidden = true;
            mysim = "MTN NG";
            contactno.innerHTML = uscallno;
            console.log(contactno.innerHTML);
            let b = a;
            let special = /[{]{1}[}]{2}/;
            let reg = special.test(contactno.innerHTML);
            console.log(reg);
            if (!reg) {
                let a = contactno.innerHTML.replace('{', "");
                let b = a.replace('}', '');
                contactno.innerHTML = b;
            }
            contactname.innerHTML = uscallname;
            contactline.innerHTML = `calling via ${simcardName}`;
            Dial3update();
            console.log("one");
            beforeCall1();
        }
        // i am calling from contact list with sim 1
        if (Contact1test == true && (params.target.id == "simname1") && sentmessage == false) {
            makingcall.hidden = false;
            sicall.hidden = true;
            contactinfoB.hidden = true;
            mysim = "MTN NG";
            contactno.innerHTML = uscallno;
            contactname.innerHTML = uscallname;
            contactline.innerHTML = `calling via ${simcardName}`;
            console.log("one");
            console.log("here");
        }
        // i am calling from dialled list option with sim 1
        if (dialopt == true && (params.target.id == "simname1") && sentmessage == false) {
            makingcall.hidden = false;
            sicall.hidden = true;
            contactinfoB.hidden = true;
            mysim = "MTN NG";
            contactno.innerHTML = uscallno;
            contactname.innerHTML = uscallname;
            contactline.innerHTML = `calling via ${simcardName}`;
            console.log("one");
        }

        //here
        //i want to send message with sim 1
        if (sentmessage == true && params.target.id == "simname1") {
            beforemessage1();
            sicall.hidden = true;
            setTimeout(() => {
                sentmessage = false;
            }, 1000);
        }
    }
    else if (iwantCall == false && (params.target.id == "simname2")) {
        if (((checkmtnbal == false || checkmtnbal == true) && (checkglobal == false || checkglobal == true) && (checkmtn == false || checkmtn == true) && (checkglo == false || checkglo == true) && sentmessage == false)) {
            makingcall.hidden = false;
            sicall.hidden = true;
            mysim = "GLO NG";
            contactno.innerHTML = uscallno;
            console.log(contactno.innerHTML);
            let b = a;
            let special = /[{]{1}[}]{2}/;
            let reg = special.test(contactno.innerHTML);
            console.log(reg);
            if (!reg) {
                let a = contactno.innerHTML.replace('{', "");
                let b = a.replace('}', '');
                contactno.innerHTML = b;
            }
            contactname.innerHTML = uscallname;
            contactline.innerHTML = `calling via ${simcardName}`;
            console.log("one");
            Dial4update();
            beforeCall2();
        }
        // i am calling from contact list with sim 2
        if (Contact2test == true && (params.target.id == "simname2") && sentmessage == false) {
            makingcall.hidden = false;
            sicall.hidden = true;
            contactinfoB.hidden = true;
            mysim = "GLO NG";
            contactno.innerHTML = uscallno;
            contactname.innerHTML = uscallname;
            contactline.innerHTML = `calling via ${simcardName}`;
            console.log("one");
        }
        // i am calling from dialed option list with sim 2
        if (dialopt == true && (params.target.id == "simname2") && sentmessage == false) {
            makingcall.hidden = false;
            sicall.hidden = true;
            contactinfoB.hidden = true;
            mysim = "GLO NG";
            contactno.innerHTML = uscallno;
            contactname.innerHTML = uscallname;
            contactline.innerHTML = `calling via ${simcardName}`;
            console.log("one");
        }
        //i want to send message with sim 2
        if (sentmessage == true && params.target.id == "simname2") {
            beforemessage2();
            sicall.hidden = true;
            setTimeout(() => {
                sentmessage = false;
            }, 1000);
        }
    }


}
let hangg = false;
//i hang up the call
function hang(params) {
    console.log(itrings);
    if (itrings == false && itpicks == false) {
        iwantCall = false;
        hangg = true;
        faint.hidden = true;
        clearTimeout(callpick);
        clearInterval(stopDed);
        clearInterval(stopDed1);
        clearTimeout(voiceded);
        hangup = setTimeout(() => {
            mycontactlist()
            checkList();
        }, 1000);
    }
    else if (itrings == true && itpicks == false) {
        iwantCall = false;
        hangg = true;
        faint.hidden = true;
        clearTimeout(callpick);
        clearInterval(stopDed);
        clearInterval(stopDed1);
        clearTimeout(voiceded);
        callDur.innerHTML = "";
        myaudio.src = ("empty.mp3");
        myaudio.play();
        sec2 = 0;
        min2 = 0;
        hangup = setTimeout(() => {
            mycontactlist()
            checkList();
            itrings = false;
        }, 1000);
    }
    else if (itrings == true && itpicks == true) {
        //convert to function
        iwantCall = false;
        hangg = true;
        clearTimeout(callpick);
        clearInterval(stopDed);
        clearInterval(stopDed1);
        clearTimeout(voiceded);
        callDur.innerHTML = "";
        myaudio.src = ("empty.mp3");
        myaudio.play();
        sec2 = 0;
        min2 = 0;
        hangup = setTimeout(() => {
            mycontactlist()
            checkList();
            faint.hidden = false;
            recharge.innerHTML = "";
            recharge.hidden = false;
            let callEstimate = (Math.round(Estimatedvalue * 100) / 100).toFixed(2);
            recharge.innerHTML = `<p>Your Call Session was ${callduration} and the Estimated value for the call is #${callEstimate}</p><button id="okay" onclick="successful()">OK</button>`;
            itrings = false;
            itpicks = false;
        }, 1000);
    }
}

//know which list i am calling from, then return to the screen after call
function checkList(params) {
    if (Contact1test == true) {
        makingcall.hidden = true;
        contactlist.hidden = true;
        callsusp.hidden = true;
        contactinfoH.innerHTML = "";
        contactinfo.innerHTML = ""
        contactinfoB.hidden = false;
        // setTimeout(() => {
        //     Contact1test = false;
        // }, 300);
    }
    if (Contact2test == true) {
        makingcall.hidden = true;
        contactlist.hidden = true;
        callsusp.hidden = true;
        contactinfoH.innerHTML = "";
        contactinfo.innerHTML = ""
        contactinfoB.hidden = false;
        setTimeout(() => {
            Contact2test = false;
        }, 300);
    }
    if (dialopt == true) {
        makingcall.hidden = true;
        contactlist.hidden = true;
        callsusp.hidden = true;
        contactinfoB.hidden = true;
        setTimeout(() => {
            dialopt = false;
        }, 300);
    }
    else {
        makingcall.hidden = true;
        contactlist.hidden = false;
        contactinfoB.hidden = true;
        callsusp.hidden = false;
        setTimeout(() => {
            contactli = false;
        }, 300);
    }

}

// line.style.marginLeft="-5px";
// contactdown.innerHTML="";
// callsusp.hidden=false;


//whenever a back button is pressed
function back(params) {
    if (facebok.hidden == false) {
        facebok.hidden = true;
        Menu.hidden = false;
    }
    if (Menu.hidden == false) {
        Sleepmenu.hidden = false;
        Menu.hidden = true;
        home_screen.hidden = false;
    }
    if (messageHome.hidden == false && messagetype.hidden == true) {
        callscreen();
        messageHome.hidden = true;
        keypadword.hidden = true;

    }
    if (keypadword.hidden == true && messagetype.hidden == false) {
        messageButtom.style.marginTop = "-20px";
        messagetype.hidden = true;
        keypadword.hidden = true;
        messageHome.hidden = false;
        messageHo();
    }
    if (messagetype.hidden == false && sicall.hidden == false) {
        messagetype.hidden == false;
        messageButtom.style.marginTop = "-20px";
        sicall.hidden = true
        faint.hidden = true;
    }
    if (home_screen.hidden == false && Menu.hidden == false && Sleepmenu.hidden == true) {
        home_screen.hidden = false;
        Menu.hidden = true;
        Sleepmenu.hidden = false;

    }
    if (keypadword.hidden == false && messagetype.hidden == false) {
        messageHome.hidden = true;
        messagetype.hidden == false;
        keypadword.hidden = true;
        messageButtom.style.marginTop = "-20px";
    }
    if (contactlist.hidden == false && sicall.hidden == true) {
        callscreen();
        callsusp.hidden = false;
    }
    if (contactinfoB.hidden == false && contactlist.hidden == true) {
        contactinfoH.innerHTML = "";
        contactinfo.innerHTML = ""
        contactlist.hidden = false
        contactinfoB.hidden = true;
        callsusp.hidden = false;
        keypadword.hidden = true;
        Editme.style.marginTop = "50px";
    }
    if (contactlist.hidden == true && callinfoB.hidden == false) {
        contactlist.hidden = false
        callinfoB.hidden = true;
        callsusp.hidden = false;
    }
    if (keypad.hidden == false) {
        contactlist.hidden = false;
        list.hidden = false;
        keypad.hidden = true;
        home_screen.hidden = true;
        call1susp.hidden = true;
        callsusp.hidden = false;
    }
    if (offit.hidden == false) {
        offit.hidden = true;
        callscreen();
    }
    // if (makingcall == false && contactlist.hidden == false) {
    //     contactlist.hidden = false;
    //     faint.hidden = true;
    // }
    if (sicall.hidden == false && contactlist.hidden == false) {
        sicall.hidden = true
        callsusp.hidden = true;
        home_screen.hidden = true;
        faint.hidden = true;
        contactlist.hidden = false;
    }
}

an = an;
let mtnbalance = an.balance;
an1 = an1;

//check balance function
function checkmtbal() {
    recharge.innerHTML = "";
    recharge.innerHTML = `<p>Dear Customer, Your Account Balance is #${an.balance}. You have Free 100Mb Data </p><button id="okay" onclick="successful()">OK</button>`;
}
function checkglbal() {
    recharge.innerHTML = "";
    recharge.innerHTML = `<p>Dear Customer, Your Account Balance is #${an1.balance}. You have Free 300Mb Data </p><button id="okay" onclick="successful()">OK</button>`;
}

// My recharge line function
function rechargeMylin() {
    //recharge sim1
    if (checkBalsim == "simname1") {
        an.balance = (Number(an.balance) + Number(updatecard));
        console.log(an.balance);
        console.log(myPhone);
        for (let i = 0; i < myPhone.length; i++) {
            myPhone[i].sims.phonesim1.balance = an.balance;
            sim1Bal = an.balance;
            myPhone[i] = myPhone[i];
            console.log(myPhone[i]);
            localStorage.setItem('Myphone', JSON.stringify(myPhone));
        }
    }
    //recharge sim2
    else {
        console.log('simname2');
        an1.balance = (Number(an1.balance) + Number(updatecard));
        console.log(an1.balance);
        console.log(myPhone);
        for (let i = 0; i < myPhone.length; i++) {
            myPhone[i].sims.phonesim2.balance = an1.balance;
            sim2Bal = an1.balance;
            myPhone[i] = myPhone[i];
            console.log(myPhone[i]);
            localStorage.setItem('Myphone', JSON.stringify(myPhone));
        }
    }
}


//check balance before you call
function beforeCall1() {
    console.log(hangg);
    if ((Number(an.balance)) >= mtntarrif) {
        console.log("yes, i have credit");
        if (useroff == true) {
            callpick = setTimeout(() => {
                myaudio = new Audio();
                myaudio.src = ("mtnoff.mp3");
                myaudio.play();
                useroff = false;
                setTimeout(() => {
                    faint.hidden = true;
                    clearTimeout(callpick);
                    clearInterval(stopDed);
                    clearInterval(stopDed1);
                    clearTimeout(voiceded);
                    mycontactlist()
                    checkList();
                }, 14000);
            }, 7500);
        }
        else if (useroff == false) {
            callpick = setTimeout(() => {
                myaudio = new Audio();
                itrings = true;
                myaudio.src = ("mtnring.mp3");
                myaudio.play();
                myaudio.volume = Number(VolRange[vol]);
                voiceded = setTimeout(() => {
                    callDur.hidden = false;
                    myaudio = new Audio();
                    itpicks = true;
                    myaudio.src = ("call.mp3");
                    myaudio.play();
                    myaudio.volume = Number(VolRange[vol]);
                    deductionmtn();
                }, 7500);
            }, 7000);
        }
    }
    else if ((Number(an.balance)) <= mtntarrif) {
        myaudio = new Audio();
        myaudio.src = ("mtnlow.mp3");
        myaudio.play();
        myaudio.volume = Number(VolRange[vol]);
        callpick = setTimeout(() => {
            console.log("your account is too low for the call, please recharge account and try again, thank you");
            console.log(Contact1test);
            mycontactlist()
            faint.hidden = false;
            recharge.innerHTML = "";
            recharge.hidden = false;
            let callEstimate = (Math.round(Estimatedvalue * 100) / 100).toFixed(2);
            recharge.innerHTML = `<p>Your Call Session was ${callduration} and the Estimated value for the call is #${callEstimate}</p><button id="okay" onclick="successful()">OK</button>`;
            faint.hidden = true;
            callsusp.hidden = false;
            callDur.innerHTML = "";
            checkList();
        }, 9000);
    }

}
function beforeCall2() {
    if ((Number(an1.balance)) >= glotarrif) {
        console.log("yes, i have credit");
        if (useroff == true) {
            callpick = setTimeout(() => {
                myaudio = new Audio();
                myaudio.src = ("glooff.mp3");
                myaudio.play();
                useroff = false;
                setTimeout(() => {
                    faint.hidden = true;
                    clearTimeout(callpick);
                    clearInterval(stopDed);
                    clearInterval(stopDed1);
                    clearTimeout(voiceded);
                    mycontactlist()
                    checkList();
                }, 8500);
            }, 7500);
        }
        else if (useroff == false) {
            callpick = setTimeout(() => {
                itrings = true;
                myaudio = new Audio();
                myaudio.src = ("gloring.mp3");
                myaudio.play();
                myaudio.volume = Number(VolRange[vol]);
                voiceded = setTimeout(() => {
                    callDur.hidden = false;
                    myaudio = new Audio();
                    itpicks = true;
                    myaudio.src = ("call.mp3");
                    myaudio.play();
                    myaudio.volume = Number(VolRange[vol]);
                    deductionglo();
                }, 7500);
            }, 7000);
        }
    }
    else if ((Number(an1.balance)) <= glotarrif) {
        myaudio = new Audio();
        myaudio.src = ("glolow.mp3");
        myaudio.play();
        myaudio.volume = Number(VolRange[vol]);
        callpick = setTimeout(() => {
            console.log("your account is too low for the call, please recharge account and try again, thank you");
            mycontactlist()
            callDur.innerHTML = "";
            checkList();
            callsusp.hidden = false;
            faint.hidden = false;
            recharge.innerHTML = "";
            recharge.hidden = false;
            let callEstimate = (Math.round(Estimatedvalue * 100) / 100).toFixed(2);
            recharge.innerHTML = `<p>Your Call Session was ${callduration} and the Estimated value for the call is #${callEstimate}</p><button id="okay" onclick="successful()">OK</button>`;
        }, 9000);
    }
    else {

    }
}




//Tarrif
console.log("ttttttt");
let nozerobal, nozerobal1;
function deductionmtn() {
    console.log("why naw");
    stopDed = setInterval(changetime, 1000)
    function changetime() {
        if (!sec2) {
            callDur.innerHTML = "";
            sec2 = 0;
        }
        if (sec2 == 59) {
            sec2 = 0;
            min2 = min2 + 1;
        }

        sec2++;
        console.log(min2, sec2);
        for (let i = 0; i < myPhone.length; i++) {
            if (Number(myPhone[i].sims.phonesim1.balance) >= (Number(mtntarrif)) && (Number(an.balance)) >= (Number(mtntarrif))) {
                console.log("ttttttt");
                a = ((Number(myPhone[i].sims.phonesim1.balance)) - mtntarrif);
                a = ((Math.round(a * 100)) / 100).toFixed(2);
                console.log(a);
                Estimatedvalue = Estimatedvalue + mtntarrif;
                console.log(Estimatedvalue);
                callduration = `${min2}:${sec2}`;
                myPhone[i].sims.phonesim1.balance = a;
                myPhone[i] = myPhone[i];
                console.log(myPhone[i]);
                localStorage.setItem('Myphone', JSON.stringify(myPhone));
                console.log(myPhone[i].sims.phonesim1.balance);
                nozerobal = Number(myPhone[i].sims.phonesim1.balance);
                console.log(nozerobal);
                callDur.innerHTML = `${min2}:${sec2}`;
            }
            if (nozerobal <= (Number(mtntarrif))) {
                console.log("ttttttt");
                sec2 = 0;
                min2 = 0;
                clearTimeout(stopDed);
                clearInterval(stopDed);
                console.log("your account is too low, and your call is terminated");
                myaudio = new Audio();
                myaudio.src = ("mtnlow.mp3");
                myaudio.play();
                myaudio.volume = Number(VolRange[vol]);
                callpick = setTimeout(() => {
                    hangup();
                }, 8500);
                return;
            }
        }
    }
}
function deductionglo() {
    stopDed1 = setInterval(changetime, 1000)
    function changetime() {
        if (!sec2) {
            callDur.innerHTML = "";
            sec2 = 0;
        }
        if (sec2 == 59) {
            sec2 = 0;
            min2 = min2 + 1;
        }
        sec2++;
        for (let i = 0; i < myPhone.length; i++) {
            if (Number(myPhone[i].sims.phonesim2.balance) >= (Number(glotarrif)) && (Number(an1.balance)) >= (Number(glotarrif))) {
                console.log("ttttttt");
                a = (Number(myPhone[i].sims.phonesim2.balance)) - glotarrif;
                a = ((Math.round(a * 100)) / 100).toFixed(2);
                console.log(a);
                Estimatedvalue = Estimatedvalue + mtntarrif;
                console.log(Estimatedvalue);
                callduration = `${min2}:${sec2}`;
                myPhone[i].sims.phonesim2.balance = a;
                myPhone[i] = myPhone[i];
                console.log(myPhone[i]);
                localStorage.setItem('Myphone', JSON.stringify(myPhone));
                console.log(myPhone[i].sims.phonesim2.balance);
                nozerobal1 = Number(myPhone[i].sims.phonesim2.balance);
                console.log(nozerobal1);
                callDur.innerHTML = `${min2}:${sec2}`;
            }
            if (nozerobal1 <= (Number(glotarrif))) {
                console.log("ttttttt");
                sec2 = 0;
                min2 = 0;
                clearTimeout(stopDed1);
                clearInterval(stopDed1);
                myaudio = new Audio();
                myaudio.src = ("glolow.mp3");
                myaudio.play();
                myaudio.volume = Number(VolRange[vol]);
                console.log("your account is too low, please recharge your line and continue");
                callpick = setTimeout(() => {
                    hangup();
                }, 6000);
                return;
            }
        }
    }
}



//dialled list options for sim1 miss call
let detailme, detailme2, detailme3;
function ellipsis0(params) {
    detailme = (params.closest('i').children[0].innerHTML);
    detailme2 = (params.closest('i').children[1].innerHTML);
    detailme3 = (params.closest('i').children[2].innerHTML);
    console.log(detailme, detailme2);
    rembrac();
    callinfoB.hidden = false;
    contactlist.hidden = true;
    contactinfoH.innerHTML = "";
    contactinfo.innerHTML = ""
    callinfoH.innerHTML = `<p>Call details</p><div class="d-flex pt-1 pr-3"><i class="fa fa-trash"></i><i class="fa fa-ellipsis-v pl-5" style="padding-top="4px;""></i><div>`;
    callinfo.innerHTML = `<div class="d-flex justify-content-between"><div class="d-flex"><p class="pr-2 img bg-primary">${detailme[0]}</p><div class="pl-1"><p>${detailme}</p><p>${detailme2}</p><p>MTN NG<p></div></div><div class="d-flex"><i class="fa fa-commenting-o"></i><i class="fa fa-phone pl-5 pt-1" onclick='dialled0(this)'><p hidden>${detailme}</p><p hidden>${detailme2}</p></i></div></div><hr>`;
    callinfo.innerHTML += `<div><p>Calls list</p><div><p style="font-weight: bold;">Outgoing call</p><p>${detailme3}<p></div></div>`
}

function dialled0(params) {
    dialopt = true;
    let dialOnename = (params.closest('i').children[0].innerHTML);
    let dialOneno = (params.closest('i').children[1].innerHTML);
    uscallname = dialOnename;
    uscallno = dialOneno;
    sicall.hidden = false;
    faint.hidden = false;
}
function ellipsisglo(params) {
    detailme = (params.closest('i').children[0].innerHTML);
    detailme2 = (params.closest('i').children[1].innerHTML);
    detailme3 = (params.closest('i').children[2].innerHTML);
    console.log(detailme, detailme2);
    rembrac();
    callinfoB.hidden = false;
    contactlist.hidden = true;
    contactinfoH.innerHTML = "";
    contactinfo.innerHTML = ""
    callinfoH.innerHTML = `<p>Call details</p><div class="d-flex pt-1 pr-3"><i class="fa fa-trash"></i><i class="fa fa-ellipsis-v pl-5" style="padding-top="4px;""></i><div>`;
    callinfo.innerHTML = `<div class="d-flex justify-content-between"><div class="d-flex"><p class="pr-2 img bg-primary">${detailme[0]}</p><div class="pl-1"><p>${detailme}</p><p>${detailme2}</p><p>MTN NG<p></div></div><div class="d-flex"><i class="fa fa-commenting-o"></i><i class="fa fa-phone pl-5 pt-1" onclick='dialledglo(this)'><p hidden>${detailme}</p><p hidden>${detailme2}</p></i></div></div><hr>`;
    callinfo.innerHTML += `<div><p>Calls list</p><div><p style="font-weight: bold;">Outgoing call</p><p>${detailme3}<p></div></div>`
}

function dialledglo(params) {
    dialopt = true;
    let dialOnename = (params.closest('i').children[0].innerHTML);
    let dialOneno = (params.closest('i').children[1].innerHTML);
    uscallname = dialOnename;
    uscallno = dialOneno;
    sicall.hidden = false;
    faint.hidden = false;
}

//dialled list options for sim1 miss call
function ellipsis(params) {
    detailme = (params.closest('i').children[0].innerHTML);
    detailme2 = (params.closest('i').children[1].innerHTML);
    detailme3 = (params.closest('i').children[2].innerHTML);
    console.log(detailme, detailme2);
    rembrac();
    callinfoB.hidden = false;
    contactlist.hidden = true;
    contactinfoH.innerHTML = "";
    contactinfo.innerHTML = ""
    callinfoH.innerHTML = `<p>Call details</p><div class="d-flex pt-1 pr-3"><i class="fa fa-trash"></i><i class="fa fa-ellipsis-v pl-5" style="padding-top="4px;""></i><div>`;
    callinfo.innerHTML = `<div class="d-flex justify-content-between"><div class="d-flex"><p class="pr-2 img bg-primary">${detailme[0]}</p><div class="pl-1"><p>${detailme}</p><p>${detailme2}</p><p>MTN NG<p></div></div><div class="d-flex"><i class="fa fa-commenting-o"></i><i class="fa fa-phone pl-5 pt-1" onclick='dialledOne(this)'><p hidden>${detailme}</p><p hidden>${detailme2}</p></i></div></div><hr>`;
    callinfo.innerHTML += `<div><p>Calls list</p><div><p style="font-weight: bold;">Miss call</p><p>${detailme3}<p></div></div>`
}

//call from sim one missed dialled call option
function dialledOne(params) {
    dialopt = true;
    let dialOnename = (params.closest('i').children[0].innerHTML);
    let dialOneno = (params.closest('i').children[1].innerHTML);
    uscallname = dialOnename;
    uscallno = dialOneno;
    sicall.hidden = false;
    faint.hidden = false;
}

//dialled list options for sim1 received call
function ellipsis2(params) {
    detailme = (params.closest('i').children[0].innerHTML);
    detailme2 = (params.closest('i').children[1].innerHTML);
    detailme3 = (params.closest('i').children[2].innerHTML);
    console.log(detailme, detailme2);
    rembrac();
    callinfoB.hidden = false;
    contactlist.hidden = true;
    contactinfoH.innerHTML = "";
    contactinfo.innerHTML = ""
    callinfoH.innerHTML = `<p>Call details</p><div class="d-flex pt-1 pr-3"><i class="fa fa-trash"></i><i class="fa fa-ellipsis-v pl-5" style="padding-top="4px;""></i><div>`;
    callinfo.innerHTML = `<div class="d-flex justify-content-between"><div class="d-flex"><div class="img justify-content-center align-items-center">${detailme[0]}</div><div class="pl-1"><p>${detailme}</p><p>${detailme2}</p><p>MTN NG<p></div></div><div class="d-flex"><i class="fa fa-commenting-o"></i><i class="fa fa-phone pl-5 pt-1" onclick='dialledTwo(this)'><p hidden>${detailme}</p><p hidden>${detailme2}</p></i></div></div><hr>`;
    callinfo.innerHTML += `<div><p>Calls list</p><div><p style="font-weight: bold;">Incoming call</p><p>${detailme3}<p></div></div>`
}

//call from sim one receieved dialled call option
function dialledTwo(params) {
    dialopt = true;
    let dialOnename = (params.closest('i').children[0].innerHTML);
    let dialOneno = (params.closest('i').children[1].innerHTML);
    uscallname = dialOnename;
    uscallno = dialOneno;
    sicall.hidden = false;
    faint.hidden = false;
}

//dialled list options for sim2 missed call
function ellipsis3(params) {
    detailme = (params.closest('i').children[0].innerHTML);
    detailme2 = (params.closest('i').children[1].innerHTML);
    detailme3 = (params.closest('i').children[2].innerHTML);
    console.log(detailme, detailme2);
    rembrac();
    callinfoB.hidden = false;
    contactlist.hidden = true;
    contactinfoH.innerHTML = "";
    contactinfo.innerHTML = ""
    callinfoH.innerHTML = `<p>Call details</p><div class="d-flex pt-1 pr-3"><i class="fa fa-trash"></i><i class="fa fa-ellipsis-v pl-5" style="padding-top="4px;""></i><div>`;
    callinfo.innerHTML = `<div class="d-flex justify-content-between"><div class="d-flex"><p class="pr-2 img bg-primary">${detailme[0]}</p><div class="pl-1"><p>${detailme}</p><p>${detailme2}</p><p>GLO NG<p></div></div><div class="d-flex"><i class="fa fa-commenting-o"></i><i class="fa fa-phone pl-5 pt-1" onclick='dialledThree(this)'><p hidden>${detailme}</p><p hidden>${detailme2}</p></i>></div></div><hr>`;
    callinfo.innerHTML += `<div><p>Calls list</p><div><p style="font-weight: bold;">Miss call</p><p>${detailme3}<p></div></div>`
}

//call from sim two missed dialled call option
function dialledThree(params) {
    dialopt = true;
    let dialOnename = (params.closest('i').children[0].innerHTML);
    let dialOneno = (params.closest('i').children[1].innerHTML);
    uscallname = dialOnename;
    uscallno = dialOneno;
    sicall.hidden = false;
    faint.hidden = false;
}


//dialled list options for sim2 received call
function ellipsis4(params) {
    detailme = (params.closest('i').children[0].innerHTML);
    detailme2 = (params.closest('i').children[1].innerHTML);
    detailme3 = (params.closest('i').children[2].innerHTML);
    console.log(detailme, detailme2);
    rembrac();
    callinfoB.hidden = false;
    contactlist.hidden = true;
    contactinfoH.innerHTML = "";
    contactinfo.innerHTML = ""
    callinfoH.innerHTML = `<p>Call details</p><div class="d-flex pt-1 pr-3"><i class="fa fa-trash"></i><i class="fa fa-ellipsis-v pl-5" style="padding-top="4px;""></i><div>`;
    callinfo.innerHTML = `<div class="d-flex justify-content-between"><div class="d-flex"><p class="pr-2 img bg-primary">${detailme[0]}</p><div class="pl-1"><p>${detailme}</p><p>${detailme2}</p><p>GLO NG<p></div></div><div class="d-flex"><i class="fa fa-commenting-o"></i><i class="fa fa-phone pl-5 pt-1" onclick='dialledFour(this)'><p hidden>${detailme}</p><p hidden>${detailme2}</p></i>></div></div><hr>`;
    callinfo.innerHTML += `<div><p>Calls list</p><div><p style="font-weight: bold;">Incoming call</p><p>${detailme3}<p></div></div>`
}

//call from sim two recieved dialled call option
function dialledFour(params) {
    dialopt = true;
    let dialOnename = (params.closest('i').children[0].innerHTML);
    let dialOneno = (params.closest('i').children[1].innerHTML);
    uscallname = dialOnename;
    uscallno = dialOneno;
    sicall.hidden = false;
    faint.hidden = false;
}

//remove bracelet from number
function rembrac(params) {
    let spe = /[{]{1}[}]{2}/;
    let regg = spe.test(detailme2);
    console.log(regg);
    if (!regg) {
        let a = detailme2.replace('{', "");
        let b = a.replace('}', '');
        detailme2 = b;
    }
}


//i declared my phone volume in array
let volred = "22px", vol;
VolArray = ["305px", "283px", "261px", "239px", "217px", "195px", "173px", "151px", "129px", "107px", "85px", "63px", "41px", "19px", "-3px"];

VolRange = ["1", "1", "0.9", "0.8", "0.8", "0.7", "0.7", "0.6", "0.6", "0.5", "0.5", "0.4", "0.3", "0.2", "0.1"];

// i want to get volume from Json
for (let i = 0; i < myPhone.length; i++) {
    vol = Number(myPhone[i].volume);
    phoneVolume = Number(myPhone[i].phoneVolume);
    console.log(vol, "volume range");
    console.log(phoneVolume, "phone volume");
}

//return volume percentage to Json
function retVolum(params) {
    for (let i = 0; i < myPhone.length; i++) {
        myPhone[i].volume = Number(vol);
        myPhone[i].volume = myPhone[i].volume;
        myPhone[i].phoneVolume = Number(phoneVolume);
        myPhone[i].phoneVolume = myPhone[i].phoneVolume;
        localStorage.setItem('Myphone', JSON.stringify(myPhone));
    }
}

console.log(VolRange[phoneVolume], "phone volume");
console.log(VolArray[vol], "phone volume Range");

//phone volume;
volumeup.addEventListener('click', volumeUD)
volumedown.addEventListener('click', volumeUD)
function volumeUD(params) {
    phoneVol.hidden = false;
    list.hidden = true;
    if (params.target.id == "volumeup") {
        console.log(phoneVolume);
        if (vol <= 0) {
            vol = 0;
            phoneVolume = 0;
            myaudio.volume = Number(VolRange[phoneVolume]);
            volumemove.style.marginLeft = VolArray[vol];
            retVolum();
            setTimeout(() => {
                phoneVol.hidden = true;
                list.hidden = false;
            }, 3000);
        }
        else if (vol >= 0) {
            vol--;
            phoneVolume--;
            vol = vol;
            phoneVolume = phoneVolume;
            myaudio.volume = Number(VolRange[phoneVolume]);
            volumemove.style.marginLeft = VolArray[vol];
            retVolum();
            setTimeout(() => {
                phoneVol.hidden = true;
                list.hidden = false;
            }, 3000);
        }
    }
    else if (params.target.id == "volumedown") {
        vol = vol
        if (vol >= 14) {
            vol = 14;
            phoneVolume = 14;
            myaudio.volume = Number(VolRange[phoneVolume]);
            volumemove.style.marginLeft = VolArray[vol];
            retVolum();
            setTimeout(() => {
                phoneVol.hidden = true;
                list.hidden = false;
            }, 3000);

        } else if (vol <= 14) {
            vol++;
            phoneVolume++
            vol = vol
            phoneVolume = phoneVolume;
            myaudio.volume = Number(VolRange[phoneVolume]);
            volumemove.style.marginLeft = VolArray[vol];
            retVolum();
            setTimeout(() => {
                phoneVol.hidden = true;
                list.hidden = false;
            }, 3000);
        }
    }
}





let numb1, messtime, mymess, mymess2, messcont, messsim, numb2, messtime1, mymess1, messcont1, messsim1, index, mesName, kay;
//get my message from Json and display them in Message Home Screen
function messageHo(params) {
    messageHome.hidden = false;
    messageinfo.innerHTML = "";
    home_screen.hidden = true;
    screen_saver.hidden = true;
    list.hidden = false;
    finger.hidden = true;
    messageButtom.style.marginTop = "-20px";
    messagetype.hidden = true;
    faint.hidden = true;
    offit.hidden = true;
    keypadword.hidden = true;
    menubts.hidden = false;
    contactlist.hidden = true;
    makingcall.hidden = true;
    keypad.hidden = true;
    sicall.hidden = true;
    call1susp.hidden = true;
    let kk, men;
    //sim one
    myPhone.forEach(function (max, k) {
        kk = (max.sims.phonesim1.messages);
        console.log(kk);
        kk.forEach(function (mup, i) {
            bn = (mup.contactsname);
            index = i;
            console.log(index);
            numb1 = (mup.contactsno);
            mymess = (mup.message);
            for (i = 0; i < mymess.length; i++) {
                messcont = mymess[i].content;
                messtime = mymess[i].time
            }
            messageinfo.innerHTML += `<div class="together" id="eachContact" onclick="messagePage(this)"><div class="d-flex mb-3"><div class="userA"><i class="fa fa-user-o"></i></div><div><p class="ml-2 mt-1">${bn}</p><div class="ml-2">${messcont}</div></div></div><p class="mt-1">${messtime}</p><p hidden>${numb1}</p></div><hr>`
            console.log(bn, numb1, messcont, messtime);
        })
    })

    //sim two;
    myPhone.forEach(function (max, k) {
        kk = (max.sims.phonesim2.messages);
        kk.forEach(function (mup, i) {
            bn1 = (mup.contactsname);
            index = i;
            numb2 = (mup.contactsno);
            mymess2 = (mup.message);
            for (i = 0; i < mymess2.length; i++) {
                messcont1 = mymess2[i].content;
                messtime1 = mymess2[i].time
            }
            messageinfo.innerHTML += `<div class="together" id="eachContact" onclick="messagePage1(this)"><div class="d-flex mb-3"><div class="userA"><i class="fa fa-user-o"></i></div><div><p class="ml-2 mt-1">${bn1}</p><div class="ml-2">${messcont1}</div></div></div><p class="mt-1">${messtime1}</p><p hidden>${numb2}</p></div><hr>`
        })
    })

}



let messindex;

//i want to get the day i do each thing
if (newday == dayarray[day]) {
    todaysday = "Today";
}

//log day
console.log(todaysday);



// go to each person's message or send new message
function messagePage(params) {
    mMyplaceholder.value = "";
    newmessage.hidden = true;
    Isentit.innerHTML = "";
    typenumHolder.hidden = true;
    typenumber.hidden = true;
    mesName = (params.closest('div').children[0].children[1].children[0].innerHTML);
    messageName.innerHTML = mesName;
    removeUser.hidden = false;
    removeUser1.hidden = false;
    messageHome.hidden = true;
    messagetype.hidden = false;
    // minimizeapp.push("false")
    list.hidden = false;
    menubts.hidden = false;
    myPhone.forEach(function (mum) {
        kay = mum.sims.phonesim1.messages;
        console.log(kay.length);
        for (i = 0; i < kay.length; i++) {
            if (kay[i].contactsname == mesName) {
                messindex = i;
                console.log(messindex);
                kay[i].message.forEach(function (mit) {
                    messcont = mit.content;
                    messtime = mit.time;
                    messday = mit.day;
                    messinfo = mit.info;
                    messsim = mit.sim;
                    eachUsermess = (messcont);
                    Isentit.innerHTML += `<hr><p id="Isentday" class="text-primary">${dayarray[messday]}</><div id="themessage" class="card-body d-block"><div>${eachUsermess}</div><div id="Isenttime">${messtime}</div><p class="sent">${messinfo}</p><p>${messsim}</p></div>`;
                })
                return;
            }
            else if (i == kay.length - 1 && kay[i].contactsname != mesName) {
                console.log("hmmm");
            }
        }
    })
}

function messagePage1(params) {
    mMyplaceholder.value = "";
    newmessage.hidden = true;
    Isentit.innerHTML = "";
    typenumHolder.hidden = true;
    typenumber.hidden = true;
    mesName = (params.closest('div').children[0].children[1].children[0].innerHTML);
    messageName.innerHTML = mesName;
    removeUser.hidden = false;
    removeUser1.hidden = false;
    messageHome.hidden = true;
    messagetype.hidden = false;
    list.hidden = false;
    menubts.hidden = false;
    myPhone.forEach(function (mum) {
        kay = mum.sims.phonesim2.messages;
        console.log(kay.length);
        for (i = 0; i < kay.length; i++) {
            messindex = i;
            console.log(messindex);
            if (kay[i].contactsname == mesName) {
                console.log(kay[i].contactsname);
                console.log(kay[i].message);
                kay[i].message.forEach(function (mit) {
                    messcont1 = mit.content;
                    messtime1 = mit.time;
                    messday1 = mit.day;
                    messinfo1 = mit.info;
                    messsim1 = mit.sim;
                    eachUsermess = (messcont1);
                    Isentit.innerHTML += `<hr><p id="Isentday" class="text-primary">${dayarray[messday1]}</><div id="themessage" class="card-body d-block"><div>${eachUsermess}</div><div id="Isenttime">${messtime1}</div><p class="sent">${messinfo1}</p><p>${messsim1}</p></div>`;
                })
                return;
            }
            else if (i == kay.length - 1 && kay[i].contactsname != mesName) {
                console.log("hmmm");
            }
        }
    })
}


//new message number
function messagenew(params) {
    sendnewMessage = true;
    messagebox = false;
    console.log(sendnewMessage, messagebox);
    keypadword.hidden = false;
    messageButtom.style.marginTop = "-235px";
}


// go to each person's message or send new message
function NewmessagePage(params) {
    newmessage.hidden = false;
    Isentit.innerHTML = "";
    typenumHolder.hidden = false;
    typenumber.hidden = false;
    messageName.innerHTML = "New message";
    removeUser.hidden = true;
    messageButtom.style.marginTop = "-20px";
    messagetype.hidden = true;
    removeUser1.hidden = true;
    messageHome.hidden = true;
    messagetype.hidden = false;
    list.hidden = false;
    menubts.hidden = false;
}






//get my text area content;
messageMy.addEventListener('input', getMessageCont)
messageMy.addEventListener('click', Displaykey)
function getMessageCont(params) {
    mMyplaceholder.hidden = true;
    messageMy.value = params.target;
    if (messageMy.value == "") {
        mMyplaceholder.hidden = false;
    }
}

//display message keyboard
function Displaykey(params) {
    messagebox = true;
    sendnewMessage = false;
    console.log(sendnewMessage, messagebox);
    keypadword.hidden = false;
    messageButtom.style.marginTop = "-235px";
}

//get word from keypad
calldial.forEach(function (max) {
    max.addEventListener('click', presskey)
})

function presskey(params) {
    if (iwantunlock == true) {
        passcode.style.color = "black";
        passcode.value += params.target.innerHTML;
        console.log(passcode.value);
    }
    if (editone == true) {
        editname.value += params.target.innerHTML;

    }
    else if (edittwo == true) {
        editnumber.value += params.target.innerHTML;

    }
    if (messagetype.hidden == true) {
        messageMy.value = "";
        mMyplaceholder.hidden = false;
    }
    // the number you want to send message to get character from the keyboard
    else if (messagetype.hidden == false && sendnewMessage == true && messagebox == false) {
        newmessage.value += params.target.innerHTML;
        //call for function that will check if number entered is my message contact
    }
    //the textbox takes the character coming from the keyboard
    else if (messagetype.hidden == false && sendnewMessage == false && messagebox == true) {
        mMyplaceholder.hidden = true;
        messageMy.value += params.target.innerHTML;
    }
}

//delete part of the message
function deleteWord(params) {
    if (messageMy.value == "") {
        mMyplaceholder.hidden = false;
    }

    //delete from enter password to unlock phone
    if (iwantunlock = true) {
        let a = passcode.value.slice(0, passcode.value.length - 1);
        passcode.value = a;
    }

    //delete when when i want to create new contact
    if (editone == true) {
        let a = editname.value.slice(0, editname.value.length - 1);
        editname.value = a;

    }
    else if (edittwo == true) {
        let a = editnumber.value.slice(0, editnumber.value.length - 1);
        editnumber.value = a;
    }
    //delete from the number you want send message to
    if (messagetype.hidden == false && sendnewMessage == true && messagebox == false) {
        let a = newmessage.value.slice(0, newmessage.value.length - 1);
        newmessage.value = a;
    }
    //delete from the message you type
    else if (messagetype.hidden == false && sendnewMessage == false && messagebox == true) {
        let a = messageMy.value.slice(0, messageMy.value.length - 1);
        messageMy.value = a;
    }
}

// when i click space.
function space(params) {
    messageMy.value += " ";
    if (iwantunlock = true) {
        passcode.value += " ";
    }
    if (editone == true) {
        editname.value += " ";

    }
    else if (edittwo == true) {
        editnumber.value = " ";
    }
    if (messagetype.hidden == false && sendnewMessage == true && messagebox == false) {
        newmessage.value += " ";
    }

    else if (messagetype.hidden == false && sendnewMessage == false && messagebox == true) {
        messageMy.value += " ";
    }
}

//change character case
let capcount = 0;
function caplock(params) {
    capcount++
    if (capcount == 1) {
        calldial.forEach(function (max) {
            let a = max.innerHTML.toLowerCase();
            max.innerHTML = a;
        })
    }
    else if (capcount >= 2) {
        calldial.forEach(function (max) {
            let a = max.innerHTML.toUpperCase();
            max.innerHTML = a;
            setTimeout(() => {
                capcount = 0;
            }, 10);
        })
    }
    // let a=document.getElementById('caplock').innerHTML.toLowerCase();
    // document.getElementById('caplock').innerHTML=a;
}

//get the message to the message screen;
sendMessage.addEventListener('click', Sentmess)
function Sentmess(params) {
    sentmessage = true;
    faint.hidden = false;
    sicall.hidden = false;
}

//check whether the number i want to send message to is in Jason
function messagecontact() {
    simoneCheckcont();
    simtwoCheckcont();
}

//check in contacts
function simoneCheckcont() {
    myPhone.forEach(function (mum) {
        kay = mum.sims.phonesim1.contacts;
        for (i = 0; i < kay.length; i++) {
            console.log(kay[i].contactsno, newmessage.value, kay[i].contactsname);
            if (kay[i].contactsno == newmessage.value) {
                console.log("hulala");
                newmessage.value = kay[i].contactsname;
                return;
            }
            else if (i == kay.length - 1 && kay[i].contactsno != newmessage.value) {
                console.log("hmmm");
            }
        }
    })
}
function simtwoCheckcont() {
    myPhone.forEach(function (mum) {
        kay = mum.sims.phonesim2.contacts;
        for (i = 0; i < kay.length; i++) {
            console.log(kay[i].contactsno, newmessage.value);
            if (kay[i].contactsno == newmessage.value) {
                console.log("hulala");
                newmessage.value = kay[i].contactsname;
                return;
            }
            else if (i == kay.length - 1 && kay[i].contactsno != newmessage.value) {
                console.log("hmmm");
            }
        }
    })
}

//check in the messages


//send message with sim one function
function beforemessage1() {
    console.log(hangg);
    let lemesend
    if ((Number(an.balance)) >= mtnMesstarrif) {
        console.log("yes, i have credit");
        keypadword.hidden = true;
        messageButtom.style.marginTop = "-20px";
        Isentit.innerHTML += `<hr><p id="Isentday" class="text-primary">${todaysday}</><div id="themessage" class="card-body d-block"><div>${messageMy.value}</div><div id="Isenttime">${hour}:${minutes}${timwzon}</div><p class="sent">Sent</p><p>MTN NG</p></div>`;
        faint.hidden = false;
        recharge.hidden = false;
        recharge.innerHTML = "";
        recharge.innerHTML = `<p>Your message was sent successfully and it costs #${mtnMesstarrif}</p><button id="okay" onclick="successful(${i})">OK</button>`;
        mMyplaceholder.hidden = false;
        deductmtnMess();
        if (newmessage.hidden == true) {
            myPhone.forEach(function (max) {
                max.sims.phonesim1.messages[messindex].message.push({ content: messageMy.value, time: `${hour}:${minutes}${timwzon}`, day: day, info: "Sent", sim: "MTN NG" });
                localStorage.setItem('Myphone', JSON.stringify(myPhone));
            })
        }
        else if (newmessage.hidden == false) {
            myPhone[0].sims.phonesim1.messages.push({ contactsname: newmessage.value, contactsno: newmessage.value, message: [{ content: messageMy.value, time: `${hour}:${minutes}${timwzon}`, day: day, info: "Sent", sim: 'MTN NG' }] });
            localStorage.setItem('Myphone', JSON.stringify(myPhone));
        }
        newmessage.value = ""
        messageMy.value = "";

    }
    else if ((Number(an.balance)) <= mtnMesstarrif) {
        console.log("message not sent");
        keypadword.hidden = true;
        messageButtom.style.marginTop = "-20px";
        Isentit.innerHTML += `<hr><p id="Isentday" class="text-primary">${todaysday}</><div id="themessage" class="card-body d-block"><div>${messageMy.value}</div><div id="Isenttime">${hour}:${minutes}${timwzon}</div><p class="notsent">Not sent</p><p>MTN NG</p></div>`;
        mMyplaceholder.hidden = false;
        if (newmessage.hidden == true) {
            myPhone.forEach(function (max) {
                max.sims.phonesim1.messages[messindex].message.push({ content: messageMy.value, time: `${hour}:${minutes}${timwzon}`, day: day, info: "Not sent", sim: "MTN NG" });
                localStorage.setItem('Myphone', JSON.stringify(myPhone));
            })
        }
        else if (newmessage.hidden == false) {
            myPhone.forEach(function (max) {
                let json = max.sims.phonesim1.messages;
                json.push({ contactsname: newmessage.value, contactsno: newmessage.value, message: [{ content: messageMy.value, time: `${hour}:${minutes}${timwzon}`, day: day, info: "Not sent", sim: 'MTN NG' }] });
                localStorage.setItem('Myphone', JSON.stringify(myPhone));
            })
        }
        newmessage.value = ""
        messageMy.value = "";
    }

}


//deduct charge for message with sim one function
function deductmtnMess(params) {
    for (let i = 0; i < myPhone.length; i++) {
        if (Number(myPhone[i].sims.phonesim1.balance) >= (Number(mtnMesstarrif)) && (Number(an.balance)) >= (Number(mtnMesstarrif))) {
            console.log("ttttttt");
            a = ((Number(myPhone[i].sims.phonesim1.balance)) - mtnMesstarrif);
            console.log(a);
            myPhone[i].sims.phonesim1.balance = a;
            myPhone[i] = myPhone[i];
            console.log(myPhone[i]);
            localStorage.setItem('Myphone', JSON.stringify(myPhone));
            console.log(myPhone[i].sims.phonesim1.balance);
        }
    }
}

let sim2balance
for (i = 0; i < myPhone.length; i++) {
    sim2balance = myPhone[i].sims.phonesim2.balance;
}
//send message with sim two function
function beforemessage2() {
    console.log("crrrrrr");
    if ((Number(sim2balance)) >= gloMesstarrif) {
        console.log("yes, i have credit");
        keypadword.hidden = true;
        messageButtom.style.marginTop = "-20px";
        Isentit.innerHTML += `<hr><p id="Isentday" class="text-primary">${todaysday}</><div id="themessage" class="card-body d-block"><div>${messageMy.value}</div><div id="Isenttime">${hour}:${minutes}${timwzon}</div><p class="sent">Sent</p><p>GLO NG</p></div>`;
        faint.hidden = false;
        recharge.hidden = false;
        recharge.innerHTML = "";
        recharge.innerHTML = `<p>You message was sent successfully and it costs #${gloMesstarrif}</p><button id="okay" onclick="successful(${i})">OK</button>`;
        mMyplaceholder.hidden = false;
        deductgloMess();
        if (newmessage.hidden == true) {
            myPhone.forEach(function (max) {
                max.sims.phonesim2.messages[messindex].message.push({ content: messageMy.value, time: `${hour}:${minutes}${timwzon}`, day: day, info: "Sent", sim: "GLO NG" });
                localStorage.setItem('Myphone', JSON.stringify(myPhone));
            })
        }
        else if (newmessage.hidden == false) {
            myPhone[0].sims.phonesim2.messages.push({ contactsname: newmessage.value, contactsno: newmessage.value, message: [{ content: messageMy.value, time: `${hour}:${minutes}${timwzon}`, day: day, info: "Sent", sim: 'GLO NG' }] });
            localStorage.setItem('Myphone', JSON.stringify(myPhone));
        }
        newmessage.value = ""
        messageMy.value = "";
        return;
    }
    else if ((Number(sim2balance)) <= gloMesstarrif) {
        console.log("message not sent");
        keypadword.hidden = true;
        messageButtom.style.marginTop = "-20px";
        Isentit.innerHTML += `<hr><p id="Isentday" class="text-primary">${todaysday}</><div id="themessage" class="card-body d-block"><div>${messageMy.value}</div><div id="Isenttime">${hour}:${minutes}${timwzon}</div><p class="notsent">Not sent</p><p>GLO NG</p></div>`;
        mMyplaceholder.hidden = false;
        if (newmessage.hidden == true) {
            myPhone.forEach(function (max) {
                max.sims.phonesim2.messages[messindex].message.push({ content: messageMy.value, time: `${hour}:${minutes}${timwzon}`, day: day, info: "Not sent", sim: "GLO NG" });
                localStorage.setItem('Myphone', JSON.stringify(myPhone));
            })
        }
        else if (newmessage.hidden == false) {
            myPhone[0].sims.phonesim2.messages.push({ contactsname: newmessage.value, contactsno: newmessage.value, message: [{ content: messageMy.value, time: `${hour}:${minutes}${timwzon}`, day: day, info: "Not sent", sim: 'GLO NG' }] });
            localStorage.setItem('Myphone', JSON.stringify(myPhone));
        }
        newmessage.value = ""
        messageMy.value = "";
    }
    else {
        console.log("fhffffhf");
    }

}

let messagenum, messagename, messagenumber;
let recheckbal, recheckbal2;
for (i = 0; i < myPhone.length; i++) {
    recheckbal = myPhone[i].sims.phonesim1.balance;

}
//function that will deduct sim 2 balance after i sent a message
function deductgloMess(params) {
    for (let i = 0; i < myPhone.length; i++) {
        if (Number(myPhone[i].sims.phonesim2.balance) >= (Number(gloMesstarrif)) && (Number(sim2balance)) >= (Number(gloMesstarrif))) {
            console.log("ttttttt");
            a = ((Number(myPhone[i].sims.phonesim2.balance)) - gloMesstarrif);
            console.log(a);
            myPhone[i].sims.phonesim2.balance = a;
            myPhone[i] = myPhone[i];
            console.log(myPhone[i]);
            localStorage.setItem('Myphone', JSON.stringify(myPhone));
            console.log(myPhone[i].sims.phonesim2.balance);
        }
    }
}

//menu icons
function menu(params) {
    home_screen.hidden = false;
    Menu.hidden = false;
    Sleepmenu.hidden = true;
    menubts.hidden = false;
    offit.hidden = true;
    screen_saver.hidden = true;
    list.hidden = false;
    makingcall.hidden = true;
    sicall.hidden = true;
    finger.hidden = true;
    contactlist.hidden = true;
    minimizeapp.push({ menu: false })
    callinfoB.hidden = true;
    contactinfoB.hidden = true;
    faint.hidden = true;
    start.hidden = true;
}

//unlock phone and pop up keypad
function unlock() {
    passcode.style.color = "black";
    iwantunlock = true;
    password.hidden = false;
    ssText.hidden = true;
    password.style.marginTop = "180px"
    keypadword.hidden = false;
}


function UnlockPhone() {
    passcode.style.color = "black";
    console.log();
    if (passcode.value == myPhone[0].users.userpsd) {
        console.log("okkkk");
        keypadword.hidden = true;
        password.hidden = true;
        callscreen();
        setTimeout(() => {
            passcode.value = "";
        }, 10);

    }
    else {
        passcode.value = "Incorrect password"
        passcode.style.color = "red";

        setTimeout(() => {
            passcode.style.color = "black";
        }, 2000);
    }
}

//minimize function;
// function minimize() {
//     messageHome.hidden=true;
//     Menu.hidden=true;
//     messageHome.hidden=true;
//     messageHome.hidden = minimizeapp[0].message;
//     messageHome.className = 'warning'
//     console.log(messageHome.className);
//     let cv = messageHome.classList;
//     messageHome.classList.replace('warning', 'miniapp')
//     Menu.hidden = minimizeapp[0].menu;
//     Menu.className = 'warn'
//     console.log(Menu.className);
//    Menu.classList.remove('warn')
//    Menu.classList.add('miniap')
//     contactlist.hidden = minimizeapp[0].contact;
//     contactlist.className = 'con'
//     console.log(contactlist.className);
//    contactlist.classList.remove('con')
//    contactlist.classList.add('mini')
//    callsusp.hidden=true;
//    faint.hidden=false;
//     home_screen.hidden = false;
// }


//your number is switch off
function itisoff() {
    useroff = true;

}

//facecebook
function facebook() {a
    Menu.hidden = true;
    home_screen.hidden = true;
    Sleepmenu.hidden = true;
    menubts.hidden = false;
    list.hidden = false;
    facebok.hidden = false;
}







