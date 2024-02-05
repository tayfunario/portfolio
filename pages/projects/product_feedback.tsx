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
          <MainTitle title="Product Feedback App" />

          <SectionTitle title="Tanıtım" />

          <IntroText
            firstParagraph="Product Feedback App; bir ürüne geri bildirim vermek, yapılan geri
            bildirimleri yorumlamak ve oylamak için geliştirdiğim bir Next.js web
            uygulamasıdır. Tasarım dosyasını farklı bir kaynaktan alıp, projeyi
            baştan sona kendim yazdım. Veritabanını ve back-end kodunu bir Cloud
            servisine yükledim. Front-end kısmını ise Vercel üzerinde yayınladım."
            secondParagraph="Tekrar kullanılabilir komponentler ve stiller kullanarak geliştirme
            sürecini hızlandırdım ve kod bakımını kolaylaştırdım. Mobile-first
            yaklaşım kullanmam da arayüzü responsive hale getirmeyi hızlandırdı.
            Cypress kullanarak da E2E testleri yaptım."
            stackList={[
              "Nextjs",
              "TypeScript",
              "Tailwind CSS",
              "Framer-Motion",
              "Nodejs",
              "PostgreSQL",
              "Render.com",
            ]}
            link="https://product-feedback-ui.vercel.app/suggestions"
            sourceLink="https://github.com/tayfunetta/product-feedback-ui"
          />
        </main>

        <section>
          <SectionParagraph
            title="Stack Açıklaması"
            text="Nextjs, React tabanlı bir framework. Dolayısıyla React'ın sunduğu
            komponent yapılarıyla kod tekrarını azaltan komponentler
            oluşturdum. Nextjs'in getServerSideProps ve getStaticProps gibi
            fonksiyonlarıyla yükleme süreleni kısalttım ve sitenin SEO dostu
            olmasını sağladım. Ayrıca Nextjs'in Image ve Link komponentlerini
            kullanarak da resimleri ve linkleri optimize ettim."
          />
        </section>

        <section>
          <SectionList
            title="Özellikler"
            list={[
              "Geribildirimleri sıralama",
              "Geribildirimleri filtreleme",
              "Geribildirimleri düzenleme. 'Status' özelliğini 'suggestion' harici bir değer seçerseniz geribildirim 'Roadmap' sayfasına taşınır.",
            ]}
          />
        </section>

        <Image
          src="/screenshots/product_feedback-2.png"
          width={1920}
          height={1080}
          className="text-container mt-5"
          alt="Product Feedback App"
        />

        <section>
          <SectionParagraph
            title="Projenin Amacı"
            text="Bu projeyi geliştirme amacım front-end ve back-end'i kombine
            ederek full-stack becerilerimi geliştirmek ve zor bir projenin
            altından kalkabildiğimi göstermekti. En sonda da projeyi deploy
            ederken biraz Cloud tecrübesi kazanmak istedim."
          />
        </section>

        <section>
          <SectionParagraph
            title="Karşılaştığım Zorluklar"
            text="İlk kez Cloud'da bir API ve veritabanı oluşturduğum için projeye
            bağlanırken biraz zorlandım fakat hallettim. Bir de bazı butonların stillerini yaparken zorlandım. Onu da ternary operatörü ve ES6'nın sağladığı template literal'ları kombine ederek yaptım."
          />
        </section>

        <section>
          <SectionList
            title="Öğrendiklerim"
            list={[
              "Cloud teknolojileri hakkında biraz bilgi",
              "Server-side-rendering'teki 'fallback' değerinin ne işe yaradığı",
              "getStaticProps ve getServerSideProps fonksiyonlarının farkı",
              "Front-end ve back-end'in entegrasyonu",
              "Reusable komponentlerin ve stillerin önemi",
            ]}
          />
        </section>
      </motion.div>
    </Layout>
  );
}
