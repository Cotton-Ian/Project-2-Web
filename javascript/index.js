
/**
 * Display in the consol each theme and its title
 */
function ListCMD() {
    for (const key in quizzes) {
        console.log(key + " - " + quizzes[key].title)
    }
}

/**
 * add each theme in the form
 */
function AddThemeInForm() {
    let value = 0;
    for (const key in quizzes) {
        $("#theme").append('<option value="'+value+'">'+ quizzes[key].title +'</option>');
        value++;
    }
}

/**
 * Will be excecuted when some press the "Commencer" button, it will return the value of the theme of the quizz
 * @returns the value of the theme of the quizz
 */
function StartQuizz() {
    let value = $("#theme").val();
    $("#formtheme").hide();
    return value;
}


//HEEEEEEEEEEEEEELP
function DisplayTitle(val){
    $("main").append('<h3>'+ quizzes[val].title +'</h3>')
}

function test(val) {
    console.log(Object.keys(quizzes)[val]);
}

$(document).ready(function () {
    AddThemeInForm();
    $("#start").click(function(){
        let valeur = StartQuizz();
        DisplayTitle();
    })
}) 