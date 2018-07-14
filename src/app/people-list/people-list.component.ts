import { Component, OnInit } from "@angular/core";
import { PeopleListService } from "./people-list.service";

@Component({
  selector: "app-people-list",
  templateUrl: "./people-list.component.html",
  styleUrls: ["./people-list.component.css"],
  providers: [PeopleListService]
})
export class PeopleListComponent implements OnInit {
  people;
  peopleInSpace: number;
  constructor(private peopleListService: PeopleListService) {}

  ngOnInit() {
    this.peopleListService.find().subscribe((people: PeopleList) => {
      this.people = people.people;
      this.peopleInSpace = people.number;
    });
  }
}

export interface PeopleList {
  message: string;
  people: [
    {
      craft: string;
      name: string;
    }
  ];
  number: number;
}
