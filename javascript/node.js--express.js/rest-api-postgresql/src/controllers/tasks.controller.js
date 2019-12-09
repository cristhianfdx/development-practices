import models from '../models/index';

const Task = models.Task;

export async function getTasks(req, res){

    try {
        const tasks = await Task.findAll({});
        res.json({data: tasks});
    } catch (error) {
        res.json(error.message);
    }
    

}

export async function createTask(req, res){

    const {name, done, projectId} = req.body;

    console.log(req.body);

    await Task.create({
        name,
        done,
        projectId
    });

    res.json({message: "Task created"});

}

export async function deleteTask(req, res){
    const {id} = req.params;
    await Task.destroy({where: {id}});
    res.json({message: "Task deleted"});
}

export async function updateTask(req, res){
    const {id} = req.params;
    const {name, done, projectId} = req.body;
    await Task.update({name, done , projectId},{where: {id}});
    res.json({message: "Task updated"});
}

export async function getOneTask(req, res){
    const {id} = req.params;
    const task = await Task.findOne({where:{id}});
    res.json({data: task})
}

export async function getTaskByProject(req, res){
    const {projectId} = req.params;
    const task = await Task.findAll({
        where: {
            projectId 
        }
    });
    res.json({data: task});
}