import Layout from "@/components/Layout";
import Image from "next/image";
import MainTitle from "@/components/project_detail/MainTitle";
import SectionTitle from "@/components/project_detail/SectionTitle";
import IntroText from "@/components/project_detail/IntroText";
import SectionParagraph from "@/components/project_detail/SectionParagraph";
import SectionList from "@/components/project_detail/SectionList";
import { motion } from "framer-motion";

const mainVariants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function Index() {
  return (
    <Layout>
      <motion.div
        variants={mainVariants}
        initial="initial"
        animate="animate"
        className="min-h-screen my-5"
      >
        <main>
          <MainTitle title="Grostore" />

          <SectionTitle title="Tanıtım" />

          <IntroText
            firstParagraph="Grostore, bir e-ticaret uygulamasıdır. Kullanıcılar ürünleri sepete ekleyebilir, sepeti görüntüleyebilir ve ödeme işlemini gerçekleştirebilir. Kullanıcılar ayrıca profil sayfasından önceki siparişlerini ve aktif siparişlerini görüntüleyebilir. Duruma göre karanlık modu kullanabilir. Fakat Grostore benim ilk büyük projem olduğu için bazı hataları mazur görün :)"
            secondParagraph="Admin paneline giriş yaparak ürünleri, kategorileri ve siparişleri yönetebilirsiniz. Gönderdiğiniz siparişler ilgili kullanıcının geçmiş siparişlerine eklenir. email: admin@test.com, şifre: admin123"
            stackList={[
              "React.js",
              "Javascript",
              "Tailwind CSS",
              "Redux Toolkit",
              "Firebase",
              "Semantik HTML",
              "Swiper.js",
            ]}
            link="https://tayfunetta.github.io/ai-grostore/"
            sourceLink="https://github.com/tayfunetta/ai-grostore"
          />
        </main>

        <section>
          <SectionParagraph
            title="Stack Açıklaması"
            text="Veritabanı olarak kolay, hızlı ve basit bir çözüm olduğu için Firebase kullandım. Sepete eklenen ürünleri bir global state olan Redux ile sakladım."
          />
        </section>

        <section>
          <SectionList
            title="Özellikler"
            list={[
              "Authentication",
              "Kategoriye göre ürün listeleme",
              "İşlem gerçekleştirme uyarıları",
              "Arama yapma",
              "Karanlık mod",
              "Form kontrolleri",
            ]}
          />
        </section>

        <Image
          src="/screenshots/grostore-2.png"
          width={1920}
          height={1080}
          className="text-container mt-5"
          alt="grostore"
        />

        <section>
          <SectionParagraph
            title="Karşılaştığım Zorluklar"
            text="Bu sitede en çok zorlandığım ve zamanımı alan kısım ürünlerin isimlerini ve açıklamalarını oluşturmak oldu. Bunu yapay zekaya yaptırdım. Yaklaşık 100 adet ürünün ismini ve açıklamasını oluşturmak için GPT-3'ü kullandım."
          />
        </section>

        <section>
          <SectionList
            title="Öğrendiklerim"
            list={[
              "Firebase ile authentication ve veritabanı kullanımı",
              "Reusable komponentlerin önemi",
              "Redux Toolkit ile global state yönetimi",
              "Karanlık mod ekleme",
              "Regex kullanarak searchbar oluşturma",
            ]}
          />
        </section>
      </motion.div>
    </Layout>
  );
}
