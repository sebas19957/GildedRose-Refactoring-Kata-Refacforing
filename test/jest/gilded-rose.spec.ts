import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  it("should fixme", () => {
    const gildedRose = new GildedRose([new Item("fixme", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("fixme");
  });

  it("should decrease quality and sellIn for normal item", () => {
    const gildedRose = new GildedRose([new Item("Normal Item", 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(9);
  });

  it("should increase quality and decrease sellIn for Aged Brie", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(11);
  });

  it("should increase quality and decrease sellIn for Backstage passes", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(14);
    expect(items[0].quality).toBe(11);
  });

  it("should not change quality or sellIn for Sulfuras", () => {
    const gildedRose = new GildedRose([
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(80);
  });

  it("should decrease quality twice as fast for Conjured item", () => {
    const gildedRose = new GildedRose([new Item("Conjured Item", 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(8);
  });
});
