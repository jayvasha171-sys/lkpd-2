const IDS=["nama","kelas","tanggal","c1_output","c1_tipe","c1_mengapa","d1_pred","d1_kes","d2_pred","d2_kes","d_temuan","e_kode","f_kode","harga","jumlah","tugas","uts","uas","g_algo","h1","h2","h3"];
const KEY="lkpd_js_v3_menarik";

function loadData(){
  const s=JSON.parse(localStorage.getItem(KEY)||"{}");
  IDS.forEach(id=>{const el=document.getElementById(id);if(el&&s[id]!==undefined)el.value=s[id]});
  runDemo(); updateProgress();
}
function saveData(){
  const d={}; IDS.forEach(id=>{const el=document.getElementById(id); if(el) d[id]=el.value});
  localStorage.setItem(KEY,JSON.stringify(d));
  document.getElementById("statusSimpan").textContent="✅ Tersimpan permanen! Aman walau refresh.";
  setTimeout(()=>document.getElementById("statusSimpan").textContent="",2500);
  updateProgress();
}
function runDemo(){
  document.getElementById("live1").textContent=`"${"10"}" + "${"20"}" = ${"10"+"20"}`;
  document.getElementById("live2a").textContent=typeof "Asep";
  document.getElementById("live2b").textContent=typeof 16;
  try{ const a="10",b="20"; document.getElementById("live3").textContent=eval(document.getElementById("e_kode").value);}catch{}
  hitungKasir(); hitungNilai();
}
function hitungKasir(){
  let h=Number(document.getElementById("harga").value), j=Number(document.getElementById("jumlah").value);
  let tot; try{tot=eval(document.getElementById("f_kode").value);}catch{tot=h*j}
  document.getElementById("f_program").textContent="Rp "+tot.toLocaleString("id-ID"); saveData();
}
function hitungNilai(){
  let t=Number(document.getElementById("tugas").value), uts=Number(document.getElementById("uts").value), uas=Number(document.getElementById("uas").value);
  let r=(t+uts+uas)/3; document.getElementById("hasilNilai").textContent="Rata-rata = "+r.toFixed(2); saveData();
}
function updateProgress(){
  let filled=IDS.filter(id=>{const el=document.getElementById(id); return el&&el.value}).length;
  let pct=Math.round(filled/IDS.length*100);
  document.getElementById("progress").style.width=pct+"%";
  document.getElementById("progressText").textContent=pct+"% Selesai - "+filled+"/"+IDS.length+" terisi";
}
function hapusData(){ if(confirm("Hapus permanen?")){localStorage.removeItem(KEY); location.reload();}}
document.addEventListener("input",e=>{if(IDS.includes(e.target.id))saveData()});
document.getElementById("btnSimpan").addEventListener("click",saveData);
loadData();