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
          <MainTitle title="Link Sharing App" />

          <SectionTitle title="Tanıtım" />

          <IntroText
            firstParagraph="Link Sharing App; sosyal medya hesaplarınızın linklerini tek bir yerde toplayıp, bu linkleri sergilemenizi sağlayan bir uygulamadır. Linkleri sürükleyerek sıralamayı değiştirebilirsiniz.Kişisel bilgilerinizi ve profil fotoğrafınızı ekleyerek arayüzü özelleştirebilirsiniz. Eklediğiniz linkleri düzenleyebilirsiniz."
            stackList={[
              "Nextjs",
              "TypeScript",
              "Tailwind CSS",
              "React DND Kit",
              "CSS Flexbox-Grid",
              "Semantik HTML",
              "Framer-Motion",
            ]}
            link="https://link-sharing-app-beta.vercel.app/"
            sourceLink="https://github.com/tayfunetta/link-sharing-app"
          />
        </main>

        <section>
          <SectionParagraph
            title="Stack Açıklaması"
            text="Uygulamayı parçalara ayırmayı kolaylaştırdığı ve SEO avantajı için bir React framework'ü olan Next.js ile projeyi geliştirdim. Tip güvenliği ve hataları daha kolay yakalayabilmem için Typescript kullandım. Tailwind CSS ile hızlıca stil oluşturdum. React DND Kit ile sürükle-bırak mekanizmasını ekledim."
          />
        </section>

        <section>
          <SectionList
            title="Özellikler"
            list={[
              "Drag-and-Drop",
              "Profili özelleştirme",
              "İşlem gerçekleştirme uyarıları",
              "Clipboard'a link kopyalama",
              "Form kontrolleri",
            ]}
          />
        </section>

        <Image
          src="/screenshots/link_sharing-2.png"
          width={1920}
          height={1080}
          className="text-container mt-5"
          alt="Link Sharing App"
        />

        <section>
          <SectionParagraph
            title="Projenin Amacı"
            text="Bu projeyi yapmaktaki en büyük amacım zor bir projenin altından kalkabildiğimi göstermek ve aşinalık kazanmaktı. Ayrıca Drag-and-Drop mekanizmasının nasıl eklendiğini öğrenmiş oldum."
          />
        </section>

        <section>
          <SectionParagraph
            title="Karşılaştığım Zorluklar"
            text="State'e değer olarak aynı değeri tekrar verdiğimde re-render tetiklenmiyordu. Bunu çözmek için yeni değeri bir obje içinde verdim. Böylece state'in referansı değişti ve re-render tetiklendi. İkinci olarak da Drag-and-Drop mekanizmasını eklemek için bir kütüphane kullanmam gerekti. Bu kütüphanenin nasıl kullanıldığını öğrenmek ve uygulamaya entegre etmek biraz zamanımı aldı."
          />
        </section>

        <section>
          <SectionList
            title="Öğrendiklerim"
            list={[
              "Drag-and-Drop mekanizmasının nasıl çalıştığı",
              "Reusable komponentlerin önemi",
              "Regex kullanımı",
            ]}
          />
        </section>
      </motion.div>
    </Layout>
  );
}
