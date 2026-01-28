namespace DispensaVirtual.Domain.Entities;

public class Product
{
  public Guid Id { get; set; }
  public string Name { get; set; } = string.Empty;
  public string Brand { get; set; } = string.Empty;
  public string Barcode { get; set; } = string.Empty;
  public string Category { get; set; } = string.Empty;
  public ICollection<InventoryItem> InventoryItems { get; set; } = new List<InventoryItem>();
}