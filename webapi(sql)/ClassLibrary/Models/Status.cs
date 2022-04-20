using System.ComponentModel.DataAnnotations;

namespace ClassLibrary.Models
{
    public class Status
    {
        public int Id { get; set; }
        
        [Required]
        [MaxLength(50)]
        public string Description { get; set; } = string.Empty;

    }
}
