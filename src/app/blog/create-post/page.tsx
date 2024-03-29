"use client";
import { addPost } from "@/utils/actions";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

const CreatePost = () => {
  const [imageUrl, setimageUrl] = useState("");

  return (
    <div className="grid grid-cols-2 gap-20">
      <div className="bg-gray-800/30 rounded-lg items-center text-center flex justify-center text-gray-300 relative overflow-hidden">
        {imageUrl !== "" ? (
          <Image
            src={imageUrl}
            alt="post-image"
            fill
            className="object-contain rounded-lg"
          />
        ) : (
          <button className="kTextButton">
            Click to choose image <br />
            or paste an image url
          </button>
        )}
      </div>

      <form action={addPost}>
        <input
          type="text"
          name="title"
          className="kTextfield font-semibold text-4xl mb-10"
          placeholder="Enter title ..."
          required
        />

        <input
          type="url"
          name="image"
          className="kTextfield font-semibold mb-10"
          placeholder="Add image url (Optional)"
          onChange={(e) => {
            var pat = /^https?:\/\//i;
            if (pat.test(e.target.value) || e.target.value === "") {
              setimageUrl(e.target.value);
            }
          }}
        />

        <textarea
          name="description"
          id="description"
          rows={6}
          className="kTextfield"
          placeholder="What's on your mind ..."
          required
        ></textarea>

        <button type="submit" className="kButton mt-10 w-full">
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
