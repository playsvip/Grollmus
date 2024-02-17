using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProbeAufgabeAPI.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DeviceInformations",
                columns: table => new
                {
                    Uid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Id = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DeviceTypeId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Failsafe = table.Column<bool>(type: "bit", nullable: true),
                    TempMin = table.Column<int>(type: "int", nullable: true),
                    TempMax = table.Column<int>(type: "int", nullable: true),
                    InstallationPosition = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    InsertInto19InchCabinet = table.Column<bool>(type: "bit", nullable: true),
                    MotionEnable = table.Column<bool>(type: "bit", nullable: true),
                    SiplusCatalog = table.Column<bool>(type: "bit", nullable: true),
                    SimaticCatalog = table.Column<bool>(type: "bit", nullable: true),
                    AdvancedEnvironmentalConditions = table.Column<bool>(type: "bit", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DeviceInformations", x => x.Uid);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DeviceInformations");
        }
    }
}
