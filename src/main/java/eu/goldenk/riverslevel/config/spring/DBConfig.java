package eu.goldenk.riverslevel.config.spring;

import java.util.Properties;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;

@Configuration
public class DBConfig {

	 private static final String PROPERTY_NAME_HIBERNATE_DIALECT = "hibernate.dialect";
     private static final String PROPERTY_NAME_HIBERNATE_SHOW_SQL = "hibernate.show_sql";
     private static final String VALUE_HIBERNATE_DIALECT = "org.hibernate.dialect.MySQLDialect";
     private static final String VALUE_HIBERNATE_SHOW_SQL = "true";
     private static final String HBM2DDL_AUTO = "hibernate.hbm2ddl.auto";
     private static final String VALUE_HBM2DDL_AUTO ="update";
    //private static final String VALUE_HBM2DDL_AUTO ="create";
    
     private static final String DATABASE_DRIVER="com.mysql.jdbc.Driver";
     private static final String JDBC_MYSQL="jdbc:mysql://";
     private static final String COLON = ":";
     private static final String SLASH = "/";
	
	
	
	
	@Bean
	public DataSource dataSource(){
		DriverManagerDataSource datasource = new DriverManagerDataSource();
		datasource.setDriverClassName(DATABASE_DRIVER);
		datasource.setUrl(JDBC_MYSQL + "localhost:3306/riverslevel");
		datasource.setUsername("root");
		datasource.setPassword("password");
		return datasource;
	}
	
	@Bean
    public Properties hibProperties() {
          Properties properties = new Properties();
          properties.put(PROPERTY_NAME_HIBERNATE_DIALECT, VALUE_HIBERNATE_DIALECT);
          properties.put(PROPERTY_NAME_HIBERNATE_SHOW_SQL, VALUE_HIBERNATE_SHOW_SQL);
          properties.put(HBM2DDL_AUTO, VALUE_HBM2DDL_AUTO);
          return properties;
    }
	
	@Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
          LocalContainerEntityManagerFactoryBean entityManagerFactoryBean = new LocalContainerEntityManagerFactoryBean();
          entityManagerFactoryBean.setDataSource(dataSource());
          entityManagerFactoryBean.setPackagesToScan(new String[] { "com.gfi.caen.riverslevel.entities" });
          entityManagerFactoryBean.setJpaProperties(hibProperties());
          JpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
          entityManagerFactoryBean.setJpaVendorAdapter(vendorAdapter);
          return entityManagerFactoryBean;
    }

    @Bean
    public JpaTransactionManager transactionManager() {
          JpaTransactionManager transactionManager = new JpaTransactionManager();
          transactionManager.setEntityManagerFactory(entityManagerFactory().getObject());
          return transactionManager;
    }



}
