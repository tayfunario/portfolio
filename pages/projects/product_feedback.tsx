import Layout from "@/components/Layout";
import Link from "next/link";
import { FaAngleDoubleRight, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

export default function () {
  return (
    <Layout>
      <div className="min-h-screen my-5">
        <main>
          <div className="text-container px-4 py-2">
            <h2 className="second-title">Product Feedback App</h2>
          </div>

          <div className="text-container w-3/4 mt-5 px-4 py-2">
            <h3 className="third-title">Tanıtım</h3>
          </div>

          <div className="text-container mt-2 px-4 py-2">
            <p className="text-sm mb-2">
              Product Feedback App; bir ürüne geri bildirim vermek, yapılan geri
              bildirimleri yorumlamak ve oylamak için geliştirdiğim bir Next.js
              web uygulamasıdır. Tasarım dosyasını farklı bir kaynaktan alıp,
              projeyi baştan sona kendim yazdım. Veritabanını ve back-end kodunu
              bir Cloud servisine yükledim. Front-end kısmını ise Vercel
              üzerinde yayınladım.
            </p>
            <p className="text-sm">
              Tekrar kullanılabilir komponentler ve stiller kullanarak
              geliştirme sürecini hızlandırdım ve kod bakımını kolaylaştırdım.
              Mobile-first yaklaşım kullanmam da arayüzü responsive hale
              getirmeyi hızlandırdı. Cypress kullanarak da E2E testleri yaptım.
            </p>

            <h4 className="font-black mt-3 underline underline-offset-2">
              Stack
            </h4>
            <ul className="flex flex-wrap gap-x-3 gap-y-1">
              <li className="stack-ul-li">Nextjs</li>
              <li className="stack-ul-li">TypeScript</li>
              <li className="stack-ul-li">Tailwind CSS</li>
              <li className="stack-ul-li">Framer-Motion</li>
              <li className="stack-ul-li">Nodejs</li>
              <li className="stack-ul-li">PostgreSQL</li>
              <li className="stack-ul-li">Render.com</li>
            </ul>

            <div className="flex justify-center mt-5">
              <Link
                href="https://product-feedback-ui.vercel.app/suggestions"
                className="project-btn flex justify-center items-center gap-x-2 bg-cyan-100 px-2 py-1 rounded-2xl hover:scale-110"
              >
                <span className="mr-px hover:underline underline-offset-2">
                  Siteyi Ziyaret Et
                </span>
                <FaExternalLinkAlt className="size-3" />
              </Link>
            </div>
          </div>
        </main>

        <section>
          <div className="text-container w-3/4 mt-5 px-4 py-2">
            <h3 className="third-title">Stack Açıklaması</h3>
          </div>

          <div className="text-container mt-2 px-4 py-2">
            <p className="text-sm mb-2">
              Nextjs, React tabanlı bir framework. Dolayısıyla React'ın sunduğu
              komponent yapılarıyla kod tekrarını azaltan komponentler
              oluşturdum. Nextjs'in getServerSideProps ve getStaticProps gibi
              fonksiyonlarıyla yükleme süreleni kısalttım ve sitenin SEO dostu
              olmasını sağladım. Ayrıca Nextjs'in Image ve Link komponentlerini
              kullanarak da resimleri ve linkleri optimize ettim.
            </p>
          </div>
        </section>

        <Image
          src="/screenshots/product_feedback-2.png"
          width={1920}
          height={1080}
          className="text-container mt-5"
          alt="Product Feedback App"
        />

        <section>
          <div className="text-container w-3/4 mt-5 px-4 py-2">
            <h3 className="third-title">Projenin Amacı</h3>
          </div>

          <div className="text-container mt-2 px-4 py-2">
            <p className="text-sm mb-2">
              Bu projeyi geliştirme amacım front-end ve back-end'i kombine
              ederek full-stack becerilerimi geliştirmek ve zor bir projenin
              altından kalkabildiğimi göstermekti. En sonda da projeyi deploy
              ederken biraz Cloud tecrübesi kazanmak istedim.
            </p>
          </div>
        </section>

        <section>
          <div className="text-container w-3/4 mt-5 px-4 py-2">
            <h3 className="third-title">Karşılaştığım Zorluklar</h3>
          </div>

          <div className="text-container mt-2 px-4 py-2">
            <p className="text-sm mb-2">
              İlk kez Cloud'da bir API ve veritabanı oluşturduğum için projeye
              bağlanırken biraz zorlandım fakat hallettim. Onun dışında geçmişte
              buna benzer projeler yaptığım için aşırı zorluk çekmedim.
            </p>
          </div>
        </section>

        <section>
          <div className="text-container w-3/4 mt-5 px-4 py-2">
            <h3 className="third-title">Öğrendiklerim</h3>
          </div>

          <div className="text-container mt-2 px-4 py-2">
            <ul className="list-disc list-inside text-sm mb-2">
              <li>Cloud teknolojileri hakkında biraz bilgi</li>
              <li>
                Server-side-rendering'teki "fallback" değerinin ne işe yaradığı
              </li>
              <li>
                getStaticProps ve getServerSideProps fonksiyonlarının farkı
              </li>
              <li>Front-end ve back-end'in entegrasyonu</li>
              <li>Reusable komponentlerin ve stillerin önemi</li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
}
