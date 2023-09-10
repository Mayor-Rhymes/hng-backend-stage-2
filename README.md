## HNG BACKEND STAGE TWO TASK

#### This project has been created in fulfillment of the task requirements for stage two backend.

##### How to set up?

Clone the repository using the following command

`git clone https://github.com/Mayor-Rhymes/hng-backend-stage-2.git`


After cloning the repository, make sure you have node js and npm installed on your PC.

If you have nodejs and npm installed on your PC, type the following command in the project directory

`npm install`

The command above will install all the dependencies of this project.

After installation is complete, type the following command

`npm run dev`

The command above will run the server immediately.

##### TECHNOLOGIES USED?

The project uses [mongodb](https://mongodb.com) which is a no-sql database and it uses [mongoosejs](https://mongoosejs.com) which is an ODM (Object Data Modelling) library for [mongodb](https://mongodb.com). As a result, you need to have mongodb installed on your computer regardless of operating system. Additionally, this project uses [hono.dev](https://hono.dev) which is a fast web framework for node js. 


##### How to use the API

The api is quite straightforward. It is made up of just one route, which is the `api/` endpoint.

This route has a very simplistic model


##### The following endpoints and combinations are available:

###### GET REQUESTS

- http://localhost:4000/api -> This endpoint results in a json response like so:

```
   {
    "persons": [
        {
            "_id": "64fe024f39a38b4f4c23a375",
            "name": "Wale Alao",
            "__v": 0
        }
    ]
  }
```
Simply put, it returns a JSON response with the persons property which is an array of persons within the database. It is also a GET request.

- http://localhost:4000/api/id -> This endpoint results in a json response like so:

```
  {
    "_id": "64fe024f39a38b4f4c23a375",
    "name": "Wale Alao",
    "__v": 0
  }

```
This endpoint only gets one data which matches the id which exists within the endpoint. It is a GET request

- http://localhost:4000/api?name=name -> This endpoint is a GET request which returns a person with the given name from the database as long as it exists. If it does not exist, it returns an error.

###### POST REQUESTS

- http://localhost:4000/api -> This endpoint is a POST request which requires a request body in JSON format. No other format is supported but JSON. The request body permitted is just the name of the person. The format looks like this:

```  
  {

    "name": "Michael Rega"

  }

```

- http://localhost:4000/api?name=name -> This endpoint is a POST request which requires a query called name. This name query can be used to create a new person with the said name. The name has to be unique, that is, it should be a name that does not already exist.


###### PUT REQUESTS

- http://localhost:4000/api/id -> This endpoint is a PUT request which updates the person with the given id from the database as long as it exists. The request body is required in this case. Like so:

```
  {
     name: "Wale Fudion"

  }
```

- http://localhost:4000/api?name=name -> This endpoint is a PUT request which updates the person with the given name from the database as long as it exists. The request body is required in this case. Like so:

```

  {

    newName: "New name"

  }

```

###### DELETE REQUESTS

- http://localhost:4000/api/id -> This endpoint is a DELETE request which deletes the person with the given id from the database as long as it exists. If it does not exist, it returns an error

- http://localhost:4000/api?name=name -> This endpoint is a DELETE request which deletes the person with the given name from the database as long as it exists. If it does not exist, it returns an error.



The model which exists in the database can be represented like so:

###### In Javascript?

```
  interface Person {

      id: string;
      name: string;

  }

```

###### In C#?

``` 

   class Person {

       public string id {get;}

       public string name {get; set;}

       public Person(string id, string name) {

          this.id = id;
          this.name = name;

       }
   }

```

###### In Mongoose js style?

```
 const personSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    }
  },
 
);

```




