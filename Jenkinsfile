pipeline {
    agent any

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
        }

        stage('Build') {
            steps {
                echo 'Build complete!'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    cd /home/ubuntu/my-cicd-app
                    git pull origin main
                    npm install
                    pm2 restart myapp || pm2 start app.js --name "myapp"
                    pm2 save
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded! App deployed.'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
