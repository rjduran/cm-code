# hello-mongo

These exercises provide a learning pathway for understanding how to use [MongoDB](https://www.mongodb.com/) with Node.js for the development of interactive and connected devices.

## Table of Contents

* [What is MongoDB?](#what-is-mongodb)
* [Install MongoDB](#install-mongodb)
    * [tmux](#tmux)
* [Exercise-01: Hello MongoDB](#exercise-01-hello-mongodb)
    * [How does MongoDB store data?)](#how-does-mongodb-store-data)
    * [How do you work with Documents?](#how-do-you-work-with-documents)
    * [The mongo Shell](#the-mongo-shell)
    * [Create Document](#create-document)
    * [Read Document](#read-document)
    * [Update Document](#update-document)
    * [Destroy Document](#destroy-document)
* [References](#references)

## What is MongoDB?

Info here..

## Install MongoDB

Read through the setup guide here: [Install MongoDB on OSX](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/). The following install sequence is based on this setup procedure.

Update brew packages:
```
brew update
```

For new installs:
```
brew install mongodb
```

To update an install:
```
brew update mongodb
```

To see if mongodb is installed:
```
brew list
```

You should see `mongodb` in the list.


After installing mongo you need to setup a "database" directory. This is where all your data will be stored.

Make a new directory in the default location:
```
mkdir -p /data/db
```

Change permissions on `/data/db` directory:
```
sudo chmod 777 /data
sudo chmod 777 /data/db
```

At this point you should be ready to launch the database using `mongod`. Open a terminal window and run the following command. You will need to leave this window open so the command can run. You will access the database system in another terminal window with the `mongo` command. When you are ready to quit , just ctrl+c in the terminal running `mongod`.

Terminal 1 (leave open and minimize):
```
mongod
```

Terminal 2:
```
mongo
```

### tmux

Pro tip: To supercharge your terminal game you can use a terminal window manager suc as `tmux`. This allows you to use one terminal to open a "session" similar to the `screen` terminal utility. Check out these great introductions to `tmux` to learn more. [A Gentle Introduction to tmux](https://hackernoon.com/a-gentle-introduction-to-tmux-8d784c404340) and [A tmux Primer](https://danielmiessler.com/study/tmux/).

Quick Command Reference
* Detach tmux: `ctrl+b + d` (From inside tmux)
* Reattach tmux (to last session): `tmux # a` (From Terminal)
* Make horizontal split: `ctrl+b + "`
* Make vertical split: `ctrl+b + %`
* Resize bottom panel down: `ctrl+b :` + `resize-pane -D 20`
* Resize top panel up: `ctrl+b :` + `resize-pane -U 20`


## Exercise-01: Hello MongoDB

Setup database and Create a record, Read a record, Update a record, and Destroy a record.

To understand a bit more about how the database component of a modern web application fits into the technology stack, check out this video from Traversy Media. MVC stands for [Model-View-Controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller). This is a common architectural pattern in software engineering and web development.

* [What is MVC? by Traversy Media](https://www.youtube.com/watch?v=pCvZtjoRq1I)

### How does MongoDB store data?

MongoDB stores BSON documents, i.e. data records, in collections; the collections in databases.

* [Databases and Collections](https://docs.mongodb.com/manual/core/databases-and-collections/)
* [BSON Document](https://docs.mongodb.com/manual/core/document/#bson-document-format)

### How do you work with Documents?

Mongo uses the familiar [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) acronym that describe the four basic functions of persistent storage - create, read, update, and destroy.

* [What is CRUD?](https://www.codecademy.com/articles/what-is-crud)
* [MongoDB CRUD Operations](https://docs.mongodb.com/manual/crud/)
    * Create - [Insert Document](https://docs.mongodb.com/manual/tutorial/insert-documents/)
    * Read - [Query Document](https://docs.mongodb.com/manual/tutorial/query-documents/)
    * Update - [Update Document](https://docs.mongodb.com/manual/tutorial/update-documents/)
    * Destroy - [Delete Document](https://docs.mongodb.com/manual/tutorial/remove-documents/)

### The `mongo` shell

The mongo shell is an interactive JavaScript interface to MongoDB. You can use the mongo shell to query and update data as well as perform administrative operations.

* [Introducing the `mongo` shell](https://docs.mongodb.com/manual/mongo/)
* [Mongo shell quick reference](https://docs.mongodb.com/manual/reference/mongo-shell/)
* [Working with the `mongo` shell](https://docs.mongodb.com/manual/mongo/#working-with-the-mongo-shell)

To get help, type `help` in the `mongo` shell:
```
help
```

To display the current database:
```
db
```

To list out available databases:
```
show db
```

To switch to a different database:
```
use <database>
```

When you switch to a non-existent database it will create a new one with the name used in place of `<database>`.

For example, this will create a new database named "hello".
```
use hello
```

### Create Document

Insert an object into a collection:
```
db.myCollection.insertOne({x: 1});
db.myCollection.insertOne({y: 10});
```

After creating an object, `mongo` will print out the acknowledgement and `ObjectId`.
```
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5acbfe9d3d4bf5d4f25ab742")
}
```

Try adding a few more documents to the collection `myCollection`. What happens when you add another object with the same data in it?

### Read Document

To list out all the objects in the collection:
```
db.myCollection.find()
```

To find a specific document within a collection:
```
db.myCollection.find({y: 10})
```
This will return an object with a defined ObjectId. In MongoDB, each document stored in a collection requires a unique `_id` field that acts as a primary key. If an inserted document omits the `_id` field, the MongoDB driver automatically generates an ObjectId for the `_id` field. Read more about this [here](https://docs.mongodb.com/manual/tutorial/insert-documents/#insert-id-field).
```
{ "_id" : ObjectId("5acbfd943d4bf5d4f25ab740"), "y" : 10 }
```

### Update Document

Assuming there are multiple documents in the collection that have the same or similar data in them, this is how you would update the first object to have a different value for the key "y".

Objects in Collection `myCollection`:

```
> db.myCollection.find()
{ "_id" : ObjectId("5acba6443d4bf5d4f25ab73f"), "x" : 1 }
{ "_id" : ObjectId("5acbfd943d4bf5d4f25ab740"), "y" : 10 }
{ "_id" : ObjectId("5acbfe8d3d4bf5d4f25ab741"), "y" : 10 }
{ "_id" : ObjectId("5acbfe9d3d4bf5d4f25ab742"), "y" : 10 }
```

With the following this will update the first object that matches the search `<filter>` criteria `{y:10}` with a value of 100.

```
db.myCollection.updateOne({y:10}, {$set: {"y": 100}})
```
The result will look like:
```
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
```

If I then list out all the objects in the collection, I see the following:
```
> db.myCollection.find()
{ "_id" : ObjectId("5acba6443d4bf5d4f25ab73f"), "x" : 1 }
{ "_id" : ObjectId("5acbfd943d4bf5d4f25ab740"), "y" : 100 }
{ "_id" : ObjectId("5acbfe8d3d4bf5d4f25ab741"), "y" : 10 }
{ "_id" : ObjectId("5acbfe9d3d4bf5d4f25ab742"), "y" : 10 }
```

### Destroy Document

To destroy a document in a collection you can use the following command:
```
> db.myCollection.deleteOne({y: 10})
```

This will return the following result acknowledging the first document matching the search `<filter>` criteria will be deleted.
```
{ "acknowledged" : true, "deletedCount" : 1 }
```

If I then list out all the object sin the collection, I see the following:
```
> db.myCollection.find()
{ "_id" : ObjectId("5acba6443d4bf5d4f25ab73f"), "x" : 1 }
{ "_id" : ObjectId("5acbfd943d4bf5d4f25ab740"), "y" : 100 }
{ "_id" : ObjectId("5acbfe9d3d4bf5d4f25ab742"), "y" : 10 }
```

## References

* [MongoDB](https://www.mongodb.com/)













