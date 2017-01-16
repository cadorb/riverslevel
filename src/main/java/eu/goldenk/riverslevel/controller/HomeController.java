package eu.goldenk.riverslevel.controller;

import eu.goldenk.riverslevel.AppConstants;
import eu.goldenk.riverslevel.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
public class HomeController {

    @Autowired
    ScrapperService scrapperService;



    @RequestMapping("/home")
    public String home(Model model) {
        String html = scrapperService.getHtml(AppConstants.PAGE_URL);
        Float level = scrapperService.getLevel(html);

        model.addAttribute("level", level);
        return "home";
    }


    @RequestMapping(value = "/tests", method = RequestMethod.GET)
    public String test(Model model) {

        model.addAttribute("packageList", "");
        return "tests";
    }


}
