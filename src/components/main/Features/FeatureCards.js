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
        title="Brand Recognition"
        icon={brandRecognitionIcon}
        altText="A graph showing an increasing trend"
        description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
      />
      <FeatureCard
        title="Brand Recognition"
        icon={brandRecognitionIcon}
        altText="A graph showing an increasing trend"
        description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
      />
    </div>
  );
}

export default FeatureCards;
