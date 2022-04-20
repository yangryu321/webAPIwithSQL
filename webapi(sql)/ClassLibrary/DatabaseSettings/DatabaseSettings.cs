using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary.DatabaseSettings
{
    public class DatabaseSettings : IDatabaseSettings
    {
        public string Connectionstring { get; set; } = string.Empty;
    }
}
