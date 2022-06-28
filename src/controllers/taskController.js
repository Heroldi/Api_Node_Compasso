import tasks from "../models/Task.js";

class TaskController {

  static listarTasks = (req, res) => {
   tasks.find()
      .populate('user', 'name')
      .exec((err, tasks) => {
        res.status(200).json(tasks)
  })
  }

  static listarTaskPorId = (req, res) => {
    const id = req.params.id;

    tasks.findById(id)
      .populate('user', 'name')
      .exec((err, tasks) => {
      if(err) {
        res.status(400).send({message: `${err.message} - ID not found.`})
      } else {
        res.status(200).send(tasks);
      }
    })
  }

  static cadastrarTask = (req, res) => {
    let task = new tasks(req.body);

    task.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - Failed to register task.`})
      } else {
        res.status(201).send(task.toJSON())
      }
    })
  }

  static atualizarTask = (req, res) => {
    const id = req.params.id;

    tasks.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Task updated successfully'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirTask= (req, res) => {
    const id = req.params.id;

    tasks.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Task successfully removed'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static listarTaskPorUser = (req, res) => {
    const user = req.query.user

    tasks.find({'user': user}, {}, (err, tasks) => {
      res.status(200).send(tasks);

    })
  }





}

export default TaskController