pipeline {
    agent any

    stages {
        stage('Debug Repo') {
    steps {
        sh 'pwd'
        sh 'ls -la'
        sh 'cat package.json'
    }
}
        stage('Clean Docker') {
            steps {
                sh 'docker-compose down --volumes --remove-orphans || true'
                sh 'docker system prune -a -f || true'
            }
        }

        stage('Build Fresh') {
            steps {
                sh 'docker-compose build --no-cache'
            }
        }

        stage('Run Containers') {
            steps {
                sh 'docker-compose up -d --force-recreate'
            }
        }

        stage('Verify') {
            steps {
                sh 'docker ps'
            }
        }
    }
}
