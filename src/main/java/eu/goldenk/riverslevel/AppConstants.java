package eu.goldenk.riverslevel;

public class AppConstants {

	
	private AppConstants() {}
	
	public static final String CONFIG_FILENAME = "RiversLevelConfig.xml";
	public static final String CONFIG_SCHEMA_FILENAME = "RiversLevelConfig.xsd";
	public static final String WEBAPP_HOST = "localhost";
	public static final Integer WEBAPP_PORT = 8080;
	public static final String WEBAPP_DIRECTORY = "";
	public static final String PAGE_URL = "http://www.vigicrues.gouv.fr/niveau3.php?CdStationHydro=J710301001&CdEntVigiCru=8&typegraphe=h&AffProfondeur=72&AffRef=auto&AffPrevi=non&nbrstations=3&ong=2";
    public static final String REGEX_MONTREUIL = "Montreuil-sur-Ille \\[Ecluse d'Ille\\]<\\/th><\\/tr><tr  bgcolor='#CCCCFF'><td>\\d{2}\\/\\d{2}\\/\\d{4}\\s\\d{2}:\\d{2}<\\/td><td align='right'>(\\d.\\d{1,2})<\\/td>";
}
