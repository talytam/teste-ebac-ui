pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/talytam/teste-ebac-ui.git'
                bat 'npm install'
            }
        }


        stage('Tests') {
            steps {

                bat '''set NO_COLOR=1'

npm cy:run'''
            }
        }
    }
}

