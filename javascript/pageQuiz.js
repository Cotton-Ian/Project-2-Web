let valeur = localStorage.getItem('valeur');

function DisplayTitle(){
     $("main").append('<h2>'+ quizzes[valeur].title +'</h2>');
     $("main").append('<h3>'+ quizzes[valeur].description +'</h3>');
}

function displayQuestionInConsole(tabThem) {
    for(let i = 0; i < tabThem.length; i++){
        console.log(tabThem[i].question);
    }
}

function displayQuizz() {
    //Tableau avec toutes les données du quizz sélectionné.
    let tabThem = quizzes[valeur].data; 


    let tabRep;
    let val;

    displayQuestionInConsole(tabThem); //Affichage question dans console

    $("main").append('<div id="QuestionReponse"></div>');

    for(let i = 0; i < tabThem.length; i++){

        val = i + 1;

        $("#QuestionReponse").append('<img src="'+tabThem[i].image+'"alt="image">');
        $("#QuestionReponse").append('<div id ="Question'+ val +'"> Question numéro '+ val +' : '+ tabThem[i].question +'</div');
        
        //Tabeau avec toutes les réponses possible pour la question i
        tabRep = tabThem[i].reponses;
    
        for(let j = 0; j < tabRep.length;j++){
            $("#Question"+val).append('<div class ="Reponse"> <input type="radio" id ="'+ tabRep[j] +'" name="choix'+ i +'" value="'+
             j +'"> <label for="'+ tabRep[j] +'">'+ tabRep[j] +'</label> </div>');
        }
        $("#QuestionReponse").append('<br>');
        
    }

    $("main").append('<button id="verification">Vérification</button>')
    $("#verification").click(function(){
        let resultat = verification();
        localStorage.setItem("res", resultat);
        openResultatPage();
    })

}

/**
 * Renvoie un tableau avec l'emplacement de chaque bonne réponse (cas où nb bonne rep = 1)
 * @returns tab avec l'emplacement de chaque bonne réponse pour chaque question (cas où une seule bonne réponse)
 */
function tabBonneRep() {
    let tableauBonneRéponse = [];
    for(let i = 0;i < quizzes[valeur].data.length;i++){
        tableauBonneRéponse.push(quizzes[valeur].data[i].bonneReponses[0]); //[0] car pour les cas où 1 bonne rep
    }
    return tableauBonneRéponse;
}

function tabRepChecked() {
    let tabRep = [];
    for(let i = 0;i < quizzes[valeur].data.length;i++){
        document.getElementsByName('choix'+i).forEach(radio => {
            if(radio.checked){
                tabRep.push(radio.value)
            }
        })
    }
    return tabRep;
}

function verification() {
    let tableauBonneRéponse = tabBonneRep();
    console.log(tableauBonneRéponse)
    let tabRep = tabRepChecked();
    console.log(tabRep);

    return tabRep;
}


//Will load the resultat page 
function openResultatPage() {
    window.open("resultat.html","_self");
}

$(document).ready(function () {
    DisplayTitle(valeur);
}) 