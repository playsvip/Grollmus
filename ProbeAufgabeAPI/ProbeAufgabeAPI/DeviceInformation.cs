using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProbeAufgabeAPI
{
  public class DeviceInformation
  {
    [DatabaseGenerated(DatabaseGeneratedOption.Identity), Key]
    public int Uid { get; set; }
    public string? Id { get; set; }
    public string? Name { get; set; }
    public string? DeviceTypeId { get; set; }
    public bool? Failsafe { get; set; }
    public int? TempMin { get; set; }
    public int? TempMax { get; set; }
    public InstallationPositions? InstallationPosition { get; set; }
    public bool? InsertInto19InchCabinet { get; set; }
    public bool? MotionEnable { get; set; }
    public bool? SiplusCatalog { get; set; }
    public bool? SimaticCatalog { get; set; }
    public bool? AdvancedEnvironmentalConditions { get; set; }

  }

  public enum InstallationPositions
  {
    horizontal,
    vertical
  }
}
