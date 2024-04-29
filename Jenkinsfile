pipeline {
  agent { docker { image 'mcr.microsoft.com/playwright:v1.43.0-focal' } }
  stages {
    stage('install playwright') {
      steps {
        sh 'npm install -D @playwright/test'
        sh 'npx playwright install'
      }
    }
    stage('help') {
      steps {
        sh 'npx playwright test --help'
      }
    }
    stage('test') {
      steps {
        sh 'npx playwright test .tests/API/api.spec.ts --headed --project=chromium'
      }
      post {
        success {
          archiveArtifacts(artifacts: 'homepage-*.png', followSymlinks: false)
          sh 'rm -rf *.png'
        }
      }
    }
  }
}
