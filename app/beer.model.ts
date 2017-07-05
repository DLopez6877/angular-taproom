export class Beer {
  public done: boolean = false;
  public pints: number = 35;
  public priceColor: string = "bg-success";
  public abvColor: string = "text-muted";
  constructor(
    public name: string,
    public brand: string,
    public price: number,
    public abv: number
  ) { }
}
