import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Car } from "../../components/car";

const TopCarsContainer = styled.div`
  ${tw`
          w-full
          max-w-screen-2xl
          flex
          flex-col
          justify-center
          items-center
          px-4
          md:px-0
          mb-10
     `}
`;
const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;
const CarsContainer = styled.div`
  ${tw`
          w-full
          flex
          flex-wrap
          justify-center
          mt-7
          md:mt-10
     `}
`;

function TopCars() {
  const testCar: ICar = {
    name: "name",
    mileage: "mileage",
    thumbnailSrc:
      "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    dailyPrice: 1000,
    monthlyPrice: 5000,
    gearType: "gearType",
    gas: "gas",
  };
  const testCar2: ICar = {
    name: "name2",
    mileage: "mileage2",
    thumbnailSrc:
      "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    dailyPrice: 1002,
    monthlyPrice: 5002,
    gearType: "gearType2",
    gas: "gas2",
  };
  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      <CarsContainer>
        <Car {...testCar} />
        <Car {...testCar} />
        <Car {...testCar2} />
      </CarsContainer>
    </TopCarsContainer>
  );
}

export default TopCars;
