package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

//@RequestMapping(value="/home")
@Controller	
public class HomeController {
	
	@RequestMapping(value = "/")
    public String viewHome() {
        return "home";
    }
	
}
