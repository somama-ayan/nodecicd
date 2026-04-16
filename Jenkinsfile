pipeline {
    agent any

    stages {

        stage('Checkout Info') {
            steps {
                sh 'echo "Code checked out successfully"'
                sh 'ls -la'
            }
        }

        stage('Build with Docker Compose') {
            steps {
                sh 'docker compose down || true'
                sh 'docker compose up -d --build'
            }
        }

        stage('Verify') {
            steps {
                sh 'docker ps'
            }
        }
    }
}
