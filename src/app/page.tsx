import HeroSection from "@/components/pageComponent/home/HeroSectionSlider";
import Breadcrumbs from "@/components/pageComponent/home/Breadcrumbs";
import BrowseHotProperties from "@/components/pageComponent/home/BrowseHotProperties";
import WhyChooseOurProperties from "@/components/pageComponent/home/WhyChooseOurProperties";

export default function Home() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Properties", href: "/properties" }
  ];

  return (
    <div className="">
      <HeroSection />
      <div className="container">
        <Breadcrumbs items={breadcrumbItems} currentPage="Home Video" />
      </div>
      <BrowseHotProperties />
      <WhyChooseOurProperties />
    </div>
  );
}
