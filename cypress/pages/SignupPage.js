

class SignupPage{

    go(){
        cy.visit('/')
        
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    FillForm(deliver){
        cy.get('input[placeholder="Nome completo"]').type(deliver.name)
        cy.get('input[placeholder="E-mail"]').type(deliver.email)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)
    
        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type="button"]').click()
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)
       
        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

        cy.contains('.delivery-method li', deliver.delivery_method).click()
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)
    }
    
    submit(){
        cy.get('button[type="submit"]').click()
    }

    modalContentShouldBe(expectedMessage){
      cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage)
    }

    alertMessageShouldBe(expectedText){
      //cy.get('.alert-error').should('have.text', expectedText)
      cy.contains('.alert-error', expectedText).should('be.visible')
    }
}
export default new SignupPage;

