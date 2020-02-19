import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

export interface Todo {
  completed: boolean
  title: string 
  title2: string
  id? : number
}

@Component({
  selector: 'app-welcome', 
  templateUrl:'./welcome.component.html',
  styleUrls: ['./welcome.component.css']
  
})
export class WelcomeComponent  {

  clickMe = false

  todos: Todo[] = []
  userName = ''
  passWord = '' 

  constructor(private http: HttpClient ){
  
  }
  OnInit() {
  }

  goIn(){
    if (!this.userName.trim()){
      return
    }
    const newTodo: Todo = {
      title:this.userName ,
      title2: this.passWord,
      completed : false 

        }
      this.http.post('https://jsonplaceholder.typicode.com/posts', newTodo)
      .subscribe(todo =>{
                 console.log('USER', todo)
                 
      })
  }

}


