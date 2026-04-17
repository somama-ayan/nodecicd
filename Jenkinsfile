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
                sh 'docker-compose down || true'
                sh 'docker-compose build --no-cache'
                sh 'docker-compose up -d'
            }
        }

        stage('Verify') {
            steps {
                sh 'docker ps'
            }
        }
    }
}
