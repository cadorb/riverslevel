package eu.goldenk.riverslevel.service;

/**
 * Created by goldenk on 16/01/2017.
 */
public interface ScrapperService {
    String getHtml(String url);
    Float getLevel(String html);
}
