#!/usr/bin/env node
import './polyfills'
import * as commander from 'commander'
import * as inquirer from 'inquirer'
import chalk from 'chalk'
import * as actions from './logic';
import { getIdQuestions, questions, getCategoryQuestions, updateProductQuestions } from './questions'

commander
    .version('1.0.0')
    .description('Products Management System')

commander
    .command('addProduct')
    .alias('add')
    .description('Add a product')
    .action(() => {
        console.log(chalk.yellow('=========*** Products Management System ***=========='))
        inquirer.prompt(questions).then((answers) => actions.addProduct(answers))
    })
commander
    .command('getProduct')
    .alias('find')
    .description('Get product')
    .action(() => {
        console.log(chalk.yellow('=========*** Products Management System ***=========='))
        inquirer.prompt(getIdQuestions).then((answers) => actions.getProduct(answers.id))
        
    })
commander
    .command('getCategory')
    .alias('category')
    .description('Get by category')
    .action(() => {
        console.log(chalk.yellow('=========*** Products Management System ***=========='))
        inquirer.prompt(getCategoryQuestions).then((answers) => actions.getCategory(answers.category))
        
    })
commander
    .command('updateProduct')
    .alias('update')
    .description('Update product')
    .action(() => {
        console.log(chalk.yellow('=========*** Products Management System ***=========='))
        inquirer.prompt(updateProductQuestions).then((answers) => actions.updateProduct(answers))
    })
commander
    .command('deleteProduct')
    .alias('delete')
    .description('Delete a product')
    .action(() => {
        console.log(chalk.yellow('=========*** Products Management System ***=========='))
        inquirer.prompt(getIdQuestions).then((answers) => actions.deleteProduct(answers.id))
    })
commander
    .command('getProductList')
    .alias('list')
    .description('Get product List')
    .action(() => {
        console.log(chalk.yellow('=========*** Products Management System ***=========='))
        actions.getProductList()
    })

if(!process.argv.slice(2).length) {
    commander.outputHelp()
    process.exit()
}
commander.parse(process.argv)
