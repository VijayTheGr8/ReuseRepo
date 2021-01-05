# ReuseRepo - To be Edited

 Title: [ReuseRepo](https://reuserepo.azurewebsites.net/)  
 Team: Arsal, Rayhaan, Vijay  
 Repo: [https://github.com/ArsalKhan1/ReuseRepo](https://github.com/ArsalKhan1/ReuseRepo)  
  
 A blurb about the project, team, technology and aspiration  

# Progress Log 

For now I am just putting some logs here with links that I used. will fix them later

## 1. Design 
   [AK] TBD

## 2. Project Setup
   [AK] 1. Started using data stucture project and cleaned it up for reuserepo  
   
## 3. UI Setup
   [AK] Created angular baseline project using Angular ng commands. Following are the key commands. See details in [/UI-Angular/README.md](UI-Angular/README.md)
 
       - ng new ReuseRepo  
       - npm install  
       - ng serve  
       - http://localhost:4200/  
        ![](images/3-ng-new-reuserepo-settings.png)
        ![](images/3-localhost-4200.png)
      
## 4. API Setup
   [AK] Created a shell API using NodeJS by following this [example](https://www.toptal.com/nodejs/secure-rest-api-in-nodejs)  
   
        - npm install  
        - npm start  
    This will start API server on port 3600. This before running the front-end.
 

## 5. Hosting Setup
   [AK] Signed up for azure free hosting acount with $100 credit.  
   [AK] Built angular for deployment  
        ng build --prod  
        This created a build under [UI-Angular/dist/reuserepo](UI-Angular/dist/reuserepo)  
        Hosted the site following this [post](https://www.c-sharpcorner.com/article/easily-deploy-angular-app-to-azure-from-visual-studio-code/)  
        ![](images/5-reuserepo-azurewebsite.png)        

   
