pipeline {
    agent any

    environment {
        APP_NAME = 'myapp'
        DOCKER_IMAGE = 'myapp:latest'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
            post {
                failure {
                    echo 'Tests failed! Deployment stopped.'
                }
            }
        }

        stage('Build') {
            steps {
                echo 'Build complete!'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t myapp:latest .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    rsync -av --exclude='.git' /var/lib/jenkins/workspace/my-cicd-app/ /home/ubuntu/my-cicd-app/
                    sudo -u ubuntu pm2 restart myapp || sudo -u ubuntu pm2 start /home/ubuntu/my-cicd-app/app.js --name "myapp"
                    sudo -u ubuntu pm2 save
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded! App deployed successfully.'
        }
        failure {
            echo 'Pipeline failed! Check logs above.'
        }
        always {
            echo 'Pipeline finished. Check application at http://13.126.57.14'
        }
    }
}