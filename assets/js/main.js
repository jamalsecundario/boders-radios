let cdBorda = document.querySelector('#cimaD')
let ceBorda = document.querySelector('#cimaE')
let bdBorda = document.querySelector('#baixoD')
let beBorda = document.querySelector('#baixoE')

let texto = document.querySelector('#texto')


let quadrado = document.querySelector('#quadrado')

let container = document.querySelector('.container')

let altura = document.querySelector('#altura')
let largura = document.querySelector('#largura')

let altu = ""
function quadAlt(){
    altu = (altura.value).toString()
    padrao()
    quadrado.style.width = altu + "px "
    texto.value = `border-radius:  ${ce}px ${cd}px ${bd}px ${be}px; \n width: ${altu}px; \n height: ${larg}px;`}

let larg = ""
function quadLar(){
    larg = (largura.value).toString()
    padrao()
    quadrado.style.height= larg + "px "
    texto.value = `border-radius:  ${ce}px ${cd}px ${bd}px ${be}px; \n width: ${altu}px; \n height: ${larg}px;`}
let cd = ""
let ce = ""
let bd = ""
let be = ""

function cdborda() {
    cd = (cdBorda.value).toString()
    quadrado.style.borderTopRightRadius = cd + "px "
    padrao()
    texto.value = `border-radius:  ${ce}px ${cd}px ${bd}px ${be}px; \n width: ${altu}px; \n height: ${larg}px;`
}
function ceborda() {
    ce = (ceBorda.value).toString()
    quadrado.style.borderTopLeftRadius = ce + "px "
    padrao()
    texto.value = `border-radius:  ${ce}px ${cd}px ${bd}px ${be}px; \n width: ${altu}px; \n height: ${larg}px;`
}
function bdborda() {
    bd = (bdBorda.value).toString()
    quadrado.style.borderBottomRightRadius = bd + "px "
    padrao()
    texto.value = `border-radius:  ${ce}px ${cd}px ${bd}px ${be}px; \n width: ${altu}px; \n height: ${larg}px;`
}
function beborda() {
    be = (beBorda.value).toString()
    quadrado.style.borderBottomLeftRadius = be + "px "
    padrao()
    texto.value = `border-radius:  ${ce}px ${cd}px ${bd}px ${be}px; \n width: ${altu}px; \n height: ${larg}px;`
}

function padrao() {
    if (altu == "") {
        altu = "300"
    }
    if (larg == "") {
        larg = "300"
    }
    if (cd == "") {
        cd = "0"
    }
    if (ce == "") {
        ce = "0"
    }
    if (bd == "") {
        bd = "0"
    }
    if (be == "") {
        be = "0"
    }
}

    


