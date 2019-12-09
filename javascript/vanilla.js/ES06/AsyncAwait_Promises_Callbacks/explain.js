//-------Callbacks------------------------------------
/**Es una funcion que es llamada en el momento que se esta ejecutando una preticion o otra funcion */

function requestHandler(req, res){
    User.findById(req.userId, function(err, user){
        if(err){
            res.send(err);
        }else{
            Tasks.findById(user.taskId, function(err, tasks) {

               if(err){
                    res.send(err);
               }else{
                   tasks.completed = true;

                   tasks.save(function(err){

                        if(err){
                            return res.send(err);
                        }else{
                            res.send("Rask Completed");
                        }
                   });
               } 
            });
        }
    });
}

//----------------------Promises----------------------------
/** */
function requestHandler(req, res){
    User.findById(req.userId)
        .then(function(user){
            return Task.findById(user.tasksId);
        })
        .then(function(tasks){
            tasks.completed = true;
            return tasks.save();
        })
        .then(function(){
            res.send("Task Completed");
        })
        .catch(function(err){
            res.send(err);
        })
}

//----------------------Async-Await--------------------------------------

async function requestHandler(req, res){

    try {

        const user = await User.findById(req.userId);
        const task = await Task.findById(user.taskId);
        task.completed = true;
        await tasks.save();
        res.send("Task Completed");
        
    } catch (error) {
        res.send(error);
    }
    
}

