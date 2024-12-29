# Learning Management System (LMS)  
### Version 2.0  

A revised and enhanced fork of [sangammukherjee/MERN-LMS-2024:master](https://github.com/sangammukherjee/MERN-LMS-2024:master).  

## Features  
This version introduces powerful new integrations and functionalities:  
1. **Microsoft Entra**: Seamless integration for secure identity and access management.  
2. **Azure File Blob Storage**: Efficient storage and retrieval of course videos, documents, and other content.  
3. **Azure SQL Database**: Reliable and scalable database solution for managing training data.  

## Major Updates  
- Transitioning from the traditional **Instructor/Student** model.  
- Designed specifically for company/institution use.  
- Administrative focus:  
  - Admin users can edit, manage, and administer courses and training materials.  
  - Streamlined course content delivery for staff training purposes.  

## Getting Started  
To set up and run the development environment:  

1. **Install Dependencies**  
    - Client:  
      ```bash  
      cd ./client && npm install  
      ```  
    - Server:  
      ```bash  
      cd ./server && npm install  
      ```  

2. **Run Development Environment**  
    - Start the client:  
      ```bash  
      cd ./client && npm run dev  
      ```  
    - Start the server:  
      ```bash  
      cd ./server && npm run dev  
      ```  

3. **Environment Variables**  
   Ensure to configure `.env` files in both the `client` and `server` directories with the required settings for Microsoft Entra, Azure Blob Storage, and Azure SQL Database.

## Development Team  
Developed and maintained by **Erick Linares Pacheco**.  

Stay tuned for more updates as we continue to build and improve the platform!  