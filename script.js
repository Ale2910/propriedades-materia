

/* >> HTML << */

// Configurando as divs
const divs = {
    input: window.document.getElementById('input'),
    
    // Preferences no HTML tá como 'propriedades'
    preferences: window.document.getElementById('preferences'),
    
    res: window.document.getElementById('res'),
    medidas: window.document.getElementById('medidas')
}


// Configurando os inputs
const inputs = window.document.getElementsByClassName('num')


// Configurando os botões
const buttons = {
    calc: window.document.getElementById('calcButton'),
    clear: window.document.getElementById('clearButton')
}

buttons.calc.onclick = calcular
buttons.clear.onclick = limpar
// ======================================================= //

// Configurando os radios
const radios = {
    preferences: window.document.getElementsByName('rad'),
    medidas: window.document.getElementsByName('rad2')
}

// Configurando os radios das preferências
radios.preferences[0].onchange = radioDensidade
radios.preferences[1].onchange = radioMassa
radios.preferences[2].onchange = radioVolume
// ======================================================= //

// Declarando alguns valores
let densidade = ''
let massa = ''
let volume = ''

// O padrão tem que ser densidade
let propriedade = 'densidade'


/* >> Funções << */

// Essas funções vão mudar a fórmula que aparece na página
function radioDensidade() {

    divs.input.innerHTML = `<strong>Informe:</strong> <br>
                            D = massa / volume <br>
                            D = <input type="number" class="num"> / <input type="number" class="num">`

    // Mostrando as medidas
    divs.medidas.style.display = 'block'

    propriedade = 'densidade'
}

function radioMassa() {

    divs.input.innerHTML = `<strong>Informe:</strong> <br>
                            M = densidade * volume <br>
                            M = <input type="number" class="num"> / <input type="number" class="num">`

    /* Ocultando as medidas
       pois a massa é só grama
    */
    divs.medidas.style.display = 'none'
    
    propriedade = 'massa'
}

function radioVolume() {

    divs.input.innerHTML = `<strong>Informe:</strong> <br>
                            V = massa / densidade <br>
                            V = <input type="number" class="num"> / <input type="number" class="num">`


    divs.medidas.style.display = 'block'

    propriedade = 'volume'
}

// ======================================================= //


/* >> Mais funções << */

function calcular() {

    // Pegando os valores dos inputs
    const inputsValues = [inputs[0].value, inputs[1].value]


    // Verificando se algum input está vazio
    if(inputsValues[0].length === 0 || inputsValues[1].length === 0) {
        
        return window.alert('Preencha todos os campos!')
    }

    // ======================================================= //

    // Adicionando informações na div
    if(propriedade === 'densidade') {

        console.log('propriedade densidade!')

        divs.res.innerHTML = 'A densidade é: <br>'
    }


    // Radio: densidade
    if(radios.preferences[0].checked) {

        // Atribuindo valores
        massa = Number(inputsValues[0])
        volume = Number(inputsValues[1])

        // Obtendo um valor
        densidade = massa / volume


        if(radios.medidas[0].checked) {

            divs.res.innerHTML += `${densidade}ml`
        }

        if(radios.medidas[1].checked) {

            divs.res.innerHTML += `${densidade}cm³`
        }
    }
    //


    if(propriedade === 'massa') {

        divs.res.innerHTML = 'A massa é: <br>'
    }

    // Radio: massa
    if(radios.preferences[1].checked) {

        // Atribuindo valores
        massa = Number(inputsValues[0])
        densidade = Number(inputsValues[1])

        // Obtendo um valor
        massa = densidade * volume


        // Colocando na div
        divs.res.innerHTML += massa
    }
    //


    if(propriedade === 'volume') {

        divs.res.innerHTML = 'O volume é: <br>'
    }

    // Radio: volume
    if(radios.preferences[2].checked) {
    
        // Atribuindo valores
        massa = Number(inputsValues[0])
        volume = Number(inputsValues[1])

        // Obtendo um valor
        volume = massa / densidade

        // Colocando na div
        divs.res.innerHTML += volume
    }
}


function limpar() {

    // Limpando os inputs
    inputs[0].value = ''
    inputs[1].value = ''

    // Focando no 1º
    inputs[0].focus()

    // 'Limpando' a div de resultados
    divs.res.innerHTML = 'Limpo!'
}

// ======================================================= //