import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { BehaviorSubject, map } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { UserDetail } from "../userDetail";

@Injectable({
  providedIn: "root",
})
export class UserServiceService {
  public url = "http://localhost:8000/userForm";
  constructor(private http: HttpClient) {}
  private readonly _todos = new BehaviorSubject<UserDetail[]>([]);

  readonly todos$ = this._todos.asObservable();

  readonly completedTodos$ = this.todos$.pipe(
    map((todos) => todos.filter((todo) => todo.name))
  );
  
  get todos(): UserDetail[] {
    return this._todos.getValue();
  }
  private set todos(val: UserDetail[]) {
    this._todos.next(val);
  }

  addTodo(name: string) {
    this.todos = [...this.todos];
  }
  removeTodo(name: string) {
    this.todos = this.todos.filter((todo) => todo.name !== name);
  }

  setCompleted(name: string) {
    let todo = this.todos.find((todo) => todo.name === name);

    if (todo) {
      const index = this.todos.indexOf(todo);
      this.todos[index] = {
        ...todo,
      };
      this.todos = [...this.todos];
    }
  }
  postUserData(userData: FormGroup) {
    return this.http.post(this.url + "/post", userData);
  }

  getUserData() {
    return this.http.get(this.url + "/get");
  }

  getUserDataById(id: string | null) {
    return this.http.get(this.url + `/${id}`);
  }

  editUserData(userData: FormGroup, id: string | null) {
    console.log(userData);
    console.log(this.url + "/update" + `/${id}`);

    return this.http.put(this.url + "/update" + `/${id}`, userData);
  }

  deleteUserById(id: string | null) {
    return this.http.delete(this.url + "/delete" + `/${id}`);
  }
}
