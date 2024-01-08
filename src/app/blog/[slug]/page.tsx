import Image from "next/image";
import React from "react";

const SinglePostPage = () => {
  return (
    <div>
      <div className="flex gap-[100px]">
        <div className="relative h-[500px] flex-1">
          <Image src="/post.png" alt="" objectFit="contain" fill />
        </div>
        <div className="flex-1 flex-col">
          <MetaData />
          <h1 className="text-3xl font-bold">Title</h1>
          <p className="text-lg text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            provident asperiores repellat reiciendis molestias earum? Eveniet
            commodi nisi culpa odio corrupti esse, sint ad blanditiis eaque quos
            dolores non voluptatibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;

function MetaData() {
  return (
    <div className="mb-5">
      <div className="inline-flex mb-5 items-center gap-5">
        <div className="bg-gray-500 h-12 w-12 rounded-full relative overflow-hidden flex-shrink-0">
          <Image
            src="https://web-images.pixpa.com/PValGD85Fs1RI62OKGM-X74BJ1yBRfAsVBO_fKgLcgQ/rs:fit:1200:0/q:80/czM6Ly9waXhwYS5jb20vL2NvbS9hcnRpY2xlcy8xNTI1ODkxODc5LTg4NjM4Ni1zYW0tYnVycmlzcy00NTc3NDYtdW5zcGxhc2hqcGcuanBn"
            alt=""
            fill
            objectFit="cover"
          />
        </div>

        <div className="flex flex-col">
          <h2 className="text-lg">Avishek Verma</h2>
          <h3 className="text-gray-300">@avishekverma79</h3>
        </div>
      </div>
      <h2 className="font-bold">
        Published <span className="text-gray-400">01.01.2024</span>
      </h2>
    </div>
  );
}
