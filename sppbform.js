const nomor = document.getElementById("ctl00_BogeContent_tnp").value;
const splitNomor = nomor.split("/");
let currentNo = splitNomor[1];
console.log(currentNo);
const newNo = currentNo.slice(0, 2) + "P" + currentNo.slice(2);
const newArrNo = [splitNomor[0], newNo, splitNomor[2], splitNomor[3]];
const newNomor = newArrNo.join("/");
console.log(newNomor);

const tgl = document.getElementById("ctl00_BogeContent_tgl_spk_dateInput").value;
const notes = document.getElementById("ctl00_BogeContent_tnotes").value;

const splitNotes = notes.split(" ");
let currentNotes = splitNotes[0];
const newNotes = currentNotes.slice(0,2) + "P" + currentNotes.slice(2);
const newArrNotes = newNotes + " " + splitNotes.slice(1).join(" ");

const targetNomor = document.getElementById("ctl00_BogeContent_tno_sppb");
const targetTgl = document.getElementById("ctl00_BogeContent_tgl_sppb_dateInput");
const targetnotes = document.getElementById("ctl00_BogeContent_tket_sppb");

targetNomor.value = newNomor;
targetTgl.value = tgl;
targetnotes.value = newArrNotes;
