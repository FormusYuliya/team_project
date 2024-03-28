"use strict";
window.fineList = {
    searchFines : searchFines
}

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

function searchFines(searchKey){
    
    let foundFines = [];
    
    // Отримуємо дані про штрафи з файлу script.js
    let finesData = window.data.finesData;

    for (let i = 0; i < finesData.length; i++) {
        let fine = finesData[i];

        if (fine.номер === searchKey || fine.тип === searchKey) {
            foundFines.push(fine);
        }
    }

    return foundFines;
}

