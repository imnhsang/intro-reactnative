module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'react/prefer-stateless-function': 0,
        'linebreak-style': 0,
        'jsx-a11y/heading-has-content': 0,
        'jsx-a11y/href-no-hash': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'no-underscore-dangle': 0,
        'react/no-find-dom-node': 0,
        'react/prop-types': 0,
        'no-nested-ternary': 0,
        'react/display-name': 0,
        'quotes': [2, 'single', 'avoid-escape'],
        'jsx-quotes': ['error', 'prefer-single'],
        'semi': ['error', 'never']
    }
}
