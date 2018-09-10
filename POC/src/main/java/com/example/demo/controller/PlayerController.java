package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.model.PlayerModel;

@RequestMapping(value="/player")
@Controller	
public class PlayerController {

	static List<PlayerModel> playerList = new ArrayList<PlayerModel>();
	
	static {
		playerList.add(new PlayerModel(0,"JF"));
	}
	
	/*
	@InitBinder
	void initBinder(final WebDataBinder binder) {
	    //binder.setAllowedFields("name", "id");
	}*/
	
	/*
	@RequestMapping(value = "/index")
    public String viewHome(Model model) {
		model.addAttribute("playerList", playerList);
        return "player/index";
    }*/
	
	@RequestMapping(value="/index")
	public ModelAndView index() {
		return new ModelAndView("player/index","playerList", playerList);
	}
	
	@RequestMapping(value ="/add", method=RequestMethod.GET) 
	public ModelAndView viewAdd() {
		System.out.println("je rentre dans le get");
		return new ModelAndView("player/add","player",new PlayerModel(playerList.size(), ""));
		//model.addAttribute("player", new PlayerModel(playerList.size(), ""));
		//return "player/add";
	}
	
	@RequestMapping(value ="/add", method=RequestMethod.POST)
	public ModelAndView addPlayer(@ModelAttribute("player") PlayerModel player, BindingResult br) {
		if(br.hasErrors()) {
			System.out.println("J'ai des erreurs");
			br.getAllErrors().forEach(err ->{
				System.out.println(err.toString());
			});
			
		}
		
		System.out.println("test nom : " + player.getName());
		if(!player.getName().trim().equals("")) {
			playerList.add(player);
			return new ModelAndView("player/index","playerList", playerList);
		}else
			return new ModelAndView("player/add","player",new PlayerModel(player.getId(), player.getName()));
			
		//return new ModelAndView("player/add","player",new PlayerModel(playerList.size(), ""));
	}
	
	/*
	@RequestMapping(value = "/addStudent", method = RequestMethod.POST)
    public String addStudent(@ModelAttribute("SpringWeb")Student student, ModelMap model) {
    	model.addAttribute("name", student.getName());
    	model.addAttribute("age", student.getAge());
    	model.addAttribute("id", student.getId());
    	return "result";
 }*/
	
}
