import Header from "../components/header/header";
import { getLocalData } from "../lib/getdata";
import Image from "next/image";
import Footer from "../components/footer/footer";
import Pricecard from "../components/pricecard/pricecard";
import Container from '@mui/material/Container';

export default async function Home() {
  const posts = await getLocalData()

  console.log(posts);

  return (
    <div>
      <Header />
      <Container>
        <div>
          <div className="home_div">
            <div className="part_one">
              <h2 className="heading_">Introducing The future of premium Content</h2>
              <p>
                Discover classic blockbusters games, video and apps. From ping
                pong clashes to pinball challenges to Amazing Waterfalls
                Zambia's videos, you’ll fall in love with content.
              </p>
            </div>
            <div className="part_two">
              <Image src="/WordGame.jpg" alt="image" width={500} height={500} />
            </div>
          </div>
          <div className="card_show">
            {posts.map((post, i) => {
              return (
                <div key={i} className="card">
                  <div>
                    <div className="img_container">
                      <Image src={`/${post.img}`} alt="image" width={300} height={180} className="card_img" />
                    </div>
                    <p className="game_name">{post.name}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div>
            <h2 className="heading_ mt">
              <b>Cupidmobi.com</b>
              – Best Place for premium content
            </h2>
            <p className="section__text">

              Looking for the best destination for premium content? Look no further!
              Our platform offers a curated selection of high-quality content
              tailored to your interests and preferences. From exclusive games and
              apps to in-depth videos, we strive to provide an unparalleled
              entertainment experience. With our user-friendly interface and
              extensive library of premium content, you'll discover a world of
              entertainment at your fingertips.

            </p>
            <p className="section__text">
              On our platform, we pride ourselves on being the ultimate destination
              for premium content enthusiasts. With a focus on quality and
              diversity, we continuously update our collection to ensure there's
              something for everyone.You'll find engaging and thought-provoking
              content that meets your needs.
            </p>
          </div>
        </div>
        <Pricecard />
      </Container>
      <Footer />
    </div>
  );
}
