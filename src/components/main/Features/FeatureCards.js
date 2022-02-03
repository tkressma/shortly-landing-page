import styles from "./FeatureCards.module.css";
import FeatureCard from "./FeatureCard";
import brandRecognitionIcon from "../../../assets/icon-brand-recognition.svg";
import detailedRecordsIcon from "../../../assets/icon-detailed-records.svg";
import fullyCustomizableIcon from "../../../assets/icon-fully-customizable.svg";

function FeatureCards() {
  return (
    <div className={styles["feature-cards"]}>
      <FeatureCard
        title="Brand Recognition"
        icon={brandRecognitionIcon}
        altText="A graph showing an increasing trend"
        description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
      />
      <FeatureCard
        title="Detailed Records"
        icon={detailedRecordsIcon}
        altText="A meter to keep track of some data."
        description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
      />
      <FeatureCard
        title="Fully Customizable"
        icon={fullyCustomizableIcon}
        altText="A marker, an ink pen, and a brush to signify full creative control."
        description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
      />
    </div>
  );
}

export default FeatureCards;
