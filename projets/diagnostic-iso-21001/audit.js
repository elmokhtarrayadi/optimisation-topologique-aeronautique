"use strict";

/* Grille d'évaluation du cas étudié. La liste reprend les 72 critères numérotés
   et les valeurs d'évaluation inscrites dans le diagnostic. Les libellés sont
   volontairement reformulés pour une navigation rapide dans l'application. */
const auditGroups=[
{chapter:4,first:1,scores:[100,100,30,100,70,100,100,0,100,30,70,100],
 labels:[
"Identification des enjeux internes de l'organisme",
"Identification des enjeux externes (réglementation, emploi, technologie)",
"Revue et mise à jour périodique des analyses du contexte",
"Identification des parties intéressées",
"Identification et suivi des besoins des parties intéressées",
"Identification des exigences réglementaires et académiques",
"Définition du périmètre du système de management éducatif",
"Justification et documentation des exclusions du périmètre",
"Identification des processus du système de management éducatif",
"Formalisation des interactions entre processus et de la cartographie",
"Suivi des indicateurs de performance des processus",
"Mise en œuvre d'une démarche d'amélioration continue"]},
{chapter:5,first:13,scores:[100,30,100,70,30,30,100,70,100],
 labels:[
"Engagement de la direction envers la qualité éducative",
"Disponibilité des ressources nécessaires au management éducatif",
"Promotion de l'orientation apprenant",
"Formalisation de la politique éducative et qualité",
"Communication et appropriation de la politique par le personnel",
"Revue périodique de la politique qualité",
"Définition des responsabilités des fonctions clés",
"Actualisation de l'organigramme",
"Attribution des autorités nécessaires à la décision"]},
{chapter:6,first:22,scores:[30,70,30,30,70,30,70,30],
 labels:[
"Identification des risques affectant la qualité éducative",
"Identification des opportunités d'amélioration et d'innovation",
"Planification et suivi des actions de traitement des risques",
"Définition d'objectifs éducatifs mesurables",
"Cohérence des objectifs avec la politique éducative",
"Attribution de responsables, de délais et de moyens aux objectifs",
"Planification structurée des changements académiques et organisationnels",
"Évaluation de l'impact des changements avant leur déploiement"]},
{chapter:7,first:30,scores:[70,70,30,70,100,30,30,30,70,70,30,30,70],
 labels:[
"Disponibilité des ressources humaines nécessaires",
"Adéquation des salles, laboratoires et équipements",
"Disponibilité et maintenance des ressources numériques",
"Définition des compétences requises du personnel",
"Qualification des enseignants et des encadrants",
"Planification et réalisation de formations continues",
"Connaissance de la politique et des objectifs par le personnel",
"Compréhension des contributions individuelles à la qualité",
"Organisation et efficacité de la communication interne",
"Clarté et ponctualité des informations destinées aux étudiants",
"Maîtrise et mise à jour des procédures et documents",
"Accessibilité des versions à jour des documents",
"Conservation et protection des enregistrements"]},
{chapter:8,first:43,scores:[100,70,70,30,70,70,70,30,70,100,70,70,100,70,100,70,30],
 labels:[
"Planification des activités pédagogiques et des calendriers",
"Définition des responsabilités opérationnelles",
"Identification des besoins des apprenants",
"Traitement formalisé des réclamations et demandes",
"Définition d'objectifs mesurables pour les programmes",
"Consultation des entreprises lors des révisions de programme",
"Révision périodique de la pertinence des programmes",
"Sélection des intervenants et prestataires externes",
"Évaluation des stages et des prestations externes",
"Conformité des cours aux programmes validés",
"Adéquation des méthodes pédagogiques aux objectifs",
"Suivi de l'assiduité et de la progression des étudiants",
"Communication des modalités d'évaluation aux apprenants",
"Vérification des résultats avant leur publication",
"Traçabilité des conditions d'obtention des diplômes",
"Traitement des erreurs et anomalies pédagogiques",
"Traçabilité des actions correctives immédiates"]},
{chapter:9,first:60,scores:[100,0,0,0,100,30,30],
 labels:[
"Suivi des indicateurs de réussite, satisfaction, insertion et absentéisme",
"Analyse des résultats pour orienter les décisions d'amélioration",
"Existence et application d'un programme d'audit interne",
"Compétence et impartialité des auditeurs internes",
"Déclenchement d'actions correctives à partir des constats d'audit",
"Réalisation périodique des revues de direction",
"Formalisation et suivi des décisions issues des revues de direction"]},
{chapter:10,first:67,scores:[100,70,100,30,100,70],
 labels:[
"Recherche continue des opportunités d'amélioration",
"Analyse des causes des problèmes et non-conformités",
"Mise en œuvre d'actions correctives contre la récurrence",
"Vérification de l'efficacité des actions correctives",
"Progression des performances globales de l'établissement",
"Déploiement et évaluation d'innovations pédagogiques ou organisationnelles"]}
];
const auditRecords=auditGroups.flatMap(group=>group.labels.map((label,i)=>({
 reference:"cr"+(group.first+i),number:group.first+i,chapter:group.chapter,score:group.scores[i],label
})));
const auditScale=[
{value:0,label:"Non conforme",hint:"Action non réalisée ou aléatoire"},
{value:30,label:"Partiellement conforme",hint:"Pratique informelle"},
{value:70,label:"Partiellement conforme",hint:"Pratique formalisée et réalisée"},
{value:100,label:"Satisfaisant",hint:"Formalisée, réalisée, tracée et améliorée"}
];
if(auditRecords.length!==72||new Set(auditRecords.map(x=>x.reference)).size!==72||
 auditRecords.some((x,i)=>x.number!==i+1))throw Error("Contrôle interne de la grille : la numérotation des critères est incorrecte.");
let auditChapter="all";
const searchInput=document.getElementById("auditSearch");
const statusInput=document.getElementById("auditStatus");
const chapterInput=document.getElementById("auditChapter");
const gridBody=document.getElementById("auditRows");
const auditSummary=document.getElementById("auditSummary");
const auditExports=document.getElementById("auditExport");
const auditChapterCounts=document.getElementById("auditChapterCounts");
const plainEscape=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
let shownRecords=[];
function qualityLabel(score){return auditScale.find(s=>s.value===score)?.label||"Non renseigné";}
function auditRefresh(){
 const q=searchInput.value.trim().toLocaleLowerCase("fr"),st=statusInput.value,chap=chapterInput.value;
 shownRecords=auditRecords.filter(rec=>(chap==="all"||rec.chapter===Number(chap))&&
  (st==="all"||rec.score===Number(st))&&
  (!q||[rec.reference,rec.label,"Chapitre "+rec.chapter,qualityLabel(rec.score)].some(v=>String(v).toLocaleLowerCase("fr").includes(q))));
 gridBody.innerHTML=shownRecords.map(rec=>'<tr>'+
  '<td><strong class="audit-code">'+rec.reference+'</strong></td>'+
  '<td><span class="audit-chapter">Art. '+rec.chapter+'</span></td>'+
  '<td class="audit-question">'+plainEscape(rec.label)+'</td>'+
  '<td><span class="audit-status audit-status-'+rec.score+'">'+plainEscape(qualityLabel(rec.score))+'</span></td>'+
  '<td><strong class="audit-score">'+rec.score+' %</strong></td>'+
 '</tr>').join("")||'<tr><td colspan="5" class="audit-empty">Aucun critère ne correspond à cette recherche.</td></tr>';
 const zeros=shownRecords.filter(x=>x.score===0).length;
 auditSummary.textContent=shownRecords.length+" critères affichés · "+zeros+" non conforme"+(zeros>1?"s":"");
}
auditChapterCounts.innerHTML=auditGroups.map(g=>{
 const non=g.scores.filter(s=>s===0).length;
 return '<button class="audit-chapter-card" type="button" data-audit-chapter="'+g.chapter+'"><b>ART. '+g.chapter+'</b><strong>'+g.labels.length+' critères</strong><small>'+non+' non conforme'+(non>1?"s":"")+'</small></button>';
}).join("");
auditChapterCounts.querySelectorAll("[data-audit-chapter]").forEach(btn=>btn.addEventListener("click",()=>{
 chapterInput.value=btn.dataset.auditChapter;
 auditRefresh();
 document.getElementById("audit-detail").scrollIntoView({behavior:"smooth",block:"start"});
}));
[searchInput,statusInput,chapterInput].forEach(el=>el.addEventListener(el===searchInput?"input":"change",auditRefresh));
function viewAuditChapter(chapter){
 const target=String(chapter);
 if(chapterInput.value!==target){chapterInput.value=target;auditRefresh();}
}
document.querySelectorAll("[data-chapter]").forEach(btn=>btn.addEventListener("click",()=>viewAuditChapter(Number(btn.dataset.chapter))));
auditExports.addEventListener("click",()=>{
 const fields=[["Référence","Chapitre","Critère de vérification","Évaluation","Taux"],
 ...shownRecords.map(r=>[r.reference,r.chapter,r.label,qualityLabel(r.score),r.score+" %"])];
 const csv="\ufeff"+fields.map(row=>row.map(value=>'"'+String(value).replaceAll('"','""')+'"').join(";")).join("\r\n");
 const url=URL.createObjectURL(new Blob([csv],{type:"text/csv;charset=utf-8"}));
 const a=document.createElement("a");a.href=url;a.download="grille-evaluation-iso-21001.csv";a.click();
 setTimeout(()=>URL.revokeObjectURL(url),1000);
});
auditRefresh();
