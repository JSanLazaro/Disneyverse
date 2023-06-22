export class Favorites {
  favoritesId: number[] = [];
  addId(id: number) {
    if (!this.favoritesId.includes(id)) {
      this.favoritesId.push(id);
    }
  }
  removeId(id: number) {
    if (this.favoritesId.includes(id)) {
      let index = this.favoritesId.indexOf(id);
      this.favoritesId.slice(index, 1);
    }
  }
  public getFavoritesId() {
    return this.favoritesId;
  }
}
