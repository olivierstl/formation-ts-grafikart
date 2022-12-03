# Premiers pas en TypeScript

[Formation TypeScript](https://grafikart.fr/formations/typescript) par le bro Grafikart. 💜

## Installer

Lancer la commande `npm install typescript -D`.

## Compiler

- `npx tsc nom-du-fichier`: compile le fichier `.ts` en fichier `.js` dans le répertoire courant
- `npx tsc nom-du-fichier --outDir nom-du-repertoire`: compile le fichier `.ts` en fichier `.js` dans le répertoire visé
- `npx tsc ... --watch`: flag qui permet à la commande d'observer les modifications de notre code

Ces commandes servent s'il n'y au aucun fichier de configuration `tsconfig.json` présent à la racine du projet. Si un fichier de configuration de TS est présent:

- `npx tsc (--watch)`: va lancer typescript selon la configuration précisée

## tsconfig.json

- `compilerOptions`: objet des paramètres de compilation
  - `outDir`: correspond à l'option `--outDir`. Répertoire de sortie
  - `target`: version de JS vers laquelle le fichier est compilé
  - `noEmitOnError`: ne compile pas le code en cas d'erreur,
  - `strict`: plus haut niveau d'exigeance de TS ([doc](https://www.typescriptlang.org/tsconfig#strict))
- `files`: tableau des objets à compiler

## Typer correctement

### Les types de base

```typescript
const s:string = 'Hello world'
const n:number = 42
const b:boolean = false
const d: null = null
const arr: string[] = ['hello', 'world']
const user: { firstname: string, lastname?: string } = { firstname: 'John', lastname: 'Doe (optionnel)' }
```

### Les objets

```typescript
// Objet moins précis: pattern de clés et valeurs string
const user: { [key: string]: string } = { firstname: 'John', lastname: 'Doe (optionnel)' }
// Type objets spécifiques utilisables par défaut (MouseEvent, HTMLInputElement, ...)
const date: Date = new Date()
```

### Les fonctions

```typescript
// Typage de la fonction et du paramètre
const cb: Function = (e: MouseEvent) => { ... }
function printId(id: number) { ... }

// Typage du retour
// `void` ~ne retourne rien~ le retour n'est pas utilisé
const cb: Function = (e: MouseEvent): void => { ... }
// autre écriture
const cb: (e: MouseEvent) => void = (e) => { ... }
```

### Laisser TS déduire

Si on ne type pas, TS va comprendre tout seul les types des variables qui ont déjà une valeur assignée.

⚠️ Attention quand une variable constante est définie avec une valeur, le type automatique ne sera pas le type de la valeur mais la valeur elle même. Il s'agit d'un [literal](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types).

### Type assertion

Parfois le type déduit par TS est limité car on sort de sa portée.

```typescript
// Interprété comme type Element. TS ne connait pas l'élément qui possède cet Id
const elem = document.querySelector('#some-id')
```

On utilise l'affirmation de type ([type assertion](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)) pour forcer le type d'un variable (en restant dans la logique de ce que TS comprends).

```typescript
// Permet d'être plus spécifique
const elem = document.querySelector('#some-id') as HTMLButtonElement
const elem = <HTMLButtonElement>document.querySelector('#some-id')
```

### Union

Le [type union](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions) éfinit plusieurs possibilité quant au type attendu. S'écrit avec des types spéparés du caractère pipe `|`.

```typescript
function printId(id: number | string) { ... }
```

## Documentation TypeScript

- [Documentation globale](https://www.typescriptlang.org/docs/).
- [Documentation tsconfig](https://www.typescriptlang.org/tsconfig).
