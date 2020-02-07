import { UserForm } from "./views/UserForm";
import { User } from "./models/User";

const userForm = new UserForm(
  document.getElementById("root"),
  User.buildUser({ name: "Dave", age: 30 })
);

userForm.render();
