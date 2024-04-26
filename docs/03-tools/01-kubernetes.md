# Kubernetes

## Cluster du cours

Il faut être sur le réseau de l'HEIG-VD pour accéder au cluster Kubernetes du cours.  
Au besoin, utilisez un VPN : https://vpn.heig-vd.ch

- Rancher : https://rancher.k8s.heig-vd.blueur.com
- ArgoCD : https://argocd.k8s.heig-vd.blueur.com
- Dashboard : https://dashboard.k8s.heig-vd.blueur.com

### Kubectl

- Configurez votre `kubectl` local afin de pouvoir accéder au cluster Kubernetes du cours : https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig
  - Téléchargez le fichier de configuration `KubeConfig` depuis Rancher
  - Votre fichier de configuration actuel est probablement `~/.kube/config`
    - S'il existe, fusionnez les deux fichiers ensemble : https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#file-references
    - S'il n'existe pas, déplacez le fichier téléchargé à cet emplacement
- Configurez le [namespace](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/#setting-the-namespace-preference) par défaut : `kubectl config set-context --current --namespace=<namespace>`

### Contexte

Pour changer de contexte, utilisez, vous avez trois options :

- En ligne de commande : `kubectl config use-context <context>` (et pour les lister `kubectl config get-contexts`)
- Avec [Docker Desktop](https://docs.docker.com/desktop/kubernetes/#switch-between-clusters)
- Utiliser l'[extension VS Code Kubernetes](https://marketplace.visualstudio.com/items?itemName=ms-kubernetes-tools.vscode-kubernetes-tools)

### Ingress

Pour accéder à vos applications, vous pouvez configurer un Ingress :

- Choisissez un nom de sous-domaine de `k8s.heig-vd.blueur.com` (par exemple `exemple.k8s.heig-vd.blueur.com`)
- Indiquez le nom de domaine que vous avez choisi dans la configuration de l'ingress dans `spec.rules.host`
- Votre application devrait être accessible à l'adresse choisie
