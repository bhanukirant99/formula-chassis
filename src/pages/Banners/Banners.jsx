import { SwipeCarousel } from "./SwipeCarousel";

export const Banners = () => {
  return (
    <div className="m-4 p-5 box-shadow border-1 h-100">
      <div className="heading-2">Banners</div>
      <div className="separator" />
      <div className="para-normal">
        Banners come handy in capturing user&apos;s attention.
      </div>
      <div className="heading-3">Full width banners</div>
      <div className="banner flex justify-center m-v-6">
        <img
          className="img-responsive"
          src="https://via.placeholder.com/854x200"
          alt="No image"
        />
      </div>
      <div className="separator m-v-8" />
      <div className="heading-3">Auto swiping banners</div>

      <SwipeCarousel
        images={[
          "https://via.placeholder.com/851x200",
          "https://via.placeholder.com/852x200",
          "https://via.placeholder.com/853x200",
          "https://via.placeholder.com/854x200",
        ]}
      />
    </div>
  );
};
