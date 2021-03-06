import express from "express";
import users from "./usersRoutes.js"
import tasks from "./tasksRoutes.js"


const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({name: "Curso de node"})
  })

  
  app.use(
    express.json(),
    users,
    tasks
  )
}

export default routes