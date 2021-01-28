package com.crudoperations.demo.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
public class AppViewController {
        @RequestMapping("/")
        public String homepage(Model model)
        {model.addAttribute("title","CRUD  operations");
            return "index";

        }


    }


