const soap = require('soap');
const url = 'http://www.dneonline.com/calculator.asmx?WSDL';
const args = process.argv.slice(2);

function operation(url, intA, intB, operation) {
    
    const nums = {
        intA,
        intB
    }

    if(operation === 'adicionar'){
        soap.createClient(url, (erro, cliente) =>{
            if(erro)return console.error(erro);
            cliente.Add(nums, (err,result)=> {
                console.log('Resultado da adição: ', result.AddResult)
            })
        })
    }

    if(operation === 'subtrair'){
        soap.createClient(url, (erro, cliente) =>{
            if(erro)return console.error(erro);
            cliente.Subtract(nums, (err,result)=> {
                console.log('Resultado da subtração: ', result.SubtractResult)
            })
        })
    }

    if(operation === 'multiplicar'){
        soap.createClient(url, (erro, cliente) =>{
            if(erro)return console.error(erro);
            cliente.Multiply(nums, (err,result)=> {
                console.log('Resultado da multiplicação: ', result.MultiplyResult)
            })
        })
    }

    if(operation === 'dividir'){
        soap.createClient(url, (erro, cliente) =>{
            if(erro)return console.error(erro);
            cliente.Divide(nums, (err,result)=> {
                console.log('Resultado da divisão: ', result.DivideResult)
            })
        })
    }
}

operation(url, parseInt(args[0]), parseInt(args[1]), args[2]);