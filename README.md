
## Social Media - Simple

This project build with react. You can try demo by click [here](https://sosmedku.netlify.com/)

If you want start in you locally, you can follow this steps :
1. ``` git clone https://github.com/ferryal/sosmed-react.git ```
2. ``` cd sosmed-react ```
3. ``` npm install ``` or ``` yarn install ```
4. ``` npm start ``` or ``` yarn start ```
5. ``` Local: http://localhost:3000/ ``` or ``` On Your Network:  http://192.168.0.106:3000/ ```


#### Tech Stack
1. React js
2. React router dom
3. Axios
4. React rewired
5. React hot loader
6. Node js

### Styling
1. React semantic ui
2. Sweetalert

#### Routes
Method | URL | Detail
-------|-----|-------
GET | / | Get all users
GET | /post/id | Get posts each user by id
GET | /users/albums/id   |  Get albums each user by id
GET | /photos | Get all photos
GET | /posts/comments/id | Get comments each user post by id
POST | /posts/create | Post an article
POST | /comments| Post an comment
PUT | /comments/id | Put an comment
PUT | /posts/edit/id | Put an article

##### Note: the resource API will not be really created/updated/deleted on the server but it will be faked as if.

##### Note: If you want get all photos be patient cause over loaded [5000 items]
