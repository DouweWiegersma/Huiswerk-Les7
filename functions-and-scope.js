// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.
let cumLaude = 0
const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 8) {
            cumLaude++

        }
}

// console.log(cumLaude)
/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat? lenght methode
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.
// ---- Verwachte uitkomst: 6



/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.
// let cumLaude = 0
const nordwinCollege = [6, 4, 5];
const noviHogeschool = [8, 9, 4, 6, 10];

function studentCumLaude(school){
    let cumLaude = 0
    for (let i = 0; i < school.length; i++){
        if (school[i] >= 8){
            cumLaude++

        }
    }
    return cumLaude
}
console.log(studentCumLaude(noviHogeschool));
console.log(studentCumLaude(nordwinCollege));
console.log(studentCumLaude(grades));




// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3




/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.
//  1. alles bij elkaar opgeteld / door aantal cijfers
//  2. we moeten het aantal cijfers in de lijst verzamelen en we moeten alles bij elkaar optellen
//  3. met een for-loop length

// ---- Verwachte uitkomst: 6.642857142857143
let total = 0
for (let i = 0; i < grades.length; i++) {
    total += grades[i] / grades.length




}
console.log(total)

/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft 5
// averageGrade([8, 9, 4, 6, 10]) geeft 7.4
function averageGrade(grade, school) {
    let averageGrades = 0
    for (let i = 0; i < grade.length; i++) {
        averageGrades += grade[i] / grade.length
    }
    return "Het gemiddelde cijfer van " + school + "is een " + averageGrades.toFixed(2)
}
console.log(averageGrade(grades, "grades "));
console.log(averageGrade(noviHogeschool, "Novi Hogeschool "));
console.log(averageGrade(nordwinCollege, "Nordwin College "));


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
//  Doormiddel van een for loop
// * Op welke conditie moet ik checken?
//
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.
let highestGrade = 0
for (let i = 0; i < noviHogeschool.length; i++){
    if (noviHogeschool[i] > highestGrade){
        highestGrade = noviHogeschool[i]
    }
}
console.log(highestGrade);

// ---- Verwachte uitkomst: 9
function highestGrades(school, schoolName){
    let highestscore = 0
    for (let i = 0; i < school.length; i++){
        if (school[i] > highestscore){
            highestscore = school[i]
        }
    }
    return "Het hoogste cijfer op het " + schoolName + " is een " + highestscore
}
console.log(highestGrades(grades, "Grades College"));
console.log(highestGrades(nordwinCollege, "Nordwin College"));
console.log(highestGrades(noviHogeschool, "Novi Hogeschool"));
/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
