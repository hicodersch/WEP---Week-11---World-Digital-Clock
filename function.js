/**
 * Tokyo saatini döndürür
 */
function showTokyoClock() {
    let dateTime = new Date().toLocaleString("en-UK", {
        timeZone: "Asia/Tokyo"
    });
    calculateClock(dateTime);
    let clockOfTokyo = renderInHtml();
    return clockOfTokyo;
}

/**
 * New York saatini döndürür
 */
function showNewYorkClock() {
    let dateTime = new Date().toLocaleString("en-UK", {
        timeZone: "america/new_york"
    });
    calculateClock(dateTime);
    let clockOfNewYork = renderInHtml();
    return clockOfNewYork;
}

/**
 * Zurich saatini döndürür
 */
function showZurichClock() {
    let dateTime = new Date().toLocaleString("en-UK", {
        timeZone: "Europe/Zurich"
    });
    calculateClock(dateTime);
    let clockOfZurich = renderInHtml();
    return clockOfZurich;
}

/**
 * Saati, dakikayi ve saniyeyi döndürür
 * @param {Date} pDateTime 
 */
function calculateClock(pDateTime) {
    pDateTime = new Date(pDateTime);
    hour = addZero(pDateTime.getHours());
    minute = addZero(pDateTime.getMinutes());
    second = addZero(pDateTime.getSeconds());
}

/**
 * Saati htmle yazdirir
 */
function renderInHtml() {
    return document.getElementById('digital').innerHTML = hour + ":" + minute + ":" + second;
}

/**
 * Fonksiyonu 1 saniye araliklarla calistirir.
 * @param {Funtion} pFunction 
 */
function setTimer(pFunction) {
    return setInterval(pFunction, 1000);
}

/**
 * Tek haneli sayilarin basina 0 ekler
 */
function addZero(pTime) {
    let zeroTime = pTime.toString().padStart(2, '0');
    return zeroTime;
}