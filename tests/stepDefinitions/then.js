
const GoogleSearch = require('../pages/GooglePage.js')

const{
    Then
}= require('cucumber')

/////////GOOGLE ///////
Then(/^I go to the search results page$/, function(){
    GoogleSearch.ResultPageAssertion()
})

Then(/^I go to the “Patrick Rothfuss - The Books” page$/, function(){
    GoogleSearch.ResultValidation()
})