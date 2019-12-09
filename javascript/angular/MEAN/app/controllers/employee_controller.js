const Employee = require('../models/employee');

module.exports = {

    getEmployees: async (req, res) => {

        try {
            const employees = await Employee.find();
            res.json(employees);
        } catch (error) {
            res.sendStatus(500).json({status: "Error server", msg: error});
        }            
    },
    getOneEmployee: async (req, res) => {
        const id = req.params.id;

        try {
            const employee = await Employee.findOne({_id: id});
            res.json(employee);
                
        } catch (error) {
            res.sendStatus(412); 
        }        
    },
    createEmployee: async (req, res) =>{

        try {
            const employee = new Employee(req.body);
            await employee.save();
            res.json("Employee Created");

        } catch (error) {
            res.sendStatus(412).json({ msg: error.message });
        }          
    },
    editEmployee: async (req, res) =>{
        const id = req.params.id;
        
        try {
            await Employee.findOneAndUpdate({_id: id}, req.body, {upsert: true});            
            res.json("Employeed Updated");
        } catch (error) {
            res.sendStatus(412);            
        }       
    },
    deleteEmployee: async (req, res) => {
        const id = req.params.id;
        try {
            await Employee.findOneAndDelete({_id: id});
            res.json("Employeed Deleted");
            
        } catch (error) {
            res.sendStatus(412);
        }        
    }
};