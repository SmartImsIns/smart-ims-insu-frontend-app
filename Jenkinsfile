pipeline{
    agent any
        stages{
            stage('deployment'){         
                steps{
                  script {
                echo "sravya"
       
                sh 'tar -cvzf dist.tar.gz *'
                sh 'scp dist.tar.gz jenkins@demo.divami.com:/var/www/html/demo/smartims'
                sh 'ssh jenkins@demo.divami.com "cd /var/www/html/demo/smartims && tar -xvzf dist.tar.gz"'
                sh 'ssh jenkins@demo.divami.com "cd /var/www/html/demo/smartims && sudo chown -R jenkins:jenkins *"'
                sh 'ssh jenkins@demo.divami.com "cd /var/www/html/demo/smartims && sudo rm -rf *"'
                sh 'ssh jenkins@demo.divami.com "cd /var/www/html/demo/smartims && sudo docker build -t smartims$BUILD_NUMBER -f Dockerfile ."'
                //sh 'ssh jenkins@demo.divami.com "sudo docker tag smartims$BUILD_NUMBER:latest sravyananduri/smartims$BUILD_NUMBER"' 
                //sh 'ssh jenkins@demo.divami.com "sudo docker push sravyananduri/smartims$BUILD_NUMBER"'
                sh 'ssh jenkins@demo.divami.com " sudo docker ps -aqf "name=smartims*" | xargs -r sudo docker rm -f"'
                sh 'ssh jenkins@demo.divami.com  "sudo docker run -td --name smartims$BUILD_NUMBER -p 9001:80 smartims$BUILD_NUMBER"'
                  
                  }
               }
            }
        }
    post{
        success{     
                 googlechatnotification   message: "Project Name: ${JOB_NAME} Build ${BUILD_NUMBER} from Branch ${Branch_name} was successfull. Check output in https://sims.divami.com"  , url: "https://chat.googleapis.com/v1/spaces/AAAAvmWzxx0/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=n318miDqwYX2otX9-2am3W-7I3X64ERl5b1eSy-32yw"                                             
              }
              failure {                            
                  googlechatnotification message: "Project Name: ${JOB_NAME} Build ${BUILD_NUMBER} from Branch ${Branch_name} is failed: Check output logs at  ${RUN_DISPLAY_URL}"  , url: "https://chat.googleapis.com/v1/spaces/AAAAvmWzxx0/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=n318miDqwYX2otX9-2am3W-7I3X64ERl5b1eSy-32yw"                           
              }
        always {
                  cleanWs()
              }
    }
}
