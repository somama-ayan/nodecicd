pipeline {
    agent any

    stages {

        stage('Build Info') {
            steps {
                sh 'echo "Workspace: $WORKSPACE"'
                sh 'ls -la'
            }
        }

        stage('Build') {
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
