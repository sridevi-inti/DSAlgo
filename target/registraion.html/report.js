$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Test login Page with dropdown on home page",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "user is on landing page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is on landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.RegistrationSD.user_is_on_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on get Started button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.RegistrationSD.user_clicks_on_get_started_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.RegistrationSD.user_should_be_navigated_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "check dropdown",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user should be navigated to home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.RegistrationSD.user_should_be_navigated_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see 6 panels with different structures",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.LoginSD.the_user_should_see_panels_with_different_structures()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks DataStructures dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.LoginSD.user_clicks_DataStructures_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see 6 different data structures in dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.LoginSD.user_should_see_different_data_structures_in_that_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select one data structure from dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.LoginSD.user_select_one_data_structure_from_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.LoginSD.error_message_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "check Login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user should be navigated to home page",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks on sign In link",
  "keyword": "When "
});
formatter.step({
  "name": "user should be landed on login page",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters \u003cusername\u003e and \u003cPassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "name": "if login is sucessful user should be redirected to homepage or error message should display",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "Password"
      ]
    },
    {
      "cells": [
        "gfteuryt",
        ""
      ]
    },
    {
      "cells": [
        "xyz1234",
        "kk12kk12"
      ]
    }
  ]
});
formatter.background({
  "name": "user is on landing page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is on landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.RegistrationSD.user_is_on_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on get Started button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.RegistrationSD.user_clicks_on_get_started_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.RegistrationSD.user_should_be_navigated_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "check Login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user should be navigated to home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.RegistrationSD.user_should_be_navigated_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on sign In link",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.LoginSD.user_clicks_on_sign_in_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be landed on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.LoginSD.user_should_be_landed_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters gfteuryt and ",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.LoginSD.user_enters_username_and_Password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.LoginSD.click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "if login is sucessful user should be redirected to homepage or error message should display",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.LoginSD.if_login_is_sucessful_user_should_be_redirected_to_homepage_or_error_message_should_display()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with locator By.xpath: //*[@class\u003d\u0027alert alert-primary\u0027]\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.4.0\u0027, revision: \u0027e5c75ed026a\u0027\nSystem info: host: \u0027PANDYA\u0027, ip: \u002710.0.0.75\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy38.getText(Unknown Source)\r\n\tat pages.LoginPage.LoginValidationMsg(LoginPage.java:59)\r\n\tat stepDefinations.LoginSD.if_login_is_sucessful_user_should_be_redirected_to_homepage_or_error_message_should_display(LoginSD.java:67)\r\n\tat ✽.if login is sucessful user should be redirected to homepage or error message should display(file:///C:/Users/joshi/eclipse-workspace-vaish/DSAlgo/src/test/resources/features/Login.feature:22)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "user is on landing page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is on landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.RegistrationSD.user_is_on_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on get Started button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.RegistrationSD.user_clicks_on_get_started_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.RegistrationSD.user_should_be_navigated_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "check Login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user should be navigated to home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.RegistrationSD.user_should_be_navigated_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on sign In link",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.LoginSD.user_clicks_on_sign_in_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be landed on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.LoginSD.user_should_be_landed_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters xyz1234 and kk12kk12",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.LoginSD.user_enters_username_and_Password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.LoginSD.click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "if login is sucessful user should be redirected to homepage or error message should display",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.LoginSD.if_login_is_sucessful_user_should_be_redirected_to_homepage_or_error_message_should_display()"
});
formatter.result({
  "status": "passed"
});
});