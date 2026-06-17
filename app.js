// ═══════════════════════════════════════════
//  APP LOGIC — ElectroMELEC Polynésie française
// ═══════════════════════════════════════════

// ═══ COURS ═══
function renderCours(f) {
  var g = document.getElementById('cours-grid');
  g.innerHTML = cours.filter(function(c){return f==='all'||c.lk===f;}).map(function(c,idx){
    var realIdx = cours.indexOf(c);
    return '<div class="cours-card"><div class="cours-head"><span class="ctag '+c.tc+'">'+c.tag+'</span><div class="cours-title">'+c.title+'</div><div class="cours-desc">'+c.desc+'</div><div class="cours-pf">🌴 '+c.pf+'</div></div><div class="cours-foot"><span class="cours-lvl">📍 '+c.level+'</span><button class="cours-btn" onclick="openCoursFiche('+realIdx+')">Voir →</button></div></div>';
  }).join('');
}
renderCours('all');

function filterLevel(f, btn) {
  document.querySelectorAll('.level-tab').forEach(function(t){t.classList.remove('on');});
  btn.classList.add('on');
  renderCours(f);
}

function openCoursFiche(i) {
  document.getElementById('modal-content').innerHTML = cours[i].content;
  document.getElementById('modal').classList.add('on');
}

// ═══ QCM ═══
var qState = {theme:'',qs:[],cur:0,score:0,answered:false};
var themesMeta = {
  elec:{ico:'⚡',nm:'Électricité générale PF'},
  hab:{ico:'🛡️',nm:'Habilitation électrique'},
  auto:{ico:'⚙️',nm:'Automatisme'},
  domo:{ico:'🏠',nm:'Domotique'},
  solaire:{ico:'☀️',nm:'Solaire PF'},
};

function getEleveId() {
  return document.getElementById('eleve-id').value.trim();
}

function renderThemes() {
  var hasId = getEleveId().length > 0;
  var html = '';
  Object.keys(themesMeta).forEach(function(k){
    var m = themesMeta[k];
    var n = qdata[k].length;
    html += '<div class="theme-card'+(hasId?'':' disabled')+'" onclick="'+(hasId?'startQCM(\''+k+'\')':'alertId()')+'"><div class="theme-ico">'+m.ico+'</div><div class="theme-nm">'+m.nm+'</div><div class="theme-cnt">'+n+' questions</div></div>';
  });
  document.getElementById('qcm-themes').innerHTML = html;
}
renderThemes();
document.getElementById('eleve-id').addEventListener('input', renderThemes);

function alertId() {
  document.getElementById('eleve-id').focus();
  document.getElementById('eleve-id').style.borderColor = 'var(--red)';
  setTimeout(function(){document.getElementById('eleve-id').style.borderColor='var(--border)';}, 1200);
}

function startQCM(t) {
  if(!getEleveId()) { alertId(); return; }
  qState = {theme:t, qs:qdata[t], cur:0, score:0, answered:false};
  document.getElementById('id-gate').style.display='none';
  document.getElementById('qcm-themes').style.display='none';
  document.getElementById('qcm-box').classList.add('on');
  document.getElementById('qresult').classList.remove('on');
  renderQ();
}

function renderQ() {
  var q = qState.qs[qState.cur];
  var pct = (qState.cur/qState.qs.length)*100;
  document.getElementById('qbar').style.width = pct+'%';
  document.getElementById('qcount').textContent = 'Question '+(qState.cur+1)+' sur '+qState.qs.length;
  document.getElementById('qquestion').textContent = q.q;
  document.getElementById('qexp').classList.remove('on');
  document.getElementById('qnext').style.display='none';
  qState.answered = false;
  var letters = ['A','B','C','D'];
  document.getElementById('qopts').innerHTML = q.o.map(function(o,i){
    return '<div class="qopt" id="qo'+i+'" onclick="answerQ('+i+')"><div class="qletter">'+letters[i]+'</div><span>'+o+'</span></div>';
  }).join('');
}

function answerQ(idx) {
  if(qState.answered) return;
  qState.answered = true;
  var q = qState.qs[qState.cur];
  document.querySelectorAll('.qopt').forEach(function(o){o.style.pointerEvents='none';});
  if(idx===q.c){document.getElementById('qo'+idx).classList.add('correct');qState.score++;}
  else{document.getElementById('qo'+idx).classList.add('wrong');document.getElementById('qo'+q.c).classList.add('correct');}
  var e=document.getElementById('qexp');
  e.textContent='💡 '+q.e;
  e.classList.add('on');
  var nb=document.getElementById('qnext');
  nb.style.display='inline-block';
  nb.textContent = qState.cur===qState.qs.length-1 ? 'Voir les résultats ✓' : 'Suivant →';
}

function nextQ() {
  qState.cur++;
  if(qState.cur>=qState.qs.length) showResult();
  else renderQ();
}

function showResult() {
  document.getElementById('qcm-box').classList.remove('on');
  var r=document.getElementById('qresult');
  r.classList.add('on');
  var pct=Math.round((qState.score/qState.qs.length)*100);
  document.getElementById('res-score').textContent=qState.score+'/'+qState.qs.length;
  var msgs=['Continue d\'étudier 💪','Bien ! Encore un effort 📚','Très bien ! 👍','Excellent ! 🏆'];
  document.getElementById('res-msg').textContent=pct+'% — '+(pct<40?msgs[0]:pct<60?msgs[1]:pct<80?msgs[2]:msgs[3]);
  sendResultToSheet(pct);
}

function sendResultToSheet(pct) {
  var statusEl = document.getElementById('send-status');
  statusEl.textContent = '📤 Envoi du résultat en cours...';
  var payload = {
    eleve: getEleveId(),
    theme: themesMeta[qState.theme] ? themesMeta[qState.theme].nm : qState.theme,
    score: qState.score,
    total: qState.qs.length,
    pourcentage: pct
  };
  fetch(SHEET_URL, {
    method: 'POST',
    headers: {'Content-Type': 'text/plain;charset=utf-8'},
    body: JSON.stringify(payload)
  }).then(function(){
    statusEl.textContent = '✅ Résultat envoyé à ton professeur';
  }).catch(function(){
    statusEl.textContent = '⚠️ Résultat non envoyé (vérifie ta connexion)';
  });
}

function resetQCM() {
  document.getElementById('id-gate').style.display='block';
  document.getElementById('qcm-themes').style.display='grid';
  document.getElementById('qcm-box').classList.remove('on');
  document.getElementById('qresult').classList.remove('on');
  renderThemes();
}

// ═══ CALCULATEURS ═══
function v(id){return parseFloat(document.getElementById(id).value);}
function sv(id){return document.getElementById(id).value;}
function setR(id,html){document.getElementById(id).innerHTML=html;}
function rval(v){return '<div class="rval">'+v+'</div>';}
function rdet(v){return '<div class="rdet">'+v+'</div>';}
function err(){return '<span style="color:var(--red)">Valeurs manquantes</span>';}

function cOhm(){
  var u=v('ou'),i=v('oi'),r=v('or'),t=sv('oc');
  if(t==='r'&&!isNaN(u)&&!isNaN(i)&&i!==0) setR('ores',rval('R = '+(u/i).toFixed(3)+' Ω')+rdet('R = U/I = '+u+'/'+i));
  else if(t==='u'&&!isNaN(r)&&!isNaN(i)) setR('ores',rval('U = '+(r*i).toFixed(2)+' V')+rdet('U = R×I = '+r+'×'+i));
  else if(t==='i'&&!isNaN(u)&&!isNaN(r)&&r!==0) setR('ores',rval('I = '+(u/r).toFixed(3)+' A')+rdet('I = U/R = '+u+'/'+r));
  else setR('ores',err());
}

function cPuissance(){
  var u=v('pu'),i=v('pi'),cos=v('pcos')||1,ph=sv('pph');
  if(isNaN(u)||isNaN(i)){setR('pres',err());return;}
  var s=ph==='mono'?u*i:Math.sqrt(3)*u*i;
  var p=s*cos, q=s*Math.sqrt(1-cos*cos);
  setR('pres',rval('P = '+p.toFixed(0)+' W')+rdet('S = '+s.toFixed(0)+' VA | Q = '+q.toFixed(0)+' VAr'));
}

function cCable(){
  var i=v('ci'),l=v('cl'),dt=v('cdt')||3,ph=sv('cph');
  if(isNaN(i)||isNaN(l)){setR('cres',err());return;}
  var u=ph==='mono'?230:400, k=ph==='mono'?2:Math.sqrt(3), rho=0.01786;
  var dtMax=u*dt/100, s=(k*rho*l*i)/dtMax;
  var std=[1.5,2.5,4,6,10,16,25,35,50,70,95,120];
  var chosen=std.find(function(x){return x>=s;})||std[std.length-1];
  setR('cres',rval('S ≥ '+s.toFixed(2)+' mm² → <strong>'+chosen+' mm²</strong>')+rdet('ΔU max = '+dtMax.toFixed(1)+'V | L='+l+'m | I='+i+'A'));
}

function cChute(){
  var s=parseFloat(sv('cts')),l=v('ctl'),i=v('cti'),ph=sv('ctph');
  if(isNaN(l)||isNaN(i)){setR('ctres',err());return;}
  var u=ph==='mono'?230:400, k=ph==='mono'?2:Math.sqrt(3), rho=0.01786;
  var dt=k*rho*(l/s)*i, pct=(dt/u)*100;
  var col=pct<=3?'var(--green)':pct<=5?'var(--yellow)':'var(--red)';
  var msg=pct<=3?'✓ Conforme NF C 15-100':pct<=5?'⚠️ Acceptable en industriel':'✗ Section insuffisante';
  setR('ctres','<div class="rval" style="color:'+col+'">ΔU = '+dt.toFixed(2)+'V ('+pct.toFixed(2)+'%)</div><div class="rdet">'+msg+'</div>');
}

function cMCC(){
  var u=v('mu'),ra=v('mra'),ia=v('mia'),eta=v('meta')||100;
  if(isNaN(u)||isNaN(ra)||isNaN(ia)){setR('mres',err());return;}
  var e=u-ra*ia, pa=u*ia, pu=pa*(eta/100), pj=ra*ia*ia;
  setR('mres',rval('E = '+e.toFixed(1)+' V')+rdet('Pa='+pa.toFixed(0)+'W | Pu='+pu.toFixed(0)+'W | Pj='+pj.toFixed(1)+'W'));
}

function cTransfo(){
  var u1=v('tu1'),u2=v('tu2'),i1=v('ti1'),t=sv('tc');
  if(isNaN(u1)||isNaN(u2)){setR('tres',err());return;}
  if(t==='ratio') setR('tres',rval('m = '+(u2/u1).toFixed(4))+rdet('n = '+(u1/u2).toFixed(2)+' (inverse)'));
  else if(t==='i2'&&!isNaN(i1)) setR('tres',rval('I2 = '+(i1*u1/u2).toFixed(3)+' A')+rdet('I2 = I1×U1/U2'));
  else if(t==='s'&&!isNaN(i1)) setR('tres',rval('S = '+(u1*i1/1000).toFixed(2)+' kVA')+rdet('S = U1×I1'));
  else setR('tres',err());
}

// Solaire PV
function cSolaire(){
  var conso=v('svC'), h=v('svH'), pr=v('svPR')||0.8, wp=v('svWp');
  if(isNaN(conso)||isNaN(h)){setR('svres',err());return;}
  var pCreteKwc = conso/(h*pr);
  var nbPanneaux = !isNaN(wp) && wp>0 ? Math.ceil((pCreteKwc*1000)/wp) : null;
  var html = rval('Puissance crête requise ≈ '+pCreteKwc.toFixed(2)+' kWc');
  if(nbPanneaux) html += rdet('Soit environ '+nbPanneaux+' panneaux de '+wp+'Wc');
  else html += rdet('Indique la puissance d\'un panneau pour estimer leur nombre');
  setR('svres',html);
}

// Démarrage moteur
function cDemarrage(){
  var inom=v('dmIn'), type=sv('dmType');
  if(isNaN(inom)){setR('dmres',err());return;}
  var id, desc;
  if(type==='direct'){id=inom*6.5;desc='Démarrage direct : Id ≈ 5 à 8×In (valeur moyenne utilisée)';}
  else if(type==='et'){id=inom*6.5/3;desc='Étoile-Triangle : Id ≈ (5 à 8×In)/3';}
  else {id=inom*1.2;desc='Variateur : démarrage progressif, Id limité ≈ 1,2×In';}
  setR('dmres',rval('Id ≈ '+id.toFixed(1)+' A')+rdet(desc));
}

// Autonomie batterie
function cBatterie(){
  var c=v('batC'), u=v('batU'), p=v('batP'), dod=v('batDOD')||80;
  if(isNaN(c)||isNaN(u)||isNaN(p)){setR('batres',err());return;}
  var energieWh = c*u*(dod/100);
  var autonomieH = energieWh/p;
  setR('batres',rval('Autonomie ≈ '+autonomieH.toFixed(1)+' h')+rdet('Énergie utilisable = '+energieWh.toFixed(0)+' Wh (DOD '+dod+'%)'));
}

// ═══ FICHES ═══
function renderFiches() {
  document.getElementById('fiches-grid').innerHTML = fiches.map(function(f,i){
    return '<div class="fiche-card" onclick="openFiche('+i+')"><div class="fiche-ico">'+f.ico+'</div><div class="fiche-title">'+f.title+'</div><div class="fiche-desc">'+f.desc+'</div><div class="ftags">'+f.tags.map(function(t){return '<span class="ftag">'+t+'</span>';}).join('')+'</div></div>';
  }).join('');
}
renderFiches();

function openFiche(i) {
  document.getElementById('modal-content').innerHTML = fiches[i].content;
  document.getElementById('modal').classList.add('on');
}
function closeModal() {
  document.getElementById('modal').classList.remove('on');
}
document.getElementById('modal').addEventListener('click', function(e){
  if(e.target===this) closeModal();
});

// ═══ ESPACE PROF ═══
function checkProfPwd() {
  var pwd = document.getElementById('prof-pwd').value;
  if(pwd === PROF_PASSWORD) {
    document.getElementById('prof-gate').style.display='none';
    document.getElementById('prof-dash').classList.add('on');
  } else {
    document.getElementById('prof-error').textContent = 'Mot de passe incorrect';
  }
}
document.getElementById('prof-pwd').addEventListener('keypress', function(e){
  if(e.key==='Enter') checkProfPwd();
});
