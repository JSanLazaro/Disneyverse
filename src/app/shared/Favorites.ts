export class Favorites {
  favoritesId: number[] = [];
  addId(id: number) {
    if (!this.favoritesId.includes(id)) {
      this.favoritesId.push(id);
    }
  }
  public removeId(id: number) {
    console.log("Favorites.ts removeId");
    if (this.favoritesId.includes(id)) {
      const index = this.favoritesId.indexOf(id);
      this.favoritesId.splice(index, 1);
      console.log("removed id: " + id);
      console.log("Los favoritos son: " + this.favoritesId);
    }
  }
  public getFavoritesId() {
    return this.favoritesId;
  }

}