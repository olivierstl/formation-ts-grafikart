# Premiers pas en typescript

[Formation typescript](https://grafikart.fr/formations/typescript) par le bro Grafikart. 💜

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
- `files`: tableau des objets à compiler
