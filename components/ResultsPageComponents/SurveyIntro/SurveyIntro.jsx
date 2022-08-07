import { Text, Flex } from "@chakra-ui/react";
import WalkingMan from "../../../public/images/survey-intro-icons/walking-man.svg";
import Car from "../../../public/images/survey-intro-icons/car.svg";
import Carpool from "../../../public/images/survey-intro-icons/carpool.svg";
import Motorcycle from "../../../public/images/survey-intro-icons/motorcycle.svg";
import Train from "../../../public/images/survey-intro-icons/train.svg";
import TravelMethodBadge from "../SharedComponents/TravelMethodBadge";
import { SectionLayout } from "../SharedComponents/ContentLayouts";
import {
  ResultsHeader1,
  ResultsHeader3,
} from "../SharedComponents/ResultsHeaders";

export default function SurveyIntro() {
  return (
    <SectionLayout flexConfig={[1, 2]}>
      <Flex direction="column">
        <ResultsHeader1>Work Commute Survey Results</ResultsHeader1>
        <Text fontSize="20px">
          The results page provides the outcome from our recent survey. We have
          recently embarked on our 2026 challenge. We aim to increase the use of
          Active, Public and Shared commute methods to 20% or more. Currently,
          we are on our way to meeting the 2026 challenge. With our collective
          effort, we can improve our impact on the environment.
        </Text>
      </Flex>
      <Flex direction="column">
        <ResultsHeader3>
          Things to note before reading the results
        </ResultsHeader3>

        <Text fontSize="19px">
          Travel methods have been grouped into <b>Active-Public-Shared</b>{" "}
          methods and <b>Individual</b> methods:{" "}
        </Text>
      </Flex>
      <Flex direction="column" gap="10px">
        <Flex
          gap="30px"
          direction={["column", "row"]}
          justify={["center", "space-between"]}
          align="center"
        >
          <Flex direction="column">
            <Text fontWeight={600} color="#022640" fontSize="22px">
              Active/Public/Shared Methods:
            </Text>
            <Text color="#03385F">
              Lower carbon emission per kilometre travel per person
            </Text>
          </Flex>
          <Flex gap="30px">
            <TravelMethodBadge
              background="#E6EEF3"
              textColour="#044B7F"
              button={WalkingMan}
              description="Walk/Run/Cycle"
            />
            <TravelMethodBadge
              background="#E6EEF3"
              textColour="#044B7F"
              button={Train}
              description="Bus/Train"
            />
            <TravelMethodBadge
              background="#E6EEF3"
              textColour="#044B7F"
              button={Carpool}
              description="Taxi/Carpool"
            />
          </Flex>
        </Flex>
        <Flex
          gap="30px"
          direction={["column", "row"]}
          justify={["center", "space-between"]}
          align="center"
        >
          <Flex direction="column">
            <Text fontWeight={600} color="#022640" fontSize="22px">
              Individual Methods:
            </Text>
            <Text color="#03385F">
              Higher carbon emission per kilometre travel per person.
            </Text>
          </Flex>
          <Flex gap="30px">
            <TravelMethodBadge
              background="rgba(214, 158, 46, 0.36)"
              textColour="#044B7F"
              button={Car}
              description="Car"
            />
            <TravelMethodBadge
              background="rgba(214, 158, 46, 0.36)"
              textColour="#044B7F"
              button={Motorcycle}
              description="Motorbike"
            />
          </Flex>
        </Flex>
      </Flex>
    </SectionLayout>
  );
}
