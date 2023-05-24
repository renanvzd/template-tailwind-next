import React from "react";
import WhatsappImage from "@/assets/images/Whats.svg"
import Image from "next/image";

type NumberProps = {
  phone: string;
};

const Whatsapp = ({ phone }: NumberProps) => {
  return (
    <>
      <div>
        <a
          target="_blank"
          href={phone}
          title="Chama no zap"
          rel="noreferrer"
        >
          <Image src={WhatsappImage} alt="Whatsapp" className="fixed bottom-5 right-5 md:h-32 md:w-32 h-24 w-2h-24" />
        </a>
      </div>
    </>
  );
};

export { Whatsapp };