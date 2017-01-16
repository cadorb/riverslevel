package eu.goldenk.riverslevel.config;

import eu.goldenk.riverslevel.AppConstants;
//import com.orange.sae.commons.config.XmlValidatedConfig;

public class RiversLevelConfig {

	private String prop1;
	
	public String getConfigFilename() {
		return AppConstants.CONFIG_FILENAME;
	}

//	@Override
//	public String getXmlSchemaFile() {
//		return AppConstants.CONFIG_SCHEMA_FILENAME;
//	}
//
//	@Override
//	protected void postLoadConfig() {
//		this.prop1 = getConfig().getString("prop1");
//	}

	public String getProp1() {
		return prop1;
	}

	public void setProp1(String prop1) {
		this.prop1 = prop1;
	}

	
}
