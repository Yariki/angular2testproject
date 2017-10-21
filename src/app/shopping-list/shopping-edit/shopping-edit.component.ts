import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() ingridientAdded = new EventEmitter<Ingredient>()


  constructor() { }

  ngOnInit() {
  }

  onItemAdded() {
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    const inredint = new Ingredient(name,amount);
    this.ingridientAdded.emit(inredint);
  }

}
