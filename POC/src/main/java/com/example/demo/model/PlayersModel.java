package com.example.demo.model;

import java.util.List;

public class PlayersModel {

		private List<PlayerModel> playersList;
		
		public PlayersModel(List<PlayerModel> playersList) {
			this.playersList = playersList;
		}
		
		public List<PlayerModel> getPlayersList(){
			return this.playersList;
		}
		
		public void setPlayersList(List<PlayerModel> playersList) {
			this.playersList = playersList;
		}
}
