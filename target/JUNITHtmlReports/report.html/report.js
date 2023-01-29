$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/DataStructure.feature");
formatter.feature({
  "name": "Check Data Structures",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@C"
    }
  ]
});
formatter.background({
  "name": "",
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
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00274.4.0\u0027, revision: \u0027e5c75ed026a\u0027\nSystem info: host: \u0027GWTN141-10\u0027, ip: \u002710.0.0.66\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.2.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [bd4d863232612aa639b6779cbac5b07e, get {url\u003dhttps://dsportalapp.herokuapp.com/}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.107, chrome: {chromedriverVersion: 107.0.5304.18 (fde5ebf4e16d..., userDataDir: C:\\Users\\sayis\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62684}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62684/devtoo..., se:cdpVersion: 107.0.5304.107, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: bd4d863232612aa639b6779cbac5b07e\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:571)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:310)\r\n\tat baseClass.TestBase.Initialization(TestBase.java:60)\r\n\tat stepDefinations.RegistrationSD.user_is_on_landing_page(RegistrationSD.java:22)\r\n\tat ✽.user is on landing page(file:///C:/Users/sayis/eclipse-workspace/DSAlgo/src/test/resources/features/DataStructure.feature:5)\r\nCaused by: java.io.UncheckedIOException: java.net.SocketException: Connection reset\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.makeCall(NettyHttpHandler.java:73)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:56)\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.execute(NettyHttpHandler.java:49)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:56)\r\n\tat org.openqa.selenium.remote.http.netty.NettyClient.execute(NettyClient.java:98)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:181)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:547)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:310)\r\n\tat baseClass.TestBase.Initialization(TestBase.java:60)\r\n\tat stepDefinations.RegistrationSD.user_is_on_landing_page(RegistrationSD.java:22)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:577)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: java.net.SocketException: Connection reset\r\n\tat java.base/sun.nio.ch.SocketChannelImpl.throwConnectionReset(SocketChannelImpl.java:394)\r\n\tat java.base/sun.nio.ch.SocketChannelImpl.read(SocketChannelImpl.java:426)\r\n\tat io.netty.buffer.PooledByteBuf.setBytes(PooledByteBuf.java:258)\r\n\tat io.netty.buffer.AbstractByteBuf.writeBytes(AbstractByteBuf.java:1132)\r\n\tat io.netty.channel.socket.nio.NioSocketChannel.doReadBytes(NioSocketChannel.java:357)\r\n\tat io.netty.channel.nio.AbstractNioByteChannel$NioByteUnsafe.read(AbstractNioByteChannel.java:151)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKey(NioEventLoop.java:722)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKeysOptimized(NioEventLoop.java:658)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKeys(NioEventLoop.java:584)\r\n\tat io.netty.channel.nio.NioEventLoop.run(NioEventLoop.java:496)\r\n\tat io.netty.util.concurrent.SingleThreadEventExecutor$4.run(SingleThreadEventExecutor.java:997)\r\n\tat io.netty.util.internal.ThreadExecutorMap$2.run(ThreadExecutorMap.java:74)\r\n\tat io.netty.util.concurrent.FastThreadLocalRunnable.run(FastThreadLocalRunnable.java:30)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on get Started button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.RegistrationSD.user_clicks_on_get_started_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.RegistrationSD.user_should_be_navigated_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on sign In link",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.LoginSD.user_clicks_on_sign_in_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters credentials",
  "rows": [
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enters_credentials(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "check data structues",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@C"
    }
  ]
});
formatter.step({
  "name": "user is on home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on DataStructuresIntro get started button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_data_structures_intro_get_started_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on DataStructureIntro page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_data_structure_intro_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Time Complexity button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_time_complexity_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Time complexity page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_time_complexity_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigate back to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_navigate_back_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on DataStructuresIntro get started button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_data_structures_intro_get_started_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on DataStructureIntro page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_data_structure_intro_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Time Complexity button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_time_complexity_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Time complexity page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_time_complexity_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Practice Questions button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_practice_questions_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Practice Questions page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_practice_questions_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigate back to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_navigate_back_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Array get started button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_array_get_started_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Array page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_array_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Arrays in Python button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_arrays_in_python_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Arrays in Python page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_arrays_in_python_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Array Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_Array_Topic_covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Arrays using List button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_arrays_using_list_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Arrays using List page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_arrays_using_list_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Array Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_Array_Topic_covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Basic Operations in List button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_basic_operations_in_list_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Basic Operations in List page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_basic_operations_in_list_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Array Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_Array_Topic_covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Applications of Array button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_applications_of_array_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Applications of Array page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_applications_of_array_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigate back to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_navigate_back_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Array get started button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_array_get_started_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Array page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_array_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Applications of Array button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_applications_of_array_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Applications of Array page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_applications_of_array_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Practice Questions button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_practice_questions_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Practice Questions page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_practice_questions_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Search the Array button in Practice",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_search_the_array_button_in_practice()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on question one page in Practice",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_question_one_page_in_practice()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input and clicks on Submit button and gets output",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input_and_clicks_on_Submit_button_and_gets_output()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates back to Practice page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_navigates_back_to_practice_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Max Consecutive Ones button in Practice",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_max_consecutive_ones_button_in_practice()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on question two page in Practice",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_question_two_page_in_practice()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input and clicks on Submit button and gets output",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input_and_clicks_on_Submit_button_and_gets_output()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates back to Practice page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_navigates_back_to_practice_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Find Numbers with Even Number of Digits button in Practice",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_find_numbers_with_even_number_of_digits_button_in_practice()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on question three page in Practice",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_question_three_page_in_practice()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input and clicks on Submit button and gets output",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input_and_clicks_on_Submit_button_and_gets_output()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates back to Practice page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_navigates_back_to_practice_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Squares of a Sorted Array button in Practice",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_squares_of_a_sorted_array_button_in_practice()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on question four page in Practice",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_question_four_page_in_practice()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input and clicks on Submit button and gets output",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input_and_clicks_on_Submit_button_and_gets_output()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates back to Practice page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_navigates_back_to_practice_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigate back to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_navigate_back_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on GetStarted button for LinkedList",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_GetStarted_button_for_LinkedList()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should navigate to LinkedList page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_should_navigate_to_LinkedList_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Introduction link",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_Introduction_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should navigate to Linkedlist Subpage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_should_navigate_to_Linkedlist_Subpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Linked List Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_Linked_List_Topic_covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Creating a LinkedList link",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_Creating_a_LinkedList_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Linked List Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_Linked_List_Topic_covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Types of Linked List link",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_Types_of_Linked_List_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Linked List Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_Linked_List_Topic_covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Implement Linked List in Python link",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_Implement_Linked_List_in_Python_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Linked List Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_Linked_List_Topic_covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Traversal link",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_Traversal_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Linked List Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_Linked_List_Topic_covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Insertion link",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_Insertion_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Linked List Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_Linked_List_Topic_covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Deletion link",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_Deletion_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigate back to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_navigate_back_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on GetStarted button of Stack",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_get_started_button_of_stack()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is on Stack page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_stack_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Operations in Stack",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_operations_in_stack()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user must be navigated to the Operations in Stack page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_must_be_navigated_to_the_operations_in_stack_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Stack Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_Stack_Topic_covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Implementation link",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_implementation_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user will be navigated to the Implementation page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_will_be_navigated_to_the_implementation_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Stack Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_Stack_Topic_covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Applications link",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_applications_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is now on Applications page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_now_on_applications_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigate back to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_navigate_back_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on GetStarted button of Queue",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_get_started_button_of_queue()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user will be navigated to Queue page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_will_be_navigated_to_queue_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Implimentation of Queue in python",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_implimentation_of_queue_in_python()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user will be navigated to Implimentation of Queue in python page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_will_be_navigated_to_implimentation_of_queue_in_python_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Queue Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_Queue_Topic_covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user will click on Implementation using collections dequeue",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_will_click_on_implementation_using_collections_dequeue()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user will be navigated to Implementation using collections dequeue page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_will_be_navigated_to_implementation_using_collections_dequeue_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Queue Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_Queue_Topic_covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user will click on Implementation using Array",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_will_click_on_implementation_using_array()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user will be navigated to the Implementation Using Array page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_will_be_navigated_to_the_implementation_using_array_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Queue Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_Queue_Topic_covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user will click on Queue Operations",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_will_click_on_queue_operations()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to Queue Operations page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_navigated_to_queue_operations_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigate back to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_navigate_back_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Graph Get Started button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_graph_get_started_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should navigate to Graph page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_should_navigate_to_graph_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clikcs on Graph",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clikcs_on_graph()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on graph Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_graph_Topic_covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clikcs on Graph Representations",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clikcs_on_Graph_Representations()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigate back to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_navigate_back_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Tree GetStarted button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clicks_on_tree_get_started_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should navigate to Tree page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_should_navigate_to_tree_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clikcs on overview of Trees",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clikcs_on_overview_of_trees()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Tree Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_tree_topic_covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clikcs on Terminologies",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clikcs_on_terminologies()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Tree Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_tree_topic_covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clikcs on Types of Trees",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clikcs_on_types_of_trees()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Tree Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_tree_topic_covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clikcs on Tree Traversals",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clikcs_on_tree_traversals()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Tree Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_tree_topic_covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clikcs on Traversals-Illustration",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clikcs_on_traversals_illustration()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Tree Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_tree_topic_covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clikcs on Binary Trees",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clikcs_on_binary_trees()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Tree Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_tree_topic_covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clikcs on Types of Binary Trees",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clikcs_on_types_of_binary_trees()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Tree Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_tree_topic_covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clikcs on Implementation in Python",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clikcs_on_implementation_in_python()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Tree Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_tree_topic_covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clikcs on Binary Tree Traversals",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clikcs_on_binary_tree_traversals()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Tree Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_tree_topic_covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clikcs on Implementation of Binary Trees",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clikcs_on_implementation_of_binary_trees()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Tree Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_tree_topic_covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clikcs on Applications of Binary trees",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clikcs_on_applications_of_binary_trees()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Tree Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_tree_topic_covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clikcs on Binary Search Trees",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clikcs_on_binary_search_trees()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user go back to Topic Covered page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_go_back_to_Topic_Covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Tree Topic covered page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_is_on_tree_topic_covered_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clikcs on Implementation Of BST",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_clikcs_on_implementation_of_bst()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Try here button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_try_here_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_enter_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Run",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.click_on_run()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it should display entered input",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.Then_it_should_display_entered_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigate back to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.user_navigate_back_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on SignOut btn",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.DataStructureSD.clicks_on_SignOut_btn()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Test login Page with dropdown on home page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@B"
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
  "name": "check dropdown",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@B"
    }
  ]
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
