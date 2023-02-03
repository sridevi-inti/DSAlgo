package TestRunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features", glue = {
		"stepDefinations"}, monochrome = true, plugin = {"pretty",
				"io.qameta.allure.cucumber5jvm.AllureCucumber5Jvm",
				"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:",
				"html:target/JUNITHtmlReports/report.html",
				"junit:target/JUNITReports/reports.xml"})
public class TestRunner {

}
