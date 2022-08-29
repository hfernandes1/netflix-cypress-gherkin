# Netflix-Cypress-Gherkin

 ## Apresentação

Olá :wave: ! Esse é meu projeto utilizando CYPRESS. 

O Objetivo deste projeto é criar um exemplo, manter meus conhecimentos atualizados e poder passar essas informações para pessoas interessadas em aprender. 
Vou tentar passar um passo a passo para vocês poderem construir o código de vocês, e também utilizar a nova versão do CYPRESS 10 que mudou alguns diretórios e está dando um nó na cabeça de muita gente, no fim, vou deixar os comandos para quem apenas deseja rodar os testes e ver funcionando. Lembre-se a unica coisa que você irá precisar mudar caso queria ver funcionando é seu email e senha do netflix. Tks ! 


## Passo a passo :foot:

Vamos começar com o passo a passo para você fazer o seu também ?


<!-- Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)! -->

## 1 - instalar o Nodejs :diamonds:

```
https://nodejs.org/en/
```
Você pode usar outros gerenciadores de pacodes como o cmder, mas gosto do node e vou passar os stepts utilizando o comando "npm"

## 2 - Crie o projeto node

```
npm init --yes

```
Após rodar esse comando ele vai criar um arquivo package.json e isso confirma que está sendo criado um projeto node. 


## 3 - Instale o cypress	:bulb:

```
npm install cypress

```
Caso você queira baixar uma versão específica, é só rodar o comando com um "@" e o numero da versão, exemplo: npm install cypress@3.6.1
Caso deseje instalar a ultima versão, é só rodar o comando acima. 



## 4 - isntalando o cucumber 


Caso você já possua a integração com a versão antiga, desinstale com o comando `npm uninstall cypress-cucumber-preprocessor` This is because the repository has moved from github.com/TheBrainFamily to github.com/badeball. So now the cypress-cucumber repository is managed/developed by a different author. The new author has made new architectural changes to the plugin, so the best way to implement the plugin in the existing project is to do it from scratch.

Para usuarios que estão fazendo a instação do zero, install the @badeball/cypress-cucumber-preprocessor using the command

```
npm install -D @badeball/cypress-cucumber-preprocessor.
``` 

Next, install two more dependencies ‘@bahmutov/cypress-esbuild-preprocessor’ and ‘@esbuild-plugins/node-modules-polyfill’ using the commands


`npm install -D @bahmutov/cypress-esbuild-preprocessor`

`npm install -D @esbuild-plugins/node-modules-polyfill`


## 5 - configurando package.json :link:

package.json               | 
:-------------------------:
![image](https://user-images.githubusercontent.com/67130771/187009314-5440029b-4201-44c6-9d29-ff9083d29053.png)



## 4 - criando as primeiras pastas :open_file_folder:

```
npm run cypress:open
```

Após a modificação no package.json, com esse comando, será possível executar o cypress e por default.

Ao executar esse comando, será adicionado alguns packages necessários para executar o projeto. 
* Clique em E2e testing 
* Chrome
* Start e2e testing.

## 4 - configure o cypress.config.js

adicionei o specPattertn e a baseUrl ( nesse caso irei colocar o Netflix, que é o foco desse projeto pessoal )

![image](https://user-images.githubusercontent.com/67130771/187097552-07fbe553-03be-4b02-bf43-3b7b24a67569.png)

Caso tenha informações contidas da versão passada ou não, retire todas e coloque a seguinte informação abaixo: 

```
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;


module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "https://www.netflix.com/",
    chromeWebSecurity: false,
  },
});
```

## Configurando o arquivo json 
vamos criar um arquivo json que servira de base para passar as configurações do plugin com cucumber. 

Crie um arquivo dentro da raiz chamado " .cypress-cucumber-preprocessorrc.json "

contendo as seguintes infos: 

```
{
    "json": {
      "enabled": true,
      "output": "jsonlogs/log.json",
      "formatter": "cucumber-json-formatter.exe"
    },
    "stepDefinitions": [
        "[filepath]/**/*.{js,ts}",
        "[filepath].{js,ts}",
        "cypress/e2e/step_definitions/*.{js,ts}"
    ]
}
``` 

## Criar os diretórios para realizar os testes. 

Vamos começar a criar as pastas para realizar os testes, eu criei da seguinte forma: 

![image](https://user-images.githubusercontent.com/67130771/187009940-470b5237-1cbf-448f-8c6e-f883293dec67.png)



## License
open source project

## Project status
DONE :)
Qualquer sugestão sobre projetinhos desse tipo - Entre em contato
linkedin: https://www.linkedin.com/in/henrique-amaral-fernandes-794477121/
