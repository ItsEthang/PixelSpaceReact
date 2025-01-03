pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS'// Name of the Node.js installation in Jenkins
    }

    environment {
        REGISTRY = 'itsethang5' // e.g., 'docker.io/your-username' or AWS ECR URL
        IMAGE_NAME = 'rock-it-web'
        DOCKER_CREDENTIALS = 'dockerhub-credentials' // Jenkins credentials ID for Docker registry
        EC2_HOST = 'ec2-54-204-148-235.compute-1.amazonaws.com'
        SSH_CREDENTIALS = 'rockit-web-key' // Jenkins credentials ID for SSH
    }

    stages {
        stage('Checkout') {
             steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/ItsEthang/PixelSpaceReact.git']])
            }
        }

        stage('Build React App') {
            steps {
                script {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Docker Build') {
            steps {
                script {
                    sh "docker build --platform linux/amd64 -t ${REGISTRY}/${IMAGE_NAME}:latest ."
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                    sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
                    sh "docker push ${REGISTRY}/${IMAGE_NAME}:latest"
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                sshagent([SSH_CREDENTIALS]) {
                sh """
                    ssh -o StrictHostKeyChecking=no ec2-user@${EC2_HOST} << 'EOF'
                        set -e  # Stop script execution on errors
                        docker pull ${REGISTRY}/${IMAGE_NAME}:latest
                        docker stop rock-it-web || true
                        docker rm rock-it-web || true
                        docker run -d --name rock-it-web -p 80:80 ${REGISTRY}/${IMAGE_NAME}:latest
EOF
                """
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}