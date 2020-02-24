using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace _18_02_2020.Controllers.Articles
{
    public class ArticleController
    {
        public async Task Create(HttpContext context)
        {
            string requestBody = await new StreamReader(context.Request.Body).ReadToEndAsync();
            string filePath = "Files";
            int fileCount = Directory.GetFiles(filePath, "*.*", SearchOption.AllDirectories).Length;
            fileCount++;
            string txtFileName = Path.Combine(filePath, fileCount + ".txt");
            File.AppendAllLines(txtFileName, new string[] { requestBody });
            context.Response.ContentType = 'application/json';
            await context.Response.WriteAsync("test");
        }

        public async Task GetById(HttpContext context)
        {

        }

    }
}
