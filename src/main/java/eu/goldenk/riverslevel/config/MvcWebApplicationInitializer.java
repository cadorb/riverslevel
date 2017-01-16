package eu.goldenk.riverslevel.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

import eu.goldenk.riverslevel.config.spring.RiversLevelSpringConfig;

public class MvcWebApplicationInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {

	private final static Logger log = LoggerFactory.getLogger(MvcWebApplicationInitializer.class);

	@Override
	protected Class<?>[] getServletConfigClasses() {
		return null;
	}

	@Override
	protected String[] getServletMappings() {
		return new String[]{ "/" };
	}

	@Override
	protected Class<?>[] getRootConfigClasses() {
		log.info("Initializing webapp");
		return new Class[]{ RiversLevelSpringConfig.class };
	}
}
