#!/usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let condition = true;
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "Choice",
                message: "Select an Option you want to perform?",
                type: "list",
                choices: ["Add More", "Delete Task", "Update Task", "View Task", "Exit"]
            }
        ]);
        if (option.Choice === "Add More") {
            await addTask();
        }
        else if (option.Choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.Choice === "Update Task") {
            await updateTask();
        }
        else if (option.Choice === "View Task") {
            await ViewTask();
        }
        else if (option.Choice === "Exit") {
            condition = false;
        }
    }
};
let addTask = async () => {
    let addTask = await inquirer.prompt([
        {
            name: "Task",
            message: "Enter Your Task",
            type: "input"
        }
    ]);
    todoList.push(addTask.Task);
    console.log(`\n ${addTask.Task} Task added successfully in your TODO-List`);
};
let ViewTask = () => {
    console.log(`\n Your TODO-List : \n`);
    todoList.forEach((Task, index) => {
        console.log(`${index}: ${Task}`);
    });
};
let deleteTask = async () => {
    await ViewTask();
    let deleteIndex = await inquirer.prompt([{
            name: "Index",
            type: "number",
            message: "Enter the 'index No' of the task you want to delete.",
        }
    ]);
    let deletedTask = todoList.splice(deleteIndex.Index, 1);
    console.log(`${deletedTask} Task deleted successfully from your TODO-List.`);
};
let updateTask = async () => {
    await ViewTask();
    let updateIndex = await inquirer.prompt([{
            name: "Index",
            type: "number",
            message: "Enter the 'index No' of the task you want to update.",
        }]);
    let NewTask = await inquirer.prompt([{
            name: "New",
            type: "input",
            message: "Enter the New Task",
        }]);
    todoList[updateIndex.Index] = NewTask.New;
    console.log(`${NewTask.New} Task updated successfully in your TODO-List`);
};
main();
