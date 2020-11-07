## Shopping List
Category Based Shopping List Service

# Table of Content
* [Technologies](#technologies)
* [Setup](#setup)
* [APIs] (*api-list)

# Technologies
The project Leverages Node.js and Mongo and docker.

# Setup
To run this project:
```
$ docker-compose build
$ docker-compose up
```

# APIs
1. Create an item category

The endpoint will create a category
```
API: POST /list/categories/<category>
```
E.g. POST /list/categories/grocery

2. Add an item to the list

The endpoint will add an item under a category to the shopping list.
```
API: POST /list/categories/<category>/items/<item>
```
E.g. POST /list/categories/grocery/items/milk

3. Get shopping list summary

The endpoint returns the total number of unique items present in the shopping list
```
API: GET /list Response: <Number of unique items in the list>
```
E.g. GET /list Response: 1 