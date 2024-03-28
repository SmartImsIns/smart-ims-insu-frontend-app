import CarrierDetailsCard from "./CarrierDetailsCard";
import CarrierDetailsData from "../../../../mockJson/CustomerDashboard/CarrierDetailsData.json";

function CarrierDetailsContainer() {
  return (
    <>
      {CarrierDetailsData.map((Carrier, index) => (
        <CarrierDetailsCard key={index} data={Carrier} />
      ))}
    </>
  );
}

export default CarrierDetailsContainer;
