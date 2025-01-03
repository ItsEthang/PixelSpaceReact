pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/ItsEthang/PixelSpaceReact.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm ci'
                sh 'npm run build'
            }
        }

        // stage('Test') {
        //     steps {
        //         sh 'npm test'
        //     }
        // }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t rock-it-web .'
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                    sh 'docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}'
                    sh 'docker tag rock-it-web:latest ${DOCKER_USERNAME}/rock-it-web:latest'
                    sh 'docker push ${DOCKER_USERNAME}/rock-it-web:latest'
                }
            }
        }

        // stage('Deploy') {
        //     steps {
        //         sshagent(['your-ec2-ssh-key']) {
        //             sh '''
        //                 ssh ubuntu@your-ec2-ip "docker pull ${DOCKER_USERNAME}/my-vite-app:latest"
        //                 ssh ubuntu@your-ec2-ip "docker rm -f my-vite-app || true"
        //                 ssh ubuntu@your-ec2-ip "docker run -d --name my-vite-app -p 80:80 ${DOCKER_USERNAME}/my-vite-app:latest"
        //             '''
        //         }
        //     }
        // }
    }

    post {
        success {
            slackSend color: '#00FF00', message: 'Deployment successful!'
        }
        failure {
            slackSend color: '#FF0000', message: 'Deployment failed!'
        }
    }
}
