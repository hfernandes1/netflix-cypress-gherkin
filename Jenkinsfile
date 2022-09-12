pipeline {


    agent any
    tools {
        nodejs '18.9.0'
    }

    parameters{
        // string(name: 'SPEC', defaultValue: "cypress/e2e/**/**", description: "Enter the scripts path that you want to execute")
        choice(name: 'BROWSER', choices: ['chrome','edge', 'firefox'], description: "Choice the browser where you want to execute your scripts")
        choice(name: 'TAGS', choices: ['@blank-field', '@invalid-login', '@successfull-login'], description: "Choice the test that you wanna run")
    }

    // options{
    //     ansiColor('xterm')

    // }

    stages{
        stage ('Building'){

        agent {
    // this image provides everything needed to run Cypress
            docker { image 'cypress/base:10'}
        }

            
            steps{

                echo "Deploying the application"
            }
        
         
        }
        stage("Testing"){
            steps {
                sh "npm version"
                sh "npm install -g cypress --unsafe-perm --silent"
                sh "npx cypress run --env tags=${TAGS} --browser ${BROWSER}"
                sh "npm i multiple-cucumber-html-reporter"
                sh "node ./cucumber-html-reports.js"

                archiveArtifacts artifacts: 'reports/'
            }
            }
    
        stage ('Deploying'){
            steps{
                echo "Deploying the application"
            }
        
        }

        
    }


    //    post {
    //     // shutdown the server running in the background
    //         always {
    //         echo 'Stopping local server'
    //         bat 'taskkill /F /PID 3564'
    //         }
    //     }

       post {
       always {
           echo "post always"
           println("Number: ${currentBuild.number}")
           println("Result: ${currentBuild.result}")
           println("Display name: ${currentBuild.displayName}")
           script {
               text = "Result: ${currentBuild.result}"
           }
           println('----------')
           println(currentBuild.getPreviousBuild())
           println(currentBuild.getPreviousBuild().result)
           println('----------')
       }
       success {
           echo "post success"
           echo text
       }
       failure {
           echo "post failure"
       }
    }
    

}