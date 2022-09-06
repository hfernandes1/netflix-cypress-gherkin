# Netflix-Cypress-Gherkin

 ## Apresentação

Olá :wave: ! Esse é meu projeto utilizando CYPRESS. 

O Objetivo deste projeto é criar um exemplo, manter meus conhecimentos atualizados e poder passar essas informações para pessoas interessadas em aprender. 
Vou tentar passar um passo a passo para vocês poderem construir o código de vocês, e também utilizar a nova versão do CYPRESS 10 que mudou alguns diretórios e está dando um nó na cabeça de muita gente, no fim, vou deixar os comandos para quem apenas deseja rodar os testes e ver funcionando. Lembre-se a unica coisa que você irá precisar mudar caso queria ver funcionando é seu email e senha do netflix. Tks ! 


## Fotos do projeto 📸

login.feature           |   login.js ( step definition )           | 
:-------------------------: | :-------------------------:
![image](https://user-images.githubusercontent.com/67130771/188499657-6423d4c8-15fa-4bd0-b0d5-cca681c74561.png) | ![image](https://user-images.githubusercontent.com/67130771/188499684-f2134cff-fd39-417b-9323-73c854336de8.png)


## Passo a passo :foot:

Vamos começar com o passo a passo para você fazer o seu também ?


<!-- Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)! -->

## 1 - instalar o Nodejs ⏬

```
https://nodejs.org/en/
```
Você pode usar outros gerenciadores de pacodes como o cmder, mas gosto do node e vou passar os stepts utilizando o comando "npm"

## 2 - Crie o projeto node 🔝

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



## 4 - isntalando o cucumber 🥒


Caso você já possua a integração com a versão antiga, desinstale com o comando `npm uninstall cypress-cucumber-preprocessor` This is because the repository has moved from github.com/TheBrainFamily to github.com/badeball. So now the cypress-cucumber repository is managed/developed by a different author. The new author has made new architectural changes to the plugin, so the best way to implement the plugin in the existing project is to do it from scratch.

Para usuarios que estão fazendo a instação do zero, install the @badeball/cypress-cucumber-preprocessor using the command

```
npm install -D @badeball/cypress-cucumber-preprocessor.
``` 

Next, install two more dependencies ‘@bahmutov/cypress-esbuild-preprocessor’ and ‘@esbuild-plugins/node-modules-polyfill’ using the commands


`npm install -D @bahmutov/cypress-esbuild-preprocessor`

`npm install -D @esbuild-plugins/node-modules-polyfill`


## 5 - configurando package.json 📦

package.json               | 
:-------------------------:
![image](https://user-images.githubusercontent.com/67130771/187009314-5440029b-4201-44c6-9d29-ff9083d29053.png)



## 6 - criando as primeiras pastas :open_file_folder:

```
npm run cypress:open
```

Após a modificação no package.json, com esse comando, será possível executar o cypress e por default.

Ao executar esse comando, será adicionado alguns packages necessários para executar o projeto. 
* Clique em E2e testing 
* Chrome
* Start e2e testing.

## 7 - configure o cypress.config.js ⚙️

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

## 8 - Criando o arquivo json de configuração 💢
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

## 9 - Criar os diretórios para realizar os testes. 📁

Vamos começar a criar as pastas para realizar os testes, eu criei da seguinte forma: 

![image](https://user-images.githubusercontent.com/67130771/187009940-470b5237-1cbf-448f-8c6e-f883293dec67.png)

## 10 - Criando  um Page obejcts. 

Relembrando: Um page objects é uma classe orientada a objetos que serve como interface para uma página do seu AUT. 🙂

O primeiro passo é criar um pasta e um arquivo JS chamado "elements.js" dentro de "cypress". 

![image](https://user-images.githubusercontent.com/67130771/188202699-b11ca3a4-26bd-41a5-9ade-64a137c90f7a.png)

Notem que criei uma constante chamado elements e dividi os elementos da pagina utilizado a label LOGIN. Por fim, finalizei com o comando export default elements;

O próximo passo é passar o caminho em dois arquivos, veja abaixo: 

e2e.js            |   login.js ( step definition )           | 
:-------------------------: | :-------------------------:
![image](https://user-images.githubusercontent.com/67130771/188203087-55e0e57b-6679-426e-8786-bbc7a87fc963.png) | ![image](https://user-images.githubusercontent.com/67130771/188203280-1c33f550-860d-4444-a3c6-3c8dce8225be.png)

Para usar é simples, após fazer a referência nos arquivos anteriores, é só escrever a variável que foi criada, a label que você fez a divisão e o nome do elemento
dessa maneira: 


e2e.js            |  
:-------------------------: | 
![image](https://user-images.githubusercontent.com/67130771/188203674-3f57757e-6066-4332-af78-fdb51023e3d3.png)



## 11 - Usando Tags ⚠️
Caso queira rodar apenas um teste em específico, adicione tags da seguinte maneira:

Exemplo de tags             |   Executing           | 
:-------------------------: | :-------------------------:
![image](https://user-images.githubusercontent.com/67130771/188498680-8f931bd6-f5d5-400d-a09f-0603473bb460.png) | ![image](https://user-images.githubusercontent.com/67130771/188498651-715d6144-9ded-4b3a-a172-fff654ebe064.png)


Use o comando `λ npx cypress run --env tags="@TAGNAME"` para executar a tag. 
Após rodar esse comando, o cypress irá rodar somente o teste tagiago, além de gerar um vídeo mp4 com a gravação da execução do teste. 

## 12 - Criando um REPORTS - CYPRESS 10+ 
Para criar relatórios de execução vamos rodar alguns passos:

1 - Adicionar algumas configurações no arquivo ".cypress-cucumber-preprocessorrc.js": 

.cypress-cucumber-preprocessorrc.js          | 
:-------------------------: | 
![image](https://user-images.githubusercontent.com/67130771/188696881-aee4957b-6316-4fa2-82cb-cbc20b92c9ef.png)

2 - Faça o download do JSON formatter ( que basicamente irá converter mensagens cucumber em documento JSON )  
Link :link: : It can be downloaded from GitHub Releases where you'll find executables for various operating systems and CPU architectures.
https://github.com/cucumber/json-formatter/releases/tag/v19.0.0


```
Download cucumber-json-formatter-windows-amd64 and rename it to cucumber-json-formatter.exe
Move it to a directory that's on your PATH
Verify that you can run it: cucumber-json-formatter --help

``` 
Colocando o executavel no projeto          | 
:-------------------------: | 
![image](https://user-images.githubusercontent.com/67130771/188718269-358449ff-100c-46c8-87da-eb4d78df3fdf.png)

4 - rode o comando para instalar o plugin

```
npm i multiple-cucumber-html-reporter

```

5 - crie um diretório chamado "cucumber-html-report.js e preencha as seguintes infos: 

Utilize como base as infos desse site: https://www.npmjs.com/package/multiple-cucumber-html-reporter


```
const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './path-to-your-json-output/',
	reportPath: './path-where-the-report-needs-to-be/',
	metadata:{
        browser: {
            name: 'chrome',
            version: '60'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Custom project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'Nov 19th 2017, 02:31 PM EST'},
            {label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST'}
        ]
    }
});
```
![image](https://user-images.githubusercontent.com/67130771/188725097-05e77582-ec5e-4e9f-96ce-daecb467701d.png)


6 - Rode o comando 

`node ./cucumber-html-reports.js`
 Isso irá gerar o index.html com base no jsonlogs. 

`Obs: Caso queira atualizar, rode o comando npx cypress run e depois o comando node. novamente`
 



## Project status
DONE :)
Qualquer sugestão sobre projetinhos desse tipo - Entre em contato
linkedin: https://www.linkedin.com/in/henrique-amaral-fernandes-794477121/
