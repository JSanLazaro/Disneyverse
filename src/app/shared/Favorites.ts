export class Favorites {
  favoritesId: number[] = [];
  addId(id: number) {
    if (!this.favoritesId.includes(id)) {
      this.favoritesId.push(id);
    }
  }
  public removeId(id: number) {
    console.log("removeId");
    if (this.favoritesId.includes(id)) {
      let index = this.favoritesId.indexOf(id);
      this.favoritesId.slice(index, 1);
      console.log("removed id: " + id);
    }
  }
  public getFavoritesId() {
    return this.favoritesId;
  }

}
