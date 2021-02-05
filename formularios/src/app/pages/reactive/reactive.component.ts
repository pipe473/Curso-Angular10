import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ValidadoresService } from 'src/app/services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  forma: FormGroup;

  constructor( private fb: FormBuilder,
               private validadores: ValidadoresService ) {

    this.crearFormulario();
    this.cargarDataAlFormulario();

  }

  ngOnInit(): void {}

  get pasatiempos() {
    return this.forma.get('pasatiempos') as FormArray;
  }

  get nombreNoValido() {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }

  get apellidoNoValido() {
    return (
      this.forma.get('apellido').invalid && this.forma.get('apellido').touched
    );
  }

  get correoNoValido() {
    return this.forma.get('correo').invalid && this.forma.get('correo').touched;
  }

  get usuarioNoValido() {
    return this.forma.get('usuario').invalid && this.forma.get('usuario').touched;
  }

  get distritoNoValido() {
    return this.forma.get('direccion.distrito').invalid && this.forma.get('direccion.distrito').touched;
  }

  get ciudadNoValida() {
    return this.forma.get('direccion.ciudad').invalid && this.forma.get('direccion.ciudad').touched;
  }

  get password1NoValido() {
    return this.forma.get('password1').invalid && this.forma.get('password1').touched;
  }

  get password2NoValido() {
    const pass1 = this.forma.get('password1').value;
    const pass2 = this.forma.get('password2').value;

    return ( pass1 === pass2 ) ? false : true;
  }

  crearFormulario() {
    this.forma = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', [Validators.required, this.validadores.noBedoya] ],
      correo: ['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$') ] ],
      usuario: ['', , this.validadores.existeUsuario ],
      password1: ['', Validators.required],
      password2: ['', Validators.required],
      direccion: this.fb.group({
        distrito: ['', Validators.required ],
        ciudad: ['', Validators.required ]
      }),
      pasatiempos: this.fb.array([])
    }, {
      validators: this.validadores.passwordsIguales('password1', 'password2')
    });
  }

  cargarDataAlFormulario(){

    // this.forma.setValue({
      this.forma.reset({
      nombre: 'Felipe',
      apellido: 'Bedoya',
      correo: 'bedoyafelipe743@gmail.com',
      password1: '123',
      password2: '123',
      direccion: {
        distrito: 'Comunidad Madrid',
        ciudad: 'Madrid'
      }
    });

  }

  agregarPasatiempo(){
    this.pasatiempos.push( this.fb.control('', Validators.required ) )
  }

  borrarPasatiempo(i: number){
    this.pasatiempos.removeAt(i);
  }

  guardar() {
    console.log(this.forma);

    if (this.forma.invalid) {
      return Object.values( this.forma.controls ).forEach( control  => {

        if ( control instanceof FormGroup) {
          Object.values( control.controls ).forEach( control => control.markAllAsTouched() );
        } else {
          control.markAllAsTouched();
        }     
      });
    }

    // Posteo de informacion
      this.forma.reset({
        nombre: 'sin nombre'
      });

  }

}