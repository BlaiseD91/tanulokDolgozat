/*
* File: tanulokService.js
* Author: Székely Balázs Csaba
* Copyright: 2024, Székely Balázs Csaba
* Group: SZOFT II/1/E
* Date: 2024-04-09
* Github: https://github.com/BlaiseD91
* Licenc: GNU GPL
*/

const host = 'http://localhost:8001/';
const endpoint = 'students';

export async function getTanulok() {
    const url = host + endpoint;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}