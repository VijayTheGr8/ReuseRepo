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
            Console.WriteLine(tagTire.getTag());
            Console.WriteLine(tagTire.isPhrase());
            Console.WriteLine(tagChain.getTag());
            Console.WriteLine(tagChain.isPhrase());
            Console.WriteLine(tagCD.getTag());
            Console.WriteLine(tagCD.isPhrase());
            Console.WriteLine(tagCoaster.getTag());
            Console.WriteLine(tagCoaster.isPhrase());

            
        }
    }
}
