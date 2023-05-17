//tipos primitivos : boolean , number , string
let ligado: boolean= false;
let nome: string="william";
let idade: number= 31;
let altura: number = 1.9;

//tipos especiais:null,undefined
let nulo: null = null;
let indefinido: undefined= undefined;

//tipos abrangentes: any , void
let retorno:void
let retornoView:any= false

//objetos - sem previsibilidade
let produto: object = {
    name: "william",
    cidade: "sp",
    idade: 31,
};

 //objeto tipado - com previsibilidade
 type ProdutoLoja = {
    nome: string;
    preco:number;
    unidades: number;
 };
  let meuProduto: ProdutoLoja = {
    nome:"Tenis",
    preco: 89.99,
    unidades: 5,
  };

  //arrays(vetor)- dois modelos para escreve-los sendoa primeira mais legivel
  let dados: string[] = ["william", "eliane", "sheila"];
  let dados2: Array<string> = ["william", "eliane", "sheila"];

  //array de multitipos que aceita numeros e textos

  let infos: (string / number)[] = ["william", 322];

  //Tuplas - em qual ordem e tipo a ser seguido como via de regra
  let boleto: [string, number, number] = ["conta de agua", 199.90,278378474];
   
  //metodos do array(ponto final para depois pop, Symbol e etc)

  dados.pop();

  //Datas --- interface para armazenar datas

  let aniversario:  Date = new Date("2023-02-17 05:00");
  console.log(aniversario.toString());

  //funçoes
  function addNumber(x: number, y: number): number {
    return x + y;
  }
  //sempre que usar "async" ele da uma promise e sempre tem que declarar
async function getDataBase(id: number): Promise<string> {
    return "william";
    
}

  let soma: number = addNumber(4, 7);
  console.log(soma);

  //interfaces ( type x interface)
  //TIPAR UMA VARIAVEL ESPECIFICA PARA AS PROPRIEDADES QUE ELA RECEBA SEMPRE SEJA A MESMA
  type robot = {
   readonly id:number / string;
    name: string;
  };

  //TRABALHAR COM CLASSE USA INTERFACE

  interface robot2{
   readonly id: number / string;
    name: string;
  }

  const bot: robot2{
    id:"1",
    name: "megaman",
  };

  // classes
   class Character {
    name: string;
    stregth: number;
    skill: number;

    constructor(stregth: number, skill: number){
      this.stregth = stregth;
      this.skill = skill;
    }

    attack(): void {
      console.log('attack with ${this.stregth} points');
    }
   }
   
   const p1 = new CharacterData(10,98);
   p1.attack();

   // modificadores de acesso -- public -- private -- protected
// o privado tem que passar pelo constructor dentro da classe opu sub classe para poder ser alterado ou adicionado
   class Character {
   */public private ou protected/ name: string;
    stregth: number;
    skill: number;

    constructor(name: string, stregth: number, skill: number){
      this.name = name;
      this.stregth = stregth;
      this.skill = skill;
    }

    //subclasse= exemplo personagem que tenha magia( o restante da estrutra é igual as outras ja feitas)
    //Character é o pai/ uma superclass
     class Magician extends Character{
      magicPoints: number;
      constructor(
        name: string, stregth: number, skill: number, magicPoints: number
      ){
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
      }
     }

    attack(): void {
      console.log('attack with ${this.stregth} points');
    }
   }
   
   const p1 = new Character("Ryu",10,98);
   const p2 = new Magician("mago", 09, 40,100);
   p1.skill= 12;

   //Genericos= deixa em aberto o tipo que depois vc vai definir como parametro

   function concatArray<T>(...itens: T[]): T []{
    return new Array().concat(...itens);
   }
    const numArray =concatArray<number[]>([1,5], [3]);
    const stgArray = concatArray<string[]>(["william", "goku"],["vegeta"]);

    console.log(numArray);
    console.log(stgArray);

    //decorators-   gatilho para uma ação 
    function ExibirNome(target: any){
      console.log(target);
    }
    
    @ExibirNome
    class Funcionario {}
    @ExibirNome
    class Quincas{}