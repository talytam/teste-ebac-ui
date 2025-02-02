pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/talytam/teste-ebac-ui.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat 'npx cypress run --headless --browser chrome --no-exit'
            }
        }
    }
}