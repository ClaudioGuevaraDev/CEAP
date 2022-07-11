import App from './App'

describe("render app", () => {
    it("open app", () => {
        cy.mount(<App/>)
    })
})