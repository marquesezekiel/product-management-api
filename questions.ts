export let questions: Array<Object> = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter Product Name'
    },
    {
        type: 'input',
        name: 'category',
        message: 'Enter Product Category'
    },
    {
        type: 'input',
        name: 'price',
        message: 'Enter Product Price'
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter Product Link'
    },
    {
        type: 'input',
        name: 'rating',
        message: 'Enter Product Rating'
    }
]
export let getIdQuestions: Array<Object> = [
    {
        type: 'input',
        name: 'id',
        message: 'Enter the product id'
    }
]
export let getCategoryQuestions: Array<Object> = [
    {
        type: 'input',
        name: 'category',
        message: 'Enter a category'
    }
]
export let updateProductQuestions: Array<Object> = [
    {
        type: 'input',
        name: 'id',
        message: 'Enter the product id'
    },
    ...questions
]
