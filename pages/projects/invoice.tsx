import Layout from "@/components/Layout";
import Image from "next/image";
import MainTitle from "@/components/project_detail/MainTitle";
import SectionTitle from "@/components/project_detail/SectionTitle";
import IntroText from "@/components/project_detail/IntroText";
import SectionParagraph from "@/components/project_detail/SectionParagraph";
import SectionList from "@/components/project_detail/SectionList";
import { motion } from "framer-motion";

const mainVariants = {
  animate: { transition: { staggerChildren: 0.2 } },
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
          <MainTitle title="Invoice App" />

          <SectionTitle title="Tanıtım" />

          <IntroText
            firstParagraph="Invoice App; geçmiş ve aktif faturalarınızı kaydedebileceğiniz, düzenleyebileceğiniz ve takip edebileceğiniz bir web uygulamasıdır. Tasarım dosyasını farklı bir kaynaktan alıp, projeyi
            baştan sona kendim yazdım. Veriyi depolamak için ise sessionStorage kullandım."
            stackList={[
              "Nextjs",
              "TypeScript",
              "CSS Flexbox-Grid",
              "Tailwind CSS",
              "Framer-Motion",
            ]}
            link="https://invoice-app-xi-seven.vercel.app/"
            sourceLink="https://github.com/tayfunetta/invoice-app"
          />
        </main>

        <section>
          <SectionParagraph
            title="Stack Açıklaması"
            text="Routing işlemlerini kolaylaştırması ve SEO avantajı dolayısıyla React yerine Next.js tercih ettim. Javascript'in tip güvenli olmaması ve kod bakımını zorlaştırması dolayısıyla Typescript kullandım. CSS Flexbox-Grid ile hızlıca responsive bir arayüz oluşturdum. Arayüzü mobil öncelikli olarak geliştirmem de bunu destekledi. Tailwind CSS ile de stilleri yazdım. Framer-Motion ile de animasyonlar ekledim."
          />
        </section>

        <section>
          <SectionList
            title="Özellikler"
            list={[
              "Karanlık mod",
              "Faturayı taslak olarak kaydetme",
              "Ödenme durumuna göre faturaları filtreleme",
              "Form kontrolleri",
            ]}
          />
        </section>

        <Image
          src="/screenshots/invoice-2.png"
          width={1920}
          height={1080}
          className="text-container mt-5"
          alt="Invoice App"
        />

        <section>
          <SectionParagraph
            title="Projenin Amacı"
            text="Kendimi sınamak için yaptığım bu projeyi insanlar geçmiş faturalarını çekmecede saklamak, bekleyen faturalarını buzdolabına takmak yerine kullanabilir. Tabii bir veritabanı bağlantısı yaptıktan sonra :)"
          />
        </section>

        <section>
          <SectionParagraph
            title="Karşılaştığım Zorluklar"
            text="Fatura düzenleme ekranında en altta bulunan listenin oluşturulması biraz zordu. Onu CSS Grid'den faydalanarak oluşturdum. Input elementlerinin boş bırakıldığında doğru şekilde stillenmesi biraz uğraştırdı. Orada da onChange, onFocus, onBlur gibi dahili listener'lar kullanarak çözdüm. Bunlar dışında Typescript ve reusable komponentler sayesinde pek zorluk yaşamadım."
          />
        </section>

        <section>
          <SectionList
            title="Öğrendiklerim"
            list={[
              "React Custom Hooks kullanımını",
              "Reusable komponentlerin ve stillerin önemi",
              "Javascript'teki 'Outerloop' kavramı",
              "Template literals ve ternary oparetörü kombine ederek elementleri dinamik olarak stilleme",
            ]}
          />
        </section>
      </motion.div>
    </Layout>
  );
}
