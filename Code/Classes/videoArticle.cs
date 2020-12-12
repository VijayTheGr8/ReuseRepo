using System;

/// <summary>
/// The namespace for VideoArticle class
/// </summary>
namespace reuseRepo
{
    /// <summary>
    /// A text article object that inherits from Article and hold text memo.
    /// </summary>
    /// <remarks>
    /// Part of /Diagram/Article.drawio project
    /// </remarks>
    public class VideoArticle : Article
    {

        /// <summary>
        /// Stores the text memo property of an article
        /// </summary>
        private string videolink = "";

        /// <summary>
        /// The class constructor
        /// </summary>
        /// <param name="title"> Initial title of the article</param>
        /// <param name="author"> Initial author of the article</param>
        /// <param name="price"> Initial price of the article</param>
        /// <param name="tags"> Initial array of tags of the article</param>
        /// <param name="videolink"> Initial video link of the article</param>
        public VideoArticle(string title, string author, double price, Tag[] tags, string videolink) : base(title, author, price, tags)
        {
            this.videolink = videolink;
        }

        /// <summary>
        /// Plays the video file link
        /// </summary>
        public void play()
        {
            Console.WriteLine("This code would play " + videolink);
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
                videolink = this.videolink
            });
            return jsonString;
        }

    }
}
