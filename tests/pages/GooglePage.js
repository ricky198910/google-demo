const SELECTORS={
    WEB:{
        SEARCH_FIELD: "#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input",
        GOOGLE_LOGO: "#hplogo",
        GOOGLE_DIV:"#tsf > div:nth-child(2)",
        GOOGLE_SEARCH_BUTTON: "#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.tfB0Bf > center > input.gNO89b",
        CONTENT_SEARCHED:"#rso > div:nth-child(1) > div > div.yuRUbf > a > h3 > span",
        RESULT_PAGE_LOGO: "#logo > img",
        WIKI_LOGO: "#p-logo > a",
        WIKI_TITLE: "#firstHeading",
        SEARCH_OPTION1: "#tsf > div:nth-child(2) > div.A8SBwf.emcav > div.UUbT9 > div.aajZCb > ul > li:nth-child(1) > div > div.sbtc",
        SEARCH_OPTION_TEXT:"#tsf > div:nth-child(2) > div.A8SBwf.emcav > div.UUbT9 > div.aajZCb > ul > li:nth-child(1) > div > div.sbtc > div.sbl1 > span"

    }
}

class GooglePage{

    get SearchField(){
        return $(SELECTORS.WEB.SEARCH_FIELD)
    }
    get GoogleLogo(){
        return $(SELECTORS.WEB.GOOGLE_LOGO)
    }
    get GoogleSearchButton(){
        return $(SELECTORS.WEB.GOOGLE_SEARCH_BUTTON)
    }
    get GoogleDiv(){
        return $(SELECTORS.WEB.GOOGLE_DIV)
    }
    get ContentSearched(){
        return $(SELECTORS.WEB.CONTENT_SEARCHED)
    }
    get ResultPagelogo(){
        return $(SELECTORS.WEB.RESULT_PAGE_LOGO)
    }
    get WikiLogo(){
        return $(SELECTORS.WEB.WIKI_LOGO)
    }
    get WikiTitle(){
        return $(SELECTORS.WEB.WIKI_TITLE)
    }
    get SearchOption1(){
        return $(SELECTORS.WEB.SEARCH_OPTION1)
    }
    
    get SearchOption1Text(){
        return $(SELECTORS.WEB.SEARCH_OPTION_TEXT)
    }

   MainPageAssertion()
   {   //browser.pause(5000)
       this.SearchField.waitForExist(5000)
       expect(this.SearchField).toBeVisible(20000)
       
   }

   Searchaction(TitleValue)
    {
        this.SearchField.setValue(TitleValue)
    }

    SearchactionDropdownlist(TitleValue)
    {

        expect(this.SearchOption1Text).toHaveText(TitleValue)
    }

    DropdownSelectvalue()
    {
        this.SearchOption1.click()

    }

    GoogleClickButton()
    {  
        this.GoogleSearchButton.waitForDisplayed()
        this.GoogleSearchButton.click() 
    }

    SearchAssertion()
    {
        this.ContentSearched.waitForDisplayed(20000)
        expect(this.ContentSearched).toHaveText('El nombre del viento - Wikipedia, la enciclopedia libre')
    }

    ResultPageAssertion()
    {
        expect(this.ResultPagelogo).toBeDisplayed()
    }

    clickFirstResult()
    {
        this.ContentSearched.waitForDisplayed()
        this.ContentSearched.click()
        expect(this.ResultPagelogo).not.toBeDisplayed()
    }

    ResultValidation()
    {
        expect(this.WikiLogo).toBeDisplayed()
        expect(this.WikiTitle).toHaveText('El nombre del viento')
        expect(browser).toHaveUrl('https://es.wikipedia.org/wiki/El_nombre_del_viento')
    }


    






    verifyPageloaded(){
        expect(this.continueAssessmentButton).toBeDisplayed()
    }

    verifyUIElements(){
        expect(this.clarityLogo).toBeDisplayed()
        expect(this.saveProgressButton).toBeDisplayed()
        expect(this.userMenuButton).toBeDisplayed()
        expect(this.title).toBeDisplayed()
        expect(this.subtitle).toBeDisplayed()
        expect(this.message).toBeDisplayed()
        expect(this.percentageCompleted).toBeDisplayed()
        expect(this.progressBar).toBeDisplayed()
        expect(this.continueAssessmentButton).toBeDisplayed()
    }

    verifyContinueScreen(){
        expect(this.title).toBeDisplayed()
    }

    continueAssessmentButtonClick(){
        this.continueAssessmentButton.click()
    }


}

module.exports = new GooglePage()