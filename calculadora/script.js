function calculadora(){
    const operaçao = Number(prompt('1 - Somar (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*) \n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6- Potênciação (**)\n'))


        if (!operaçao || operaçao >= 7){
            alert('ERRO no SIsTeMa') //SE ESCREVER UM NÚMERO MAIOR QUE 7 INVÁLIDA E VOLTA PARA A CALCULADORA
            calculadora()        
        }else{ // SE NÃO, ACEITA O CÓDIGO
            
            function somar(){
            resultado = n1 + n2
            alert(`${n1} + ${n2} = ${resultado}`)
            novaop()
            }
            
            let n1 = Number(prompt('Número 1'))// (NUMBER) VÁLIDAR O NÚMERO COMO NÚMERO E NO STRING
            let n2 = Number(prompt('Número 2'))
            let resultado 

           
            if (!n1 || !n2){ //SE ESCREVER UM NÚMERO ACEITA, SE FOR LETRA ERRO
                alert('ERRO, Parâmetros inválidos!')
                calculadora()
            }else{ // SE NÃO, REALIZA A FUNÇÃO
                    function subtracao(){
                        resultado = n1 - n2
                        alert(`${n1} - ${n2} = ${resultado}`)
                        novaop()
                    }
                    function multiplicacao(){
                        resultado = n1 * n2
                        alert(`${n1} x ${n2} = ${resultado}`)
                        novaop()
                    }
                    function divisaoReal(){
                        resultado = n1 / n2
                        alert(`${n1} / ${n2} = ${resultado}`)
                        novaop()
                    }   
                    function divisaoInteira(){
                        resultado = n1 % n2
                        alert(` O resto da divisão é : ${resultado}`)
                        novaop()
                    }function potenciacao(){
                        resultado = n1 ** n2
                        alert(`O númeor ${n1} elevado a ${n2}ª é igual a : ${resultado}`)
                        novaop()
                    } 

        function novaop(){
            const novaoperacao = Number(prompt('Deseja Realizar uma nova operação: \n 1 - Sim \n 2 - Não'))

            if (novaoperacao == 1){ //SE A RESPOSTA FOR 1 - SIM, VOLTA PARA A CALCULADORA
                calculadora()
            }else if (novaoperacao == 2){ // SENÃO SE 2 - NÃO, BYE BYE
                alert('Até mais')
            }else{ // SENÃO, SERÁ REFEITO A PERGUNTA
                ('ERRO, opção inválida!')
                novaop()
            }
            
        }

        //PRIMEIRA OPÇÃO
        /*if (operaçao == 1){
            somar();
        }else if(operaçao == 2){
            subtracao();
        }else if (operaçao == 3){
            multiplicacao();
        }else if (operaçao == 4){
            divisaoReal ();
        }else if (operaçao == 5){
            divisaoInteira();
        }else if (operaçao == 6) {
            potenciacao();     
        }*/
        
        //SEGUNDA OPÇÃO
        switch(operaçao){
            case 1: 
                somar();
                break;
            case 2 :
                subtracao();
                break;
            case 3:
                multiplicacao();
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6 :
                potenciacao();
                break;
        }

        }
    
    }
}
calculadora()


