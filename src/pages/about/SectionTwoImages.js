import { socialMediaPhotos } from "./socialImages";

function SectionTwoImages() {
  // new var with last 9 images
  const SecondNinePhotos = socialMediaPhotos.filter((_, index) => index > 9);

  // displaying each of the 9 last images
  const socialPhotosTwo = SecondNinePhotos.map((image) => {
    return (
      <div className="col-4">
        <img src={image} alt="social media photos"></img>
      </div>
    );
  });

  return (
    <div className="sectionTwoImages">
      <div className="container">
        <div className="photographsDaily">
          <div className="row">{socialPhotosTwo}</div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwoImages;
