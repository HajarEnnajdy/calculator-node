pipeline {
    agent any

    stages {

        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run application') {
            steps {
                bat 'node server.js'
            }
        }

    }
}