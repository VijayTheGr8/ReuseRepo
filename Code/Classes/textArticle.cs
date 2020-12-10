using System;
using System.Text.Json;

namespace reuseRepo
{
    /// <summary>
    /// A text article object that inherits from Article and hold text memo.
    /// </summary>
    /// <remarks>
    /// Part of /Diagram/Article.drawio project
    /// </remarks>
    public class TextArticle : Article
    {

        /// <summary>
        /// Stores the text memo property of an article
        /// </summary>
        private string memo = "";

        /// <summary>
        /// The class constructor
        /// </summary>
        /// <param name="title"> Initial title of the article</param>
        /// <param name="author"> Initial author of the article</param>
        /// <param name="price"> Initial price of the article</param>
        /// <param name="tags"> Initial array of tags of the article</param>
        /// <param name="memo"> Initial text memo of the article</param>
        public TextArticle(string title, string author, double price, Tag[] tags, string memo) : base(title, author, price, tags)
        {
            this.memo = memo;
        }

        /// <summary>
        /// Prints the memo on console
        /// </summary>
        public void print()
        {
            Console.WriteLine(memo);
        }

        /// <summary>
        /// Creates JSON formatted text for this object
        /// </summary>
        public string getJSONString()
        {
            //used approach from the link below
            //https://stackoverflow.com/questions/17944802/forming-json-format-string
            Tag[] tags = base.getTags();
            object[] tagOjects = new object[tags.Length];

            for (int i = 0; i < tags.Length ; i++)
            {
                tagOjects[i] = new
                {
                    tag = tags[i].getTag()
                };
            }

            //used approach from the link below
            //https://stackoverflow.com/questions/17944802/forming-json-format-string
            string jsonString;
            jsonString = System.Text.Json.JsonSerializer.Serialize(new
            {
                title = base.getTitle(),
                author = base.getAuthor(),
                price = base.getPrice(),
                tags = tagOjects,
                memo = this.memo
            });
            return jsonString;
        }


    }
}
