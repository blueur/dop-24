# Observabilité

## Objectifs

- Estimer son travail
- Dockeriser une application Spring Boot
- Instrumenter une application Spring Boot pour la visualisation des logs, métriques et traces
- Configurer un dashboard dans Kibana
- Configurer un dashboard dans Grafana

## Rendu

- GitHub Classroom : https://classroom.github.com/a/-lxidR0U
  - Rapport individuel en Markdown à rendre avant le prochain cours
  - Nom du fichier : `report.md` à la racine du répertoire
  - Code directement sur GitHub Classroom
- Délai: 2 semaines
  - Rendu intermédiaire après 1 semaine pour avoir un retour sur le travail effectué

## Tâches

### Estimer son travail

- Estimez le temps nécessaire pour réaliser ce laboratoire
  - Découpez le travail en tâches pour faciliter l'estimation
- Lorsque vous aurez terminé le laboratoire, comparez le temps estimé avec le temps réellement passé

| Tâche      | Temps estimé | Temps réel | Commentaire |
| ---------- | ------------ | ---------- | ----------- |
| Estimation | 10m          | 15m        | ...         |
| ...        | ...          | ...        | ...         |
| Total      | 2h           | 1h30       | ...         |

### Mise en place

Ce projet reprend [demotory](https://github.com/blueur/demotory) qui est le point de départ sur GitHub Classroom.

```bash
mvn spring-boot:run
```

http://localhost:8080

### Docker Compose

- Dockeriser l'application
- Créer un Docker Compose pour lancer l'application
  - `docker compose up`

Bonus :

- Utiliser les [profiles](https://docs.docker.com/compose/profiles/) pour activer/désactiver les outils APM

### Instrumentation

Instrumenter l'application en justifiant vos choix d'outils

- Le Docker Compose doit exposer les services suivants:
  - **Kibana** pour visualiser les logs sur http://localhost:5601
  - **Grafana** pour visualiser les métriques sur http://localhost:3000
    - **Prometheus** pour récupérer les métriques sur http://localhost:9090
  - **Jaeger** pour visualiser les traces sur http://localhost:16686
- Documenter les configurations manuelles à faire après avoir lancé `docker compose up` dans le `README.md`
  - Exemple: ajouter des dashboards dans Kibana et Grafana
  - Vous pouvez ajouter des screenshots dans la documentation

#### Logs avec Kibana

Visualiser les logs de tous les containers (application + outils APM) dans Kibana.

Bonus :

- Gérer les stacktraces qui sont sur plusieurs lignes (regrouper la stacktrace en un seul record)

#### Métriques avec Grafana

Visualiser les métriques de tous les containers (application + outils APM) dans Grafana.

Bonus :

- Ajouter des métriques personnalisées de l'application
  - Nombre d'entrées dans la map sous forme de [Gauge](https://opentelemetry.io/docs/specs/otel/metrics/data-model/#gauge)
  - Nombre de changements de la map sous forme de [Sums](https://opentelemetry.io/docs/specs/otel/metrics/data-model/#sums)

#### Traces avec Jaeger

Visualiser les traces de l'application dans Jaeger.

Bonus :

- Déployer aussi Zipkin et visualiser les traces dans Zipkin
- Comparer les deux outils

### Rapport

- Indiquez dans votre rapport votre démarche ainsi que les difficultés rencontrées
- Expliquez tous les choix techniques que vous avez fait (sauf ceux indiqués)

## Evaluation

|                           | Critères de base (-0.5/critère)                                             | Critères complémentaires (+0.2/critère)                                                                                              |
| ------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Rendu                     | <ul><li>Le rendu est complet et dans les temps</li></ul>                    |                                                                                                                                      |
| Docker                    | <ul><li>Le Docker Compose est fonctionnel</li></ul>                         | <ul><li>Bonne dockerisation</li><li>Utilisation des profiles</li></ul>                                                               |
| Logs                      | <ul><li>Visualisation des logs de l'application dans Kibana</li></ul>       | <ul><li>Ajout des logs de tous les services</li><li>Stacktraces regroupées</li><li>Dashboard</li></ul>                               |
| Métriques                 | <ul><li>Visualisation des métriques de l'application dans Grafana</li></ul> | <ul><li>Ajout des métriques de tous les services</li><li>Gauge</li><li>Sums</li><li>Autre</li></ul>                                  |
| Traces                    | <ul><li>Visualisation des traces de l'application dans Jaeger</li></ul>     | <ul><li>Ajout des traces de tous les services</li><li>Visualisation des traces dans Zipkin</li><li>Comparaison avec Zipkin</li></ul> |
| Documentation (README.md) | <ul><li>Documentation des configurations manuelles</li></ul>                | <ul><li>Bonne documentation de l'application</li><li>Bonne documentation des APM</li></ul>                                           |
| Rapport                   |                                                                             | <ul><li>Bonne explication de la démarche</li><li>Bonne explication des choix techniques</li></ul>                                    |
| Bonus                     |                                                                             | <ul><li>Autre bonus</li></ul>                                                                                                        |

Tous les critères de base doivent être validés pour avoir la note de 4.

Les critères complémentaires permettent d'atteindre la note de 6.
