import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Coach from "./Coach";
import { EffectCoverflow } from "swiper/modules";
import "../CSS/Global.css";

export const Trainer = [
  {
    id: 1,
    coach: "Ahmed Kamal",
    description: "Bodybuilding & Strength",
    Experience: "8 years",
    sessions: "342+",
    contact: "+20 100 123 4567",
    atchivments: {
      one: "Power lifting",
      two: "Nutrition",
      three: "Bulking",
    },
  },
  {
    id: 2,
    coach: "Nour Mohamed",
    description: "Cardio & Weight Loss",
    Experience: "5 years",
    sessions: "218+",
    contact: "+20 101 234 5678",
    atchivments: {
      one: "HIT",
      two: "Fat Loss",
      three: "Cutting",
    },
  },
  {
    id: 3,
    coach: "Mohamed Hassan",
    description: "Functional Training",
    Experience: "6 years",
    sessions: "290+",
    contact: "+20 102 345 6789",
    atchivments: {
      one: "CrossFit",
      two: "Agility",
      three: "Core",
    },
  },
  {
    id: 4,
    coach: "Sarah Ali",
    description: "Women Fitness",
    Experience: "4 years",
    sessions: "180+",
    contact: "+20 103 456 7890",
    atchivments: {
      one: "Yoga",
      two: "Pilates",
      three: "Stretch",
    },
  },
  {
    id: 5,
    coach: "Omar Mostafa",
    description: "Strength Coach",
    Experience: "7 years",
    sessions: "310+",
    contact: "+20 104 567 8901",
    atchivments: {
      one: "Weightlifting",
      two: "Mass Gain",
      three: "Technique",
    },
  },
  {
    id: 6,
    coach: "Mohamed Hassan",
    description: "Fat Burn Specialist",
    Experience: "3 years",
    sessions: "150+",
    contact: "+20 105 678 9012",
    atchivments: {
      one: "Cardio",
      two: "HIT",
      three: "Endurance",
    },
  },
  {
    id: 7,
    coach: "Kareem Adel",
    description: "CrossFit Coach",
    Experience: "6 years",
    sessions: "270+",
    contact: "+20 106 789 0123",
    atchivments: {
      one: "Strength",
      two: "CrossFit",
      three: "Conditioning",
    },
  },
  {
    id: 8,
    coach: "Eslam Said",
    description: "Nutrition Coach",
    Experience: "5 years",
    sessions: "200+",
    contact: "+20 107 890 1234",
    atchivments: {
      one: "Meal Plan",
      two: "Cutting",
      three: "Bulking",
    },
  },
  {
    id: 9,
    coach: "Youssef Omar",
    description: "Performance Trainer",
    Experience: "9 years",
    sessions: "400+",
    contact: "+20 108 901 2345",
    atchivments: {
      one: "Strength",
      two: "Speed",
      three: "Agility",
    },
  },
];

export default function Coaches() {
  return (
    <div className="swipe">
      <Swiper
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={180}
        speed={600}
        navigation={true}
        allowTouchMove={false}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 1.5,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Navigation]}
      >
        {Trainer.map((el) => (
          <SwiperSlide key={el.id}>
            <Coach
              Name={el.coach}
              description={el.description}
              Experience={el.Experience}
              sessions={el.sessions}
              contact={el.contact}
              atchivments={el.atchivments}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
