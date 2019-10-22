import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.scss"]
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "test",
      "https://cdn.pixabay.com/photo/2017/12/10/14/47/piza-3010062_960_720.jpg"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
