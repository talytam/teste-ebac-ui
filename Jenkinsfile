pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {

                git branch: 'main', url: 'https://github.com/talytam/teste-ebac-ui.git'
            }
        }

        stage('Install Dependencies') {
            steps {

                bat 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {

                bat 'set NO_COLOR=1'
                

                bat 'npm run cy:run'
            }
        }
    }
}
