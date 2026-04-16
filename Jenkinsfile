pipeline {
    agent any

    stages {

        stage('Checkout Info') {
            steps {
                sh 'echo "Repo cloned successfully"'
                sh 'ls -la'
            }
        }

        stage('Build Docker Compose') {
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
