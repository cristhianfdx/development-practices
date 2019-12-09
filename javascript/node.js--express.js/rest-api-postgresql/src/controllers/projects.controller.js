import models from '../models/index';

const Project = models.Project;


export async function getProjects(req, res) {
    const projects = await Project.findAll();
    res.json({
        data: projects
    })
}

export function createProject(req, res) {

    const {
        name,
        priority,
        description,
        deliverydate
    } = req.body;

    Project.create({
            name,
            priority,
            description,
            deliverydate
        })
        .then(result => res.status(201).json({
            message: "Project saved"
        }))
        .catch(err => res.status(500).json({
            message: err.message
        }));

}

export async function getOneProject(req, res) {

    const { id } = req.params;

    try {
        const project = await Project.findOne({
            where: {
                id
            }
        });

        if (project) {
            res.json({
                data: project
            });
        } else {
            res.json({
                data: {}
            });
        }

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }

}

export async function deleteProject(req, res){

    const { id } = req.params;

    try {
        await Project.destroy({
            where: {
                id
            }
        });
        res.json({message: "Project deleted"});

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }

}

export async function updateProject(req, res){
    const {id} = req.params;

    const {
        name,
        priority,
        description,
        deliverydate
    } = req.body;

    try {

        await Project.update({name, priority, description, deliverydate},{where :{id}});
        res.json({
            message : "Project updated"
        });        
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

