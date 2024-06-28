import './commands'

require('cypress-xpath')

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', () => {
    return false
})

// Ajustando o padão de prioridade dos selectors
// Default Selector Priority
// data-cy
// data-test
// data-testid
// data-qa
// id
// class
// tag
// attributes
// nth-child
// data-wc (criado para exemplo)
// $el (Object)

Cypress.SelectorPlayground.defaults({
    selectorPriority: ['data-wc', 'data-cy', 'data-test', 'data-testid', 'id', 'class', 'attributes', 'tag', 'nth-child']
})