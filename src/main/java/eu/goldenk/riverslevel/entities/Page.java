package eu.goldenk.riverslevel.entities;

import javax.persistence.Entity;
import java.net.URL;

/**
 * Created by goldenk on 16/01/2017.
 */
@Entity
public class Page {
    private URL url;
    private String content;

    public Page() {
    }

    public URL getUrl() {
        return url;
    }

    public void setUrl(URL url) {
        this.url = url;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
