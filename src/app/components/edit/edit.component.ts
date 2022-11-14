import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  myForm!: FormGroup;
  idUser:any;
  user!:User;

  constructor(
    private fb: FormBuilder,
    private userService:UserService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser() {
    this.idUser = this.route.snapshot.paramMap.get('id');
    this.userService.getVerificar(this.idUser).subscribe((data) => {
      this.user = data;
      this.myForm = this.fb.group({
        id: this.idUser,
        title: [
          this.user.title,
          [Validators.required, Validators.maxLength(60)],
        ],
        apellido: [this.user.apellido, [Validators.required]],
        correo: [this.user.correo, [Validators.required,Validators.email]],
        contra: [this.user.contrasenia],
      });
    });
  }

  updateUser(): void {
    const user: User = {
      id: this.idUser,
      title: this.myForm.get('title')!.value,
      apellido: this.myForm.get('apellido')!.value,
      correo: this.myForm.get('correo')!.value,
      contrasenia: this.myForm.get('contra')!.value,
    };
    this.userService
      .updateUser(this.idUser, user)
      .subscribe({
        next: (data) => {
          this.snackBar.open('Sus datos fueron actualizados con exito!', '', {
            duration: 6000,
          });
          this.router.navigate(['/home/perfil', user.id]);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

}
