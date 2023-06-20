export class Favorites{
    favoritesId:number[] = [];
    addId(id:number){
        this.favoritesId.push(id);
    }
    removeId(id:number){
        let index = this.favoritesId.indexOf(id);
        this.favoritesId.slice(index,1);
    }
    public getFavoritesId(){
        return this.favoritesId;
    }
}