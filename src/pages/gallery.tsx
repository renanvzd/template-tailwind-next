import { Parallax } from "@/components/Homepage/parallax";
import { Layout } from "@/components/Layouts/layout";
import Modal from "@/components/modal";


const Gallery = () => {
  return (
    <>
      <Layout
        title=""
        description=""
        content=""
      >
        <div className="w-full flex justify-center items-center">
          <Parallax title="Gallery" className="parallax-menu h-[55vh]" />
        </div>
        <Modal modalTitle="Food" />

      </Layout>
    </>
  );
};

export default Gallery;
