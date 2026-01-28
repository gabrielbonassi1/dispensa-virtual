namespace DispensaVirtual.Domain.Entities;

public class StorageLocation
{
  public Guid Id { get; set; }
  public string Name { get; set; } = string.Empty;
  public int MaxCapacity { get; set; }
  public ICollection<InventoryItem> InventoryItems { get; set; } = new List<InventoryItem>();
}