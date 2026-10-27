/**
 * Multiplica dois números.
 * @param a primeiro número
 * @param b segundo número
 * @returns o resultado da multiplicação
 */
function multiplicar(a: number, b: number): number {
    return a * b;
}

/**
 * Retorna uma saudação para o nome informado.
 * @param nome nome da pessoa
 * @returns a frase "Olá " seguida do nome
 */
function saudar(nome: string): string {
    return "Olá " + nome;
}

console.log(multiplicar(6, 7)); // 42
console.log(saudar("Breno"));   // Olá Breno

// ---------- Extras vistos no módulo ----------

// Tipo customizado
type Id = number | string;

// Interface
interface Pessoa {
    id: Id;
    nome: string;
    idade?: number; // opcional
}

// Classe que implementa a interface, com modificador de acesso (encapsulamento)
class Aluno implements Pessoa {
    private notas: number[] = [];

    constructor(public id: Id, public nome: string) {}

    adicionarNota(nota: number): void {
        this.notas.push(nota);
    }

    media(): number {
        const soma = this.notas.reduce((total, nota) => total + nota, 0);
        return soma / this.notas.length;
    }
}

const aluno = new Aluno(1, "Breno");
aluno.adicionarNota(8);
aluno.adicionarNota(9);
console.log(`${saudar(aluno.nome)}, sua média é ${aluno.media()}`);

// O TypeScript impede erros de tipo. Esta linha, se descomentada, dá erro:
// multiplicar("2", 3);
