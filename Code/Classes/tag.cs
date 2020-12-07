namespace reuseRepo
{
    /// <summary>
    /// A Tag object that can be assigned to an article
    /// </summary>
    /// <remarks>
    /// Part of /Diagram/Article.drawio
    /// </remarks>
    public class Tag
    {

        /// <summary>
        /// Stores Tag or Tag Phrase
        /// </summary>
        private string tag = "";

        /// <summary>
        /// The class constructor
        /// </summary>
        /// <param name="tag"> Initial Tag or Tag Phrase</param>
        public Tag(string tag)
        {
            this.tag = tag;
        }

        /// <summary>
        /// Returns the Tag
        /// </summary>
        /// <returns> The tag is a string </returns>
        public string getTag()
        {
            return this.tag;
        }

        /// <summary>
        /// Returns true if tag is multi-word phrase
        /// </summary>
        /// <returns> The isPhrase is a bool that returns true if tag is multi-word phrase. Otherwise, it returns false. </returns>
        public bool isPhrase()
        {
            return this.tag.Split(" ").Length > 1;
        }

    }
}
