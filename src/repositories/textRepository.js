'use strict'

exports.counterWord = async(text) => {
    // função do javascript para separar string
    const words = await text.split(' ');
    // declaração de um objeto vazio
    let counts = {};

    /* função de foreach pronta do EcmanScript 6. 
    Retorna uma lógica simples de contagem de índices gerados pelo split
    e armazenados na constante word
    */
    words.forEach((x) => {
        counts[x] = (counts[x] || 0)+1;
    });
    
    return counts;
};

exports.counterSentences = async(text) => {
    const words = await text.split(' ');
    // array filter para capturar as sentencas em uma string
    let endingWords = words.filter(function(w) {
        return w.endsWith('.') || w.endsWith('!') || w.endsWith('?');
    });

    // separando o primeiro índice do array gerado anteriormente "words"
    let word = words[0];
    let sentences = [];

    /* 
    logica utilizando do reduce para criarmos o primeiro indice do array sentences 
    a partir do array de palavras "words".
    */
    words.reduce((a, b) => {
    /* 
    injetamos dado no array sentence apenas onde se encontra índices 0 e 1
    em sequência seria onde encontramos a palavra "mundo!" e "mundo." que são
    as duas palavras finais de cada sentença, palavras que foram filtradas e
    armazenadas na variável "endingWords". Após encontrar o 0 é armazenado 
    de 0 até 0 assim formando e armazenando a sentença "Olá mundo!".
    */
    if (endingWords.indexOf(a) != -1) {
        sentences.push(word);
        word = "";
    }
    
    /* 
    Interprete esta parte do codigo como uma especia de else.
    Tudo que sobrar da condicao acima dentro do laco do reduce
    se torna a segunda sentenca. A melhor maneira para entender
    esta logica seria: tudo que for diferente de -1 pode ser igual a 0 ou maior.
    O que for igual a 0 se torna a primeira sentença e o que for igual a 1 se torna este Else aqui, 
    ou seja a Segunda sentenca
    */
    word = word + " " + b;
    return b;
    });

    /* 
    Injetamos a segunda sentenca no array somente aqui pois dentro do
    laco do recude seria completamente inviavel realizar essa operacao.
    Armazenaria varios trechos de segundas sentencas até armazenar o dado
    por inteiro. Teriamos a primeira sentenca Ok mas a segunda nao.
    */
    sentences.push(word);

    // abaixo o foreach apresentado na resolucao do primeiro desafio
    let counts = {};
    sentences.forEach((x) => {
        counts[x] = (counts[x] || 0)+1;
    });
    return counts;
};

exports.textReverse = async(text) => {
    // funcoes nativas do javascript
    return text.split('').reverse().join('');
};

exports.textApart = async(text, size) => {
    /* 
    A expressão regular "yardstick" corresponde repetidamente a quaisquer caracteres em extensões de comprimento "size", colocando-os na matriz pieces.
    */
    const yardstick = new RegExp(`.{${size}}`, 'g');
    const pieces = text.match(yardstick);
    /*
    Obtenha o tamanho total da string na variável "accumulated" e determine se há algum resto na variável "rest".
    */
    const accumulated = (pieces.length * size);
    const rest = text.length % accumulated;
    /*
    Se houver resto e couber na condicao abaixo adicione espaços em branco com o repeat multiplicado pelo valor do resto.
    */
    const whiteSpace = size - rest; 
    if (rest < size && rest != 0) pieces.push(text.slice(accumulated) + ' '.repeat(whiteSpace));
    return pieces;
};

exports.textOut = async(text, words) => {
    for (let index = 0; index < words.length; index++) {
        text = text.split(words[index]).join('#'.repeat(words[index].length));
    }
    return text
};