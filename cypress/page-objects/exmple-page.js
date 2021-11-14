export class ExamplePage{

    //To define the waiting time 
    waitingTime(time){
        cy.wait(time)
    }

    //To add the navigation URLs 
    navigate(urlToNavigate){
        cy.visit(urlToNavigate)
    }

    //To add the text to the given selector
    addName(name){
        cy.get('[data-testid=name-input]').type(name)
    }

    //To accept the JS Confirmation message after clicking 'Pupulate' button
    resetInformation(){
        cy.get('[data-testid=populate-button]').click()
        cy.on('window:confirm',(message)=>{
            expect(message).to.contains('Reset information before proceeding?')
            return true;
        })
    }

    //To validate a partial text of the given selector
    validateText(index1,index2,expectedText){
        cy.get(`:nth-child(${index1}) > :nth-child(${index2}) > label`).should('contain.text',expectedText)
    }

    //To validate the selected dropdown option value
    validateDropdown(expectedValue){
        cy.get('[data-testid=preferred-interface-select]').should('contain.value',expectedValue)
    }

    //To select the checkbox
    selectFeature1(){
        cy.get('[data-testid=reusing-js-code-checkbox]').click()
    }

    //To select another checkbox
    selectFeature2(){
        cy.get('[data-testid=parallel-testing-checkbox]').click() 
    }

    //To select a radio button
    selectOperatingSystem(){
        cy.get('[data-testid=windows-radio]').click()
    }

    //To select a dropdown option
    selectInterface(interfacevalue){
        cy.get('[data-testid=preferred-interface-select]').select(interfacevalue)
    }

    //To enable the slider & select slider pointer to move
    selectScaleSlider(){
        cy.get('[data-testid=tried-testcafe-checkbox]').click()
        cy.get('.ui-slider-handle').click({multiple: true,force: true})
    }

    //To determine the slider value
    rateScale(sliderValue){
        cy.get('.ui-slider-handle').type(sliderValue)
    }

    //To enter text to the text box
    enterText(textArea){
        cy.get('[data-testid=comments-area]').type(textArea)
    }

    //To click the 'Submit' button
    submitData(){
        cy.get('[data-testid=submit-button]').click()          
    }

    //To verify that navigated to the correct page after submitting the data
    verifySubmition(){
        cy.url().should('be.equal','https://devexpress.github.io/testcafe/example/thank-you.html') 
    }

}