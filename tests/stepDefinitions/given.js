
const GoogleSearch = require('../pages/GooglePage.js')


const{
    Given
}= require('cucumber')



////////////////// Google TESTS ///////////////////////////////////////

Given(/^I’m on the homepage$/, function(){
    GoogleSearch.MainPageAssertion()
})
