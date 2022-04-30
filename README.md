<h1 align="center">Reblog API</h1>


A simple API for my [Reblog](https://github.com/ArjunLubana/reblog.git) React Web Application for composing and publishing next generation blogs written in DraftJS.

---
<h2 align="center">Stack</h2>

> Express

> Postgresql

> Sequelize ORM.

<h2 align="center">API Endpoints</h2>

---

### Blogs
`GET`
- #### `/blogs/all`
    Get all blogs

- #### `/blogs/:id`
    Get a blog with a particular Id

`POST`
- #### `/blogs/new`
    Add a blog with a particular Id

`UPDATE`
- #### `/blogs/:id/update`
    Get a blog with a particular Id

`DELETE`
- #### `/blogs/"id/delete"`
    Get a blog with a particular Id

<h2 align="center">Development Setup</h2>

To get up and running, run these commands in your Bash terminal or Windows Commmand Prompt;


    $ git clone https://github.com/ArjunLubana/reblog-api.git 
    $ cd reblog-api && yarn
    $ yarn dev