import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Content,
  SlideImageContent,
  SlideImage,
  TextContent,
  TextSubContent,
  TextOne,
  TextTwo,
  TextThree,
} from "./style";

interface IProps {
  text: any;
  images: Array<any>;
}

const Carousel = ({ text, images }: IProps) => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb custom-slick",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Content>
      <Slider {...settings}>
        {images.map((item, key) => (
          <SlideImageContent key={key}>
            <SlideImage src={item.image} alt={item.alt} loading="lazy" />
          </SlideImageContent>
        ))}
      </Slider>
      <TextContent>
        <TextSubContent>
          <TextOne>{text.title}</TextOne>
          <TextTwo>{text.date}</TextTwo>
          <TextThree>{text.subtitle}</TextThree>
        </TextSubContent>
      </TextContent>
    </Content>
  );
};

export default Carousel;
