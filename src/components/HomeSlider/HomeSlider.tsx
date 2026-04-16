import Slider from "../Slider/Slider";
import image from "@images/download.jpeg"

export default function HomeSlider() {
    
      const mySlides = [
      {
        image: image,
        title: "Fresh Products Delivered to your Door",
        description: "Get 20% off your first order",
        buttonText: "Shop Now",
        
      },
      {
          image: image,
        title: "Premium Quality Guaranteed",
        description: "Fresh from farm to your table",
        buttonText: "Shop Now",
      },
      {
        image: image,
        title: "Fast & Free Delivery",
        description: "Same day delivery available",
        buttonText: "Order Now",
      }
    ];
  return (
    <div><Slider slides={mySlides} /></div>
  )
}
