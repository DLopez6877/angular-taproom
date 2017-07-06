export class Beer {
  public pints: number = 35;
  public priceColor: string = "bg-success";
  public abvColor: string = "text-muted";
  public popular: boolean = false;
  public staffPick: boolean = false
  constructor(
    public name: string,
    public brand: string,
    public price: number,
    public abv: number,
  ) { }
}
