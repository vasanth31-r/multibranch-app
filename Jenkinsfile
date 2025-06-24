pipeline {
    agent any
    tools {
        nodejs 'NodeJS'  // Ensure Node.js is installed in Jenkins
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
                    junit 'junit.xml'  // Publish test results (if configured)
                    archiveArtifacts 'coverage/**/*'  // Save coverage reports
                }
            }
        }
        stage('Deploy (Main Only)') {
            when { 
                branch 'main'  // Only deploy from the main branch
            }
            steps {
                sh 'npm start &'  // Run server in background (for demo)
                echo "Deployed to http://localhost:3000"
            }
        }
    }
}
