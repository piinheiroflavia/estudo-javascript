const alunos =[
    {
        nome: 'João',
        nota: 5,
        terma: '1B',
    },
    {
        nome: 'Sofia',
        nota: 9,
        terma: '1B',
    },
    {
        nome: 'Paulo',
        nota: 4 ,
        terma: '2C',
    },

];


function alunosp (arr, media){
    let aprovados  = [];

    for(let i = 0; i < arr.length; i++ ){

    const {nota, nome} = arr[i];
    
        if (nota >= media){
            aprovados.push(nome) ;
        

        }
        
    }return aprovados;
}
console.log(alunosp (alunos, 5));

