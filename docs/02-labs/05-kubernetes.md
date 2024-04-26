# Kubernetes

## Objectifs

- Estimer son travail
- Utiliser minikube
- Déployer une application sur Kubernetes
- Créer un fichier `deployment.yaml` pour déployer l'application

## Rendu

- GitHub Classroom : https://classroom.github.com/a/xW6ZdJoY
  - Rapport individuel en Markdown à rendre avant le prochain cours
  - Nom du fichier : `report.md` à la racine du répertoire
- Devoir sur Cyberlearn : mettre le lien de la pull request GitLab dans le champ texte
- Délai: 1 semaine

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

### Utiliser minikube

- Suivez les instructions sur [minikube](https://minikube.sigs.k8s.io/docs/start/) pour déployer des applications sur votre machine
  - Suivez les points suivants:
    - 2. Start your cluster
    - 3. Interact with your cluster
    - 4. Deploy applications
      - Service
      - LoadBalancer
        - Scale votre Deployment à 2 replicas et vérifiez que les requêtes sont bien réparties entre les deux pods (en y accédant en navigation privée)
      - Ingress
- Regardez les logs (au niveau du pod)
  - Sur le dashboard, sélectionnez un pod
    - En haut à droite, il y a plusieurs icônes, dont `View logs` et `Exec into pod`
  - En ligne de commande, utilisez `kubectl logs` et `kubectl exec` (`kubectl get pods` pour lister les pods)

### Déployer une application

On va déployer notre application sur Kubernetes. Les instructions suivantes utilise https://gitlab.com/blueur/heig-vd-devops mais vous être libre d'utiliser votre propre application.

#### GUI

Déployez l'application sur Kubernetes en utilisant le dashboard.

- Déployez le frontend
  - Cliquez sur le `+` en haut à droite
    - `Create from form`
      - App name : `frontend`
      - Container image : `registry.gitlab.com/blueur/heig-vd-devops/frontend:latest`
      - Service : `Internal`
      - Port : `80`
      - Target port : `80`
    - Cliquez sur `Deploy`
  - Vous pourrez accéder à l'application avec `minikube service frontend`
- Déployez une base de donnée
  - App name : `database`
  - Container image : `postgres:16-alpine`
  - Service : `Internal`
  - Port : `5432`
  - Target port : `5432`
  - Cliquez sur `Show advanced options`
    - Environment variables
      - `POSTGRES_PASSWORD` : `postgres`
  - Cliquez sur `Deploy`
- Déployez le backend
  - App name : `backend`
  - Container image : `registry.gitlab.com/blueur/heig-vd-devops/backend:latest`
  - Service : `Internal`
  - Port : `80`
  - Target port : `80`
  - Cliquez sur `Show advanced options`
    - Environment variables
      - `POSTGRES_HOST` : `database`
      - `POSTGRES_PASSWORD` : `postgres`
      - `ROOT_PATH`: `/api`
- Créez un ingress
  - `Create from input`
    ```yaml
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: heig-vd-devops-ingress
      annotations:
        nginx.ingress.kubernetes.io/use-regex: "true"
        nginx.ingress.kubernetes.io/rewrite-target: /$1
    spec:
      ingressClassName: nginx
      rules:
        - http:
            paths:
              - path: /?(.*)
                pathType: ImplementationSpecific
                backend:
                  service:
                    name: frontend
                    port:
                      number: 80
              - path: /api/?(.*)
                pathType: ImplementationSpecific
                backend:
                  service:
                    name: backend
                    port:
                      number: 80
    ```
- Vous pourrez accéder à l'application sur http://127.0.0.1/

#### CLI

- Suivez les instructions pour créer une application stateless : https://kubernetes.io/docs/tasks/run-application/run-stateless-application-deployment/
- Suivez les instructions pour créer une application stateful : https://kubernetes.io/docs/tasks/run-application/run-single-instance-stateful-application/
- Créez un fichier `deployment.yaml` à la racine de votre repository qui permet de déployer votre application sur Kubernetes.
  - On devra pouvoir déployer ou mettre à jour toute l'application avec `kubectl apply -f deployment.yaml`
- Déployez votre application sur un nouveau [namespace](https://kubernetes.io/docs/tasks/administer-cluster/namespaces/)

### Cluster du cours

Déployez votre application sur le [cluster Kubernetes du cours](/docs/tools/kubernetes) dans le namespace `<votre-nom>`.
