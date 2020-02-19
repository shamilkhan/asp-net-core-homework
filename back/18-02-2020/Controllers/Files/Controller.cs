using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;


namespace _18_02_2020.Controllers.Files
{
    public class FileController
    {
        public async Task Post(HttpContext context)
        {
            await context.Response.WriteAsync("Hello from Post");
        }
        public async Task Get(HttpContext context)
        {
            Console.WriteLine(context.Request.Body);
            await context.Response.WriteAsync("Get all Files");
        }
        public async Task GetById(HttpContext context)
        {
            await context.Response.WriteAsync("by id");
        }

        public async Task Delete(HttpContext context)
        {
            await context.Response.WriteAsync("Delete");
        }

    }
}
