Quiz sur Marseille (Node.js)

Ce projet est un quiz culturel sur Marseille, conçu pour être joué dans le terminal à l'aide de Node.js.

Fonctionnement technique : 

- Le jeu est codé en JavaScript et s’exécute en ligne de commande.
- Il utilise le module `prompt-sync` pour interagir avec l'utilisateur via la console (`require("prompt-sync")()`).
- Les questions sont stockées dans un tableau d’objets, chaque objet contenant :
  - la `question`
  - un tableau de `réponses possibles` (A, B, C, D)
  - la `bonne réponse` (`goodAnswer`)
- Une boucle `for` parcourt chaque question, affiche les options et attend une réponse valide (A–D).
- Une fonction `falseResponse()` permet de valider les entrées utilisateur et gérer les erreurs (ex : mauvaise lettre).
- Le score est comptabilisé avec la variable `points`, incrémentée à chaque bonne réponse.
- À la fin du quiz, le score total est affiché.

Améliorations possibles :

- Ajouter un mode multijoueur (joueur contre joueur)
- Enregistrer un classement des scores avec les noms des joueurs
- Ajouter un système de niveaux ou de difficulté
- Ajouter un chronomètre pour limiter le temps de réponse
- Créer une interface web avec HTML/CSS
