using System;
using System.IO;
using Newtonsoft.Json;

/// <summary>
/// The namespace for entry class Program
/// </summary>
/// <remarks>
namespace reuseRepo
{
    class Program
    {
        /// <summary>
        /// The Main is the entry point for this program and does following:
        /// 1. Reads and parses text and video articles from JSON files along with tags objects   
        /// 2. Increases the price for Articles by 10%
        /// 3. Prints and Plays text and video articles respectively.
        /// 4. (over)Writes Text articles into textArticle.json and Video articals into VideoArticles.json
        /// </summary>
        static void Main()
        {
            string fileContent;
            TextArticle textArticle;
            VideoArticle videoArticle;

            // 1. Reads and parses text and video articles from JSON files along with tags
            fileContent = File.ReadAllText("C:\\Arsal\\ICS4U\\ReuseRepo\\Code\\Text Files\\textArticle.json");
            textArticle = Newtonsoft.Json.JsonConvert.DeserializeObject<TextArticle>(fileContent);

            fileContent = File.ReadAllText("C:\\Arsal\\ICS4U\\ReuseRepo\\Code\\Text Files\\videoArticle.json");
            videoArticle = Newtonsoft.Json.JsonConvert.DeserializeObject<VideoArticle>(fileContent);


            // 2. Increases the price for Articles by 10%
            double textPrice= textArticle.getPrice();
            Console.WriteLine("The price for text article, " + textArticle.getTitle() + ", is $" + textPrice.ToString("00.00"));
            textArticle.setPrice(textArticle.getPrice() * 1.1);
            double videoPrice = videoArticle.getPrice();
            Console.WriteLine("The price for the video article, " + videoArticle.getTitle() + ", is $" + videoPrice.ToString("00.00"));
            videoArticle.setPrice(videoArticle.getPrice() * 1.1);

            //3. Prints and Plays text and video articles respectively.
            textArticle.print();
            videoArticle.play();

            // 4. (over)Writes Text articles into textArticle.json and Video articals into VideoArticles.json
            fileContent = textArticle.getJSONString();
            File.WriteAllText("C:\\Arsal\\ICS4U\\ReuseRepo\\Code\\Text Files\\textArticle.json", fileContent);

            fileContent = videoArticle.getJSONString();
            File.WriteAllText("C:\\Arsal\\ICS4U\\ReuseRepo\\Code\\Text Files\\VideoArticle.json", fileContent);
        }

    }
}
