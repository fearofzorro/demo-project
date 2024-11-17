import Navbar from "./components/Navbar";
import heroImg from "./assets/pics/baruu1.jpg";
import { Info } from "lucide-react";
import { FaPlay } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import CardImage from "./components/CardImage";
import { images } from "./constants/images";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const Button = ({ children, variant, ...rest }) => {
    return (
      <button
        className={`flex items-center gap-2 p-3 px-7 rounded-lg font-semibold active:scale-90 duration-300 ease-in-out ${
          variant == "primary" && "bg-white text-black "
        } ${variant == "secondary" && "bg-white/30 text-white"}`}
        {...rest}
      >
        {children}
      </button>
    );
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main>
      <Navbar />
      <section
        className="relative bg-cover bg-center bg-no-repeat h-screen flex justify-center items-end"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="w-full max-w-screen-2xl px-5 lg:px-10 mb-[5%] flex flex-col gap-3 lg:gap-5 z-10 text-white ">
          <h1
            className="lg:text-4xl text-2xl font-bold lg:w-[50%]"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Happy Birthday Sweetests Girl I've Ever Seen
          </h1>
          <p
            className="text-sm lg:text-base lg:w-[40%]"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            Semoga hal baik selalu beriringan denganmu, Semoga semesta senantiasa berpihak padamu, Semoga jalanmu untuk mencapai masa depan yang cerah dipermudahkan, teruslah bertumbuh, teruslah melangkah & berbahagialah. Aku akan selalu bangga atas setiap proses yang sudah kamu lalui. I Will Always Support U From Afar
          </p>
          <p data-aos="fade-right" data-aos-duration="1300">
            Teken "Play" ini yaww
          </p>
          <div
            className="actions flex items-center gap-3"
            data-aos="fade-right"
            data-aos-duration="1400"
          >
            <Button variant={"primary"} onClick={() => setOpenModal(true)}>
              <FaPlay />
              Play
            </Button>
            <Button variant={"secondary"}>
              <Info size={20} />
              More Info
            </Button>
          </div>
        </div>
      </section>
      <section className="flex justify-center bg-black text-white">
        <div className="py-5 lg:py-10 flex flex-col gap-5 px-5 lg:px-10 max-w-screen-2xl">
          <h3 className="font-semibold text-xl">More to Explore : Us</h3>
          <section className=" grid grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-5">
            {images.map((image, idx) => (
              <CardImage src={image.src} key={idx} idx={idx} />
            ))}
          </section>
        </div>
      </section>
      <Modal setOpenModal={setOpenModal} openModal={openModal}>
        <div
          className="relative bg-cover bg-center bg-no-repeat h-[250px] lg:h-[450px] "
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundPosition: "center 40%",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black" />
        </div>
        <div className="flex flex-col gap-3 lg:gap-5 p-5 text-white">
          <h1 className="font-bold text-2xl">Happy Birthday, Ellyaa Maniezz </h1>
          <p>Hi Ellyaa </p>
          <p>
            Wishing You a Birthday Filled With Love, Fun, and Surprises!!!
            Jujur aku bingung mau ngomong apalagi. tapi yang bisa aku sampaikan ke kamu, jangan suka mendam semuanya sendirian, tetaplah jadi Ellyaa yang Lucu, Humoris, Lemah Lembut, Murah Senyum, dan Baik Hati. Dan satu lagi, Kalau dunia ga baik sama kamuu, kamuu harus baik sama diri kamu sendiri yaww!!! 
            Terimakasih juga atas semua kebaikan yang telah kamu tunjukkan kepadaku, aku sangat senang telah mengenal kamu dan aku berharap kita bisa tetap saling komunikasi seperti biasa. Maaf ya kalau aku nyebelin dan suka jahil hehehe, abis aku tuh suka lihat reaksi kamu pas di jailin
            pokok nya, hobby aku tuh ngacau kau lahh WKWKWKWKWKWK. 
          </p>
          <p>
            With all my love, I Love You In Every Universe
            <br />
            L.A. alias Mas Capil
          </p>
        </div>
      </Modal>
    </main>
  );
}

export default App;
