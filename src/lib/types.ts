export class Ingredient {
  public id: number;
  public name: string;
  public alcoholic: boolean;
}

export class Volume {
  public id: number;
  public name: string;
  public alcoholic: boolean;
  public drinkId: number;
  public amount: number;
}

export class SelectionModel {
  public suggestions: Array<Ingredient>;
  public selected: Array<Volume> = [];
}
