namespace DispensaVirtual.Domain.Entities;

public class InventoryItem
{
  public Guid Id { get; set; }
  public int Quantity { get; set; }
  public DateTime ExpirationDate { get; set; }
  public decimal Price { get; set; }

  public Guid ProductId { get; set; }
  public Product Product { get; set; } = null;

  public Guid StorageLocationId { get; set; }
  public StorageLocation StorageLocation { get; set; } = null;
}