# ReuseRepo - To be Edited

 Title: [ReuseRepo](https://reuserepo.azurewebsites.net/#/article/search)  
 Team: Arsal, Rayhaan, Vijay  
 Repo: [https://github.com/ArsalKhan1/ReuseRepo](https://github.com/ArsalKhan1/ReuseRepo)  
  
 A blurb about the project, team, technology and aspiration  


# Design
The application uses 3 tiers.
    Angular based Front End
    Node and Express based APIs 
    Cosmos DB with Mongo APIs
   
## 1. UI (Angular + Material Design Skin)
   The application uses out of the box Angular and Material Design skin. Used angular cli ng commands to spawn the project. See details in [/UI-Angular/README.md](UI-Angular/README.md)

## 2. API (NodeJS and ExpressJS)
   Created a shell API using NodeJS by following this [example](https://www.toptal.com/nodejs/secure-rest-api-in-nodejs)  
   
    Use following commands to run it  
        - npm install  
        - npm start  
    This will start API server on port 3600. 
 
## 3. Datastore (Cosmos DB with Mongos API)
   Created an out of the box cosmos db on azure using portal.azure.com

# Hosting
   [AK] Signed up for azure free hosting acount with $200 credit.  
   [AK] Built angular for deployment  
        ng build --prod  
        Deployed to [https://reuserepo.azurewebsites.net/#/article/search](https://reuserepo.azurewebsites.net/#/article/search)
        This created a build under [UI-Angular/dist/reuserepo](UI-Angular/dist/reuserepo)  
        Hosted the site following this [post](https://www.c-sharpcorner.com/article/easily-deploy-angular-app-to-azure-from-visual-studio-code/)  
        ![](images/5-reuserepo-azurewebsite.png)        

        Hosted newer version with search and list functionality 
        ![](images/6-reuserepo-azurewebsite.png) 
   
