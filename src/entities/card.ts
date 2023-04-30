import { CARD_TYPE } from "./types";

export class Card{
	private id : number;

	constructor(public number : string, public password : string, public expory: string, public balance : number, public type : CARD_TYPE, public ownerId : number, public bankName : string){}

	setId(CardId : number){
		this.id = CardId;
	}

	getId(){
		return this.id;
	}
}
