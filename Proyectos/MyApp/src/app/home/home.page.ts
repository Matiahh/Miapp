import { Component,ElementRef,ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IonCard } from '@ionic/angular';
import { IonAvatar,AnimationController} from '@ionic/angular';
import type { Animation } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(IonAvatar,{read:ElementRef}) avatar!:ElementRef<HTMLIonAvatarElement>;
  constructor(private router: Router,private animationCtrl:AnimationController) {}
  private animation!:Animation;

  public mensaje =""

  ngAfterViewInit() {
    this.animation = this.animationCtrl.create()
    .addElement(this.avatar.nativeElement)
    .duration(1500) 
    .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
    .fromTo('opacity', '1', '0.0');
  }

  user={
    usuario:"",
    password:""
  }
  avatarPlay(){
    this.animation.play();
  }
  loginInformacion(){
    let navigationExtras: NavigationExtras = {
      state: { user: this.user }
    }
    this.router.navigate(['/registrado'], navigationExtras);    
  }

  enviarInformacion() {
    let navigationExtras: NavigationExtras = {
      state: { user: this.user }
    }
    this.router.navigate(['/login'], navigationExtras);
  }
  recuperarInformacion() {
    let navigationExtras: NavigationExtras = {
      state: { user: this.user }
    }
    this.router.navigate(['/recuperar'], navigationExtras);
  }

  mostarConsola(){
    console.log(this.user);
    if(this.user.usuario.length <8 && this.user.password.length <4){
      this.mensaje="Usuario conectado";
    } else{
      this.mensaje ="usuario y contraseña deben tener algun valor"
    }
  }

}
