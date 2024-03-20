import React, { useEffect, useState } from "react";
import attentionData from "../../mockJson/CustomerDashboard/AttentionCardData.json";
import AttentionCard from "./AttentionCard";

interface AttentionCardProps {
  headText: string;
  renewalPrice: string;
  dueDate: string;
  contentText: string;
}

const AttentionCardContainer: React.FC = () => {
  const [attentionCards, setAttentionCards] = useState<AttentionCardProps[]>(
    []
  );

  useEffect(() => {
    setTimeout(() => {
      setAttentionCards(attentionData);
    });
  }, []);

  return (
    <>
      {attentionCards.map((card, index) => (
        <AttentionCard key={index} {...card} />
      ))}
    </>
  );
};

export default AttentionCardContainer;
