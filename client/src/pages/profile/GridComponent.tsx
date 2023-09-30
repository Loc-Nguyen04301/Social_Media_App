import { useState } from "react";
import profileImage from "../../assets/images/profile.jpg";
import { Heart, MessageCircle, MoreHorizontal } from "react-feather";

const listPost = [
  { image: profileImage, like: 3, comment: 1, description: "abc", id: 1 },
  { image: profileImage, like: 0, comment: 0, description: "xyz", id: 2 },
];

interface Post {
  id: number;
  like: number;
  comment: number;
  image: string;
}

const GridComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [chosenPost, setChosenPost] = useState<Post>();

  const handleClickChosenPost = (post: Post) => {
    setChosenPost(post);
  };

  const handleClickCard = (post: Post) => {
    setIsModalOpen(true);
    handleClickChosenPost(post);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="mx-auto max-w-[935px]">
      <div className="grid grid-cols-3 gap-1">
        {listPost.map((post) => (
          <div
            className="card cursor-pointer"
            onClick={() => handleClickCard(post)}
            key={post.id}
          >
            <img src={post.image} />
            <div className="overlay hidden">
              <div className="flex h-full w-full items-center justify-center gap-x-6 text-white">
                <div className="flex items-center">
                  <Heart fill="#ffffff" />
                  <div className="ml-1">{post.like}</div>
                </div>
                <div className="flex items-center">
                  <MessageCircle fill="#ffffff" />
                  <div className="ml-1">{post.comment}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`${isModalOpen ? "overlay !fixed" : "hidden"} px-60 py-14`}
      >
        <button
          className="absolute right-5 top-3 z-50 font-semibold text-white"
          onClick={handleCloseModal}
        >
          X
        </button>
        <div className="flex">
          <div className="w-1/2">
            <img src={profileImage} />
          </div>
          <div className="w-1/2 bg-white">
            <div className="flex justify-between border-b-[1px] border-color-border p-4">
              <div className="flex items-center">
                <img src={profileImage} className="h-[32px] w-[32px]" />
                <span className="ml-5">cristiano</span>
              </div>
              <MoreHorizontal />
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img src={profileImage} className="h-[32px] w-[32px]" />
                  <div className="ml-5">
                    <div className="flex gap-x-4">
                      <span className="text-sm font-medium">cristiano</span>
                      <span className="text-sm font-normal">Vacation mood</span>
                    </div>
                    <div className="flex gap-x-4">
                      <span className="text-sm font-normal  text-sub-color-text">
                        16 giờ
                      </span>
                      <span className="text-sm font-medium text-sub-color-text">
                        6 lượt thích{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <Heart />
              </div>
            </div>

            <div className="p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img src={profileImage} className="h-[32px] w-[32px]" />
                  <div className="ml-5">
                    <div className="flex gap-x-4">
                      <span className="text-sm font-medium">cristiano</span>
                      <span className="text-sm font-normal">Vacation mood</span>
                    </div>
                    <div className="flex gap-x-4">
                      <span className="text-sm font-normal  text-sub-color-text">
                        16 giờ
                      </span>
                      <span className="text-sm font-medium text-sub-color-text">
                        6 lượt thích{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <Heart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridComponent;
