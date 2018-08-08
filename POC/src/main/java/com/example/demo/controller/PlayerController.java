package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.model.PlayerModel;

@RequestMapping(value="/player")
@Controller	
public class PlayerController {

	static List<PlayerModel> playerList = new ArrayList<PlayerModel>();
	
	static {
		playerList.add(new PlayerModel("JF"));
	}
	
	@RequestMapping(value = "/index")
    public String viewHome(Model model) {
		model.addAttribute("playerList", playerList);
        return "player/index";
    }
	
}
