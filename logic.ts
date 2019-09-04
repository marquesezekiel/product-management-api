import axios from 'axios'
import chalk from 'chalk'
import * as ora from 'ora'

const domain: string  = "";

const url: string = `${domain}/api/v1`;
export const addProduct = (answers: any) => {
    (async () => {
        try {
            const spinner = ora('Adding product ...').start();
            console.log(answers);
            let response = await axios.post(`${url}/products`,answers)
            spinner.stop()
            console.log(chalk.magentaBright('New product added'))
        } catch (error) {
            console.log(error)
        }
    })()
}
export const getProduct = (id: number) => {
    ( async ()=>{
        try {
            if (!id) return console.log(chalk.red('*** Please enter a product ID ***'));
            const spinner = ora('Fetching product ...').start();
            let response = await axios.get(`${url}/products/${id}/`)
            spinner.clear()
            spinner.stop()
            let product = response.data.data;
            console.log(chalk.greenBright(`ID: ${id} \nName: ${product.name} \nRating: ${product.rating} \nCategory: ${product.category} \nPrice: ${product.price} \nLink: ${product.link}`))       
        } catch (error) {
            console.log(error)
        }
    })()
}

export const getCategory = (category: any) => {
    ( async ()=>{
        try {
            if (!category) return console.log(chalk.red('*** Please enter a product Category ***'));
            const spinner = ora('Fetching product ...').start();
            let response = await axios.get(`${url}/products/category/${category}/`)
            spinner.clear()
            spinner.stop()
            let obj = response.data;
            for (let key in obj) {
                const products = obj[key].data;
                console.log(chalk.blue('==============='))
                console.log(chalk.greenBright(`id: ${obj[key].id} \nName: ${products.name} \nRating: ${products.rating} \nCategory: ${products.category} \nPrice Number: ${products.price} \nLink: ${products.link}`))
            }            
        } catch (error) {
            console.log(error)
        }
    })()
}

export const updateProduct= (product: any) => {
    (async () => {
        try {
            const spinner = ora('Updating product ...').start();
            let response = await axios.put(`${url}/products/${product.id}` , product)
            spinner.stop()
            console.log(chalk.cyanBright('Product updated'))
        } catch (error) {
            console.log(error)
        }
    })()
}
export const deleteProduct= (id: number) => {
    (async () => {
        try {
            const spinner = ora('Deleting product ...').start();
            let response = await axios.delete(`${url}/products/${id}`)
            spinner.stop()
            console.log(chalk.bgMagentaBright('Product deleted'))
        } catch (error) {
            console.log(error)
        }
    })()
}
export const getProductList= () => {
    (async () => {
        try {
            const spinner = ora('Fetching All product ...').start();
            let response = await axios.get(`${url}/products`)
            spinner.stop()
            let obj = response.data;
            console.log(chalk.green('**********=== Product List===**********'))
            for (let key in obj) {
                const products = obj[key].data;
                console.log(chalk.blue('==============='))
                console.log(chalk.greenBright(`id: ${obj[key].id} \nName: ${products.name} \Rating: ${products.rating} \nCategory: ${products.category} \nPrice: ${products.price} \nLink: ${products.link}`))
            }
        } catch (error) {
            console.log(error)
        }
    })()
}
