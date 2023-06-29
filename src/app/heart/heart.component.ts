import { Component, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Character } from 'src/app/model/Character.model';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.scss']
})
export class HeartComponent {
@Input() character!: Character;
name = 'heartImg';
value = '../../../assets/images/heartBlack.png'; //default_value


constructor(private SharedService: SharedService) {}
isFavorite(): boolean {
    return this.SharedService.isCharacterInFavorites(this.character._id);
  }

  updateImage() {
    // Lógica adicional opcional para actualizar la imagen si es necesario
    // Puedes agregar aquí cualquier código adicional que desees ejecutar al hacer clic en la imagen
  }
}





