module.exports = {
    env:{
        es2021: true,
        node: true
    },
    extends: [
        'standard',
        'prettier'
    ],
    Plugins:['prettier'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    rules: {
        camelCase:'off',
        "prettier/prettier":"error"
    }
}


