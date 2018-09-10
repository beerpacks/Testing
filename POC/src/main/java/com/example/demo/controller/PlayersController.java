package com.example.demo.controller;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.model.PlayersModel;

@RequestMapping(value="/players")
@Controller
public class PlayersController {

	@RequestMapping(value="/index",method=RequestMethod.GET)
	public ModelAndView getIndex() {
		return new ModelAndView("players/view","list",new PlayersModel(PlayerController.playerList));
	}
}
