import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proyect } from 'src/app/model/proyect';
import { ProyectService } from 'src/app/service/proyect.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent {
  nombre: string;
  descripcion: string;

  constructor(private proyectS: ProyectService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyecto = new Proyect(this.nombre, this.descripcion);
    this.proyectS.save(proyecto).subscribe({
      next: data =>{
        alert("Proyecto añadido correctamente");
        this.router.navigate(['']);
      }, error: err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    }
      
    )
  }

}
