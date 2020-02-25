using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json;
using System.Text.Json.Serialization;
using Newtonsoft.Json;
using _18_02_2020.Models;

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
            string txtFileName = Path.Combine(filePath, fileCount + ".json");
            var article = new Article() {
                Id = fileCount,
                Title = title,
                Text = text,
                File = ""
            };
            var serializeArticle  = JsonConvert.SerializeObject(article);
            File.AppendAllLines(txtFileName, new string[] {serializeArticle });
            context.Response.StatusCode = 201;
            context.Response.ContentType = "application/json";
            await context.Response.WriteAsync(fileCount.ToString());
        }

        public async Task GetById(HttpContext context)
        {   
          
        }

        public async Task GetAll(HttpContext context)
        {
            string[] files = Directory.GetFiles("Files", "*.json", SearchOption.AllDirectories);
            var result = new string[files.Length];
            for(var i = 0; i < files.Length; i ++)
            {
                Console.WriteLine(i);
                var file = files[i];
                using (FileStream fstream = File.OpenRead(file))
                {
                    byte[] array = new byte[fstream.Length];
                    // асинхронное чтение файла
                    await fstream.ReadAsync(array, 0, array.Length);

                    string textFromFile = System.Text.Encoding.Default.GetString(array);
                    Console.WriteLine("This is text from file:::");
                    Console.WriteLine(textFromFile);
                    result[i] = textFromFile;
                }
            }
            var serializedArticles = JsonConvert.SerializeObject(result);
            Console.WriteLine(serializedArticles);
            context.Response.StatusCode = 200;
            context.Response.ContentType = "application/json";
            await context.Response.WriteAsync(serializedArticles);
        }
    }
}
