using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary.Models
{
    public class Inspection
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Comment { get; set; } = string.Empty;

        public int InspectionTypeId { get; set; }

        public InspectionType? InspectionType { get; set; }

        public int StatusId { get; set; }

        public Status? Status { get; set; }


    }
}
