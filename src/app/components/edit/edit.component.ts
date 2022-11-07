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
  id:any;
  user!:User;
  constructor(
    private fb: FormBuilder,
    private userService:UserService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  loadKnowledge() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getVerificar(this.id).subscribe((data) => {
      this.user = data;
      this.myForm = this.fb.group({
        id: this.id,
        title: [
          this.user.title,
          [Validators.required, Validators.maxLength(60)],
        ],
        apellido: [this.user.apellido, [Validators.required], [Validators.maxLength(60)]],
        correo: [this.user.correo, [Validators.required], [Validators.email]],
        contrasenia: [this.user.contrasenia, [Validators.required]],
      });
    });
  }
  updateUser(): void {
    const user: User = {
      id: this.id,
      title: this.myForm.get('title')!.value,
      apellido: this.myForm.get('apellido')!.value,
      correo: this.myForm.get('correo')!.value,
      contrasenia: this.myForm.get('contrasenia')!.value,
    };
    this.userService
      .updateUser(this.id, user)
      .subscribe({
        next: (data) => {
          this.snackBar.open('El perfil fue actualizado con exito!', '', {
            duration: 6000,
          });
          this.router.navigate(['/perfil']);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

}
