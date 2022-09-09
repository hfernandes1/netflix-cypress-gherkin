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
                echo "Building the application"
            }
         
        }
        stage("Testing"){
            steps {
                bat "npm i"
                bat "npx cypress run --env tags=@blank-field --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage ('Deploying'){
            steps{
                echo "Deploying the application"
            }
        
        }
    }

    post{
            always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
            cucumber buildStatus: 'null', customCssFiles: '', customJsFiles: '', failedFeaturesNumber: -1, failedScenariosNumber: -1, failedStepsNumber: -1, fileIncludePattern: '**/*.json', pendingStepsNumber: -1, reportTitle: 'reports-cucumber', skippedStepsNumber: -1, sortingMethod: 'ALPHABETICAL', undefinedStepsNumber: -1
        }
    }

}