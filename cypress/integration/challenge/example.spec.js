//Autocomplete support for cypress. Vscode will auto download the packages we need
/// <reference types = "cypress"/>

import { ExamplePage } from "../../page-objects/exmple-page"

describe('Automation challenge example page', ()=>{

    //Create a new obeject to use the ExamplePage class
    const examplePage = new ExamplePage()

    //Wait 2 seconds after each testcase executed.
    afterEach(()=>{
        examplePage.waitingTime(2000)
    })

    //call the navigate() method using ExamplaPage object reference to navigate to the given URL
    it('Navigate to the root page',()=>{
        examplePage.navigate('https://devexpress.github.io/testcafe/example/');
    })  
    
    it('Enter “test” as name and click on populate',()=>{
        examplePage.addName("test")
    })

    it('Reset information by clicking “OK” in the alert',()=>{
        examplePage.resetInformation()
    })

    it('Select 2nd and 3rd options in “Which features are important to you',()=>{
        examplePage.selectFeature1()
        examplePage.validateText(2,3,'Re-using existing JavaScript code for testing')
        examplePage.selectFeature2()
        examplePage.validateText(2,4,'Running tests in background and/or in parallel in multiple browsers')
    })

    it('Select one of Operating system',()=>{
        examplePage.selectOperatingSystem()
        examplePage.validateText(1,2,'Windows')
    })

    it('Select “JavaScript API” in “TestCafe interface” dropdown',()=>{
        examplePage.selectInterface('JavaScript API')
        examplePage.validateDropdown('JavaScript API')
    })

    it("Increase “TestCafe scale” to 5",()=>{
        examplePage.selectScaleSlider();
        examplePage.rateScale("{rightarrow}{rightarrow}{rightarrow}{rightarrow}")
    })

    it('Enter test text to “Please let us know what you think:” text box',()=>{
        examplePage.enterText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat risus diam, non accumsan nulla viverra nec. Morbi id tristique augue. ")
    })

    it('Click on Submit button',()=>{
        examplePage.submitData()
    })

    it('Verify “Thank you, Peter Parker!” is displaying when click on Submit',()=>{
        examplePage.verifySubmition()
    })
})
