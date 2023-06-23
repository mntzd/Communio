import Header from "../Header/Header";
import CardCarousel from "../CardCarousel/CardCarousel";
import Editorial from "../Editorial/Editorial";
import Banner from "../Banner/Banner";

export default function Layout() {
  return (
    <>
      <Header></Header>
      <CardCarousel></CardCarousel>
      <Banner></Banner>
      <Editorial></Editorial>
    </>
  );
}
