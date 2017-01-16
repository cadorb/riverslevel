package eu.goldenk.riverslevel.config.spring;

import java.util.Locale;

import eu.goldenk.riverslevel.controller.*;
import eu.goldenk.riverslevel.service.*;
import eu.goldenk.riverslevel.service.impl.*;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.i18n.LocaleChangeInterceptor;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import eu.goldenk.riverslevel.config.RiversLevelConfig;

@Configuration
@EnableWebMvc
@Import(DBConfig.class)
@EnableTransactionManagement
public class RiversLevelSpringConfig extends WebMvcConfigurerAdapter {


    @Bean
    public RiversLevelConfig appConfig() {
        return new RiversLevelConfig();
    }

    @Bean
    public HomeController home() {
        return new HomeController();
    }



    @Bean
    public ViewResolver viewResolver() {
        InternalResourceViewResolver resolver = new InternalResourceViewResolver();
        resolver.setPrefix("/WEB-INF/views/");
        resolver.setSuffix(".jsp");
        return resolver;
    }

    @Bean
    public ScrapperService scrapperService() {
        return new ScrapperServiceImpl();
    }


    @Bean
    public MessageSource messageSource() {
        ReloadableResourceBundleMessageSource msgSource = new ReloadableResourceBundleMessageSource();
        msgSource.setBasename("classpath:messages");

        return msgSource;
    }

    @Bean
    public LocaleResolver localeResolver() {
        SessionLocaleResolver localeResolver = new SessionLocaleResolver();
        localeResolver.setDefaultLocale(Locale.FRENCH);
        return localeResolver;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(localeInterceptor());
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/resources/**").addResourceLocations("/WEB-INF/resources/");
    }

    private HandlerInterceptor localeInterceptor() {
        LocaleChangeInterceptor interceptor = new LocaleChangeInterceptor();
        interceptor.setParamName("lang");
        return interceptor;
    }
}
