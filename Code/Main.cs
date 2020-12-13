using System;
using System.IO;
using Newtonsoft.Json;

namespace reuseRepo
{
    class Program
    {
        /// <summary>
        /// The Main is the entry point for thie program and does following:
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

            // 1. Reads and parses text and video articles from files along with tags
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

            /// 4. (over)Writes Text articles into textArticle.json and Video articals into VideoArticles.json
            //fileContent = textArticle.getJSONString();
            //Console.WriteLine(fileContent);
            //File.WriteAllText("C:\\Arsal\\ICS4U\\ReuseRepo\\Code\\Text Files\\textArticle.json", fileContent);
            fileContent = videoArticle.getJSONString();
            //Console.WriteLine(fileContent);
            File.WriteAllText("C:\\Arsal\\ICS4U\\ReuseRepo\\Code\\Text Files\\VideoArticle.json", fileContent);
        }


        static void MainTest(string[] args)
        {

            /// Step 1a: Create 2 tag for a text Article and two tags for a video article
            reuseRepo.Tag tagTire = new reuseRepo.Tag("tire");
            reuseRepo.Tag tagChain = new reuseRepo.Tag("Bike Chain");
            reuseRepo.Tag tagCD = new reuseRepo.Tag("CD");
            reuseRepo.Tag tagCoaster = new reuseRepo.Tag("Coaster");

            /// Step 1b: Printing the tags
            TestAndPrintTags(tagTire);
            TestAndPrintTags(tagChain);
            TestAndPrintTags(tagCD);
            TestAndPrintTags(tagCoaster);


            /// Step 2a: Create an array of text article tags
            reuseRepo.Tag[] textTags = new reuseRepo.Tag[] { tagTire, tagChain };
            reuseRepo.Tag[] videoTags = new reuseRepo.Tag[] { tagCD, tagCoaster };


            reuseRepo.TextArticle textArticle = new TextArticle("Text Article", "Arsal Khan", 4.9, textTags, "memo");
            reuseRepo.VideoArticle videoArticle = new VideoArticle("Video Article", "Arsal Khan", 21, textTags, "youtube link");

            /// Step 3: Print and Play text and video Articles
            textArticle.print();
            videoArticle.play();

        }

        static void TestAndPrintTags(reuseRepo.Tag tag)
        {
            /// Step 1b: Printing the tags
            Console.WriteLine(tag.getTag());
            Console.WriteLine(tag.isPhrase());
        }

    }
}
