# Logs

## Objectifs

- Estimer son travail
- Déployer un monitoring EFK sur Docker Compose
- Parser les logs
- Créer un tableau de bord dans Kibana
- Déployer un monitoring EFK sur Kubernetes

## Rendu

- Rapport individuel sur Cyberlearn
  - Nom du fichier: `lab09-logs-{nom}.pdf`
  - Délai: 1 semaine
- Code sur GitHub Classroom : https://classroom.github.com/a/Lu8qjPya

## Tâches

### Estimer son travail

- Estimez le temps total nécessaire pour réaliser ce laboratoire
  - Découpez le travail en tâches pour faciliter l'estimation
- A la fin du rapport, comparez le temps estimé avec le temps réellement passé:
  | Tâche | Temps estimé | Temps réel | Commentaire |
  |-------|--------------|------------|-------------|
  | ... | 30m | 45m | ... |
  | ... | ... | ... | ... |
  | Total | 2h | 1h30 | ... |

### EFK sur Docker Compose

Déployer un Docker Compose avec EFK (Elasticsearch, Fluentd, Kibana) et un serveur web.

- Tutoriel (plus à jour) sur https://docs.fluentd.org/container-deployment/docker-compose
- Mettre à jour le tutoriel et le rendre fonctionnel

::: details Indices

- https://github.com/fluent/fluentd-docs-gitbook/issues/391
- https://stackoverflow.com/questions/71933584/my-web-server-tries-to-connect-to-fluentd-before-listening-port-on-docker + https://docs.docker.com/config/containers/logging/fluentd/#fluentd-async
- https://www.elastic.co/guide/en/elasticsearch/reference/8.11/security-settings.html#general-security-settings

:::

Exemple fonctionnel : https://github.com/blueur/efk

### Parser les logs

Parser les logs du serveur web avec Fluentd :

- Apache : https://docs.fluentd.org/parser/apache2
- Nginx : https://docs.fluentd.org/parser/nginx

Vérifier que les logs sont bien parsés dans Kibana.

::: details Solution

Ajouter un filtre dans `fluent.conf` :

```
<filter web.log>
  @type parser
  key_name log

  <parse>
    @type apache2
  </parse>
</filter>
```

:::

Créer un tableau de bord dans Kibana :

- https://www.elastic.co/guide/en/kibana/current/create-a-dashboard-of-panels-with-web-server-data.html
- Affiche la proportion des chemins (`path`) et des codes HTTP (`code`) dans les logs

### EFK sur Kubernetes

Déployer EFK sur Kubernetes : https://docs.fluentd.org/container-deployment/kubernetes

### Bonus : Ajouter Metricbeat sur Docker Compose

https://www.elastic.co/guide/en/beats/metricbeat/current/running-on-docker.html
