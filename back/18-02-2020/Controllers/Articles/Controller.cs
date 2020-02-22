using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _18_02_2020.Controllers.Articles
{
    public class ArticleController
    {
        public async Task Create(HttpContext context)
        {
            await context.Response.WriteAsync("Yes");
        }
    }
}
