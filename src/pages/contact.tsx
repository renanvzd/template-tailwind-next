import { Layout } from "@/components/Layouts/layout";
import { HeaderSubpage } from "@/components/header-subpages";
import { HeaderHomepage } from "@/components/Homepage/header";
import { Parallax } from "@/components/Homepage/parallax";

const ContactPage = () => {
  return (
    <>
      <Layout
        title=""
        description=""
        content=""
      >
        <header className="bg-header flex items-center justify-center h-screen pb-12">
          <div className="bg-white font-serif mx-4 p-4 text-center md:p-8">
            <p className="italic text-sm">
              November 1, 2019
            </p>
            <h1 className="text-5xl uppercase">
              Article Title
            </h1>
            <p className="text-lg">
              Author Name
            </p>
          </div>
        </header>

        <div className="font-serif leading-normal mx-auto py-12 px-4 max-w-lg">

          <p className="mb-4 text-lg">Tempore, quaerat accusamus ad nostrum maiores numquam, ea nam sed reiciendis, eveniet perspiciatis. Eos nulla vel consectetur quo nesciunt aspernatur sint nemo cumque optio mollitia, veritatis, tenetur quibusdam eum natus.</p>
        </div>

        <div className="bg-quote container flex items-center justify-center h-screen mx-auto">
          <blockquote className="bg-black font-serif mx-4 p-4 text-center text-white md:p-8">
            <p className="font-bold italic text-3xl">
              &ldquo;Large, bold pull quote. Hats. Very good.&rdquo;
            </p>
          </blockquote>
        </div>

        <div className="font-serif leading-normal mx-auto py-12 px-4 max-w-lg">
          <p className="mb-4 text-lg">Mollitia temporibus maxime placeat culpa distinctio possimus, praesentium, assumenda quasi eum voluptate magni aspernatur aperiam. Eius voluptates rem eum, facilis inventore hic provident pariatur nam non! At odit iste cum.</p>
        </div>

      </Layout>
    </>
  );
};

export default ContactPage;
