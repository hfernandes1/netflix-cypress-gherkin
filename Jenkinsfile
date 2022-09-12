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
                echo "Deploying the application"
            }
            }
        }
        stage ('Deploying'){
            steps{
                echo "Deploying the application"
            }
        
        }
    }


}