using System;

namespace reuseRepo
{
    class Program
    {
        static void Main(string[] args)
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
            reuseRepo.Tag[] textTags = new reuseRepo.Tag[] {tagTire, tagChain};
            reuseRepo.Tag[] videoTags = new reuseRepo.Tag[] {tagCD, tagCoaster};


            reuseRepo.TextArticle textArticle = new reuseRepo.TextArticle("Text Article", "Arsal Khan", textTags, "memo" );
            reuseRepo.VideoArticle videoArticle = new reuseRepo.VideoArticle("Video Article", "Arsal Khan", textTags, "youtube link" );

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
