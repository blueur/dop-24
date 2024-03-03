# Outils

## Objectifs

- Estimer son travail
- Avoir un environnement de travail fonctionnel
- Utiliser GitLab et GitHub Classroom

## Rendu

- Rapport individuel en [Markdown](https://fr.wikipedia.org/wiki/Markdown) à rendre avant le prochain cours
  - GitHub Classroom : https://classroom.github.com/a/nJ316FV5
  - Nom du fichier : `report.md` à la racine du répertoire
  - Devoir sur Cyberlearn : mettre le lien de la pull request GitLab dans le champ texte
  - Délai: 1 semaine

## Tâches

### Estimer son travail

- Estimez le temps nécessaire pour réaliser ce laboratoire
  - Découpez le travail en tâches pour faciliter l'estimation
- Lorsque vous avez terminé le laboratoire, comparez le temps estimé avec le temps réellement passé
- Le but n'étant pas d'estimer correctement, mais comprendre comment vous pourriez améliorer vos estimations

| Tâche      | Temps estimé | Temps réel | Commentaire |
| ---------- | ------------ | ---------- | ----------- |
| Estimation | 10m          | 15m        | ...         |
| ...        | ...          | ...        | ...         |
| Total      | 2h           | 1h30       | ...         |

### Environnement de travail

Installez et vérifiez les outils suivants (mettre à jour si nécessaire):

- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)
  - Vérifiez avec `git --version`
- [Docker](https://www.docker.com/)
  - Vérifiez avec `docker --version`
  - Vérifiez avec `docker compose version`
- [Node.js](https://nodejs.org/)
  - Au moins la dernière version LTS
  - Vérifiez avec `node --version`
  - Vous pouvez utiliser [nvm](https://github.com/nvm-sh/nvm) pour gérer les versions de Node.js
- [Python](https://www.python.org/)
  - Vérifiez avec `python --version`
  - Vous pouvez utiliser [pyenv](https://github.com/pyenv/pyenv) pour gérer les versions de Python
- [Poetry](https://python-poetry.org/)
  - Vérifiez avec `poetry --version`
  - Utilisez les [virtualenvs en local](https://python-poetry.org/docs/configuration/#virtualenvsin-project) avec `poetry config virtualenvs.in-project true`
- [MiniKube](https://minikube.sigs.k8s.io/docs/)
  - Vérifiez avec `minikube version`
- [Java](https://adoptium.net/fr/)
  - Au moins la dernière version LTS
  - Vérifiez avec `java --version`
- [Maven](https://maven.apache.org/)
  - Vérifiez avec `mvn --version`

:::tip[Conseils]

- Préférez les versions stables (LTS) aux versions de développement
  - Moins de bugs
- Préférez les versions officielles aux versions modifiées (p. ex. [Anaconda](https://www.anaconda.com/))
  - On n'installe que les outils nécessaires
- Préférez les gestionnaires de versions (nvm et pyenv) aux installations manuelles
  - Permet de gérer plusieurs versions en parallèle

:::

:::tip[Conseils pour Windows]

- Utilisez [Chocolatey](https://chocolatey.org/) pour installer les outils
- Utilisez [cmder](https://cmder.app/) comme terminal
  - Intégration avec [Windows Terminal](https://medium.com/talpor/windows-terminal-cmder-%EF%B8%8F-573e6890d143)
- Il est possible que vous deviez désactiver l'[alias d'exécution de Python](https://www.thewindowsclub.com/manage-app-execution-aliases-on-windows-10)

:::

### GitLab

- Créez un compte sur [GitLab](https://gitlab.com/) (si vous n'en avez pas déjà un)
  - Préférez un compte privé que vous utiliserez par la suite
- Créez un projet privé sur GitLab
  - Nom du projet : `HEIG-VD DevOps`
  - Identifiant du projet (laisser par défaut) : `heig-vd-devops`
- Ajoutez `blueur` comme membre du projet
  - Trouvez le bon [rôle](https://docs.gitlab.com/ee/user/permissions.html) qui permet voir tous les merge requests (MR) sans pouvoir pousser du code
- Protégez la branche `main`
  - Personne ne doit pouvoir pousser directement sur la branche
  - Seuls les mainteneurs peuvent fusionner des MR
- Clonez le répertoire sur votre machine
  - Vérifiez que vous ne pouvez pas pousser directement sur la branche `main`
- Créez une issue (ticket) dans le projet
  - Titre : `Rendu labo 01`
  - Assignez l'issue à vous-même
- Sur votre ordinateur, créez une nouvelle branche `feature/01-tools` et allez dessus
  - Créez un projet Vue 3 dans le dossier `/frontend`
    - https://vuejs.org/guide/quick-start.html#creating-a-vue-application
    - Depuis la racine du répertoire, exécutez `npm create vue@latest`
      - Project name: `frontend`
      - Add TypeScript? Yes
      - Add JSX Support? No
      - Add Vue Router for Single Page Application development? No
      - Add Pinia for state management? No
      - Add Vitest for Unit testing? No
      - Add an End-to-End Testing Solution? No
      - Add ESLint for code quality? Yes
      - Add Prettier for code formatting? Yes
    - Installez les dépendances avec `npm install`
    - Testez le serveur de développement avec `npm run dev`
  - Créez un commit avec les changements et poussez la branche sur GitLab
  - Créez un projet Poetry dans le dossier `/backend`
    - https://python-poetry.org/docs/basic-usage/#project-setup
    - Depuis la racine du répertoire, exécutez `poetry new backend`
    - Depuis le dossier `/backend`, installez [FastAPI](https://fastapi.tiangolo.com/)
      - https://fastapi.tiangolo.com/#installation
      - `poetry add fastapi uvicorn[standard]`
      - Créez un fichier `main.py` dans `/backend/backend` avec le code suivant ci-dessous
      - Testez le serveur de développement avec `poetry run uvicorn backend.main:app --reload`
      - Vous pourrez voir la documentation de l'API à l'adresse http://127.0.0.1:8000/docs
    - Ajoutez un fichier `.gitignore` adapté au projet
- Créez un commit avec les changements et poussez la branche sur GitLab
- Créez une MR pour fusionner votre branche dans `main`
  - Liez d'une façon ou d'une autre la MR à l'issue `Rendu labo 01`
  - Assignez la MR à vous-même
- Essayez l'outils de suivi du temps de GitLab pour vos estimations
  - `/estimate 2h` pour estimer le temps nécessaire pour la MR
  - `/spend 1h30` pour indiquer le temps réellement passé
- Cherchez quelles sont les bonnes pratiques pour un message de commit
  - Écrivez quelques mots sur les bonnes pratiques que vous avez trouvé dans votre rapport

```python title="/backend/backend/main.py" showLineNumbers
from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
```

### Bonus : Réécriture de Git

- Clonez le répertoire [Git Exercise](https://github.com/blueur/git-exercises)
- Faites les exercices indiqués dans le README
