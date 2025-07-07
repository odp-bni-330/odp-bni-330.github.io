// DEKLARATIF
pipeline{
    agent any
    environment{
        ENV = 'staging'
    }

    stages{
        stage('Checkout'){
            steps{
                git '.../repo.git'
            }
        }

        stage('Build'){
            steps{
                sh './gradlew build'
            }
        }

        stage('Test'){
            steps{
                sh './gradlew test'
            }
        }
    }
}

// SCRIPTED

node{
    stage('Checkout'){
        git '...'
    }

    stage('Build'){
        sh './gradlew build'
    }

    stage('Test'){
        if (env.BRANCH_NAME == 'main'){
            sh './gradlew test'
        }
        else{
            echo 'Skip test on non-main branch'
        }
    }
}

// CONTOH PARALLEL

stage('Test'){
    parallel{
        unitTest: {
            sh './gradlew test'
        }

        integrationTest: {
            sh './gradlew integrationTest'
        }

        linting: {
            sh 'npm run lint'
        }
    }
}

// MATRIX BUILD

pipeline{
    agent none
    matrix{
        axes{
            axis{
                name: 'JDK'
                values: '8', '11'
            }

            axis{
                name{ 'OS'}
                values: 'linux', 'windows'
            }
        }

        agent any
        stages{
            stage('Build'){
                steps{
                    echo "Building JDK ${JDK}, OS ${OS}"
                    // building logic
                    // ...
                }
            }

            stage('Test'){
                steps{
                    echo "Running test on JDK ${JDK}, OS ${OS}"
                    // testing logic
                    // ...
                }
            }
        }
    }
}

// CREDENTIALS

pipeline{
    agent any
    environment{
        GITHUB_TOKEN = credentials('github-token-id')
    }

    stages{
        stage('Clone Repo'){
            steps{
                sh 'git clone https://$GITHUB_TOKEN@...'
            }
        }
    }
}

// SCM POOLING TRIGGER

pipeline{
    triggers{
        poolSCM('H/5 * * * *') // cek setiap 5 menit
    }

    stages{
        stage('Build'){
            steps{
                echo 'SCM pooling triggered build'
            }
        }
    }
}