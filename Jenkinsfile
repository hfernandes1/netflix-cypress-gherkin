pipeline {


    agent any

    parameters{
        string(name: 'SPEC', defaultValue: "cypress/e2e/**/**", description: "Enter the scripts path that you want to execute")
        choice(name: 'BROWSER', choices: ['chrome','edge', 'firefox'], description: "Choice the browser where you want to execute your scripts")
        choice(name: 'TAGS', choices: ['@blank-field', '@invalid-login', '@successfull-login'], description: "Choice the test that you wanna run")
    }

    // options{
    //     ansiColor('xterm')

    // }

    stages{

        stage ('Building'){

            steps{
                 bat "npm install cypress"
                bat "npm i"
                bat "npx cypress run --env tags=${TAGS} --browser ${BROWSER} --spec ${SPEC}"
                bat "npm i multiple-cucumber-html-reporter"
                bat "node ./cucumber-html-reports.js"

                archiveArtifacts artifacts: 'reports/'
            }
        
         
        }
        stage("Testing"){
            steps {
                echo "Testing the application"
            }
        }
        stage ('Deploying'){
            steps{
                echo "Deploying the application"
            }
        
        }
    }


}