pipeline {
    agent any
    tools {
        nodejs 'NodeJS'  // Must match Jenkins Global Tool Configuration
    }
    stages {
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
                always {
                    junit 'junit.xml'  // Generated by jest-junit
                    archiveArtifacts 'coverage/**/*'
                }
            }
        }
        stage('Deploy (Main Only)') {
            when { branch 'main' }
            steps {
                sh 'npm start &'
                echo "Deployed to http://localhost:6666"
            }
        }
    }
}
