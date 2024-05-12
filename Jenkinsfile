pipeline {
  agent { docker { image 'mcr.microsoft.com/playwright:v1.43.0-jammy' } }
  stages {
    stage('install playwright') {
      steps {
        sh 'npm ci'
        sh 'npx playwright test'
      }
    }
    // stage('help') {
    //   steps {
    //     sh 'npx playwright test --help'
    //   }
    // }
    stage('test') {
      steps {
        sh 'npx playwright test .tests/API/ApiTesting.spec.js --headed --project=chromium'
      }
      // post {
      //   success {
      //     archiveArtifacts(artifacts: 'homepage-*.png', followSymlinks: false)
      //     sh 'rm -rf *.png'
      //   }
      // }
    }
  }
}
