pipeline {
    agent any

    environment {
        IMAGE_NAME = "somamaayan/my-node-app"
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t $IMAGE_NAME:$IMAGE_TAG ."
            }
        }

        stage('Login to Docker Hub') {
    steps {
        withCredentials([usernamePassword(credentialsId: 'docker-hub-id', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
            sh 'echo $PASS | docker login -u $USER --password-stdin'
        }
    }
}

        stage('Push Image') {
            steps {
                sh "docker push $IMAGE_NAME:$IMAGE_TAG"
            }
        }
    }
}
