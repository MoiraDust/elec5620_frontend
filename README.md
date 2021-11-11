# Smart Education System

This is a comprehensive school/university management system that is designed specifically for educational purposes. It includes an AI-powered face recognition component that compares the user’s face with that of in the database to mark and check attendance, as well as several other functionalities include discussion board, timetable 

## Backend & Database
1. Under the 'ELEC5620_Smart_Education' project file, find and import 'schema_ddl.sql' to your local database. 
2. Replace the username and password with your local database username and password: 
```txt
spring.datasource.username = */replace with your username/*
spring.datasource.password = */replace with your password/*
```
3. Run the project.

## Frontend
Under the 'elec5620_frontend' project file, install all the node_modules and start the node with:

```bash
npm install
npm start
```
## Technologies 

* Backend framework: [SpringBoot](https://spring.io/projects/spring-boot)
* Distributed Server: [Eureka](https://cloud.spring.io/spring-cloud-netflix/multi/multi_spring-cloud-eureka-server.html)
* Database Management: [MyBatis](https://mybatis.org/mybatis-3/), [JPA](https://spring.io/projects/spring-data-jpa)
* Face Recognition API: [Baidu API](https://intl.cloud.baidu.com/product/face.html)
* Face Capture API: [Face-API](https://github.com/justadudewhohacks/face-api.js/)
