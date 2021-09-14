def builderImages
def dockername = "rizkazn15/frontendddev:dev"

pipeline {
    agent any

    stages {
        stage('Build Image') {
            steps {
                script {
                    builderImages = docker.build("${dockername}")
                }
            }
        }
        stage('Test Image') {
            steps {
                script {
                    builderImages.inside {
                        sh "echo pass"
                    }
                }
            }
        }
        stage('Push Image') {
            steps {
                script {
                    builderImages.push()
                }
            }
        }
    }
}