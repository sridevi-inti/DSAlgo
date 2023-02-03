package baseClass;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.time.Duration;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class TestBase {

	public static WebDriver driver;
	public static Properties prop;

	public TestBase() {

		try {
			prop = new Properties();
			// FileInputStream fis = new
			// FileInputStream("/Users/joshi/eclipse-workspace-vaish/DSAlgo/src/test/java/configurationFile/config.properties");
			FileInputStream fis = new FileInputStream(
					"src/test/java/configurationFile/config.properties");
			prop.load(fis);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

	}

	public static void Initialization() {

		String browserName = prop.getProperty("browser");

		if (browserName.equalsIgnoreCase("chrome")) {

			System.setProperty("webdriver.chrome.driver",
					"src/test/resources/Driver/chromedriver.exe");
			// "/Users/joshi/eclipse-workspace-vaish/DSAlgo/src/test/resources/Driver/chromedriver.exe");
			driver = new ChromeDriver();
		}

		else if (browserName.equalsIgnoreCase("firefox")) {

			System.setProperty("webdriver.gecko.driver",
					"src/test/resources/Driver/geckodriver.exe");
			// "/Users/joshi/eclipse-workspace-vaish/DSAlgo/src/test/resources/Driver/geckodriver.exe");
			driver = new FirefoxDriver();
		}

		else if (browserName.equalsIgnoreCase("edge")) {

			System.setProperty("webdriver.edge.driver",
					"src/test/resources/Driver/msedgedriver.exe");
			// "/Users/joshi/eclipse-workspace-vaish/DSAlgo/src/test/resources/Driver/msedgedriver.exe");
			driver = new EdgeDriver();
		}

		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
		driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(20));
		driver.manage().window().maximize();

		driver.get(prop.getProperty("url"));
	}

}
