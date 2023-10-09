import { createEndPoint } from "./api/endPoint.controller.js";


const estado = document.getElementById("status");
const method = document.getElementById("method");
const contentType = document.getElementById("contentType");
const charset = document.getElementById("charset");
const header = document.getElementById("headers");
const body = document.getElementById("body");
const url = document.getElementById("url");
const nombre = document.getElementById("nombre");
const descripcion = document.getElementById("description");
const timeDemora = document.getElementById("timeDemora");
const cbxJWT = document.getElementById("cbxJWT");
const timeExpired = document.getElementById("timeExpire");
const btnSend = document.getElementById("btnSend");



btnSend.addEventListener("click", (e) => {
    e.preventDefault();

    const request = {
        estado: estado.value,
        method: method.value,
        contentType: contentType.value,
        charset: charset.value,
        header: header.value,
        body: body.value,
        url: url.value,
        nombre: nombre.value,
        descripcion: descripcion.value,
        timeDemora: timeDemora.value,
        cbxJWT: cbxJWT.checked, // Si es un checkbox, obtén el estado "checked"
        timeExpired: timeExpired.value,
    }

    createEndPoint(request);


})

