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
        /// <remarks>
        /// Citation: Levereged the following for research and to solve specific problems during this assignment.
        /// De George, Andy, et al. “Tutorial: Create a Project Template.” Create a Project Template for Dotnet New - .NET | Microsoft Docs, Microsoft 2020, 12 Nov. 2020, 
        /// http://docs.microsoft.com/en-us/dotnet/core/tutorials/cli-templates-create-project-template
        /// 
        /// “Diagrams.net - Free Flowchart Maker and Diagrams Online.” Flowchart Maker and Online Diagram Software, 
        /// http://app.diagrams.net/ 
        /// 
        /// Mosalla, Hamid. “Initialize Base Class's Fields in Subclass Constructor in C#.” Stack Overflow, 27 Apr. 2015, 
        /// http://stackoverflow.com/questions/28246648/initialize-base-class-s-fields-in-subclass-constructor-in-c-sharp
        /// 
        /// Sharma, Lakshay. “Install Visual Studio Code.” TOOLSQA, 17 July 2020, 
        /// http://www.toolsqa.com/blogs/install-visual-studio-code
        /// 
        /// Shinobi, Debu, and Vikram K . “How to Add a New Project to Github Using VS Code.” Stack Overflow, 7 Dec. 2020, 
        /// http://stackoverflow.com/questions/46877667/how-to-add-a-new-project-to-github-using-vs-code
        /// 
        /// “Visual Paradigm.” UML Association vs Aggregation vs Composition, 11 Nov. 2020, 
        /// http://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-aggregation-vs-composition/
        /// </remarks>
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
            double textPrice = textArticle.getPrice();
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
