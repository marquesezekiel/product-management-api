# Product Manager

This is a command-line product management system built with TypeScript, Node.js, Firestore  and Firebase Cloud Functions.

## Prerequisites

1. The latest copy of the `firebase-tools`.
2. The latest version of `firebase-admin`  
3. The latest version of `firebase-functions`  
4. The latest copy of the `ts-node`.
5. The latest version of `Commander`
6. The latest version of `Inquirer`

### Configuration
To start, simply configure your .firebaserc with your project name
```javascript
{
  "projects": {
    "default": "[YOUR-PROJECT]"
  }
}
```

Next, configure your .logic.ts with your firebase hosting domain
```javascript
const domain: string = "[firebase-hosting-domain]"
```

### Installing
Install packages under root and inside functions folder:
* `$ npm i ts-node -g` - this allows you to run `ts` scripts directly.
* `$ npm install`
* `$ cd functions`
* `$ npm install`
* `$ npm install firebase-functions@latest`
* `$ firebase-admin@latest --save`
* `$ npm install -g firebase-tools`
* `$ firebase login`
* `$ firebase deploy`

## Running the command-line system
Navigate to the project root folder
* `$ cd product-manager`

Usage:  [options] [command]

  Product Management System


  Options:

    -V, --version  output the version number
    -h, --help     output usage information


  Commands:

    addProduct|a       Add a product
    getProduct|g       Get product
    updateProduct|u    Update product
    deleteProduct|d    Delete a product
    getProductList|l   Get product List

### Adding a product
* `$ ts-node product add`

### Viewing a product by category
* `$ ts-node product category`


### Viewing a product by id
* `$ ts-node product find`

### Viewing all products
* `$ ts-node product list`


### Deleting a product
* `$ ts-node product delete`
