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
            var form = context.Request.Form;
            var title = form["title"];
            var text = form["text"];
            var date = form["date"];
            var files = form["files"];
            string filePath = "Files";
            int fileCount = Directory.GetFiles(filePath, "*.*", SearchOption.AllDirectories).Length;
            fileCount++;
            string txtFileName = Path.Combine(filePath, fileCount + ".txt");
            File.AppendAllLines(txtFileName, new string[] { title, text, date, files });
            context.Response.StatusCode = 201;
            await context.Response.WriteAsync("{'created': '123'");
        }

        public async Task GetById(HttpContext context)
        {

        }

    }
}
