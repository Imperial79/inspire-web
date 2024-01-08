import Image from "next/image";
import React from "react";

const ContactPage = () => {
  return (
    <div className="flex gap-[100px]">
      <div className="flex-1 relative">
        <Image
          src="/contact.svg"
          alt=""
          fill
          className="h-[500px] object-contain"
        />
      </div>
      <div className="flex-1">
        <form action="" className="flex flex-col gap-5">
          <input type="text" className="kTextfield" placeholder="Name" />
          <input type="text" className="kTextfield" placeholder="Email" />
          <input
            type="number"
            maxLength={10}
            className="kTextfield"
            placeholder="Phone (Optional)"
          />
          <textarea className="kTextfield" rows={4} placeholder="Query ..." />

          <button className="kButton rounded-lg py-2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
