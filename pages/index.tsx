import Layout from "@/components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <Image
        src="/edited-businessman.svg"
        className="bg-white rounded-2xl p-3 scale-75"
        width={200}
        height={500}
        alt="illustration"
      />
    </Layout>
  );
}
