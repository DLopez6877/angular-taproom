export class Beer {
  public done: boolean = false;
  public pints: number = 15;
  public priceColor: string = "bg-success";
  constructor(
    public name: string,
    public brand: string,
    public price: number,
    public abv: number
  ) { }
}
