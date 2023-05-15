import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyect } from 'src/app/model/proyect';
import { ProyectService } from 'src/app/service/proyect.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent {
  proyecto: Proyect = null;
  
  constructor(
    private proyectS: ProyectService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectS.detail(id).subscribe({
      next:data =>{
        this.proyecto = data;
      }, error: err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    }
      
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectS.update(id, this.proyecto).subscribe({
      next: data => {
        this.router.navigate(['']);
      }, error: err => {
        alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }
    }
      
    )
  }
}
