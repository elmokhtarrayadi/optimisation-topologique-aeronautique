"use strict";
const chapters=[
{id:4,n:"Contexte",full:"Contexte de l'organisme",r:73,desc:"Évaluation de l'environnement interne et externe, des parties intéressées et de la gestion des processus.",criteria:["Définir les enjeux internes et externes","Identifier les attentes des parties intéressées","Formaliser les interactions entre processus"],action:"Cartographier les processus et les besoins",guide:"Structurer les analyses, les mises à jour et le suivi des exigences.",note:"Des pratiques sont identifiées, mais certaines interactions restent insuffisamment formalisées."},
{id:5,n:"Leadership",full:"Leadership et politique qualité",r:70,desc:"Engagement de la direction, politique qualité et responsabilités.",criteria:["Formaliser la politique qualité","Diffuser les orientations qualité","Identifier les responsabilités"],action:"Renforcer la gouvernance qualité",guide:"Définir la politique qualité, un pilote et des responsabilités documentées.",note:"La formalisation et la communication de la politique doivent être renforcées."},
{id:6,n:"Planification",full:"Planification, risques et objectifs",r:46,desc:"Identification des risques, définition des objectifs et planification des changements.",criteria:["Identifier les risques et opportunités","Établir des objectifs SMART","Suivre la planification des changements"],action:"Structurer la maîtrise des risques",guide:"Mettre en place une cartographie des risques et des objectifs mesurables.",note:"La planification est le principal axe d'amélioration identifié."},
{id:7,n:"Support",full:"Ressources et support",r:53,desc:"Compétences, communication, sensibilisation et maîtrise documentaire.",criteria:["Planifier les formations","Développer la sensibilisation","Maîtriser les versions documentaires"],action:"Développer les ressources qualité",guide:"Organiser les formations et sécuriser le système documentaire.",note:"La traçabilité documentaire et le suivi des compétences restent des priorités."},
{id:8,n:"Réalisation",full:"Activités éducatives",r:68,desc:"Processus opérationnels, évaluation des apprentissages et traitement des réclamations.",criteria:["Harmoniser les méthodes d'enseignement","Évaluer les programmes","Formaliser le traitement des réclamations"],action:"Standardiser les pratiques pédagogiques",guide:"Définir des procédures communes et assurer la traçabilité des actions.",note:"Les pratiques nécessitent un pilotage opérationnel cohérent."},
{id:9,n:"Évaluation",full:"Évaluation des performances",r:38,desc:"Indicateurs, programme d'audit interne et revues de direction.",criteria:["Programmer les audits internes","Consolider les indicateurs de performance","Formaliser les revues de direction"],action:"Installer un pilotage par indicateurs",guide:"Créer un tableau de bord et planifier les audits.",note:"Diagnostic détaillé : 38 % ; représentation graphique : 54 %. Écart à clarifier avant toute exploitation décisionnelle."},
{id:10,n:"Amélioration",full:"Amélioration continue",r:84,desc:"Non-conformités, actions correctives et démarche PDCA.",criteria:["Analyser les causes","Formaliser les actions correctives","Vérifier leur efficacité"],action:"Pérenniser les actions correctives",guide:"Mesurer l'efficacité des actions et maintenir une logique PDCA.",note:"Le suivi des actions doit être documenté pour confirmer les progrès."}
];
const actions=[
{t:"Analyser les besoins des parties intéressées",a:"Contexte",o:"Direction pédagogique",d:2,k:"Satisfaction des parties intéressées",p:false},
{t:"Élaborer et diffuser une politique qualité",a:"Leadership",o:"Direction",d:1,k:"Politique communiquée",p:true},
{t:"Désigner un responsable qualité ISO 21001",a:"Leadership",o:"Direction",d:1,k:"Responsable nommé",p:true},
{t:"Cartographier les risques organisationnels",a:"Planification",o:"Responsable qualité",d:3,k:"Risques identifiés et traités",p:true},
{t:"Définir des objectifs SMART et leurs KPI",a:"Planification",o:"Direction / responsables pédagogiques",d:2,k:"Taux d'atteinte des objectifs",p:false},
{t:"Organiser la formation et la sensibilisation",a:"Support",o:"Responsable qualité",d:3,k:"Nombre de formations",p:false},
{t:"Mettre en place une maîtrise documentaire",a:"Support",o:"Responsable qualité",d:2,k:"Nombre de documents maîtrisés",p:true},
{t:"Développer un plan annuel de formation",a:"Ressources humaines",o:"Service RH",d:4,k:"Heures de formation",p:false},
{t:"Harmoniser les méthodes d'enseignement",a:"Réalisation",o:"Responsables pédagogiques",d:4,k:"Taux d'application des méthodes",p:false},
{t:"Structurer le traitement des réclamations",a:"Réalisation",o:"Administration pédagogique",d:2,k:"Réclamations traitées",p:false},
{t:"Planifier des audits internes périodiques",a:"Évaluation",o:"Responsable qualité",d:6,k:"Audits réalisés",p:false},
{t:"Créer un tableau de bord de performance",a:"Évaluation",o:"Responsable qualité",d:3,k:"Tableau de bord actualisé",p:true},
{t:"Formaliser les actions correctives",a:"Amélioration",o:"Responsable qualité",d:2,k:"Actions correctives clôturées",p:false},
{t:"Intégrer le cycle PDCA aux processus",a:"Amélioration",o:"Direction",d:6,k:"Niveau d'amélioration",p:false}
];
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const fr=n=>n.toLocaleString("fr-FR",{minimumFractionDigits:1,maximumFractionDigits:1});
function route(page){document.querySelectorAll(".page").forEach(e=>e.classList.toggle("active",e.id==="page-"+page));document.querySelectorAll(".nav-btn").forEach(e=>e.classList.toggle("active",e.dataset.page===page));$("sidebar").classList.remove("open");scrollTo(0,0);document.title="ISO 21001 · "+(document.querySelector('[data-page="'+page+'"]')?.textContent.trim()||"Diagnostic");}
document.querySelectorAll("[data-page]").forEach(e=>e.addEventListener("click",()=>route(e.dataset.page)));
document.querySelectorAll("[data-go]").forEach(e=>e.addEventListener("click",()=>route(e.dataset.go)));
$("mobileMenu").addEventListener("click",()=>$("sidebar").classList.toggle("open"));
$("heroChart").innerHTML=chapters.map(c=>'<div class="hero-col"><div class="hero-bar'+(c.r<55?" low":"")+'" data-label="'+c.r+'%" style="height:'+c.r+'%"></div><small>'+c.id+'</small></div>').join("");
const barHTML=chapters.map(c=>'<div class="bar-row"><label title="'+esc(c.full)+'">Art. '+c.id+' · '+esc(c.n)+'</label><div class="track"><div class="bar'+(c.r<55?" low":"")+'" style="width:'+c.r+'%"></div></div><b>'+c.r+' %</b></div>').join("");
$("chartOverview").innerHTML=barHTML;$("chartResults").innerHTML=barHTML;
$("chapterList").innerHTML=chapters.map(c=>'<button class="chapter-btn" data-chapter="'+c.id+'">ART. <b>'+c.id+'</b>'+c.r+' %</button>').join("");
function showChapter(id){const c=chapters.find(x=>x.id===id);if(!c)return;document.querySelectorAll("[data-chapter]").forEach(e=>e.classList.toggle("active",Number(e.dataset.chapter)===id));$("chapterNumber").textContent="CHAPITRE "+c.id;$("chapterName").textContent=c.full;$("chapterDesc").textContent=c.desc;$("chapterProgress").style.width=c.r+"%";$("chapterValue").textContent=c.r+" %";$("chapterCriteria").innerHTML=c.criteria.map(q=>'<div class="check">'+esc(q)+'</div>').join("");$("chapterImprove").textContent=c.action;$("chapterGuide").textContent=c.guide;$("chapterNote").textContent=c.note;}
document.querySelectorAll("[data-chapter]").forEach(e=>e.addEventListener("click",()=>showChapter(Number(e.dataset.chapter))));
showChapter(4);

const causeFamilies = [
  {id:"people",name:"Main-d'œuvre",description:"Compétences, sensibilisation et implication des acteurs de l'établissement.",
    factors:[
      {name:"Manque de sensibilisation à la qualité",detail:"Les exigences qualité et leur intérêt opérationnel ne sont pas suffisamment partagés."},
      {name:"Formation insuffisante du personnel",detail:"La mise à niveau des compétences nécessaires au système de management reste limitée."},
      {name:"Faible implication des acteurs pédagogiques",detail:"L'adhésion des intervenants aux pratiques d'amélioration peut être insuffisante."}
    ],title:"Développer les compétences et l'implication",descriptionAction:"Le diagnostic met en évidence le besoin de renforcer la sensibilisation à la qualité et la formation des équipes.",
    levers:["Organiser des sessions de formation et de sensibilisation (3 mois prévus)","Élaborer un plan annuel de formation du personnel (4 mois prévus)","Suivre le nombre de formations réalisées et les heures de formation"],axis:"Support"},
  {id:"methods",name:"Méthodes",description:"Règles de fonctionnement, pilotage des processus et évaluation des performances.",
    factors:[
      {name:"Absence de procédures formalisées",detail:"Les pratiques ne sont pas systématiquement décrites et structurées dans des procédures."},
      {name:"Manque d'indicateurs de performance",detail:"Les résultats des processus ne sont pas suivis avec des mesures suffisantes."},
      {name:"Suivi pédagogique insuffisant",detail:"Les activités de formation et leurs performances nécessitent un suivi plus régulier."}
    ],title:"Formaliser et mesurer les processus",descriptionAction:"Structurer le pilotage pour relier objectifs, indicateurs de performance et décisions d'amélioration.",
    levers:["Définir des objectifs SMART assortis de KPI (2 mois prévus)","Créer un tableau de bord qualité (3 mois prévus)","Planifier des audits internes périodiques (6 mois prévus)"],axis:"Évaluation"},
  {id:"environment",name:"Milieu",description:"Communication, environnement organisationnel et capacité à accompagner les évolutions.",
    factors:[
      {name:"Communication interne insuffisante",detail:"La circulation des informations qualité entre les services et les acteurs peut être limitée."},
      {name:"Environnement organisationnel complexe",detail:"La répartition des rôles et les interactions entre services peuvent compliquer les démarches qualité."},
      {name:"Résistance au changement",detail:"Les évolutions de procédure et d'organisation peuvent rencontrer des réticences."}
    ],title:"Clarifier la gouvernance et la communication",descriptionAction:"Renforcer l'engagement de la direction et mieux définir les responsabilités et les orientations qualité.",
    levers:["Élaborer et communiquer une politique qualité (1 mois prévu)","Désigner un responsable qualité ISO 21001 (1 mois prévu)","Associer les acteurs concernés au déploiement des actions"],axis:"Leadership"},
  {id:"equipment",name:"Matériel",description:"Ressources physiques, moyens techniques et environnement numérique de travail.",
    factors:[
      {name:"Équipements pédagogiques limités",detail:"Le niveau des équipements peut restreindre la qualité ou la diversité des activités pédagogiques."},
      {name:"Insuffisance des outils numériques",detail:"Les outils informatiques nécessaires au suivi et à la coordination ne sont pas toujours adaptés."},
      {name:"Ressources techniques insuffisantes",detail:"La disponibilité des moyens de fonctionnement doit être évaluée selon les besoins réels."}
    ],title:"Évaluer les besoins en équipements",descriptionAction:"Avant de proposer un investissement, préciser les moyens manquants, leur utilisation et les priorités fonctionnelles.",
    levers:["Dresser un état des lieux du matériel et des outils numériques","Hiérarchiser les besoins d'investissement selon leur criticité","Définir des indicateurs d'utilisation et de disponibilité"],axis:null},
  {id:"materials",name:"Matière",description:"Information documentaire, supports pédagogiques et traçabilité des données.",
    factors:[
      {name:"Documentation incomplète",detail:"Certaines instructions et informations ne sont pas suffisamment formalisées."},
      {name:"Supports pédagogiques non standardisés",detail:"Les pratiques documentaires peuvent différer selon les services ou activités."},
      {name:"Manque de traçabilité des informations",detail:"Les versions, décisions et enregistrements ne sont pas systématiquement maîtrisés."}
    ],title:"Maîtriser l'information documentée",descriptionAction:"Renforcer la disponibilité de documents cohérents, à jour et traçables dans les processus.",
    levers:["Mettre en place une procédure de maîtrise documentaire (2 mois prévus)","Clarifier les responsabilités de mise à jour et de diffusion","Suivre le nombre de documents maîtrisés"],axis:"Support"}
];
function showCauseFamily(id){
  const family = causeFamilies.find(f=>f.id===id);if(!family)return;
  document.querySelectorAll("[data-ish-family]").forEach(btn=>{
    const active=btn.dataset.ishFamily===id;
    btn.classList.toggle("active",active);btn.setAttribute("aria-pressed",String(active));
  });
  document.querySelectorAll(".ish-branch").forEach(branch=>branch.classList.toggle("active",branch.dataset.branch===id));
  $("ishFamilyTitle").textContent=family.name;
  $("ishFamilyDesc").textContent=family.description;
  $("ishCauseCount").textContent=String(family.factors.length).padStart(2,"0")+" facteurs";
  $("ishCauseDetails").innerHTML=family.factors.map((f,i)=>
    '<article class="ish-factor"><span class="ish-factor-num">'+String(i+1).padStart(2,"0")+'</span><div><strong>'+esc(f.name)+'</strong><p>'+esc(f.detail)+'</p></div></article>').join("");
  $("ishActionTitle").textContent=family.title;
  $("ishActionDesc").textContent=family.descriptionAction;
  $("ishActionList").innerHTML=family.levers.map(t=>'<li>'+esc(t)+'</li>').join("");
  $("ishActionLink").dataset.axis=family.axis||"all";
  $("ishActionLink").textContent=family.axis?"Voir les actions « "+family.axis+" » ↗":"Voir le plan d'amélioration ↗";
}
document.querySelectorAll("[data-ish-family]").forEach(btn=>btn.addEventListener("click",()=>showCauseFamily(btn.dataset.ishFamily)));
// The technical diagram itself is also navigable by mouse and keyboard.
document.querySelectorAll(".ish-branch[data-branch]").forEach(branch=>{
  branch.addEventListener("click",()=>showCauseFamily(branch.dataset.branch));
  branch.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();showCauseFamily(branch.dataset.branch)}});
});
$("ishActionLink").addEventListener("click",()=>{
  const axis=$("ishActionLink").dataset.axis;
  if([...$("actionAxis").options].some(opt=>opt.value===axis))$("actionAxis").value=axis;
  else $("actionAxis").value="all";
  $("actionPriority").value="all";
  $("actionSearch").value="";
  renderActions();
  route("actions");
});
showCauseFamily("people");
$("actionAxis").innerHTML+=Array.from(new Set(actions.map(a=>a.a))).map(a=>'<option value="'+esc(a)+'">'+esc(a)+'</option>').join("");
let filtered=[];
function renderActions(){const term=$("actionSearch").value.toLocaleLowerCase("fr").trim(),prio=$("actionPriority").value,axis=$("actionAxis").value;filtered=actions.filter(a=>(prio==="all"||(prio==="yes"?a.p:!a.p))&&(axis==="all"||a.a===axis)&&[a.t,a.a,a.o,a.k].some(v=>v.toLocaleLowerCase("fr").includes(term)));$("actionRows").innerHTML=filtered.map(a=>'<tr><td>'+esc(a.t)+'</td><td>'+esc(a.a)+'</td><td>'+esc(a.o)+'</td><td>'+a.d+' mois</td><td>'+esc(a.k)+'</td><td><span class="label'+(a.p?" priority":"")+'">'+(a.p?"Prioritaire":"Proposée")+'</span></td></tr>').join("")||'<tr><td colspan="6">Aucune action trouvée.</td></tr>';$("actionCount").textContent=filtered.length+" action(s) affichée(s)";}
["actionSearch","actionPriority","actionAxis"].forEach(id=>$(id).addEventListener(id==="actionSearch"?"input":"change",renderActions));
renderActions();
$("exportCSV").addEventListener("click",()=>{const rows=[["Action","Axe","Responsable","Durée (mois)","Indicateur","Priorité"],...filtered.map(a=>[a.t,a.a,a.o,a.d,a.k,a.p?"Prioritaire":"Proposée"])];const csv="\ufeff"+rows.map(row=>row.map(c=>'"'+String(c).replaceAll('"','""')+'"').join(";")).join("\r\n");const url=URL.createObjectURL(new Blob([csv],{type:"text/csv;charset=utf-8"}));const a=document.createElement("a");a.href=url;a.download="plan-amelioration-ISO21001.csv";a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
const base=chapters.reduce((t,c)=>t+c.r,0)/chapters.length;let sim=chapters.map(c=>c.r);
$("simControls").innerHTML=chapters.map((c,i)=>'<div class="range-row"><label for="range'+i+'">Art. '+c.id+' · '+esc(c.n)+'</label><input id="range'+i+'" type="range" min="0" max="100" value="'+c.r+'" step="1"><b id="val'+i+'">'+c.r+' %</b></div>').join("");
function simRefresh(){const result=sim.reduce((s,v)=>s+v,0)/sim.length,delta=result-base;$("simResult").textContent=fr(result)+" %";$("simBase").textContent=fr(base)+" %";$("simDelta").textContent=(delta>=0?"+":"")+fr(delta)+" pt";}
chapters.forEach((c,i)=>$("range"+i).addEventListener("input",e=>{sim[i]=Number(e.target.value);$("val"+i).textContent=sim[i]+" %";simRefresh();}));
$("simReset").addEventListener("click",()=>{sim=chapters.map(c=>c.r);chapters.forEach((c,i)=>{$("range"+i).value=c.r;$("val"+i).textContent=c.r+" %";});simRefresh();});
simRefresh();