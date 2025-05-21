const prompt = require("prompt-sync")();

//jeu de quiz
//Afficher chaque question à l'utilisateur, suivi des options de réponse.
// Attendre l'entrée de l'utilisateur pour sélectionner sa réponse.
// Valider la réponse de l'utilisateur et afficher un message approprié (correct/incorrect) 
// Attribuer un point au joueur pour chaque réponse correcte.
// Calculer et afficher le score final du joueur à la fin du quiz.
//Guider l'utilisateur tout au long du jeu avec des messages informatifs et des invitations à répondre.
//Gérer les erreurs d'entrée utilisateur, par exemple, si l'utilisateur entre un choix incorrect ou
// une réponse non valide.
//Code source du jeu doit être correctement commenté et structuré.
// Le jeu doit être capable de gérer des erreurs d'entrée utilisateur et de guider l'utilisateur
// pour qu'il fasse un choix valide.

let tab = [
    {
        question: "Quelle était la monnaie utilisée dans la cité phocéenne de Massilia durant l’Antiquité ?",
        answer: ["A- Le denier", "B- La drachme massaliote", "C- L’obole", "D- L’as romain"],
        goodAnswer: "B" //"La drachme massaliote"
    },
    {
        question: "Quel roi de France a ordonné la construction du Fort Saint-Nicolas pour surveiller Marseille ?",
        answer: ["A- Louis XIII", "B- François Ier", "C- Henri IV", "D- Louis XIV"],
        goodAnswer: "A" //"Louis XIV"
    },
    {
        question: "Quel événement historique a entraîné l’exécution du maire de Marseille, Jean-Baptiste Estelle, en 1794 ?",
        answer: ["A- La révolte des Tuiles", "B- L’expédition de Bonaparte en Égypte", "C- La Terreur sous la Révolution française", "D- La guerre de la Ligue du Midi"],
        goodAnswer: "C" //"La Terreur sous la Révolution française"
    },
    {
        question: "Quel écrivain du XIXe siècle, né à Marseille, est l’auteur du roman Le Comte de Monte-Cristo ?",
        answer: ["A- Stendhal", "B- Honoré de Balzac", "C- Alexandre Dumas", "D- Alphonse Daudet"],
        goodAnswer: "C" // "Alexandre Dumas"
    },
    {
        question: "Quel célèbre acteur marseillais a incarné Marius dans le film de 1931 adapté de l’œuvre de Marcel Pagnol ?",
        answer: ["A- Raimu", "B- Pierre Fresnay", "C- Fernandel", "D- Jules Muraire"],
        goodAnswer: "B" //"Pierre Fresnay"
    },
]
// stocke les points du joueur
let points = 0

// vérifie si le joueur a bien mis "a, b, c ou d"
function falseResponse(trueResponse) {
    if (trueResponse !== "a" && trueResponse !== "b" && trueResponse !== "c" && trueResponse !== "d") {
        console.log("Oupsss, il faut entrer un caractère valide (A, B, C ou D)")
        return true
    }
    return false
}
console.log("Hey, je t'invite à un quiz sur Marseille. La consigne est très simple: il suffit d'entrer la lettre correspondant à ta réponse. C'est parti!");

//parcours les questions
for (let i = 0; i < tab.length; i++) {
    console.log(tab[i].question); 

//affiche les réponses
    for (let j = 0; j < tab[i].answer.length; j++) {
        console.log(tab[i].answer[j]);
    }
    
    let trueResponse = prompt("A ton avis, quelle est la bonne réponse? ").toLowerCase(); //minuscule pour ne pas avoir de conflit

    while (falseResponse(trueResponse)) {
        trueResponse = prompt("Merci d'entrer ta réponse : A, B, C, D ").toLowerCase();
    }

    if (trueResponse.toUpperCase() === tab[i].goodAnswer) {
        console.log("Félicitations, tu viens de gagner 1000 points!");
        points++;
    } else {
        console.log("Oupsss, dommage! Tu as eu faux! La bonne réponse était " + tab[i].goodAnswer.toUpperCase());
    }
}

console.log("Ton score total est de " + points + " Bravo !");
console.log("Quiz terminé, plié, bye bye, camarade !");







