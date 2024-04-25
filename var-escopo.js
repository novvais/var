{ //No Escopo o que você criar fora você pode usar dentro, mas quando você criar dentro não consegue usar fora
    let idade = 19;
    {
        console.log(idade)
    }
}
/*{
let idade = 19;
}
console.log(idade); Não Funciona */

/*
let idade = 19;
{
    console.log(idade); Funciona
} */

