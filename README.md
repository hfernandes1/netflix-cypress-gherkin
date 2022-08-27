# Netflix-Cypress-Gherkin

 ## Apresentação

Olá :wave: ! Esse é meu projeto utilizando CYPRESS. 

O Objetivo deste projeto é criar um exemplo, manter meus conhecimentos atualizados e poder passar essas informações para pessoas interessadas em aprender. 
Vou tentar passar um passo a passo para vocês poderem construir o código de vocês, e também utilizar a nova versão do CYPRESS 10 que mudou alguns diretórios e está dando um nó na cabeça de muita gente, no fim, vou deixar os comandos para quem apenas deseja rodar os testes e ver funcionando. Lembre-se a unica coisa que você irá precisar mudar caso queria ver funcionando é seu email e senha do netflix. Tks ! 

 ## :camera_flash: Fotos do Projeto 
 
 
Cucumber             |  Steps/Casos de testes
:-------------------------:|:-------------------------:


Header             |  Base_URI
:-------------------------:|:-------------------------:



Environment             |  Gemfile
:-------------------------:|:-------------------------:



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

## 4 - criando as primeiras pastas :open_file_folder:

```
cypress open

```
Irá baixar os diretórios necessários para você dar o start no projeto

## 5 - configurando package.json :link:

package.json               | 
:-------------------------:
![image](https://user-images.githubusercontent.com/67130771/187009314-5440029b-4201-44c6-9d29-ff9083d29053.png)



## 4 - criando as primeiras pastas :open_file_folder:

```
npm run cypress:pen
```

Após a modificação no package.json, com esse comando, será possível executar o cypress. 

## 4 - isntalando o cucumber 
```
npm install --save-dev cypress-cucumber-preprocesso

```
Caso você já possua a integração com a versão antiga, desinstale com o comando `npm uninstall cypress-cucumber-preprocessor` This is because the repository has moved from github.com/TheBrainFamily to github.com/badeball. So now the cypress-cucumber repository is managed/developed by a different author. The new author has made new architectural changes to the plugin, so the best way to implement the plugin in the existing project is to do it from scratch.

Para usuarios que estão fazendo a instação do zero, install the @badeball/cypress-cucumber-preprocessor using the command

```
npm install -D @badeball/cypress-cucumber-preprocessor.
``` 

## 4 - isntalando o cucumber 


Next, install two more dependencies ‘@bahmutov/cypress-esbuild-preprocessor’ and ‘@esbuild-plugins/node-modules-polyfill’ using the commands


`npm install -D @bahmutov/cypress-esbuild-preprocessor `

`npm install -D @esbuild-plugins/node-modules-polyfill`


## 4 - configure o cypress.config.js

adicionei o specPattertn e a baseUrl ( nesse caso irei colocar o Netflix, que é o foco desse projeto pessoal )

![image](https://user-images.githubusercontent.com/67130771/187009823-624c398c-629b-428a-8f5a-1c491ec1d9c7.png)

Caso tenha informações contidas da versão passada ou não, retire todas e coloque a seguinte informação abaixo: 

```
const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const nodePolyfills =
  require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
module.exports = async (on, config) => {
  await addCucumberPreprocessorPlugin(on, config) // to allow json to be produced
  // To use esBuild for the bundler when preprocessing
  on(
    'file:preprocessor',
    createBundler({
      plugins: [nodePolyfills(), createEsbuildPlugin(config)],
    })
  )
  return config
}

```
![image](https://user-images.githubusercontent.com/67130771/187009742-902aafc1-8cc7-44ee-9438-33ed752fffee.png)

## Configurando o 

## Authors and acknowledgment


Next, in the package.json remove ( se houver ):

```
  "cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true
  }
  
  ```
and, add the following:

```
  "cypress-cucumber-preprocessor": {
    "stepDefinitions": "cypress/e2e/cucumber-test/**/*.{js,ts}"
  }
  ```
 ![image](https://user-images.githubusercontent.com/67130771/187009815-b209c59b-fd25-41e6-a673-8d62f49281c6.png)
 
This is done because most of the configuration options have been removed as a result of architectural changes and now there’s no distinction between “global” and “non-global” steps anymore. Steps are searched for using patterns and you can choose to include global steps or not.


## Criar os diretórios para realizar os testes. 

Vamos começar a criar as pastas para realizar os testes, eu criei da seguinte forma: 

![image](https://user-images.githubusercontent.com/67130771/187009940-470b5237-1cbf-448f-8c6e-f883293dec67.png)


## License





## Authors and acknowledgment
## License
open source project

## Project status
DONE :)
Qualquer sugestão sobre projetinhos desse tipo - Entre em contato
linkedin: https://www.linkedin.com/in/henrique-amaral-fernandes-794477121/
