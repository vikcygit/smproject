import { Component, enableProdMode, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

enableProdMode();
declare var $: any


@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit{
  
    constructor(){}
   
  ngOnInit() {
      this.SearchAutoSuggest();
    }
  
    SearchAutoSuggest(): void {
      $( "#tags" ).autocomplete({
        source: function (request, response) {
          $.ajax({
              url: "http://localhost:8000/api/v1/search?searchterm="+request.term,
              dataType: "jsonp",
              data: { query: request.term },
              success: function (data) {
                  // var transformed = $.map(data, function (el) {
                  //     return {
                  //         label: el.phrase,
                  //         id: el.id
                  //     };
                  // });
                  // response(transformed);
              },
              error: function () {
                  response([]);
              }
          });
      },
      // source: this.availableTags,
        minLength: 2,
        appendTo: "#suggestions",
        classes: {
          "ui-autocomplete": "highlight"
        }
        
      });
    }
  
    
  }
