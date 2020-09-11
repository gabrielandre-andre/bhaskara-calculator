const readline = require('readline-sync');


//Delta = b²-4*a*c
//X1 | X2 == -b + R-Delta / 2*a

const content = {}

const calcContent = {}

const errorLog = {}

function init(){
    
    function questions(){
        console.log('')
        content.a = readline.questionInt('Qual o valor de A? ')
        console.log('')

        content.b = readline.questionInt('Qual o valor de B? ')
        console.log('')

        content.c = readline.questionInt('Qual o valor de C? ')
        console.log('')

    }

    questions()


    function calcD(){

        calcContent.delta = (content.b ** 2) - (4 * content.a * content.c)

    }

    calcD()


    function Calc(){
        if(calcContent.delta < 0){
            console.log('Inválido!')
            errorLog.erro = 'Delta Negativo'
        }else{

            errorLog.erro = "No error"

            calcContent.result1 = (-(content.b) + Math.sqrt(calcContent.delta)) / (2 * content.a)
            calcContent.result2 = (-(content.b) - Math.sqrt(calcContent.delta)) / (2 * content.a)

        }
    }

    Calc()
}




init()

console.log(content)

console.log(calcContent)





console.log(`{ERROR:} ${errorLog.erro}`)
