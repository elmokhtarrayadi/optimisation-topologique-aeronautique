# Diagnostic ISO 21001 — Qualité et amélioration continue

**Étude de cas : une école d'ingénieurs**  
Management de la qualité · Évaluation de conformité · Ishikawa 5M · PDCA · Indicateurs de performance

[**→ Voir le tableau de bord interactif**](https://elmokhtarrayadi21-creator.github.io/optimisation-topologique-aeronautique/projets/diagnostic-iso-21001/)

## Objectif

Structurer un diagnostic de conformité ISO 21001 afin d'identifier les écarts dans un système de management éducatif, analyser leurs causes et proposer un plan d'amélioration mesurable.

## Travaux illustrés

- Construction d'une grille d'évaluation des exigences des chapitres **4 à 10**.
- Analyse des indicateurs et des niveaux de conformité.
- Analyse causes-effets par **Ishikawa / 5M**.
- Élaboration d'un plan d'action avec **responsables, durées prévisionnelles et KPI**.
- Mise en valeur de la démarche dans un tableau de bord interactif.

## Indicateurs présentés

| Chapitre | Domaine | Taux présenté |
| :-- | :-- | --: |
| 4 | Contexte de l'organisme | 73 % |
| 5 | Leadership | 70 % |
| 6 | Planification | 46 % |
| 7 | Support | 53 % |
| 8 | Réalisation des activités éducatives | 68 % |
| 9 | Évaluation des performances | 54 %* |
| 10 | Amélioration | 84 % |

**Lecture :** la planification (**46 %**) apparaît comme l'axe prioritaire. La synthèse du diagnostic présente **71 évaluations** réparties en quatre niveaux et **14 actions d'amélioration**.

*Le chapitre 9 apparaît aussi à 38 % dans une autre section de l'étude : ce point doit être consolidé avant tout emploi décisionnel.*

## Fonctionnalités de l'application

L'interface présente une expérience structurée en six espaces :

- **Vue d'ensemble :** indicateurs clés et méthodologie du diagnostic.
- **Résultats qualité :** graphiques de conformité et répartition des évaluations.
- **Diagnostic ISO :** consultation détaillée des chapitres 4 à 10.
- **Ishikawa 5M interactif :** un diagramme causes-effets avec **5 familles et 15 facteurs potentiels**. Chaque sélection affiche les causes, leur interprétation et les leviers d'amélioration associés. Les actions pertinentes sont reliées au plan d'amélioration.
- **Plan d'amélioration :** 14 actions consultables par axe et priorité, avec délais, responsables, KPI et export CSV.
- **Simulation :** comparaison de scénarios théoriques, distincts des évaluations réellement observées.

### Analyse des causes — méthode Ishikawa

Le diagnostic présente cinq familles de causes potentielles :

| Famille 5M | Principaux facteurs examinés |
| :-- | :-- |
| Main-d'œuvre | Sensibilisation ; formation ; implication pédagogique |
| Méthodes | Procédures ; indicateurs ; suivi |
| Milieu | Communication ; complexité organisationnelle ; résistance au changement |
| Matériel | Équipements ; outils numériques ; ressources techniques |
| Matière | Documentation ; standardisation des supports ; traçabilité |

Ces facteurs sont des hypothèses d'analyse structurées par la méthode 5M, **pas des causes racines démontrées statistiquement**. Le diagramme est relié à une démarche PDCA et au plan d'action prévisionnel.

La démonstration interactive est réalisée pour rendre le diagnostic plus lisible ; elle ne remplace pas un audit réel ni une décision de certification.

## Structure

```text
projets/diagnostic-iso-21001/
├── index.html     # Application de présentation
├── style.css      # Identité visuelle responsive
├── app.js         # Graphiques, filtres, export CSV, simulation
└── README.md      # Documentation du projet
```

## Portée de l'étude

Il s'agit d'une **étude académique collective** appliquée à une **école d'ingénieurs anonymisée**. Les taux illustrent les résultats du diagnostic considéré, sans représenter une certification ISO ou une mesure d'amélioration après déploiement.

---

**Elmokhtar Rayadi** · Étudiant ingénieur en génie mécanique des systèmes industriels

[Portfolio principal](https://github.com/elmokhtarrayadi21-creator) · [Démonstration interactive](https://elmokhtarrayadi21-creator.github.io/optimisation-topologique-aeronautique/projets/diagnostic-iso-21001/)
