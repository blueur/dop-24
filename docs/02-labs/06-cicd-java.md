# CI/CD Java

## Objectifs

- Estimer son travail
- Dockeriser une application Java
- Configurer une pipeline CI/CD pour une application Java
- Configurer un déploiement sur Kubernetes pour une application Java

## Rendu

- GitHub Classroom : https://classroom.github.com/a/Y_FXjsYh
  - Rapport individuel en Markdown à rendre avant le prochain cours
  - Nom du fichier : `report.md` à la racine du répertoire
- Devoir sur Cyberlearn : mettre le lien de la pull request GitLab dans le champ texte
- Délai: 1 semaine
- **Laboratoire noté**

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

### Prérequis

- [Maven](https://maven.apache.org/)
- [Java 17](https://adoptium.net/fr/temurin/releases/?version=17)

### Préparation

- Forker le repository suivant : https://gitlab.com/blueur/heig-vd-devops-java
- Cloner votre repository sur votre machine
- Empaquetez l'application avec Maven : `mvn package`
- Lancez l'application : `mvn spring-boot:run`
  - Vous pourrez accéder à l'application sur http://127.0.0.1:8080/

### Application des principes DevOps

- Conteneurisez l'application avec Docker
  - Quelle image de base ? Pourquoi ?
  - Utilisez la version 17 de Java
- Configurez Docker Compose de sorte que `docker compose up` lance l'application
- Configurez la CI/CD sur GitLab
  - Pour chaque commit sur n'importe quelle branche :
    - Vérifiez que le projet compile
    - Vérifiez que les tests passent
      - Avec les [Unit Test Reports](https://docs.gitlab.com/ee/ci/testing/unit_test_reports.html)
  - Pour chaque merge request :
    - Vérifiez que l'image Docker se construit
  - Pour chaque commit sur `main` :
    - Mettez à jour l'image Docker sur le registry GitLab avec le tag `latest`
- Configurer un déploiement sur Kubernetes : `kubectl apply -f deployment.yaml` doit lancer l'application sur un cluster Kubernetes

### Rapport

- Indiquez dans votre rapport votre démarche ainsi que les difficultés rencontrées
- Expliquez tous les choix techniques que vous avez fait (sauf ceux indiqués)

## Evaluation

| Critère     | Minimal (-0.5 par critère manquant)                                                             | Bon (+0.2)                                                                            | Excellent (+0.4)                                            |
| ----------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Délai       | Le rendu est dans les temps                                                                     |                                                                                       |                                                             |
| Rapport     | Le rapport répond aux questions posées                                                          | Le rapport est complet et bien structuré                                              |                                                             |
| Docker      | Le Docker Compose est fonctionnel avec `docker compose up`                                      | Application des bonnes pratiques                                                      | Optimisation                                                |
| CI/CD       | La pipeline CI/CD est fonctionnel (succès)                                                      | Application des bonnes pratiques                                                      | Optimisation                                                |
| Kubernetes  | Le déploiement sur Kubernetes est fonctionnel grâce au fichier `deployment.yaml` (pas d'erreur) | Application des bonnes pratiques                                                      | Déploiement automatique sur Kubernetes                      |
| Code        | Le code est fonctionnel                                                                         | Le code est propre                                                                    | Le code est propre et bien documenté                        |
| Déploiement |                                                                                                 | Déployé sur le cluster k8s de la classe sous le namespace `{votre nom}`               | Le déploiement est automatisé pour chaque commit sur `main` |
| Analyse     |                                                                                                 | Amélioration de la CI/CD avec le code coverage, le SAST, le dependency scanning, etc. | Explication de leur utilisation                             |
| Bonus       |                                                                                                 | Toute autre amélioration                                                              | Toute autre amélioration avancée                            |
