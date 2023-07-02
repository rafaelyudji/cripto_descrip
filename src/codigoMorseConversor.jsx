import React, { useState } from 'react';

const ConversorCodigoMorse = () => {
    const [textoEntrada, setTextoEntrada] = useState('');
    const [codigoMorse, setCodigoMorse] = useState('');
    const [textoConvertido, setTextoConvertido] = useState('');

    const mapaCodigoMorse = {
        A: '.-',
        B: '-...',
        C: '-.-.',
        D: '-..',
        E: '.',
        F: '..-.',
        G: '--.',
        H: '....',
        I: '..',
        J: '.---',
        K: '-.-',
        L: '.-..',
        M: '--',
        N: '-.',
        O: '---',
        P: '.--.',
        Q: '--.-',
        R: '.-.',
        S: '...',
        T: '-',
        U: '..-',
        V: '...-',
        W: '.--',
        X: '-..-',
        Y: '-.--',
        Z: '--..',
        a: '.-',
        b: '-...',
        c: '-.-.',
        d: '-..',
        e: '.',
        f: '..-.',
        g: '--.',
        h: '....',
        i: '..',
        j: '.---',
        k: '-.-',
        l: '.-..',
        m: '--',
        n: '-.',
        o: '---',
        p: '.--.',
        q: '--.-',
        r: '.-.',
        s: '...',
        t: '-',
        u: '..-',
        v: '...-',
        w: '.--',
        x: '-..-',
        y: '-.--',
        z: '--..',
        '0': '-----',
        '1': '.----',
        '2': '..---',
        '3': '...--',
        '4': '....-',
        '5': '.....',
        '6': '-....',
        '7': '--...',
        '8': '---..',
        '9': '----.',
        '.': '.-.-.-',
        ',': '--..--',
        '?': '..--..',
        "'": '.----.',
        '!': '-.-.--',
        '/': '-..-.',
        '(': '-.--.',
        ')': '-.--.-',
        '&': '.-...',
        ':': '---...',
        ';': '-.-.-.',
        '=': '-...-',
        '+': '.-.-.',
        '-': '-....-',
        '_': '..--.-',
        '"': '.-..-.',
        $: '...-..-',
        '@': '.--.-.',
        ' ': '/',
    };

    const converterParaCodigoMorse = () => {
        let convertido = '';
        const textoMaiusculo = textoEntrada.toUpperCase();
        for (let i = 0; i < textoMaiusculo.length; i++) {
            const caractere = textoMaiusculo[i];
            if (caractere in mapaCodigoMorse) {
                convertido += mapaCodigoMorse[caractere] + ' ';
            }
        }
        setCodigoMorse(convertido.trim());
        setTextoConvertido('');
    };

    const converterParaTexto = () => {
        let convertido = '';
        const palavrasCodigo = codigoMorse.trim().split(' ');
        for (let i = 0; i < palavrasCodigo.length; i++) {
            const palavraCodigo = palavrasCodigo[i];
            for (const [chave, valor] of Object.entries(mapaCodigoMorse)) {
                if (valor === palavraCodigo.toLowerCase()) {
                    convertido += chave;
                    break;
                }
            }
        }
        setTextoConvertido(convertido);
        setCodigoMorse('');
    };

    return (
        <div className="container">
            <h1>Conversor de Código Morse</h1>
            <textarea
                className="input"
                value={textoEntrada}
                onChange={(e) => setTextoEntrada(e.target.value)}
                placeholder="Digite o texto para converter"
            />
            <div className="button-container">
                <button className="button" onClick={converterParaCodigoMorse}>Converter para Código Morse</button>
                <button className="button" onClick={converterParaTexto}>Converter para Texto</button>
            </div>
            {codigoMorse && (
                <div>
                    <p className="label">Código Morse:</p>
                    <p className="result">{codigoMorse}</p>
                </div>
            )}
            {textoConvertido && (
                <div>
                    <p className="label">Texto Convertido:</p>
                    <p className="result">{textoConvertido}</p>
                </div>
            )}
        </div>
    );
};

export default ConversorCodigoMorse;
