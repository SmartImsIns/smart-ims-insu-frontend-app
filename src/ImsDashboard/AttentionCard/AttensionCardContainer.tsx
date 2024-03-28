import React, { useEffect, useState } from "react";
import attentionData from "../../mockJson/CustomerDashboard/AttentionCardData.json";
import AttentionCard from "./AttentionCard";
import { Box } from "@mui/material";
import DynamicTextDisplay from "../commonComponents/DynamicTextDisplay";
import { AttentionCardStyles } from "./AttentionCardStyles";
import { attentionText } from "../../constants/Constants";

interface AttentionCardProps {
  headText: string;
  renewalPrice: string;
  dueDate: string;
  contentText: string;
  id: number;
}

const AttentionCardContainer: React.FC = () => {
  const [attentionCards, setAttentionCards] = useState<AttentionCardProps[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setAttentionCards(attentionData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <Box sx={AttentionCardStyles.Container}>
      <DynamicTextDisplay text={attentionText} />
      <Box>
        {attentionCards.map((card, id) => (
          <AttentionCard key={id} data={card} />
        ))}
      </Box>
    </Box>
  );
};

export default AttentionCardContainer;
