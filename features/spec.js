var page = require('../features/pages/homePage.js');
describe('Test 1', function() {
 it('Test 1', function() {
    browser.waitForAngularEnabled(false);
    browser.get(page.EDFHomepage.EDFHome);
    var EDFtitle= element(by.linkText(page.EDFHomepage.ChallengingDOMText));
    expect(EDFtitle.getText()).toEqual(page.EDFHomepage.ChallengingDOMText);
    EDFtitle.click();
    });
 it('Test 2', function() {
    browser.get(page.EDFHomepage.EDFHome);
    var titleEDF= element(by.linkText(page.EDFHomepage.DynamicLoading));
    expect(titleEDF.getText()).toEqual(page.EDFHomepage.DynamicLoading);
    titleEDF.click();
    var EDFsectionTitle= element(by.linkText(page.EDFHomepage.ExpectedText01));
    EDFsectionTitle.click();
    var SubtitleEDF= element(by.css(page.EDFHomepage.ContentLocator));
    expect(SubtitleEDF.getText()).toEqual(page.EDFHomepage.ExpectedText01);
    var EDFbutton= element(by.id(page.EDFHomepage.ButtonText01));
    expect(EDFbutton.getText()).toEqual(page.EDFHomepage.ButtonText02);
    EDFbutton.click();
  });
 it('Test 3', function() {
    var Subtitle= element(by.css(page.EDFHomepage.ContentLocator));
    expect(Subtitle.getText()).toEqual(page.EDFHomepage.ExpectedText01);
    var button = element(by.buttonText(page.EDFHomepage.ButtonText02));
    button.click();
    var EDFC = protractor.ExpectedConditions;
    browser.wait(EDFC.textToBePresentInElement($(page.EDFHomepage.FinishElelent), page.EDFHomepage.ExpectedText02), 50000);
  });
});