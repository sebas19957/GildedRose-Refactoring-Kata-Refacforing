export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items: Array<Item> = []) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const currentItem = this.items[i];

      switch (currentItem.name) {
        case "Aged Brie":
          this.updateAgedBrie(currentItem);
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          this.updateBackstagePasses(currentItem);
          break;
        case "Sulfuras, Hand of Ragnaros":
          // No hacer nada para "Sulfuras"
          break;
        case "Conjured Item":
          this.updateConjuredItem(currentItem);
          break;
        default:
          this.updateNormalItem(currentItem);
          break;
      }
    }

    return this.items;
  }

  private updateNormalItem(item: Item) {
    if (item.quality > 0) {
      item.quality--;
    }

    item.sellIn--;

    if (item.sellIn < 0 && item.quality > 0) {
      item.quality--;
    }
  }

  private updateAgedBrie(item: Item) {
    if (item.quality < 50) {
      item.quality++;
    }

    item.sellIn--;

    if (item.sellIn < 0 && item.quality < 50) {
      item.quality++;
    }
  }

  private updateBackstagePasses(item: Item) {
    if (item.quality < 50) {
      item.quality++;

      if (item.sellIn < 11 && item.quality < 50) {
        item.quality++;
      }

      if (item.sellIn < 6 && item.quality < 50) {
        item.quality++;
      }
    }

    item.sellIn--;

    if (item.sellIn < 0) {
      item.quality = 0;
    }
  }

  private updateConjuredItem(item: Item) {
    if (item.quality > 0) {
      item.quality -= 2;
    }

    item.sellIn--;

    if (item.sellIn < 0 && item.quality > 0) {
      item.quality -= 2;
    }
  }
}
