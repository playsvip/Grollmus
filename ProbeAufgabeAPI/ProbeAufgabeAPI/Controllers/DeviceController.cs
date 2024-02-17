using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProbeAufgabeAPI.Data;

namespace ProbeAufgabeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeviceController : ControllerBase
    {
        private readonly DataContext _context;

        public DeviceController(DataContext context)
        {
            this._context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<DeviceInformation>>> GetAllDeviceInformation()
        {
            return Ok(await _context.DeviceInformations.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<DeviceInformation>>> CreateDevices(List<DeviceInformation> devices)
        {
            foreach (DeviceInformation device in devices)
            {
                _context.DeviceInformations.Add(device);
            }
            await _context.SaveChangesAsync();

            return Ok(await _context.DeviceInformations.ToListAsync());
        }

        [HttpDelete("{uid:int}")]
        public async Task<ActionResult<List<DeviceInformation>>> DeleteDevice(int uid)
        {
            var dbDevice = await _context.DeviceInformations.FindAsync(uid);
            if (dbDevice == null)
            {
                return BadRequest("Device not found!");
            }

            _context.DeviceInformations.Remove(dbDevice);
            await _context.SaveChangesAsync();

            return Ok(await _context.DeviceInformations.ToListAsync());
        }

        [HttpGet("{uid:int}")]
        public async Task<ActionResult<DeviceInformation>> GetDeviceInformation(int uid)
        {
            var dbDevice = await _context.DeviceInformations.FindAsync(uid);
            if (dbDevice == null)
            {
                return BadRequest("Device not found!");
            }

            return Ok(dbDevice);
        }

    }
}
