"use strict";
/**
Перед вами список полів. Це можна сказати пряме посилання на кожне із полів форми.
Якщо ви додасте до змінної .value (fineNumber.value) то отримаєте значення
яке зберігається в цьому полі.
 */
let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

function validateFineNumberAndAmount() {
    let inputFineNumber = fineNumber.value;
    let inputAmount = parseInt(amount.value);

    let fine = DB.find(item => item.номер === inputFineNumber);

    if (!fine) {
        alert("Штраф з введеним номером не знайдено");
        return false;
    }

    if (fine.сума !== inputAmount) {
        alert("Сума штрафу не співпадає");
        return false;
    }

    return true;
}

// Функція для валідації паспортних даних
function validatePassport() {
    let inputPassport = passport.value;
    let passportRegex = /^[а-яА-Я]{2}\d{6}$/;

    if (!passportRegex.test(inputPassport)) {
        alert("Не вірний паспортний номер");
        return false;
    }

    return true;
}

// Функція для валідації номеру кредитної карти
function validateCreditCardNumber() {
    let inputCreditCardNumber = creditCardNumber.value;
    let creditCardRegex = /^\d{16}$/;

    if (!creditCardRegex.test(inputCreditCardNumber)) {
        alert("Не вірна кредитна картка");
        return false;
    }

    return true;
}

// Функція для валідації CVV
function validateCVV() {
    let inputCVV = cvv.value;
    let cvvRegex = /^\d{3}$/;

    if (!cvvRegex.test(inputCVV)) {
        alert("Не вірний CVV");
        return false;
    }

    return true;
}

function payFine(){
    if (!validateFineNumberAndAmount() ||
    !validatePassport() ||
    !validateCreditCardNumber() ||
    !validateCVV()) {
    return;
}

// Якщо валідація пройшла успішно, видаляємо об'єкт з масиву DB
let inputFineNumber = fineNumber.value;
let index = DB.findIndex(item => item.номер === inputFineNumber);
if (index !== -1) {
    DB.splice(index, 1); // Видаляємо штраф з масиву DB
    alert("Штраф оплачено успішно!");
} else {
    alert("Щось пішло не так. Штраф не був оплачений.");
}
}

buttonSubmit.addEventListener('click', payFine);