using System;

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
        /// <param name="tags"> Initial array of tags of the article</param>
        /// <param name="videolink"> Initial video link of the article</param>
        public VideoArticle(string title, string author, Tag[] tags, string videolink) : base(title, author, tags)
        {
            this.videolink = videolink;
        }

        public void play()
        {
            Console.WriteLine("Play code to be written");
        }

    }
}
