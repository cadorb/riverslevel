package eu.goldenk.riverslevel.service.impl;

import eu.goldenk.riverslevel.AppConstants;
import eu.goldenk.riverslevel.service.ScrapperService;
import jdk.nashorn.api.scripting.URLReader;

import java.io.BufferedReader;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by goldenk on 16/01/2017.
 */
public class ScrapperServiceImpl implements ScrapperService {
    @Override
    public String getHtml(String urlString) {
        URL url = null;
        String lines = "";
        try {
            url = new URL(urlString);
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
        BufferedReader in;
        in = new BufferedReader(new URLReader(url));
        String line;
        try {
            while ((line = in.readLine()) != null)
            {
                // Afficher le contenu du fichier
                lines += line;
            }

            in.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println(lines);
        return lines;
    }

    @Override
    public Float getLevel(String html){
        Float level;
        String pattern = AppConstants.REGEX_MONTREUIL;

        // Create a Pattern object
        Pattern r = Pattern.compile(pattern);

        // Now create matcher object.
        Matcher m = r.matcher(html);
        if (m.find( )) {
            System.out.println("Found value: " + m.group(1) );
            level = new Float(m.group(1));
        }else {
            System.out.println("NO MATCH");
            level = null;
        }

        return level;
    }
}
