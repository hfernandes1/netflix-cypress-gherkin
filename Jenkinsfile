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

                echo "Deploying the application"
            }
        
         
        }
        stage("Testing"){
            steps {
                bat "npm install"
                bat "npm install cypress"
                bat "npm i"
                bat "npx cypress run --env tags=${TAGS} --browser ${BROWSER} --spec ${SPEC}"
                bat "npm i multiple-cucumber-html-reporter"
                bat "node ./cucumber-html-reports.js"

                archiveArtifacts artifacts: 'reports/'
            }
            }
    
        stage ('Deploying'){
            steps{
                echo "Deploying the application"
            }
        
        }
    }


       post {
        // shutdown the server running in the background
            always {
            echo 'Stopping local server'
            bat 'taskkill /F /PID 3564'
            }
        }
    

}