
const GoogleSearch = require('../pages/GooglePage.js')


const{
    When
}= require('cucumber')

///////////////////////// google ////////////////////////

When(/^I type “The name of the wind” into the search field$/, function(){
    GoogleSearch.Searchaction('The name of the wind')
})

When(/^I click the Google Search button$/, function(){
    GoogleSearch.GoogleClickButton()

})

When(/^the first result is “The Name of the Wind - Patrick Rothfuss”$/, function(){
    GoogleSearch.SearchAssertion('El nombre del viento - Wikipedia, la enciclopedia libre')
})

When(/^I click on the first result link$/, function(){
    GoogleSearch.clickFirstResult()

})

When(/^I type “The name of the w” into the search field$/, function(){
    GoogleSearch.Searchaction('The name of the w')

})


When(/^the suggestions list is displayed$/, function(){
})
   GoogleSearch.SearchactionDropdownlist('the name of the wind')


When(/^I click on the first suggestion in the list$/, function(){
    GoogleSearch.DropdownSelectvalue()
})

