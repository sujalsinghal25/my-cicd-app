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
                    cp -r /var/lib/jenkins/workspace/my-cicd-app/. /home/ubuntu/my-cicd-app/
                    sudo -u ubuntu pm2 restart myapp || sudo -u ubuntu pm2 start /home/ubuntu/my-cicd-app/app.js --name "myapp"
                    sudo -u ubuntu pm2 save
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
