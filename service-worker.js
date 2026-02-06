self.addEventListener("install",e=>self.skipWaiting());
self.addEventListener("fetch",()=>{});
let testTask={
title:"Test task",
escalation:0,
avoids:0
};

function toggleOptions(){
let panel=document.getElementById("optionsPanel");
panel.style.display=
panel.style.display==="none"?"block":"none";
}

document.addEventListener("change",e=>{
if(e.target.id==="testToggle"){
document.getElementById("testControls").style.display=
e.target.checked?"block":"none";
}
});

function devTrigger(){
triggerLock(testTask);
}

function devEscalate(){
testTask.escalation++;
triggerLock(testTask);
}

function devReset(){
testTask.escalation=0;
alert("Test escalation reset.");
}

document.getElementById("gearButton")
.addEventListener("click",toggleOptions);

