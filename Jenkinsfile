pipeline {
    agent any

    stages {

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run application') {
            steps {
                sh 'node server.js'
            }
        }

    }
}