const articles = [
    "Orangina",
    "Creme Fraiche",
    "Tartiflette",
    "Emmental",
    "Bananes",
    "Chips",
    "Bieres",
    "Pizza"
];

// Afficher la liste de course

const listeCourse = document.getElementById('liste-course');
const textListeCourse = document.getElementById('text-liste-course');

function updateList() {
    
    articles.forEach(function(item) {
        const li = document.createElement('li');
        li.innerHTML = item;
        listeCourse.appendChild(li);
    
        const masquerbtn = document.createElement('button');
        masquerbtn.innerHTML = "Masquer";
        masquerbtn.classList = "btn btn-danger"
        li.appendChild(masquerbtn);
    
        masquerbtn.addEventListener('click', function() {
            li.style.display = "none";
        })
    });
    updateTextList();
};

updateList();

// Ajouter un article 

const submit = document.getElementById('submit');

submit.addEventListener('click', function() {
    const newArticle = document.getElementById('input').value;
    
    if(newArticle) {
        listeCourse.innerHTML = "";
        articles.push(newArticle);
        updateList();
    }
});

// Supprimer le dernier article

const deleteLastArticle = document.getElementById('delete-last-article');

deleteLastArticle.addEventListener('click', function() {
    listeCourse.innerHTML = "";
    articles.pop();
    updateList();
});

// Texte affichant le contenu de la liste de course 

function updateTextList() {
    textListeCourse.innerHTML = `Voici la liste de course :  ${articles.join(', ')}`;
};



// CHERCHER UN ELEMENT DANS UN TABLEAU

// document.getElementById('submit-recherche').addEventListener('click', function() {
//     const articleInInput = document.getElementById('recherche').value;
//     const articleVoulue = articles.filter((articles) => articles === articleInInput);
//     listeCourse.innerHTML = `<li>${articleVoulue}<button>Masquer</button></li>`;
// })